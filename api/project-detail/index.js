import request from '../../../assets/utils/request'
import dataRequest from '../../../assets/utils/data'


/**
 * 查询单个项目的工资发放信息
 * @param data
 * @returns {AxiosPromise}
 */
export function projectWagesInfo(data) {
  return dataRequest({
    url: '/statisticsWages/projectWagesSituation',
    method: 'get',
    params: {
      projectId: data.projectId,
      year: data.year
    }
  })
}

/**
 * 项目详情
 * @param data
 * @returns {AxiosPromise}
 */
export function projectDetails(data) {
  return request({
    url: '/zhjs-api-server/ltystat/projectDetail/getStatProjectDetailByProjectId',
    method: 'post',
    data
  })
}

/**
 * 项目五方主体信息
 * @param data
 * @returns {AxiosPromise}
 */
export function projectFivePartyInfo(data) {
  return request({
    url: '/zhjs-api-server/ltystat/projectDetail/getStatProjectCompanyDetailByProjectId',
    method: 'post',
    data
  })
}

/**
 * 查询单个项目的8个百分百指标完成情况
 * @param data
 * @returns {AxiosPromise}
 */
export function eightPercentIndex(data) {
  return request({
    url: '/zhjs-api-server/ltystat/projectDetail/getProjectBfbByProjectId',
    method: 'post',
    data
  })
}

/**
 *查询单个项目的考勤打卡信息
 * @param data
 * @returns {AxiosPromise}
 */
export function projectAttendInfo(data) {
  return dataRequest({
    url: '/statisticsAttendance/projectAttendanceSituation',
    method: 'get',
    params: {
      projectId: data.projectId,
      year: data.year
    }
  })
}


/**
 * 根据项目id查专户信息
 * @param data
 * @returns {AxiosPromise}
 */
export function ProjectBankInfo(data) {
  return request({
    url: '/zhjs-api-server/ltystat/projectDetail/getBankZhByProjectId',
    method: 'post',
    data
  })
}


/**
 *根据 项目id 查劳务维权标识牌图片
 * @param data
 * @returns {AxiosPromise}
 * @constructor
 */
export function projectNoticeImg(data) {
  return request({
    url: '/zhjs-api-server/ltystat/projectDetail/getBiaoShiImgByProjectId',
    method: 'post',
    data
  })
}

/**
 * 工资详情
 * @param data
 * @returns {AxiosPromise}
 */
export function projectWagesDetails(data) {
  return request({
    url: '/zhjs-api-server/ltystat/projectDetail/getWagesDetails',
    method: 'post',
    data
  })
}


/**
 * 考勤详情
 * @param data
 * @returns {AxiosPromise}
 */
export function projectAttendDetails(data) {
  return request({
    url: '/zhjs-api-server/ltystat/projectDetail/getAttendDetails',
    method: 'post',
    data
  })
}

/**
 * 人脸查看
 * @param data
 * @returns {AxiosPromise}
 */
export function faceFile(data) {
  return request({
    url: '/zhjs-api-server/ltystat/projectDetail/getFaceFileByLogID',
    method: 'post',
    data
  })
}
