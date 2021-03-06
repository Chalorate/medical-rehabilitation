// pages/chooseDoctor/chooseDoctor.js
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    select: false,
    screen: '筛选',
    docterType: [{
      text: '医生1',
      url: ''
    }, {
      text: '医生2',
      url: ''
    }, {
      text: '医生3',
      url: ''
    }, {
      text: '医生4',
      url: ''
    }]
  },
  search: function () {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  bindShowMsg() {
    this.setData({
      select: !this.data.select
    })
  },
  mySelect(e) {
    var name = e.currentTarget.dataset.name
    this.setData({
      screen: name,
      select: false
    })
  },
  naviGateToChooseDoctor: function (e) {
    let url = e.currentTarget.dataset.url
    if (url) {
      wx: wx.navigateTo({
        url: url,
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '功能还在开发中...',
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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