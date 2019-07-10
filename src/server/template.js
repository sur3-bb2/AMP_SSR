export default ({ body, title, buy_url }) => {
    return `
    <!DOCTYPE html>
    <html amp lang="en">
      <head>
        <meta charset="utf-8">
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <script async custom-element="amp-list" src="https://cdn.ampproject.org/v0/amp-list-0.1.js"></script>
        <script async custom-template="amp-mustache" src="https://cdn.ampproject.org/v0/amp-mustache-0.1.js"></script>
        <title>${title}</title>
        <link rel="canonical" href=${buy_url} />
        <link rel="icon" type="image/png" href="https://img1-secure.targetimg1.com/wcsstore/marketing/com/mobile/images/template/favicon-32x32.png" sizes="32x32">
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
        <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
        <style amp-custom>
          body {
      			font-family: "Targetica","Helvetica Neue","Helvetica","Arial","sans-serif";
      		}
          h1,h2,h3,h4,h5,h6,ul {
            margin: 0;
            padding: 0;
          }
          .h-standardSpacingTop {
              margin-top: 15px;
          }
          .standardSpacingBottom {
      			padding-bottom: 15px;
      		}
      		.tightSpacingBottom {
      			padding-bottom: 10px;
      		}
      		.standardSpacingTop {
      			padding-top: 15px;
      		}
      		.tightSpacingTop {
      			padding-top: 10px;
      		}
      		.textDark {
      			color: #666666;
      		}
      		.textDarkest {
      			color: #333333;
      		}
      		.textRed {
      			color: #cc0000;
      		}
          .textGray {
            color: #888;
          }
      		.align-middle {
      			vertical-align: middle;
      		}
          .h-text-md  {
            font-size:14px;
          }
          .full-width {
      			width: 100%;
      		}
          .text-align-center {
            text-align: center;
          }
      		.btn {
      			border-radius: 5px;
          	border: none;
          	margin-top: 5px;
          	font-size: 14px;
          	cursor: pointer;
      		}
          .btn-sm {
            display: inline-block;
            padding: 10px 15px;
            font-size: 12px;
            line-height: 1.5;
            border-radius: 3px;
            margin-top: 10px;
            text-decoration: none;
          }
      		.btn-default {
      			color: #333;
      	    background-color: #fff;
      	    border: #888 1px solid;

      		}
      		.btn-primary {
      			color: #fff;
      			background-color: #c00;
      		}
      		.product-atc {
      			height: 49px;
      		}
          .rating {
            width: 74px;
            float: left;
            position: relative;
          }
          .rating-section {
            width: 100%;
            display: inline-block;
            margin-top: 10px;
          }
          .rating-score {
            overflow: hidden;
            position: absolute;
            top: 0;
          }
          .rating-score-0 {
            width: 0%;
          }
          .rating-score-1 {
            width: 20%;
          }
          .rating-score-2 {
            width: 40%;
          }
          .rating-score-3 {
            width: 60%
          }
          .rating-score-4 {
            width: 80%
          }
          .rating-score-5 {
            width: 100%
          }

      		.product-view-details {
      			height: 49px;
      			line-height: 3;
      			display: inline-block;
      			text-align: center;
      		}
          .product-wrapper {
            padding: 10px;
          }
          .price {
            font-size: 25px;
            font-weight: bold;
          }
          .promo {
            font-size:14px;
            position: relative;
          }
          .promo-container {
            position: relative;
            padding-left: 24px;
          }
          .promo:before {
            content: '';
            display: block;
            position: absolute;
            top: 2px;
            left: 0;
            width: 14px;
            height: 14px;
            background-size: contain;
            background-repeat: no-repeat;
            background-image: url("data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3C!DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20%20viewBox%3D%220%200%2032%2032%22%20enable-background%3D%22new%200%200%2032%2032%22%20xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%20%3Cpath%20fill%3D%22%23CC0000%22%20d%3D%22M8.9%2C0.5C7.9%2C0.2%2C6.4%2C0.6%2C5.6%2C1.4L1.4%2C5.6C0.6%2C6.3%2C0.2%2C7.9%2C0.5%2C8.9L2%2C14.6c0.3%2C1.1%2C1.1%2C2.6%2C1.9%2C3.3%20%20l12.7%2C12.7c0.8%2C0.8%2C2.1%2C0.8%2C2.8%2C0l11.1-11.1c0.8-0.8%2C0.8-2.1%2C0-2.8L17.9%2C3.9c-0.8-0.8-2.3-1.6-3.3-1.9L8.9%2C0.5z%20M10.4%2C10.4%20%20c-1.2%2C1.2-3.2%2C1.2-4.4%2C0c-1.2-1.2-1.2-3.2%2C0-4.4c1.2-1.2%2C3.2-1.2%2C4.4%2C0C11.7%2C7.3%2C11.7%2C9.2%2C10.4%2C10.4z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
          }
          .accordionCard {
            position: relative;
            border: 1px solid #d6d6d6;
            border-radius: 4px;
            height: 120px;
            padding: 15px;
            padding-top: 10px;
            cursor: pointer;
            overflow: hidden;
          }
          .details-title {
            font-size: 15px;
            font-weight: normal;
            line-height: 1.2;
            color: #333;
            margin: 0;
            width: 100%;
          }
          .bullets-wrapper {
            padding: 0;
          }
          .bullets-wrapper li {
            font-size: 13px;
            margin-left: 10px;
            margin-bottom: 5px;
          }
          header {
            background: #c00;
            height: 50px;
          }
          header a {
            height: 50px;
            width: 100%;
            display: inline-block;
            text-align: center;
            padding-top: 8px;
          }
          .product-box {
            display: flex;
            border: 1px solid #d6d6d6;
            border-radius: 4px;
            padding: 10px;
          }
          .product-box-image {
            width: 150px;
          }
          .product-box-description price {
            font-size: 19px;
          }
          amp-accordion section[expanded] .show-more {
            display: none;
          }
          amp-accordion section:not([expanded]) .show-less {
            display: none;
          }
          .nested-accordion h4 {
            font-size: 14px;
            background-color: #ddd;
          }
          amp-accordion#hidden-header section[expanded] h4 {
            border: none;
          }
        </style>
      </head>

      <body>
        <div id="root">${body}</div>
      </body>
    </html>
  `;
}
