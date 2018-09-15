const isDebug = true;
const debugApiPrefix = 'http://localhost:81';
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