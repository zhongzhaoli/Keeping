/**
 * api接口统一管理
 */
import { get, post } from './http';

/**
* get 请求
* @param url 请求地址
* @param params 请求参数
*/
const ApiGet = (url, params = {}) => get(url, params);

/**
 * post 请求
 * @param url 请求地址
 * @param params 请求参数
 */
const ApiPost = (url, params = {}) => post(url, params);