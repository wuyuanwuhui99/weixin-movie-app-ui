import {HOST} from '../../../config/constant';
const app = getApp();

Component({

  /**
   * 组件的属性列表
   */
  properties: {
    size:{
        type: String,
        value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    avater:'',
    sizeMap:{
        middle:'user-avater-middle'
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  attached(){
    this.setData({
        avater: HOST + app.globalData.userData.avater
    });
  }
})