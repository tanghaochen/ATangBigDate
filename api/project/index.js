import request from '../../../assets/utils/request'


/**
 * 项目列表
 * @param data
 * @returns {AxiosPromise}
 */
export function projectList(data) {
  return request({
    url: '/zhjs-api-server/ltystat/projectDetail/getStatProjectList',
    method: 'post',
    data
  })
}


/**
 * 项目类型词典
 * @param data
 * @returns {AxiosPromise}
 */
export function classList(data) {
  return request({
    url: '/zhjs-api-server/apiservice/select/getProjectClassList',
    method: 'post',
    data
  })
}
