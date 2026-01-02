import request from '@/request/request'
// 账户记录接口

export const queryAllRecordApi = () => request.get('/admin/showAllRecord')
