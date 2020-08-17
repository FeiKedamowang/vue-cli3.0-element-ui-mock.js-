import Mock from 'mockjs'

Mock.setup({
    timeout: '300-600'
})

let loginData = {
    "status": "200",
    "message": "success",
    "data": {
        "username": "游客",
        "password": "123",
        "userList": {
            "name": "游客",
            "nameType": "普通管理员"
        }
    }
}

Mock.mock(/\/user\/login/, 'post',loginData)



export default Mock