import apiService from '../serviceApi'

class Test extends apiService {
    test(params) {
        // let url = '/auth-center/h5/api/ocr/query.json'
        let url = '/test/test.json'
        return this.get(url, params).then(res => {
            console.log('测试返回数据', res)
            return res
        })
    }
}

export default new Test()