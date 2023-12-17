import {httpRequest,MyAwesomeData} from '../../utils/HttpUtils';
import api from '../api/api';
import {
    MovieInterface,
    UserDataInterface,
    ClassifyInterface,
    StarInterface,
    UserMsgInterface
} from '../interface/index';

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
export const getCategoryListService = (classifyItem:ClassifyInterface):Promise<MyAwesomeData<Array<MovieInterface>>>=> {
    return httpRequest.get<Array<MovieInterface>>(api.getCategoryList,classifyItem)
  }

  /**
 * @description: 根据页面获取所有分类
 * @date: 2023-123 11:07
 * @author wuwenqiang
 */
  export const getAllCategoryListByPageNameService = (pageName:string):Promise<MyAwesomeData<Array<ClassifyInterface>>>=> {
    return httpRequest.get<Array<ClassifyInterface>>(api.getAllCategoryListByPageName,{pageName})
  }

   
/**
* @description: 获取用户使用天数和访问记录数量等
* @date: 2023-12-10 22:40
* @author wuwenqiang
*/
export const getUserMsgService = ():Promise<MyAwesomeData<UserMsgInterface>>=> {
	return httpRequest.get<UserMsgInterface>(api.getUserMsg)
}

/**
 * @description: 获取用户观看记录
 * @date: 2023-12-14 22:49
 * @author wuwenqiang
 */
export const getPlayRecordMovieListService = ():Promise<MyAwesomeData<Array<MovieInterface>>>=> {
  return httpRequest.get<Array<MovieInterface>>(api.getPlayRecord)
}

/**
 * @description: 获取用户收藏的电影
 * @date: 2023-12-15 22:26
 * @author wuwenqiang
 */
export const getMyFavoriteMovieListService = (pageNum:number,pageSize:number):Promise<MyAwesomeData<Array<MovieInterface>>>=> {
  return httpRequest.get<Array<MovieInterface>>(`${api.getFavorite}?pageNum=${pageNum}&pageSize=${pageSize}`)
}

/**
 * @description: 获取用户浏览过的电影
 * @date: 2023-12-15 23:28
 * @author wuwenqiang
 */
export const getMyViewsMovieListService = (pageNum:number,pageSize:number):Promise<MyAwesomeData<Array<MovieInterface>>>=> {
  return httpRequest.get<Array<MovieInterface>>(`${api.getViewRecord}?pageNum=${pageNum}&pageSize=${pageSize}`)
}

/**
 * @description: 获取演员信息
 * @date: 2023-12-16 18:26
 * @author wuwenqiang
 */
export const getMovieStartListService = (movieId:number):Promise<MyAwesomeData<Array<StarInterface>>>=> {
  return httpRequest.get<Array<StarInterface>>(`${api.getStar}/${movieId}`)
}

/**
 * @description: 获取推荐的电影
 * @date: 2023-12-16 18:28
 * @author wuwenqiang
 */
export const getRecommentListService = (classify:string):Promise<MyAwesomeData<Array<MovieInterface>>>=> {
  return httpRequest.get<Array<MovieInterface>>(`${api.getRecommend}?classify=${classify}`)
}