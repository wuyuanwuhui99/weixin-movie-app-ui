import {ClassifyInterface, MovieInterface} from '../../interface/index';
import {getCategoryListService} from '../../service/index';
import {HOST} from '../../../config/constant';
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    classifyItem:{
        type: Object,
        value:{} as ClassifyInterface
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    HOST,
    movieList:[] as Array<MovieInterface>
  },

  attached(){
    this.useCategoryList();
  },

  /**
   * 组件的方法列表
   */
  methods: {
    useCategoryList(){
        console.log(this.properties.classifyItem)
        getCategoryListService(this.properties.classifyItem).then((res)=>{
            console.log(res)
            this.setData({
                movieList: res.data
            })
        })
    }
  }
})