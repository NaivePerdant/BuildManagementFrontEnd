import request from '@/utils/request'

export function insert(params) {
  return request({
    url: '/building/add',
    method: 'post',
    data: params
  })
}
