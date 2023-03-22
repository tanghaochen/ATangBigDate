import request from '../../../assets/utils/data'
import apiTwo from '../../../assets/utils/request'


/**
 * 工龄统计
 * @param data
 * @returns {AxiosPromise}
 */
export function workYearList(data) {
  return request({
    url: '/worker/workingYearList',
    method: 'get',
    params: {
      areaId: data.areaId,
      classId: data.classId
    }
  })
}

/**
 * 年龄统计
 * @param data
 * @returns {AxiosPromise}
 */
export function age_statistics(data) {
  return request({
    url: '/worker/ageList',
    method: 'get',
    params: {
      areaId: data.areaId,
      classId: data.classId
    }
  })
}

/**
 * 政治面貌统计
 * @param data
 * @returns {AxiosPromise}
 */
export function political_profile_statistics(data) {
  return request({
    url: '/worker/politicalList',
    method: 'get',
    params: {
      areaId: data.areaId,
      classId: data.classId
    }
  })
}

/**
 * 学历占比
 * @param data
 * @returns {AxiosPromise}
 */
export function educationList(data) {
  return request({
    url: '/worker/educationList',
    method: 'get',
    params: {
      areaId: data.areaId,
      classId: data.classId
    }
  })
}

/**
 * 每月在职人数统计
 * @param data
 * @returns {AxiosPromise}
 */
export function workingNumForMonth(data) {
  return request({
    url: '/worker/workingNumForMonth',
    method: 'get',
    params: {
      areaId: data.areaId,
      classId: data.classId
    }
  })
}

/**
 * 工种分布
 * @param data
 * @returns {AxiosPromise}
 */
export function skillTypeList(data) {
  return request({
    url: '/worker/skillTypeList',
    method: 'get',
    params: {
      areaId: data.areaId,
      classId: data.classId
    }
  })
}

/**
 * 地区分布
 * @param data
 * @returns {AxiosPromise}
 */
export function areaList(data) {
  return request({
    url: '/worker/childAreaTotalList',
    method: 'get',
    params: {
      areaId: data.areaId,
      classId: data.classId
    }
  })
}

/**
 * 员工数量
 * @param data
 * @returns {AxiosPromise}
 */
export function workingNumber(data) {
  return request({
    url: '/worker/totalNumber',
    method: 'get',
    params: {
      areaId: data.areaId,
      classId: data.classId
    }
  })
}


/**
 * 人员列表
 * @param data
 * @returns {AxiosPromise}
 */
export function workerList(data) {
  return apiTwo({
    url: '/zhjs-api-server/ltystat/workerDetail/getWorkerList',
    method: 'post',
    data
  })
}
