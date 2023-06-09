import {getSystemInfo} from '../../utils/index'
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isHome:Boolean,
    background:{
      type:String,
      value:"#fff"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    navigation:null
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  lifetimes:{
    attached(){
      console.log("11241");
      this.setData({navigation:getSystemInfo()})
      console.log(this.properties);
    }
  }
})
