import request from '../../../../assets/utils/data'
import apiRequest from '../../../../assets/utils/request'

/**
 * 企业统计
 * @param data
 * @returns {AxiosPromise}
 */
export function companyType(data) {
  return request({
    url: '/companyFore/companyType',
    method: 'get',
    params: {
      areaId: data.areaId,
      // industryTypeDeep: data.industryTypeDeep,
      industryTypeId: data.industryTypeId,
    }
  })
}

/**
 * 企业经济类型
 * @param data
 * @returns {AxiosPromise}
 */
export function companyEconomics(data) {
  return request({
    url: '/companyFore/companyEconomicType',
    method: 'get',
    params: {
      areaId: data.areaId,
      // industryTypeDeep: data.industryTypeDeep,
      industryTypeId: data.industryTypeId,
    }
  })
}


/**
 * 企业规模
 * @param data
 * @returns {AxiosPromise}
 */
export function companySize(data) {
  return request({
    url: '/companyFore/companySize',
    method: 'get',
    params: {
      areaId: data.areaId,
      // industryTypeDeep: data.industryTypeDeep,
      industryTypeId: data.industryTypeId,
    }
  })
}


/**
 * 获取企业列表
 * @param data
 * @returns {AxiosPromise}
 */
export function companyList(data) {
  return apiRequest({
    url: '/lxb-business/lxbstat/company/getStatCompanyList',
    method: 'post',
    data
  })
}


/**
 * 企业详情
 * @param data
 * @returns {AxiosPromise}
 */
export function companyDetails(data) {
  return apiRequest({
    url: '/lxb-business/lxbstat/company/getCompanyDetailsByCompanyUuid',
    method: 'post',
    data
  })
}


/**
 * 企业详情 工资列表
 * @param data
 * @returns {AxiosPromise}
 */
export function companyWagesList(data) {
  return request({
    url: '/wagesFore/wagesMonth',
    method: 'get',
    params: {
      companyUUId: data.companyUUId,
      year: data.year
    }
  })
}


/**
 * 企业详情考勤列表
 * @param data
 * @returns {AxiosPromise}
 */
export function companyAttendList(data) {
  return request({
    url: '/attendanceFore/companyAttendance',
    method: 'get',
    params: {
      companyUUId: data.companyUUId,
      year: data.year
    }
  })
}

/**
 * 获取营业执照
 * @param data
 * @returns {AxiosPromise}
 */
export function companyBusinessLicense(data) {
  return apiRequest({
    url: '/lxb-business/lxbstat/company/getCompanyCertificatePhoto',
    method: 'post',
    data
  })
}

/**
 * 获取企业考勤列表
 * @param data
 * @returns {AxiosPromise}
 */
export function companyAttendDetaiList(data) {
  return apiRequest({
    url: '/lxb-business/lxbstat/company/getStatAttendListByCompany',
    method: 'post',
    data
  })
}

/**
 * 获取企业人员信息
 * @param data
 * @returns {AxiosPromise}
 */
export function companyPersonDetails(data) {
  return apiRequest({
    url: '/lxb-business/lxbstat/worker/getCompanyWorkerList',
    method: 'post',
    data
  })
}


/**
 * 获取企业工资发放列表
 * @param data
 * @returns {AxiosPromise}
 */
export function companyWagesListByCompanyData(data) {
  return apiRequest({
    url: '/lxb-business/lxbstat/company/getStatWagesListByCompany',
    method: 'post',
    data
  })
}


/**
 * 薪资统计
 * @param data
 * @returns {AxiosPromise}
 */
export function wagesMonth(data) {
  return request({
    url: '/wagesFore/wagesMonthDetail',
    method: 'get',
    params: {
      companyUUId: data.companyUUId,
      month: data.month,
      year: data.year
    }
  })
}
