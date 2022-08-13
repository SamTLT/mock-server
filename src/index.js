const http = require('http');
const fs = require('fs');
const path = require('path');

const { getUrlData, getStatusCode } = require('./utils');
const { optionsResponse } = require('./responses');

const PORT = 5555;

const DEFAULT_STATUS_CODE = 200;
const DEFAULT_TIMEOUT = 0;

const requestListener = (req, res) => {
  optionsResponse(req);

  const { id, timeout, statusCode } = getUrlData(req.url);

  const timeoutToShow = timeout ? timeout : DEFAULT_TIMEOUT;

  const statusCodeToUse = statusCode
    ? getStatusCode(statusCode)
    : DEFAULT_STATUS_CODE;

  if (id) {
    setTimeout(() => {
      const responseData = {
        message: `Your id is ${id}, timeout is ${timeoutToShow} ms, statusCode is ${statusCodeToUse}`,
      };
      res.writeHead(statusCodeToUse);
      res.end(JSON.stringify(responseData));
    }, timeoutToShow);
  } else {
    res.writeHead(200);
    res.end(fs.readFileSync(path.resolve(__dirname, '../Readme.md')));
  }
};

const server = http.createServer(requestListener);
server.listen(PORT);
