import request from '@/utils/request'
export const getFilmList = (params = {})=>{
    if(!params.pageNum) params.pageNum = 1
    if(!params.pageSize) params.pageSize = 10
    return request({
        url:`/gateway?cityId=${localStorage.getItem('cityId')?localStorage.getItem('cityId'):210100}&pageNum=${params.pageNum}&pageSize=${params.pageSize}&type=1&k=3887391`,
        data:{
            xhost: 'mall.film-ticket.film.list'
        }
    })
}
export const getFilmComming = (params = {})=>{
    if(!params.pageNum) params.pageNum = 1
    if(!params.pageSize) params.pageSize = 10
    return request({
        // https://m.maizuo.com/gateway?cityId=210100&pageNum=1&pageSize=10&type=2&k=7875676
        url:`/gateway?cityId=${localStorage.getItem('cityId')?localStorage.getItem('cityId'):210100}&pageNum=${params.pageNum}&pageSize=${params.pageSize}&type=2&k=7875676`,
        data:{
            xhost: 'mall.film-ticket.film.list'
        }
    })
}


export const getbanner=()=>{
    return request({
        url:`/gateway?type=2&cityId=${localStorage.getItem('cityId')?localStorage.getItem('cityId'):210100}&k=1371411`,
        data:{
            xhost: 'mall.cfg.common-banner'
        }
    })
}

//获取电影详情数据
export const getFilmDetail=(filmId) =>{
    return request({
        url:'/gateway?filmId='+filmId+'&k=2448086',
        data:{
            xhost:'mall.film-ticket.film.info'
        }
    })
}