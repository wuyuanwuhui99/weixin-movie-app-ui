const app = getApp();
import { UserDataInterface } from '../../interface/index';
import {HOST} from '../../../config/constant';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userData: {} as UserDataInterface,
    title:"",// 修改的字段名称
    field:"",// 修改的字段
    inputValue:"",// 用户修改的值
    showEditDialog:false,// 是否展示编辑弹窗
    showLogoutDialog:false,// 是否显示退出登录弹窗
    HOST,// 头像域名
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.setData({
        userData:app.globalData.userData as UserDataInterface
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

  },

  // 编辑用户信息
  useEditUserData(e:ClickEvent){
    this.setData({
        title:e.currentTarget.dataset.title,
        showEditDialog: true
    });
    this.data.field = e.currentTarget.dataset.field;
  },

  // 用户编辑框
  bindInput(e:ChangeEvent){
    this.data.inputValue = e.detail.value
  },

  /**
	 * @author: wuwenqiang
	 * @description: 关闭用户信息编辑和退出登录对话框
	 * @date: 2024-02-21 22:26
	 */
  useCloseDialog(){
    this.setData({
        showLogoutDialog:false,
        showEditDialog: false
    });
  },

  /**
	 * @author: wuwenqiang
	 * @description: 确定修改用户信息
	 * @date: 2024-02-21 22:26
	 */
  useSure(){

  },

  useLogout(){
      this.setData({
        showLogoutDialog:true
      })
  }
})