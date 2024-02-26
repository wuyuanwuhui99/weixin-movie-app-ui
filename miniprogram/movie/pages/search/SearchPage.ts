import { MovieInterface } from '../../interface';
import { getRecommendService,getSearchService } from '../../service/index';

Page({

    /**
     * 页面的初始数据
     */
    data: {
        keyword: "",// 搜索关键字
        placeholder: "",// 搜索提示语
        loading: false,// 是否在加载中
        searching:false,// 是否在搜索中
        searchRecordList: [] as Array<string>,// 搜索列表
        recommentList: [] as Array<MovieInterface>,// 推荐列表
        searchList: [] as Array<MovieInterface>,// 搜索结果列表
        pageNum:1,
        pageSize:20,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options: any) {
        const placeholder: string = decodeURIComponent(options.keyword as string);
        this.setData({ placeholder })
        wx.getStorage({
            key:"historyMovieLabels",
            success:(res)=>{
                console.log(111,res)
                if(res){
                    this.setData({searchRecordList:res.data.split(",")})
                }
                
            }
        }) 
        /**
         * @description: 获取推荐的电影
         * @date: 2024-02-26 22:23
         * @author wuwenqiang
         */
        getRecommendService(options.classify as string).then((res)=>{
            this.setData({recommentList:res.data});
        })
    },

    /**
     * @author: wuwenqiang
     * @description: 输入框输入事件
     * @date: 2024-02-21 22:26
     */
    useInputValue(e: InputEvent) {
        this.setData({keyword:e.detail.value})
    },

     /**
     * @author: wuwenqiang
     * @description: 清除搜索内容
     * @date: 2024-02-21 22:26
     */
    useClear(){
        if(this.data.loading)return;
        this.setData({
            searching:false,
            keyword:""
        })
    },

    /**
	 * @description: 搜索
	 * @date: 2024-01-30 22:24
	 * @author wuwenqiang
	 */
	useSearch (){
		if(!this.data.keyword){
            this.setData({keyword:this.data.placeholder});
		}
		if(this.data.loading)return;
        this.setData({
            searching:true,
            loading:true
        });
		const index = this.data.searchRecordList.findIndex(item=>item === this.data.keyword);
		if(index!==-1){
            this.data.searchRecordList.splice(index,1);
		}
        this.data.searchRecordList.unshift(this.data.keyword);
        this.setData({searchRecordList:this.data.searchRecordList});
		wx.setStorage({key:"historyMovieLabels",data:this.data.searchRecordList.join(",")})
		getSearchService(this.data.keyword,this.data.pageNum,this.data.pageSize).then(res=>{
            this.setData({searchList:res.data})
		}).finally(()=>{
            this.setData({loading:false});
		})
	},
	/**
	 * @description: 点击历史搜索记录进行搜索
	 * @date: 2024-02-26 22:36
	 * @author wuwenqiang
	 */
	useLabelSearch (e:ClickEvent){
        this.setData({keyword:e.currentTarget.dataset.item});
        this.useSearch()
    },
    
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})