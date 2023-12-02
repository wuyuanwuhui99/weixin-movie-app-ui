import api from '../../api/api';
import {UserDataInterface} from '../../interface';
import {httpRequest} from '../../../utils/HttpUtils';
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: 0,// 底部导航栏当前下标,
    isInitData:false,// 是否已经加载用户信息
    isInitPage:[true,false,false,false]// 用来判断底部四个tab选项卡是否已经初始化，默认第一个已经初始化
  },

  useTab(event:ClickEvent){
    const activeIndex = event.currentTarget.dataset.index
    this.data.isInitPage[activeIndex] = true;
    this.setData({activeIndex,isInitPage:this.data.isInitPage});
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    const token = wx.getStorageSync('token');
    httpRequest.setToken(token);
    httpRequest.get<UserDataInterface>(api.getUserData).then((res)=>{
        const userData:UserDataInterface =  res.data;
        app.globalData.userData = userData;
        wx.setStorage('token', res.token);
        httpRequest.setToken(res.token);
        this.setData({
            isInitData:true
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