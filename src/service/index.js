// import axios from "axios";

import { co } from "@/utils/index";
import request from "@/utils/request";

/**
 * @description 获取歌手分类列表
 * @param {Object} data 请求参数
 * @param {Number} data.limit 返回数量，默认值 30
 * @param {Number} data.offset 偏移数量
 * @param {Number} data.type 类别(-1：全部、1：男歌手、2：女歌手、3：乐队)
 * @param {Number} data.area 地域(-1：全部、7：华语、96：欧美、8：日本、16：韩国、0：其他)
 */

// 获取歌手列表
// axios.post 返回值是Promise实例
export const getArtistList = (data) =>{
    return co(request.post('/artist/list', data));
}

/**
 * @description 获取搜索列表
 * @param {Object} params 请求参数
 * @param {String} params.keywords 关键词
 * @param {Number} params.offset 偏移数量
 * @param {Number} params.limit 返回数量，默认值 30
 * @param {Number} params.type 搜索类型(1：单曲、10：专辑、100：歌手、1000：歌单、1002：用户、1004：MV、1006：歌词、1009：电台、1014：视频、1018：综合、2000：声音)
 */

// 搜索
export const cloudsearch = (params) =>{
    return co(request.get(`/cloudsearch`,{params}));
}

/**
 * @description 主页轮播图
 * @param {Object} params 请求参数
 * @param {String} params.type 轮播类型(0: pc、1: android、2: iphone、3: ipad)
 */
    
// 轮播图
export const banner = (params) =>{
    return co(request.get(`/banner`,{params}));
}

/**
 * @description 首页-发现
 * @param {Object} params 请求参数
 * @param {Boolean} params.refresh 是否刷新数据，默认为false
 * @returns 
 */
export const discover = () =>{
    return co(request.get(`/homepage/block/page`));
}


// 热门话题
export const loaderBoard = (params) =>{
    return co(request.get(`/hot/topic`,{params}));
}


// 日历
export const calendar = (params) =>{
    return co(request.get(`/calendar`,{params}));
}


// 登录页地区
export const district = (params) =>{
    return co(request.get(`/countries/code/list`,{params}));
}

// 我的
export const my = (params) =>{
    return co(request.get(`/user/account`,{params}));
}

// 喜欢的歌曲
export const like = (params) =>{
    return co(request.get(`/likelist`,{params}));
}

// 创建歌单
export const found = (params) =>{
    return co(request.get(`/user/playlist`,{params}));
}

// 用户详情
export const details = (params) =>{
    return co(request.get(`/user/detail`,{params}));
}

// mv排行
export const mv = (params) =>{
    return co(request.get(`/top/mv`,{params}));
}

// mv数据
export const mvList = (params) =>{
    return co(request.get(`/mv/detail`,{params}));
}

// mv转发数据
export const mission = (params) =>{
    return co(request.get(`/mv/detail/info`,{params}));
}

// mv地址
export const mvAddress = (params) =>{
    return co(request.get(`/mv/url`,{params}));
}

export const getTrackDetail =(ids)=>{
    return co(request.get("/song/detail",{params:{ids}}));
}