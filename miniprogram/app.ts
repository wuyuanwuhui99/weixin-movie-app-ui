// app.ts
import api from './api/api';
import UserDataInterface from './interface/UserDataInterface';

App<IAppOption>({
    globalData: {
        userData: {},
        token: ''
    },

    async onLaunch() {
        // 展示本地存储能力
        await this.getUserData();
    },

    getUserData() {
        const token = wx.getStorageSync('token');
        return new Promise((resolve) => {
            wx.request({
                url: api.getUserData,
                method: "GET",
                header: {"Authorization": token},
                success: ({data}) => {
                    this.globalData.userData = data.data as UserDataInterface;
                    this.globalData.token = data.token;
                    wx.setStorage('token', data.token)
                    resolve();
                }
            })
        })

    }
})
