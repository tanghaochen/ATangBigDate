import request from '../../assets/utils/request'

export function production_random_verification_code() {
  return request({
    url: 'lty-user-server/user/getVerificationCode',
    method: 'post',
  })
}
export function verification_code_login(loginAccount,pwd,code,inputCode,loginType,clientType) {
  return request({
    url: 'lty-user-server/user/userLoginByVerificationCode',
    method: 'post',
    data:{loginAccount,pwd,code,inputCode,loginType,clientType}
  })
}
