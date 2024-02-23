import { observable, action } from 'mobx-miniprogram'
import {UserDataInterface} from '../movie/interface/index';

export const store = observable({
  
  // 数据字段
  userData: {} as UserDataInterface, 
  
  //actions
  setUserData: action( function(userData) {
    this.userData = userData;
  }),
})