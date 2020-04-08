import {
    request
} from 'network/request.js'

export function detailsData(iid) {
    return request({
        url: '/api/h8/detail?',
        params: {
            iid
        }
    })
}

export function detailsCommentData() {
    return request({
        url: '/api/h3/recommend'
    })
}

//商品列表
export class goods {
    constructor(itemInfo, columns, shopInfo) {
        this.title = itemInfo.title
        this.desc = itemInfo.discountDesc
        this.price = itemInfo.lowNowPrice
        this.oldPrice = itemInfo.oldPrice
        this.columns = columns
        this.services = shopInfo.services
    }

}



//商家信息
export class store {
    constructor(shopInfo) {
        this.name = shopInfo.name
        this.score = shopInfo.score
        this.logo = shopInfo.shopLogo
        this.Goods = shopInfo.cGoods
        this.Sells = shopInfo.cSells
    }
}

//产品图片
export class imgShow {
    constructor(detailInfo) {
        this.title = detailInfo.desc
        this.key = detailInfo.detailImage[0].key
        this.img = detailInfo.detailImage[0].list
    }
}

//产品参数
export class params {
    constructor(info, rule) {
        this.key = info.key
        this.set = info.set
        this.disclaimer = rule.disclaimer
        this.title = rule.key
        this.tables = rule.tables[0]
    }
}