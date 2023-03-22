import request from '../../../assets/utils/data'

export function project_construction_status(areaId, classId) {
  return request({
    url: '/statisticsProject/projectItemAndStatusTotalNum',
    method: 'get',
    params: {
      areaId, classId
    }
  })
}
export function top_filter(areaDeep, areaId) {
  return request({
    url: '/area/findForChildToCounty',
    method: 'get',
    params: {
      areaDeep, areaId
    }
  })
}
