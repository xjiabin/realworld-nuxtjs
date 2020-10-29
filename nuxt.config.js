/**
 * Nuxt.js 配置规则
 */

module.exports = {
  // 自定义路由规则
  router: {
    // 导航激活状态的 className
    linkActiveClass: 'active',
    // routes： 路由配置表
    // resolve：解析路由组件路径的方法
    extendRoutes (routes, resolve) {
      // 清除 Nuxtjs 基于 pages 自动生成的路由规则
      routes.splice(0)

      // 保存自定义的路由配置
      routes.push(...[
        {
          path: '/',
          // resolve：将当前文件所在的路径拼接上后面的路径。可以省略 index.vue，但是不能省略 layout 后面的 /
          component: resolve(__dirname, 'pages/layout/'),
          children: [
            {
              // path 留空，说明是默认子路由
              path: '',
              name: 'home',
              component: resolve(__dirname, 'pages/home/')
            },
            {
              path: '/login',
              name: 'login',
              component: resolve(__dirname, 'pages/sign/')
            },
            {
              path: '/register',
              name: 'register',
              component: resolve(__dirname, 'pages/sign/')
            },
            {
              path: '/register',
              name: 'register',
              component: resolve(__dirname, 'pages/sign/')
            },
            {
              path: '/profile/:username',
              name: 'profile',
              component: resolve(__dirname, 'pages/profile/')
            },
            {
              path: '/settings',
              name: 'settings',
              component: resolve(__dirname, 'pages/settings/')
            },
            {
              path: '/editor',
              name: 'editor',
              component: resolve(__dirname, 'pages/editor/')
            },
            {
              path: '/article/:slug',
              name: 'article',
              component: resolve(__dirname, 'pages/article/')
            }
          ]
        }
      ])
    }
  },
  server: {
    // host: 'localhost', // localhost 只能提供本机访问，部署到 服务器上的话，localhost 是无法提供给外部访问的。
    host: '0.0.0.0', // 如果需要对外提供访问，需要设置成 0.0.0.0，也就是说监听所有的网卡地址。生产环境的外网也可以访问到了（如果是开发环境，局域网内所有人都能访问到）
    port: 3005
  },
  // 注册机制
  plugins: [
    '~/plugins/request.js',
    '~/plugins/dayjs.js'
  ]
}
