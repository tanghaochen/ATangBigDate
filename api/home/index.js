import request from '../../../assets/utils/data'


/**
 * 项目开通率
 * @param data
 * @returns {AxiosPromise}
 */
export function projectAccount(data) {
  return request({
    url: '/statisticsProject/projectSpecialBankAccountOnlineDistribution',
    method: 'get',
    params: {
      areaId: data.areaId,
      classId: data.classId
    }
  })
}


/**
 * 每月新增项目统计
 * @param data
 * @returns {AxiosPromise}
 */
export function projectMonthNum(data) {
  return request({
    url: '/statisticsProject/projectItemTotalNumGroupMonth',
    method: 'get',
    params: {
      areaId: data.areaId,
      classId: data.classId
    }
  })
}


/**
 * 累计发放工资金额
 * @param data
 * @returns {AxiosPromise}
 */
export function totalWages(data) {
  return request({
    url: '/statisticsWages/totalWages',
    method: 'get',
    params: {
      areaId: data.areaId,
      classId: data.classId
    }
  })
}


/**
 * 项目总数
 * @param data
 * @returns {AxiosPromise}
 */
export function totalProject(data) {
  return request({
    url: '/statisticsProject/projectItemAndStatusTotalNum',
    method: 'get',
    params: {
      areaId: data.areaId,
      classId: data.classId
    }
  })
}


/**
 * 工资发放动态
 * @param data
 * @returns {AxiosPromise}
 */
export function wagesPaymentStatus(data) {
  return request({
    url: '/statisticsWages/topNewSalaryPaymentStatus',
    method: 'get',
    params: {
      areaId: data.areaId,
      classId: data.classId
    }
  })
}


/**
 * 户籍性别统计
 * @param data
 * @returns {AxiosPromise}
 */
export function householdList(data) {
  return request({
    url: '/worker/domicileList',
    method: 'get',
    params: {
      areaId: data.areaId,
      classId: data.classId
    }
  })
}


/**
 * 项目总数及各状态总数分布根据行业类别
 * @param data
 * @returns {AxiosPromise}
 */
export function groupClass(data) {
  return request({
    url: '/statisticsProject/projectItemAndStatusTotalNumGroupClass',
    method: 'get',
    params: {
      areaId: data.areaId,
      classId: data.classId
    }
  })
}


/**
 * 退出登录
 * @returns {AxiosPromise}
 */
export function loginOutApi() {
  return request({
    url: '/sso/layout',
    method: 'get',
  })
}
