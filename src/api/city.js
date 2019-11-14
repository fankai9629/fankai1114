// 这是城市相关的api接口
import request from '@/utils/request'
export const getCityLists = () =>{
    return request({
        url:'/gateway?k=9918132',
        data:{
            xhost:'mall.film-ticket.city.list'
        }
    })
}