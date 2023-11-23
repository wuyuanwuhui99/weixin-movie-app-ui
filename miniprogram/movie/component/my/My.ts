// component/tv/Tv.ts
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
    data: {},

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
