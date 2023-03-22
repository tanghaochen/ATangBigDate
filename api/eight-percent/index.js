import request from '../../../assets/utils/data'
import dataRequest from '../../../assets/utils/request'


/**
 * 未完成8个百分百项目数量
 * @param data
 * @returns {AxiosPromise}
 */
export function eightPercentNum(data) {
  return request({
    url: '/statisticsProject/projectEightPercentageIndicators',
    method: 'get',
    params: {
      areaId: data.areaId,
      classId: data.classId
    }
  })
}
/**
 * 工龄统计
 * @param data
 * @returns {AxiosPromise}
 */
export function o_getWorkerList(data) {
  return dataRequest({
    url: '/lxb-business/lxbstat/worker/getWorkerList',
    method: 'post',
    data
  })
}

/**
 * 数据未上传完整项目
 * @param data
 * @returns {AxiosPromise}
 */
export function eightPercentAttendance(data) {
  return request({
    url: '/statisticsProject/projectEightPercentageAttendance',
    method: 'get',
    params: {
      areaId: data.areaId,
      type: data.type,
      classId: data.classId
    }
  })
}


/**
 * 获取bfb指标的项目列表
 * @param data
 * @returns {AxiosPromise}
 */
export function eightPercentTypeList(data) {
  return dataRequest({
    url: '/zhjs-api-server/ltystat/projectDetail/getStatProjectListByBfbDto',
    method: 'post',
    data
  })
}


/**
 * 导出excel表
 * @param data
 * @returns {AxiosPromise}
 */
export function importExcel(data) {
  return dataRequest({
    url: '/zhjs-api-server/ltystat/projectDetail/exportStatProjectListByBfbDto',
    method: 'post',
    data
  })
}
export function seven_importExcel(data) {
  return dataRequest({
    url: 'lxb-business/lxbstat/company/downloadStatCompanyList',
    method: 'post',
    data
  })
}
