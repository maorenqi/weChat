const openIdUrl = require('./config').openIdUrl

//API的一些用法,并无实际意义
App({
  onLaunch: function () {
    console.log('App Launch')
  },
   
  onLoad:function(){
	  //wx.request(Object)  发起请求
	  wx.request({
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
	  })
	},
	 
	//wx.uploadFile(OBJECT) 上传
	wx.chooseImage({
		success: function(res) {
			var tempFilePaths = res.tempFilePaths
			wx.uploadFile({
				url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
				filePath: tempFilePaths[0],
				name: 'file',
				formData:{
					'user': 'test'
				},
				success: function(res){
					var data = res.data
					//do something
				}
			})
		}
	}),

	//const定义的变量不可以修改，而且必须初始化。
	const uploadTask = wx.uploadFile({
		url: 'http://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
		filePath: tempFilePaths[0],
		name: 'file',
		formData:{
			'user': 'test'
		},
		success: function(res){
			var data = res.data
			//do something
		}
	})

	uploadTask.onProgressUpdate((res) => {
		console.log('上传进度', res.progress)
		console.log('已经上传的数据长度', res.totalBytesSent)
		console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
	})

	uploadTask.abort() // 取消上传任务
	
	//wx.downloadFile(OBJECT)
	wx.downloadFile({
		url:'http:www.maorenqi.com/images/test.jpg',
		success:function(res){
			if(res.statusCode===200){
				wx.playVoice({
					filePath:res.tempFilePath
				})
			}
		}
	}),
	
	//wx.connectSocket(OBJECT)
	wx.connectSocket({
		url:'',
		protocols:['protocol1'],
		success:function(res){
			console.log(res.data)
		}
	}),
	
	//wx.onSocketOpen(CALLBACK)  监听WebSocket连接打开事件
	wx.onSocketOpen(function(res){
		console.log('WebSocket连接已打开')		
	}),
	
	//wx.onSocketError(CALLBACK) 监听WebSocket错误
	wx.onSocketError(function(res){
		console.log('Websocket连接打开失败，请检查！')
	}),
	
	//wx.sendSocketMessage(OBJECT) 通过WebSocket连接发送数据，需要先连接，并在打开回调之后才能发送
	var socketOpen = false;
	var socketMsgQueue = [];
	function sendSocketMessage(msg){
		if(socketOpen){
			wx.sendSocketMessage({
				data.msg;
			})
		}else{
			socketMsgQueue.push(msg)
		}
	},
	
	//wx.onSocketMessage(CALLBACK)  监听WebSocket接受到服务器的消息事件
	wx.onSocketMessage(function(res){
		console.log('收到服务器内容：' + res.data)
	})
	
	wx.onSocketClose(function(res){
		console.log('Websocket已关闭！')
	}),
	
	SocketTask.send({//OBJECT
		data:['aa','bbb'],
		success:function(res){
			
		}	
	}),
	
	SocketTask.close({
		code:1000,
		reason:'字符串必须是不长于123字节的UTF-8文本',
		
	})
	
	/* 
	*媒体
	*wx.chooseImage(OBJECT)  从本地相册选择图片或使用相机拍照
	*/
	wx.chooseImage({
		count:9,
		sizeType:['original', 'compressed'],//原图、压缩图，默认二者都有
		sourceType:['album','camera'],//从相册，使用相机，默认二者都有
		success:function(res){//成功则返回图片的本地文件路径列表
			//返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
			var tempFilePaths = res.tempFilePaths //图片的本地文件路径列表			
		}	
	}),
	
	//预览图片
	wx.previewImage({
		current:'',//当前显示图片的链接，不填则默认为urls的第一张
		urls:[] //要预览的图片链接列表 
		success:function(res){
			
		}
	}),
	
	wx.getImageInfo({//获取图片信息
		src:'image/a.jpg',
		success:function(res){
			
		}
	}),
	
	wx.saveImageToPhotoAlbum({//保存图片到系统相册
		filePath:'',
		
	})
	
	/* 
	*文件
	*/
	wx.saveFile({
		tempFilePath:'fielpath',
		success:function(res){
			res.errMsg //string
			res.fileList //object
		}
	})
	//bug & tip
	//tip: 本地文件存储的大小限制为10M
	
	wx.getSavedFileInfo({//获取本地文件的文件信息
		filePath:''
	}),
	
	wx.removeSaveFile({//删除本地存储的文件
		filePath:''
	}),
	
	wx.openDocument({//新开页面打开文档，支持格式：doc,xls,ppt,pdf,docx,xlsx,pptx
		filePath:'',
		fileType:''
	}),
	
	/* 
	*数据缓存
	*/
	wx.setStorage({//将数据存储在本地缓存中指定的key中，会覆盖掉原来该key对应的内容
		key:'key',
		data:'value'
	}),
	
	wx.getStorage('key','data'),
	
	wx.clearStorage({
		key:'key',
		success:function(res){
			
		}
	}),
	
	wx.getStorageSynx('key'),//从本地缓存中同步获取指定key对应的内容 
	
	wx.getStorageInfo({
		
	}),
	
	wx.removeStorage({
		key:''
	}),
	
	wx.removeStorageSynx('key'),//从本地缓存中同步移除指定 key
	
	wx.clearStorage(),
	wx.clearStorageSync(),
	
	/* 
	*位置
	*/
	wx.getLocation({//获取当前的地理位置
		type:'wgs84 ',
		altitude:'true', //true返回高度信息
		success：function(res){
			var latitude = res.latitude
			var longitude = res.longitude
			var speed = res.speed
			var accuracy = res.accuracy
		}
	}),
	
	wx.chooseLocation({//打开地图选择位置
		success:function(res){
			res.name
			res.address
			res.latitude
			res.longitude
		}
	}),
	
	wx.openLocation({//使用微信内置地图查看位置
		
	}),
	
	/* 
	*设备
	*/
	wx.getSystemInfo({
		success:function(res){
			console.log(res.brand)
							res.model
							res.pixelRatio
							res.screenWidth
							res.screenHeight
		}
	}),
	
	wx.getSystemInfoSync(),//获取系统信息同步接口
	
	
	/* 
	*界面
	*/
	wx.showToast({//显示消息提示框
		title:'成功',
		icon:'success',
		duration:2000
	}),
	
	wx.showLoading({//显示loading提示框
		title:'加载中',
		mask:true
	})
	
	wx.hideToast(),
	wx.hideLoading(),
	
	wx.showModal({//显示动态弹窗
		title:'提示',
		content:'这是一个动态弹窗',
		success:function(res){
			if(res.confirm){
				console.log('用户点击确定')
			}else if(res.cancel){
				console.log('用户点击取消')
			}
		}
	}),
	
	wx.showActionSheet({//显示操作菜单
		itemList: ['A', 'B', 'C'],
		success: function(res) {
		console.log(res.tapIndex)
		},
		fail: function(res) {
		console.log(res.errMsg)
		}
	})
	
	
	/* 
	*WXML节点信息API
	*/
	
	//wx.createSelectorQuery()//返回SelectorQuery对象实例。
	queryMultipleNodes:function(){
		var query = wx.createSelectorQuery()
		query.select('#this-id').boundingClientRect()
		query.selectViewport().scrollOffset()
		query.exec(function(res){
			res[0].top
			res[1].scrollTop
		})
	},
	
	selectorQuery对象的方法列表：
	selectorQuery.in(component)
	selectorQuery.select(selector)
	selectorQuery.select(selector)
	selectorQuery.selectViewport()
	selectorQuery.exec([callback])//执行所有的请求
	
	getRect:function(){
		wx.createSelectorQuery().select('#the-id').boundingClientRect(function(rect){
			rect.id      // 节点的ID
			rect.dataset // 节点的dataset
			rect.left    // 节点的左边界坐标
			rect.right   // 节点的右边界坐标
			rect.top     // 节点的上边界坐标
			rect.bottom  // 节点的下边界坐标
			rect.width   // 节点的宽度
			rect.height  // 节点的高度
		}).exec()
	},
	
	getAllRects:function(){
		wx.createSelectorQuery().selectAll('.a-class').boundingClientRect(function(rects){
			rects.forEach(function(rect){
				rect.id      // 节点的ID
				rect.dataset // 节点的dataset
				rect.left    // 节点的左边界坐标
				rect.right   // 节点的右边界坐标
				rect.top     // 节点的上边界坐标
				rect.bottom  // 节点的下边界坐标
				rect.width   // 节点的宽度
				rect.height  // 节点的高度				
			})
		}).exec()
	},
	
	getScrollOffset:function(){
		wx.createSelectorQuery().selectViewport().scrollOffset(function(res){
			res.id
			res.dataset
			res.scrollLeft
			res.scrollTop
		}).exec()
	},
	
	//nodesRef.fields(fields,[callback])  参数一：对象  参数二：返回数组函数
	getFields:function(){
		//创建查询，选择选择器，获取节点的相关信息，执行请求。
		wx.createSelectorQuery().select('#this-id').fields({
			dataset: true,
			size: true,
			scrollOffset: true,
			properties: ['scrollX', 'scrollY']
		},function(res){
			res.dataset    // 节点的dataset
			res.width      // 节点的宽度
			res.height     // 节点的高度
			res.scrollLeft // 节点的水平滚动位置
			res.scrollTop  // 节点的竖直滚动位置
			res.scrollX    // 节点 scroll-x 属性的当前值
			res.scrollY    // 节点 scroll-x 属性的当前值
		}).exec()
	},
	
	/* 
	*第三方平台
	*/
	if(wx.getExtConfig){
		wx.getExtConfig({//获取第三方平台自定义的数据字段
			success:function(res){
				console.log(res.errMsg)//调用结果
				console.log(res.extConfig)//第三方平台自定义的数据
			}
		})
	},
	
	//wx.getExtConfigSync()获取第三方平台自定义的数据字段的同步接口
	let extconfig = wx.getExtConfigSync? wx.getExtConfigSync():{}
	console.log(extConfig)
	
	
	
	
	
	
	
})
