import request from '../../assets/utils/request'

export function getAreaList(data) {
	return request({
		url: '/zhjs-api-server/supervise/power/getAreaList',
		method: 'post',
    data
	})
}
export function project_type() {
  return request({
    url: '/zhjs-api-server/apiservice/select/getProjectClassList',
    method: 'post',
  })
}


export function Short_ID_to_long_ID(statMapId) {
  return request({
    url: `/service-public/dictAreaStatmap/getDictAreaStatmapByStatMapId?statMapId=${statMapId}`,
    method: 'post',
  })
}

export function long_ID_to_Short_ID(areaId) {
  return request({
    url: `/service-public/dictAreaStatmap/getDictAreaStatmapByAreaId?areaId=${areaId}`,
    method: 'post',
  })
}
