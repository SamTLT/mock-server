const http = require('http');
const fs = require('fs');
const path = require('path');

const { getUrlData, getStatusCode } = require('./utils');
const { corsHeaders, corsResponse } = require('./middleware');
const { successResponse, errorResponse } = require('./responses');

const PORT = 5555;
const DEFAULT_STATUS_CODE = 200;
const DEFAULT_TIMEOUT = 0;
const API_PREFIX = '/mock-server/api/v1/';

const requestListener = (req, res) => {
  corsResponse(req, res);

  const {
    id,
    timeout: timeoutFromQuery,
    ['status-code']: statusFromQuery,
  } = getUrlData(req, API_PREFIX);

  const timeout = timeoutFromQuery ?? DEFAULT_TIMEOUT;

  const statusCode = statusFromQuery
    ? getStatusCode(statusFromQuery)
    : DEFAULT_STATUS_CODE;

  if (id && req.url.includes(API_PREFIX)) {
    setTimeout(() => {
      const data = {
        id,
        statusCode,
        timeout,
      };
      
      let response = successResponse(data);

      if (statusCode >= 400) {
        response = errorResponse(data);
      }

      res.writeHead(statusCode, corsHeaders);
      res.end(JSON.stringify(response));
    }, timeout);
  } else {
    res.writeHead(200, corsHeaders);
    res.end(fs.readFileSync(path.resolve(__dirname, '../README.md')));
  }
};

const server = http.createServer(requestListener);
server.listen(PORT);
