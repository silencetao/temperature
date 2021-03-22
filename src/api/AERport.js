import request from '@/utils/request'

export function getAEReportdata(data) {
  return request({
    url: '/aereport/findbytimeandslot',
    method: 'post',
    params: data
  })
}
