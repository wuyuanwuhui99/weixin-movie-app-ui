import {HOST} from '../../../config/constant';
import { ClassifyInterface } from '../../interface';
import {getKeyWordService,getAllCategoryListByPageNameService} from '../../service/index';

const app = getApp();
Component({

    created(){
        this.useMovieKeyWord();
        this.useAllCategoryListByPageName()
    },

    attached(){
        this.setData({
            avater: HOST + app.globalData.userData.avater
        });
    },

    /**
     * 组件的初始数据
     */
    data: {
        keyword: '',
        avater: null,
        allCategoryList:[] as Array<ClassifyInterface>
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

        /**
         * @description: 获取电影首页所有的分类
         * @author wuwenqiang
         * @date 2023-12-03 10:12
        */
       useAllCategoryListByPageName() {
            getAllCategoryListByPageNameService('首页').then((res)=>{
                this.setData({
                    allCategoryList: res.data
                })
            })
        }
    }
})
