const isDebug = true;
const debugApiPrefix = 'http://localhost:81';
const onlineApiPrefix = '';

const getApiUrl = () => {
  const apiPrefix = isDebug ? debugApiPrefix : onlineApiPrefix;
  return {
    LIST_BARRAGE: apiPrefix + '/barrage',
    LIST_SIGN_RECORD: apiPrefix + '/sign/all'
  }
}

export {
  getApiUrl
};