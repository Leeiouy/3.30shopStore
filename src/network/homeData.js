import {
    request
} from "network/request.js";


export function gethomeBanner() {
    return request({
        url: '/home/multidata'
    })
}

export function getHomeData(type, page) {
    return request({
        url: '/api/h8/home/data?',
        params: {
            type,
            page
        }
    })

}