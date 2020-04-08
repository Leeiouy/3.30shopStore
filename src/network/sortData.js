import {
    request
} from 'network/request.js'

export function sortData() {

    return request({
        url: '/api/h8/category'
    })

}