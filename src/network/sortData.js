import {
    request
} from 'network/request.js'

export function sortData() {

    return request({
        url: '/api/h3/category'
    })

}