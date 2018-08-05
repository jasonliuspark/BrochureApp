// pages/mosaic/mosaic.js
var app = getApp();
const TAG = "index";
var time = 0;
var touchDot = 0;
var interval = "";
var flag_hd = true;
Page({
    /**
     * 页面的初始数据
     */
    data: {
        datas: [
            "../pictures/hinacom.png",
            "../pictures/miPlatform.png",
            "../pictures/miShare.png",
            "../pictures/hinacom.png",
            "../pictures/miPlatform.png",
            "../pictures/miShare.png",
            "../pictures/hinacom.png",
            "../pictures/miPlatform.png",
            "../pictures/miShare.png",
            "../pictures/hinacom.png",
            "../pictures/miPlatform.png",
            "../pictures/miShare.png"
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
        var that = this;
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },
    touchStart: function (e) {
        touchDot = e.touches[0].pageY;
        interval = setInterval(function () {
            time++;
        }, 100);
    },
    touchEnd: function (e) {
        var touchMove = e.changedTouches[0].pageY;
        if (touchMove - touchDot <= -40 && time < 10 && flag_hd == true) {
            flag_hd = false;
            console.log("slide up");
             wx.redirectTo({
               url: '../products/products'
             })
        }
        clearInterval(interval);
        time=0;
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        flag_hd = true;
        clearInterval(interval);
        time = 0;
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