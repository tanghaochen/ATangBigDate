import request from '../../assets/utils/request'

export function single_employment_record(data) {
  return request({
    url: '/zhjs-api-server/ltystat/workerDetail/getStatEmploymentRecordDetail',
    method: 'post',
    data
  })
}

export function list_of_personal_employment_records(data) {
  return request({
    url: '/zhjs-api-server/ltystat/workerDetail/getStatEmploymentRecordListByUserId',
    method: 'post',
    data
  })
}

export function individual_employee_details(data) {
  return request({
    url: '/zhjs-api-server/ltystat/workerDetail/getStatWorkerDetailByUserId',
    method: 'post',
    data
  })
}
export function single_piece_of_attendance_information(pgId,year) {
  return request({
    url: '/zhjs-api-server/ltystat/workerDetail/getStatEmploymentAttendDetail',
    method: 'post',
    data:{pgId,year}
  })
}
export function single_payroll_information(pgId,year) {
  return request({
    url: '/zhjs-api-server/ltystat/workerDetail/getStatEmploymentWagesDetail',
    method: 'post',
    data:{pgId,year}
  })
}
export function salary_details(data) {
  return request({
    url: '/zhjs-api-server/ltystat/workerDetail/getBankCardDetailsByPgId',
    method: 'post',
    data
  })
}
export function labor_contract(data) {
  return request({
    url: '/zhjs-api-server/ltystat/workerDetail/getAgreementPathByPgId',
    method: 'post',
    data
  })
}
