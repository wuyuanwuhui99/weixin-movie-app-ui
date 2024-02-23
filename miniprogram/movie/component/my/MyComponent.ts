import { createStoreBindings, storeBindingsBehavior } from 'mobx-miniprogram-bindings'
import { store } from '../../../store/index';

import {
    getUserMsgService,
    getPlayRecordMovieListService,
    getMyFavoriteMovieListService,
    getMyViewsMovieListService
} from '../../service/index';

Component({
    
  behaviors: [storeBindingsBehavior],
  storeBindings: {
    // 数据源
    store, // 指定要绑定的Store
    fields: { // 要绑定的字段数据
        userData: 'userData'
    }
  },
    /**
     * 组件的属性列表
     */
    properties: {
        isInit: {
            type: Boolean,
            value: false
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        userData:{},
        userMsg: {},
        loading:false,
        showPlayMovieList:true, // 是否展示观看记录，初始化默认false
        playMovieList:[],
        showMyFavoriteMovieList:false,
        myFavoriteMovieList:[],
        showMyViewsMovieList:false,
        myViewsMovieList:[]
    },

    attached(){
        this.storeBindings = createStoreBindings(this, { // 这些绑定到this（此页面上）
            store, // 数据源
            fields: ['userData'], // 数据字段
      })
    },

    created(){
        this.useUserMsg()
        this.usePlayRecordMovieList()
    },

    /**
     * 组件的方法列表
     */
    methods: {
        /**
         * @description: 获取用户信息
         * @date: 2023-12-17 16:02
         * @author wuwenqiang
        */
        useUserMsg():void{
            getUserMsgService().then(res => {
                this.setData({
                    userMsg: res.data
                })
            }).finally(()=>{
                this.data.loading = false;
            })
        },

        /**
         * @description: 获取播放记录
         * @date: 2023-12-17 16:02
         * @author wuwenqiang
        */
        usePlayRecordMovieList(){
            getPlayRecordMovieListService().then(res => {
                this.setData({
                    playMovieList:res.data
                })
            }).finally(()=>{
                this.data.loading = false;
            })
        },
       
        /**
         * @description: 展开或收起播放记录
         * @date: 2023-12-17 16:02
         * @author wuwenqiang
        */
        useTogglePlayList():void {
            this.data.showPlayMovieList = !this.data.showPlayMovieList
            this.setData({
                showPlayMovieList:this.data.showPlayMovieList
            })
            // 如果是展开状态，获取播放记录
            if(this.data.showPlayMovieList && !this.data.loading){
                this.usePlayRecordMovieList()
            }
        },

        /**
         * @description: 展开或收起收藏
         * @date: 2023-12-17 16:02
         * @author wuwenqiang
        */
        useToggleMyFavorite():void{
            this.data.showMyFavoriteMovieList = !this.data.showMyFavoriteMovieList
            this.setData({
                showMyFavoriteMovieList:this.data.showMyFavoriteMovieList
            })
            // 如果是展开状态，获取播放记录
            if(this.data.showMyFavoriteMovieList && !this.data.loading){
                getMyFavoriteMovieListService(1,20).then( res => {
                    this.setData({
                        myFavoriteMovieList:res.data
                    })
                }).finally(()=>{
                    this.data.loading = false;
                })
            }
        },

        /**
         * @description: 展开或收起浏览过的电影
         * @date: 2023-12-17 16:02
         * @author wuwenqiang
        */
        useToggleMyViews():void{
            this.data.showMyViewsMovieList = !this.data.showMyViewsMovieList
            this.setData({
                showMyViewsMovieList:this.data.showMyViewsMovieList
            })
            // 如果是展开状态，获取播放记录
            if(this.data.showMyViewsMovieList && !this.data.loading ){
                getMyViewsMovieListService(1,20).then( res => {
                    this.setData({
                        myViewsMovieList:res.data
                    })
                }).finally(()=>{
                    this.data.loading = false;
                })
            }
        },

        useNavigateTo(e:ClickEvent):void{
            wx.navigateTo({//页面跳转，传递字符串参数
                url: '../../pages/userEdit/UserEditPage'
            })
        }
    },
})
