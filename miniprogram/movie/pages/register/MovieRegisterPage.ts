import { UserDataInterface } from '../../interface/index';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userData: {} as UserDataInterface,
        showSexCheckDialog: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {

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

    },

    /**
    * @author: wuwenqiang
    * @description: 选择性别
    * @date: 2024-02-25 22:35
    */
    useShowSexDialog() {
        this.setData({
            showSexCheckDialog: true
        });
    },

    /**
     * @author: wuwenqiang
     * @description: 关闭性别选择框
     * @date: 2024-02-25 12:17
     */
    useCloseSexDialog() {
        this.setData({
            showSexCheckDialog: false
        })
    },

    /**
      * @author: wuwenqiang
      * @description: 选择性别
      * @date: 2024-02-25 12:17
    */
    useCheckSex(e: CheckEvent) {
        this.setData({
            userData: {
                ...this.data.userData,
                sex: e.detail
            }
        })
    },

    /**
       * @author: wuwenqiang
       * @description: 选择出生年月日
       * @date: 2024-02-25 12:17
       */
      useBirthdayChange(e: ChangeEvent) {
        this.setData({
            userData: {
                ...this.data.userData,
                birthday: e.detail.value
            }
        })
    }
})