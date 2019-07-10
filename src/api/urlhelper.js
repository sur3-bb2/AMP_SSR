const parseTCINRegex = /\/A-([0-9]+)/;

export const parseTCIN = function(path) {
    if (!path) return '';
    const matches = path.match(parseTCINRegex);

    return matches ? matches[1] : '';
};