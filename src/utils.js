const url = require('url');

const getStatusCode = (status) => {
  return status >= 200 && status < 600 ? status : 200;
};

const getId = (id) => {
  return !isNaN(+id) ? +id : undefined;
};

const getUrlData = (req, apiPrefix) => {
  const id = req.url.replace(apiPrefix, '')
    .split('/')[0]
    .split('?')
    .map(getId)[0];
  const queryObject = url.parse(req.url, true).query;

  return {
    id,
    ...queryObject,
  };
};

module.exports = {
  getStatusCode,
  getId,
  getUrlData,
};
