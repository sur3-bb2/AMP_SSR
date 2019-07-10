import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import getProductAndCategoryDetails from '../api/getProductAndCategory';
import { parseTCIN } from '../api/urlhelper';
import PLAContainer from '../component/index';
import template from './template';

const app = express();

app.get('/c/s/www.target.com/p/*', (req, res, next) => {
    const tcin = parseTCIN(req.url);
    const cacheControlHeaderValue = 'max-age=6000,stale-while-revalidate=600';

    getProductAndCategoryDetails(tcin)
        .then(parsed => {
            const appString = ReactDOMServer.renderToStaticMarkup(<PLAContainer {...parsed} />);
            const templateString = template({
                body: appString,
                title: parsed.productDetails.title,
                buy_url: parsed.productDetails.buy_url
            });

            res.set('Cache-Control', cacheControlHeaderValue);
            res.send(templateString);
        })
        .catch(err => handleError(err, req, res, next));
});

const handleError = ((err, req, res, next) => {
    res.status(err.status || 500).send({
        message: err.message || err,
        error: {}
    });
});

export default app;