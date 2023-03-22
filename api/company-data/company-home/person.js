import request from '../../../../assets/utils/request'


/**
 * 人员详情
 * @param data
 * @returns {AxiosPromise}
 */
export function personDetails(data) {
  return request({
    url: '/lxb-business/lxbstat/worker/getWorkerDetailsByUserUuid',
    method: 'post',
    data,
  })
}


/**
 * 就业详细信息
 * @param data
 * @returns {AxiosPromise}
 */
export function employMentDetails(data) {
  return request({
    url: '/lxb-business/lxbstat/worker/getEmploymentDetails',
    method: 'post',
    data,
  })
}


/**
 * 人员考勤列表
 * @param data
 * @returns {AxiosPromise}
 */
export function attendList(data) {
  return request({
    url: '/lxb-business/lxbstat/worker/getAttendListByCompanyUser',
    method: 'post',
    data,
  })
}

/**
 * 人员工资列表
 * @param data
 * @returns {AxiosPromise}
 */
export function wagesList(data) {
  return request({
    url: '/lxb-business/lxbstat/worker/getStatWagesListByCompanyUser',
    method: 'post',
    data,
  })
}

/**
 * 查看人员工资卡
 * @param data
 * @returns {AxiosPromise}
 */
export function checkWagesCards(data) {
  return request({
    url: '/lxb-business/lxbstat/worker/getWorkerBankCard',
    method: 'post',
    data,
  })
}


/**
 * 合同图片查看
 * @param data
 * @returns {AxiosPromise}
 */
export function checkContractImg(data) {
  return request({
    url: '/lxb-business/lxbstat/worker/getWorkerContractList',
    method: 'post',
    data,
  })
}

