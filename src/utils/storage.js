export default {    
    set: (key, value) => {
        if (typeof value === "object") {
            value = JSON.stringify(value);
        }
        window.localStorage.setItem(key, value);
    },
    get: key => {
        var item = window.localStorage.getItem(key)
        if(/(\[|\{).*(\]|\})/.test(item)) { //json解析
            item = JSON.parse(item)
        }
        return item
    },
    remove: key => {
        var item = window.localStorage.getItem(key)
        if(item) {
            window.localStorage.removeItem(key)
            return true
        } else {
            return false
        }
    },
    clear: () => {
        window.localStorage.clear()
    },
    getLength: () => {
        return window.localStorage.length
    }
}