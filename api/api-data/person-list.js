import request from '../../../assets/utils/data'
/**
 * 工龄统计
 * @param data
 * @returns {AxiosPromise}
 */
export function age_statistics(areaId, industryTypeDeep, industryTypeId) {
  return request({
    url: '/user/ageList',
    method: 'get',
    params: {
      areaId,
      industryTypeDeep,
      industryTypeId,
    }
  })
}

export function regional_population_statistics(areaId, industryTypeDeep, industryTypeId) {
  return request({
    url: '/user/childAreaTotalList',
    method: 'get',
    params: {
      areaId,
      industryTypeDeep,
      industryTypeId,
    }
  })
}
export function household_registration_gender_statistics(areaId, industryTypeDeep, industryTypeId,) {
  return request({
    url: '/user/domicileList',
    method: 'get',
    params: {
      areaId, industryTypeDeep, industryTypeId,
    }
  })
}
export function education_statistics(areaId, industryTypeDeep, industryTypeId,) {
  return request({
    url: '/user/educationList',
    method: 'get',
    params: {
      areaId, industryTypeDeep, industryTypeId,
    }
  })
}
export function political_profile_statistics(areaId, industryTypeDeep, industryTypeId,) {
  return request({
    url: '/user/politicalList',
    method: 'get',
    params: {
      areaId, industryTypeDeep, industryTypeId,
    }
  })
}
export function staff_position(areaId, industryTypeDeep, industryTypeId,hasJobTypeMid) {
  return request({
    url: '/user/totalJobPostList',
    method: 'get',
    params: {
      areaId, industryTypeDeep, industryTypeId,hasJobTypeMid
    }
  })
}
export function number_of_workers(areaId, industryTypeDeep, industryTypeId,) {
  return request({
    url: '/user/totalNumber',
    method: 'get',
    params: {
      areaId, industryTypeDeep, industryTypeId,
    }
  })
}
export function statistics_of_monthly_employees(areaId, industryTypeDeep, industryTypeId,) {
  return request({
    url: '/user/workingNumForMonth',
    method: 'get',
    params: {
      areaId, industryTypeDeep, industryTypeId,
    }
  })
}
export function key_population(areaId, industryTypeDeep, industryTypeId,) {
  return request({
    url: '/user/totalFocusGroupNumber',
    method: 'get',
    params: {
      areaId, industryTypeDeep, industryTypeId,
    }
  })
}
