//index.js
//获取应用实例
var app = getApp();
Page({
	data: {
		src: '../../images/index.jpg'
	},
	onLoad: function() {
		setTimeout(function() {
			wx.navigateTo({
				url: '../vwcheaper/main/main'
			})
		}, 1000);
	}
})
