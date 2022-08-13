const addCorsHeaders = (res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Max-Age', 2592000); // 30 days
};

const corsResponse = (req, res) => {
  addCorsHeaders(res);

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }
};

module.exports = {
  corsResponse,
  addCorsHeaders,
};
