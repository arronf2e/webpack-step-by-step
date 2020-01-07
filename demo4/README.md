### 单页-代码分割与懒加载


目前webpack针对此项功能提供 2 种函数：

- import(): 引入并且自动执行相关 js 代码
- require.ensure(): 引入但需要手动执行相关 js 代码