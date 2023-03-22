import request from '../../../assets/utils/data'
import dataRequest from '../../../assets/utils/request'

/**
 * the_enterprise_has_not_completed_six_hundred_percent_statistics
 * @param areaId 省ID或市ID或区ID，不传或null表示全国范围；industryTypeId 产业ID；industryTypeDeep 产业层级；indexType 指标类型 [attendance 考勤、contract 合同、deposit 工资保证金、insurance 工伤保险、account 工资专户、bankWages 工资代发、warningSign 维权告示牌]
 * @returns {AxiosPromise}
 */
export function the_enterprise_has_not_completed_six_hundred_percent_statistics(areaId,indexType,industryTypeDeep,industryTypeId) {
  return request({
    url: '/companyIndexFore/companyIndex',
    method: 'get',
    params: {
      areaId,indexType,industryTypeDeep,industryTypeId
    }
  })
}
export function get_a_list_of_companies(data) {
  return dataRequest({
    url: 'lxb-business/lxbstat/company/getStatCompanyList',
    method: 'post',
    data
  })
}
