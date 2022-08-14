const successResponse = ({ id, timeout, statusCode }) => ({
  message: `Your id is ${id}, timeout is ${timeout} ms, response status code is ${statusCode}`,
});

const errorResponse = ({ id, timeout, statusCode }) => ({
  error: {
    status: statusCode,
    timeout,
    id,
  },
});

module.exports = {
  successResponse,
  errorResponse,
};
