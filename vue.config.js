const path = require('path');
const glob = require('glob');
const resolve = dir => path.join(__dirname,dir);

const getPagesEntry = () => {
    const entry = {};

    //搜尋專案內 /src/pages/ 所有的HTML檔案
    const fileNameArr = glob
        .sync(path.join(__dirname, './src/pages/**/*.html'))
        .map(p => p.split('/src/pages/')[1])
        .map(p => p.replace('.html',''));

    //建立pages物件內容，存放到 entry 物件內
    fileNameArr.forEach(e => {
        entry[e] = {
            entry: `./src/${e}.js`,
            template: `./src/pages/${e}.html`,
            filename: `${e}.html`,
        };
    });

    return entry;
}


module.exports = {
    pages: getPagesEntry(),
    configureWebpack: {
        externals: { 'jquery': '$' }
    }
}



// module.exports = {
    //filenameHashing: true, //打包後的檔名出現雜湊值
    //devServer-proxy 只是一個暫時性的後端代理服務，僅在開發階段時有效
    // devServer: {
    //     proxy: {
    //         '/api': {
    //             target: 'https://data.ntpc.gov.tw/api/',
    //             pathRewrite: {'^api': ''},
    //             changeOrigin: true,
    //             ws: true
    //         },
    //     }
    // },
    // pages: {
    //     list: {
    //         entry: `./src/list.js`,
    //         template: `./src/pages/list.html`,
    //         filename: `/list.html`
    //     },
    //     product: {
    //         entry: `./src/product.js`,
    //         template: `./src/pages/product.html`,
    //         filename: `/product.html`
    //     },
        // index: {
        //     // entry for the page
        //     entry: 'src/main.js',
        //     title: 'My Title',
        // }        
    // }
// }