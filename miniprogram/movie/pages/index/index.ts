Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: 0,// 底部导航栏当前下标,
    isInit:[true,false,false,false]// 用来判断底部四个tab选项卡是否已经初始化，默认第一个已经初始化
  },

  useTab(event:ClickEvent){
    const activeIndex = event.currentTarget.dataset.index
    this.data.isInit[activeIndex] = true;
    this.setData({activeIndex,isInit:this.data.isInit});
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

  }
})