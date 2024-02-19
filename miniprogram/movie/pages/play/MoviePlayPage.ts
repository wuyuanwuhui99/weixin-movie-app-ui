import { HOST } from '../../../config/constant';
import { getCommentCountService, savePlayRecordService, getMovieUrlService, getRecommentListService, isFavoriteService, saveFavoriteService, deleteFavoriteService } from '../../service/index';
import { MovieInterface, MovieUrlInterface } from '../../interface/index';

Page({

    /**
     * 页面的初始数据
     */
    data: {
        movieItem: {} as MovieInterface,
        currentUrl: '' as string,// 当前播放地址
        commonCount: 0 as number,// 评论数量
        isFavorite: false as boolean,// 是否收藏
        movieUrlGroup: [] as Array<Array<MovieUrlInterface>>,//电影分组
        currentUrlGroup: 0 as number,// 播放的分组
        recommentList: [] as Array<MovieInterface>// 推荐电影
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options: any) {
        const movieItem: MovieInterface = JSON.parse(decodeURIComponent(options.data)) as MovieInterface
        movieItem.id = 72667;// 测试数据
        this.setData({ movieItem });

        /**
         * @description: 获取播放地址分组
         * @date: 2023-12-28 22:34
         * @author wuwenqiang
         */
        getMovieUrlService(movieItem.id).then(res => {
            const movieUrlGroup: Array<Array<MovieUrlInterface>> = [];
            res.data.forEach((dItem, dIndex) => {
                if (dIndex == 0) {
                    this.setData({ currentUrl: dItem.url })
                }
                const index: number = movieUrlGroup.findIndex((mItem) => mItem[0].playGroup === dItem.playGroup)
                if (index != -1) {
                    movieUrlGroup[index].push(dItem);
                } else {
                    movieUrlGroup.push([dItem]);
                }
            })
            this.setData({ movieUrlGroup });
        });

        /**
         * @description: 获取评论数量
         * @date: 2023-12-28 22:34
         * @author wuwenqiang
         */
        getCommentCountService(movieItem.id).then((res) => {
            this.setData({
                commonCount: res.data
            })
        })

        /**
         * @description: 获取推荐的电影列表
         * @date: 2023-12-28 22:34
         * @author wuwenqiang
         */
        getRecommentListService(movieItem.classify).then(res => {
            this.setData({ recommentList: res.data })
        })

        /**
         * @description: 查询是否已经收藏
         * @date: 2023-12-28 22:34
         * @author wuwenqiang
         */
        isFavoriteService(movieItem.id).then((res) => {
            this.setData({ isFavorite: res.data > 1 })
        })

        /**
        * @description: 保存播放记录
        * @date: 2023-12-28 22:34
        * @author wuwenqiang
        */
        savePlayRecordService(movieItem);
    },

    /**
       * @description: 切换播放分组
       * @date: 2023-12-28 22:34
       * @author wuwenqiang
       */
    useTabPlayGroup(e: ClickEvent) {
        const index: number = Number(e.currentTarget.dataset.index)
        this.setData({
            currentUrlGroup: index
        })
    },

    /**
     * @description: 添加收藏
     * @date: 2023-12-28 22:34
     * @author wuwenqiang
     */
    useSaveFavorite() {
        saveFavoriteService(this.data.movieItem).then((res) => {
            this.setData({ isFavorite: res.data > 0 });
        })
    },

    /**
    * @description: 取消收藏
    * @date: 2023-12-28 22:34
    * @author wuwenqiang
    */
    useDeleteFavorite() {
        deleteFavoriteService(this.data.movieItem.id).then((res) => {
            this.setData({ isFavorite: !(res.data > 0) });
        })
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