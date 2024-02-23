import api from '../../api/api';
import {UserDataInterface} from '../../interface';
import {httpRequest} from '../../../utils/HttpUtils';
import { createStoreBindings } from 'mobx-miniprogram-bindings'
import {store} from '../../../store/index';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: 0,// 底部导航栏当前下标,
    isInitPage:false,// 是否已经加载用户信息
    isInitComponent:[true,false,false,false]// 用来判断底部四个tab选项卡是否已经初始化，默认第一个已经初始化
  },

  useTab(event:ClickEvent){
    const activeIndex = event.currentTarget.dataset.index
    this.data.isInitComponent[activeIndex] = true;
    this.setData({activeIndex,isInitComponent:this.data.isInitComponent});
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    const token = wx.getStorageSync('token');
    httpRequest.setToken(token);
    // 返回值作用，在页面被卸载的时候做一些清理性质的工作
    this.storeBindings = createStoreBindings(this, { // 这些绑定到this（此页面上）
        store, // 数据源
        fields: ['userData'], // 数据字段
        actions: ['setUserData'] // 方法
      });
    httpRequest.get<UserDataInterface>(api.getUserData).then((res)=>{
        const userData:UserDataInterface =  res.data;
        this.setUserData(userData);
        wx.setStorage({key:'token', data:res.token});
        httpRequest.setToken(res.token);
        this.setData({
            isInitPage:true
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
    this.storeBindings.detroyStoreBindings()
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