import {MovieInterface} from '../../interface/index';
import {getCategoryListService} from '../../service/index';
import {HOST} from '../../../config/constant';

Component({

  /**
   * 组件的属性列表
   */
  properties: {
    classify:{
        type:String,
        value:'电影'
    }
  },

  created(){
    this.useCategoryList();
  },

  /**
   * 组件的初始数据
   */
  data: {
    HOST,
    movieList:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    useCategoryList(){
        getCategoryListService(this.properties.classify,'轮播').then((res)=>{
            this.setData({
                movieList: res.data.slice(0,5)
            })
        })
    }
  }
})