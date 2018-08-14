var express = require('express')
var port = process.env.PORT || 8000
var app = express()

app.set('views','./views')
app.set('view engine','pug')
app.listen(port)

console.log('imooc started on port '+port)

// index.pug
app.get('/',function(req, res){
	res.render('index',{
		title: 'langic 首页',
		movies: [{
			title: '机械战警',
			_id: 1,
			poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title: '机械战警',
			_id: 2,
			poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title: '机械战警',
			_id: 3,
			poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title: '机械战警',
			_id: 4,
			poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title: '机械战警',
			_id: 5,
			poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title: '机械战警',
			_id: 6,
			poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},]
	})
})

//detail.pug
app.get('/movie/:id',function(req, res){
	res.render('detail',{
		title: 'langic 详情页',
		movie: {
			title: '机械战警',
			doctor: '何塞·帕迪利亚',
			country: '美国',
			year: 2014,
			poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
			language: '英语',
			flash: 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
			summary: '翻拍1987年同名科幻经典、由《精英部队》导演何塞·帕迪利亚执导的新版《机械战警》发布首款预告片。大热美剧《谋杀》男星乔尔·金纳曼化身新“机械战警”酷黑战甲亮相。'
		}
	})
})

//admin.pug
app.get('/admin/movie',function(req, res){
	res.render('admin',{
		title: 'langic 后台录入页',
		movie: {
			title: '',
			doctor: '',
			country: '',
			year: '',
			poster: '',
			language: '',
			flash: '',
			summary: ''
		}
	})
})

//list.pug
app.get('/admin/list',function(req, res){
	res.render('list',{
		title: 'langic 后台列表页'
	})
})

