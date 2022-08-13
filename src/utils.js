const getStatusCode = (status) => {
  return status >= 200 && status < 600 ? status : 200;
};

const getInput = (input) => {
  console.log('input', input);
  return !isNaN(+input) ? +input : undefined;
};

const getUrlData = (url) => {
  const [_, id, timeout, statusCode] = url.split('/').map(getInput);

  return {
    id,
    timeout,
    statusCode,
  };
};

module.exports = {
  getStatusCode,
  getInput,
  getUrlData,
};
