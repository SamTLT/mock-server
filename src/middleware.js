const corsHeaders = {
  'Access-Control-Allow-Origin': '*' /* @dev First, read about security */,
  'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
  'Access-Control-Max-Age': 2592000, // 30 days
  /** add other headers as per requirement */
};

const corsResponse = (req, res) => {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, corsHeaders);
    res.end();
    return;
  }
};

module.exports = {
  corsResponse,
  corsHeaders,
};
