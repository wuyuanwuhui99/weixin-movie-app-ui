import {getKeyWordService} from '../../service/index';

Component({
    
    created(){
        this.useMovieKeyWord();
    },

  /**
   * 组件的属性列表
   */
  properties: {
    classify:{
        type: String,
        value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    keyword:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
     /**
         * @description: 获取电影搜索关键字
         * @author wuwenqiang
         * @date 2023-11-25 17:07
        */
       useMovieKeyWord() {
        getKeyWordService('电影').then((res)=>{
            this.setData({
                keyword: res.data.movieName,
            });
        })
    },
  }
})