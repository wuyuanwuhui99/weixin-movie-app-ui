import {httpRequest,MyAwesomeData} from '../../utils/HttpUtils';
import api from '../api/api';
import * as types from '../interface/index';

/**
 * @description: 获取搜索词
 * @date: 2023-12-2 23:57
 * @author wuwenqiang
 */
export const getKeyWordService = (classify:String):Promise<MyAwesomeData<types.MovieInterface>> => {
    return httpRequest.get<types.MovieInterface>(api.getKeyWord,{classify});
}

/**
 * @description: 根据token获取用户信息
 * @date: 2023-12-1 23:39
 * @author wuwenqiang
 */
export const getUserDataService = (token:string):Promise<MyAwesomeData<types.UserDataInterface>>=> {
    httpRequest.setToken(token);
    return httpRequest.get<types.UserDataInterface>(api.getUserData);
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
export const getCategoryListService = (classifyItem:types.ClassifyInterface):Promise<MyAwesomeData<Array<types.MovieInterface>>>=> {
    return httpRequest.get<Array<types.MovieInterface>>(api.getCategoryList,classifyItem)
  }

  /**
 * @description: 根据页面获取所有分类
 * @date: 2023-123 11:07
 * @author wuwenqiang
 */
  export const getAllCategoryListByPageNameService = (pageName:string):Promise<MyAwesomeData<Array<types.ClassifyInterface>>>=> {
    return httpRequest.get<Array<types.ClassifyInterface>>(api.getAllCategoryListByPageName,{pageName})
  }

   
/**
* @description: 获取用户使用天数和访问记录数量等
* @date: 2023-12-10 22:40
* @author wuwenqiang
*/
export const getUserMsgService = ():Promise<MyAwesomeData<types.UserMsgInterface>>=> {
	return httpRequest.get<types.UserMsgInterface>(api.getUserMsg)
}

/**
 * @description: 获取用户观看记录
 * @date: 2023-12-14 22:49
 * @author wuwenqiang
 */
export const getPlayRecordMovieListService = ():Promise<MyAwesomeData<Array<types.MovieInterface>>>=> {
  return httpRequest.get<Array<types.MovieInterface>>(api.getPlayRecord)
}

/**
 * @description: 获取用户收藏的电影
 * @date: 2023-12-15 22:26
 * @author wuwenqiang
 */
export const getMyFavoriteMovieListService = (pageNum:number,pageSize:number):Promise<MyAwesomeData<Array<types.MovieInterface>>>=> {
  return httpRequest.get<Array<types.MovieInterface>>(`${api.getFavorite}?pageNum=${pageNum}&pageSize=${pageSize}`)
}

/**
 * @description: 获取用户浏览过的电影
 * @date: 2023-12-15 23:28
 * @author wuwenqiang
 */
export const getMyViewsMovieListService = (pageNum:number,pageSize:number):Promise<MyAwesomeData<Array<types.MovieInterface>>>=> {
  return httpRequest.get<Array<types.MovieInterface>>(`${api.getViewRecord}?pageNum=${pageNum}&pageSize=${pageSize}`)
}

/**
 * @description: 获取演员信息
 * @date: 2023-12-16 18:26
 * @author wuwenqiang
 */
export const getMovieStartListService = (movieId:number):Promise<MyAwesomeData<Array<types.StarInterface>>>=> {
  return httpRequest.get<Array<types.StarInterface>>(`${api.getStar}/${movieId}`)
}

/**
 * @description: 获取推荐的电影
 * @date: 2023-12-16 18:28
 * @author wuwenqiang
 */
export const getRecommentListService = (classify:string):Promise<MyAwesomeData<Array<types.MovieInterface>>>=> {
  return httpRequest.get<Array<types.MovieInterface>>(`${api.getRecommend}?classify=${classify}`)
}


/**
 * @description: 插入浏览记录
 * @date: 2023-12-23 22:12
 * @author wuwenqiang
 */
export const saveViewRecordService = (movieItem:types.MovieInterface):Promise<MyAwesomeData<number>>=> {
    return httpRequest.post<number>(api.saveViewRecord,movieItem)
  }
  
  /**
   * @author: wuwenqiang
   * @description: 获取电影播放地址
   * @date: 2023-8-15 22:29
   */
  export const getMovieUrlService = (movieId:number):Promise<MyAwesomeData<Array<types.MovieUrlInterface>>>=> {
      return httpRequest.get<Array<types.MovieUrlInterface>>(`${api.getMovieUrl}?movieId=${movieId}`)
  };
  
  /**
   * @author: wuwenqiang
   * @description: 查询是否已经收藏
   * @date: 2023-12-28 22:53
   */
  export const isFavoriteService = (movieId:number):Promise<MyAwesomeData<number>>=>{
      return httpRequest.get<number>(`${api.isFavorite}?movieId=${movieId}`)
  };
  
  /**
   * @author: wuwenqiang
   * @description: 添加收藏
   * @date: 2023-12-28 22:58
   */
  export const saveFavoriteService = (movieItem:types.MovieInterface):Promise<MyAwesomeData<number>>=>{
      return httpRequest.post<number>(api.saveFavorite,movieItem)
  };
  
  /**
   * @author: wuwenqiang
   * @description: 取消收藏
   * @date: 2023-12-28 22:58
   */
  export const deleteFavoriteService = (movieId:number):Promise<MyAwesomeData<number>>=>{
      return httpRequest.delete<number>(`${api.deleteFavorite}?movieId=${movieId}`);
  };
  
  /**
   * @author: wuwenqiang
   * @description: 保存播放记录
   * @date: 2023-12-28 23:17
   */
  export const savePlayRecordService = (movieItem:types.MovieInterface):Promise<MyAwesomeData<number>>=>{
      return httpRequest.post<number>(api.savePlayRecord,movieItem);
  };
  
  
  /**
   * @author: wuwenqiang
   * @description: 获取影片评论总数
   * @date: 2023-12-28 23:18
   */
  export const getCommentCountService = (id:number):Promise<MyAwesomeData<number>>=>{
      return httpRequest.get<number>(`${api.getCommentCount}?relationId=${id}&type=movie&pageSize=20&pageNum=1`)
  };

  /**
 * @author: wuwenqiang
 * @description: 更新用户信息
 * @date: 2024-02-23 20:48
 */
export const updateUserDataService = (userData:types.UserDataInterface):Promise<MyAwesomeData<number>>=>{
    return httpRequest.put<number>(api.updateUser,userData)
};