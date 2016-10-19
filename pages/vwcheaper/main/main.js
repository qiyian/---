Page({
  data: {
    current: 0,
    imgUrls: [
      '/images/banner1.jpg',
      '/images/banner2.jpg',
      '/images/banner3.jpg',
      '/images/banner4.jpg',
      '/images/banner5.jpg',
      '/images/banner6.jpg',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    loadingHidden: false,

    ulli:[
      '精选',
      '送女票',
      '海淘',
      '创意生活',
      '送基友',
      '送爸妈',
      '设计感',
      '文艺风',
      '奇葩搞怪',
      '科技范',
      '数码',
      '萌萌哒',
      '爱读书'
    ],
    sale:[
      {
        "img":"/images/pic1.jpg",
        "title":"月牙公主专场",
        "description":"仅剩3天"
      },
      {
        "img":"/images/pic2.jpg",
        "title":"玥大小姐女鞋专场",
        "description":"仅剩3天"
      },
      {
        "img":"/images/pic3.jpg",
        "title":"小迷糊专场",
        "description":"仅剩3天"
      }
    ],


    swiper: {
      indicatorDots: false,
      autoplay: false,
      interval: 0,
      duration: 300
    }
  },

  onLoad: function () {
    var that = this;
    wx.request({
      url: 'http://localhost/mock/list.json',
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        setTimeout(function () {
          that.setData({
            list: res.data,
            loadingHidden: true
          });
        }, 1500);
      },
      fail: function (error) {
        console.log(error);
      }
    })
  },

  switchSlider: function (event) {
    this.setData({
      current: event.target.dataset.index
    })
  },

  changeSlider: function (event) {
    this.setData({
      current: event.detail.current
    });
  }
});
