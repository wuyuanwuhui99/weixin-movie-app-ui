import {httpRequest,MyAwesomeData} from '../../utils/HttpUtils';
import api from '../api/api';
import {MovieInterface,UserDataInterface} from '../interface/index'

/**
 * @description: 获取搜索词
 * @date: 2023-12-2 23:57
 * @author wuwenqiang
 */
export const getKeyWordService = (classify:String):Promise<MyAwesomeData<MovieInterface>> => {
    return httpRequest.get<MovieInterface>(api.getKeyWord,{classify});
}

/**
 * @description: 根据token获取用户信息
 * @date: 2023-12-1 23:39
 * @author wuwenqiang
 */
export const getUserDataService = (token:string):Promise<MyAwesomeData<UserDataInterface>>=> {
    httpRequest.setToken(token);
    return httpRequest.get<UserDataInterface>(api.getUserData);
  }

  /**
 * @description: 根据分类获取电影
 * @date: 2023-12-2 23:57
 * @author wuwenqiang
 */

/**
 * @description: 根据大分类和小分类获取电影列表数据
 * @date: 2023-12-1 23:09
 * @author wuwenqiang
 */
export const getCategoryListService = (classify:string,category:string):Promise<MyAwesomeData<Array<MovieInterface>>>=> {
    console.log(classify,category,111)
    return httpRequest.get<Array<MovieInterface>>(api.getCategoryList,{category,classify})
  }