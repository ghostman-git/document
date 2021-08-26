// {{page}}.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '标题'
  },

  tapClick(event) {
    console.log('tapClick, ', event)
    console.log(event.currentTarget.dataset)

    this.setData({
      title: event.currentTarget.dataset.title
    })
  },
 
  jumpTo() {
    // wx.switchTab({
    //   url: '/pages/logs/logs',
    // })
    wx.reLaunch({
      url: '/pages/logs/logs?id=xxx&name=wechat',
      success: res => {
        console.log(res)
      }
    })
  },

  jumpToDemo() {
    wx.navigateTo({
      url: '/pages/demo/demo',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(wx.getSystemInfoSync())

    wx.showLoading({
      title: '数据加载中...',
    })

    wx.showToast({
      title: '提交成功',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})