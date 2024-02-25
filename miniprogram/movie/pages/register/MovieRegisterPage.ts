import { UserDataInterface } from '../../interface/index';
import { getUserByIdService,registerService } from '../../service/index';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userData: {
            userId: '',
            username: '',
            telephone: '',
            email: '',
            birthday: '',
            sex: '',
            password: '',
            sign: '',
            region: ''
        } as UserDataInterface,
        showSexCheckDialog: false,
        confirmPassowrd:"",
        loading:false
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
    * @description: 输入字段双向绑定
    * @date: 2024-02-25 22:35
    */
    useInput(e:InputEvent){
        if(e.currentTarget.dataset.field === 'confirmPassowrd'){
            this.data.confirmPassowrd = e.detail.value
        }else{
            this.data.userData[e.currentTarget.dataset.field] = e.detail.value
        }
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
    },

    /**
	 * @author: wuwenqiang
	 * @description: 校验账号和密码
	 * @date: 2024-01-20 00:17
	 */
	useVerifyUserId () {
		if(this.data.loading)return;
		this.data.loading = true;
		this.useCheckUserId().finally(()=>this.data.loading = false);
    },
    
    	/**
	 * @author: wuwenqiang
	 * @description: 校验账号和密码
	 * @date: 2024-01-20 00:17
	 */
	useCheckUserId(): Promise<boolean> {
		return getUserByIdService(this.data.userData.userId).then((res)=>{
			if(res.data > 0){
				wx.showToast({
					title: '账号已存在',
					icon: "none"
				});
				return false;
			}
			return true;
		});
    },

    /**
	 * @author: wuwenqiang
	 * @description: 注册
	 * @date: 2024-02-25 22:52
	 */
	async useRegister(){
		if(!this.data.userData.userId){
			wx.showToast({
				title: '请输入账号',
				icon: "none"
			});
		}else if(!this.data.userData.password){
			wx.showToast({
				title: '请输入密码',
				icon: "none"
			});
		}else if(!this.data.confirmPassowrd){
			wx.showToast({
				title: '请输入确认密码',
				icon: "none"
			});
		}else if(!this.data.userData.username){
			wx.showToast({
				title: '请输入昵称',
				icon: "none"
			});
		}else if(this.data.userData.password !== this.data.confirmPassowrd){
			wx.showToast({
				title: '确认密码错误',
				icon: "none"
			});
		}else{
			if(this.data.loading)return;
			this.data.loading = true;
			const verify = await this.useCheckUserId();
			if(verify){
				await registerService({...this.data.userData}).then((res)=>{
                    wx.setStorageSync('token',res.token);
					wx.reLaunch({
						url: `../index/IndexPage`
                    })
                    wx.setStorage({key:this.data.userData.userId,data:this.data.userData.password});
				})
			}
			this.data.loading = false;
		}
	}
})