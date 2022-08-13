const http = require('http');
const PORT = 5555;

const getStatusCode = (status) => {
  if (!status) {
    return 200;
  }

  return status >= 200 && status < 600 ? status : 200;
};

const requestListener = function (req, res) {
  const [_, id, timeout, code] = req.url.split('/').map(item => +item);
  const statusCode = getStatusCode(code);

  if (id && id !== NaN) {
    setTimeout(() => {
      const responseData = {
        message: `Your id is ${id}, timeout is ${timeout}ms, statusCode is ${statusCode}`,
      };
      res.writeHead(statusCode);
      res.end(JSON.stringify(responseData));
    }, timeout);
  } else {
    res.writeHead(200);
    res.end(`## Get Data 
    
    URL: /id/{?timeout}

    Parameters

         id - Request id
         timeout (optional) - Server response timeout
    `);
  }
};

const server = http.createServer(requestListener);
server.listen(PORT);
