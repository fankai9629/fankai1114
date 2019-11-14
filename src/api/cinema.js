import request from '@/utils/request'

//影院列表
export const getcinema = () => {

  return request({
    url: `/gateway?cityId=${localStorage.getItem('cityId')?localStorage.getItem('cityId'):210100}&ticketFlag=1&k=166642`,
    data: {
      xhost: 'mall.film-ticket.cinema.list'
    }
  })
}

//影院票详情
export const getcinemades = (id) => {
  return request({
    url: '/gateway/?cinemaId=' + id + '&k=5116298',
    data: {
      xhost: 'mall.film-ticket.film.cinema-show-film'
    }
  })
}

//影院详情
export const getcinemafilms = (id) => {
  return request({
    url: '/gateway/?cinemaId=' + id + '&k=8777634',
    data: {
      xhost: 'mall.film-ticket.cinema.info'
    }
  })
}

// 上映时间列表
export const getcinematime = (params) => {
  let m = parseInt(new Date().getTime() / 1000);
  return request({
    url: `/gateway/?filmId=${params[0]}&cinemaId=${params[2]}&date=${params[1]}&k=7104822`,
    data: {
      xhost: 'mall.film-ticket.schedule.list'
    }
  })
}
// 第一次電影列表
export const getmoviesall = (params) => {
  return request({
    url: `/gateway/?filmId=${params[1]}&cinemaId=${params[0]}&date=${params[2][0]}&k=7104822`,
    data: {
      xhost: 'mall.film-ticket.schedule.list'
    }
  })
}

export const getmovietimeother=(params)=>{
  console.log(params)
  return request({
    url: `/gateway/?filmId=${params[1]}&cinemaId=${params[0]}&date=${params[2][params[3]]}&k=7104822`,
    data: {
      xhost: 'mall.film-ticket.schedule.list'
    }
  })
}
