const optionsResponse = (req) => {
  const headers = {
    'Access-Control-Allow-Origin': '*' /* @dev First, read about security */,
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000, // 30 days
    /** add other headers as per requirement */
  };

  if (req.method === 'OPTIONS') {
    res.writeHead(204, headers);
    res.end();
    return;
  }
};

module.exports = {
  optionsResponse,
};
