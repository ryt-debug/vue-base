// import './assets/main.css'

import { createApp } from 'vue'
import App from './components/App.vue'

// 创建应用并挂载到app，mount返回根组件的实例
window.vm = createApp(App).mount('#app');

/**
 * node_modules不是你自己的源代码，
 * 而是存放你在package.json中指定的依赖的外部库和框架的文件，
 * 这些依赖库少的有几百M多的好几G，而且又不你的源代码，
 * 其内容已经存储在其他服务器上，没必要放到github，
 * 你只要把package.json放上去，别人下载你的package.json，
 * 运行个npm install就会自动把node_modules文件夹建立起来，
 * 和你自己的node_modules文件夹里面的内容一模一样。
 */