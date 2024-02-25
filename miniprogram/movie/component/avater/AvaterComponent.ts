import {HOST} from '../../../config/constant';
import { createStoreBindings, storeBindingsBehavior } from 'mobx-miniprogram-bindings'
import { store } from '../../../store/index';

Component({
    behaviors: [storeBindingsBehavior],
    storeBindings: {
      // 数据源
      store, // 指定要绑定的Store
      fields: { // 要绑定的字段数据
          userData: 'userData'
      },
      HOST
    },
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
        middle:'user-avater-middle',
        big: 'user-avater-big'
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  attached(){
    createStoreBindings(this, { // 这些绑定到this（此页面上）
        store, // 数据源
        fields: ['userData'], // 数据字段
    });
    if(this.data.userData.avater){
        this.setData({
            avater:HOST + this.data.userData.avater
        })
    }
    
  }
})