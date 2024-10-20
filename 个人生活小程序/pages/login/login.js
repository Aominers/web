// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  onGetUserInfo: function(e) {
    if (e.detail.userInfo) {
      // 用户同意授权
      this.setData({
        userInfo: e.detail.userInfo, // 将用户信息保存在data中，以便在页面中展示或使用
      });
  
      // 此处可根据需要进行后续操作，如存储到本地等
      wx.setStorageSync('userInfo', e.detail.userInfo);
  
      try{
        // 授权成功后，直接跳转到Index页面
      wx.switchTab({
        url: '/pages/index/index',
      });
      }catch(error){
        console.error('跳转失败！',error)
      }
    } else {
      // 用户按了拒绝按钮
      wx.showModal({
        title: '提示',
        content: '您需要授权才能继续使用',
        showCancel: false,
      });
    }  
  },
  goToIndex: function() {
    console.log("尝试跳转到Index页面...");
    wx.switchTab({
      url: '/pages/index/index',
    });
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