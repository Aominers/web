// pages/movielist/movielist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lifeVideos: [{
      title: '球场风云 | 篮球基础到进阶实战演练',
      article: '从篮球小白到球场MVP，这不仅仅是一段关于投篮和过人的故事。汗水、团队、永不言弃的精神，在这里一一展现。跟随我们的镜头，解锁你的篮球潜能，让每次上场都成为闪耀时刻！',
      poster: '/images/1.jpg',
      type: '生活',
      url: '/pages/life1/life1'
    }, {
      title: '弦动心声：吉他自学之旅',
      article: '六弦之间的旋律，是心灵与世界对话的方式。从最基础的和弦到指尖飞舞的独奏，每一次拨动都记录着成长的足迹。不论你是音乐初学者还是寻找灵感的乐手，这段吉他自学之旅，将带你走进音乐的美妙世界。',
      poster: '/images/2.jpg',
      type: '生活',
      url: '/pages/life2/life2'
    }], 
    studyVideos: [{
      title: '学霸笔记：高效学习法揭秘',
      article: '掌握这些高效学习技巧，让知识吸收事半功倍。从时间管理到记忆曲线，每一步都助你攀登学术巅峰。不论是应考冲刺还是终身学习，这套方法都能让你如虎添翼！',
      poster: '/images/3.jpg',
      type: '学习',
      url: '/pages/study1/study1'
    },{
      title: '从小白到高手：微信小程序开发全攻略',
      article: '想亲手打造属于自己的小程序应用吗？这个系列从零开始，逐步深入微信小程序的开发世界。从环境搭建、基础语法到项目实战，每一步都配有详细讲解和实例代码。加入我们，开启你的小程序开发者之旅，让创意触达亿万用户！',
      poster: '/images/4.jpg',
      type: '学习',
      url: '/pages/study2/study2'
    }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})