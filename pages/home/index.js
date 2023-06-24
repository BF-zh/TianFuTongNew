// pages/home/index.ts
import {
  hideIDNumber,
  hideName,
  getCurrentTime
} from '../../utils/index'
import drawQrcode from 'weapp-qrcode-canvas-2d'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isInit: false,
    navigationColor: "",
    name: "",
    mainOffsetTop: 0,
    opacity: 0,
    idNumber: "",
    time:"",
    showQr: true,
    list: [{
        src: "/static/hs.png",
        text: "核酸检测\n结果查询",
        url:"/pages/resultQuery/index"
      },
      {
        src: "/static/yl.png",
        text: "医疗防疫\n结构查询"
      },
      {
        src: "/static/xz.png",
        text: "下载健康码"
      },
      {
        src: "/static/zx.png",
        text: "我要咨询"
      },
      {
        src: "/static/gj.png",
        text: "国家政务\n服务平台"
      },
      {
        src: "/static/qt.png",
        text: "其他服务"
      },
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },
  onPageScroll() {
    wx.createSelectorQuery().select('#main').boundingClientRect(({
      top
    }) => {
      const {
        isInit,
        mainOffsetTop,
        opacity,
        navigationColor
      } = this.data
      if (!isInit) {
        this.setData({
          isInit: true,
          mainOffsetTop: top
        })
      }
      if (top < 0) return this.setData({
        opacity: 1
      })
      opacity > .5 ? this.setData({
        navigationColor: "#000"
      }) : this.setData({
        navigationColor: "#fff"
      })
      this.setData({
        opacity: (mainOffsetTop - top) / (mainOffsetTop)
      })
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
    const userInfo = wx.getStorageSync("userInfo") || {}
    this.setData({
      idNumber: hideIDNumber(userInfo.idNumber || ''),
      name: hideName(userInfo.name || ''),
      showQr:userInfo.name?true:false
    })
    if(userInfo.name){
      this.setData({time:getCurrentTime()})
      setInterval(()=>{
        this.setData({time:getCurrentTime()})
      },500)
      this.drew()
    }
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
  handleToLogin() {
    const {
      name
    } = this.data
    if (name) return
    wx.navigateTo({
      url: '/pages/login/index',
      fail() {
        wx.showToast({
          title: '当前页面维护',
        })
      }
    })
  },
  drew() {
    const query = wx.createSelectorQuery();
    query.select('#myQrcode')
      .fields({
        node: true,
        size: true
      })
      .exec(async (res) => {
        const canvas = res[0].node
        const img = canvas.createImage();
        img.src = "/static/logo.png"
        img.onload = function () {
          const options = {
            canvas: canvas,
            canvasId: 'myQrcode',
            width: canvas.width,
            padding: 30,
            paddingColor: '#fff',
            background: '#fff',
            foreground: '#49a55e',
            text: '我宣你呀',
            image: {
              imageResource: img,
              width: 80, // 建议不要设置过大，以免影响扫码
              height: 80, // 建议不要设置过大，以免影响扫码
              round: true // Logo图片是否为圆形
            }
          }
          drawQrcode(options)
        };
      })
  },
  handleToUserInfo(){
    wx.navigateTo({
      url: '/pages/userInfo/index',
    })
  },
  handleOpenScan(){
    wx.scanCode({
      onlyFromCamera: true,
      success (res) {
        console.log(res)
      }
    })
  },
  handleListItem({currentTarget}){
    const {item} = currentTarget.dataset
    wx.navigateTo({
      url:item.url,
      fail(){
        wx.showToast({
          title: '当前页面维护中',
          icon:"none"
        })
      }
    })
    console.log(item);
  }
})