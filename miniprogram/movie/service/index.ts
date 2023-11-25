import {httpRequest,MyAwesomeData} from '../../utils/HttpUtils';
import api from '../api/api';
import MovieInterface from '../interface/MovieInterface'
export const getKeyWordService = (classify:String) => {
    return httpRequest.get<MyAwesomeData<MovieInterface>>(api.getKeyWord,{classify});
}