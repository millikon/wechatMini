// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  getData: function () {
      console.log("into func");
      wx.request({
        url: '127.0.0.1:3000/handleData',//接口地址
        data: {//请求数据
          username: "ZHIYU XU",
          email: "xuzhiyde@gmail.com"
        },
        success: function (res) {//收到开发者服务成功返回的回调函数
          console.log("complete")
        },
        fail: function () {//接口调用失败的回调函数
          console.log("fail")
        },
        complete: function () {//接口调用结束的回调函数（调用成功、失败都会执行）
          console.log("complete")
        }
      })
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