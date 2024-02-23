import { UserDataInterface } from '../../interface/index';
import {HOST} from '../../../config/constant';
import { updateUserDataService } from '../../service/index';
import { createStoreBindings } from 'mobx-miniprogram-bindings'
import {store} from '../../../store/index';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"",// 修改的字段名称
    field:"",// 修改的字段
    loadding:false,
    inputValue:"",// 用户修改的值
    showEditDialog:false,// 是否展示编辑弹窗
    showLogoutDialog:false,// 是否显示退出登录弹窗
    HOST,// 头像域名
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.storeBindings = createStoreBindings(this, { // 这些绑定到this（此页面上）
        store, // 数据源
        fields: ['userData'], // 数据字段
        actions: ['setUserData'] // 方法
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

  // 编辑用户信息
  useEditUserData(e:ClickEvent){
    this.setData({
        inputValue: this.data.userData[e.currentTarget.dataset.field],
        field: e.currentTarget.dataset.field,
        title:e.currentTarget.dataset.title,
        showEditDialog: true
    });
  },

  // 用户编辑框
  bindInput(e:ChangeEvent){
    this.data.inputValue = e.detail.value;
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
      if(this.data.loadding)return;
      this.data.loadding = true;
    const mUserData:UserDataInterface = {...this.data.userData};
    mUserData[this.data.field] = this.data.inputValue;
    updateUserDataService(mUserData).then(()=>{
        this.setUserData(mUserData);
        this.useCloseDialog();
    }).finally(()=>{
        this.data.loadding = false;
    });
  },

  useLogout(){
      this.setData({
        showLogoutDialog:true
      })
  }
})