import request from '../../../assets/utils/request'
import dataRequest from '../../../assets/utils/data'

/**
 * 企业列表
 * @param data
 * @returns {AxiosPromise}
 */
export function companyList(data) {
  return request({
    url: '/zhjs-api-server/ltystat/company/getProjectBindCompanyListPage',
    method: 'post',
    data
  })
}


/**
 * 获取企业详情和绑定的项目列表
 * @param data
 * @returns {AxiosPromise}
 */
export function companyDetails(data) {
  return request({
    url: '/zhjs-api-server/ltystat/company/getCompanyDetailAndBindProjectList',
    method: 'post',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    params: {
      companyId: data.companyId,
      companyType: data.companyType
    }
  })
}


/**
 * 企业总数
 * @param data
 * @returns {AxiosPromise}
 */
export function companyTotalNum(data) {
  return dataRequest({
    url: '/company/totalNumber',
    method: 'get',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    params: {
      areaId: data.areaId,
      classId: data.classId
    }
  })
}

/**
 * 每月新增企业统计
 * @param data
 * @returns {AxiosPromise}
 */
export function companyMonthNum(data) {
  return dataRequest({
    url: '/company/addNumForMonth',
    method: 'get',
    params: {
      areaId: data.areaId,
      classId: data.classId
    }
  })
}


/**
 * 企业户籍统计
 * @param data
 * @returns {AxiosPromise}
 */
export function companyDomicile(data) {
  return dataRequest({
    url: '/company/domicileList',
    method: 'get',
    params: {
      areaId: data.areaId,
      classId: data.classId
    }
  })
}


/**
 * 项目数量企业数统计
 * @param data
 * @returns {AxiosPromise}
 */
export function projectCompanyNum(data) {
  return dataRequest({
    url: '/company/projectNumCompanyNumList',
    method: 'get',
    params: {
      areaId: data.areaId,
      classId: data.classId
    }
  })
}


/**
 * 企业类型
 * @param data
 * @returns {AxiosPromise}
 */
export function companyType(data) {
  return dataRequest({
    url: '/company/typeList',
    method: 'get',
    params: {
      areaId: data.areaId,
      classId: data.classId
    }
  })
}
