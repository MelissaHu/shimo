# web
# vue-router 
· 哈希模式： 在url中永运带着#号，兼容性好，window可以监听到哈希值的变化onhashchange事件；路由分发不需要服务器来做，前端可以完成；
· 历史模式： 在url中不带#号，用的是传统的路由分发模式，(即用户输入一个url时，是由服务器在接受用户的这个输入请求，并由服务器解析url的路径然后做相应逻辑处理。如果要改变url但不刷新页面，就需要前端使用pushState和replaceState两个H5的api)