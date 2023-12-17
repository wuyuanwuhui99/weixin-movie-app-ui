import {MovieInterface} from "../../interface"
import {HOST} from '../../../config/constant'

Component({

  /**
   * 组件的属性列表
   */
  properties: {
    list:{
        type: Array<MovieInterface>,
        value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    HOST
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})