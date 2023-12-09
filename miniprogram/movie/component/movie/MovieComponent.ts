import { ClassifyInterface } from '../../interface';
import {getAllCategoryListByPageNameService} from '../../service/index';

Component({

    /**
     * 组件的初始数据
     */
    data: {
        isDone:false,
        allCategoryList: [] as Array<ClassifyInterface>,
        currentCategoryList: [] as Array<ClassifyInterface>,
    },

    created(){
        this.useAllCategoryListByPageName()
    },

    /**
     * 组件的方法列表
     */
    methods: {
        /**
         * @description: 获取电影首页所有的分类
         * @author wuwenqiang
         * @date 2023-12-03 10:12
        */
       useAllCategoryListByPageName() {
            getAllCategoryListByPageNameService('电影').then((res)=>{
                this.setData({
                    currentCategoryList: res.data.slice(0,2),
                    allCategoryList: res.data
                })
            })
        },

        useLoadMore(){
            const {currentCategoryList,allCategoryList} = this.data;
            currentCategoryList.push(...allCategoryList.slice(currentCategoryList.length, currentCategoryList.length + 2))
            this.setData({
                currentCategoryList
            })
        }
    }
})
