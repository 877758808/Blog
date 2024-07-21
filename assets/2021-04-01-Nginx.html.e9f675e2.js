import{_ as n,o as e,c as a,a as s}from"./app.0bd4b987.js";const r={},i=s(`<p>Nginx\u662F\u4E00\u4E2A\u9AD8\u6027\u80FD\u7684\u5F00\u6E90Web\u670D\u52A1\u5668\uFF0C\u540C\u65F6\u4E5F\u53EF\u4EE5\u4F5C\u4E3A\u53CD\u5411\u4EE3\u7406\u670D\u52A1\u5668\u3001\u8D1F\u8F7D\u5747\u8861\u5668\u548CHTTP\u7F13\u5B58\u7B49\u591A\u79CD\u7528\u9014\u3002</p><h2 id="\u4EC0\u4E48\u662Fnginx" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662Fnginx" aria-hidden="true">#</a> \u4EC0\u4E48\u662FNginx</h2><p>Nginx\u662F\u4E00\u6B3E\u8F7B\u91CF\u7EA7\u3001\u9AD8\u6027\u80FD\u7684Web\u670D\u52A1\u5668\u8F6F\u4EF6\uFF0C\u7531\u4FC4\u7F57\u65AF\u7684\u7A0B\u5E8F\u5458Igor Sysoev\u5F00\u53D1\u3002Nginx\u4EE5\u5176\u5353\u8D8A\u7684\u6027\u80FD\u548C\u7A33\u5B9A\u6027\u800C\u95FB\u540D\uFF0C\u88AB\u5E7F\u6CDB\u5E94\u7528\u4E8E\u4E92\u8054\u7F51\u516C\u53F8\u7684\u670D\u52A1\u5668\u67B6\u6784\u4E2D\u3002\u4E0E\u4F20\u7EDF\u7684Apache\u670D\u52A1\u5668\u76F8\u6BD4\uFF0CNginx\u5728\u5904\u7406\u9AD8\u5E76\u53D1\u8FDE\u63A5\u65F6\u8868\u73B0\u66F4\u4E3A\u51FA\u8272\u3002</p><h2 id="\u5982\u4F55\u5B89\u88C5nginx" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u5B89\u88C5nginx" aria-hidden="true">#</a> \u5982\u4F55\u5B89\u88C5Nginx</h2><h3 id="ubuntu\u7CFB\u7EDF\u5B89\u88C5nginx" tabindex="-1"><a class="header-anchor" href="#ubuntu\u7CFB\u7EDF\u5B89\u88C5nginx" aria-hidden="true">#</a> Ubuntu\u7CFB\u7EDF\u5B89\u88C5Nginx</h3><p>\u5728Ubuntu\u7CFB\u7EDF\u4E0A\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u5B89\u88C5Nginx\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> nginx
</code></pre></div><p>\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u542F\u52A8Nginx\u670D\u52A1\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl start nginx
</code></pre></div><h3 id="centos\u7CFB\u7EDF\u5B89\u88C5nginx" tabindex="-1"><a class="header-anchor" href="#centos\u7CFB\u7EDF\u5B89\u88C5nginx" aria-hidden="true">#</a> CentOS\u7CFB\u7EDF\u5B89\u88C5Nginx</h3><p>\u5728CentOS\u7CFB\u7EDF\u4E0A\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u5B89\u88C5Nginx\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> nginx
</code></pre></div><p>\u5B89\u88C5\u5B8C\u6210\u540E\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u542F\u52A8Nginx\u670D\u52A1\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl start nginx
</code></pre></div><h2 id="nginx\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#nginx\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> Nginx\u914D\u7F6E\u6587\u4EF6</h2><p>Nginx\u7684\u4E3B\u8981\u914D\u7F6E\u6587\u4EF6\u4F4D\u4E8E/etc/nginx/nginx.conf\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u7F16\u8F91\u8FD9\u4E2A\u6587\u4EF6\u6765\u914D\u7F6ENginx\u7684\u5404\u79CD\u53C2\u6570\u548C\u884C\u4E3A\u3002\u53E6\u5916\uFF0CNginx\u8FD8\u652F\u6301\u4F7F\u7528include\u6307\u4EE4\u5F15\u5165\u5176\u4ED6\u914D\u7F6E\u6587\u4EF6\uFF0C\u65B9\u4FBF\u7BA1\u7406\u548C\u7EF4\u62A4\u3002</p><p>\u4EE5\u4E0B\u662F\u4E00\u4E2A\u7B80\u5355\u7684Nginx\u914D\u7F6E\u793A\u4F8B\uFF1A</p><div class="language-conf ext-conf"><pre class="language-conf"><code># \u9759\u6001\u7F51\u7AD9\u914D\u7F6E
server {
    listen 80;
    server_name example.com www.example.com;

    location / {
        root /var/www/html;
        index index.html;
    }
}

# HTTPS\u914D\u7F6E
server {
    listen 443 ssl;
    server_name example.com www.example.com;

    ssl_certificate /etc/nginx/ssl/certificate.crt;
    ssl_certificate_key /etc/nginx/ssl/private.key;

    location / {
        root /var/www/html;
        index index.html;
    }
}

# \u53CD\u5411\u4EE3\u7406\u914D\u7F6E
server {
    listen 80;
    server_name api.example.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

# \u8D1F\u8F7D\u5747\u8861\u914D\u7F6E
upstream backend_servers {
    server backend1.example.com;
    server backend2.example.com;
}

server {
    listen 80;
    server_name app.example.com;

    location / {
        proxy_pass http://backend_servers;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

</code></pre></div><h2 id="nginx\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#nginx\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> Nginx\u5E38\u7528\u547D\u4EE4</h2><h3 id="\u542F\u52A8nginx" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8nginx" aria-hidden="true">#</a> \u542F\u52A8Nginx</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl start nginx
</code></pre></div><h3 id="\u505C\u6B62nginx" tabindex="-1"><a class="header-anchor" href="#\u505C\u6B62nginx" aria-hidden="true">#</a> \u505C\u6B62Nginx</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl stop nginx
</code></pre></div><h3 id="\u91CD\u542Fnginx" tabindex="-1"><a class="header-anchor" href="#\u91CD\u542Fnginx" aria-hidden="true">#</a> \u91CD\u542FNginx</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl restart nginx
</code></pre></div><h3 id="\u70ED\u91CD\u542Fnginx\u66F4\u65B0\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u70ED\u91CD\u542Fnginx\u66F4\u65B0\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u70ED\u91CD\u542FNginx\u66F4\u65B0\u914D\u7F6E\u6587\u4EF6</h3><div class="language-bash ext-sh"><pre class="language-bash"><code>nginx <span class="token parameter variable">-s</span> reload
</code></pre></div><p><strong>\u6CE8\u610F\uFF0C\u53EA\u6709\u5F53\u6CA1\u6709\u957F\u8FDE\u63A5\u65F6\u70ED\u91CD\u542F\u66F4\u65B0\u914D\u7F6E\u6587\u4EF6\u624D\u4F1A\u6210\u529F</strong></p>`,28),t=[i];function o(d,c){return e(),a("div",null,t)}var l=n(r,[["render",o],["__file","2021-04-01-Nginx.html.vue"]]);export{l as default};
