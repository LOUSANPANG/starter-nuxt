## AI 前端平台 2.0


### 技术栈
  - [Nuxt3](https://nuxt.com/)
  - Nuxt3 相关模块
    - [@nuxt/eslint](https://nuxt.com/modules/eslint)
    - [@nuxt/image](https://nuxt.com/modules/image)
    - [@pinia/nuxt](https://nuxt.com.cn/modules/pinia)
  - Nuxt3 UI
    - [@unocss/nuxt](https://unocss.dev/integrations/nuxt)
    - [@nuxt/ui](https://nuxt.com/modules/ui)


### 开发环境（开发该项目必须遵守）
  - Node.js - 18.x 或更高版本
  - VSCode
  - pnpm
  - 强烈建议安装 `.vscode/extensions.json` VSCode 插件，提升开发体验


### 开发规范（开发该项目必须遵守）

#### 开发技巧
该项目使用到的所有技术都在 `/pages/_test_/` 下做了测试和演示（包含所有用到的插件使用方式、路由、请求、全局状态、相关UI组件等）。
如果开发时对某一技术有开发疑问，请参考上述技术栈文档和 `/pages/_test_/` 文件下的 demo。

### 代码规范
  - [@nuxt/eslint](https://nuxt.com/modules/eslint)
  - 项目已配置好 `eslint` 规范，并自动设置格式化，也设置相关命令格式化，相关代码请参考 `.vscode/settings.json` `eslint.config.mjs`

### 代码功能开发
  - **新增**插件、依赖时，必须在 `/pages/_test_/` 文件下添加测试演示代码。
  - 勿动公共配置、公共依赖，如果改动请联系 `LOUSANPANG`


### 开发

#### [全局变量的几种方式](https://nuxt.com/docs/getting-started/configuration#environment-overrides)
  - `.env` `.env.development` `.env.test` `.env.production`
  - app.config.ts
  - nuxt.config.ts -> runtimeConfig

#### [组件开发和使用](https://nuxt.com/docs/getting-started/views#components)
默认在 `components/` 目录下开发组件，项目中直接使用，无需引入。

#### [页面配置](https://nuxt.com/docs/getting-started/views#pages)
你可以通过在 `pages/` 目录中添加新文件来创建更多页面及其对应的路由。

#### [路由](https://nuxt.com/docs/getting-started/routing)

#### `composables/ utils/` 下的函数、方法，无需引入直接使用
  - `useFetch`、`useLazyFetch`

#### `stores/` 下的全局状态，无需引入直接使用
具体使用查看 `pages/_test_/test-store.vue`

#### 关于unocss、icon、web Font 的使用
具体开发文档查看上述技术栈文档，相关测试 `Demo` 在 `/pages/_test_/test-unocss_font_icon.vue` 下有测试代码。

#### [关于生命周期](https://nuxt.com/docs/guide/concepts/nuxt-lifecycle)
  - 服务器
    - 服务器插件
    - 服务器中间件
    - 初始化Nuxt并执行Nuxt App插件
    - Nuxt 路由
    - Nuxt app中间件
    - 设置页面和路由
    - 生成html
  - 客户端
    - 初始化 Nuxt 并执行 Nuxt App 插件
    - Nuxt 路由
    - Nuxt app 中间件
    - vue生命周期
