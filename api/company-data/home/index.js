import request from '../../../../assets/utils/request'
import dataRequest from '../../../../assets/utils/data'


/**
 * 获取公共词典
 * @param data
 * @returns {AxiosPromise}
 */
export function getPublicInfoByDictParentIdGet(parentId) {
  return request({
    url: '/service-public/public/getPublicInfoByDictParentIdGet',
    method: 'get',
    params:{
      parentId:parentId
    }
  })
}
/**
 * 获取公共词典
 * @param data
 * @returns {AxiosPromise}
 */
export function getPublicKey(data) {
  return request({
    url: '/service-public/public/getPublicInfoByDictKey',
    method: 'post',
    data
  })
}

/**
 * 根据父id获取下一级
 * @param dictParentId
 * @returns {AxiosPromise}
 */
export function getIndustryType(dictParentId) {
  return request({
    url: '/service-public/public/getPublicInfoByDictParentId',
    method: 'post',
    data: dictParentId
  })
}


/**
 * 重点人群统计
 * @param data
 * @returns {AxiosPromise}
 */
export function totalFocusGroupNumber(data) {
  return dataRequest({
    url: '/user/totalFocusGroupNumber',
    method: 'get',
    params: {
      areaId: data.areaId,
      industryTypeDeep: data.industryTypeDeep,
      industryTypeId: data.industryTypeId,
    }
  })
}


/**
 * 员工数量
 * @param data
 * @returns {AxiosPromise}
 */
export function totalNumber(data) {
  return dataRequest({
    url: '/user/totalNumber',
    method: 'get',
    params: {
      areaId: data.areaId,
      industryTypeDeep: data.industryTypeDeep,
      industryTypeId: data.industryTypeId,
    }
  })
}

/**
 * 人员岗位
 * @param data
 * @returns {AxiosPromise}
 */
export function totalJobPostList(data) {
  return dataRequest({
    url: '/user/totalJobPostList',
    method: 'get',
    params: {
      areaId: data.areaId,
      industryTypeDeep: data.industryTypeDeep,
      industryTypeId: data.industryTypeId,
    }
  })
}


/**
 * 人员籍贯统计
 * @param data
 * @returns {AxiosPromise}
 */
export function domicileList(data) {
  return dataRequest({
    url: '/user/domicileList',
    method: 'get',
    params: {
      areaId: data.areaId,
      industryTypeDeep: data.industryTypeDeep,
      industryTypeId: data.industryTypeId,
    }
  })
}

/**
 * 企业总数和累计工资发放
 * @param data
 * @returns {AxiosPromise}
 */
export function companyNumWagesTotal(data) {
  return dataRequest({
    url: '/companyFore/companyTotalAndWagesTotal',
    method: 'get',
    params: {
      areaId: data.areaId,
      industryTypeId: data.industryTypeId,
    }
  })
}


/**
 * 当月新增企业
 * @param data
 * @returns {AxiosPromise}
 */
export function companyNewNum(data) {
  return dataRequest({
    url: '/companyFore/companyNewAddMonth',
    method: 'get',
    params: {
      areaId: data.areaId,
      industryTypeId: data.industryTypeId,
    }
  })
}


/**
 * 企业类型统计
 * @param data
 * @returns {AxiosPromise}
 */
export function companyType(data) {
  return dataRequest({
    url: '/companyFore/companyType',
    method: 'get',
    params: {
      areaId: data.areaId,
      industryTypeId: data.industryTypeId,
    }
  })
}


/**
 * 未完成6个百分百项目统计
 * @param data
 * @returns {AxiosPromise}
 */
export function companySixIndex(data) {
  return dataRequest({
    url: '/companyFore/companySevenIndex',
    method: 'get',
    params: {
      areaId: data.areaId,
      industryTypeId: data.industryTypeId,
    }
  })
}


/**
 * 所属行业占比
 * @param data
 * @returns {AxiosPromise}
 */
export function companyIndustryType(data) {
  return dataRequest({
    url: '/companyFore/companyIndustryType',
    method: 'get',
    params: {
      areaId: data.areaId,
      industryTypeDeep: data.industryTypeDeep,
      industryTypeId: data.industryTypeId,
    }
  })
}


/**
 * 获取企业纳入列表
 * @param data
 * @returns {AxiosPromise}
 */
export function companyStateList(data) {
  return request({
    url: '/lxb-business/lxbstat/company/getStatCompanyListByRegisterState',
    method: 'post',
    data
  })
}

/**
 * 获取企业纳入数
 * @param data
 * @returns {AxiosPromise}
 */
export function companyState(data) {
  return request({
    url: '/lxb-business/lxbstat/company/getStatCompanyCountByRegisterState',
    method: 'post',
    data
  })
}
