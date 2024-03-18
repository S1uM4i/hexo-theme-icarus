!function links(target, getFor ) {
    var load, loadwerror, jsonTarget, name, blogLink, imageUrl, targetTemp = target.getElementById("app-links");
    jsonTarget = "https://raw.githubusercontent.com/S1uM4i/S1uM4i/main/src/assets/data/valhalla.json",
        linkparse = function(e) {
            var name, blogLink, imageUrl, slogan, content = "";
            e.sort(() => Math.random() - 0.5);
            for (var o in e) {
                var count = e[o];
                console.log(count);
                blogLink = count.url;
                blogLink = blogLink.replace('https://', '');
                if (blogLink.endsWith("/")) {
                    blogLink = blogLink.substring(0, blogLink.length - 1);
                }
                imageUrl = count.avatar;
                if (!imageUrl.startsWith("http")) {
                    imageUrl = "https://raw.githubusercontent.com/S1uM4i/S1uM4i/main/src/public" + imageUrl;
                }
                content += (name = count.nickname, blogLink, imageUrl, slogan = count.words,
                '<article class="media">' +
                    '<a class="media-left" href="' + count.url + '"><p class="image is-64x64">' +
                        '<img class="thumbnail" src="' + imageUrl + '" alt="' + name + '" ' + 'onerror="javascript:this.src=\'/img/loading.webp\';"' + ' >' +
                    '</p></a>' +
                    '<div class="media-content size-small">' +
                        // '<p class="is-uppercase"><a class="link-muted" href="' + count.url + '">' + blogLink + '</a></p>' +
                        '<p class="title is-6"><a class="link-muted" href="' + count.url + '">' + name + '</a></p>' +
                        '<p class="title is-6"><a class="link-muted" href="' + count.url + '">&nbsp;</a></p>' +
                        '<p class="is-uppercase"><a class="link-muted" href="' + count.url + '">' + slogan + '</a></p>' +
                    '</div>' +
                '</article>')
            }
            getFor(function() {
                targetTemp.innerHTML = content;
                target.getElementById("apps-links-info").style.display='block';
            })
        },
        loadwerror = function() {
            targetTemp.innerHTML = '<p class="title tips">加载失败，请 <a href="/links/">刷新</a> 重试！</p>'
        },
        (load = new XMLHttpRequest).open("GET", encodeURI(jsonTarget), !0),
        load.onload = function() {
            var e;
            200 <= load.status && load.status < 300 || 304 === load.status ? (e = JSON.parse(load.responseText), linkparse(e)) : loadwerror()
        },
        load.timeout = 4500,
        load.ontimeout = blogLink,
        load.onerror = blogLink,
        load.send()
} (document, window.requestAnimationFrame)