## Features

- welcome page
- topics
- message board
- search
- about me
- 标签导航
- 文章追溯
- 照片墙

## TODO

- 重构导航，适用于mobile
- find icon more
- fetch
- getData
- project deploy


## Notice

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


### CSS

```css
font-weight: normal;
```
