// pages/login/index.js
import Dialog from '@vant/weapp/dialog/dialog';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:false,
    showDialog:false
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

  },
  onChange(event) {
    this.setData({
      active: event.detail,
    });
  },
  handleToLogin(){
    const {active}=this.data
    if(!active){
      wx.showToast({
        title: '请先阅读并勾选用户协议',
        icon:"none"
      })
      return
    }
    this.setData({
      showDialog:true
    })
  },
  getUserInfo(event) {
    const {userInfo} = event.detail
    if(!userInfo){
      wx.showToast({
        title: '登陆失败',
        icon:"none"
      })
      return 
    }
    wx.setStorageSync('user', userInfo)
    wx.navigateTo({
      url: '/pages/authentication/index',
    })
  },
  onClose() {
    this.setData({ showDialog: false });
  },
})