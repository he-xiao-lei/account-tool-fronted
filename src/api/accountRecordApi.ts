import request from '@/request/request'
// 账户记录接口

export const queryAllRecord = () => request.get('/account/record')
