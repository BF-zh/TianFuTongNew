// pages/home/index.ts
import { hideIDNumber,hideName } from '../../utils/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isInit:false,
    navigationColor:"",
    name:"",
    mainOffsetTop:0,
    opacity:0,
    idNumber:"",
    list:[
      {src:"/static/hs.png",text:"核酸检测\n结果查询"},
      {src:"/static/yl.png",text:"医疗防疫\n结构查询"},
      {src:"/static/xz.png",text:"下载健康码"},
      {src:"/static/zx.png",text:"我要咨询"},
      {src:"/static/gj.png",text:"国家政务\n服务平台"},
      {src:"/static/qt.png",text:"其他服务"},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },
  onPageScroll () {
    wx.createSelectorQuery().select('#main').boundingClientRect(({top})=>{
      const {isInit,mainOffsetTop,opacity,navigationColor} = this.data
      if(!isInit){
        this.setData({
          isInit:true,
          mainOffsetTop:top
        })
      }
      if(top<0) return this.setData({opacity:1})
      opacity>.5?this.setData({navigationColor:"#000"}):this.setData({navigationColor:"#fff"})
      this.setData({opacity:(mainOffsetTop-top)/(mainOffsetTop)})
    }).exec()
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
    this.setData({
      idNumber:hideIDNumber("511523200208133857"),
      name:hideName("北风")
    })
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
})