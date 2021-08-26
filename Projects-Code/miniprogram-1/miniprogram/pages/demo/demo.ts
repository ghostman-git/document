Page({
  data: {
    page: 'demo'
  },

  goBack() {
    wx.navigateBack()
  },

  onPullDownRefresh() {
    console.log('onPullDownRefresh')
  }
})