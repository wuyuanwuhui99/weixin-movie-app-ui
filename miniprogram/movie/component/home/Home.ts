import {HOST} from '../../../config/constant';
import {getKeyWordService} from '../../service/index';
import Movieinterface from '../../interface/Movieinterface';

const app = getApp();
Component({

    created(){
        this.setData({
            avater: HOST + app.globalData.userData.avater
        })
        this.useMovieKeyWord();
    },

    /**
     * 组件的初始数据
     */
    data: {
        keyword: '',
        avater: app.globalData.userData ? HOST + app.globalData.userData.avater : null
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
                const searchMovie:Movieinterface = res.data as Movieinterface;
                this.setData({
                    keyword: searchMovie.movieName
                });
            })
        }
    }
})
