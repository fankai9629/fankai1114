// 获取数组中的所有元素的某个key值
export  const getArrayValByKey = (arr,key) =>{
    if(!arr) return ''
    let str = ''
    if(!key) key = 'name'
    arr.forEach(element => {
        str += element[key] + ' '
    });
    return str
}

export const getnewDate = (data) =>{  //时间搓
   let m = new Date((data)*1000)
   let b = m.toLocaleDateString()+'上映'
   return  b.replace(/\//g,'-')
}

export const changeline=(data)=>{   //加宽
    return data.replace(/\|/g,' | ')
    // console.log(data)
}
export const getnewDay = (data) =>{  //日期转换
    let m = new Date((data)*1000)
    let n = (m.getDay())
    let arr=['日','一','二','三','四','五','六',]
    let D = arr[n]  // 日期
    let y = m.getMonth()+1
    let r = m.getDate()
    return '周'+D+' '+y+'月'+r+'日'
  
 }

 export const getName =(data)=>{
    //  console.log(data)
     let str=""
     data.forEach(item=>{
        str+=item.name
     })
     return str
 }

//时间搓转xx：xx
export const getDateTime=(data)=>{
    data =new Date(data*1000)
    let h=data.getHours()
    let m = data.getMinutes()
    if(m<10)m=m+'0'
    return h+':'+m
}

    //時間戳轉周几 xx月xx日
export const getday=(data)=>{
    let m = new Date(data*1000)
        return '周'+'日一二三四五六'.charAt(m.getDay())+(m.getMonth()+1)+'月'+m.getDate()+'日'
   
}

export const loginuser=(data)=>{
    if(!localStorage.getItem('username')||localStorage.getItem('username')==''){
        return data
    }else{
        return localStorage.getItem('username')
    }
}

export const masaike=(data)=>{
    console.log(data)
    if(!data){
        return 
    }
    return data.substr(0,3) + "****"+data.substr(7)

    // return data.splice(3,4,'****')
}