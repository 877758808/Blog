if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,a)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let n={};const o=e=>i(e,r),u={module:{uri:r},exports:n,require:o};s[r]=Promise.all(l.map((e=>u[e]||o(e)))).then((e=>(a(...e),n)))}}define(["./workbox-fd2f54be"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"4a59e0ed002996b138419334f5899920"},{url:"assets/2021-09-30-Moore.html.86c59b38.js",revision:null},{url:"assets/2021-09-30-Moore.html.e1b08ee4.js",revision:null},{url:"assets/2021-12-11-test.html.716d54e1.js",revision:null},{url:"assets/2021-12-11-test.html.8b3dc118.js",revision:null},{url:"assets/404.19440284.js",revision:null},{url:"assets/404.html.444ec505.js",revision:null},{url:"assets/404.html.7c518b82.js",revision:null},{url:"assets/app.a538b4c4.js",revision:null},{url:"assets/Common.9daa3906.js",revision:null},{url:"assets/HomePage.5ece503f.js",revision:null},{url:"assets/index.0b6f9a66.js",revision:null},{url:"assets/index.html.0029a7ad.js",revision:null},{url:"assets/index.html.13c33922.js",revision:null},{url:"assets/index.html.271c9982.js",revision:null},{url:"assets/index.html.28fa388e.js",revision:null},{url:"assets/index.html.2a81c127.js",revision:null},{url:"assets/index.html.30b216a7.js",revision:null},{url:"assets/index.html.31274a78.js",revision:null},{url:"assets/index.html.4929696d.js",revision:null},{url:"assets/index.html.b530c219.js",revision:null},{url:"assets/index.html.c4b1ecc8.js",revision:null},{url:"assets/index.html.c52d6173.js",revision:null},{url:"assets/index.html.d1c2e5d4.js",revision:null},{url:"assets/index.html.d2e8b82d.js",revision:null},{url:"assets/index.html.db72e152.js",revision:null},{url:"assets/index.html.e07d945d.js",revision:null},{url:"assets/index.html.eaae5535.js",revision:null},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:null},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:null},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:null},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:null},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:null},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:null},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:null},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:null},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:null},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:null},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:null},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:null},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:null},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:null},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:null},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:null},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:null},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:null},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:null},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:null},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:null},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:null},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:null},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:null},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:null},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:null},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:null},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:null},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:null},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:null},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:null},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:null},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:null},{url:"assets/Layout.76949d51.js",revision:null},{url:"assets/Links.f1dbd3d8.js",revision:null},{url:"assets/mermaid.esm.min.a9b2af9b.js",revision:null},{url:"assets/Page.efbc55cf.js",revision:null},{url:"assets/PageHeader.2e68d644.js",revision:null},{url:"assets/Pager.e384c7da.js",revision:null},{url:"assets/Post.7ceaaec2.js",revision:null},{url:"assets/resolveTime.960c5d27.js",revision:null},{url:"assets/style.57043e7e.css",revision:null},{url:"assets/Tags.87c9c745.js",revision:null},{url:"dejavu/index.html",revision:"3f394ad714b3590eeb23029e3026e27a"},{url:"highlight/gungnir-dark.css",revision:"aa084d7f38f61d42184a7701c6526925"},{url:"img/avatar.jpg",revision:"d6a8a8924f3cdf4dc6cbec8c5f205a58"},{url:"img/home-bg/1.jpg",revision:"8d1f45887a8da85b0e02ce88f6f4065f"},{url:"img/home-bg/10.jpg",revision:"54eec75f63b4103ea4ef1d7cdfc98848"},{url:"img/home-bg/11.jpg",revision:"a19a4dccf1e3f8fd1a317b91ec063f54"},{url:"img/home-bg/12.jpg",revision:"cfd1a1d44afaace4348ff5ff6e318688"},{url:"img/home-bg/13.jpg",revision:"c1b264faa6587d9bf3c6f9080e753931"},{url:"img/home-bg/14.png",revision:"9701ee3a1eb0120e9e18e7b553df2c45"},{url:"img/home-bg/15.jpg",revision:"e018675641076fd3d873a9828c5d9f50"},{url:"img/home-bg/16.jpg",revision:"b715d82882c709413725f3f29c5181ff"},{url:"img/home-bg/17.jpg",revision:"50d304fa7117b92f10517f540e12602f"},{url:"img/home-bg/18.jpg",revision:"523ed6e06303910a055cfba6af3100a2"},{url:"img/home-bg/19.jpg",revision:"53e8a44a16d3eeac4f649852e433472f"},{url:"img/home-bg/2.jpg",revision:"8db5fa07bb7bb3d87fadc6ea0eec48bd"},{url:"img/home-bg/20.jpg",revision:"e252188b1879315e06b2b4683797a6c0"},{url:"img/home-bg/21.jpg",revision:"499f41488b58e42f9b171ab65caef90c"},{url:"img/home-bg/22.jpeg",revision:"9efea70bfa58cdf62ca630ed97fc5b35"},{url:"img/home-bg/23.jpeg",revision:"eedd742b46aef18f25d4108ea6452a59"},{url:"img/home-bg/24.jpg",revision:"ff3744488646a91f47d6d92de98cf2c5"},{url:"img/home-bg/25.jpeg",revision:"7b571f29f58993dcfc0c9fbfd7903779"},{url:"img/home-bg/26.jpeg",revision:"a4b69b80f3a89b1c502af2e8680843d7"},{url:"img/home-bg/27.jpeg",revision:"bc6cfa1affe4ad98e35461eede519810"},{url:"img/home-bg/28.jpg",revision:"949c914cbc2d08465fe5a9e74c3697de"},{url:"img/home-bg/29.jpg",revision:"5cfdef69e771aea441d2a6d85223110c"},{url:"img/home-bg/3.jpg",revision:"9b3d286f878c4a5cdd24067be4e2300f"},{url:"img/home-bg/4.jpg",revision:"42a7bee009262496e4804f1c1fb29ac5"},{url:"img/home-bg/5.jpg",revision:"9b33ad3eef1c32136478a784f1ce5ad9"},{url:"img/home-bg/6.jpeg",revision:"0ef920f2693afca7037da6ea6a2df522"},{url:"img/home-bg/8.jpg",revision:"2d56e0f8821487870cac107db02af8d2"},{url:"img/home-bg/9.jpeg",revision:"c3a454bd87d5854ee678eab43023b6e1"},{url:"img/in-post/dejavu.jpg",revision:"e058e18a129063ec911088e327832133"},{url:"img/in-post/moore.png",revision:"30440892ca364f74ac18734d70b7751c"},{url:"img/links/blog.svg",revision:"89239151cfa962d791e109573cdbd1fe"},{url:"img/links/minesweeper.png",revision:"e3ae58a2338e3342933c1c3b4f32e306"},{url:"img/links/roguefable3.jpeg",revision:"65310fb32fcc051623bfda0ed2ab0a39"},{url:"img/links/vscode.jpeg",revision:"e037271a0b7ae10f33694fdd7f4443de"},{url:"img/logo/apple-touch-icon.jpg",revision:"fb431911466be35fc04dc8e0173467cf"},{url:"img/logo/favicon_16x16.jpg",revision:"8ddc89061608d32d5cd7a2446939c55e"},{url:"img/logo/favicon_32x32.jpg",revision:"7387b9222fa739eeca009f62bdc43b8f"},{url:"img/logo/logo.svg",revision:"89239151cfa962d791e109573cdbd1fe"},{url:"img/pages/links.jpg",revision:"e1e1797371d0a5e314a8b4ca863b5e35"},{url:"img/pages/tags.jpg",revision:"01df00817a4ca78b21d7fbcba91e3ebd"},{url:"index.html",revision:"a06d664de98f8d7d9fbb3476e98065a0"},{url:"links/index.html",revision:"d115803e186ecd52b78a27a3c48d1c08"},{url:"page/1/index.html",revision:"d2f24c22443b11f9b74ec5a916815243"},{url:"posts/2021-09-30-Moore.html",revision:"50aab3c7733e17ce8dd8971a1d5ae6c6"},{url:"posts/2021-12-11-test.html",revision:"49c1df2d7afc67bdad698e36aaab98fa"},{url:"styles/giscus-dark.css",revision:"dda6a00df146e1be5536cb491268e706"},{url:"tags/algorithm/index.html",revision:"c3ca77aff4b2a66d239aa4ee0279e0bc"},{url:"tags/index.html",revision:"de850ba6c770a63f998e12c46c4b24cd"},{url:"tags/test/index.html",revision:"93d6c1452de6abcd53506be7fc8ad438"},{url:"tags/胸臆/index.html",revision:"98ad9a9541c0bc353fe9311026104144"}],{})}));
