
let formDataConfig = {
		method:"post",
		url:'/dola/app/game/newgetgameleaderboard',
    headers:{
        'Content-type': 'application/x-www-form-urlencoded'
    },
    transformRequest: [function (data) {
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
    }]
}

export default formDataConfig