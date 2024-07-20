import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/building/list',
    method: 'get',
    params
  })
}

export function deleteById(id) {
  return request({
    url: '/building/remove',
    method: 'delete',
    params: {
      buildingId: id
    }
  })
}
