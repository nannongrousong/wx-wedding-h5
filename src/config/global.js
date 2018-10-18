const isDebug = false;
const debugApiPrefix = 'http://localhost:10003';
const onlineApiPrefix = 'https://nannongrousong.xin/wedding/api';

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