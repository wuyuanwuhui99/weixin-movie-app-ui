import {HOST} from '../../../config/constant';
const app = getApp();
Component({

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
        avater: app.globalData.userData ? HOST + app.globalData.userData.avater : null
    },

    /**
     * 组件的方法列表
     */
    methods: {
        init() {
            console.log(111)
        }
    },

    observers: {
        isInit(value) {
            if (value) {
                this.init();
            }
        }
    }
})
