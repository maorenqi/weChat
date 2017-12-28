const openIdUrl = require('./config').openIdUrl

//API的一些用法,并无实际意义
App({
  onLaunch: function () {
    console.log('App Launch')
  },
  
  
	onLoad: function () {
		wx.request({
			url: 'http://localhost', //服务器地址
			data: {
				name: 'bob'//请求参数
			},
			header: {
				'content-type': 'application/json'
			},
			success: function (res) {
				console.log(res.data)
			}
		})
	}
  
  onLoad:function(){
	  //wx.request(Object)
	  wx.request(
		url:'http://www.maorenqi.com',//string
		data:{//Object/String/ArrayBuffer
			name:'maomao',
			sex:'men',
			readBook:function(){
				
			}
		},
		header:{//Object
			'content-type': 'application/json' // 默认值
		},
		method:'POST',//String  GET
		dataType:'json',//String  json
		responseType:'text',//String text
		success:function(res){
			/*success返回的参数说明（参数、类型、说明）：
			*data 				Object/String/ArrayBuffer  开发者服务器返回的数据
			*statusCode 	Number   							开发者服务器返回的HTTP状态码
			*header 			Object								开发者服务器返回的HTTP Response Header
			*/
			console.log(res.data);
			console.log(res.statusCode);
			console.log(res.header);
		},
		fail:function(){
			console.log('fail:baba');
		},
		complete:function(){
			//接口调用结束时的回调函数(调用成功、失败都会执行)
		}		
	  );
  }
  

})
