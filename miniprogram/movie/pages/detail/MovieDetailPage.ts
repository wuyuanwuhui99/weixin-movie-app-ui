import { HOST } from '../../../config/constant';
import { getMovieStartListService, getRecommentListService } from '../../service/index';
import { MovieInterface, StarInterface } from '../../interface/index';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        movieItem: {} as MovieInterface,
        recommentList: [] as Array<MovieInterface>,
        starList: [] as Array<StarInterface>,
        HOST,
        scoreStar: [] as Array<string>// 星星的数据
    },

    useScoreStar(score: number) {
        if (score) {
            const scoreStar = []
            for (let i = 0; i < 5; i++) {
                let ststus = '';
                if (score > i * 2 + 1.5) {
                    ststus = 'full';// 满星
                } else if (score >= i * 2 + 1) {
                    ststus = 'half'// 半颗星 
                } else {
                    ststus = 'empty'// 空星
                }
                scoreStar.push(ststus);
                this.setData({ scoreStar })
            }
        }
    },
    usePlayRouter(e: ClickEvent) {
        wx.navigateTo({
            url: `../play/MoviePlayPage?data=${encodeURIComponent(JSON.stringify(this.data.movieItem))}`
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options: any) {
        const movieItem: MovieInterface = JSON.parse(options.data) as MovieInterface
        movieItem.id = 16575 //有数据的电影id
        this.data.movieItem = movieItem;
        this.setData({
            movieItem
        })
        this.useScoreStar(Number(movieItem.score))
        getMovieStartListService(movieItem.id).then((res) => {
            this.setData({
                starList: res.data
            })
        })
        getRecommentListService(movieItem.classify).then((res) => {
            this.setData({
                recommentList: res.data
            })
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