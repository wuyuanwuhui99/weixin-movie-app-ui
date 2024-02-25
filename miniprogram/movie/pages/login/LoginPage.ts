import { loginService } from '../../service/index';
import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { store } from '../../../store/index';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userId: '',
        password: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
        this.storeBindings = createStoreBindings(this, { // 这些绑定到this（此页面上）
            store, // 数据源
            fields: ['userData'], // 数据字段
            actions: ['setUserData'] // 方法
        });
        this.data.userId = store.userData.userId;
        const password = wx.getStorageSync(this.data.userId)
        if(password){
            this.setData({password});
        }
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
        this.storeBindings.destroyStoreBindings()
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
    * @description: 登录
    * @date: 2024-2-25 16:00
    * @author wuwenqiang
    */
    useLogin() {
        if (!this.data.userId.trim()) {
            wx.showToast({
                duration: 2000,
                position: 'center',
                title: '账号不能为空'
            })
        } else if (!this.data.password.trim()) {
            wx.showToast({
                duration: 2000,
                position: 'center',
                title: '密码不能为空'
            })
        } else {
            loginService(this.data.userId, this.data.password).then((res) => {
                wx.setStorageSync('token', res.token);
                wx.setStorage({ key: this.data.userId, data: this.data.password });
                wx.showToast({
                    duration: 1000,
                    position: 'center',
                    title: '登录成功'
                })
                setTimeout(()=>{
                    wx.reLaunch({
                        url: `../index/IndexPage`
                    })
                },1000)
            }).catch(() => {
                wx.showToast({
                    duration: 2000,
                    position: 'center',
                    title: '账号或密码错误'
                })
            })
        }
    },

    /**
     * @description: 跳转注册页面
     * @date: 2024-2-25 16:00
     * @author wuwenqiang
     */
    useRegister() {
        wx.navigateTo({
            url: `../register/MovieRegisterPage`
        })
    },

    /**
     * @description: 输入账号
     * @date: 2024-2-25 16:00
     * @author wuwenqiang
     */
    useInputUserId(e:InputEvent) {
        this.data.userId = e.detail.value
    },

    /**
     * @description: 输入密码
     * @date: 2024-2-25 16:00
     * @author wuwenqiang
     */
    useInputPassword(e:InputEvent) {
        this.data.password = e.detail.value
    }
})