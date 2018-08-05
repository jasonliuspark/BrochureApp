// pages/frontPageDetail/frondPageDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: '',
    detailText: '',
    hinacom: '1',
    miPlatform: '2',
    miShare: '3',
    animation: ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var item = ((options.item).split("/")).pop().replace(".png", "");
    var dataContent;
    switch (item) {
      case "hinacom":
        dataContent = this.data.hinacom;
        break;
      case "miShare":
        dataContent = this.data.miShare;
        break;
      case "miPlatform":
        dataContent = this.data.miPlatform;
        break;
      default:
        break;
    }
    this.setData({
      item: options.item,
      detailText: dataContent
    });
    console.log(options.item);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'linear',
      delay: 50,
      transformOrigin: 'center center 50%',
      success: function(res) {
        console.log(res)
      }
    })
  },
  rotate: function() {
    this.animation.rotate(150).step()
    this.setData({
      animation: this.animation.export()
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})