(window.webpackJsonp = window.webpackJsonp || []).push([[0], {
    "./src/css/common.less": function(t, e, n) {},
    "./src/css/index.less": function(t, e, n) {},
    "./src/js/index.js": function(t, e, n) {
        "use strict";
        n.r(e);
        n("./node_modules/core-js/modules/es6.function.name.js"),
            n("./node_modules/core-js/modules/es6.regexp.constructor.js"),
            n("./node_modules/core-js/modules/es6.regexp.replace.js"),
            n("./node_modules/core-js/modules/es6.array.find.js"),
            n("./node_modules/core-js/modules/es6.array.sort.js"),
            n("./node_modules/core-js/modules/es6.string.repeat.js"),
            n("./node_modules/core-js/modules/es6.regexp.match.js"),
            n("./node_modules/core-js/modules/es6.regexp.search.js"),
            n("./src/css/index.less"),
            n("./src/css/common.less"),
            n("./node_modules/regenerator-runtime/runtime.js"),
            n("./node_modules/core-js/modules/es6.promise.js"),
            n("./node_modules/core-js/modules/es6.object.to-string.js");
        function A(t) {
            return "./static/" + t
        }
        function i(t, e) {
            var n = document.createElement("script");
            n.src = t,
                n.onload = function() {
                    e && e(),
                        n.parentNode.removeChild(n)
                }
            ;
            var i = document.getElementsByTagName("script")[0];
            //i.parentNode.insertBefore(n, i)
        }
        /debug/gi.test(location.hash) && i("https://cdn.jsdelivr.net/npm/eruda", function() {
            window.eruda.init()
        }),
            i("https://static.ws.126.net/163/frontend/libs/antanalysis.min.js"),
            i("https://static.ws.126.net/163/frontend/antnest/NTM-MMKAJZQA-17.js"),
            i("https://hm.baidu.com/hm.js?fbbd5a62f1db722ba672bc37a9bf6b05"),
            i("https://analytics.163.com/ntes.js", function() {
                setTimeout(function() {
                    window._ntes_nacc = "mapp",
                        neteaseTracker(),
                        i("https://static.ws.126.net/utf8/3g/util/analysis.min.js", function() {
                            setTimeout(function() {
                                window._ntes_sps_modelid = "newsone_hundred",
                                    neteaseAnalysis({
                                        type: "special",
                                        spst: 5,
                                        modelid: _ntes_sps_modelid
                                    })
                            }, 20)
                        })
                }, 20)
            });
        n("./node_modules/core-js/modules/es6.object.assign.js");
        var s = n("./node_modules/@newsapp-activity/newsapp-share/dist/newsapp-share.esm.js")
            , a = n("./node_modules/@mf2e/js-bridge/dist/js-bridge.esm.js");
        window.jsBridge = a;
        var o = {
            title: "人生必做的100件事，你完成了多少？",
            desc: "来～选选看",
            imgUrl: A("share2.jpg"),
            link: function(t) {
                if (t) {
                    var e = document.createElement("a");
                    return e.href = t,
                        e.href
                }
                return window.location.href.replace(/([?#]).*/, "")
            }(),
            onlyImg: !1,
            shareDone: function() {
                !function t(e, n) {
                    window.NTESAntAnalysis ? window.NTESAntAnalysis.sendData({
                        projectid: "NTM-MMKAJZQA-17",
                        val_nm: "c-ntm",
                        val_act: e,
                        info: n
                    }) : window.addEventListener("NTMReady", function() {
                        t(e, n)
                    })
                }("sharedone")
            }
        }
            , r = {};
        function c(t) {
            var e = this
                , n = arguments
                , i = 0 < arguments.length && void 0 !== t ? t : {}
                , a = i.shareDone;
            i.shareDone = function() {
                a && a.apply(e, n),
                    o.shareDone.apply(e, n)
            }
                ,
                r = Object.assign({}, o, i),
                s.a.config(r)
        }
        c();
        var l, d = n("./node_modules/html2canvas/dist/html2canvas.js"), h = n.n(d), k = n("./node_modules/@tweenjs/tween.js/dist/tween.esm.js"), u = window.navigator.userAgent.toLowerCase(), p = navigator.userAgent, m = /iphone|nokia|sony|ericsson|mot|samsung|sgh|lg|philips|panasonic|alcatel|lenovo|cldc|midp|wap|mobile/i.test(u) && !/pc=1/.test(location.search), g = "micromessenger" == u.match(/MicroMessenger/i), f = (u.match(/WeiBo/i),
        "newsapp" == u.match(/newsapp/i)), v = "qq" == u.match(/QQ/i), w = -1 < p.indexOf("Android") || -1 < p.indexOf("Adr"), _ = !!p.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), L = (/iphone/gi.test(navigator.userAgent) && (812 == screen.height && 375 == screen.width || 896 == screen.height && screen.width),
            A("circles4.json")), x = A("slide2.json");
        g && NewsappWeixin.getUserInfo(function(t) {
            t ? (l = t.headimgurl,
                setTimeout(function() {
                    Y()
                }, 100)) : NewsappWeixin.login()
        });
        var b, S = ["www.wangyidadagh.com"], C = ["one_hundred"], T = parseInt(Math.random() * S.length), y = parseInt(Math.random() * C.length);
        b = "https://" + S[T] + "/163/html/news/" + C[y] + "/index.html",
        m || ($(".common-container").html(" ").css({
            background: "#fff"
        }),
            $(".common-container").append('<div class="pc_qr_code"></div>'),
            new QRCode($(".pc_qr_code")[0],{
                width: 200,
                height: 200,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.L
            }).makeCode(window.location.href),
            $(".common-container").css({
                width: "100%"
            }),
            $(".pc_qr_code").append("<p>为了更好的体验，请使用手机扫描二维码浏览</p>"));
        var E, M, I, j, R = PIXI.Container, D = (PIXI.autoDetectRenderer,
            PIXI.loader), N = PIXI.loader.resources, q = (PIXI.Texture,
            PIXI.Text,
            PIXI.Sprite), B = (PIXI.Rectangle,
            PIXI.Graphics), J = window.innerWidth, X = window.innerHeight, P = new PIXI.CanvasRenderer(J,X,{
            backgroundColor: 16711673,
            antialias: !0,
            resolution: 1
        }), O = new R;
        function U() {
            document.removeEventListener("WeixinJSBridgeReady", U),
                document.removeEventListener("YixinJSBridgeReady", U),
                M.play()
        }
        function Q() {
            document.removeEventListener("WeixinJSBridgeReady", Q),
                document.removeEventListener("YixinJSBridgeReady", Q);
            for (var t = 0; t < I.length; t++) {
                var e = document.getElementById(I[t]);
                e.play(),
                    e.pause()
            }
        }
        function Y() {
            D.add(L).add(x).on("progress", W).load(et)
        }
        function W(t, e) {
            !function(t) {
                t < 50 ? $(".rightcircle").css({
                    transform: "rotate(" + (t / 50 * 180 - 135) + "deg)"
                }) : ($(".rightcircle").css({
                    transform: "rotate(45deg)"
                }),
                    $(".leftcircle").css({
                        transform: "rotate(" + ((t - 50) / 50 * 180 - 135) + "deg)"
                    }));
                var e = parseInt(t % 10)
                    , n = Math.floor(t / 10);
                $(".loading_num").eq(2).removeClass().addClass("loading_num").addClass("n" + e),
                    $(".loading_num").eq(1).removeClass().addClass("loading_num").addClass("n" + n),
                    t < 10 ? $(".loading_num").eq(1).hide() : $(".loading_num").eq(1).show()
            }(parseInt(t.progress))
        }
        $("#main").append(P.view),
            E = "bgm",
            M = document.getElementById(E),
            document.addEventListener("WeixinJSBridgeReady", U, !1),
            document.addEventListener("YixinJSBridgeReady", U, !1),
            I = ["text", "click"],
            document.addEventListener("WeixinJSBridgeReady", Q, !1),
            document.addEventListener("YixinJSBridgeReady", Q, !1);
        var H = !(window.onload = function() {
                m && (g ? $(".head_img img")[0].src = l : Y(),
                    $("#select").bind("touchmove", function(t) {
                        t.preventDefault()
                    }))
            }
        )
            , K = !1;
        function Z() {
            K = !0,
            window.NTESAntAnalysis && window.NTESAntAnalysis.sendData({
                projectid: "NTM-MMKAJZQA-17",
                val_nm: "c-ntm",
                val_act: "hide1"
            }),
                $("#click")[0].play(),
                $(".stage1").unbind("touchmove"),
                $(".stage1").unbind("touchend"),
                $(".stage1").unbind("touchstart"),
                new k.default.Tween({
                    width: 671
                }).to({
                    width: 0
                }, 1e3).onUpdate(function(t, e) {
                    $(".stage1").width(t.width)
                }).easing(k.default.Easing.Cubic.In).start(),
                new k.default.Tween({
                    right: 0
                }).to({
                    right: 80
                }, 1e3).onUpdate(function(t, e) {
                    $(".stage_box").css({
                        transform: "translate3d(" + -t.right + "px,0,0)"
                    })
                }).easing(k.default.Easing.Cubic.In).onComplete(function() {
                    $(".left").hide(),
                        H = !0
                }).start()
        }
        var z, F, V, G, tt = !1;
        function et() {
            J = window.innerWidth,
                X = window.innerHeight,
                z = new R;
            var t = Nt({
                color: 15790320,
                width: 750,
                height: X,
                x: 0,
                y: 0
            });
            z.addChild(t),
                z.interactive = !0,
                z.buttonMode = !0,
                z.on("touchstart", st).on("touchmove", ot).on("touchend", rt).on("tap", function() {
                    $(".select_main").hasClass("show") && (bt = .001,
                        $(".select_main").removeClass("show"),
                        $(".num_rect").hide())
                }),
                at.setDimensions(750, X, 1e5, X),
                at.scrollTo(5e4, 0, !1),
                O.addChild(z),
                P.render(O),
                function() {
                    J = window.innerWidth,
                        (X = window.innerHeight) <= 1300 && 1200 < X ? (Et = 900,
                            $(".select_main").addClass("height900")) : X <= 1200 && (Et = 800,
                            $(".select_main").addClass("height800"));
                    F = new R;
                    V = new R,
                        function() {
                            ct = X - ut - ht,
                                lt = Math.floor(ct / (30 + mt));
                            for (var t = [], e = 0; e <= lt / 2; e++)
                                t.push(2 * e);
                            var n = [];
                            for (e = 0; e < lt / 2; e++)
                                n.push(2 * e + 1);
                            for (var i = 0; i < 40; i++) {
                                var a = void 0;
                                (a = i % 2 == 0 ? JSON.parse(JSON.stringify(t)) : JSON.parse(JSON.stringify(n))).sort(qt).sort(qt),
                                    pt = pt.concat(a)
                            }
                        }();
                    var t = 0
                        , e = setInterval(function() {
                        vt(t),
                            P.render(O);
                        ++t;
                        100 == t && (clearInterval(e),
                            vt(101))
                    }, 10);
                    F.addChild(V),
                        G = new R;
                    for (var n = [], i = 0; i < 60; i++)
                        n.push(N[x].textures["slide" + i + ".png"]);
                    var a = new PIXI.extras.AnimatedSprite(n);
                    a.animationSpeed = .4,
                        a.play(),
                        G.addChild(a),
                        G.position.set(179, X - 300),
                        z.addChild(F, G)
                }(),
                $(".loading_num").eq(0).css({
                    display: "inline-block"
                }),
                function() {
                    $("#loading").fadeOut(),
                    $("#bgm")[0].paused && $("#bgm")[0].play();
                    j = new k.default.Tween({
                        y: 0
                    }).to({
                        y: -2705
                    }, 23e3).onUpdate(function(t, e) {
                        H || $(".left_scroll").css({
                            transform: "translate3d(0," + t.y + "px,0)"
                        }),
                        K && $(".right_scroll").css({
                            transform: "translate3d(0," + t.y + "px,0)"
                        })
                    }).repeat(1 / 0).start(),
                    window.NTESAntAnalysis && window.NTESAntAnalysis.sendData({
                        projectid: "NTM-MMKAJZQA-17",
                        val_nm: "c-ntm",
                        val_act: "loaded"
                    }),
                        Jt();
                    var e = 0
                        , n = 0;
                    $(".slide").show(),
                        f ? ($(".newsapp_btn").show(),
                            $(".slide").hide(),
                            $(".stage1").bind("click", function() {
                                Z()
                            })) : ($(".stage1").bind("touchstart", function(t) {
                            $("#bgm")[0].paused && $("#bgm")[0].play(),
                                e = t.touches[0].pageX,
                                $(".slide_circle").removeClass("circle_ani"),
                                $(".slide_text").hide()
                        }),
                            $(".stage1").bind("touchmove", function(t) {
                                t.preventDefault(),
                                    0 < (n = t.touches[0].pageX - e) ? e = t.touches[0].pageX : n <= -205 ? ($(".slide_circle").css({
                                        transform: "translate3d(-205px,0,0)"
                                    }),
                                        $(".slide_circle2").css({
                                            transform: "scale(0.395)"
                                        }),
                                        Z()) : ($(".slide_circle").css({
                                        transform: "translate3d(" + n + "px,0,0)"
                                    }),
                                        $(".slide_circle2").css({
                                            transform: "scale(" + (.605 * (1 + n / 205) + .395) + ")"
                                        }),
                                        $(".slide_line_bg").width(Math.max(49, 209 + n)))
                            }),
                            $(".stage1").bind("touchend", function(t) {
                                -205 < n && ($(".slide_circle").css({
                                    transform: "translate3d(0,0,0)"
                                }),
                                    $(".slide_circle").addClass("circle_ani"),
                                    $(".slide_text").show(),
                                    $(".slide_line_bg").width(209))
                            }));
                    new QRCode($(".qr_code")[0],{
                        width: 90,
                        height: 90,
                        colorDark: "#000000",
                        colorLight: "#ffffff",
                        correctLevel: QRCode.CorrectLevel.L
                    }).makeCode(b),
                        new QRCode($(".qr_code2")[0],{
                            width: 92,
                            height: 92,
                            colorDark: "#000000",
                            colorLight: "#ffffff",
                            correctLevel: QRCode.CorrectLevel.L
                        }).makeCode(b)
                }(),
            1464 == X && $(".toEnd").css({
                bottom: "180px"
            }),
            1334 < X && $(".end_main").css({
                "min-height": X - 525 + "px"
            });
            var e = new Date;
            $(".top_time").text(e.getFullYear() + "." + (e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1) + "." + (e.getDate() < 10 ? "0" + e.getDate() : e.getDate()))
        }
        var nt = 0
            , it = 5e3
            , at = new Scroller(function(t, e, n) {
                if (nt = t - it,
                    it = t,
                !_t && $t) {
                    if (-1.8 < xt)
                        return xt = -1.8,
                            G.visible = !0,
                            $t = !1,
                            void at.scrollTo(5e4, 0, !1);
                    Math.abs(nt) < 1 ? ($t = !1,
                        at.scrollTo(5e4, 0, !1)) : xt -= nt / 1e3 * 1.5
                }
                _t && (-1.8 < (xt -= nt / 1e3 * 1.5) && (xt = -1.8,
                    G.visible = !0),
                xt < -2 && (G.visible = !1))
            }
            ,{
                zooming: !1,
                animating: !0,
                bouncing: !1,
                animationDuration: 250
            });
        function st(t) {
            var e = t.data.originalEvent;
            at.doTouchStart(e.touches, e.timeStamp),
                $t = _t = !0
        }
        function ot(t) {
            var e = t.data.originalEvent;
            at.doTouchMove(e.touches, e.timeStamp, e.scale)
        }
        function rt(t) {
            _t = !1;
            var e = t.data.originalEvent;
            at.doTouchEnd(e.timeStamp)
        }
        var ct, lt, dt = 300, ht = 450, ut = 150, pt = [], mt = 80;
        var gt = []
            , ft = .3;
        function vt(s) {
            var t, e = St[s];
            e = s + 1 + "." + e;
            var o = new R;
            o.textData = St[s],
                o.index = s,
                o.gameStep = 0,
                o.rotation = Math.PI / 2;
            var n = o.roadIndex = pt[s]
                , i = 30 + mt
                , a = dt + ht + n * i - mt + i
                , r = {
                x: 375,
                y: X + dt
            };
            o.speed = 1,
                o.position.set(r.x, r.y),
                o.pivot.set(0, a);
            var c = Math.asin(32 / a)
                , l = 0;
            101 == s && (e = "你已经看完100件事咯~",
                t = "接下来，从头开始浏览",
                a = dt + X / 2 + 100,
                r = {
                    x: 375,
                    y: X + dt
                },
                o.position.set(r.x, r.y),
                o.pivot.set(0, a),
                c = Math.asin(32 / a));
            for (var d = o.wordBox = new R, h = 0; h < e.length; h++) {
                var u = new R
                    , p = new PIXI.Text(e[h],{
                    fontSize: 30,
                    fill: ["#000000"]
                })
                    , m = e.charCodeAt(h)
                    , g = 0;
                g = 0 == h ? 0 : 1 == h && s <= 100 ? .6 * c : 1 <= m && m <= 126 || 65376 <= m && m <= 65439 ? "/" == e[h] ? 1.5 * c : o.wordBox.children[h - 1].wordStep == c ? 1.2 * c : .6 * c : o.wordBox.children[h - 1].wordStep == .6 * c || o.wordBox.children[h - 1].wordStep == 1.5 * c ? .8 * c : c,
                    l += u.wordStep = g,
                    u.rotation = l,
                    u.startRotation = l,
                    u.pivot.set(14, a),
                    u.position.set(14, a);
                var f = Nt({
                    color: 15790320,
                    width: 38,
                    height: 70,
                    x: 0,
                    y: -20
                });
                f.alpha = 0,
                    u.addChild(f, p),
                    d.allRotation = l,
                    d.addChild(u)
            }
            if (101 == s) {
                var v = o.wordBox2 = new R;
                l -= o.wordBox.allRotation + .02;
                for (var w = 0; w < t.length; w++) {
                    var _, x = new R, b = new PIXI.Text(t[w],{
                        fontSize: 30,
                        fill: ["#000000"]
                    });
                    e.charCodeAt(w);
                    _ = c,
                        l += x.wordStep = _,
                        x.rotation = l,
                        x.startRotation = l,
                        x.pivot.set(14, a),
                        x.position.set(14, a + 50);
                    var S = Nt({
                        color: 15790320,
                        width: 38,
                        height: 70,
                        x: 0,
                        y: -20
                    });
                    S.alpha = 0,
                        x.addChild(S, b),
                        v.addChild(x)
                }
                o.addChild(v)
            }
            if (o.addChild(d),
                o.allRotation = l,
                ft += 1 / 12,
                o.startStemp = ft,
                V.addChild(o),
            101 == s)
                return ft += .6,
                    o.startStemp = ft,
                    void (ft += 1 / 3);
            if (0 < s) {
                if (Math.abs(pt[s - 2] - pt[s]) <= 1) {
                    var C = o.startStemp + o.allRotation / 2 - V.children[s - 2].startStemp - V.children[s - 2].allRotation / 2;
                    C < .1 && (ft += C < 0 ? .25 - C : .25 + C,
                        o.startStemp = ft)
                }
                if (Math.abs(pt[s - 1] - pt[s]) <= 1) {
                    var T = o.startStemp + o.allRotation / 2 - V.children[s - 1].startStemp - V.children[s - 1].allRotation / 2;
                    T < 0 && (ft += 1 / 8 - T,
                        o.startStemp = ft)
                }
                Math.abs(pt[s - 1] - pt[s]) <= 2 && (ft += 1 / 8,
                    o.startStemp = ft);
                for (var y = s - 1; 0 <= y; y--)
                    if (pt[y] == pt[s]) {
                        var E = V.children[s].startStemp - V.children[y].startStemp - V.children[y].allRotation;
                        E < 0 ? (ft += 1 / 12 - E,
                            o.startStemp = ft) : E < .2 && (ft += 1 / 12,
                            o.startStemp = ft);
                        break
                    }
            }
            var M = o.circle = new R;
            M.visible = !1;
            var I = new q(N[L].textures[s + 1 + ".png"]);
            I.pivot.set(I.width / 2, I.height / 2),
                I.position.set(I.width / 2, I.height / 2);
            var j = new q(N[L].textures["bg.png"]);
            j.visible = !1,
                j.position.set(I.width / 2 - 5, I.height / 2 + 9),
                j.pivot.set(I.width / 2, I.height / 2),
                M.addChild(j, I),
                M.pivot.set(I.width / 2, I.height / 2 + a),
                M.position.set(5, a),
                M.rotation = l / 2,
                o.addChild(M),
                o.chosen = !1,
                o.interactive = !0,
                o.buttonMode = !0,
                o.on("touchstart", function(t) {
                    var e = t.data.originalEvent;
                    o.startX = e.touches[0].pageX,
                        o.touch = !0,
                        o.xValue = 0
                }).on("touchmove", function(t) {
                    if (o.touch) {
                        var e = t.data.originalEvent;
                        o.xValue = Math.abs(e.touches[0].pageX - o.startX)
                    }
                }).on("touchend", function(t) {
                    o.touch && (30 < o.xValue || (o.tween1 && o.tween1.stop(),
                    o.tween2 && o.tween2.stop(),
                        o.chosen ? o.hideCircle() : (o.showCircle(),
                            $("#text")[0].currentTime = 0,
                            $("#text")[0].play())))
                }),
                o.showCircle = function() {
                    o.chosen = !0,
                        yt.appendLi(o);
                    var e = !1;
                    if (gt.forEach(function(t) {
                        t == s && (e = !0)
                    }),
                        !e) {
                        var t = document.createElement("img");
                        t.src = A("end_circle2/" + (s + 1) + ".png"),
                            $(".loading_img").append(t);
                        var n = document.createElement("img");
                        n.src = A("end_text2/" + (s + 1) + ".png"),
                            $(".loading_img").append(n),
                            gt.push(s)
                    }
                    M.visible = !0,
                        o.wordBox.visible = !1,
                        I.scale.set(0);
                    var i = o.tween1 = new k.default.Tween({
                        scale: 0
                    }).to({
                        scale: 1.2
                    }, 200).onUpdate(function(t, e) {
                        I.scale.set(t.scale)
                    }).start()
                        , a = o.tween2 = new k.default.Tween({
                        scale: 1.2
                    }).to({
                        scale: 1
                    }, 100).onUpdate(function(t, e) {
                        I.scale.set(t.scale),
                            j.scale.set(e)
                    }).onStart(function() {
                        j.visible = !0
                    });
                    i.chain(a),
                    wt || (wt = !0,
                        $(".select_tips").show()),
                        $(".toEnd_btn").show()
                }
                ,
                o.hideCircle = function() {
                    o.chosen = !1,
                        yt.forEach(function(t, e) {
                            t.text == o && (yt.remove(t),
                                $(t).remove(),
                                yt.calHeight())
                        }),
                    0 == yt.length && $(".not_select").show(),
                    yt.length < 2 && $(".drag_tips").hide(),
                        $(".select_num").text(yt.length),
                    0 == yt.length && $(".toEnd_btn").hide();
                    var t = o.tween2 = new k.default.Tween({
                        scale: 1.2
                    }).to({
                        scale: 0
                    }, 200).onUpdate(function(t, e) {
                        I.scale.set(t.scale)
                    }).onComplete(function() {
                        M.visible = !1,
                            o.wordBox.visible = !0
                    });
                    (o.tween1 = new k.default.Tween({
                        scale: 1
                    }).to({
                        scale: 1.2
                    }, 100).onUpdate(function(t, e) {
                        I.scale.set(t.scale),
                            j.scale.set(1 - e)
                    }).onComplete(function() {
                        j.visible = !1
                    }).start()).chain(t)
                }
        }
        $(".toEnd_btn").bind("click", function() {
            window.NTESAntAnalysis && window.NTESAntAnalysis.sendData({
                projectid: "NTM-MMKAJZQA-17",
                val_nm: "c-ntm",
                val_act: "goto_end"
            }),
                $("#click")[0].play(),
                $(this).addClass("clicked"),
                $(".toEnd_mask").show(),
                $(".mask_text").html("人生必做的100件事<br> 你完成了" + yt.length + "件哦～");
            var t = new k.default.Tween({
                height: 0
            }).to({
                height: X
            }, 1500).onUpdate(function(t, e) {
                $(".mask3").height(t.height)
            }).easing(k.default.Easing.Exponential.Out).onComplete(function() {
                $("#main").hide()
            }).start()
                , e = new k.default.Tween({
                width: 0
            }).to({
                width: 438
            }, 2e3).onUpdate(function(t, e) {
                $(".line_cover").width(t.width)
            }).onStart(function() {
                !function() {
                    $(".head_name").text(Lt);
                    var t = ["心里藏着小星星~生活才能亮晶晶~", "呐~做人呢，最重要的就是开心啦！", "去吧，去见识生命里更多不同的风景！", "肆意人生，及时行乐。", "在还能奔跑的年纪，尽情去撒欢！", "活在当下，别说来日方长！", "宇宙浪漫，生活温暖，前进吧！", "人生很长，不妨大胆些，再大胆些！", "做一个世界的水手，游遍每一个港口。", "在路上，永远年轻，永远热泪盈眶。", "你本就拥有做任何事情的勇气！", "放胆生活吧，告诉世界什么是勇敢！", "认真生活，才敢毫无遗憾地老去！", "趁我们头脑发热，我们要不顾一切！"];
                    $(".bottom_text").text(t[parseInt(Math.random() * t.length)]);
                    var e = 0
                        , n = yt.length;
                    36 < n && $(".end_bottom").addClass("show_qr"),
                        10 <= n && n < 100 ? ($(".finish_bg .num").eq(0).addClass("n" + Math.floor(n / 10)),
                            $(".finish_bg .num").eq(1).addClass("n" + n % 10),
                            $(".finish_box").addClass("ten")) : 100 == n ? ($(".finish_all").show(),
                            $(".finish_bg").hide()) : ($(".finish_bg .num").eq(0).addClass("n" + n),
                            $(".finish_bg .num").eq(1).remove(),
                            $(".finish_box").addClass("single"));
                    for (var i = 0; i < n; i++) {
                        window.NTESAntAnalysis && window.NTESAntAnalysis.sendData({
                            projectid: "NTM-MMKAJZQA-17",
                            val_nm: "c-ntm",
                            val_act: "select_" + (yt[i].index + 1)
                        });
                        var a = document.createElement("li")
                            , s = document.createElement("img");
                        s.src = A("end_circle2/" + (yt[i].index + 1) + ".png"),
                            $(a).append(s),
                            $(a).append("<div class='li_text' style='background-image:url(" + A("end_text2/" + (yt[i].index + 1) + ".png") + ")'></div>"),
                            $(".end_main ul").append(a),
                            s.onload = function() {
                                ++e == n && h()($("#end")[0], {
                                    useCORS: !0,
                                    scale: 1
                                }).then(function(t) {
                                    $(".save_canvas").append(t);
                                    var e = $(".save_canvas canvas")[0]
                                        , n = new Image;
                                    n.src = e.toDataURL("image/png"),
                                        $(".tap_save").append(n),
                                        $(".tap_save").show()
                                })
                            }
                    }
                }()
            });
            setTimeout(function() {
                $(".mask1").show(),
                    $(".mask2").show(),
                    new k.default.Tween({
                        height: 0
                    }).to({
                        height: -X - 72
                    }, 1500).onUpdate(function(t, e) {
                        $(".mask3").css({
                            transform: "translate3d(0," + t.height + "px,0)"
                        })
                    }).easing(k.default.Easing.Exponential.Out).start(),
                    new k.default.Tween({
                        height: 0
                    }).to({
                        height: -X - 72
                    }, 1500).onUpdate(function(t, e) {
                        $(".mask2").css({
                            transform: "translate3d(0," + t.height + "px,0)"
                        })
                    }).delay(10).easing(k.default.Easing.Exponential.Out).start(),
                    new k.default.Tween({
                        height: 0
                    }).to({
                        height: -X - 72
                    }, 1500).onUpdate(function(t, e) {
                        $(".mask1").css({
                            transform: "translate3d(0," + t.height + "px,0)"
                        })
                    }).delay(20).onComplete(function() {
                        if ($(".toEnd_mask").hide(),
                        _ || w && g || w && v) {
                            $(".touch_save_guide").fadeIn();
                            var t = +new Date;
                            $(".tap_save").bind("touchstart", function() {
                                t = +new Date
                            }),
                                $(".tap_save").bind("touchend", function() {
                                    1e3 < +new Date - t && $(".touch_save_guide").fadeOut()
                                })
                        } else
                            $(".screen_save_guide").fadeIn(),
                                setTimeout(function() {
                                    $(".screen_save_guide").fadeOut()
                                }, 5e3)
                    }).easing(k.default.Easing.Exponential.Out).start()
            }, 3500),
                t.chain(e)
        });
        var wt = !1;
        $(".select_area").bind("click", function() {
            $(".select_main").hasClass("show") ? (bt = .001,
                $(".select_main").removeClass("show"),
                $(".num_rect").hide()) : (bt = 1e-4,
                wt = !0,
                $(".select_tips").hide(),
                $(".num_rect").show(),
                $(".select_main").addClass("show"))
        }),
            $(".hide_select").bind("click", function() {
                $(".select_main").hasClass("show") && (bt = .001,
                    $(".select_main").removeClass("show"),
                    $(".num_rect").hide())
            });
        var _t = !1
            , $t = !1
            , xt = -1.8
            , bt = .001;
        var St = [
            "铁竹堂烧烤炸货",
            "文和友",
            "费大厨辣椒炒肉",
            "金源元",
            "盟重烧烤",
            "大夫第",
            "南洋大师傅",
            "旺旺小吃",
            "烤全羊",
            "侯师傅热炒店",
            "巢娭毑月饼",
            "向群锅饺",
            "如也咖啡馆",
            "盛香亭",
            "新长福",
            "大龙燚火锅",
            "斌弟火锅",
            "坛宗剁椒鱼头",
            "徐记海鲜",
            "瞿记虾尾",
            "天宝兄弟",
            "牛家酒场",
            "酒拾烤肉",
            "大鱼海棠",
            "老清泉北京涮羊肉",
            "茶颜悦色",
            "是隆咖啡",
            "Super Monkey",
            "十二兽",
            "Helens",
            "果呀呀",
            "几个果子",
            "Play House",
            "COCO都可",
            "麓山下Coffee",
            "仟吉西饼",
            "罗森尼娜",
            "手感麦夫",
            "仙峰面包",
            "一点点",
            "书亦烧仙草",
            "哈根达斯",
            "MAMA茶",
            "喜茶",
            "老欧洲咖啡馆",
            "瑞幸咖啡",
            "猫咖",
            "填空咖啡",
            "有情调的清吧喝酒",
            "不一样的西餐",
            "省图书馆看书",
            "德思勤24小时书店",
            "IFS楼顶俯瞰长沙",
            "音乐节",
            "水上乐园",
            "大围山露营看星星",
            "农家乐",
            "定制西装",
            "浏阳河婚庆公园拍写真",
            "乐汀私人影院看鬼片",
            "火车头公园",
            "世界之窗",
            "海底世界",
            "华谊小镇",
            "植物园",
            "生态动物园",
            "荷花池菜市场买菜",
            "和喜欢的人坐摩天轮",
            "渔人码头吃宵夜",
            "草莓园摘草莓",
            "农大看枫叶",
            "Zoolung Zoolung动物主题公园",
            "梅溪湖文化艺术中心看话剧",
            "岳麓书院",
            "798打篮球",
            "美克美家挑选家具",
            "乐运魔方运动",
            "找TONY老师改头换面",
            "去健萌锻炼",
            "参观奔驰MAR2020智能展厅",
            "老街上走走",
            "烈士公园",
            "爱康国宾体检",
            "大围山溯溪",
            "定王台买书",
            "橘子洲放风筝",
            "新华书店买书",
            "黄花机场接机偶像",
            "做SPA",
            "杜甫江阁看烟花",
            "爬岳麓山",
            "牵手在河边头散步",
            "湘江边看落日",
            "逛宜家",
            "杜比影院看电影",
            "开车上神仙岭拍照",
            "看国际车展",
            "密室逃脱",
            "剧本杀",
            "电竞酒店"]
            , Ct = !1
            , Tt = new Scroller(function(t, e, n) {
                Ct || ($(".scroll_main").css({
                    top: -e + "px"
                }),
                    $(".scroll_main")[0].top = e)
            }
            ,{
                zooming: !1,
                animating: !0,
                bouncing: !1,
                animationDuration: 1e3
            });
        $(".scroll_main").bind("touchstart", function(t) {
            if (It)
                return;
            Tt.doTouchStart(t.touches, t.timeStamp)
        }),
            $(".scroll_main").bind("touchmove", function(t) {
                if (It)
                    return;
                Tt.doTouchMove(t.touches, t.timeStamp, t.scale)
            }),
            $(".scroll_main").bind("touchend", function(t) {
                if (It)
                    return;
                Tt.doTouchEnd(t.timeStamp)
            });
        var yt = []
            , Et = 1e3;
        yt.calHeight = function() {
            var n = 0;
            yt.forEach(function(t, e) {
                $(".title_icon p").eq(e).html(e + 1 + "."),
                    t.top = n,
                    $(t).css({
                        top: n + "px"
                    }),
                    n += t.height
            }),
                this.height = n,
                Tt.setDimensions(500, Et, 500, n)
        }
            ,
            yt.longTapStart = function(t, e) {
                $(e).addClass("active"),
                    this.value = 0,
                    this.end = !1,
                    this.startY = this.y = t.touches[0].pageY,
                    this.activeLi = e,
                    this.activeIndex = this.currentIndex = $(e).index(),
                    this.startScroll = $(".scroll_main")[0].top
            }
            ,
            yt.longTapMove = function(t, e) {
                if (1 != this.length) {
                    var n = this.y = t.touches[0].pageY
                        , i = this.value = n - this.startY;
                    if (!this.watchingScroll) {
                        var a = this.scrollChange = $(".scroll_main")[0].top - this.startScroll;
                        this.checkScroll();
                        var s = Math.min(this.height - this.activeLi.height, e.top + i + a);
                        s = Math.max(0, this.activeLi.top + this.value + this.scrollChange);
                        $(e).css({
                            top: s + "px"
                        }),
                        $(".drag_tips") && $(".drag_tips").remove()
                    }
                }
            }
            ,
            yt.longTapEnd = function(t, e) {
                this.value + this.scrollChange < 0 && $(e).insertBefore($(yt[this.currentIndex])),
                0 < this.value + this.scrollChange && $(e).insertAfter($(yt[this.currentIndex]));
                var n = yt[this.activeIndex];
                yt.splice(this.activeIndex, 1),
                    yt.splice(this.currentIndex, 0, n);
                var i = 0;
                $(e).removeClass("active"),
                    setTimeout(function() {
                        yt.forEach(function(t, e) {
                            $(".title_icon p").eq(e).html(e + 1 + "."),
                                t.top = i,
                                $(t).css({
                                    top: i + "px"
                                }),
                                i += t.height
                        })
                    }),
                    this.end = !0
            }
            ,
            yt.checkScroll = function() {
                for (var t = this.activeLi.top + this.value + this.scrollChange, e = 0, n = 0; n < this.activeIndex; n++)
                    t < this[n].top + this[n].height / 2 ? ($(".title_icon p").eq(n).html(n + 2 + "."),
                        $(this[n]).css({
                            top: this[n + 1].top + (this.activeLi.height - this[n].height) + "px"
                        })) : (e = n + 1,
                        $(".title_icon p").eq(n).html(n + 1 + "."),
                        $(this[n]).css({
                            top: this[n].top + "px"
                        }));
                for (n = this.activeIndex + 1; n < yt.length; n++)
                    t + this.activeLi.height > this[n].top + this[n].height / 2 ? ($(".title_icon p").eq(n).html(n + "."),
                        e = n,
                        $(this[n]).css({
                            top: this[n - 1].top + (this[n - 1].height - this.activeLi.height) + "px"
                        })) : ($(".title_icon p").eq(n).html(n + 1 + "."),
                        $(this[n]).css({
                            top: this[n].top + "px"
                        }));
                this.currentIndex = e,
                    $(this.activeLi).find(".title_icon p").html(e + 1 + ".")
            }
            ,
            yt.watchingScroll = !1;
        yt.watchScroll = function() {
            if (!this.end && this.activeLi) {
                if (this.y > Et) {
                    yt.watchingScroll = !0;
                    var t = Math.min(this.height - Et, $(".scroll_main")[0].top + (this.y - Et) / 2);
                    this.height <= Et && (t = 0),
                        $(".scroll_main")[0].top = t,
                        $(".scroll_main").css({
                            top: -t + "px"
                        }),
                        this.checkScroll(),
                        this.scrollChange = $(".scroll_main")[0].top - this.startScroll;
                    var e = Math.min(this.height - this.activeLi.height, this.activeLi.top + this.value + this.scrollChange);
                    $(this.activeLi).css({
                        top: e + "px"
                    })
                } else if (this.y < 85) {
                    yt.watchingScroll = !0;
                    t = Math.max(0, $(".scroll_main")[0].top - (85 - this.y) / 2);
                    $(".scroll_main")[0].top = t,
                        $(".scroll_main").css({
                            top: -t + "px"
                        }),
                        this.checkScroll(),
                        this.scrollChange = $(".scroll_main")[0].top - this.startScroll;
                    e = Math.max(0, this.activeLi.top + this.value + this.scrollChange);
                    $(this.activeLi).css({
                        top: e + "px"
                    })
                } else
                    yt.watchingScroll = !1
            }
        }
        ;
        var Mt = !(yt.appendLi = function(t) {
                var e = document.createElement("li")
                    , n = $(".scroll_main li").length;
                e.innerHTML = '\n            <div class="li_main">\n\t              <div class="li_title">\n\t                    <div class="title_icon">\n\t                        <p>' + (n + 1) + '.</p>\n\t                        <div class="title_icon_bg"></div>\n\t                    </div>\n\t                  <div class="title_main">' + t.textData + '</div>\n\t              </div>\n\t          </div>\n\t          <div class="close_li">\n\t              <div class="close_icon"></div>\n\t          </div>\n        ',
                    $(".scroll_main").append(e);
                var i = $(e);
                50 < i.find(".title_main").height() ? (i.addClass("double"),
                    e.height = 120) : e.height = 84,
                    e.text = t,
                    e.index = t.index,
                    yt.push(e),
                    i.bind("touchstart", jt),
                    i.bind("touchmove", At),
                    i.bind("touchend", kt),
                    i.find(".close_li").bind("click", function() {
                        yt.remove(e),
                            i.remove(),
                            t.hideCircle(),
                            yt.calHeight()
                    }),
                    $(".select_num").text(yt.length),
                0 < yt.length && $(".not_select").hide(),
                2 <= yt.length && $(".drag_tips").show(),
                    yt.calHeight()
            }
        )
            , It = !1;
        function jt(t) {
            if (!Mt) {
                Mt = !0;
                var e = this;
                e.startTouch = !0,
                    e.startY = t.touches[0].pageY,
                    e.moved = !1,
                    e.longTap = !1,
                    e.end = !1,
                    e.timer = setTimeout(function() {
                        e.end || e.moved || (e.longTap = !0,
                            It = !0,
                            yt.longTapStart(t, e))
                    }, 100)
            }
        }
        function At(t) {
            var e = this;
            e.startTouch && (t.touches[0].pageY != e.startY && (e.moved = !0),
            e.longTap && (yt.longTapMove(t, e),
                t.preventDefault()))
        }
        function kt(t) {
            Mt = !1;
            var e = this;
            e.startTouch = !1,
                e.end = !0,
            e.longTap && (e.moved = !1,
                e.longTap = !1,
                yt.longTapEnd(t, e),
                It = !(Ct = !0),
                setTimeout(function() {
                    Tt.scrollTo(0, $(".scroll_main")[0].top, !1),
                        setTimeout(function() {
                            Ct = !1
                        }, 30)
                }, 30))
        }
        var Lt = "";
        $(".input_bg").bind("click", function() {
            $("#input")[0].focus()
        }),
        _ && $(".input_line").css({
            left: "164px"
        }),
            $("#input").on("focus", function() {
                $(".input_line").css({
                    left: "244px"
                }),
                    $(".long_name,.no_name,.wrong_name,.input_line").hide()
            }),
            $("#input").on("blur", function() {
                var t = $("#input")[0].value;
                "" === (t = t.replace(/(^\s*)|(\s*$)/g, "")) && $(".input_line").show(),
                    setTimeout(function() {
                        var t = document.documentElement.scrollTop || document.body.scrollTop || 0;
                        window.scrollTo(0, Math.max(t - 1, 0))
                    }, 50),
                    Dt(t, function() {
                        if (12 < Bt(t))
                            return $(".long_name").show(),
                                !1
                    })
            }),
            $(".confirm_top").bind("click", function() {
                Rt || ($("#click")[0].play(),
                    $(".confirm_top").addClass("click"),
                    setTimeout(function() {
                        $(".confirm_top").removeClass("click")
                    }, 300),
                    function() {
                        var t = $("#input")[0].value;
                        Dt(t = t.replace(/(^\s*)|(\s*$)/g, ""), function() {
                            if (12 < Bt(t))
                                return $(".long_name").show(),
                                    !1;
                            Lt = t,
                                Rt = !0,
                            window.NTESAntAnalysis && window.NTESAntAnalysis.sendData({
                                projectid: "NTM-MMKAJZQA-17",
                                val_nm: "c-ntm",
                                val_act: "hide2"
                            }),
                                $("#first").css({
                                    background: "transparent"
                                }),
                                new k.default.Tween({
                                    width: 671
                                }).to({
                                    width: 0
                                }, 1e3).onUpdate(function(t, e) {
                                    $(".stage2").width(t.width)
                                }).easing(k.default.Easing.Cubic.In).start(),
                                new k.default.Tween({
                                    right: -80
                                }).to({
                                    right: 0
                                }, 1e3).onUpdate(function(t, e) {
                                    $(".stage_box").css({
                                        transform: "translate3d(" + t.right + "px,0,0)"
                                    }),
                                        $(".right").css({
                                            transform: "translate3d(" + (t.right + 80) + "px,0,0)"
                                        })
                                }).onComplete(function() {
                                    j.stop(),
                                        $("#first").remove(),
                                        tt = !0
                                }).easing(k.default.Easing.Cubic.In).start()
                        })
                    }())
            });
        var Rt = !1;
        function Dt(t, e) {
            if ("" === t)
                return $(".no_name").show(),
                    $(".input_line").show(),
                    !1;
            if ("" === (t = function(t) {
                for (var e = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'，、？%+_]"), n = "", i = 0; i < t.length; i++)
                    n += t.substr(i, 1).replace(e, "");
                return n
            }(t)))
                return e(),
                    !0;
            !function(t, e) {
                $.ajax({
                    type: "GET",
                    url: "https://gw.m.163.com/nc-node/api/v1/checkValidate?",
                    data: {
                        text: t
                    },
                    dataType: "jsonp",
                    jsonp: "callback",
                    success: function(t) {
                        1 == t ? e() : $(".wrong_name").show()
                    },
                    error: function(t) {
                        alert(JSON.stringify(t))
                    }
                })
            }(t, e)
        }
        function Nt(t) {
            var e = new B;
            return e.beginFill(t.color),
                e.drawRect(0, 0, t.width, t.height),
                e.position.set(t.x ? t.x : 0, t.y ? t.y : 0),
                e.endFill(),
                e
        }
        function qt(t, e) {
            return .5 < Math.random() ? -1 : 1
        }
        function Bt(t) {
            for (var e = 0, n = 0; n < t.length; n++) {
                var i = t.charCodeAt(n);
                1 <= i && i <= 126 || 65376 <= i && i <= 65439 ? e++ : e += 2
            }
            return e
        }
        function Jt() {
            yt && yt.watchScroll(),
            tt && (V && ($t || (xt -= bt),
                V.children.forEach(function(t, e) {
                    var n;
                    -xt >= t.gameStep * ft + t.startStemp + ft / 2 ? t.gameStep += 1 : -xt < t.gameStep * ft + t.startStemp - ft / 2 && 0 < t.gameStep && (t.gameStep -= 1),
                        (n = xt + t.gameStep * ft) <= -t.startStemp && n + t.startStemp > -Math.PI - t.allRotation ? t.rotation = Math.PI / 2 + (n + t.startStemp) : n + t.startStemp <= -Math.PI - t.allRotation ? t.rotation = -Math.PI - t.allRotation : t.rotation = Math.PI / 2
                })),
                P.render(O)),
                k.default.update(),
                requestAnimationFrame(Jt)
        }
        Array.prototype.remove = function(t) {
            -1 !== this.indexOf(t) && this.splice(this.indexOf(t), 1)
        }
    },
    0: function(t, e, n) {
        t.exports = n("./src/js/index.js")
    }
}, [[0, 1, 2]]]);
