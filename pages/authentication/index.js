// pages/authentication/index.js
import {validateIDCard, validateName} from '../../utils/index'
import Notify from '@vant/weapp/notify/notify';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    idNumber:"",
    nameError:"",
    idNumberError:"",
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
  handleNameChange(){
    this.setData({
      nameError:""
    })
  },
  handleNameBlur(){
    const {name} =this.data
    let nameError=''
    if(!name){
      nameError="请输入中文用户名"
    }else if(!validateName(name)){
      nameError="输入空格、英文及特殊符号无效"
    }
    this.setData({nameError})
  },
  handleIdNumberChange(){
    this.setData({
      idNumberError:""
    })
  },
  handleIdNumberBlur(){ 
    const {idNumber} =this.data
    let idNumberError=''
    if(!idNumber){
      idNumberError="请输身份证号码"
    }else if(!validateIDCard(idNumber)){
      idNumberError="请输入有效的证件号码"
    }
    this.setData({idNumberError})
  },
  onChange(event) {
    this.setData({
      active: event.detail,
      showDialog:event.detail
    });
  },
  handleSubmit(){
    const {active,name,idNumber} = this.data
    this.handleNameBlur()
    this.handleIdNumberBlur()
    if(!(name&&idNumber)){
      Notify('请填写用户信息');
      return
    }
    if(!active){
      wx.showToast({
        title: '请先阅读并勾选用户协议',
        icon:"none"
      })
      return
    }
    wx.setStorageSync('userInfo', {name,idNumber})
    wx.navigateTo({
      url: '/pages/home/index',
    })
  },
  handleCancel() {
    this.setData({ showDialog: false,active:false });
  },
  handleConfirm(){
    this.setData({ showDialog: false,active:true });
  }
})