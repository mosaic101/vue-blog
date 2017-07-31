## Features

1. topics
2. home page
3. message board
4. open project
5. search
6. chatroom


## TODO

- find icon more
- fetch
- getData
- project deploy
- less and responsive



## notice

- this.$router ==> <router-link to=""></router-link>
```js
// 字符串
router.push('home')

// 对象
router.push({ path: 'home' })

// 命名的路由, params 的形式只用能 name 找到 route
router.push({ name: 'user', params: { userId: 123 }})

// 带查询参数，变成 /register?plan=private
router.push({ path: 'register', query: { plan: 'private' }})
```

```js
new Router({
  mode: 'history', // history 模式, 去除 /#/
})
```

- 路由懒加载
