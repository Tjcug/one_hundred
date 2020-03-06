(window.webpackJsonp = window.webpackJsonp || []).push([[2], {
    "./node_modules/@mf2e/js-bridge/dist/js-bridge.esm.js": function(A, e, t) {
        "use strict";
        t.r(e);
        t("./node_modules/core-js/fn/promise/finally.js");
        var n = window.navigator.userAgent
            , w = /newsapp/i.test(n)
            , r = /ipad|iphone|ipod|ios/i.test(n)
            , o = /android|adr/i.test(n)
            , s = function() {};
        function Q(A, e, t) {
            if (!window[A] || window[A] === s || t)
                window[A] = function() {
                    e && e.apply(this, arguments),
                        window[A] = s
                }
                ;
            else {
                var n = window[A];
                window[A] = function() {
                    e && e.apply(this, arguments),
                        n.apply(this, arguments)
                }
            }
        }
        var i = void 0;
        function h(A, e) {
            (function(A) {
                    A = "__newsapp__protocol__" + A;
                    var e = document.getElementById(A);
                    return e ? i && (clearTimeout(i),
                        i = null) : ((e = document.createElement("iframe")).id = A,
                        e.style.display = "none",
                        document.body.appendChild(e)),
                        e
                }
            )(A).src = e,
                function(e) {
                    e = "__newsapp__protocol__" + e,
                        i = setTimeout(function() {
                            var A = document.getElementById(e);
                            A && (document.body.removeChild(A),
                                i = null)
                        }, 3e3)
                }(A)
        }
        var a = "docmode://"
            , c = "newsapp://"
            , u = "copy://"
            , B = "share://"
            , l = "device://"
            , d = "trashid://"
            , f = "encrypt://"
            , g = "login://"
            , p = "userinfo://"
            , U = "location://"
            , C = "settings://"
            , E = "alarm://"
            , m = "alert://"
            , F = "comment://"
            , H = "pushview://"
            , _ = "updateprofile://"
            , v = "uploadimage://"
            , N = "downloadimage://"
            , K = "uploadvideo://"
            , y = "accountinfo://"
            , b = "authreq://"
            , I = "otherappinfo://"
            , T = "openapp://"
            , R = "newspay://"
            , O = "startgyro://"
            , S = "stopgyro://"
            , L = "cancelaccount://"
            , j = "verifyphone://";
        var M = {
            showToolbar: function() {
                h("showToolbar", a + "toolbar/show")
            },
            hideToolbar: function() {
                h("hideToolbar", a + "toolbar/hide")
            },
            modifyTitle: function(A) {
                h("modifyTitle", a + "modifytitle/" + encodeURIComponent(A))
            },
            button: function(A, e) {
                h("button", a + "actionbutton/" + encodeURIComponent(A)),
                    window.__newsapp_browser_actionbutton = e
            },
            close: function() {
                h("close", a + "close")
            },
            disableGesture: function() {
                h("leftgesture", a + "leftgesture/false"),
                    h("rightgesture", a + "rightgesture/false")
            }
        };
        var x = {
            setShareData: function(A) {
                var e = [{
                    id: "__newsapp_sharewxurl",
                    text: A.wxUrl
                }, {
                    id: "__newsapp_sharewxthumburl",
                    text: A.wxImg
                }, {
                    id: "__newsapp_sharewxtitle",
                    text: A.wxTitle
                }, {
                    id: "__newsapp_sharewxtext",
                    text: A.wxText
                }, {
                    id: "__newsapp_sharephotourl",
                    text: A.wbImg
                }, {
                    id: "__newsapp_sharetext",
                    text: A.wbText
                }]
                    , t = "__newsapp_shareconfig"
                    , n = document.getElementById(t);
                n || ((n = document.createElement("div")).id = t,
                    n.style.display = "none",
                    document.body.appendChild(n),
                    e.forEach(function(A) {
                        var e = document.querySelector("#" + A.id);
                        e && e.parentElement.removeChild(e)
                    })),
                    n.innerHTML = "",
                    n.innerHTML = e.map(function(A) {
                        return A.text ? '<div id="' + A.id + '">' + A.text + "</div>" : ""
                    }).join(""),
                    window.__newsapp_share_done = A.shareDone
            },
            openShareMenu: function(A) {
                h("share", B + (A || ""))
            }
        };
        var D = {
            feedback: function(A, e) {
                var t = A ? "/" + encodeURIComponent(A) + (e ? "/" + e : "") : "";
                h("pushview__feedback", H + "feedback" + t)
            },
            personalcenter: function() {
                h("pushview__personalcenter", H + "personalcenter")
            },
            mytask: function() {
                h("pushview__mytask", H + "mytask")
            },
            inapppurchase: function() {
                h("pushview__inapppurchase", H + "inapppurchase")
            },
            wallet: function(A) {
                h("pushview__wallet__" + A, H + "wallet/" + A)
            },
            applicationsettings: function() {
                h("pushview__applicationsettings", H + "applicationsettings")
            },
            settings: function() {
                h("pushview__settings", H + "settings")
            },
            qrcode: function() {
                h("pushview__qrcode", H + "qrcode")
            }
        };
        var P = {
            isNewsapp: w,
            isIos: r,
            isAndroid: o,
            invoke: h,
            ui: M,
            open: function(A) {
                h("open__" + (A = (A = A || "startup").replace(/^\//, "")).replace(/\/.*/g, ""), c + A)
            },
            copy: function(A) {
                h("copy", u + encodeURIComponent(A))
            },
            device: function(A) {
                Q("__newsapp_device_done", A),
                    h("device", l)
            },
            trashId: function(t) {
                Q("__newsapp_trashid_done", function(A) {
                    var e = {
                        trashId: JSON.stringify(A),
                        deviceType: A.id_ver.replace(/_.*/g, "").toLowerCase()
                    };
                    t && t(e)
                }),
                    h("trashid", d)
            },
            encrypt: function(A, e, t) {
                Q("__newsapp_encrypt_done", e);
                var n = "string" == typeof A ? A : JSON.stringify(A);
                t ? o && window.extra ? e && e(window.extra.__newsapp_encrypt_type(n, t)) : h("encrypt", "encrypts:///" + encodeURIComponent(n) + "///" + t) : o && window.extra ? e && e(window.extra.__newsapp_encrypt(n)) : h("encrypt", f + encodeURIComponent(n))
            },
            share: x,
            alarm: function(A, e) {
                var t = A.type;
                if ("add" === t || "remove" === t || "check" === t || "enable" === t) {
                    for (var n in A)
                        if ("type" !== n) {
                            var r = document.getElementById("__newsapp_alarm_" + n);
                            r || ((r = document.createElement("div")).style.display = "none",
                                r.id = "__newsapp_alarm_" + n,
                                document.body.appendChild(r)),
                                r.innerHTML = A[n]
                        }
                    Q("__newsapp_alarm_" + t + "_done", e),
                        h("alarm_" + t, E + t)
                }
            },
            remind: function(A, e) {
                var t = A.type;
                if ("add" === t || "remove" === t || "check" === t || "change" === t || "enable" === t) {
                    for (var n in A)
                        if ("type" !== n) {
                            var r = document.getElementById("__newsapp_alert_" + n);
                            r || ((r = document.createElement("div")).style.display = "none",
                                r.id = "__newsapp_alert_" + n,
                                document.body.appendChild(r)),
                                r.innerHTML = A[n]
                        }
                    Q("__newsapp_alert_" + t + "_done", e),
                        h("remind_" + t, m + t)
                }
            },
            login: function(A, e, t) {
                Q("__newsapp_login_done", A, !0),
                    Q("__newsapp_login_canceled", e, !0),
                    h("login", g + (t ? "onlynetease" : ""))
            },
            userInfo: function(A) {
                Q("__newsapp_userinfo_done", A),
                    h("userinfo", p)
            },
            location: function(A, e) {
                "current" !== A && "switch" !== A || (Q("__newsapp_location_done", e),
                    h("location_" + A, U + A))
            },
            setting: function(A) {
                Q("__newsapp_settings_done", A),
                    h("setting", C)
            },
            comment: function(A, e) {
                var t = A.boardid
                    , n = A.docid
                    , r = A.replyid
                    , o = void 0 === r ? "" : r
                    , s = A.pk
                    , i = "__newsapp_comment"
                    , a = document.getElementById(i);
                a || ((a = document.createElement("div")).style.display = "none",
                    a.id = i,
                    document.body.appendChild(a)),
                    a.setAttribute("boardid", t),
                    a.setAttribute("docid", n),
                    a.setAttribute("replyid", o);
                var c = s ? "pk/" + s.voteId + "/" + s.itemId + "/" + s.standpoint : "";
                Q("__newsapp_comment_done", e, !0),
                    h("comment", F + c)
            },
            pushview: D,
            updateProfile: function() {
                h("updateprofile", _)
            },
            uploadImage: function(A, n) {
                var e = A.width
                    , t = void 0 === e ? "" : e
                    , r = A.height
                    , o = void 0 === r ? "" : r
                    , s = A.type
                    , i = void 0 === s ? "album" : s
                    , a = A.loadingStart
                    , c = void 0 === a ? function() {}
                    : a
                    , u = A.cancelCallback
                    , B = void 0 === u ? function() {}
                    : u;
                if (w) {
                    var l = void 0;
                    l = "" === t && "" === o ? "" : t + "_" + o,
                        Q("__newsapp_upload_image_done", n, !0),
                        Q("__newsapp_upload_image_cancel", B, !0),
                        h("uploadimage_" + i, "" + v + i + "/" + l),
                        c()
                } else {
                    var d = function() {
                        var A = "__newsapp_upload_image"
                            , e = document.getElementById(A);
                        e || ((e = document.createElement("input")).id = A,
                            e.type = "file",
                            e.style.display = "none",
                            e.accept = "image/*",
                            document.body.appendChild(e));
                        return e
                    }();
                    d.onchange = function() {
                        var A = d.files[0];
                        if (A && /image/.test(A.type)) {
                            var e = new window.FormData;
                            e.append("files", A);
                            var t = new window.XMLHttpRequest;
                            t.open("POST", "https://upfile.m.163.com/nos/upload/pub"),
                                t.onload = function(A) {
                                    var e = {};
                                    200 === t.status && (e = JSON.parse(t.responseText)),
                                        d.value = "",
                                        n(e.url)
                                }
                                ,
                                t.onerror = function(A) {
                                    d.value = "",
                                        n(null)
                                }
                                ,
                                t.send(e),
                                c()
                        } else
                            window.alert("请上传图片类型")
                    }
                        ,
                        d.click()
                }
            },
            uploadVideo: function(A, n) {
                var e = A.start
                    , t = void 0 === e ? "" : e
                    , r = A.end
                    , o = void 0 === r ? "" : r
                    , s = A.type
                    , i = void 0 === s ? "album" : s
                    , a = A.loadingStart
                    , c = void 0 === a ? function() {}
                    : a
                    , u = A.cancelCallback
                    , B = void 0 === u ? function() {}
                    : u;
                if (w) {
                    var l = void 0;
                    l = "" === t && "" === o ? "" : t + "_" + o,
                        Q("__newsapp_upload_video_done", n, !0),
                        Q("__newsapp_upload_video_cancel", B, !0),
                        h("uploadvideo_" + i, "" + K + i + "/" + l),
                        c()
                } else {
                    var d = function() {
                        var A = "__newsapp_upload_video"
                            , e = document.getElementById(A);
                        e || ((e = document.createElement("input")).id = A,
                            e.type = "file",
                            e.style.display = "none",
                            e.accept = "video/*",
                            document.body.appendChild(e));
                        return e
                    }();
                    d.onchange = function() {
                        var A = d.files[0];
                        if (A && /video/.test(A.type)) {
                            var e = new window.FormData;
                            e.append("files", A);
                            var t = new window.XMLHttpRequest;
                            t.open("POST", "https://upfile.m.163.com/nos/upload/pub"),
                                t.onload = function(A) {
                                    var e = {};
                                    200 === t.status && (e = JSON.parse(t.responseText)),
                                        d.value = "",
                                        n(e.url)
                                }
                                ,
                                t.onerror = function(A) {
                                    d.value = "",
                                        n(null)
                                }
                                ,
                                t.send(e),
                                c()
                        } else
                            window.alert("请上传视频类型")
                    }
                        ,
                        d.click()
                }
            },
            downloadImage: function(A, t) {
                Q("__newsapp_download_image_done", function(A, e) {
                    A && t && t(e)
                }),
                    h("downloadimage", N + encodeURIComponent(A))
            },
            accountInfo: function(A) {
                Q("__newsapp_accountinfo_done", A),
                    h("accountinfo", y)
            },
            authReq: function(A, t) {
                Q("__newsapp_authreq_done", function(A, e) {
                    t && t(e)
                }, !0),
                    h("authreq", b + A)
            },
            getAppInfo: function(A, e) {
                Q("__newsapp_otherappinfo_done", e),
                    h("otherappinfo", r ? I + "intent/" + A.scheme : I + A.packageName)
            },
            openApp: function(A, e, t) {
                Q("__newsapp_openapp_done", e, !0),
                    Q("__newsapp_openapp_failed", t, !0),
                    h("openapp", r ? T + "intent/" + A.scheme : T + A.packageName)
            },
            nepay: function(A, e) {
                Q("__newsapp_nepay_getparam", function() {
                    return A
                }),
                    Q("__newsapp_nepay_done", e),
                    h("nepay", R + "nepay/" + A.orderId)
            },
            startGyro: function(A, e) {
                window.__newsapp_update_gyro = A,
                    Q("__newsapp_gyro_not_available", e),
                    h("startgyro", O)
            },
            stopGyro: function() {
                h("stopgyro", S),
                    window.__newsapp_update_gyro = null
            },
            startShaking: function(A) {
                o && (Q("__newsapp_shake", A),
                    window.extra.__newsapp_shake_start())
            },
            stopShaking: function() {
                o && (window.extra.__newsapp_shake_stop(),
                    window.__newsapp_shake = null)
            },
            verifyPhone: function(A, e) {
                Q("__newsapp_verifyphone_done", e),
                    h("verifyphone", j + A)
            },
            cancelAccount: function(A) {
                Q("__newsapp_cancelaccount_done", A),
                    h("cancelaccount", L)
            }
        };
        t.d(e, "invoke", function() {
            return SA
        }),
            t.d(e, "register", function() {
                return LA
            }),
            t.d(e, "unregister", function() {
                return jA
            }),
            t.d(e, "config", function() {
                return MA
            }),
            t.d(e, "isAvailable", function() {
                return RA
            }),
            t.d(e, "appVersion", function() {
                return G
            }),
            t.d(e, "isIos", function() {
                return V
            }),
            t.d(e, "isAndroid", function() {
                return z
            }),
            t.d(e, "useShim", function() {
                return TA
            });
        var k = navigator.userAgent
            , V = /ipad|iphone|ipod|ios/i.test(k)
            , z = /android|adr/i.test(k)
            , X = k.match(/NewsApp\/([\d.]+)/)
            , G = X ? parseFloat(X[1]) : 0;
        function J(A) {
            return A && "string" == typeof A
        }
        function Y(A) {
            return "function" == typeof A
        }
        function W(A) {
            return "boolean" == typeof A
        }
        function q(A) {
            return Array.isArray(A)
        }
        function Z(A) {
            return function(A) {
                return "[object Object]" === Object.prototype.toString.call(A)
            }(A) && "{}" !== JSON.stringify(A)
        }
        function $() {}
        function AA() {
            var A;
            (A = console).log.apply(A, arguments)
        }
        function eA(A) {
            console.warn(A)
        }
        var tA = {};
        function nA(A, e) {
            return tA[A] || (tA[A] = []),
                tA[A].push(e),
                e
        }
        function rA(A, e, t) {
            var n = tA[A];
            q(n) && n.slice(0).forEach(function(A) {
                return A(e, t)
            })
        }
        function oA(A, e) {
            var t = tA[A];
            if (q(t))
                if (e) {
                    var n = t.indexOf(e);
                    -1 < n && (1 === t.length ? delete tA[A] : t.splice(n, 1))
                } else
                    delete tA[A]
        }
        var sA = null
            , iA = []
            , aA = !1
            , cA = null
            , uA = null;
        function BA() {
            if (cA = cA || function() {
                var A = document.createElement("iframe");
                return A.style.display = "none",
                    document.body.appendChild(A),
                    A
            }(),
            !aA && iA.length) {
                var A = encodeURIComponent(JSON.stringify(iA));
                aA = !0,
                    iA = [],
                    cA.src = sA + A,
                    uA = setTimeout(function() {
                        return lA()
                    }, 1e3)
            }
        }
        function lA() {
            uA && (clearTimeout(uA),
                uA = null),
                aA = !1,
                BA()
        }
        var dA, wA = "transfer:", QA = "common", hA = null, fA = "cb_".concat(Date.now(), "_"), gA = 0, pA = {}, UA = null;
        function CA(A, e, t) {
            if (J(A)) {
                gA++;
                var n = {
                    name: A
                };
                Z(e) && (n.params = e),
                Y(t) && (n.callbackId = fA + gA,
                    pA[n.callbackId] = t),
                    EA(n)
            } else
                eA('Invalid parameter "name", expected "string" but is: '.concat(A))
        }
        function EA(A) {
            UA = UA || function() {
                var A, e = function(A) {
                    var t, n, r = null;
                    return A.some(function(A) {
                        var e = A.split(".");
                        return n = e.pop(),
                        null != (t = function(A, e) {
                            for (var t = e.length, n = 0; null != A && n < t; )
                                A = A[e[n++]];
                            return n && n === t ? A : void 0
                        }(window, e)) && Y(t[n]) && (r = t[n].bind(t)),
                            !!r
                    }),
                        r
                }(["webkit.messageHandlers.".concat(QA, ".postMessage"), "extra.postInvocation"]);
                dA = e ? !(A = function(A) {
                        e(JSON.stringify(A), QA)
                    }
                ) : (function(A) {
                    if (!J(A))
                        throw new TypeError('Invalid parameter "scheme", expected "string" but is: '.concat(A));
                    !function(A, e) {
                        return A.slice(-1) === e
                    }(A, "/") && (A += "/"),
                        sA = A,
                        window.handleConfirmFromNative = lA
                }("".concat(wA, "//").concat(QA, "/")),
                    A = function(A) {
                        !function(A) {
                            if (!sA)
                                throw new TypeError('Unresolved "scheme", use "setScheme(...)" before posting');
                            iA.push(A),
                                BA()
                        }(A)
                    }
                    ,
                    !0);
                return A
            }(),
                mA({
                    type: "send",
                    message: A
                }),
                UA(A)
        }
        function mA(A) {
            A.useFallback = dA,
                Y(hA) ? hA(A) : hA && AA(A)
        }
        window.handleMessageFromNative = function(A) {
            if (mA({
                type: "receive",
                message: A
            }),
                Z(A)) {
                var e = A.responseId;
                if (J(e)) {
                    var t = pA[e] || {};
                    Y(t) && (t(A.result),
                        delete pA[e])
                } else if (J(A.name)) {
                    var n = A.callbackId;
                    !function(A) {
                        return !!tA[A]
                    }(A.name) ? n && EA({
                        responseId: n,
                        result: {
                            errorMsg: "No such method: ".concat(A.name)
                        }
                    }) : J(n) ? rA(A.name, A.params, function(A) {
                        EA({
                            responseId: n,
                            result: A
                        })
                    }) : rA(A.name, A.params)
                }
            }
        }
        ;
        var FA = Object.freeze({
            config: function() {
                var A = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                if (QA = A.namespace || QA,
                    hA = A.logger || hA,
                    !J(QA))
                    throw new TypeError('Invalid parameter "namespace", expected "string" but is: '.concat(QA))
            },
            invoke: function(n, A) {
                var e = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
                return 2 === arguments.length && W(A) && (e = A),
                    e ? new Promise(function(e, t) {
                            CA(n, A, function(A) {
                                Z(A) && !A.errorMsg ? e(A.data || {}) : (A.errorMethod = n,
                                    t(A))
                            })
                        }
                    ) : (CA(n, A),
                        null)
            },
            register: function(A, t) {
                return function(A, e) {
                    if (J(A) && Y(e))
                        return nA(A, e);
                    eA('Invalid parameter "methodName" or "handler"')
                }(A, function(A, e) {
                    !function(A, e, t) {
                        if (Y(t)) {
                            var n, r, o;
                            try {
                                n = A(e)
                            } catch (A) {
                                r = A
                            }
                            (r ? Promise.reject(r) : Promise.resolve(n)).then(function(A) {
                                o = {
                                    errorMsg: "",
                                    data: A
                                }
                            }).catch(function(A) {
                                o = {
                                    errorMsg: "fail",
                                    errorDesc: A
                                }
                            }).finally(function() {
                                t(o)
                            })
                        } else
                            A(e)
                    }(t, A, e)
                })
            },
            unregister: function(A, e) {
                oA(A, e)
            }
        });
        function HA(A, e) {
            return function(A) {
                if (Array.isArray(A))
                    return A
            }(A) || function(A, e) {
                var t = []
                    , n = !0
                    , r = !1
                    , o = void 0;
                try {
                    for (var s, i = A[Symbol.iterator](); !(n = (s = i.next()).done) && (t.push(s.value),
                    !e || t.length !== e); n = !0)
                        ;
                } catch (A) {
                    r = !0,
                        o = A
                } finally {
                    try {
                        n || null == i.return || i.return()
                    } finally {
                        if (r)
                            throw o
                    }
                }
                return t
            }(A, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        var _A = null
            , vA = "receive"
            , NA = "__mock__";
        function KA(A) {
            Y(_A) ? _A(A) : _A && AA(A)
        }
        var yA, bA = Object.freeze({
            invoke: function(w) {
                var Q = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                return 2 === arguments.length && W(Q) && (Q = {}),
                    KA({
                        type: "send",
                        message: {
                            name: w,
                            params: Q
                        }
                    }),
                    new Promise(function(e, t) {
                            function n(A) {
                                KA({
                                    type: vA,
                                    message: A
                                }),
                                    e(A)
                            }
                            function r(A) {
                                var e = 0 < arguments.length && void 0 !== A ? A : {
                                    errorMsg: "fail"
                                };
                                KA({
                                    type: vA,
                                    message: e
                                }),
                                    e.errorMethod = w,
                                    t(e)
                            }
                            switch (w) {
                                case "login":
                                    P.login(n, $, Q.onlyNetease);
                                    break;
                                case "getUserInfo":
                                    P.userInfo(function(A) {
                                        A ? n(A) : r()
                                    });
                                    break;
                                case "requestAuth":
                                    P.authReq(Q.platform, function(A) {
                                        A.errorCode ? r() : n(A)
                                    });
                                    break;
                                case "getDeviceInfo":
                                    P.device(n);
                                    break;
                                case "updateProfile":
                                    P.updateProfile(),
                                        n();
                                    break;
                                case "verifyPhone":
                                    P.verifyPhone(Q.phoneNumber, function(A) {
                                        A ? n() : r()
                                    });
                                    break;
                                case "cancelAccount":
                                    P.cancelAccount(function(A, e) {
                                        A ? n() : r({
                                            errorMsg: e || "fail",
                                            errorDesc: e
                                        })
                                    });
                                    break;
                                case "setTitle":
                                    P.ui.modifyTitle(Q.title),
                                        n();
                                    break;
                                case "closeWebview":
                                    P.ui.close();
                                    break;
                                case "actionButton":
                                    P.ui.button(Q.text, n);
                                    break;
                                case "disableGesture":
                                    P.ui.disableGesture(),
                                        n();
                                    break;
                                case "open":
                                    P.open(Q.path),
                                        n();
                                    break;
                                case "openUrl":
                                    P.open("web/".concat(encodeURIComponent(Q.url))),
                                        n();
                                    break;
                                case "pushView":
                                    var A = Q.path.replace(/(^\/*)|(\/*$)/g, "")
                                        , o = P.pushview;
                                    if ("personalcenter" === A)
                                        o.personalcenter();
                                    else if ("applicationsettings" === A)
                                        o.applicationsettings();
                                    else if ("settings" === A)
                                        o.settings();
                                    else if ("mytask" === A)
                                        o.mytask();
                                    else if (/wallet(\/.*)?/.test(A)) {
                                        var s = A.split("/")[1] || "";
                                        o.wallet(s)
                                    } else if ("qrcode" === A)
                                        o.qrcode();
                                    else if (/feedback(\/.*)?/.test(A)) {
                                        var i = HA(A.split("/").slice(1, 3), 2)
                                            , a = i[0]
                                            , c = i[1];
                                        o.feedback(a ? decodeURIComponent(a) : a, c)
                                    }
                                    n();
                                    break;
                                case "showShareMenu":
                                    P.share.openShareMenu(),
                                        n();
                                    break;
                                case "share":
                                    Q.url ? P.share.setShareData({
                                        wxUrl: Q.url,
                                        wxImg: Q.imageUrl,
                                        wxTitle: Q.title,
                                        wxText: Q.text,
                                        wbImg: Q.imageUrl,
                                        wbText: Q.text + " " + Q.url,
                                        shareDone: n
                                    }) : P.share.setShareData({
                                        wbImg: Q.imageUrl,
                                        wbText: Q.text,
                                        shareDone: n
                                    }),
                                    Q.tag !== NA && P.share.openShareMenu(Q.tag);
                                    break;
                                case "postComment":
                                    P.comment({
                                        boardid: "news_bbs",
                                        docid: Q.docId,
                                        replyid: Q.replyId || "",
                                        pk: Q.pk || null
                                    }, function(A) {
                                        return n({
                                            content: A
                                        })
                                    });
                                    break;
                                case "getSettings":
                                    P.setting(function(A) {
                                        if (A && void 0 !== A.fontSize) {
                                            var e;
                                            switch (A.fontSize) {
                                                case 5:
                                                case "小":
                                                    e = "s";
                                                    break;
                                                case 4:
                                                case "中":
                                                    e = "m";
                                                    break;
                                                case 3:
                                                case "大":
                                                    e = "l";
                                                    break;
                                                case 2:
                                                case "特大":
                                                    e = "xl";
                                                    break;
                                                case 1:
                                                case 0:
                                                    e = "xxl"
                                            }
                                            A.fontSize = e
                                        }
                                        n(A)
                                    });
                                    break;
                                case "getHeaders":
                                    P.accountInfo(n);
                                    break;
                                case "getLocation":
                                    P.location("current", n);
                                    break;
                                case "switchLocation":
                                    P.location("switch", n);
                                    break;
                                case "remind":
                                    var u, B, l = function(A) {
                                        return A ? n() : r()
                                    };
                                    B = Q.pattern ? (u = {
                                        id: Q.id,
                                        url: Q.url,
                                        start: Q.startTime,
                                        end: Q.endTime,
                                        pattern: Q.pattern,
                                        title: Q.title,
                                        message: Q.message,
                                        type: Q.directive
                                    },
                                        P.remind) : (u = {
                                        url: Q.url,
                                        date: Q.startTime,
                                        title: Q.title,
                                        message: Q.message,
                                        type: Q.directive
                                    },
                                        P.alarm),
                                        Q.pattern || "change" !== u.type ? B(u, l) : (u.type = "remove",
                                            B(u, function() {
                                                u.type = "add",
                                                    B(u, l)
                                            }));
                                    break;
                                case "encrypt":
                                    P.encrypt(Q.text, n, Q.type);
                                    break;
                                case "getTrashId":
                                    P.trashId(function() {
                                        var A = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                                        n(JSON.parse(A.trashId))
                                    });
                                    break;
                                case "getAppInfo":
                                    q(Q.apps) || (Q.apps = [Q.apps]),
                                        function(s, i) {
                                            return new Promise(function(t) {
                                                    var n = i.length
                                                        , r = []
                                                        , o = 0;
                                                    !function e() {
                                                        var A = i[o++];
                                                        s(A, function(A) {
                                                            r.push(A) === n ? t(r) : setTimeout(e)
                                                        })
                                                    }()
                                                }
                                            )
                                        }(P.getAppInfo, Q.apps).then(n);
                                    break;
                                case "openApp":
                                    P.openApp({
                                        scheme: Q.scheme,
                                        packageName: Q.packageName
                                    }, n, r);
                                    break;
                                case "uploadImage":
                                    P.uploadImage({
                                        type: Q.from || "camera",
                                        width: Q.width,
                                        height: Q.height,
                                        loadingStart: function() {
                                            rA("updateImageUploadingProgress", {
                                                percent: 0
                                            })
                                        },
                                        cancelCallback: function() {
                                            r({
                                                errorMsg: "cancel"
                                            })
                                        }
                                    }, function(A) {
                                        return n({
                                            url: A
                                        })
                                    });
                                    break;
                                case "uploadVideo":
                                    P.uploadVideo({
                                        type: Q.from || "camera",
                                        start: Q.min || 0,
                                        end: Q.max || 1e7,
                                        loadingStart: function() {
                                            rA("updateVideoUploadingProgress", {
                                                percent: 0
                                            })
                                        },
                                        cancelCallback: function() {
                                            r({
                                                errorMsg: "cancel"
                                            })
                                        }
                                    }, function(A, e) {
                                        return n({
                                            url: A,
                                            duration: e
                                        })
                                    });
                                    break;
                                case "copy":
                                    P.copy(Q.text);
                                    break;
                                case "shaking":
                                    "start" === Q.directive ? P.startShaking(n) : "stop" === Q.directive && (P.stopShaking(),
                                        n());
                                    break;
                                case "gyro":
                                    if ("start" === Q.directive) {
                                        var d = !1;
                                        P.startGyro(function(A, e, t) {
                                            rA("updateGyroData", {
                                                x: A,
                                                y: e,
                                                z: t
                                            }),
                                            d || (d = !0,
                                                n())
                                        }, function() {
                                            return r({
                                                errorMsg: "not available"
                                            })
                                        })
                                    } else
                                        "stop" === Q.directive && (P.stopGyro(),
                                            n());
                                    break;
                                case "downloadImage":
                                    P.downloadImage(Q.url, function() {
                                        n()
                                    });
                                    break;
                                case "setNavBar":
                                case "render":
                                    n();
                                    break;
                                default:
                                    r({
                                        errorMsg: "no such method"
                                    })
                            }
                        }
                    )
            },
            register: function(A, e) {
                return "handleShareTap" === A && setTimeout(function() {
                    e({
                        tag: NA
                    })
                }),
                    nA(A, e)
            },
            unregister: oA,
            config: function(A) {
                _A = A.logger || _A
            }
        }), IA = (window.supportedWebViewAPI ? yA = window.supportedWebViewAPI : window.extra && Y(window.extra.getSupportedWebViewAPI) && (yA = window.extra.getSupportedWebViewAPI()),
            yA), TA = !IA;
        function RA(A) {
            return !(!IA || !J(A)) && -1 < IA.indexOf(A)
        }
        TA && G && (IA = ["login", "requestAuth", "getUserInfo", "getDeviceInfo", "updateProfile", "verifyPhone", "cancelAccount", "setTitle", "closeWebview", "actionButton", "open", "openUrl", "pushView", "showShareMenu", "share", "postComment", "getSettings", "getHeaders", "getLocation", "switchLocation", "remind", "encrypt", "getTrashId", "getAppInfo", "openApp", "uploadImage", "uploadVideo", "copy", "downloadImage"],
            IA = V ? IA.concat(["login.onlyNetease", "uploadVideo.from:album"]) : IA.concat(["shaking", "gyro"]));
        var OA = TA ? bA : FA
            , SA = OA.invoke
            , LA = OA.register
            , jA = OA.unregister
            , MA = OA.config;
        TA && delete window.handleMessageFromNative
    },
    "./node_modules/@newsapp-activity/newsapp-share/dist/newsapp-share.esm.js": function(A, e, t) {
        "use strict";
        var n = navigator.userAgent
            , r = /newsapp/i.test(n)
            , o = /micromessenger/i.test(n)
            , s = /QQ\/([\d.]+)/i.test(n)
            , i = /Qzone\//i.test(n)
            , a = /MQQBrowser/i.test(n)
            , c = /UCBrowser/i.test(n);
        function u(A) {
            if (A) {
                var e = document.createElement("a");
                return e.href = A,
                    e.href
            }
            return window.location.href.replace(/(\?|#).*/, "")
        }
        function B(A, e) {
            var t = document.createElement("script");
            t.src = A,
                t.onload = function() {
                    e && e(),
                        t.parentNode.removeChild(t)
                }
            ;
            var n = document.getElementsByTagName("script")[0];
            n.parentNode.insertBefore(t, n)
        }
        var l = {
            title: "",
            desc: "",
            imgUrl: "",
            link: "",
            shareDone: function() {},
            onlyImg: !1
        };
        function d(A, e) {
            !function(A) {
                for (var e in A) {
                    var t = A[e];
                    l.hasOwnProperty(e) && (l[e] = t),
                    "imgUrl" === e && (l.imgUrl = u(t)),
                    "link" === e && (l.link = u(t))
                }
            }(A),
            e && e(),
            void 0 !== A.link && setTimeout(function() {
                !function(A) {
                    window.NTESAntAnalysis ? (l.link = window.NTESAntAnalysis.getShareLink(l.link),
                    A && A()) : window.addEventListener("NTMReady", function() {
                        l.link = window.NTESAntAnalysis.getShareLink(l.link),
                        A && A()
                    })
                }(e)
            }, 500)
        }
        function w(A) {
            window.jsBridge ? A() : B("//static.ws.126.net/163/frontend/libs/js-bridge/v1/js-bridge.min.js", A)
        }
        function Q(A) {
            var e = void 0;
            e = l.onlyImg ? {
                tag: A,
                imageUrl: l.imgUrl
            } : {
                tag: A,
                title: l.title,
                text: l.desc,
                imageUrl: l.imgUrl,
                url: l.link
            },
                window.jsBridge.invoke("share", e).then(function() {
                    l.shareDone && l.shareDone()
                })
        }
        var h = {
            config: function() {
                w(function() {
                    window.jsBridge.unregister("handleShareTap"),
                        window.jsBridge.register("handleShareTap", function(A) {
                            Q(A.tag)
                        })
                })
            },
            show: function(A) {
                w(function() {
                    A ? Q(A) : window.jsBridge.invoke("showShareMenu")
                })
            }
        };
        function f(A, e) {
            void 0 === e && (e = {});
            var t = e.insertAt;
            if (A && "undefined" != typeof document) {
                var n = document.head || document.getElementsByTagName("head")[0]
                    , r = document.createElement("style");
                r.type = "text/css",
                    "top" === t && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
                    r.styleSheet ? r.styleSheet.cssText = A : r.appendChild(document.createTextNode(A))
            }
        }
        function g(A) {
            var e = document.getElementById("newsapp-share");
            e || (document.body.insertAdjacentHTML("afterBegin", '\n      <div id="newsapp-share">\n        <div class="share-notice"></div>\n      </div>\n    '),
                (e = document.getElementById("newsapp-share")).addEventListener("click", function() {
                    e.style.display = "none"
                })),
                window.wx ? A(e) : B("//res.wx.qq.com/open/js/jweixin-1.3.0.js", function() {
                    window.wx.config({
                        jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone"]
                    }),
                        window.wx.ready(function() {
                            return A(e)
                        })
                })
        }
        f("#newsapp-share .share-notice{position:absolute;right:30px;top:30px;width:190px;height:70px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAACMCAMAAABI3OJVAAAAYFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////98JRy6AAAAH3RSTlMARLt3EO4z3ZnMZlWIIqr6bwUb01999MWwpeOeQCtMeRE39gAACcdJREFUeNrs3Etz4jAQBOCxkY2zPCS/MJhH//9/uQmBsbbWVSnZlnPp7xQOuUxRYmi1EVpT08GmD6FfcMHTXmh1Di9876+uzPCSCq1sh7dMaGVnDv/XVACPnd/SQv0RWtcWb9YIrSqBOgut6wK1E1qVsXjLSqFVOair0LpqqJvQqnKoXmhdBT4x01xR0rZJKV/MCeouFEV+qeviNd17jU/181UDVQtF0eKLbeRTleEpq0QkhXJCMTT4Zu8icsRLIXLAoBKKocfLRaTy8+M9A83YEn+bbKGkzKAaoRgu/pu9917soE4MNGPw18lUHn6acIa6CMXQQDl/3kllAfYWYjDJo5KnFKry5t1LCwaaMZjCAjhW4q+T6Px572ULVQgtpezwtDXiz9v5885v8F4ILaUd3tH+vKvETxMuUFuhhXj7eya5f+ocoTZ+ptYKLeUBZQooZyxU5TA4CC3/rcqaDKra+GnCB1QnFOFbVbfzR7yFanIw0IyhgXJn7+8blDUF2JWKIYW6+6f8EepYZuxKxeAXXx1UZ/w0oQG7UjE4qOYDyjk/TUgZLURR483mGFR+mnAAu1Ix3KGOe6junzRhD3alYvAHnkE5P00oe3alougxKrdQ7QPsSsVww6jOYXA4g12pGAqMcjVUV1l2pWIoM4w6Y+A2GGyElrLDj6zZsisVxRk/Ou0xSMWTX+v6ykutqYxFmEYGjgfRLH8Q5mRGim2J0BQdwhxFmZ61zVkOCPQYvf4SmqBFmKwcXZOEJtgiTCFvVcYiyTw5AuXeisoiyTwFwmy9a99BzyvdadFCmFYPnRNvFWdKEOgwXLnzOn2mC8J0Y4fOiWHPxK5UGPf+x4wp51wNAhn5dsWgZpVhkhRhUv2o4G36XBWmBZqmZ41kNocw1vx/6GRc8aepEeasnxR8EnquOwIMa01iwZ8AmG0/afjJCQPLB1QiB5r+Umn2AAO1+e4I1ncW4Iq/AIdJuOIv4Ypp+BD6Aj4wBVP8v+zc0Q6CMAyFYSFOQEQyEQQh9v3f0lsTo7DRMS7+7xFOltKVpSqMeGHtiAbxwr6dPYTPXGHr8Pl1uIuafz0gVreTUXSi9fk1r8LXOYsj9l7ouXG1jeghnlLmaauV4qfgY7uezcRHQ/YaSrKPqKfmxHN8iqOU7NWcOnGS0+comlzSr7lb6ZqMLJUxU9BWFbLMQLnXZ9ta5hnm92FU42z8Occ+mOpi5I+e3VJhTfmv/FPeRoVnk/E7/27k1G/EvgbzmXx/p9ZvyZZD04mYpm8TkgcAAAAAvNs70+TGQSCMAt2sAl3hu/8tp7Sl0Y7DVKZqKu+PHRth9JC6W3jJL7/88ssvP4gBtHqAAKNu0SaQeiIR3Xc/Biqqg2pjdztA76+3DaX6Y0yHgZAxSb2RpNG/kE/A+NY9PWwM3eMeNizSyaPctLn7SloGqB5JUDvGbbMXN/QP5YvbzxuwBazZIPUxBFjeVNXydIUHjBacWvFAUtUf5jTutWk2QqS/Lj8a4UP5ANx35ZvOr+2x/eq77M+hhp+eG+ovyCaczkELXAzz4CL3y9+hFpzeCEA8HzeyC159Uz4BoJUok9hOBmyR+7FR/nlcbE/fG2QgXgoaXqNGv3zzOPR6Zoze0yo/QZ5xFkifR/yDvyxh5x63tlgOfJk5mrYX9O5MlFGGXSSyQDR7ck/Mb5KPBxrlpyrQcJSQ3Y6p/akBwPDRxkkpvYmGrnOAJhoBQxPihiMQxc4Nplt+nWV8nRVzv3xxj0wLowQg1QwdbI+AdUrAGdlRPXvUCKxUWQ5oLf3R5f4EwHK3/P5qx8hp582BJvmEG1QrGsB4TL+R2+Szn++byTrHNdwTYIfT6EydYdw+IxIQz2HtHcmoESDZskl+vb9OfZ5w2aBXvrOA5dN0RK7l6x2V/AzkteBhyfUGa+QpU2O/2DVyqtqLcmPszbOC+Uw+AfFb+TwBEcBx9gG0uz/PO+3snzoT+QRgOW+pRACRZjIAjLxOZFhu6KGmJoD+lXy2QPpeMUVB5EjcA9Ds/uqlA4BY3o/8EStGW9REAKnSSjv5l2e1ruAP5NOeIJbNiiRcYTct/uNKdqNHfq3sLO895g8ArAds4RE24Qs2SNv0uOVGP8j/9kfzzakzLfLxwNuB31rn94SdAASDMxxlROYCpxayZvbzwNg4VV+jrPos7LrqoGhGrghTJezIz8mXAlFI7fK7Em4Il3FTMalGwlOydMuTBYjqPjRnoLrIigD4b8jXFeFQTz1+K9v8jPx6zFbuVkGw0BW76wx7r0pCfn6Q7wFgrM9G1SW/PeE62yG/L+ycB3cevn7+zo5bimQ3FJWoQquZCNC2rCzp+lCOO8BGQFdLe70JV66w03H/ElGRa+1FNlWYNvn9CVcIQL6U78wOjwkzVO7jGGdfBhX0JR8jF8DWw71IPLpecTD9paYol3tiqXY/HrzSJ/IZ8P3yPTC8lsSaIjC/77KSLGZu5XMA4Ce79/LZTq9t1jYJgP4Z+SUCSNQjXwPxMexwIt2yxsAv76llTIyJjz8i4kfSXO9VvT8JM/pavhTaZSn5nCyqtuD0Ba5N/rBc43TJT2+FbMR7BpM3sESdIPFgYLXDxrw+dCVfcppXN/JX6+t+JPb9PyPIpU0+ATapPvkZlxwypns98HUVgkkev2HdQDxdyJdOnsLOCFjedsTLwk8TxmdWZTnYNeVprkfExrATvFOd8j2QnsLOIDH4Dvb1C5p2+YIut/INxP5Z/iDX0gETre6lKh6AvGyelhyfWxOu6pAvBfpDwuX4IF9auHo29VWR7w81WdkapWyA4SxflI5iX8Ym5dI6DALmSNBOXPLEomstmBwA3SJf2gRdEZrkS532KF9xCo/yXdxNDgMojesbbiBjMUM38ml+Lsj0Aric9+Sx4BOrFmRNDOsaxtIVSdqghnOW7solwgNaovVLqUk3J7Mcb2HX2Kom+TI+O1KpPr3hpWVYOzeXq5q8zTsv6kcd5+7C0Po/pYeqSwLCOgn0E/LZA3GX8bb19H0hHe/Gn60EJW0mJgcN8iWfGHKHmlt6/Kq0OK+F4VCPjeanyxDmUfjJJFlM2KXXt0w11h8NKoDdVjzKJ/K9qfDN8sf1VuRnTNS2S5Q2l3Wq35710vMO3maFThErS9sL+QZAPlXFvl7TDotFwKftVPRtv2unDTzvTnnvA8+3Npemd3sbEu5zrsz1e/VOucNPNHHG04J13nZayg2jLxLLu4+rmM/eDkrg82K92z5esnsw+KaqR7u1/Xq7Gb8zL5YqNJE+/J1UG0zqABENrmrw/NYEN0XXQtJrw17J/jhWNYlkT2vOKbZo9T9A9H/+nsEfeG8abKgb3QsAAAAASUVORK5CYII=);background-size:100%}");
        var p = {
            config: function() {
                g(function() {
                    var A = {
                        title: l.title,
                        desc: l.desc,
                        imgUrl: l.imgUrl,
                        link: l.link,
                        success: l.shareDone
                    };
                    window.wx.onMenuShareTimeline(A),
                        window.wx.onMenuShareAppMessage(A),
                        window.wx.onMenuShareQQ(A),
                        window.wx.onMenuShareWeibo(A),
                        window.wx.onMenuShareQZone(A)
                })
            },
            show: function() {
                g(function(A) {
                    A.style.display = "block"
                })
            }
        };
        function U(A) {
            window.mqq ? A() : B("//open.mobile.qq.com/sdk/qqapi.js", A)
        }
        var C = {
            config: function() {
                U(function() {
                    window.mqq.data.setShareInfo({
                        title: l.title,
                        desc: l.desc,
                        image_url: l.imgUrl,
                        share_url: l.link
                    })
                })
            },
            show: function() {
                U(function() {
                    window.mqq.ui.showShareMenu()
                })
            }
        };
        var E = {
            config: function() {
                window.mqq.data.setShareInfo({
                    title: l.title,
                    desc: l.desc,
                    image_url: l.imgUrl,
                    share_url: l.link
                })
            },
            show: function() {
                !function(A) {
                    window.mqq ? A() : B("//qzonestyle.gtimg.cn/qzone/hybrid/lib/jsbridge.js", A)
                }(function() {
                    window.mqq.ui.showShareMenu()
                })
            }
        };
        function m(A) {
            window.browser ? A() : B("//jsapi.qq.com/get?api=app.share", A)
        }
        var F = {
            config: function() {
                m(function() {
                    console.log(window.browser)
                })
            },
            show: function() {
                m(function() {
                    window.browser.app.share({
                        title: l.title,
                        description: l.desc,
                        url: l.link,
                        img_url: l.imgUrl
                    }, l.shareDone)
                })
            }
        };
        function H(A) {
            A()
        }
        var _ = {
            config: function() {
                H(function() {
                    console.log(window.ucbrowser)
                })
            },
            show: function() {
                var e = this;
                H(function() {
                    var A = [l.title, l.desc, l.link, "", "", "", l.imgUrl];
                    window.ucweb ? window.ucweb.startRequest("shell.page_share", A) : window.ucbrowser && (window.ucbrowser.web_shareEX ? window.ucbrowser.web_shareEX(JSON.stringify({
                        title: l.title,
                        content: l.desc,
                        sourceUrl: l.link,
                        imageUrl: l.imgUrl
                    })) : window.ucbrowser.web_share.apply(e, A))
                })
            }
        };
        f("#newsapp-share{display:none;position:fixed;left:0;top:0;right:0;bottom:0;background:rgba(0,0,0,.6);-webkit-animation:newsapp-share-fade-in .3s ease-in-out both;animation:newsapp-share-fade-in .3s ease-in-out both;z-index:10000}#newsapp-share .panel{position:absolute;left:0;right:0;bottom:0;padding-bottom:50px;-webkit-box-sizing:border-box;box-sizing:border-box;background:#f1f1f1;-webkit-animation:newsapp-share-slide-in .3s ease-in-out both;animation:newsapp-share-slide-in .3s ease-in-out both}#newsapp-share .panel .items{height:250px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-line-pack:distribute;align-content:space-around}#newsapp-share .panel .items .item{width:25%;color:#666;font-size:12px;text-align:center}#newsapp-share .panel .items .item span{display:block;width:60px;height:60px;margin:0 auto 15px;background-size:cover;background-color:#fff;border-radius:100%}#newsapp-share .panel .items .item .wechat-friends{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAdVBMVEUAAAArwgAwwwny+/Cm5Zw/yCP5/vj2/PVSzjy97LZHyi3r+efI78OT34Zw1l9k0lKf45Rr1Vo4xhfu+uzS883G779e0Uo6xh4twwP9//2B3HHY9NTL8MbC7buy6akyxA932GdYz0S36q+N3oDi9t/l9+Gq5qBF0g/3AAAAAXRSTlMAQObYZgAAAg1JREFUaN7t2EmXojAUBeB7wwwCgqg4T9X9/39il5uKdQBjnyRlLd63yltFczLcB4QQQgghhBBCCCGeW2RllUYt2yitymyBn1HMVz0f9at5Ae92Z8Uhdd7Bq+LMKecC/hzXnLY+wpN4y+e2MXxIaprUCdyLVzRbxXBtU/EV1QaOzfmaOdzaKb5G7eBUzS8qDIJQTZWs4dKSWqhX/qHUlnCooRbgUzBVkg3cWfT/MXG/gDNHmpdaO8KZLfnK5srP4fIjiOHOhWbr2w7ORTSJwhhIDmWTrpVap015SOAADfpbgs2hOvHBqTpsfE8c7YEs5UCa+V3qtEDRcFRTeNxclwCziBOimeVxmpYvkClOUpndBTJJddgrPqH2dlfmlBIfLZ9q/9g/EkN5jBUNVvbP4lCIq/4Ry2SZj4x5tQ0CQ20AfX5nAPYjY6buo0+FThcJgHhkTHbOw95flDT/Y5bO422HWhf5LJnlI2Oydh7oF4j4gsh5CxPjxBcox02b/4l1m2qx1FbmY5vLrIatZuw4mZWwFJ941w4uEIMOlg78pG7J1+emPEZKoxS2biQvO3xzpdEVtnK24Qbf+XsWtYJVgQFvQUALOoxZPo8+B/hiCnv+GOKtR5OBvi7gW5ZyRAbvdNP2aI4fkWT3NrXv721qtu1JbvEG3YWs8Q6bcB3hPYptAiGEEEIIIYQQQvxi/wDbTBzfcE0ZdAAAAABJRU5ErkJggg==)}#newsapp-share .panel .items .item .wechat-timeline{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAABX1BMVEUAAAD65j5Sm/8s+yD/bkVkR/35tUdI6/m6/EK5+kH76VP6vFlE/Dz/fFZY7fl0W/5kpf/z++P9+uNio/7m4/nh/+DC/Vjj/P7j6vTg8fD7/P/o8f/o5f5H5/Ti6PD+8+T6+OL78eL65+L47+DB/Fjf2v9xV/z+/vpv7vn/6OHe/t3x/9j6xXDJ/W3/gV1M/EScxv+CuP9Xnv/O+f6Ebv7b+/3g9/dY6vbk4vP++uD76+D15eDe9N/e+d7/rZX88ZKL/oj/mHz87Xf76Vi//E/6bERB+zkx+yW61/+w0f/TzP9qqP+nmP/j7f1rUP2a9PtP7Phioff9++v77+no/ef1/uXx+OP/6uPt8+H98Nv97tjs/8v96cv/xrf89bWv/a3/vKr786mj/qD71ZnY/Zhp/WTyd1T5uE//dk/650n3akOTgP5/7/lQl/iGcvfr7PHP/X/6yn92/XL5fFb66FXq/Bq/AAAAAXRSTlMAQObYZgAAAq5JREFUaN7t1FlTE0EQwPF2WVYgBoLhkltFEsglmKgBzaUkHiDIIQoCyqGA9/H9y2y7sTM7UxYPvXnqf+37r3pnpkGSJEmSJEmSJEmSJOmCbe8VyulT2z5Nlwt729CiZgppWykNLWkjbPsD+PoMgu3Nj5twI6zD7e3ZWxBcsSPHCaGswfWWhyGgJpKOg/JMWIPdsqMQSDshBwtdp5kJdpsO5He//YgsySqMvQjgju14LsnnCuzJ7DNPhMjFc14M20tLBDeaZj7nWNIjaebFD7YCe2V57/YRcsrMrkwwtcy6NxyKZl74ZZ+rMMZ5zEnHIE/AQtg2wJ8YXxJxmqzBPaP8A+vyTNgP9/TBNwg+lJXn1AfjL1egBW2Um+Hp+zAUtW4DT48u+XsPTb0juAddK8Lj5k2uIgM0u/VGWOB9v1sBrca9GopYbk9Y4KLP7Vo3wuhG0WU65IrPvQp65GJz/HfL7AK64xHL6zkLfKa5eu6+IteaZ4EVdxJegSHXjVoUG0xu7wAYcvcVsUwTn6luB5haof/8xbKiTJeLzrd3qsMIj5DLd7kqikuwyWV9TkVyB+pu539dzgWyr7gmeM6iGFdmnlwPPgSlp5a/EWCpi9y/cO1Qcef9bgR4KuLemEK104Xb2n5uQgvK/56E166LIdx2ZRZgGIJundx6Lozyte7LvsbG6t9YnA32zpdglB/CIMpad/jg7yjSr8aqD8xyHPhKEOvBOLNZzgFjx//gToLN8ipwFktpsHfOd31ynPmubz32ZIKNcvcgMJdoyAiTPKvIazlgb1eBSe5ves9r9JL4ZyaY5HvefyaXta0UwSY5PggBFTsmWJdXg9zdiRTBqvw5B8G2myKY5E1oSRmVzZRmoUX1H5ROMtVarZo5KR30gyRJkiRJkiRJkiRJ0sX6A/OGWpGp1V3mAAAAAElFTkSuQmCC)}#newsapp-share .panel .items .item .qq{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAYFBMVEUAAAAqou38/v8wpe52wvM4p+6f1fjY7vyJyvVHrvDz+v7n9P3D5fqz3fip2fhXtfE9qu/P6vvJ6PtuvvNhufHt9/18xfTe8f284fmPzfZQsfFBq++Uz/aBx/Rmu/JLsPApGrQQAAAAAXRSTlMAQObYZgAAAYVJREFUaN7t1Vluq0AQheFzeqCZDBgMnp397/Je5cWJk9AgdSFZqm8D6Ehd/FBKKaWUUkoppdT7GRt36ciunXYltrMf+GTdEdsYHV/km6zuO/5w2WB0Y/kLv4ewjL+zNURl/IvtIejEv/kjxFSeM1oDKY6zGggJnFdITb4z4gQRxjPCQcSeMd5AQsaoAAmOUTtIaBl1g4Qro+6QYBnlIKBk3AECAuMKCGi4QIX0DlwgQ3J7Pm3ZCdPyacvJDZfxFZKqPBcakJTjYrXMy4r7MOKnJJ+owDVaJJNzlYBUCj5tecsV13kgkZoRUo3acR0r9LuMe/vFPdf5QCIj/+sc47xL24mC9AEXRp2RJW3ymayBfFGZJvKIVMbLbVGiOgOUbY7U7vHBMsyZc+wJETIX7QPE9G5u8LmCDDNxnt1BRM6oHhI8oyZIKPhiGPgih4Te8ptHWR5e6jBCRPj6nWtjAJN1X97WVEJKuD2ulrwe8trgkznlbUfaYsgqKKWUUkoppZRS6j38AwcvERaN8USbAAAAAElFTkSuQmCC)}#newsapp-share .panel .items .item .qzone{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAbFBMVEUAAAD/swD//vv/uAD/tQD/+/H/9eD/zl//+Of/5ar/46L/7sX/wCz/67//1HP/vh//0Wn/56//xT//89j/78v/4Jr/3ZH/24r/x0f/wzr/vBH//PX/6LT/yU//+u3/6bj/2IP/y1T/133/8NAkfeHGAAAAAXRSTlMAQObYZgAAAkVJREFUaN7t2NnOmzAQBeAzNvu+EyBk6/u/Y0lIIxyipGqwf1Wa74q7w+iMAAPGGGOMMcYYY4x9pUnwIyqiPX6CS1TgBzg0qWBeQpMzjLMlXZUwraWbDIaJnm4sD2b5dHeBWRHdyQEmHemhhkkFPaQC5oS0kMOcMy0UMKYkRQVTXFK4MMShJx6MEC49yaCbcEK/7WjFPZYCOnhTXnKOJL3R77LWrw7YSNwkY2TR35ORewliR+BLEf0bq/syOlhNVGRtcKwc2wYgbNt2yvDoN8m5J8VO4Dv1osXzKXfsG4G1TskdgK2SVZaMiqnN8ICZyGhhHPC9gN4ZceMo857Fhl8bryVzhC9pwRXYxt6i1+QeV7ar3gw2E79OLhxchSktnbChStJaKzARJ1LU2FTZ05M0VLdqZvnYmJOSwrVxFUi19Bib86JlgP9qq0hW0OBQrLaqJ0VaQouhe94qVeRBk3ieq5pLL0ih8xglrOtWDY9nlWoHPeZgq75fXor+eeI+cgNo4ajHBuGVYZzneRD4eb6PfwUdudDiSDTW4csqRZykZDUCWjR/PqvG7NIE/jRlHO/9uk3G1LqW7EGTjBTmtqujtywBTSS9V0EPjz5ooEdMH7jQo6YPJPRISLELxaFVa3egxUgL0XHuPaOFAFpE9NAHAne/droPysKiO+s0YGGf0l0EHbzHXB5UopE6f0qEdDOWWDskdONDg4AmXYjXyp22kk9EaQ7Vc9UpNEhkLaBYV63lPTEM+OTwC4wxxhhjjDHG2H/oN0M2Gav03cqPAAAAAElFTkSuQmCC)}#newsapp-share .panel .items .item .weibo{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAflBMVEUAAAD+PEj+SFT+cHn/0tX/nqX+UVz+QUz/2Nv+d4D/+vr/6+3/5ef/4OL/xMf/hY3/s7j+fYb//P3/W2b/9PX/lp3/Y23/VmH/8vP/uL3+RVD/7u//ipL+a3X/9vf/v8P/q7H/kpn/YGr+TVj/zc//ysz/jpX/pqz/o6r+aHEUTN2LAAAAAXRSTlMAQObYZgAAAxxJREFUaN7t13uPojAQAPAZyvuNCArqCfhav/8XPEuhLaJ3m9A1d0l//yibDc3MtNMRNE3TNE3TNE3TNE3T/j/rW9bZdX06tBcfPsjvkDtZW/iYC8qMFD7FxSnvF3zIFTFP9t4GB+UOPiRgK4WWPaz8AzGvzNQq0nch+ZaD1B7U8o9ejVSdvi04C9pUumxjI3cGSdh6xGtjv/9+wgcC6pg5Sg4gKbFnV/ThjFSorDtdcUreP3w/W/Qpod9uoEaU45MIhPPB2yebsbZmf5hBidjAZy48a4YKrOg/b0CFFAfzVAfnKo0DgDHHtFUT2jlBgS+cy+k2j/dDdb1+aXPI9R4fFKxr4Qt2dGkN6ZGuHDy+HB+fLb2mYLEb/gXvVdth4YRlRH1951hNw8fnhR5rFR3kjN+0Blgb6AQs42gtPb8Gfo+zoo3aMunZQxb5Er9y/CbyVJyFE1Ayr2VHsiwjdxunKuACY3GJ42k2yddZBOK7jVeLIW8Fwi6t1ssuBjmsw4uX/apKfj1EoE4hldB9lxR+M+WND2rseCY38R/2XyLaqAuMqlaZ8SS7t4SU9+wWvk6MEysZ68YKt+MfKnG4sgCETKysotImMsmYeTK9JIDbii5Tqst05w9bPMcJeztLtqLxkkzf5M3uo5c/YgpYjJX4/vaycHZiOyCXwWIOUo0U8PsuaSheWGTar3GmeBXxFRZjLSmUqphEEFgOXyN5VeMUFsvk8fnII7Tk4ObTYKBqph16UYVosIE25Gs0PNMsOarm+J0jhXXkvcHki/C+2ag7xmIKMLZjFY2+Y/uHWXChmj0tRH3ILd9qJISVeZcmaWbdiXFgp/J6isUwYhvzXr0+iJZighp+3zVr9rpqcpJJMOa5E+seQZVt3r+Qnc2g4PGWfIlU5KC+gDpblkcvZBm4WBnxkibijeOOXB6BSn7Bsrh354NCTKQbo/BBMbMcIrLcFXDBMTnJJVcZroisHMPqsmvxZRUJsVHmmfBD3KuN72ysEH5SdCPGfBY4WC58QBh/7b3uZCAadum1qeuDpmmapmmapmmapmnaP+83hdQldLxZc1oAAAAASUVORK5CYII=)}#newsapp-share .panel .items .item .yixin{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEUAAAArpnkgr4Aop3gqpnkrpXoqpnkqpnorpnkrpXoppnkqpnoppnkqpXoop3gqpnorpnoTl9KFAAAAEHRSTlMA8BBAoGDQgMAwcOBQsCCQBkB7AgAAAbZJREFUaN7t2Alu7DAIAFDAS7wl4f6n/YtURYmnjtvASFV5BxgExowJGGOMMcYYY4wx5nuoLWvkfzD5kuE9KEQ+Q+9A3eb5lRpA0xG2hwX0LMgDKYMOSnxDJ+mMfMuDPIc8IZF4XJ4TSa/OYytIIuRpOwhK/AUNxCz8FUggZEO+wrW4v8JeNS+VH03mvHLHCSV8M5Vd5IukknDNcEGrSsp0iUvQ8xqnHM51zvBK5BOEh/rfDHMTJkhXOg6uunCtWzeVZlKuwlMLp3uf4Kl1soJN+kLF2Z6R7q7pPPhkeV/g+OsCq5a6DAaNdGCcvE5BOnD63gBpwv/GYVyZQ4anytwMDnwGj+W5s6vSj5++hlMJF/knF+aZTWOD5xqfoYPOymcRJFTmm3P2Oht64ZtiB9ElZv4hF7gviYwwjLsobm3x89aipLmnHkPEX5IJqPdN4Oivum9w4pLSenzY4+Jo8E2z73nBY05L+wi+tSXxawFkUeQpAaRRUow7tvOdmkFFQx5aCZSQ5xG/gRqXxqEdqHEeh8esGJqar/xaKhvoymVPkfkQ014yvA25/8AYY4wxxhhjjPnZ/gA4dmtwZ/MRwwAAAABJRU5ErkJggg==)}#newsapp-share .panel .copy{display:none;padding:15px}#newsapp-share .panel .copy:before{content:'';position:absolute;left:0;top:0}#newsapp-share .panel .copy p{margin:10px 0 0;padding:10px;font-size:14px;line-height:20px;border:1px dotted #d9d9d9;word-break:break-all;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;max-height:200px;overflow:auto}#newsapp-share .panel .close{position:absolute;left:0;right:0;bottom:0;height:50px;color:#333;font-size:15px;text-align:center;line-height:50px;letter-spacing:5px;background:#fff}@-webkit-keyframes newsapp-share-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes newsapp-share-fade-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes newsapp-share-slide-in{0%{-webkit-transform:translateY(100%);transform:translateY(100%)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes newsapp-share-slide-in{0%{-webkit-transform:translateY(100%);transform:translateY(100%)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}");
        var v = {
            qzone: "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?title={title}&summary={desc}&pics={imgUrl}&url={link}&&otype=share",
            weibo: "http://service.weibo.com/share/share.php?title={title}&pic={imgUrl}&url={link}",
            yixin: "http://open.yixin.im/share?title={title}&desc={desc}&pic={imgUrl}&url={link}&type=webpage"
        };
        function N(A) {
            var e = document.getElementById("newsapp-share");
            if (!e) {
                document.body.insertAdjacentHTML("afterBegin", '\n      <div id="newsapp-share">\n        <div class="panel">\n          <div class="items">\n            <div class="item"><span class="wechat-friends"></span>微信好友</div>\n            <div class="item"><span class="wechat-timeline"></span>微信朋友圈</div>\n            <div class="item"><span class="qq"></span>QQ好友</div>\n            <div class="item"><span class="qzone" data-type="qzone"></span>QQ空间</div>\n            <div class="item"><span class="weibo" data-type="weibo"></span>新浪微博</div>\n            <div class="item"><span class="yixin" data-type="yixin"></span>易信</div>\n          </div>\n          <div class="copy">\n            长按以下内容复制并发送给好友吧：<p></p>\n          </div>\n          <div class="close">取消</div>\n        </div>\n      </div>\n    ');
                var t = function() {
                    e.querySelector(".copy").style.display = "block",
                        e.querySelector(".items").style.display = "none"
                }
                    , n = function(A) {
                    window.location.href = v[A.target.dataset.type]
                };
                (e = document.getElementById("newsapp-share")).querySelector(".wechat-friends").addEventListener("click", t),
                    e.querySelector(".wechat-timeline").addEventListener("click", t),
                    e.querySelector(".qq").addEventListener("click", t),
                    e.querySelector(".qzone").addEventListener("click", n),
                    e.querySelector(".weibo").addEventListener("click", n),
                    e.querySelector(".yixin").addEventListener("click", n),
                    e.querySelector(".close").addEventListener("click", function() {
                        e.querySelector(".copy").style.display = "none",
                            e.querySelector(".items").style.display = "flex",
                            e.style.display = "none"
                    })
            }
            A(e)
        }
        var K = void 0;
        K = r ? h : o ? p : s ? C : i ? E : a ? F : c ? _ : {
            config: function() {
                N(function() {
                    for (var A in document.querySelector("#newsapp-share .copy p").innerHTML = l.title + " " + l.link,
                        v)
                        v[A] = v[A].replace(/{([^}]*)}/g, function(A, e) {
                            return encodeURIComponent(l[e])
                        })
                })
            },
            show: function() {
                N(function(A) {
                    A.style.display = "block"
                })
            }
        };
        var y = {
            config: function(A) {
                d(A, function() {
                    K.config()
                })
            },
            show: function(A) {
                K.show(A)
            },
            isNewsapp: r,
            isWechat: o,
            isQQ: s,
            isQzone: i,
            isQQBrowser: a,
            isUCBrowser: c
        };
        e.a = y
    },
    "./node_modules/@tweenjs/tween.js/dist/tween.esm.js": function(A, t, e) {
        "use strict";
        e.r(t),
            function(e) {
                function A() {
                    this._tweens = {},
                        this._tweensAddedDuringUpdate = {}
                }
                A.prototype = {
                    getAll: function() {
                        return Object.keys(this._tweens).map(function(A) {
                            return this._tweens[A]
                        }
                            .bind(this))
                    },
                    removeAll: function() {
                        this._tweens = {}
                    },
                    add: function(A) {
                        this._tweens[A.getId()] = A,
                            this._tweensAddedDuringUpdate[A.getId()] = A
                    },
                    remove: function(A) {
                        delete this._tweens[A.getId()],
                            delete this._tweensAddedDuringUpdate[A.getId()]
                    },
                    update: function(A, e) {
                        var t = Object.keys(this._tweens);
                        if (0 === t.length)
                            return !1;
                        for (A = void 0 !== A ? A : i.now(); 0 < t.length; ) {
                            this._tweensAddedDuringUpdate = {};
                            for (var n = 0; n < t.length; n++) {
                                var r = this._tweens[t[n]];
                                r && !1 === r.update(A) && (r._isPlaying = !1,
                                e || delete this._tweens[t[n]])
                            }
                            t = Object.keys(this._tweensAddedDuringUpdate)
                        }
                        return !0
                    }
                };
                var n, i = new A;
                i.Group = A,
                    i._nextId = 0,
                    i.nextId = function() {
                        return i._nextId++
                    }
                    ,
                    "undefined" == typeof self && void 0 !== e && e.hrtime ? i.now = function() {
                            var A = e.hrtime();
                            return 1e3 * A[0] + A[1] / 1e6
                        }
                        : "undefined" != typeof self && void 0 !== self.performance && void 0 !== self.performance.now ? i.now = self.performance.now.bind(self.performance) : void 0 !== Date.now ? i.now = Date.now : i.now = function() {
                            return (new Date).getTime()
                        }
                    ,
                    i.Tween = function(A, e) {
                        this._isPaused = !1,
                            this._pauseStart = null,
                            this._object = A,
                            this._valuesStart = {},
                            this._valuesEnd = {},
                            this._valuesStartRepeat = {},
                            this._duration = 1e3,
                            this._repeat = 0,
                            this._repeatDelayTime = void 0,
                            this._yoyo = !1,
                            this._isPlaying = !1,
                            this._reversed = !1,
                            this._delayTime = 0,
                            this._startTime = null,
                            this._easingFunction = i.Easing.Linear.None,
                            this._interpolationFunction = i.Interpolation.Linear,
                            this._chainedTweens = [],
                            this._onStartCallback = null,
                            this._onStartCallbackFired = !1,
                            this._onUpdateCallback = null,
                            this._onRepeatCallback = null,
                            this._onCompleteCallback = null,
                            this._onStopCallback = null,
                            this._group = e || i,
                            this._id = i.nextId()
                    }
                    ,
                    i.Tween.prototype = {
                        getId: function() {
                            return this._id
                        },
                        isPlaying: function() {
                            return this._isPlaying
                        },
                        isPaused: function() {
                            return this._isPaused
                        },
                        to: function(A, e) {
                            return this._valuesEnd = Object.create(A),
                            void 0 !== e && (this._duration = e),
                                this
                        },
                        duration: function(A) {
                            return this._duration = A,
                                this
                        },
                        start: function(A) {
                            for (var e in this._group.add(this),
                                this._isPlaying = !0,
                                this._isPaused = !1,
                                this._onStartCallbackFired = !1,
                                this._startTime = void 0 !== A ? "string" == typeof A ? i.now() + parseFloat(A) : A : i.now(),
                                this._startTime += this._delayTime,
                                this._valuesEnd) {
                                if (this._valuesEnd[e]instanceof Array) {
                                    if (0 === this._valuesEnd[e].length)
                                        continue;
                                    this._valuesEnd[e] = [this._object[e]].concat(this._valuesEnd[e])
                                }
                                void 0 !== this._object[e] && (void 0 === this._valuesStart[e] && (this._valuesStart[e] = this._object[e]),
                                this._valuesStart[e]instanceof Array == !1 && (this._valuesStart[e] *= 1),
                                    this._valuesStartRepeat[e] = this._valuesStart[e] || 0)
                            }
                            return this
                        },
                        stop: function() {
                            return this._isPlaying && (this._group.remove(this),
                                this._isPlaying = !1,
                                this._isPaused = !1,
                            null !== this._onStopCallback && this._onStopCallback(this._object),
                                this.stopChainedTweens()),
                                this
                        },
                        end: function() {
                            return this.update(1 / 0),
                                this
                        },
                        pause: function(A) {
                            return this._isPaused || !this._isPlaying || (this._isPaused = !0,
                                this._pauseStart = void 0 === A ? i.now() : A,
                                this._group.remove(this)),
                                this
                        },
                        resume: function(A) {
                            return this._isPaused && this._isPlaying && (this._isPaused = !1,
                                this._startTime += (void 0 === A ? i.now() : A) - this._pauseStart,
                                this._pauseStart = 0,
                                this._group.add(this)),
                                this
                        },
                        stopChainedTweens: function() {
                            for (var A = 0, e = this._chainedTweens.length; A < e; A++)
                                this._chainedTweens[A].stop()
                        },
                        group: function(A) {
                            return this._group = A,
                                this
                        },
                        delay: function(A) {
                            return this._delayTime = A,
                                this
                        },
                        repeat: function(A) {
                            return this._repeat = A,
                                this
                        },
                        repeatDelay: function(A) {
                            return this._repeatDelayTime = A,
                                this
                        },
                        yoyo: function(A) {
                            return this._yoyo = A,
                                this
                        },
                        easing: function(A) {
                            return this._easingFunction = A,
                                this
                        },
                        interpolation: function(A) {
                            return this._interpolationFunction = A,
                                this
                        },
                        chain: function() {
                            return this._chainedTweens = arguments,
                                this
                        },
                        onStart: function(A) {
                            return this._onStartCallback = A,
                                this
                        },
                        onUpdate: function(A) {
                            return this._onUpdateCallback = A,
                                this
                        },
                        onRepeat: function(A) {
                            return this._onRepeatCallback = A,
                                this
                        },
                        onComplete: function(A) {
                            return this._onCompleteCallback = A,
                                this
                        },
                        onStop: function(A) {
                            return this._onStopCallback = A,
                                this
                        },
                        update: function(A) {
                            var e, t, n;
                            if (A < this._startTime)
                                return !0;
                            for (e in !1 === this._onStartCallbackFired && (null !== this._onStartCallback && this._onStartCallback(this._object),
                                this._onStartCallbackFired = !0),
                                t = (A - this._startTime) / this._duration,
                                t = 0 === this._duration || 1 < t ? 1 : t,
                                n = this._easingFunction(t),
                                this._valuesEnd)
                                if (void 0 !== this._valuesStart[e]) {
                                    var r = this._valuesStart[e] || 0
                                        , o = this._valuesEnd[e];
                                    o instanceof Array ? this._object[e] = this._interpolationFunction(o, n) : ("string" == typeof o && (o = "+" === o.charAt(0) || "-" === o.charAt(0) ? r + parseFloat(o) : parseFloat(o)),
                                    "number" == typeof o && (this._object[e] = r + (o - r) * n))
                                }
                            if (null !== this._onUpdateCallback && this._onUpdateCallback(this._object, t),
                            1 !== t)
                                return !0;
                            if (0 < this._repeat) {
                                for (e in isFinite(this._repeat) && this._repeat--,
                                    this._valuesStartRepeat) {
                                    if ("string" == typeof this._valuesEnd[e] && (this._valuesStartRepeat[e] = this._valuesStartRepeat[e] + parseFloat(this._valuesEnd[e])),
                                        this._yoyo) {
                                        var s = this._valuesStartRepeat[e];
                                        this._valuesStartRepeat[e] = this._valuesEnd[e],
                                            this._valuesEnd[e] = s
                                    }
                                    this._valuesStart[e] = this._valuesStartRepeat[e]
                                }
                                return this._yoyo && (this._reversed = !this._reversed),
                                    void 0 !== this._repeatDelayTime ? this._startTime = A + this._repeatDelayTime : this._startTime = A + this._delayTime,
                                null !== this._onRepeatCallback && this._onRepeatCallback(this._object),
                                    !0
                            }
                            null !== this._onCompleteCallback && this._onCompleteCallback(this._object);
                            for (var i = 0, a = this._chainedTweens.length; i < a; i++)
                                this._chainedTweens[i].start(this._startTime + this._duration);
                            return !1
                        }
                    },
                    i.Easing = {
                        Linear: {
                            None: function(A) {
                                return A
                            }
                        },
                        Quadratic: {
                            In: function(A) {
                                return A * A
                            },
                            Out: function(A) {
                                return A * (2 - A)
                            },
                            InOut: function(A) {
                                return (A *= 2) < 1 ? .5 * A * A : -.5 * (--A * (A - 2) - 1)
                            }
                        },
                        Cubic: {
                            In: function(A) {
                                return A * A * A
                            },
                            Out: function(A) {
                                return --A * A * A + 1
                            },
                            InOut: function(A) {
                                return (A *= 2) < 1 ? .5 * A * A * A : .5 * ((A -= 2) * A * A + 2)
                            }
                        },
                        Quartic: {
                            In: function(A) {
                                return A * A * A * A
                            },
                            Out: function(A) {
                                return 1 - --A * A * A * A
                            },
                            InOut: function(A) {
                                return (A *= 2) < 1 ? .5 * A * A * A * A : -.5 * ((A -= 2) * A * A * A - 2)
                            }
                        },
                        Quintic: {
                            In: function(A) {
                                return A * A * A * A * A
                            },
                            Out: function(A) {
                                return --A * A * A * A * A + 1
                            },
                            InOut: function(A) {
                                return (A *= 2) < 1 ? .5 * A * A * A * A * A : .5 * ((A -= 2) * A * A * A * A + 2)
                            }
                        },
                        Sinusoidal: {
                            In: function(A) {
                                return 1 - Math.cos(A * Math.PI / 2)
                            },
                            Out: function(A) {
                                return Math.sin(A * Math.PI / 2)
                            },
                            InOut: function(A) {
                                return .5 * (1 - Math.cos(Math.PI * A))
                            }
                        },
                        Exponential: {
                            In: function(A) {
                                return 0 === A ? 0 : Math.pow(1024, A - 1)
                            },
                            Out: function(A) {
                                return 1 === A ? 1 : 1 - Math.pow(2, -10 * A)
                            },
                            InOut: function(A) {
                                return 0 === A ? 0 : 1 === A ? 1 : (A *= 2) < 1 ? .5 * Math.pow(1024, A - 1) : .5 * (2 - Math.pow(2, -10 * (A - 1)))
                            }
                        },
                        Circular: {
                            In: function(A) {
                                return 1 - Math.sqrt(1 - A * A)
                            },
                            Out: function(A) {
                                return Math.sqrt(1 - --A * A)
                            },
                            InOut: function(A) {
                                return (A *= 2) < 1 ? -.5 * (Math.sqrt(1 - A * A) - 1) : .5 * (Math.sqrt(1 - (A -= 2) * A) + 1)
                            }
                        },
                        Elastic: {
                            In: function(A) {
                                return 0 === A ? 0 : 1 === A ? 1 : -Math.pow(2, 10 * (A - 1)) * Math.sin(5 * (A - 1.1) * Math.PI)
                            },
                            Out: function(A) {
                                return 0 === A ? 0 : 1 === A ? 1 : Math.pow(2, -10 * A) * Math.sin(5 * (A - .1) * Math.PI) + 1
                            },
                            InOut: function(A) {
                                return 0 === A ? 0 : 1 === A ? 1 : (A *= 2) < 1 ? -.5 * Math.pow(2, 10 * (A - 1)) * Math.sin(5 * (A - 1.1) * Math.PI) : .5 * Math.pow(2, -10 * (A - 1)) * Math.sin(5 * (A - 1.1) * Math.PI) + 1
                            }
                        },
                        Back: {
                            In: function(A) {
                                return A * A * (2.70158 * A - 1.70158)
                            },
                            Out: function(A) {
                                return --A * A * (2.70158 * A + 1.70158) + 1
                            },
                            InOut: function(A) {
                                var e = 2.5949095;
                                return (A *= 2) < 1 ? A * A * ((1 + e) * A - e) * .5 : .5 * ((A -= 2) * A * ((1 + e) * A + e) + 2)
                            }
                        },
                        Bounce: {
                            In: function(A) {
                                return 1 - i.Easing.Bounce.Out(1 - A)
                            },
                            Out: function(A) {
                                return A < 1 / 2.75 ? 7.5625 * A * A : A < 2 / 2.75 ? 7.5625 * (A -= 1.5 / 2.75) * A + .75 : A < 2.5 / 2.75 ? 7.5625 * (A -= 2.25 / 2.75) * A + .9375 : 7.5625 * (A -= 2.625 / 2.75) * A + .984375
                            },
                            InOut: function(A) {
                                return A < .5 ? .5 * i.Easing.Bounce.In(2 * A) : .5 * i.Easing.Bounce.Out(2 * A - 1) + .5
                            }
                        }
                    },
                    i.Interpolation = {
                        Linear: function(A, e) {
                            var t = A.length - 1
                                , n = t * e
                                , r = Math.floor(n)
                                , o = i.Interpolation.Utils.Linear;
                            return e < 0 ? o(A[0], A[1], n) : 1 < e ? o(A[t], A[t - 1], t - n) : o(A[r], A[t < r + 1 ? t : r + 1], n - r)
                        },
                        Bezier: function(A, e) {
                            for (var t = 0, n = A.length - 1, r = Math.pow, o = i.Interpolation.Utils.Bernstein, s = 0; s <= n; s++)
                                t += r(1 - e, n - s) * r(e, s) * A[s] * o(n, s);
                            return t
                        },
                        CatmullRom: function(A, e) {
                            var t = A.length - 1
                                , n = t * e
                                , r = Math.floor(n)
                                , o = i.Interpolation.Utils.CatmullRom;
                            return A[0] === A[t] ? (e < 0 && (r = Math.floor(n = t * (1 + e))),
                                o(A[(r - 1 + t) % t], A[r], A[(r + 1) % t], A[(r + 2) % t], n - r)) : e < 0 ? A[0] - (o(A[0], A[0], A[1], A[1], -n) - A[0]) : 1 < e ? A[t] - (o(A[t], A[t], A[t - 1], A[t - 1], n - t) - A[t]) : o(A[r ? r - 1 : 0], A[r], A[t < r + 1 ? t : r + 1], A[t < r + 2 ? t : r + 2], n - r)
                        },
                        Utils: {
                            Linear: function(A, e, t) {
                                return (e - A) * t + A
                            },
                            Bernstein: function(A, e) {
                                var t = i.Interpolation.Utils.Factorial;
                                return t(A) / t(e) / t(A - e)
                            },
                            Factorial: (n = [1],
                                    function(A) {
                                        var e = 1;
                                        if (n[A])
                                            return n[A];
                                        for (var t = A; 1 < t; t--)
                                            e *= t;
                                        return n[A] = e
                                    }
                            ),
                            CatmullRom: function(A, e, t, n, r) {
                                var o = .5 * (t - A)
                                    , s = .5 * (n - e)
                                    , i = r * r;
                                return (2 * e - 2 * t + o + s) * (r * i) + (-3 * e + 3 * t - 2 * o - s) * i + o * r + e
                            }
                        }
                    },
                    i.version = "18.5.0",
                    t.default = i
            }
                .call(this, e("./node_modules/process/browser.js"))
    },
    "./node_modules/core-js/fn/promise/finally.js": function(A, e, t) {
        "use strict";
        t("./node_modules/core-js/modules/es6.promise.js"),
            t("./node_modules/core-js/modules/es7.promise.finally.js"),
            A.exports = t("./node_modules/core-js/modules/_core.js").Promise.finally
    },
    "./node_modules/core-js/modules/_a-function.js": function(A, e) {
        A.exports = function(A) {
            if ("function" != typeof A)
                throw TypeError(A + " is not a function!");
            return A
        }
    },
    "./node_modules/core-js/modules/_add-to-unscopables.js": function(A, e, t) {
        var n = t("./node_modules/core-js/modules/_wks.js")("unscopables")
            , r = Array.prototype;
        null == r[n] && t("./node_modules/core-js/modules/_hide.js")(r, n, {}),
            A.exports = function(A) {
                r[n][A] = !0
            }
    },
    "./node_modules/core-js/modules/_advance-string-index.js": function(A, e, t) {
        "use strict";
        var n = t("./node_modules/core-js/modules/_string-at.js")(!0);
        A.exports = function(A, e, t) {
            return e + (t ? n(A, e).length : 1)
        }
    },
    "./node_modules/core-js/modules/_an-instance.js": function(A, e) {
        A.exports = function(A, e, t, n) {
            if (!(A instanceof e) || void 0 !== n && n in A)
                throw TypeError(t + ": incorrect invocation!");
            return A
        }
    },
    "./node_modules/core-js/modules/_an-object.js": function(A, e, t) {
        var n = t("./node_modules/core-js/modules/_is-object.js");
        A.exports = function(A) {
            if (!n(A))
                throw TypeError(A + " is not an object!");
            return A
        }
    },
    "./node_modules/core-js/modules/_array-includes.js": function(A, e, t) {
        var a = t("./node_modules/core-js/modules/_to-iobject.js")
            , c = t("./node_modules/core-js/modules/_to-length.js")
            , u = t("./node_modules/core-js/modules/_to-absolute-index.js");
        A.exports = function(i) {
            return function(A, e, t) {
                var n, r = a(A), o = c(r.length), s = u(t, o);
                if (i && e != e) {
                    for (; s < o; )
                        if ((n = r[s++]) != n)
                            return !0
                } else
                    for (; s < o; s++)
                        if ((i || s in r) && r[s] === e)
                            return i || s || 0;
                return !i && -1
            }
        }
    },
    "./node_modules/core-js/modules/_array-methods.js": function(A, e, t) {
        var p = t("./node_modules/core-js/modules/_ctx.js")
            , U = t("./node_modules/core-js/modules/_iobject.js")
            , C = t("./node_modules/core-js/modules/_to-object.js")
            , E = t("./node_modules/core-js/modules/_to-length.js")
            , n = t("./node_modules/core-js/modules/_array-species-create.js");
        A.exports = function(B, A) {
            var l = 1 == B
                , d = 2 == B
                , w = 3 == B
                , Q = 4 == B
                , h = 6 == B
                , f = 5 == B || h
                , g = A || n;
            return function(A, e, t) {
                for (var n, r, o = C(A), s = U(o), i = p(e, t, 3), a = E(s.length), c = 0, u = l ? g(A, a) : d ? g(A, 0) : void 0; c < a; c++)
                    if ((f || c in s) && (r = i(n = s[c], c, o),
                        B))
                        if (l)
                            u[c] = r;
                        else if (r)
                            switch (B) {
                                case 3:
                                    return !0;
                                case 5:
                                    return n;
                                case 6:
                                    return c;
                                case 2:
                                    u.push(n)
                            }
                        else if (Q)
                            return !1;
                return h ? -1 : w || Q ? Q : u
            }
        }
    },
    "./node_modules/core-js/modules/_array-species-constructor.js": function(A, e, t) {
        var n = t("./node_modules/core-js/modules/_is-object.js")
            , r = t("./node_modules/core-js/modules/_is-array.js")
            , o = t("./node_modules/core-js/modules/_wks.js")("species");
        A.exports = function(A) {
            var e;
            return r(A) && ("function" != typeof (e = A.constructor) || e !== Array && !r(e.prototype) || (e = void 0),
            n(e) && null === (e = e[o]) && (e = void 0)),
                void 0 === e ? Array : e
        }
    },
    "./node_modules/core-js/modules/_array-species-create.js": function(A, e, t) {
        var n = t("./node_modules/core-js/modules/_array-species-constructor.js");
        A.exports = function(A, e) {
            return new (n(A))(e)
        }
    },
    "./node_modules/core-js/modules/_classof.js": function(A, e, t) {
        var r = t("./node_modules/core-js/modules/_cof.js")
            , o = t("./node_modules/core-js/modules/_wks.js")("toStringTag")
            , s = "Arguments" == r(function() {
            return arguments
        }());
        A.exports = function(A) {
            var e, t, n;
            return void 0 === A ? "Undefined" : null === A ? "Null" : "string" == typeof (t = function(A, e) {
                try {
                    return A[e]
                } catch (A) {}
            }(e = Object(A), o)) ? t : s ? r(e) : "Object" == (n = r(e)) && "function" == typeof e.callee ? "Arguments" : n
        }
    },
    "./node_modules/core-js/modules/_cof.js": function(A, e) {
        var t = {}.toString;
        A.exports = function(A) {
            return t.call(A).slice(8, -1)
        }
    },
    "./node_modules/core-js/modules/_core.js": function(A, e) {
        var t = A.exports = {
            version: "2.6.9"
        };
        "number" == typeof __e && (__e = t)
    },
    "./node_modules/core-js/modules/_ctx.js": function(A, e, t) {
        var o = t("./node_modules/core-js/modules/_a-function.js");
        A.exports = function(n, r, A) {
            if (o(n),
            void 0 === r)
                return n;
            switch (A) {
                case 1:
                    return function(A) {
                        return n.call(r, A)
                    }
                        ;
                case 2:
                    return function(A, e) {
                        return n.call(r, A, e)
                    }
                        ;
                case 3:
                    return function(A, e, t) {
                        return n.call(r, A, e, t)
                    }
            }
            return function() {
                return n.apply(r, arguments)
            }
        }
    },
    "./node_modules/core-js/modules/_defined.js": function(A, e) {
        A.exports = function(A) {
            if (null == A)
                throw TypeError("Can't call method on  " + A);
            return A
        }
    },
    "./node_modules/core-js/modules/_descriptors.js": function(A, e, t) {
        A.exports = !t("./node_modules/core-js/modules/_fails.js")(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    },
    "./node_modules/core-js/modules/_dom-create.js": function(A, e, t) {
        var n = t("./node_modules/core-js/modules/_is-object.js")
            , r = t("./node_modules/core-js/modules/_global.js").document
            , o = n(r) && n(r.createElement);
        A.exports = function(A) {
            return o ? r.createElement(A) : {}
        }
    },
    "./node_modules/core-js/modules/_enum-bug-keys.js": function(A, e) {
        A.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    },
    "./node_modules/core-js/modules/_export.js": function(A, e, t) {
        var Q = t("./node_modules/core-js/modules/_global.js")
            , h = t("./node_modules/core-js/modules/_core.js")
            , f = t("./node_modules/core-js/modules/_hide.js")
            , g = t("./node_modules/core-js/modules/_redefine.js")
            , p = t("./node_modules/core-js/modules/_ctx.js")
            , U = "prototype"
            , C = function(A, e, t) {
            var n, r, o, s, i = A & C.F, a = A & C.G, c = A & C.S, u = A & C.P, B = A & C.B, l = a ? Q : c ? Q[e] || (Q[e] = {}) : (Q[e] || {})[U], d = a ? h : h[e] || (h[e] = {}), w = d[U] || (d[U] = {});
            for (n in a && (t = e),
                t)
                o = ((r = !i && l && void 0 !== l[n]) ? l : t)[n],
                    s = B && r ? p(o, Q) : u && "function" == typeof o ? p(Function.call, o) : o,
                l && g(l, n, o, A & C.U),
                d[n] != o && f(d, n, s),
                u && w[n] != o && (w[n] = o)
        };
        Q.core = h,
            C.F = 1,
            C.G = 2,
            C.S = 4,
            C.P = 8,
            C.B = 16,
            C.W = 32,
            C.U = 64,
            C.R = 128,
            A.exports = C
    },
    "./node_modules/core-js/modules/_fails.js": function(A, e) {
        A.exports = function(A) {
            try {
                return !!A()
            } catch (A) {
                return !0
            }
        }
    },
    "./node_modules/core-js/modules/_fix-re-wks.js": function(A, e, t) {
        "use strict";
        t("./node_modules/core-js/modules/es6.regexp.exec.js");
        var u = t("./node_modules/core-js/modules/_redefine.js")
            , B = t("./node_modules/core-js/modules/_hide.js")
            , l = t("./node_modules/core-js/modules/_fails.js")
            , d = t("./node_modules/core-js/modules/_defined.js")
            , w = t("./node_modules/core-js/modules/_wks.js")
            , Q = t("./node_modules/core-js/modules/_regexp-exec.js")
            , h = w("species")
            , f = !l(function() {
            var A = /./;
            return A.exec = function() {
                var A = [];
                return A.groups = {
                    a: "7"
                },
                    A
            }
                ,
            "7" !== "".replace(A, "$<a>")
        })
            , g = function() {
            var A = /(?:)/
                , e = A.exec;
            A.exec = function() {
                return e.apply(this, arguments)
            }
            ;
            var t = "ab".split(A);
            return 2 === t.length && "a" === t[0] && "b" === t[1]
        }();
        A.exports = function(t, A, e) {
            var n = w(t)
                , o = !l(function() {
                var A = {};
                return A[n] = function() {
                    return 7
                }
                    ,
                7 != ""[t](A)
            })
                , r = o ? !l(function() {
                var A = !1
                    , e = /a/;
                return e.exec = function() {
                    return A = !0,
                        null
                }
                    ,
                "split" === t && (e.constructor = {},
                        e.constructor[h] = function() {
                            return e
                        }
                ),
                    e[n](""),
                    !A
            }) : void 0;
            if (!o || !r || "replace" === t && !f || "split" === t && !g) {
                var s = /./[n]
                    , i = e(d, n, ""[t], function(A, e, t, n, r) {
                    return e.exec === Q ? o && !r ? {
                        done: !0,
                        value: s.call(e, t, n)
                    } : {
                        done: !0,
                        value: A.call(t, e, n)
                    } : {
                        done: !1
                    }
                })
                    , a = i[0]
                    , c = i[1];
                u(String.prototype, t, a),
                    B(RegExp.prototype, n, 2 == A ? function(A, e) {
                            return c.call(A, this, e)
                        }
                        : function(A) {
                            return c.call(A, this)
                        }
                    )
            }
        }
    },
    "./node_modules/core-js/modules/_flags.js": function(A, e, t) {
        "use strict";
        var n = t("./node_modules/core-js/modules/_an-object.js");
        A.exports = function() {
            var A = n(this)
                , e = "";
            return A.global && (e += "g"),
            A.ignoreCase && (e += "i"),
            A.multiline && (e += "m"),
            A.unicode && (e += "u"),
            A.sticky && (e += "y"),
                e
        }
    },
    "./node_modules/core-js/modules/_for-of.js": function(A, e, t) {
        var l = t("./node_modules/core-js/modules/_ctx.js")
            , d = t("./node_modules/core-js/modules/_iter-call.js")
            , w = t("./node_modules/core-js/modules/_is-array-iter.js")
            , Q = t("./node_modules/core-js/modules/_an-object.js")
            , h = t("./node_modules/core-js/modules/_to-length.js")
            , f = t("./node_modules/core-js/modules/core.get-iterator-method.js")
            , g = {}
            , p = {};
        (e = A.exports = function(A, e, t, n, r) {
                var o, s, i, a, c = r ? function() {
                        return A
                    }
                    : f(A), u = l(t, n, e ? 2 : 1), B = 0;
                if ("function" != typeof c)
                    throw TypeError(A + " is not iterable!");
                if (w(c)) {
                    for (o = h(A.length); B < o; B++)
                        if ((a = e ? u(Q(s = A[B])[0], s[1]) : u(A[B])) === g || a === p)
                            return a
                } else
                    for (i = c.call(A); !(s = i.next()).done; )
                        if ((a = d(i, u, s.value, e)) === g || a === p)
                            return a
            }
        ).BREAK = g,
            e.RETURN = p
    },
    "./node_modules/core-js/modules/_function-to-string.js": function(A, e, t) {
        A.exports = t("./node_modules/core-js/modules/_shared.js")("native-function-to-string", Function.toString)
    },
    "./node_modules/core-js/modules/_global.js": function(A, e) {
        var t = A.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = t)
    },
    "./node_modules/core-js/modules/_has.js": function(A, e) {
        var t = {}.hasOwnProperty;
        A.exports = function(A, e) {
            return t.call(A, e)
        }
    },
    "./node_modules/core-js/modules/_hide.js": function(A, e, t) {
        var n = t("./node_modules/core-js/modules/_object-dp.js")
            , r = t("./node_modules/core-js/modules/_property-desc.js");
        A.exports = t("./node_modules/core-js/modules/_descriptors.js") ? function(A, e, t) {
                return n.f(A, e, r(1, t))
            }
            : function(A, e, t) {
                return A[e] = t,
                    A
            }
    },
    "./node_modules/core-js/modules/_html.js": function(A, e, t) {
        var n = t("./node_modules/core-js/modules/_global.js").document;
        A.exports = n && n.documentElement
    },
    "./node_modules/core-js/modules/_ie8-dom-define.js": function(A, e, t) {
        A.exports = !t("./node_modules/core-js/modules/_descriptors.js") && !t("./node_modules/core-js/modules/_fails.js")(function() {
            return 7 != Object.defineProperty(t("./node_modules/core-js/modules/_dom-create.js")("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    },
    "./node_modules/core-js/modules/_inherit-if-required.js": function(A, e, t) {
        var o = t("./node_modules/core-js/modules/_is-object.js")
            , s = t("./node_modules/core-js/modules/_set-proto.js").set;
        A.exports = function(A, e, t) {
            var n, r = e.constructor;
            return r !== t && "function" == typeof r && (n = r.prototype) !== t.prototype && o(n) && s && s(A, n),
                A
        }
    },
    "./node_modules/core-js/modules/_invoke.js": function(A, e) {
        A.exports = function(A, e, t) {
            var n = void 0 === t;
            switch (e.length) {
                case 0:
                    return n ? A() : A.call(t);
                case 1:
                    return n ? A(e[0]) : A.call(t, e[0]);
                case 2:
                    return n ? A(e[0], e[1]) : A.call(t, e[0], e[1]);
                case 3:
                    return n ? A(e[0], e[1], e[2]) : A.call(t, e[0], e[1], e[2]);
                case 4:
                    return n ? A(e[0], e[1], e[2], e[3]) : A.call(t, e[0], e[1], e[2], e[3])
            }
            return A.apply(t, e)
        }
    },
    "./node_modules/core-js/modules/_iobject.js": function(A, e, t) {
        var n = t("./node_modules/core-js/modules/_cof.js");
        A.exports = Object("z").propertyIsEnumerable(0) ? Object : function(A) {
            return "String" == n(A) ? A.split("") : Object(A)
        }
    },
    "./node_modules/core-js/modules/_is-array-iter.js": function(A, e, t) {
        var n = t("./node_modules/core-js/modules/_iterators.js")
            , r = t("./node_modules/core-js/modules/_wks.js")("iterator")
            , o = Array.prototype;
        A.exports = function(A) {
            return void 0 !== A && (n.Array === A || o[r] === A)
        }
    },
    "./node_modules/core-js/modules/_is-array.js": function(A, e, t) {
        var n = t("./node_modules/core-js/modules/_cof.js");
        A.exports = Array.isArray || function(A) {
            return "Array" == n(A)
        }
    },
    "./node_modules/core-js/modules/_is-object.js": function(A, e) {
        A.exports = function(A) {
            return "object" == typeof A ? null !== A : "function" == typeof A
        }
    },
    "./node_modules/core-js/modules/_is-regexp.js": function(A, e, t) {
        var n = t("./node_modules/core-js/modules/_is-object.js")
            , r = t("./node_modules/core-js/modules/_cof.js")
            , o = t("./node_modules/core-js/modules/_wks.js")("match");
        A.exports = function(A) {
            var e;
            return n(A) && (void 0 !== (e = A[o]) ? !!e : "RegExp" == r(A))
        }
    },
    "./node_modules/core-js/modules/_iter-call.js": function(A, e, t) {
        var o = t("./node_modules/core-js/modules/_an-object.js");
        A.exports = function(e, A, t, n) {
            try {
                return n ? A(o(t)[0], t[1]) : A(t)
            } catch (A) {
                var r = e.return;
                throw void 0 !== r && o(r.call(e)),
                    A
            }
        }
    },
    "./node_modules/core-js/modules/_iter-detect.js": function(A, e, t) {
        var o = t("./node_modules/core-js/modules/_wks.js")("iterator")
            , s = !1;
        try {
            var n = [7][o]();
            n.return = function() {
                s = !0
            }
                ,
                Array.from(n, function() {
                    throw 2
                })
        } catch (A) {}
        A.exports = function(A, e) {
            if (!e && !s)
                return !1;
            var t = !1;
            try {
                var n = [7]
                    , r = n[o]();
                r.next = function() {
                    return {
                        done: t = !0
                    }
                }
                    ,
                    n[o] = function() {
                        return r
                    }
                    ,
                    A(n)
            } catch (A) {}
            return t
        }
    },
    "./node_modules/core-js/modules/_iterators.js": function(A, e) {
        A.exports = {}
    },
    "./node_modules/core-js/modules/_library.js": function(A, e) {
        A.exports = !1
    },
    "./node_modules/core-js/modules/_microtask.js": function(A, e, t) {
        var i = t("./node_modules/core-js/modules/_global.js")
            , a = t("./node_modules/core-js/modules/_task.js").set
            , c = i.MutationObserver || i.WebKitMutationObserver
            , u = i.process
            , B = i.Promise
            , l = "process" == t("./node_modules/core-js/modules/_cof.js")(u);
        A.exports = function() {
            function A() {
                var A, e;
                for (l && (A = u.domain) && A.exit(); t; ) {
                    e = t.fn,
                        t = t.next;
                    try {
                        e()
                    } catch (A) {
                        throw t ? r() : n = void 0,
                            A
                    }
                }
                n = void 0,
                A && A.enter()
            }
            var t, n, r;
            if (l)
                r = function() {
                    u.nextTick(A)
                }
                ;
            else if (!c || i.navigator && i.navigator.standalone)
                if (B && B.resolve) {
                    var e = B.resolve(void 0);
                    r = function() {
                        e.then(A)
                    }
                } else
                    r = function() {
                        a.call(i, A)
                    }
                    ;
            else {
                var o = !0
                    , s = document.createTextNode("");
                new c(A).observe(s, {
                    characterData: !0
                }),
                    r = function() {
                        s.data = o = !o
                    }
            }
            return function(A) {
                var e = {
                    fn: A,
                    next: void 0
                };
                n && (n.next = e),
                t || (t = e,
                    r()),
                    n = e
            }
        }
    },
    "./node_modules/core-js/modules/_new-promise-capability.js": function(A, e, t) {
        "use strict";
        var r = t("./node_modules/core-js/modules/_a-function.js");
        function n(A) {
            var t, n;
            this.promise = new A(function(A, e) {
                    if (void 0 !== t || void 0 !== n)
                        throw TypeError("Bad Promise constructor");
                    t = A,
                        n = e
                }
            ),
                this.resolve = r(t),
                this.reject = r(n)
        }
        A.exports.f = function(A) {
            return new n(A)
        }
    },
    "./node_modules/core-js/modules/_object-assign.js": function(A, e, t) {
        "use strict";
        var l = t("./node_modules/core-js/modules/_descriptors.js")
            , d = t("./node_modules/core-js/modules/_object-keys.js")
            , w = t("./node_modules/core-js/modules/_object-gops.js")
            , Q = t("./node_modules/core-js/modules/_object-pie.js")
            , h = t("./node_modules/core-js/modules/_to-object.js")
            , f = t("./node_modules/core-js/modules/_iobject.js")
            , r = Object.assign;
        A.exports = !r || t("./node_modules/core-js/modules/_fails.js")(function() {
            var A = {}
                , e = {}
                , t = Symbol()
                , n = "abcdefghijklmnopqrst";
            return A[t] = 7,
                n.split("").forEach(function(A) {
                    e[A] = A
                }),
            7 != r({}, A)[t] || Object.keys(r({}, e)).join("") != n
        }) ? function(A, e) {
                for (var t = h(A), n = arguments.length, r = 1, o = w.f, s = Q.f; r < n; )
                    for (var i, a = f(arguments[r++]), c = o ? d(a).concat(o(a)) : d(a), u = c.length, B = 0; B < u; )
                        i = c[B++],
                        l && !s.call(a, i) || (t[i] = a[i]);
                return t
            }
            : r
    },
    "./node_modules/core-js/modules/_object-dp.js": function(A, e, t) {
        var n = t("./node_modules/core-js/modules/_an-object.js")
            , r = t("./node_modules/core-js/modules/_ie8-dom-define.js")
            , o = t("./node_modules/core-js/modules/_to-primitive.js")
            , s = Object.defineProperty;
        e.f = t("./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function(A, e, t) {
            if (n(A),
                e = o(e, !0),
                n(t),
                r)
                try {
                    return s(A, e, t)
                } catch (A) {}
            if ("get"in t || "set"in t)
                throw TypeError("Accessors not supported!");
            return "value"in t && (A[e] = t.value),
                A
        }
    },
    "./node_modules/core-js/modules/_object-gopd.js": function(A, e, t) {
        var n = t("./node_modules/core-js/modules/_object-pie.js")
            , r = t("./node_modules/core-js/modules/_property-desc.js")
            , o = t("./node_modules/core-js/modules/_to-iobject.js")
            , s = t("./node_modules/core-js/modules/_to-primitive.js")
            , i = t("./node_modules/core-js/modules/_has.js")
            , a = t("./node_modules/core-js/modules/_ie8-dom-define.js")
            , c = Object.getOwnPropertyDescriptor;
        e.f = t("./node_modules/core-js/modules/_descriptors.js") ? c : function(A, e) {
            if (A = o(A),
                e = s(e, !0),
                a)
                try {
                    return c(A, e)
                } catch (A) {}
            if (i(A, e))
                return r(!n.f.call(A, e), A[e])
        }
    },
    "./node_modules/core-js/modules/_object-gopn.js": function(A, e, t) {
        var n = t("./node_modules/core-js/modules/_object-keys-internal.js")
            , r = t("./node_modules/core-js/modules/_enum-bug-keys.js").concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function(A) {
            return n(A, r)
        }
    },
    "./node_modules/core-js/modules/_object-gops.js": function(A, e) {
        e.f = Object.getOwnPropertySymbols
    },
    "./node_modules/core-js/modules/_object-keys-internal.js": function(A, e, t) {
        var s = t("./node_modules/core-js/modules/_has.js")
            , i = t("./node_modules/core-js/modules/_to-iobject.js")
            , a = t("./node_modules/core-js/modules/_array-includes.js")(!1)
            , c = t("./node_modules/core-js/modules/_shared-key.js")("IE_PROTO");
        A.exports = function(A, e) {
            var t, n = i(A), r = 0, o = [];
            for (t in n)
                t != c && s(n, t) && o.push(t);
            for (; e.length > r; )
                s(n, t = e[r++]) && (~a(o, t) || o.push(t));
            return o
        }
    },
    "./node_modules/core-js/modules/_object-keys.js": function(A, e, t) {
        var n = t("./node_modules/core-js/modules/_object-keys-internal.js")
            , r = t("./node_modules/core-js/modules/_enum-bug-keys.js");
        A.exports = Object.keys || function(A) {
            return n(A, r)
        }
    },
    "./node_modules/core-js/modules/_object-pie.js": function(A, e) {
        e.f = {}.propertyIsEnumerable
    },
    "./node_modules/core-js/modules/_perform.js": function(A, e) {
        A.exports = function(A) {
            try {
                return {
                    e: !1,
                    v: A()
                }
            } catch (A) {
                return {
                    e: !0,
                    v: A
                }
            }
        }
    },
    "./node_modules/core-js/modules/_promise-resolve.js": function(A, e, t) {
        var n = t("./node_modules/core-js/modules/_an-object.js")
            , r = t("./node_modules/core-js/modules/_is-object.js")
            , o = t("./node_modules/core-js/modules/_new-promise-capability.js");
        A.exports = function(A, e) {
            if (n(A),
            r(e) && e.constructor === A)
                return e;
            var t = o.f(A);
            return (0,
                t.resolve)(e),
                t.promise
        }
    },
    "./node_modules/core-js/modules/_property-desc.js": function(A, e) {
        A.exports = function(A, e) {
            return {
                enumerable: !(1 & A),
                configurable: !(2 & A),
                writable: !(4 & A),
                value: e
            }
        }
    },
    "./node_modules/core-js/modules/_redefine-all.js": function(A, e, t) {
        var r = t("./node_modules/core-js/modules/_redefine.js");
        A.exports = function(A, e, t) {
            for (var n in e)
                r(A, n, e[n], t);
            return A
        }
    },
    "./node_modules/core-js/modules/_redefine.js": function(A, e, t) {
        var o = t("./node_modules/core-js/modules/_global.js")
            , s = t("./node_modules/core-js/modules/_hide.js")
            , i = t("./node_modules/core-js/modules/_has.js")
            , a = t("./node_modules/core-js/modules/_uid.js")("src")
            , n = t("./node_modules/core-js/modules/_function-to-string.js")
            , r = "toString"
            , c = ("" + n).split(r);
        t("./node_modules/core-js/modules/_core.js").inspectSource = function(A) {
            return n.call(A)
        }
            ,
            (A.exports = function(A, e, t, n) {
                    var r = "function" == typeof t;
                    r && (i(t, "name") || s(t, "name", e)),
                    A[e] !== t && (r && (i(t, a) || s(t, a, A[e] ? "" + A[e] : c.join(String(e)))),
                        A === o ? A[e] = t : n ? A[e] ? A[e] = t : s(A, e, t) : (delete A[e],
                            s(A, e, t)))
                }
            )(Function.prototype, r, function() {
                return "function" == typeof this && this[a] || n.call(this)
            })
    },
    "./node_modules/core-js/modules/_regexp-exec-abstract.js": function(A, e, t) {
        "use strict";
        var r = t("./node_modules/core-js/modules/_classof.js")
            , o = RegExp.prototype.exec;
        A.exports = function(A, e) {
            var t = A.exec;
            if ("function" == typeof t) {
                var n = t.call(A, e);
                if ("object" != typeof n)
                    throw new TypeError("RegExp exec method returned something other than an Object or null");
                return n
            }
            if ("RegExp" !== r(A))
                throw new TypeError("RegExp#exec called on incompatible receiver");
            return o.call(A, e)
        }
    },
    "./node_modules/core-js/modules/_regexp-exec.js": function(A, e, t) {
        "use strict";
        var n, r, s = t("./node_modules/core-js/modules/_flags.js"), i = RegExp.prototype.exec, a = String.prototype.replace, o = i, c = "lastIndex", u = (n = /a/,
            r = /b*/g,
            i.call(n, "a"),
            i.call(r, "a"),
        0 !== n[c] || 0 !== r[c]), B = void 0 !== /()??/.exec("")[1];
        (u || B) && (o = function(A) {
                var e, t, n, r, o = this;
                return B && (t = new RegExp("^" + o.source + "$(?!\\s)",s.call(o))),
                u && (e = o[c]),
                    n = i.call(o, A),
                u && n && (o[c] = o.global ? n.index + n[0].length : e),
                B && n && 1 < n.length && a.call(n[0], t, function() {
                    for (r = 1; r < arguments.length - 2; r++)
                        void 0 === arguments[r] && (n[r] = void 0)
                }),
                    n
            }
        ),
            A.exports = o
    },
    "./node_modules/core-js/modules/_same-value.js": function(A, e) {
        A.exports = Object.is || function(A, e) {
            return A === e ? 0 !== A || 1 / A == 1 / e : A != A && e != e
        }
    },
    "./node_modules/core-js/modules/_set-proto.js": function(A, e, r) {
        function o(A, e) {
            if (n(A),
            !t(e) && null !== e)
                throw TypeError(e + ": can't set as prototype!")
        }
        var t = r("./node_modules/core-js/modules/_is-object.js")
            , n = r("./node_modules/core-js/modules/_an-object.js");
        A.exports = {
            set: Object.setPrototypeOf || ("__proto__"in {} ? function(A, t, n) {
                try {
                    (n = r("./node_modules/core-js/modules/_ctx.js")(Function.call, r("./node_modules/core-js/modules/_object-gopd.js").f(Object.prototype, "__proto__").set, 2))(A, []),
                        t = !(A instanceof Array)
                } catch (A) {
                    t = !0
                }
                return function(A, e) {
                    return o(A, e),
                        t ? A.__proto__ = e : n(A, e),
                        A
                }
            }({}, !1) : void 0),
            check: o
        }
    },
    "./node_modules/core-js/modules/_set-species.js": function(A, e, t) {
        "use strict";
        var n = t("./node_modules/core-js/modules/_global.js")
            , r = t("./node_modules/core-js/modules/_object-dp.js")
            , o = t("./node_modules/core-js/modules/_descriptors.js")
            , s = t("./node_modules/core-js/modules/_wks.js")("species");
        A.exports = function(A) {
            var e = n[A];
            o && e && !e[s] && r.f(e, s, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    },
    "./node_modules/core-js/modules/_set-to-string-tag.js": function(A, e, t) {
        var n = t("./node_modules/core-js/modules/_object-dp.js").f
            , r = t("./node_modules/core-js/modules/_has.js")
            , o = t("./node_modules/core-js/modules/_wks.js")("toStringTag");
        A.exports = function(A, e, t) {
            A && !r(A = t ? A : A.prototype, o) && n(A, o, {
                configurable: !0,
                value: e
            })
        }
    },
    "./node_modules/core-js/modules/_shared-key.js": function(A, e, t) {
        var n = t("./node_modules/core-js/modules/_shared.js")("keys")
            , r = t("./node_modules/core-js/modules/_uid.js");
        A.exports = function(A) {
            return n[A] || (n[A] = r(A))
        }
    },
    "./node_modules/core-js/modules/_shared.js": function(A, e, t) {
        var n = t("./node_modules/core-js/modules/_core.js")
            , r = t("./node_modules/core-js/modules/_global.js")
            , o = "__core-js_shared__"
            , s = r[o] || (r[o] = {});
        (A.exports = function(A, e) {
                return s[A] || (s[A] = void 0 !== e ? e : {})
            }
        )("versions", []).push({
            version: n.version,
            mode: t("./node_modules/core-js/modules/_library.js") ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    },
    "./node_modules/core-js/modules/_species-constructor.js": function(A, e, t) {
        var r = t("./node_modules/core-js/modules/_an-object.js")
            , o = t("./node_modules/core-js/modules/_a-function.js")
            , s = t("./node_modules/core-js/modules/_wks.js")("species");
        A.exports = function(A, e) {
            var t, n = r(A).constructor;
            return void 0 === n || null == (t = r(n)[s]) ? e : o(t)
        }
    },
    "./node_modules/core-js/modules/_strict-method.js": function(A, e, t) {
        "use strict";
        var n = t("./node_modules/core-js/modules/_fails.js");
        A.exports = function(A, e) {
            return !!A && n(function() {
                e ? A.call(null, function() {}, 1) : A.call(null)
            })
        }
    },
    "./node_modules/core-js/modules/_string-at.js": function(A, e, t) {
        var a = t("./node_modules/core-js/modules/_to-integer.js")
            , c = t("./node_modules/core-js/modules/_defined.js");
        A.exports = function(i) {
            return function(A, e) {
                var t, n, r = String(c(A)), o = a(e), s = r.length;
                return o < 0 || s <= o ? i ? "" : void 0 : (t = r.charCodeAt(o)) < 55296 || 56319 < t || o + 1 === s || (n = r.charCodeAt(o + 1)) < 56320 || 57343 < n ? i ? r.charAt(o) : t : i ? r.slice(o, o + 2) : n - 56320 + (t - 55296 << 10) + 65536
            }
        }
    },
    "./node_modules/core-js/modules/_string-repeat.js": function(A, e, t) {
        "use strict";
        var r = t("./node_modules/core-js/modules/_to-integer.js")
            , o = t("./node_modules/core-js/modules/_defined.js");
        A.exports = function(A) {
            var e = String(o(this))
                , t = ""
                , n = r(A);
            if (n < 0 || n == 1 / 0)
                throw RangeError("Count can't be negative");
            for (; 0 < n; (n >>>= 1) && (e += e))
                1 & n && (t += e);
            return t
        }
    },
    "./node_modules/core-js/modules/_task.js": function(A, e, t) {
        function n() {
            var A = +this;
            if (p.hasOwnProperty(A)) {
                var e = p[A];
                delete p[A],
                    e()
            }
        }
        function r(A) {
            n.call(A.data)
        }
        var o, s, i, a = t("./node_modules/core-js/modules/_ctx.js"), c = t("./node_modules/core-js/modules/_invoke.js"), u = t("./node_modules/core-js/modules/_html.js"), B = t("./node_modules/core-js/modules/_dom-create.js"), l = t("./node_modules/core-js/modules/_global.js"), d = l.process, w = l.setImmediate, Q = l.clearImmediate, h = l.MessageChannel, f = l.Dispatch, g = 0, p = {}, U = "onreadystatechange";
        w && Q || (w = function(A) {
                for (var e = [], t = 1; t < arguments.length; )
                    e.push(arguments[t++]);
                return p[++g] = function() {
                    c("function" == typeof A ? A : Function(A), e)
                }
                    ,
                    o(g),
                    g
            }
                ,
                Q = function(A) {
                    delete p[A]
                }
                ,
                "process" == t("./node_modules/core-js/modules/_cof.js")(d) ? o = function(A) {
                        d.nextTick(a(n, A, 1))
                    }
                    : f && f.now ? o = function(A) {
                        f.now(a(n, A, 1))
                    }
                    : h ? (i = (s = new h).port2,
                        s.port1.onmessage = r,
                        o = a(i.postMessage, i, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (o = function(A) {
                        l.postMessage(A + "", "*")
                    }
                        ,
                        l.addEventListener("message", r, !1)) : o = U in B("script") ? function(A) {
                            u.appendChild(B("script"))[U] = function() {
                                u.removeChild(this),
                                    n.call(A)
                            }
                        }
                        : function(A) {
                            setTimeout(a(n, A, 1), 0)
                        }
        ),
            A.exports = {
                set: w,
                clear: Q
            }
    },
    "./node_modules/core-js/modules/_to-absolute-index.js": function(A, e, t) {
        var n = t("./node_modules/core-js/modules/_to-integer.js")
            , r = Math.max
            , o = Math.min;
        A.exports = function(A, e) {
            return (A = n(A)) < 0 ? r(A + e, 0) : o(A, e)
        }
    },
    "./node_modules/core-js/modules/_to-integer.js": function(A, e) {
        var t = Math.ceil
            , n = Math.floor;
        A.exports = function(A) {
            return isNaN(A = +A) ? 0 : (0 < A ? n : t)(A)
        }
    },
    "./node_modules/core-js/modules/_to-iobject.js": function(A, e, t) {
        var n = t("./node_modules/core-js/modules/_iobject.js")
            , r = t("./node_modules/core-js/modules/_defined.js");
        A.exports = function(A) {
            return n(r(A))
        }
    },
    "./node_modules/core-js/modules/_to-length.js": function(A, e, t) {
        var n = t("./node_modules/core-js/modules/_to-integer.js")
            , r = Math.min;
        A.exports = function(A) {
            return 0 < A ? r(n(A), 9007199254740991) : 0
        }
    },
    "./node_modules/core-js/modules/_to-object.js": function(A, e, t) {
        var n = t("./node_modules/core-js/modules/_defined.js");
        A.exports = function(A) {
            return Object(n(A))
        }
    },
    "./node_modules/core-js/modules/_to-primitive.js": function(A, e, t) {
        var r = t("./node_modules/core-js/modules/_is-object.js");
        A.exports = function(A, e) {
            if (!r(A))
                return A;
            var t, n;
            if (e && "function" == typeof (t = A.toString) && !r(n = t.call(A)))
                return n;
            if ("function" == typeof (t = A.valueOf) && !r(n = t.call(A)))
                return n;
            if (!e && "function" == typeof (t = A.toString) && !r(n = t.call(A)))
                return n;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    "./node_modules/core-js/modules/_uid.js": function(A, e) {
        var t = 0
            , n = Math.random();
        A.exports = function(A) {
            return "Symbol(".concat(void 0 === A ? "" : A, ")_", (++t + n).toString(36))
        }
    },
    "./node_modules/core-js/modules/_user-agent.js": function(A, e, t) {
        var n = t("./node_modules/core-js/modules/_global.js").navigator;
        A.exports = n && n.userAgent || ""
    },
    "./node_modules/core-js/modules/_wks.js": function(A, e, t) {
        var n = t("./node_modules/core-js/modules/_shared.js")("wks")
            , r = t("./node_modules/core-js/modules/_uid.js")
            , o = t("./node_modules/core-js/modules/_global.js").Symbol
            , s = "function" == typeof o;
        (A.exports = function(A) {
                return n[A] || (n[A] = s && o[A] || (s ? o : r)("Symbol." + A))
            }
        ).store = n
    },
    "./node_modules/core-js/modules/core.get-iterator-method.js": function(A, e, t) {
        var n = t("./node_modules/core-js/modules/_classof.js")
            , r = t("./node_modules/core-js/modules/_wks.js")("iterator")
            , o = t("./node_modules/core-js/modules/_iterators.js");
        A.exports = t("./node_modules/core-js/modules/_core.js").getIteratorMethod = function(A) {
            if (null != A)
                return A[r] || A["@@iterator"] || o[n(A)]
        }
    },
    "./node_modules/core-js/modules/es6.array.find.js": function(A, e, t) {
        "use strict";
        var n = t("./node_modules/core-js/modules/_export.js")
            , r = t("./node_modules/core-js/modules/_array-methods.js")(5)
            , o = "find"
            , s = !0;
        o in [] && Array(1)[o](function() {
            s = !1
        }),
            n(n.P + n.F * s, "Array", {
                find: function(A, e) {
                    return r(this, A, 1 < arguments.length ? e : void 0)
                }
            }),
            t("./node_modules/core-js/modules/_add-to-unscopables.js")(o)
    },
    "./node_modules/core-js/modules/es6.array.sort.js": function(A, e, t) {
        "use strict";
        var n = t("./node_modules/core-js/modules/_export.js")
            , r = t("./node_modules/core-js/modules/_a-function.js")
            , o = t("./node_modules/core-js/modules/_to-object.js")
            , s = t("./node_modules/core-js/modules/_fails.js")
            , i = [].sort
            , a = [1, 2, 3];
        n(n.P + n.F * (s(function() {
            a.sort(void 0)
        }) || !s(function() {
            a.sort(null)
        }) || !t("./node_modules/core-js/modules/_strict-method.js")(i)), "Array", {
            sort: function(A) {
                return void 0 === A ? i.call(o(this)) : i.call(o(this), r(A))
            }
        })
    },
    "./node_modules/core-js/modules/es6.function.name.js": function(A, e, t) {
        var n = t("./node_modules/core-js/modules/_object-dp.js").f
            , r = Function.prototype
            , o = /^\s*function ([^ (]*)/;
        "name"in r || t("./node_modules/core-js/modules/_descriptors.js") && n(r, "name", {
            configurable: !0,
            get: function() {
                try {
                    return ("" + this).match(o)[1]
                } catch (A) {
                    return ""
                }
            }
        })
    },
    "./node_modules/core-js/modules/es6.object.assign.js": function(A, e, t) {
        var n = t("./node_modules/core-js/modules/_export.js");
        n(n.S + n.F, "Object", {
            assign: t("./node_modules/core-js/modules/_object-assign.js")
        })
    },
    "./node_modules/core-js/modules/es6.object.to-string.js": function(A, e, t) {
        "use strict";
        var n = t("./node_modules/core-js/modules/_classof.js")
            , r = {};
        r[t("./node_modules/core-js/modules/_wks.js")("toStringTag")] = "z",
        r + "" != "[object z]" && t("./node_modules/core-js/modules/_redefine.js")(Object.prototype, "toString", function() {
            return "[object " + n(this) + "]"
        }, !0)
    },
    "./node_modules/core-js/modules/es6.promise.js": function(A, e, t) {
        "use strict";
        function n() {}
        function B(A) {
            var e;
            return !(!h(A) || "function" != typeof (e = A.then)) && e
        }
        function r(u, t) {
            if (!u._n) {
                u._n = !0;
                var n = u._c;
                E(function() {
                    for (var a = u._v, c = 1 == u._s, A = 0, e = function(A) {
                        var e, t, n, r = c ? A.ok : A.fail, o = A.resolve, s = A.reject, i = A.domain;
                        try {
                            r ? (c || (2 == u._h && j(u),
                                u._h = 1),
                                !0 === r ? e = a : (i && i.enter(),
                                    e = r(a),
                                i && (i.exit(),
                                    n = !0)),
                                e === A.promise ? s(N("Promise-chain cycle")) : (t = B(e)) ? t.call(e, o, s) : o(e)) : s(a)
                        } catch (A) {
                            i && !n && i.exit(),
                                s(A)
                        }
                    }; n.length > A; )
                        e(n[A++]);
                    u._c = [],
                        u._n = !1,
                    t && !u._h && S(u)
                })
            }
        }
        function o(A) {
            var e = this;
            e._d || (e._d = !0,
                (e = e._w || e)._v = A,
                e._s = 2,
            e._a || (e._a = e._c.slice()),
                r(e, !0))
        }
        var s, i, a, c, u = t("./node_modules/core-js/modules/_library.js"), l = t("./node_modules/core-js/modules/_global.js"), d = t("./node_modules/core-js/modules/_ctx.js"), w = t("./node_modules/core-js/modules/_classof.js"), Q = t("./node_modules/core-js/modules/_export.js"), h = t("./node_modules/core-js/modules/_is-object.js"), f = t("./node_modules/core-js/modules/_a-function.js"), g = t("./node_modules/core-js/modules/_an-instance.js"), p = t("./node_modules/core-js/modules/_for-of.js"), U = t("./node_modules/core-js/modules/_species-constructor.js"), C = t("./node_modules/core-js/modules/_task.js").set, E = t("./node_modules/core-js/modules/_microtask.js")(), m = t("./node_modules/core-js/modules/_new-promise-capability.js"), F = t("./node_modules/core-js/modules/_perform.js"), H = t("./node_modules/core-js/modules/_user-agent.js"), _ = t("./node_modules/core-js/modules/_promise-resolve.js"), v = "Promise", N = l.TypeError, K = l.process, y = K && K.versions, b = y && y.v8 || "", I = l[v], T = "process" == w(K), R = i = m.f, O = !!function() {
            try {
                var A = I.resolve(1)
                    , e = (A.constructor = {})[t("./node_modules/core-js/modules/_wks.js")("species")] = function(A) {
                        A(n, n)
                    }
                ;
                return (T || "function" == typeof PromiseRejectionEvent) && A.then(n)instanceof e && 0 !== b.indexOf("6.6") && -1 === H.indexOf("Chrome/66")
            } catch (A) {}
        }(), S = function(o) {
            C.call(l, function() {
                var A, e, t, n = o._v, r = L(o);
                if (r && (A = F(function() {
                    T ? K.emit("unhandledRejection", n, o) : (e = l.onunhandledrejection) ? e({
                        promise: o,
                        reason: n
                    }) : (t = l.console) && t.error && t.error("Unhandled promise rejection", n)
                }),
                    o._h = T || L(o) ? 2 : 1),
                    o._a = void 0,
                r && A.e)
                    throw A.v
            })
        }, L = function(A) {
            return 1 !== A._h && 0 === (A._a || A._c).length
        }, j = function(e) {
            C.call(l, function() {
                var A;
                T ? K.emit("rejectionHandled", e) : (A = l.onrejectionhandled) && A({
                    promise: e,
                    reason: e._v
                })
            })
        }, M = function(A) {
            var t, n = this;
            if (!n._d) {
                n._d = !0,
                    n = n._w || n;
                try {
                    if (n === A)
                        throw N("Promise can't be resolved itself");
                    (t = B(A)) ? E(function() {
                        var e = {
                            _w: n,
                            _d: !1
                        };
                        try {
                            t.call(A, d(M, e, 1), d(o, e, 1))
                        } catch (A) {
                            o.call(e, A)
                        }
                    }) : (n._v = A,
                        n._s = 1,
                        r(n, !1))
                } catch (A) {
                    o.call({
                        _w: n,
                        _d: !1
                    }, A)
                }
            }
        };
        O || (I = function(A) {
                g(this, I, v, "_h"),
                    f(A),
                    s.call(this);
                try {
                    A(d(M, this, 1), d(o, this, 1))
                } catch (A) {
                    o.call(this, A)
                }
            }
                ,
                (s = function(A) {
                        this._c = [],
                            this._a = void 0,
                            this._s = 0,
                            this._d = !1,
                            this._v = void 0,
                            this._h = 0,
                            this._n = !1
                    }
                ).prototype = t("./node_modules/core-js/modules/_redefine-all.js")(I.prototype, {
                    then: function(A, e) {
                        var t = R(U(this, I));
                        return t.ok = "function" != typeof A || A,
                            t.fail = "function" == typeof e && e,
                            t.domain = T ? K.domain : void 0,
                            this._c.push(t),
                        this._a && this._a.push(t),
                        this._s && r(this, !1),
                            t.promise
                    },
                    catch: function(A) {
                        return this.then(void 0, A)
                    }
                }),
                a = function() {
                    var A = new s;
                    this.promise = A,
                        this.resolve = d(M, A, 1),
                        this.reject = d(o, A, 1)
                }
                ,
                m.f = R = function(A) {
                    return A === I || A === c ? new a(A) : i(A)
                }
        ),
            Q(Q.G + Q.W + Q.F * !O, {
                Promise: I
            }),
            t("./node_modules/core-js/modules/_set-to-string-tag.js")(I, v),
            t("./node_modules/core-js/modules/_set-species.js")(v),
            c = t("./node_modules/core-js/modules/_core.js")[v],
            Q(Q.S + Q.F * !O, v, {
                reject: function(A) {
                    var e = R(this);
                    return (0,
                        e.reject)(A),
                        e.promise
                }
            }),
            Q(Q.S + Q.F * (u || !O), v, {
                resolve: function(A) {
                    return _(u && this === c ? I : this, A)
                }
            }),
            Q(Q.S + Q.F * !(O && t("./node_modules/core-js/modules/_iter-detect.js")(function(A) {
                I.all(A).catch(n)
            })), v, {
                all: function(A) {
                    var s = this
                        , e = R(s)
                        , i = e.resolve
                        , a = e.reject
                        , t = F(function() {
                        var n = []
                            , r = 0
                            , o = 1;
                        p(A, !1, function(A) {
                            var e = r++
                                , t = !1;
                            n.push(void 0),
                                o++,
                                s.resolve(A).then(function(A) {
                                    t || (t = !0,
                                        n[e] = A,
                                    --o || i(n))
                                }, a)
                        }),
                        --o || i(n)
                    });
                    return t.e && a(t.v),
                        e.promise
                },
                race: function(A) {
                    var e = this
                        , t = R(e)
                        , n = t.reject
                        , r = F(function() {
                        p(A, !1, function(A) {
                            e.resolve(A).then(t.resolve, n)
                        })
                    });
                    return r.e && n(r.v),
                        t.promise
                }
            })
    },
    "./node_modules/core-js/modules/es6.regexp.constructor.js": function(A, e, t) {
        var n = t("./node_modules/core-js/modules/_global.js")
            , o = t("./node_modules/core-js/modules/_inherit-if-required.js")
            , r = t("./node_modules/core-js/modules/_object-dp.js").f
            , s = t("./node_modules/core-js/modules/_object-gopn.js").f
            , i = t("./node_modules/core-js/modules/_is-regexp.js")
            , a = t("./node_modules/core-js/modules/_flags.js")
            , c = n.RegExp
            , u = c
            , B = c.prototype
            , l = /a/g
            , d = /a/g
            , w = new c(l) !== l;
        if (t("./node_modules/core-js/modules/_descriptors.js") && (!w || t("./node_modules/core-js/modules/_fails.js")(function() {
            return d[t("./node_modules/core-js/modules/_wks.js")("match")] = !1,
            c(l) != l || c(d) == d || "/a/i" != c(l, "i")
        }))) {
            c = function(A, e) {
                var t = this instanceof c
                    , n = i(A)
                    , r = void 0 === e;
                return !t && n && A.constructor === c && r ? A : o(w ? new u(n && !r ? A.source : A,e) : u((n = A instanceof c) ? A.source : A, n && r ? a.call(A) : e), t ? this : B, c)
            }
            ;
            function Q(e) {
                e in c || r(c, e, {
                    configurable: !0,
                    get: function() {
                        return u[e]
                    },
                    set: function(A) {
                        u[e] = A
                    }
                })
            }
            for (var h = s(u), f = 0; h.length > f; )
                Q(h[f++]);
            (B.constructor = c).prototype = B,
                t("./node_modules/core-js/modules/_redefine.js")(n, "RegExp", c)
        }
        t("./node_modules/core-js/modules/_set-species.js")("RegExp")
    },
    "./node_modules/core-js/modules/es6.regexp.exec.js": function(A, e, t) {
        "use strict";
        var n = t("./node_modules/core-js/modules/_regexp-exec.js");
        t("./node_modules/core-js/modules/_export.js")({
            target: "RegExp",
            proto: !0,
            forced: n !== /./.exec
        }, {
            exec: n
        })
    },
    "./node_modules/core-js/modules/es6.regexp.match.js": function(A, e, t) {
        "use strict";
        var B = t("./node_modules/core-js/modules/_an-object.js")
            , l = t("./node_modules/core-js/modules/_to-length.js")
            , d = t("./node_modules/core-js/modules/_advance-string-index.js")
            , w = t("./node_modules/core-js/modules/_regexp-exec-abstract.js");
        t("./node_modules/core-js/modules/_fix-re-wks.js")("match", 1, function(n, r, c, u) {
            return [function(A) {
                var e = n(this)
                    , t = null == A ? void 0 : A[r];
                return void 0 !== t ? t.call(A, e) : new RegExp(A)[r](String(e))
            }
                , function(A) {
                    var e = u(c, A, this);
                    if (e.done)
                        return e.value;
                    var t = B(A)
                        , n = String(this);
                    if (!t.global)
                        return w(t, n);
                    for (var r, o = t.unicode, s = [], i = t.lastIndex = 0; null !== (r = w(t, n)); ) {
                        var a = String(r[0]);
                        "" === (s[i] = a) && (t.lastIndex = d(n, l(t.lastIndex), o)),
                            i++
                    }
                    return 0 === i ? null : s
                }
            ]
        })
    },
    "./node_modules/core-js/modules/es6.regexp.replace.js": function(A, e, t) {
        "use strict";
        var F = t("./node_modules/core-js/modules/_an-object.js")
            , n = t("./node_modules/core-js/modules/_to-object.js")
            , H = t("./node_modules/core-js/modules/_to-length.js")
            , _ = t("./node_modules/core-js/modules/_to-integer.js")
            , v = t("./node_modules/core-js/modules/_advance-string-index.js")
            , N = t("./node_modules/core-js/modules/_regexp-exec-abstract.js")
            , K = Math.max
            , y = Math.min
            , l = Math.floor
            , d = /\$([$&`']|\d\d?|<[^>]*>)/g
            , w = /\$([$&`']|\d\d?)/g;
        t("./node_modules/core-js/modules/_fix-re-wks.js")("replace", 2, function(r, o, C, E) {
            return [function(A, e) {
                var t = r(this)
                    , n = null == A ? void 0 : A[o];
                return void 0 !== n ? n.call(A, t, e) : C.call(String(t), A, e)
            }
                , function(A, e) {
                    var t = E(C, A, this, e);
                    if (t.done)
                        return t.value;
                    var n = F(A)
                        , r = String(this)
                        , o = "function" == typeof e;
                    o || (e = String(e));
                    var s = n.global;
                    if (s) {
                        var i = n.unicode;
                        n.lastIndex = 0
                    }
                    for (var a = []; ; ) {
                        var c = N(n, r);
                        if (null === c)
                            break;
                        if (a.push(c),
                            !s)
                            break;
                        "" === String(c[0]) && (n.lastIndex = v(r, H(n.lastIndex), i))
                    }
                    for (var u, B = "", l = 0, d = 0; d < a.length; d++) {
                        c = a[d];
                        for (var w = String(c[0]), Q = K(y(_(c.index), r.length), 0), h = [], f = 1; f < c.length; f++)
                            h.push(void 0 === (u = c[f]) ? u : String(u));
                        var g = c.groups;
                        if (o) {
                            var p = [w].concat(h, Q, r);
                            void 0 !== g && p.push(g);
                            var U = String(e.apply(void 0, p))
                        } else
                            U = m(w, r, Q, h, g, e);
                        l <= Q && (B += r.slice(l, Q) + U,
                            l = Q + w.length)
                    }
                    return B + r.slice(l)
                }
            ];
            function m(o, s, i, a, c, A) {
                var u = i + o.length
                    , B = a.length
                    , e = w;
                return void 0 !== c && (c = n(c),
                    e = d),
                    C.call(A, e, function(A, e) {
                        var t;
                        switch (e.charAt(0)) {
                            case "$":
                                return "$";
                            case "&":
                                return o;
                            case "`":
                                return s.slice(0, i);
                            case "'":
                                return s.slice(u);
                            case "<":
                                t = c[e.slice(1, -1)];
                                break;
                            default:
                                var n = +e;
                                if (0 == n)
                                    return A;
                                if (B < n) {
                                    var r = l(n / 10);
                                    return 0 === r ? A : r <= B ? void 0 === a[r - 1] ? e.charAt(1) : a[r - 1] + e.charAt(1) : A
                                }
                                t = a[n - 1]
                        }
                        return void 0 === t ? "" : t
                    })
            }
        })
    },
    "./node_modules/core-js/modules/es6.regexp.search.js": function(A, e, t) {
        "use strict";
        var a = t("./node_modules/core-js/modules/_an-object.js")
            , c = t("./node_modules/core-js/modules/_same-value.js")
            , u = t("./node_modules/core-js/modules/_regexp-exec-abstract.js");
        t("./node_modules/core-js/modules/_fix-re-wks.js")("search", 1, function(n, r, s, i) {
            return [function(A) {
                var e = n(this)
                    , t = null == A ? void 0 : A[r];
                return void 0 !== t ? t.call(A, e) : new RegExp(A)[r](String(e))
            }
                , function(A) {
                    var e = i(s, A, this);
                    if (e.done)
                        return e.value;
                    var t = a(A)
                        , n = String(this)
                        , r = t.lastIndex;
                    c(r, 0) || (t.lastIndex = 0);
                    var o = u(t, n);
                    return c(t.lastIndex, r) || (t.lastIndex = r),
                        null === o ? -1 : o.index
                }
            ]
        })
    },
    "./node_modules/core-js/modules/es6.string.repeat.js": function(A, e, t) {
        var n = t("./node_modules/core-js/modules/_export.js");
        n(n.P, "String", {
            repeat: t("./node_modules/core-js/modules/_string-repeat.js")
        })
    },
    "./node_modules/core-js/modules/es7.promise.finally.js": function(A, e, t) {
        "use strict";
        var n = t("./node_modules/core-js/modules/_export.js")
            , r = t("./node_modules/core-js/modules/_core.js")
            , o = t("./node_modules/core-js/modules/_global.js")
            , s = t("./node_modules/core-js/modules/_species-constructor.js")
            , i = t("./node_modules/core-js/modules/_promise-resolve.js");
        n(n.P + n.R, "Promise", {
            finally: function(e) {
                var t = s(this, r.Promise || o.Promise)
                    , A = "function" == typeof e;
                return this.then(A ? function(A) {
                        return i(t, e()).then(function() {
                            return A
                        })
                    }
                    : e, A ? function(A) {
                        return i(t, e()).then(function() {
                            throw A
                        })
                    }
                    : e)
            }
        })
    },
    "./node_modules/html2canvas/dist/html2canvas.js": function(A, e, t) {
        A.exports = function() {
            "use strict";
            var n = function(A, e) {
                return (n = Object.setPrototypeOf || {
                            __proto__: []
                        }instanceof Array && function(A, e) {
                            A.__proto__ = e
                        }
                        || function(A, e) {
                            for (var t in e)
                                e.hasOwnProperty(t) && (A[t] = e[t])
                        }
                )(A, e)
            };
            function e(A, e) {
                function t() {
                    this.constructor = A
                }
                n(A, e),
                    A.prototype = null === e ? Object.create(e) : (t.prototype = e.prototype,
                        new t)
            }
            var _ = function() {
                return (_ = Object.assign || function(A) {
                        for (var e, t = 1, n = arguments.length; t < n; t++)
                            for (var r in e = arguments[t])
                                Object.prototype.hasOwnProperty.call(e, r) && (A[r] = e[r]);
                        return A
                    }
                ).apply(this, arguments)
            };
            function c(o, s, i, a) {
                return new (i = i || Promise)(function(A, e) {
                        function t(A) {
                            try {
                                r(a.next(A))
                            } catch (A) {
                                e(A)
                            }
                        }
                        function n(A) {
                            try {
                                r(a.throw(A))
                            } catch (A) {
                                e(A)
                            }
                        }
                        function r(e) {
                            e.done ? A(e.value) : new i(function(A) {
                                    A(e.value)
                                }
                            ).then(t, n)
                        }
                        r((a = a.apply(o, s || [])).next())
                    }
                )
            }
            function S(t, n) {
                var r, o, s, A, i = {
                    label: 0,
                    sent: function() {
                        if (1 & s[0])
                            throw s[1];
                        return s[1]
                    },
                    trys: [],
                    ops: []
                };
                return A = {
                    next: e(0),
                    throw: e(1),
                    return: e(2)
                },
                "function" == typeof Symbol && (A[Symbol.iterator] = function() {
                        return this
                    }
                ),
                    A;
                function e(e) {
                    return function(A) {
                        return function(e) {
                            if (r)
                                throw new TypeError("Generator is already executing.");
                            for (; i; )
                                try {
                                    if (r = 1,
                                    o && (s = 2 & e[0] ? o.return : e[0] ? o.throw || ((s = o.return) && s.call(o),
                                        0) : o.next) && !(s = s.call(o, e[1])).done)
                                        return s;
                                    switch (o = 0,
                                    s && (e = [2 & e[0], s.value]),
                                        e[0]) {
                                        case 0:
                                        case 1:
                                            s = e;
                                            break;
                                        case 4:
                                            return i.label++,
                                                {
                                                    value: e[1],
                                                    done: !1
                                                };
                                        case 5:
                                            i.label++,
                                                o = e[1],
                                                e = [0];
                                            continue;
                                        case 7:
                                            e = i.ops.pop(),
                                                i.trys.pop();
                                            continue;
                                        default:
                                            if (!(s = 0 < (s = i.trys).length && s[s.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === e[0] && (!s || e[1] > s[0] && e[1] < s[3])) {
                                                i.label = e[1];
                                                break
                                            }
                                            if (6 === e[0] && i.label < s[1]) {
                                                i.label = s[1],
                                                    s = e;
                                                break
                                            }
                                            if (s && i.label < s[2]) {
                                                i.label = s[2],
                                                    i.ops.push(e);
                                                break
                                            }
                                            s[2] && i.ops.pop(),
                                                i.trys.pop();
                                            continue
                                    }
                                    e = n.call(t, i)
                                } catch (A) {
                                    e = [6, A],
                                        o = 0
                                } finally {
                                    r = s = 0
                                }
                            if (5 & e[0])
                                throw e[1];
                            return {
                                value: e[0] ? e[1] : void 0,
                                done: !0
                            }
                        }([e, A])
                    }
                }
            }
            for (var v = function() {
                function r(A, e, t, n) {
                    this.left = A,
                        this.top = e,
                        this.width = t,
                        this.height = n
                }
                return r.prototype.add = function(A, e, t, n) {
                    return new r(this.left + A,this.top + e,this.width + t,this.height + n)
                }
                    ,
                    r.fromClientRect = function(A) {
                        return new r(A.left,A.top,A.width,A.height)
                    }
                    ,
                    r
            }(), N = function(A) {
                return v.fromClientRect(A.getBoundingClientRect())
            }, u = function(A) {
                for (var e = [], t = 0, n = A.length; t < n; ) {
                    var r = A.charCodeAt(t++);
                    if (55296 <= r && r <= 56319 && t < n) {
                        var o = A.charCodeAt(t++);
                        56320 == (64512 & o) ? e.push(((1023 & r) << 10) + (1023 & o) + 65536) : (e.push(r),
                            t--)
                    } else
                        e.push(r)
                }
                return e
            }, Q = function() {
                for (var A = [], e = 0; e < arguments.length; e++)
                    A[e] = arguments[e];
                if (String.fromCodePoint)
                    return String.fromCodePoint.apply(String, A);
                var t = A.length;
                if (!t)
                    return "";
                for (var n = [], r = -1, o = ""; ++r < t; ) {
                    var s = A[r];
                    s <= 65535 ? n.push(s) : (s -= 65536,
                        n.push(55296 + (s >> 10), s % 1024 + 56320)),
                    (r + 1 === t || 16384 < n.length) && (o += String.fromCharCode.apply(String, n),
                        n.length = 0)
                }
                return o
            }, A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", B = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), t = 0; t < A.length; t++)
                B[A.charCodeAt(t)] = t;
            var p, i = function(A) {
                var e, t, n, r, o, s = .75 * A.length, i = A.length, a = 0;
                "=" === A[A.length - 1] && (s--,
                "=" === A[A.length - 2] && s--);
                var c = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.slice ? new ArrayBuffer(s) : new Array(s)
                    , u = Array.isArray(c) ? c : new Uint8Array(c);
                for (e = 0; e < i; e += 4)
                    t = B[A.charCodeAt(e)],
                        n = B[A.charCodeAt(e + 1)],
                        r = B[A.charCodeAt(e + 2)],
                        o = B[A.charCodeAt(e + 3)],
                        u[a++] = t << 2 | n >> 4,
                        u[a++] = (15 & n) << 4 | r >> 2,
                        u[a++] = (3 & r) << 6 | 63 & o;
                return c
            }, a = function(A) {
                for (var e = A.length, t = [], n = 0; n < e; n += 2)
                    t.push(A[n + 1] << 8 | A[n]);
                return t
            }, l = function(A) {
                for (var e = A.length, t = [], n = 0; n < e; n += 4)
                    t.push(A[n + 3] << 24 | A[n + 2] << 16 | A[n + 1] << 8 | A[n]);
                return t
            }, d = function(A, e, t) {
                return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t))
            }, w = function(A, e, t) {
                return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t))
            }, h = function() {
                function A(A, e, t, n, r, o) {
                    this.initialValue = A,
                        this.errorValue = e,
                        this.highStart = t,
                        this.highValueIndex = n,
                        this.index = r,
                        this.data = o
                }
                return A.prototype.get = function(A) {
                    var e;
                    if (0 <= A) {
                        if (A < 55296 || 56319 < A && A <= 65535)
                            return e = ((e = this.index[A >> 5]) << 2) + (31 & A),
                                this.data[e];
                        if (A <= 65535)
                            return e = ((e = this.index[2048 + (A - 55296 >> 5)]) << 2) + (31 & A),
                                this.data[e];
                        if (A < this.highStart)
                            return e = 2080 + (A >> 11),
                                e = this.index[e],
                                e += A >> 5 & 63,
                                e = ((e = this.index[e]) << 2) + (31 & A),
                                this.data[e];
                        if (A <= 1114111)
                            return this.data[this.highValueIndex]
                    }
                    return this.errorValue
                }
                    ,
                    A
            }(), f = 10, g = 13, U = 15, C = 17, E = 18, m = 19, F = 20, H = 21, K = 22, y = 24, b = 25, I = 26, T = 27, R = 28, O = 30, L = 32, j = 33, M = 34, x = 35, D = 37, P = 38, k = 39, V = 40, z = 42, X = "×", G = function(A) {
                var e = i(A)
                    , t = Array.isArray(e) ? l(e) : new Uint32Array(e)
                    , n = Array.isArray(e) ? a(e) : new Uint16Array(e)
                    , r = 24
                    , o = d(n, r / 2, t[4] / 2)
                    , s = t[5] === 2 ? d(n, (r + t[4]) / 2) : w(t, Math.ceil((r + t[4]) / 4));
                return new h(t[0],t[1],t[2],t[3],o,s)
            }("KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA"), J = [O, 36], Y = [1, 2, 3, 5], W = [f, 8], q = [T, I], Z = Y.concat(W), $ = [P, k, V, M, x], AA = [U, g], eA = function(A, e, t, n) {
                var r = n[t];
                if (Array.isArray(A) ? -1 !== A.indexOf(r) : A === r)
                    for (var o = t; o <= n.length; ) {
                        var s = n[++o];
                        if (s === e)
                            return !0;
                        if (s !== f)
                            break
                    }
                if (r === f)
                    for (var o = t; 0 < o; ) {
                        var i = n[--o];
                        if (Array.isArray(A) ? -1 !== A.indexOf(i) : A === i)
                            for (var a = t; a <= n.length; ) {
                                var s = n[++a];
                                if (s === e)
                                    return !0;
                                if (s !== f)
                                    break
                            }
                        if (i !== f)
                            break
                    }
                return !1
            }, tA = function(A, e) {
                for (var t = A; 0 <= t; ) {
                    var n = e[t];
                    if (n !== f)
                        return n;
                    t--
                }
                return 0
            }, nA = function(A, e, t, n, r) {
                if (0 === t[n])
                    return X;
                var o = n - 1;
                if (Array.isArray(r) && !0 === r[o])
                    return X;
                var s = o - 1
                    , i = 1 + o
                    , a = e[o]
                    , c = 0 <= s ? e[s] : 0
                    , u = e[i];
                if (2 === a && 3 === u)
                    return X;
                if (-1 !== Y.indexOf(a))
                    return "!";
                if (-1 !== Y.indexOf(u))
                    return X;
                if (-1 !== W.indexOf(u))
                    return X;
                if (8 === tA(o, e))
                    return "÷";
                if (11 === G.get(A[o]) && (u === D || u === L || u === j))
                    return X;
                if (7 === a || 7 === u)
                    return X;
                if (9 === a)
                    return X;
                if (-1 === [f, g, U].indexOf(a) && 9 === u)
                    return X;
                if (-1 !== [C, E, m, y, R].indexOf(u))
                    return X;
                if (tA(o, e) === K)
                    return X;
                if (eA(23, K, o, e))
                    return X;
                if (eA([C, E], H, o, e))
                    return X;
                if (eA(12, 12, o, e))
                    return X;
                if (a === f)
                    return "÷";
                if (23 === a || 23 === u)
                    return X;
                if (16 === u || 16 === a)
                    return "÷";
                if (-1 !== [g, U, H].indexOf(u) || 14 === a)
                    return X;
                if (36 === c && -1 !== AA.indexOf(a))
                    return X;
                if (a === R && 36 === u)
                    return X;
                if (u === F && -1 !== J.concat(F, m, b, D, L, j).indexOf(a))
                    return X;
                if (-1 !== J.indexOf(u) && a === b || -1 !== J.indexOf(a) && u === b)
                    return X;
                if (a === T && -1 !== [D, L, j].indexOf(u) || -1 !== [D, L, j].indexOf(a) && u === I)
                    return X;
                if (-1 !== J.indexOf(a) && -1 !== q.indexOf(u) || -1 !== q.indexOf(a) && -1 !== J.indexOf(u))
                    return X;
                if (-1 !== [T, I].indexOf(a) && (u === b || -1 !== [K, U].indexOf(u) && e[1 + i] === b) || -1 !== [K, U].indexOf(a) && u === b || a === b && -1 !== [b, R, y].indexOf(u))
                    return X;
                if (-1 !== [b, R, y, C, E].indexOf(u))
                    for (var B = o; 0 <= B; ) {
                        var l = e[B];
                        if (l === b)
                            return X;
                        if (-1 === [R, y].indexOf(l))
                            break;
                        B--
                    }
                if (-1 !== [T, I].indexOf(u))
                    for (var B = -1 !== [C, E].indexOf(a) ? s : o; 0 <= B; ) {
                        var l = e[B];
                        if (l === b)
                            return X;
                        if (-1 === [R, y].indexOf(l))
                            break;
                        B--
                    }
                if (P === a && -1 !== [P, k, M, x].indexOf(u) || -1 !== [k, M].indexOf(a) && -1 !== [k, V].indexOf(u) || -1 !== [V, x].indexOf(a) && u === V)
                    return X;
                if (-1 !== $.indexOf(a) && -1 !== [F, I].indexOf(u) || -1 !== $.indexOf(u) && a === T)
                    return X;
                if (-1 !== J.indexOf(a) && -1 !== J.indexOf(u))
                    return X;
                if (a === y && -1 !== J.indexOf(u))
                    return X;
                if (-1 !== J.concat(b).indexOf(a) && u === K || -1 !== J.concat(b).indexOf(u) && a === E)
                    return X;
                if (41 === a && 41 === u) {
                    for (var d = t[o], w = 1; 0 < d && 41 === e[--d]; )
                        w++;
                    if (w % 2 != 0)
                        return X
                }
                return a === L && u === j ? X : "÷"
            }, rA = function(t, A) {
                var e = function(A, r) {
                    if (r === void 0) {
                        r = "strict"
                    }
                    var o = []
                        , s = []
                        , i = [];
                    return A.forEach(function(A, e) {
                        var t = G.get(A);
                        if (50 < t ? (i.push(!0),
                            t -= 50) : i.push(!1),
                        -1 !== ["normal", "auto", "loose"].indexOf(r) && -1 !== [8208, 8211, 12316, 12448].indexOf(A))
                            return s.push(e),
                                o.push(16);
                        if (4 !== t && 11 !== t)
                            return s.push(e),
                                31 === t ? o.push("strict" === r ? H : D) : t === z ? o.push(O) : 29 === t ? o.push(O) : 43 === t ? 131072 <= A && A <= 196605 || 196608 <= A && A <= 262141 ? o.push(D) : o.push(O) : void o.push(t);
                        if (0 === e)
                            return s.push(e),
                                o.push(O);
                        var n = o[e - 1];
                        return -1 === Z.indexOf(n) ? (s.push(s[e - 1]),
                            o.push(n)) : (s.push(e),
                            o.push(O))
                    }),
                        [s, o, i]
                }(t, (A = A || {
                    lineBreak: "normal",
                    wordBreak: "normal"
                }).lineBreak)
                    , n = e[0]
                    , r = e[1]
                    , o = e[2];
                "break-all" !== A.wordBreak && "break-word" !== A.wordBreak || (r = r.map(function(A) {
                    return -1 !== [b, O, z].indexOf(A) ? D : A
                }));
                var s = "keep-all" === A.wordBreak ? o.map(function(A, e) {
                    return A && 19968 <= t[e] && t[e] <= 40959
                }) : void 0;
                return [n, r, s]
            }, oA = function() {
                function A(A, e, t, n) {
                    this.codePoints = A,
                        this.required = "!" === e,
                        this.start = t,
                        this.end = n
                }
                return A.prototype.slice = function() {
                    return Q.apply(void 0, this.codePoints.slice(this.start, this.end))
                }
                    ,
                    A
            }();
            !function(A) {
                A[A.STRING_TOKEN = 0] = "STRING_TOKEN",
                    A[A.BAD_STRING_TOKEN = 1] = "BAD_STRING_TOKEN",
                    A[A.LEFT_PARENTHESIS_TOKEN = 2] = "LEFT_PARENTHESIS_TOKEN",
                    A[A.RIGHT_PARENTHESIS_TOKEN = 3] = "RIGHT_PARENTHESIS_TOKEN",
                    A[A.COMMA_TOKEN = 4] = "COMMA_TOKEN",
                    A[A.HASH_TOKEN = 5] = "HASH_TOKEN",
                    A[A.DELIM_TOKEN = 6] = "DELIM_TOKEN",
                    A[A.AT_KEYWORD_TOKEN = 7] = "AT_KEYWORD_TOKEN",
                    A[A.PREFIX_MATCH_TOKEN = 8] = "PREFIX_MATCH_TOKEN",
                    A[A.DASH_MATCH_TOKEN = 9] = "DASH_MATCH_TOKEN",
                    A[A.INCLUDE_MATCH_TOKEN = 10] = "INCLUDE_MATCH_TOKEN",
                    A[A.LEFT_CURLY_BRACKET_TOKEN = 11] = "LEFT_CURLY_BRACKET_TOKEN",
                    A[A.RIGHT_CURLY_BRACKET_TOKEN = 12] = "RIGHT_CURLY_BRACKET_TOKEN",
                    A[A.SUFFIX_MATCH_TOKEN = 13] = "SUFFIX_MATCH_TOKEN",
                    A[A.SUBSTRING_MATCH_TOKEN = 14] = "SUBSTRING_MATCH_TOKEN",
                    A[A.DIMENSION_TOKEN = 15] = "DIMENSION_TOKEN",
                    A[A.PERCENTAGE_TOKEN = 16] = "PERCENTAGE_TOKEN",
                    A[A.NUMBER_TOKEN = 17] = "NUMBER_TOKEN",
                    A[A.FUNCTION = 18] = "FUNCTION",
                    A[A.FUNCTION_TOKEN = 19] = "FUNCTION_TOKEN",
                    A[A.IDENT_TOKEN = 20] = "IDENT_TOKEN",
                    A[A.COLUMN_TOKEN = 21] = "COLUMN_TOKEN",
                    A[A.URL_TOKEN = 22] = "URL_TOKEN",
                    A[A.BAD_URL_TOKEN = 23] = "BAD_URL_TOKEN",
                    A[A.CDC_TOKEN = 24] = "CDC_TOKEN",
                    A[A.CDO_TOKEN = 25] = "CDO_TOKEN",
                    A[A.COLON_TOKEN = 26] = "COLON_TOKEN",
                    A[A.SEMICOLON_TOKEN = 27] = "SEMICOLON_TOKEN",
                    A[A.LEFT_SQUARE_BRACKET_TOKEN = 28] = "LEFT_SQUARE_BRACKET_TOKEN",
                    A[A.RIGHT_SQUARE_BRACKET_TOKEN = 29] = "RIGHT_SQUARE_BRACKET_TOKEN",
                    A[A.UNICODE_RANGE_TOKEN = 30] = "UNICODE_RANGE_TOKEN",
                    A[A.WHITESPACE_TOKEN = 31] = "WHITESPACE_TOKEN",
                    A[A.EOF_TOKEN = 32] = "EOF_TOKEN"
            }(p = p || {});
            var sA = 45
                , r = 128
                , iA = 43
                , aA = 46
                , o = 97
                , cA = 101
                , s = 122
                , uA = 65
                , BA = 69
                , lA = 90
                , dA = function(A) {
                return 48 <= A && A <= 57
            }
                , wA = function(A) {
                return dA(A) || 65 <= A && A <= 70 || 97 <= A && A <= 102
            }
                , QA = function(A) {
                return function(A) {
                    return A >= o && A <= s
                }(A) || function(A) {
                    return A >= uA && A <= lA
                }(A)
            }
                , hA = function(A) {
                return 10 === A || 9 === A || 32 === A
            }
                , fA = function(A) {
                return QA(A) || function(A) {
                    return A >= r
                }(A) || 95 === A
            }
                , gA = function(A) {
                return fA(A) || dA(A) || 45 === A
            }
                , pA = function(A, e) {
                return 92 === A && 10 !== e
            }
                , UA = function(A, e, t) {
                return 45 === A ? fA(e) || pA(e, t) : !!fA(A) || !(92 !== A || !pA(A, e))
            }
                , CA = function(A, e, t) {
                return 43 === A || 45 === A ? !!dA(e) || 46 === e && dA(t) : dA(46 === A ? e : A)
            }
                , EA = {
                type: p.LEFT_PARENTHESIS_TOKEN
            }
                , mA = {
                type: p.RIGHT_PARENTHESIS_TOKEN
            }
                , FA = {
                type: p.COMMA_TOKEN
            }
                , HA = {
                type: p.SUFFIX_MATCH_TOKEN
            }
                , _A = {
                type: p.PREFIX_MATCH_TOKEN
            }
                , vA = {
                type: p.COLUMN_TOKEN
            }
                , NA = {
                type: p.DASH_MATCH_TOKEN
            }
                , KA = {
                type: p.INCLUDE_MATCH_TOKEN
            }
                , yA = {
                type: p.LEFT_CURLY_BRACKET_TOKEN
            }
                , bA = {
                type: p.RIGHT_CURLY_BRACKET_TOKEN
            }
                , IA = {
                type: p.SUBSTRING_MATCH_TOKEN
            }
                , TA = {
                type: p.BAD_URL_TOKEN
            }
                , RA = {
                type: p.BAD_STRING_TOKEN
            }
                , OA = {
                type: p.CDO_TOKEN
            }
                , SA = {
                type: p.CDC_TOKEN
            }
                , LA = {
                type: p.COLON_TOKEN
            }
                , jA = {
                type: p.SEMICOLON_TOKEN
            }
                , MA = {
                type: p.LEFT_SQUARE_BRACKET_TOKEN
            }
                , xA = {
                type: p.RIGHT_SQUARE_BRACKET_TOKEN
            }
                , DA = {
                type: p.WHITESPACE_TOKEN
            }
                , PA = {
                type: p.EOF_TOKEN
            }
                , kA = function() {
                function A() {
                    this._value = []
                }
                return A.prototype.write = function(A) {
                    this._value = this._value.concat(u(A))
                }
                    ,
                    A.prototype.read = function() {
                        for (var A = [], e = this.consumeToken(); e !== PA; )
                            A.push(e),
                                e = this.consumeToken();
                        return A
                    }
                    ,
                    A.prototype.consumeToken = function() {
                        var A = this.consumeCodePoint();
                        switch (A) {
                            case 34:
                                return this.consumeStringToken(34);
                            case 35:
                                var e = this.peekCodePoint(0)
                                    , t = this.peekCodePoint(1)
                                    , n = this.peekCodePoint(2);
                                if (gA(e) || pA(t, n)) {
                                    var r = UA(e, t, n) ? 2 : 1
                                        , o = this.consumeName();
                                    return {
                                        type: p.HASH_TOKEN,
                                        value: o,
                                        flags: r
                                    }
                                }
                                break;
                            case 36:
                                if (61 === this.peekCodePoint(0))
                                    return this.consumeCodePoint(),
                                        HA;
                                break;
                            case 39:
                                return this.consumeStringToken(39);
                            case 40:
                                return EA;
                            case 41:
                                return mA;
                            case 42:
                                if (61 === this.peekCodePoint(0))
                                    return this.consumeCodePoint(),
                                        IA;
                                break;
                            case 43:
                                if (CA(A, this.peekCodePoint(0), this.peekCodePoint(1)))
                                    return this.reconsumeCodePoint(A),
                                        this.consumeNumericToken();
                                break;
                            case 44:
                                return FA;
                            case 45:
                                var s = A
                                    , i = this.peekCodePoint(0)
                                    , a = this.peekCodePoint(1);
                                if (CA(s, i, a))
                                    return this.reconsumeCodePoint(A),
                                        this.consumeNumericToken();
                                if (UA(s, i, a))
                                    return this.reconsumeCodePoint(A),
                                        this.consumeIdentLikeToken();
                                if (45 === i && 62 === a)
                                    return this.consumeCodePoint(),
                                        this.consumeCodePoint(),
                                        SA;
                                break;
                            case 46:
                                if (CA(A, this.peekCodePoint(0), this.peekCodePoint(1)))
                                    return this.reconsumeCodePoint(A),
                                        this.consumeNumericToken();
                                break;
                            case 47:
                                if (42 === this.peekCodePoint(0))
                                    for (this.consumeCodePoint(); ; ) {
                                        var c = this.consumeCodePoint();
                                        if (42 === c && 47 === (c = this.consumeCodePoint()))
                                            return this.consumeToken();
                                        if (-1 === c)
                                            return this.consumeToken()
                                    }
                                break;
                            case 58:
                                return LA;
                            case 59:
                                return jA;
                            case 60:
                                if (33 === this.peekCodePoint(0) && 45 === this.peekCodePoint(1) && 45 === this.peekCodePoint(2))
                                    return this.consumeCodePoint(),
                                        this.consumeCodePoint(),
                                        OA;
                                break;
                            case 64:
                                var u = this.peekCodePoint(0)
                                    , B = this.peekCodePoint(1)
                                    , l = this.peekCodePoint(2);
                                if (UA(u, B, l)) {
                                    var o = this.consumeName();
                                    return {
                                        type: p.AT_KEYWORD_TOKEN,
                                        value: o
                                    }
                                }
                                break;
                            case 91:
                                return MA;
                            case 92:
                                if (pA(A, this.peekCodePoint(0)))
                                    return this.reconsumeCodePoint(A),
                                        this.consumeIdentLikeToken();
                                break;
                            case 93:
                                return xA;
                            case 61:
                                if (61 === this.peekCodePoint(0))
                                    return this.consumeCodePoint(),
                                        _A;
                                break;
                            case 123:
                                return yA;
                            case 125:
                                return bA;
                            case 117:
                            case 85:
                                var d = this.peekCodePoint(0)
                                    , w = this.peekCodePoint(1);
                                return 43 !== d || !wA(w) && 63 !== w || (this.consumeCodePoint(),
                                    this.consumeUnicodeRangeToken()),
                                    this.reconsumeCodePoint(A),
                                    this.consumeIdentLikeToken();
                            case 124:
                                if (61 === this.peekCodePoint(0))
                                    return this.consumeCodePoint(),
                                        NA;
                                if (124 === this.peekCodePoint(0))
                                    return this.consumeCodePoint(),
                                        vA;
                                break;
                            case 126:
                                if (61 === this.peekCodePoint(0))
                                    return this.consumeCodePoint(),
                                        KA;
                                break;
                            case -1:
                                return PA
                        }
                        return hA(A) ? (this.consumeWhiteSpace(),
                            DA) : dA(A) ? (this.reconsumeCodePoint(A),
                            this.consumeNumericToken()) : fA(A) ? (this.reconsumeCodePoint(A),
                            this.consumeIdentLikeToken()) : {
                            type: p.DELIM_TOKEN,
                            value: Q(A)
                        }
                    }
                    ,
                    A.prototype.consumeCodePoint = function() {
                        var A = this._value.shift();
                        return void 0 === A ? -1 : A
                    }
                    ,
                    A.prototype.reconsumeCodePoint = function(A) {
                        this._value.unshift(A)
                    }
                    ,
                    A.prototype.peekCodePoint = function(A) {
                        return A >= this._value.length ? -1 : this._value[A]
                    }
                    ,
                    A.prototype.consumeUnicodeRangeToken = function() {
                        for (var A = [], e = this.consumeCodePoint(); wA(e) && A.length < 6; )
                            A.push(e),
                                e = this.consumeCodePoint();
                        for (var t = !1; 63 === e && A.length < 6; )
                            A.push(e),
                                e = this.consumeCodePoint(),
                                t = !0;
                        if (t) {
                            var n = parseInt(Q.apply(void 0, A.map(function(A) {
                                return 63 === A ? 48 : A
                            })), 16)
                                , r = parseInt(Q.apply(void 0, A.map(function(A) {
                                return 63 === A ? 70 : A
                            })), 16);
                            return {
                                type: p.UNICODE_RANGE_TOKEN,
                                start: n,
                                end: r
                            }
                        }
                        var o = parseInt(Q.apply(void 0, A), 16);
                        if (45 === this.peekCodePoint(0) && wA(this.peekCodePoint(1))) {
                            this.consumeCodePoint(),
                                e = this.consumeCodePoint();
                            for (var s = []; wA(e) && s.length < 6; )
                                s.push(e),
                                    e = this.consumeCodePoint();
                            var r = parseInt(Q.apply(void 0, s), 16);
                            return {
                                type: p.UNICODE_RANGE_TOKEN,
                                start: o,
                                end: r
                            }
                        }
                        return {
                            type: p.UNICODE_RANGE_TOKEN,
                            start: o,
                            end: o
                        }
                    }
                    ,
                    A.prototype.consumeIdentLikeToken = function() {
                        var A = this.consumeName();
                        return "url" === A.toLowerCase() && 40 === this.peekCodePoint(0) ? (this.consumeCodePoint(),
                            this.consumeUrlToken()) : 40 === this.peekCodePoint(0) ? (this.consumeCodePoint(),
                            {
                                type: p.FUNCTION_TOKEN,
                                value: A
                            }) : {
                            type: p.IDENT_TOKEN,
                            value: A
                        }
                    }
                    ,
                    A.prototype.consumeUrlToken = function() {
                        var A = [];
                        if (this.consumeWhiteSpace(),
                        -1 === this.peekCodePoint(0))
                            return {
                                type: p.URL_TOKEN,
                                value: ""
                            };
                        var e, t = this.peekCodePoint(0);
                        if (39 === t || 34 === t) {
                            var n = this.consumeStringToken(this.consumeCodePoint());
                            return n.type === p.STRING_TOKEN && (this.consumeWhiteSpace(),
                            -1 === this.peekCodePoint(0) || 41 === this.peekCodePoint(0)) ? (this.consumeCodePoint(),
                                {
                                    type: p.URL_TOKEN,
                                    value: n.value
                                }) : (this.consumeBadUrlRemnants(),
                                TA)
                        }
                        for (; ; ) {
                            var r = this.consumeCodePoint();
                            if (-1 === r || 41 === r)
                                return {
                                    type: p.URL_TOKEN,
                                    value: Q.apply(void 0, A)
                                };
                            if (hA(r))
                                return this.consumeWhiteSpace(),
                                    -1 === this.peekCodePoint(0) || 41 === this.peekCodePoint(0) ? (this.consumeCodePoint(),
                                        {
                                            type: p.URL_TOKEN,
                                            value: Q.apply(void 0, A)
                                        }) : (this.consumeBadUrlRemnants(),
                                        TA);
                            if (34 === r || 39 === r || 40 === r || (0 <= (e = r) && e <= 8 || 11 === e || 14 <= e && e <= 31 || 127 === e))
                                return this.consumeBadUrlRemnants(),
                                    TA;
                            if (92 === r) {
                                if (!pA(r, this.peekCodePoint(0)))
                                    return this.consumeBadUrlRemnants(),
                                        TA;
                                A.push(this.consumeEscapedCodePoint())
                            } else
                                A.push(r)
                        }
                    }
                    ,
                    A.prototype.consumeWhiteSpace = function() {
                        for (; hA(this.peekCodePoint(0)); )
                            this.consumeCodePoint()
                    }
                    ,
                    A.prototype.consumeBadUrlRemnants = function() {
                        for (; ; ) {
                            var A = this.consumeCodePoint();
                            if (41 === A || -1 === A)
                                return;
                            pA(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint()
                        }
                    }
                    ,
                    A.prototype.consumeStringSlice = function(A) {
                        for (var e = ""; 0 < A; ) {
                            var t = Math.min(6e4, A);
                            e += Q.apply(void 0, this._value.splice(0, t)),
                                A -= t
                        }
                        return this._value.shift(),
                            e
                    }
                    ,
                    A.prototype.consumeStringToken = function(A) {
                        for (var e = "", t = 0; ; ) {
                            var n = this._value[t];
                            if (-1 === n || void 0 === n || n === A)
                                return e += this.consumeStringSlice(t),
                                    {
                                        type: p.STRING_TOKEN,
                                        value: e
                                    };
                            if (10 === n)
                                return this._value.splice(0, t),
                                    RA;
                            if (92 === n) {
                                var r = this._value[t + 1];
                                -1 !== r && void 0 !== r && (10 === r ? (e += this.consumeStringSlice(t),
                                    t = -1,
                                    this._value.shift()) : pA(n, r) && (e += this.consumeStringSlice(t),
                                    e += Q(this.consumeEscapedCodePoint()),
                                    t = -1))
                            }
                            t++
                        }
                    }
                    ,
                    A.prototype.consumeNumber = function() {
                        var A = []
                            , e = 4
                            , t = this.peekCodePoint(0);
                        for (43 !== t && 45 !== t || A.push(this.consumeCodePoint()); dA(this.peekCodePoint(0)); )
                            A.push(this.consumeCodePoint());
                        t = this.peekCodePoint(0);
                        var n = this.peekCodePoint(1);
                        if (46 === t && dA(n))
                            for (A.push(this.consumeCodePoint(), this.consumeCodePoint()),
                                     e = 8; dA(this.peekCodePoint(0)); )
                                A.push(this.consumeCodePoint());
                        t = this.peekCodePoint(0),
                            n = this.peekCodePoint(1);
                        var r = this.peekCodePoint(2);
                        if ((69 === t || 101 === t) && ((43 === n || 45 === n) && dA(r) || dA(n)))
                            for (A.push(this.consumeCodePoint(), this.consumeCodePoint()),
                                     e = 8; dA(this.peekCodePoint(0)); )
                                A.push(this.consumeCodePoint());
                        return [function(A) {
                            var e = 0
                                , t = 1;
                            if (A[e] === iA || A[e] === sA) {
                                if (A[e] === sA) {
                                    t = -1
                                }
                                e++
                            }
                            var n = [];
                            while (dA(A[e])) {
                                n.push(A[e++])
                            }
                            var r = n.length ? parseInt(Q.apply(void 0, n), 10) : 0;
                            if (A[e] === aA) {
                                e++
                            }
                            var o = [];
                            while (dA(A[e])) {
                                o.push(A[e++])
                            }
                            var s = o.length
                                , i = s ? parseInt(Q.apply(void 0, o), 10) : 0;
                            if (A[e] === BA || A[e] === cA) {
                                e++
                            }
                            var a = 1;
                            if (A[e] === iA || A[e] === sA) {
                                if (A[e] === sA) {
                                    a = -1
                                }
                                e++
                            }
                            var c = [];
                            while (dA(A[e])) {
                                c.push(A[e++])
                            }
                            var u = c.length ? parseInt(Q.apply(void 0, c), 10) : 0;
                            return t * (r + i * Math.pow(10, -s)) * Math.pow(10, a * u)
                        }(A), e]
                    }
                    ,
                    A.prototype.consumeNumericToken = function() {
                        var A = this.consumeNumber()
                            , e = A[0]
                            , t = A[1]
                            , n = this.peekCodePoint(0)
                            , r = this.peekCodePoint(1)
                            , o = this.peekCodePoint(2);
                        if (UA(n, r, o)) {
                            var s = this.consumeName();
                            return {
                                type: p.DIMENSION_TOKEN,
                                number: e,
                                flags: t,
                                unit: s
                            }
                        }
                        return 37 === n ? (this.consumeCodePoint(),
                            {
                                type: p.PERCENTAGE_TOKEN,
                                number: e,
                                flags: t
                            }) : {
                            type: p.NUMBER_TOKEN,
                            number: e,
                            flags: t
                        }
                    }
                    ,
                    A.prototype.consumeEscapedCodePoint = function() {
                        var A = this.consumeCodePoint();
                        if (wA(A)) {
                            for (var e = Q(A); wA(this.peekCodePoint(0)) && e.length < 6; )
                                e += Q(this.consumeCodePoint());
                            hA(this.peekCodePoint(0)) && this.consumeCodePoint();
                            var t = parseInt(e, 16);
                            return 0 === t || function(A) {
                                return A >= 55296 && A <= 57343
                            }(t) || 1114111 < t ? 65533 : t
                        }
                        return -1 === A ? 65533 : A
                    }
                    ,
                    A.prototype.consumeName = function() {
                        for (var A = ""; ; ) {
                            var e = this.consumeCodePoint();
                            if (gA(e))
                                A += Q(e);
                            else {
                                if (!pA(e, this.peekCodePoint(0)))
                                    return this.reconsumeCodePoint(e),
                                        A;
                                A += Q(this.consumeEscapedCodePoint())
                            }
                        }
                    }
                    ,
                    A
            }()
                , VA = function() {
                function t(A) {
                    this._tokens = A
                }
                return t.create = function(A) {
                    var e = new kA;
                    return e.write(A),
                        new t(e.read())
                }
                    ,
                    t.parseValue = function(A) {
                        return t.create(A).parseComponentValue()
                    }
                    ,
                    t.parseValues = function(A) {
                        return t.create(A).parseComponentValues()
                    }
                    ,
                    t.prototype.parseComponentValue = function() {
                        for (var A = this.consumeToken(); A.type === p.WHITESPACE_TOKEN; )
                            A = this.consumeToken();
                        if (A.type === p.EOF_TOKEN)
                            throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
                        this.reconsumeToken(A);
                        for (var e = this.consumeComponentValue(); (A = this.consumeToken()).type === p.WHITESPACE_TOKEN; )
                            ;
                        if (A.type === p.EOF_TOKEN)
                            return e;
                        throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")
                    }
                    ,
                    t.prototype.parseComponentValues = function() {
                        for (var A = []; ; ) {
                            var e = this.consumeComponentValue();
                            if (e.type === p.EOF_TOKEN)
                                return A;
                            A.push(e),
                                A.push()
                        }
                    }
                    ,
                    t.prototype.consumeComponentValue = function() {
                        var A = this.consumeToken();
                        switch (A.type) {
                            case p.LEFT_CURLY_BRACKET_TOKEN:
                            case p.LEFT_SQUARE_BRACKET_TOKEN:
                            case p.LEFT_PARENTHESIS_TOKEN:
                                return this.consumeSimpleBlock(A.type);
                            case p.FUNCTION_TOKEN:
                                return this.consumeFunction(A)
                        }
                        return A
                    }
                    ,
                    t.prototype.consumeSimpleBlock = function(A) {
                        for (var e = {
                            type: A,
                            values: []
                        }, t = this.consumeToken(); ; ) {
                            if (t.type === p.EOF_TOKEN || $A(t, A))
                                return e;
                            this.reconsumeToken(t),
                                e.values.push(this.consumeComponentValue()),
                                t = this.consumeToken()
                        }
                    }
                    ,
                    t.prototype.consumeFunction = function(A) {
                        for (var e = {
                            name: A.value,
                            values: [],
                            type: p.FUNCTION
                        }; ; ) {
                            var t = this.consumeToken();
                            if (t.type === p.EOF_TOKEN || t.type === p.RIGHT_PARENTHESIS_TOKEN)
                                return e;
                            this.reconsumeToken(t),
                                e.values.push(this.consumeComponentValue())
                        }
                    }
                    ,
                    t.prototype.consumeToken = function() {
                        var A = this._tokens.shift();
                        return void 0 === A ? PA : A
                    }
                    ,
                    t.prototype.reconsumeToken = function(A) {
                        this._tokens.unshift(A)
                    }
                    ,
                    t
            }()
                , zA = function(A) {
                return A.type === p.DIMENSION_TOKEN
            }
                , XA = function(A) {
                return A.type === p.NUMBER_TOKEN
            }
                , GA = function(A) {
                return A.type === p.IDENT_TOKEN
            }
                , JA = function(A) {
                return A.type === p.STRING_TOKEN
            }
                , YA = function(A, e) {
                return GA(A) && A.value === e
            }
                , WA = function(A) {
                return A.type !== p.WHITESPACE_TOKEN
            }
                , qA = function(A) {
                return A.type !== p.WHITESPACE_TOKEN && A.type !== p.COMMA_TOKEN
            }
                , ZA = function(A) {
                var e = []
                    , t = [];
                return A.forEach(function(A) {
                    if (A.type === p.COMMA_TOKEN) {
                        if (0 === t.length)
                            throw new Error("Error parsing function args, zero tokens for arg");
                        return e.push(t),
                            void (t = [])
                    }
                    A.type !== p.WHITESPACE_TOKEN && t.push(A)
                }),
                t.length && e.push(t),
                    e
            }
                , $A = function(A, e) {
                return e === p.LEFT_CURLY_BRACKET_TOKEN && A.type === p.RIGHT_CURLY_BRACKET_TOKEN || (e === p.LEFT_SQUARE_BRACKET_TOKEN && A.type === p.RIGHT_SQUARE_BRACKET_TOKEN || e === p.LEFT_PARENTHESIS_TOKEN && A.type === p.RIGHT_PARENTHESIS_TOKEN)
            }
                , Ae = function(A) {
                return A.type === p.NUMBER_TOKEN || A.type === p.DIMENSION_TOKEN
            }
                , ee = function(A) {
                return A.type === p.PERCENTAGE_TOKEN || Ae(A)
            }
                , te = function(A) {
                return 1 < A.length ? [A[0], A[1]] : [A[0]]
            }
                , ne = {
                type: p.NUMBER_TOKEN,
                number: 0,
                flags: 4
            }
                , re = {
                type: p.PERCENTAGE_TOKEN,
                number: 50,
                flags: 4
            }
                , oe = {
                type: p.PERCENTAGE_TOKEN,
                number: 100,
                flags: 4
            }
                , se = function(A, e, t) {
                var n = A[0]
                    , r = A[1];
                return [ie(n, e), ie(void 0 !== r ? r : n, t)]
            }
                , ie = function(A, e) {
                if (A.type === p.PERCENTAGE_TOKEN)
                    return A.number / 100 * e;
                if (zA(A))
                    switch (A.unit) {
                        case "rem":
                        case "em":
                            return 16 * A.number;
                        case "px":
                        default:
                            return A.number
                    }
                return A.number
            }
                , ae = {
                name: "angle",
                parse: function(A) {
                    if (A.type === p.DIMENSION_TOKEN)
                        switch (A.unit) {
                            case "deg":
                                return Math.PI * A.number / 180;
                            case "grad":
                                return Math.PI / 200 * A.number;
                            case "rad":
                                return A.number;
                            case "turn":
                                return 2 * Math.PI * A.number
                        }
                    throw new Error("Unsupported angle type")
                }
            }
                , ce = function(A) {
                return A.type === p.DIMENSION_TOKEN && ("deg" === A.unit || "grad" === A.unit || "rad" === A.unit || "turn" === A.unit)
            }
                , ue = function(A) {
                var e = A.filter(GA).map(function(A) {
                    return A.value
                }).join(" ");
                switch (e) {
                    case "to bottom right":
                    case "to right bottom":
                    case "left top":
                    case "top left":
                        return [ne, ne];
                    case "to top":
                    case "bottom":
                        return Be(0);
                    case "to bottom left":
                    case "to left bottom":
                    case "right top":
                    case "top right":
                        return [ne, oe];
                    case "to right":
                    case "left":
                        return Be(90);
                    case "to top left":
                    case "to left top":
                    case "right bottom":
                    case "bottom right":
                        return [oe, oe];
                    case "to bottom":
                    case "top":
                        return Be(180);
                    case "to top right":
                    case "to right top":
                    case "left bottom":
                    case "bottom left":
                        return [oe, ne];
                    case "to left":
                    case "right":
                        return Be(270)
                }
                return 0
            }
                , Be = function(A) {
                return Math.PI * A / 180
            }
                , le = {
                name: "color",
                parse: function(A) {
                    if (A.type === p.FUNCTION) {
                        var e = Ee[A.name];
                        if (void 0 === e)
                            throw new Error('Attempting to parse an unsupported color function "' + A.name + '"');
                        return e(A.values)
                    }
                    if (A.type === p.HASH_TOKEN) {
                        if (3 === A.value.length) {
                            var t = A.value.substring(0, 1)
                                , n = A.value.substring(1, 2)
                                , r = A.value.substring(2, 3);
                            return Qe(parseInt(t + t, 16), parseInt(n + n, 16), parseInt(r + r, 16), 1)
                        }
                        if (4 === A.value.length) {
                            var t = A.value.substring(0, 1)
                                , n = A.value.substring(1, 2)
                                , r = A.value.substring(2, 3)
                                , o = A.value.substring(3, 4);
                            return Qe(parseInt(t + t, 16), parseInt(n + n, 16), parseInt(r + r, 16), parseInt(o + o, 16) / 255)
                        }
                        if (6 === A.value.length) {
                            var t = A.value.substring(0, 2)
                                , n = A.value.substring(2, 4)
                                , r = A.value.substring(4, 6);
                            return Qe(parseInt(t, 16), parseInt(n, 16), parseInt(r, 16), 1)
                        }
                        if (8 === A.value.length) {
                            var t = A.value.substring(0, 2)
                                , n = A.value.substring(2, 4)
                                , r = A.value.substring(4, 6)
                                , o = A.value.substring(6, 8);
                            return Qe(parseInt(t, 16), parseInt(n, 16), parseInt(r, 16), parseInt(o, 16) / 255)
                        }
                    }
                    if (A.type === p.IDENT_TOKEN) {
                        var s = me[A.value.toUpperCase()];
                        if (void 0 !== s)
                            return s
                    }
                    return me.TRANSPARENT
                }
            }
                , de = function(A) {
                return 0 == (255 & A)
            }
                , we = function(A) {
                var e = 255 & A
                    , t = 255 & A >> 8
                    , n = 255 & A >> 16
                    , r = 255 & A >> 24;
                return e < 255 ? "rgba(" + r + "," + n + "," + t + "," + e / 255 + ")" : "rgb(" + r + "," + n + "," + t + ")"
            }
                , Qe = function(A, e, t, n) {
                return (A << 24 | e << 16 | t << 8 | Math.round(255 * n) << 0) >>> 0
            }
                , he = function(A, e) {
                if (A.type === p.NUMBER_TOKEN)
                    return A.number;
                if (A.type !== p.PERCENTAGE_TOKEN)
                    return 0;
                var t = 3 === e ? 1 : 255;
                return 3 === e ? A.number / 100 * t : Math.round(A.number / 100 * t)
            }
                , fe = function(A) {
                var e = A.filter(qA);
                if (3 === e.length) {
                    var t = e.map(he)
                        , n = t[0]
                        , r = t[1]
                        , o = t[2];
                    return Qe(n, r, o, 1)
                }
                if (4 !== e.length)
                    return 0;
                var s = e.map(he)
                    , n = s[0]
                    , r = s[1]
                    , o = s[2]
                    , i = s[3];
                return Qe(n, r, o, i)
            };
            function ge(A, e, t) {
                return t < 0 && (t += 1),
                1 <= t && (t -= 1),
                    t < 1 / 6 ? (e - A) * t * 6 + A : t < .5 ? e : t < 2 / 3 ? 6 * (e - A) * (2 / 3 - t) + A : A
            }
            var pe, Ue, Ce = function(A) {
                var e = A.filter(qA)
                    , t = e[0]
                    , n = e[1]
                    , r = e[2]
                    , o = e[3]
                    , s = (t.type === p.NUMBER_TOKEN ? Be(t.number) : ae.parse(t)) / (2 * Math.PI)
                    , i = ee(n) ? n.number / 100 : 0
                    , a = ee(r) ? r.number / 100 : 0
                    , c = void 0 !== o && ee(o) ? ie(o, 1) : 1;
                if (0 == i)
                    return Qe(255 * a, 255 * a, 255 * a, 1);
                var u = a <= .5 ? a * (1 + i) : a + i - a * i
                    , B = 2 * a - u
                    , l = ge(B, u, s + 1 / 3)
                    , d = ge(B, u, s)
                    , w = ge(B, u, s - 1 / 3);
                return Qe(255 * l, 255 * d, 255 * w, c)
            }, Ee = {
                hsl: Ce,
                hsla: Ce,
                rgb: fe,
                rgba: fe
            }, me = {
                ALICEBLUE: 4042850303,
                ANTIQUEWHITE: 4209760255,
                AQUA: 16777215,
                AQUAMARINE: 2147472639,
                AZURE: 4043309055,
                BEIGE: 4126530815,
                BISQUE: 4293182719,
                BLACK: 255,
                BLANCHEDALMOND: 4293643775,
                BLUE: 65535,
                BLUEVIOLET: 2318131967,
                BROWN: 2771004159,
                BURLYWOOD: 3736635391,
                CADETBLUE: 1604231423,
                CHARTREUSE: 2147418367,
                CHOCOLATE: 3530104575,
                CORAL: 4286533887,
                CORNFLOWERBLUE: 1687547391,
                CORNSILK: 4294499583,
                CRIMSON: 3692313855,
                CYAN: 16777215,
                DARKBLUE: 35839,
                DARKCYAN: 9145343,
                DARKGOLDENROD: 3095837695,
                DARKGRAY: 2846468607,
                DARKGREEN: 6553855,
                DARKGREY: 2846468607,
                DARKKHAKI: 3182914559,
                DARKMAGENTA: 2332068863,
                DARKOLIVEGREEN: 1433087999,
                DARKORANGE: 4287365375,
                DARKORCHID: 2570243327,
                DARKRED: 2332033279,
                DARKSALMON: 3918953215,
                DARKSEAGREEN: 2411499519,
                DARKSLATEBLUE: 1211993087,
                DARKSLATEGRAY: 793726975,
                DARKSLATEGREY: 793726975,
                DARKTURQUOISE: 13554175,
                DARKVIOLET: 2483082239,
                DEEPPINK: 4279538687,
                DEEPSKYBLUE: 12582911,
                DIMGRAY: 1768516095,
                DIMGREY: 1768516095,
                DODGERBLUE: 512819199,
                FIREBRICK: 2988581631,
                FLORALWHITE: 4294635775,
                FORESTGREEN: 579543807,
                FUCHSIA: 4278255615,
                GAINSBORO: 3705462015,
                GHOSTWHITE: 4177068031,
                GOLD: 4292280575,
                GOLDENROD: 3668254975,
                GRAY: 2155905279,
                GREEN: 8388863,
                GREENYELLOW: 2919182335,
                GREY: 2155905279,
                HONEYDEW: 4043305215,
                HOTPINK: 4285117695,
                INDIANRED: 3445382399,
                INDIGO: 1258324735,
                IVORY: 4294963455,
                KHAKI: 4041641215,
                LAVENDER: 3873897215,
                LAVENDERBLUSH: 4293981695,
                LAWNGREEN: 2096890111,
                LEMONCHIFFON: 4294626815,
                LIGHTBLUE: 2916673279,
                LIGHTCORAL: 4034953471,
                LIGHTCYAN: 3774873599,
                LIGHTGOLDENRODYELLOW: 4210742015,
                LIGHTGRAY: 3553874943,
                LIGHTGREEN: 2431553791,
                LIGHTGREY: 3553874943,
                LIGHTPINK: 4290167295,
                LIGHTSALMON: 4288707327,
                LIGHTSEAGREEN: 548580095,
                LIGHTSKYBLUE: 2278488831,
                LIGHTSLATEGRAY: 2005441023,
                LIGHTSLATEGREY: 2005441023,
                LIGHTSTEELBLUE: 2965692159,
                LIGHTYELLOW: 4294959359,
                LIME: 16711935,
                LIMEGREEN: 852308735,
                LINEN: 4210091775,
                MAGENTA: 4278255615,
                MAROON: 2147483903,
                MEDIUMAQUAMARINE: 1724754687,
                MEDIUMBLUE: 52735,
                MEDIUMORCHID: 3126187007,
                MEDIUMPURPLE: 2473647103,
                MEDIUMSEAGREEN: 1018393087,
                MEDIUMSLATEBLUE: 2070474495,
                MEDIUMSPRINGGREEN: 16423679,
                MEDIUMTURQUOISE: 1221709055,
                MEDIUMVIOLETRED: 3340076543,
                MIDNIGHTBLUE: 421097727,
                MINTCREAM: 4127193855,
                MISTYROSE: 4293190143,
                MOCCASIN: 4293178879,
                NAVAJOWHITE: 4292783615,
                NAVY: 33023,
                OLDLACE: 4260751103,
                OLIVE: 2155872511,
                OLIVEDRAB: 1804477439,
                ORANGE: 4289003775,
                ORANGERED: 4282712319,
                ORCHID: 3664828159,
                PALEGOLDENROD: 4008225535,
                PALEGREEN: 2566625535,
                PALETURQUOISE: 2951671551,
                PALEVIOLETRED: 3681588223,
                PAPAYAWHIP: 4293907967,
                PEACHPUFF: 4292524543,
                PERU: 3448061951,
                PINK: 4290825215,
                PLUM: 3718307327,
                POWDERBLUE: 2967529215,
                PURPLE: 2147516671,
                REBECCAPURPLE: 1714657791,
                RED: 4278190335,
                ROSYBROWN: 3163525119,
                ROYALBLUE: 1097458175,
                SADDLEBROWN: 2336560127,
                SALMON: 4202722047,
                SANDYBROWN: 4104413439,
                SEAGREEN: 780883967,
                SEASHELL: 4294307583,
                SIENNA: 2689740287,
                SILVER: 3233857791,
                SKYBLUE: 2278484991,
                SLATEBLUE: 1784335871,
                SLATEGRAY: 1887473919,
                SLATEGREY: 1887473919,
                SNOW: 4294638335,
                SPRINGGREEN: 16744447,
                STEELBLUE: 1182971135,
                TAN: 3535047935,
                TEAL: 8421631,
                THISTLE: 3636451583,
                TOMATO: 4284696575,
                TRANSPARENT: 0,
                TURQUOISE: 1088475391,
                VIOLET: 4001558271,
                WHEAT: 4125012991,
                WHITE: 4294967295,
                WHITESMOKE: 4126537215,
                YELLOW: 4294902015,
                YELLOWGREEN: 2597139199
            };
            (function(A) {
                    A[A.VALUE = 0] = "VALUE",
                        A[A.LIST = 1] = "LIST",
                        A[A.IDENT_VALUE = 2] = "IDENT_VALUE",
                        A[A.TYPE_VALUE = 3] = "TYPE_VALUE",
                        A[A.TOKEN_VALUE = 4] = "TOKEN_VALUE"
                }
            )(pe = pe || {}),
                function(A) {
                    A[A.BORDER_BOX = 0] = "BORDER_BOX",
                        A[A.PADDING_BOX = 1] = "PADDING_BOX",
                        A[A.CONTENT_BOX = 2] = "CONTENT_BOX"
                }(Ue = Ue || {});
            var Fe, He = {
                name: "background-clip",
                initialValue: "border-box",
                prefix: !1,
                type: pe.LIST,
                parse: function(A) {
                    return A.map(function(A) {
                        if (GA(A))
                            switch (A.value) {
                                case "padding-box":
                                    return Ue.PADDING_BOX;
                                case "content-box":
                                    return Ue.CONTENT_BOX
                            }
                        return Ue.BORDER_BOX
                    })
                }
            }, _e = {
                name: "background-color",
                initialValue: "transparent",
                prefix: !1,
                type: pe.TYPE_VALUE,
                format: "color"
            }, ve = function(A) {
                var e = le.parse(A[0])
                    , t = A[1];
                return t && ee(t) ? {
                    color: e,
                    stop: t
                } : {
                    color: e,
                    stop: null
                }
            }, Ne = function(A, n) {
                var e = A[0]
                    , t = A[A.length - 1];
                null === e.stop && (e.stop = ne),
                null === t.stop && (t.stop = oe);
                for (var r = [], o = 0, s = 0; s < A.length; s++) {
                    var i = A[s].stop;
                    if (null !== i) {
                        var a = ie(i, n);
                        o < a ? r.push(a) : r.push(o),
                            o = a
                    } else
                        r.push(null)
                }
                for (var c = null, s = 0; s < r.length; s++) {
                    var u = r[s];
                    if (null === u)
                        null === c && (c = s);
                    else if (null !== c) {
                        for (var B = s - c, l = r[c - 1], d = (u - l) / (1 + B), w = 1; w <= B; w++)
                            r[c + w - 1] = d * w;
                        c = null
                    }
                }
                return A.map(function(A, e) {
                    var t = A.color;
                    return {
                        color: t,
                        stop: Math.max(Math.min(1, r[e] / n), 0)
                    }
                })
            }, Ke = function(A, e, t) {
                var n = "number" == typeof A ? A : function(A, e, t) {
                    var n = e / 2
                        , r = t / 2
                        , o = ie(A[0], e) - n
                        , s = r - ie(A[1], t);
                    return (Math.atan2(s, o) + Math.PI * 2) % (Math.PI * 2)
                }(A, e, t)
                    , r = Math.abs(e * Math.sin(n)) + Math.abs(t * Math.cos(n))
                    , o = e / 2
                    , s = t / 2
                    , i = r / 2
                    , a = Math.sin(n - Math.PI / 2) * i
                    , c = Math.cos(n - Math.PI / 2) * i;
                return [r, o - c, o + c, s - a, s + a]
            }, ye = function(A, e) {
                return Math.sqrt(A * A + e * e)
            }, be = function(A, e, o, s, i) {
                var t = [[0, 0], [0, e], [A, 0], [A, e]];
                return t.reduce(function(A, e) {
                    var t = e[0]
                        , n = e[1]
                        , r = ye(o - t, s - n);
                    return (i ? r < A.optimumDistance : r > A.optimumDistance) ? {
                        optimumCorner: e,
                        optimumDistance: r
                    } : A
                }, {
                    optimumDistance: i ? 1 / 0 : -1 / 0,
                    optimumCorner: null
                }).optimumCorner
            }, Ie = function(A) {
                var r = Be(180)
                    , o = [];
                return ZA(A).forEach(function(A, e) {
                    if (0 === e) {
                        var t = A[0];
                        if (t.type === p.IDENT_TOKEN && -1 !== ["top", "left", "right", "bottom"].indexOf(t.value))
                            return void (r = ue(A));
                        if (ce(t))
                            return void (r = (ae.parse(t) + Be(270)) % Be(360))
                    }
                    var n = ve(A);
                    o.push(n)
                }),
                    {
                        angle: r,
                        stops: o,
                        type: Fe.LINEAR_GRADIENT
                    }
            }, Te = function(A) {
                return 0 === A[0] && 255 === A[1] && 0 === A[2] && 255 === A[3]
            }, Re = function(A, e, t, n, r) {
                var o = "http://www.w3.org/2000/svg"
                    , s = document.createElementNS(o, "svg")
                    , i = document.createElementNS(o, "foreignObject");
                return s.setAttributeNS(null, "width", A.toString()),
                    s.setAttributeNS(null, "height", e.toString()),
                    i.setAttributeNS(null, "width", "100%"),
                    i.setAttributeNS(null, "height", "100%"),
                    i.setAttributeNS(null, "x", t.toString()),
                    i.setAttributeNS(null, "y", n.toString()),
                    i.setAttributeNS(null, "externalResourcesRequired", "true"),
                    s.appendChild(i),
                    i.appendChild(r),
                    s
            }, Oe = function(n) {
                return new Promise(function(A, e) {
                        var t = new Image;
                        t.onload = function() {
                            return A(t)
                        }
                            ,
                            t.onerror = e,
                            t.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent((new XMLSerializer).serializeToString(n))
                    }
                )
            }, Se = {
                get SUPPORT_RANGE_BOUNDS() {
                    var A = function(A) {
                        var e = 123;
                        if (A.createRange) {
                            var t = A.createRange();
                            if (t.getBoundingClientRect) {
                                var n = A.createElement("boundtest");
                                n.style.height = e + "px";
                                n.style.display = "block";
                                A.body.appendChild(n);
                                t.selectNode(n);
                                var r = t.getBoundingClientRect();
                                var o = Math.round(r.height);
                                A.body.removeChild(n);
                                if (o === e) {
                                    return true
                                }
                            }
                        }
                        return false
                    }(document);
                    return Object.defineProperty(Se, "SUPPORT_RANGE_BOUNDS", {
                        value: A
                    }),
                        A
                },
                get SUPPORT_SVG_DRAWING() {
                    var A = function(A) {
                        var e = new Image
                            , t = A.createElement("canvas")
                            , n = t.getContext("2d");
                        if (!n) {
                            return false
                        }
                        e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
                        try {
                            n.drawImage(e, 0, 0);
                            t.toDataURL()
                        } catch (A) {
                            return false
                        }
                        return true
                    }(document);
                    return Object.defineProperty(Se, "SUPPORT_SVG_DRAWING", {
                        value: A
                    }),
                        A
                },
                get SUPPORT_FOREIGNOBJECT_DRAWING() {
                    var A = "function" == typeof Array.from && "function" == typeof window.fetch ? function(n) {
                        var A = n.createElement("canvas")
                            , r = 100;
                        A.width = r,
                            A.height = r;
                        var o = A.getContext("2d");
                        if (!o) {
                            return Promise.reject(false)
                        }
                        o.fillStyle = "rgb(0, 255, 0)",
                            o.fillRect(0, 0, r, r);
                        var e = new Image
                            , s = A.toDataURL();
                        e.src = s;
                        var t = Re(r, r, 0, 0, e);
                        return o.fillStyle = "red",
                            o.fillRect(0, 0, r, r),
                            Oe(t).then(function(A) {
                                o.drawImage(A, 0, 0);
                                var e = o.getImageData(0, 0, r, r).data;
                                o.fillStyle = "red",
                                    o.fillRect(0, 0, r, r);
                                var t = n.createElement("div");
                                return t.style.backgroundImage = "url(" + s + ")",
                                    t.style.height = "100px",
                                    Te(e) ? Oe(Re(r, r, 0, 0, t)) : Promise.reject(!1)
                            }).then(function(A) {
                                return o.drawImage(A, 0, 0),
                                    Te(o.getImageData(0, 0, r, r).data)
                            }).catch(function() {
                                return !1
                            })
                    }(document) : Promise.resolve(!1);
                    return Object.defineProperty(Se, "SUPPORT_FOREIGNOBJECT_DRAWING", {
                        value: A
                    }),
                        A
                },
                get SUPPORT_CORS_IMAGES() {
                    var A = void 0 !== (new Image).crossOrigin;
                    return Object.defineProperty(Se, "SUPPORT_CORS_IMAGES", {
                        value: A
                    }),
                        A
                },
                get SUPPORT_RESPONSE_TYPE() {
                    var A = "string" == typeof (new XMLHttpRequest).responseType;
                    return Object.defineProperty(Se, "SUPPORT_RESPONSE_TYPE", {
                        value: A
                    }),
                        A
                },
                get SUPPORT_CORS_XHR() {
                    var A = "withCredentials"in new XMLHttpRequest;
                    return Object.defineProperty(Se, "SUPPORT_CORS_XHR", {
                        value: A
                    }),
                        A
                }
            }, Le = function() {
                function t(A) {
                    var e = A.id
                        , t = A.enabled;
                    this.id = e,
                        this.enabled = t,
                        this.start = Date.now()
                }
                return t.prototype.debug = function() {
                    for (var A = [], e = 0; e < arguments.length; e++)
                        A[e] = arguments[e];
                    this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.debug ? console.debug.apply(console, [this.id, this.getTime() + "ms"].concat(A)) : this.info.apply(this, A))
                }
                    ,
                    t.prototype.getTime = function() {
                        return Date.now() - this.start
                    }
                    ,
                    t.create = function(A) {
                        t.instances[A.id] = new t(A)
                    }
                    ,
                    t.destroy = function(A) {
                        delete t.instances[A]
                    }
                    ,
                    t.getInstance = function(A) {
                        var e = t.instances[A];
                        if (void 0 === e)
                            throw new Error("No logger instance found with id " + A);
                        return e
                    }
                    ,
                    t.prototype.info = function() {
                        for (var A = [], e = 0; e < arguments.length; e++)
                            A[e] = arguments[e];
                        this.enabled && "undefined" != typeof window && window.console && "function" == typeof console.info && console.info.apply(console, [this.id, this.getTime() + "ms"].concat(A))
                    }
                    ,
                    t.prototype.error = function() {
                        for (var A = [], e = 0; e < arguments.length; e++)
                            A[e] = arguments[e];
                        this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.error ? console.error.apply(console, [this.id, this.getTime() + "ms"].concat(A)) : this.info.apply(this, A))
                    }
                    ,
                    t.instances = {},
                    t
            }(), je = function() {
                function t() {}
                return t.create = function(A, e) {
                    return t._caches[A] = new Me(A,e)
                }
                    ,
                    t.destroy = function(A) {
                        delete t._caches[A]
                    }
                    ,
                    t.open = function(A) {
                        var e = t._caches[A];
                        if (void 0 !== e)
                            return e;
                        throw new Error('Cache with key "' + A + '" not found')
                    }
                    ,
                    t.getOrigin = function(A) {
                        var e = t._link;
                        return e ? (e.href = A,
                            e.href = e.href,
                        e.protocol + e.hostname + e.port) : "about:blank"
                    }
                    ,
                    t.isSameOrigin = function(A) {
                        return t.getOrigin(A) === t._origin
                    }
                    ,
                    t.setContext = function(A) {
                        t._link = A.document.createElement("a"),
                            t._origin = t.getOrigin(A.location.href)
                    }
                    ,
                    t.getInstance = function() {
                        var A = t._current;
                        if (null === A)
                            throw new Error("No cache instance attached");
                        return A
                    }
                    ,
                    t.attachInstance = function(A) {
                        t._current = A
                    }
                    ,
                    t.detachInstance = function() {
                        t._current = null
                    }
                    ,
                    t._caches = {},
                    t._origin = "about:blank",
                    t._current = null,
                    t
            }(), Me = function() {
                function A(A, e) {
                    this.id = A,
                        this._options = e,
                        this._cache = {}
                }
                return A.prototype.addImage = function(A) {
                    var e = Promise.resolve();
                    return this.has(A) || (Xe(A) || ke(A)) && (this._cache[A] = this.loadImage(A)),
                        e
                }
                    ,
                    A.prototype.match = function(A) {
                        return this._cache[A]
                    }
                    ,
                    A.prototype.loadImage = function(s) {
                        return c(this, void 0, void 0, function() {
                            var e, n, t, r, o = this;
                            return S(this, function(A) {
                                switch (A.label) {
                                    case 0:
                                        return e = je.isSameOrigin(s),
                                            n = !Ve(s) && !0 === this._options.useCORS && Se.SUPPORT_CORS_IMAGES && !e,
                                            t = !Ve(s) && !e && "string" == typeof this._options.proxy && Se.SUPPORT_CORS_XHR && !n,
                                            e || !1 !== this._options.allowTaint || Ve(s) || t || n ? (r = s,
                                                t ? [4, this.proxy(r)] : [3, 2]) : [2];
                                    case 1:
                                        r = A.sent(),
                                            A.label = 2;
                                    case 2:
                                        return Le.getInstance(this.id).debug("Added image " + s.substring(0, 256)),
                                            [4, new Promise(function(A, e) {
                                                    var t = new Image;
                                                    t.onload = function() {
                                                        return A(t)
                                                    }
                                                        ,
                                                        t.onerror = e,
                                                    (ze(r) || n) && (t.crossOrigin = "anonymous"),
                                                        t.src = r,
                                                    !0 === t.complete && setTimeout(function() {
                                                        return A(t)
                                                    }, 500),
                                                    0 < o._options.imageTimeout && setTimeout(function() {
                                                        return e("Timed out (" + o._options.imageTimeout + "ms) loading image")
                                                    }, o._options.imageTimeout)
                                                }
                                            )];
                                    case 3:
                                        return [2, A.sent()]
                                }
                            })
                        })
                    }
                    ,
                    A.prototype.has = function(A) {
                        return void 0 !== this._cache[A]
                    }
                    ,
                    A.prototype.keys = function() {
                        return Promise.resolve(Object.keys(this._cache))
                    }
                    ,
                    A.prototype.proxy = function(o) {
                        var s = this
                            , i = this._options.proxy;
                        if (!i)
                            throw new Error("No proxy defined");
                        var a = o.substring(0, 256);
                        return new Promise(function(e, t) {
                                var n = Se.SUPPORT_RESPONSE_TYPE ? "blob" : "text"
                                    , r = new XMLHttpRequest;
                                if (r.onload = function() {
                                    if (200 === r.status)
                                        if ("text" == n)
                                            e(r.response);
                                        else {
                                            var A = new FileReader;
                                            A.addEventListener("load", function() {
                                                return e(A.result)
                                            }, !1),
                                                A.addEventListener("error", function(A) {
                                                    return t(A)
                                                }, !1),
                                                A.readAsDataURL(r.response)
                                        }
                                    else
                                        t("Failed to proxy resource " + a + " with status code " + r.status)
                                }
                                    ,
                                    r.onerror = t,
                                    r.open("GET", i + "?url=" + encodeURIComponent(o) + "&responseType=" + n),
                                "text" != n && r instanceof XMLHttpRequest && (r.responseType = n),
                                    s._options.imageTimeout) {
                                    var A = s._options.imageTimeout;
                                    r.timeout = A,
                                        r.ontimeout = function() {
                                            return t("Timed out (" + A + "ms) proxying " + a)
                                        }
                                }
                                r.send()
                            }
                        )
                    }
                    ,
                    A
            }(), xe = /^data:image\/svg\+xml/i, De = /^data:image\/.*;base64,/i, Pe = /^data:image\/.*/i, ke = function(A) {
                return Se.SUPPORT_SVG_DRAWING || !Ge(A)
            }, Ve = function(A) {
                return Pe.test(A)
            }, ze = function(A) {
                return De.test(A)
            }, Xe = function(A) {
                return "blob" === A.substr(0, 4)
            }, Ge = function(A) {
                return "svg" === A.substr(-3).toLowerCase() || xe.test(A)
            }, Je = "closest-side", Ye = "farthest-side", We = "closest-corner", qe = "farthest-corner", Ze = "ellipse", $e = "contain", At = function(A) {
                var r = et.CIRCLE
                    , o = tt.FARTHEST_CORNER
                    , s = []
                    , i = [];
                return ZA(A).forEach(function(A, e) {
                    var t = !0;
                    if (0 === e ? t = A.reduce(function(A, e) {
                        if (GA(e))
                            switch (e.value) {
                                case "center":
                                    return i.push(re),
                                        !1;
                                case "top":
                                case "left":
                                    return i.push(ne),
                                        !1;
                                case "right":
                                case "bottom":
                                    return i.push(oe),
                                        !1
                            }
                        else if (ee(e) || Ae(e))
                            return i.push(e),
                                !1;
                        return A
                    }, t) : 1 === e && (t = A.reduce(function(A, e) {
                        if (GA(e))
                            switch (e.value) {
                                case "circle":
                                    return r = et.CIRCLE,
                                        !1;
                                case Ze:
                                    return r = et.ELLIPSE,
                                        !1;
                                case $e:
                                case Je:
                                    return o = tt.CLOSEST_SIDE,
                                        !1;
                                case Ye:
                                    return o = tt.FARTHEST_SIDE,
                                        !1;
                                case We:
                                    return o = tt.CLOSEST_CORNER,
                                        !1;
                                case "cover":
                                case qe:
                                    return o = tt.FARTHEST_CORNER,
                                        !1
                            }
                        else if (Ae(e) || ee(e))
                            return Array.isArray(o) || (o = []),
                                o.push(e),
                                !1;
                        return A
                    }, t)),
                        t) {
                        var n = ve(A);
                        s.push(n)
                    }
                }),
                    {
                        size: o,
                        shape: r,
                        stops: s,
                        position: i,
                        type: Fe.RADIAL_GRADIENT
                    }
            };
            !function(A) {
                A[A.URL = 0] = "URL",
                    A[A.LINEAR_GRADIENT = 1] = "LINEAR_GRADIENT",
                    A[A.RADIAL_GRADIENT = 2] = "RADIAL_GRADIENT"
            }(Fe = Fe || {});
            var et, tt;
            (function(A) {
                    A[A.CIRCLE = 0] = "CIRCLE",
                        A[A.ELLIPSE = 1] = "ELLIPSE"
                }
            )(et = et || {}),
                function(A) {
                    A[A.CLOSEST_SIDE = 0] = "CLOSEST_SIDE",
                        A[A.FARTHEST_SIDE = 1] = "FARTHEST_SIDE",
                        A[A.CLOSEST_CORNER = 2] = "CLOSEST_CORNER",
                        A[A.FARTHEST_CORNER = 3] = "FARTHEST_CORNER"
                }(tt = tt || {});
            var nt = {
                name: "image",
                parse: function(A) {
                    if (A.type === p.URL_TOKEN) {
                        var e = {
                            url: A.value,
                            type: Fe.URL
                        };
                        return je.getInstance().addImage(A.value),
                            e
                    }
                    if (A.type !== p.FUNCTION)
                        throw new Error("Unsupported image type");
                    var t = ot[A.name];
                    if (void 0 === t)
                        throw new Error('Attempting to parse an unsupported image function "' + A.name + '"');
                    return t(A.values)
                }
            };
            var rt, ot = {
                "linear-gradient": function(A) {
                    var r = Be(180)
                        , o = [];
                    return ZA(A).forEach(function(A, e) {
                        if (0 === e) {
                            var t = A[0];
                            if (t.type === p.IDENT_TOKEN && "to" === t.value)
                                return void (r = ue(A));
                            if (ce(t))
                                return void (r = ae.parse(t))
                        }
                        var n = ve(A);
                        o.push(n)
                    }),
                        {
                            angle: r,
                            stops: o,
                            type: Fe.LINEAR_GRADIENT
                        }
                },
                "-moz-linear-gradient": Ie,
                "-ms-linear-gradient": Ie,
                "-o-linear-gradient": Ie,
                "-webkit-linear-gradient": Ie,
                "radial-gradient": function(A) {
                    var o = et.CIRCLE
                        , s = tt.FARTHEST_CORNER
                        , i = []
                        , a = [];
                    return ZA(A).forEach(function(A, e) {
                        var t = !0;
                        if (0 === e) {
                            var n = !1;
                            t = A.reduce(function(A, e) {
                                if (n)
                                    if (GA(e))
                                        switch (e.value) {
                                            case "center":
                                                return a.push(re),
                                                    A;
                                            case "top":
                                            case "left":
                                                return a.push(ne),
                                                    A;
                                            case "right":
                                            case "bottom":
                                                return a.push(oe),
                                                    A
                                        }
                                    else
                                        (ee(e) || Ae(e)) && a.push(e);
                                else if (GA(e))
                                    switch (e.value) {
                                        case "circle":
                                            return o = et.CIRCLE,
                                                !1;
                                        case Ze:
                                            return o = et.ELLIPSE,
                                                !1;
                                        case "at":
                                            return !(n = !0);
                                        case Je:
                                            return s = tt.CLOSEST_SIDE,
                                                !1;
                                        case "cover":
                                        case Ye:
                                            return s = tt.FARTHEST_SIDE,
                                                !1;
                                        case $e:
                                        case We:
                                            return s = tt.CLOSEST_CORNER,
                                                !1;
                                        case qe:
                                            return s = tt.FARTHEST_CORNER,
                                                !1
                                    }
                                else if (Ae(e) || ee(e))
                                    return Array.isArray(s) || (s = []),
                                        s.push(e),
                                        !1;
                                return A
                            }, t)
                        }
                        if (t) {
                            var r = ve(A);
                            i.push(r)
                        }
                    }),
                        {
                            size: s,
                            shape: o,
                            stops: i,
                            position: a,
                            type: Fe.RADIAL_GRADIENT
                        }
                },
                "-moz-radial-gradient": At,
                "-ms-radial-gradient": At,
                "-o-radial-gradient": At,
                "-webkit-radial-gradient": At,
                "-webkit-gradient": function(A) {
                    var e = Be(180)
                        , s = []
                        , i = Fe.LINEAR_GRADIENT
                        , t = et.CIRCLE
                        , n = tt.FARTHEST_CORNER
                        , r = [];
                    return ZA(A).forEach(function(A, e) {
                        var t = A[0];
                        if (0 === e) {
                            if (GA(t) && "linear" === t.value)
                                return void (i = Fe.LINEAR_GRADIENT);
                            if (GA(t) && "radial" === t.value)
                                return void (i = Fe.RADIAL_GRADIENT)
                        }
                        if (t.type === p.FUNCTION)
                            if ("from" === t.name) {
                                var n = le.parse(t.values[0]);
                                s.push({
                                    stop: ne,
                                    color: n
                                })
                            } else if ("to" === t.name) {
                                n = le.parse(t.values[0]);
                                s.push({
                                    stop: oe,
                                    color: n
                                })
                            } else if ("color-stop" === t.name) {
                                var r = t.values.filter(qA);
                                if (2 === r.length) {
                                    n = le.parse(r[1]);
                                    var o = r[0];
                                    XA(o) && s.push({
                                        stop: {
                                            type: p.PERCENTAGE_TOKEN,
                                            number: 100 * o.number,
                                            flags: o.flags
                                        },
                                        color: n
                                    })
                                }
                            }
                    }),
                        i === Fe.LINEAR_GRADIENT ? {
                            angle: (e + Be(180)) % Be(360),
                            stops: s,
                            type: i
                        } : {
                            size: n,
                            shape: t,
                            stops: s,
                            position: r,
                            type: i
                        }
                }
            }, st = {
                name: "background-image",
                initialValue: "none",
                type: pe.LIST,
                prefix: !1,
                parse: function(A) {
                    if (0 === A.length)
                        return [];
                    var e = A[0];
                    return e.type === p.IDENT_TOKEN && "none" === e.value ? [] : A.filter(function(A) {
                        return qA(A) && function(A) {
                            return A.type !== p.FUNCTION || ot[A.name]
                        }(A)
                    }).map(nt.parse)
                }
            }, it = {
                name: "background-origin",
                initialValue: "border-box",
                prefix: !1,
                type: pe.LIST,
                parse: function(A) {
                    return A.map(function(A) {
                        if (GA(A))
                            switch (A.value) {
                                case "padding-box":
                                    return 1;
                                case "content-box":
                                    return 2
                            }
                        return 0
                    })
                }
            }, at = {
                name: "background-position",
                initialValue: "0% 0%",
                type: pe.LIST,
                prefix: !1,
                parse: function(A) {
                    return ZA(A).map(function(A) {
                        return A.filter(ee)
                    }).map(te)
                }
            };
            !function(A) {
                A[A.REPEAT = 0] = "REPEAT",
                    A[A.NO_REPEAT = 1] = "NO_REPEAT",
                    A[A.REPEAT_X = 2] = "REPEAT_X",
                    A[A.REPEAT_Y = 3] = "REPEAT_Y"
            }(rt = rt || {});
            var ct, ut = {
                name: "background-repeat",
                initialValue: "repeat",
                prefix: !1,
                type: pe.LIST,
                parse: function(A) {
                    return ZA(A).map(function(A) {
                        return A.filter(GA).map(function(A) {
                            return A.value
                        }).join(" ")
                    }).map(Bt)
                }
            }, Bt = function(A) {
                switch (A) {
                    case "no-repeat":
                        return rt.NO_REPEAT;
                    case "repeat-x":
                    case "repeat no-repeat":
                        return rt.REPEAT_X;
                    case "repeat-y":
                    case "no-repeat repeat":
                        return rt.REPEAT_Y;
                    case "repeat":
                    default:
                        return rt.REPEAT
                }
            };
            !function(A) {
                A.AUTO = "auto",
                    A.CONTAIN = "contain",
                    A.COVER = "cover"
            }(ct = ct || {});
            var lt, dt = {
                name: "background-size",
                initialValue: "0",
                prefix: !1,
                type: pe.LIST,
                parse: function(A) {
                    return ZA(A).map(function(A) {
                        return A.filter(wt)
                    })
                }
            }, wt = function(A) {
                return GA(A) || ee(A)
            }, Qt = function(A) {
                return {
                    name: "border-" + A + "-color",
                    initialValue: "transparent",
                    prefix: !1,
                    type: pe.TYPE_VALUE,
                    format: "color"
                }
            }, ht = Qt("top"), ft = Qt("right"), gt = Qt("bottom"), pt = Qt("left"), Ut = function(A) {
                return {
                    name: "border-radius-" + A,
                    initialValue: "0 0",
                    prefix: !1,
                    type: pe.LIST,
                    parse: function(A) {
                        return te(A.filter(ee))
                    }
                }
            }, Ct = Ut("top-left"), Et = Ut("top-right"), mt = Ut("bottom-right"), Ft = Ut("bottom-left");
            !function(A) {
                A[A.NONE = 0] = "NONE",
                    A[A.SOLID = 1] = "SOLID"
            }(lt = lt || {});
            var Ht, _t = function(A) {
                return {
                    name: "border-" + A + "-style",
                    initialValue: "solid",
                    prefix: !1,
                    type: pe.IDENT_VALUE,
                    parse: function(A) {
                        switch (A) {
                            case "none":
                                return lt.NONE
                        }
                        return lt.SOLID
                    }
                }
            }, vt = _t("top"), Nt = _t("right"), Kt = _t("bottom"), yt = _t("left"), bt = function(A) {
                return {
                    name: "border-" + A + "-width",
                    initialValue: "0",
                    type: pe.VALUE,
                    prefix: !1,
                    parse: function(A) {
                        return zA(A) ? A.number : 0
                    }
                }
            }, It = bt("top"), Tt = bt("right"), Rt = bt("bottom"), Ot = bt("left"), St = {
                name: "color",
                initialValue: "transparent",
                prefix: !1,
                type: pe.TYPE_VALUE,
                format: "color"
            }, Lt = {
                name: "display",
                initialValue: "inline-block",
                prefix: !1,
                type: pe.LIST,
                parse: function(A) {
                    return A.filter(GA).reduce(function(A, e) {
                        return A | jt(e.value)
                    }, 0)
                }
            }, jt = function(A) {
                switch (A) {
                    case "block":
                        return 2;
                    case "inline":
                        return 4;
                    case "run-in":
                        return 8;
                    case "flow":
                        return 16;
                    case "flow-root":
                        return 32;
                    case "table":
                        return 64;
                    case "flex":
                    case "-webkit-flex":
                        return 128;
                    case "grid":
                    case "-ms-grid":
                        return 256;
                    case "ruby":
                        return 512;
                    case "subgrid":
                        return 1024;
                    case "list-item":
                        return 2048;
                    case "table-row-group":
                        return 4096;
                    case "table-header-group":
                        return 8192;
                    case "table-footer-group":
                        return 16384;
                    case "table-row":
                        return 32768;
                    case "table-cell":
                        return 65536;
                    case "table-column-group":
                        return 131072;
                    case "table-column":
                        return 262144;
                    case "table-caption":
                        return 524288;
                    case "ruby-base":
                        return 1048576;
                    case "ruby-text":
                        return 2097152;
                    case "ruby-base-container":
                        return 4194304;
                    case "ruby-text-container":
                        return 8388608;
                    case "contents":
                        return 16777216;
                    case "inline-block":
                        return 33554432;
                    case "inline-list-item":
                        return 67108864;
                    case "inline-table":
                        return 134217728;
                    case "inline-flex":
                        return 268435456;
                    case "inline-grid":
                        return 536870912
                }
                return 0
            };
            !function(A) {
                A[A.NONE = 0] = "NONE",
                    A[A.LEFT = 1] = "LEFT",
                    A[A.RIGHT = 2] = "RIGHT",
                    A[A.INLINE_START = 3] = "INLINE_START",
                    A[A.INLINE_END = 4] = "INLINE_END"
            }(Ht = Ht || {});
            var Mt, xt = {
                name: "float",
                initialValue: "none",
                prefix: !1,
                type: pe.IDENT_VALUE,
                parse: function(A) {
                    switch (A) {
                        case "left":
                            return Ht.LEFT;
                        case "right":
                            return Ht.RIGHT;
                        case "inline-start":
                            return Ht.INLINE_START;
                        case "inline-end":
                            return Ht.INLINE_END
                    }
                    return Ht.NONE
                }
            }, Dt = {
                name: "letter-spacing",
                initialValue: "0",
                prefix: !1,
                type: pe.VALUE,
                parse: function(A) {
                    return A.type === p.IDENT_TOKEN && "normal" === A.value ? 0 : A.type === p.NUMBER_TOKEN ? A.number : A.type === p.DIMENSION_TOKEN ? A.number : 0
                }
            };
            !function(A) {
                A.NORMAL = "normal",
                    A.STRICT = "strict"
            }(Mt = Mt || {});
            var Pt, kt = {
                name: "line-break",
                initialValue: "normal",
                prefix: !1,
                type: pe.IDENT_VALUE,
                parse: function(A) {
                    switch (A) {
                        case "strict":
                            return Mt.STRICT;
                        case "normal":
                        default:
                            return Mt.NORMAL
                    }
                }
            }, Vt = {
                name: "line-height",
                initialValue: "normal",
                prefix: !1,
                type: pe.TOKEN_VALUE
            }, zt = {
                name: "list-style-image",
                initialValue: "none",
                type: pe.VALUE,
                prefix: !1,
                parse: function(A) {
                    return A.type === p.IDENT_TOKEN && "none" === A.value ? null : nt.parse(A)
                }
            };
            !function(A) {
                A[A.INSIDE = 0] = "INSIDE",
                    A[A.OUTSIDE = 1] = "OUTSIDE"
            }(Pt = Pt || {});
            var Xt, Gt = {
                name: "list-style-position",
                initialValue: "outside",
                prefix: !1,
                type: pe.IDENT_VALUE,
                parse: function(A) {
                    switch (A) {
                        case "inside":
                            return Pt.INSIDE;
                        case "outside":
                        default:
                            return Pt.OUTSIDE
                    }
                }
            };
            !function(A) {
                A[A.NONE = -1] = "NONE",
                    A[A.DISC = 0] = "DISC",
                    A[A.CIRCLE = 1] = "CIRCLE",
                    A[A.SQUARE = 2] = "SQUARE",
                    A[A.DECIMAL = 3] = "DECIMAL",
                    A[A.CJK_DECIMAL = 4] = "CJK_DECIMAL",
                    A[A.DECIMAL_LEADING_ZERO = 5] = "DECIMAL_LEADING_ZERO",
                    A[A.LOWER_ROMAN = 6] = "LOWER_ROMAN",
                    A[A.UPPER_ROMAN = 7] = "UPPER_ROMAN",
                    A[A.LOWER_GREEK = 8] = "LOWER_GREEK",
                    A[A.LOWER_ALPHA = 9] = "LOWER_ALPHA",
                    A[A.UPPER_ALPHA = 10] = "UPPER_ALPHA",
                    A[A.ARABIC_INDIC = 11] = "ARABIC_INDIC",
                    A[A.ARMENIAN = 12] = "ARMENIAN",
                    A[A.BENGALI = 13] = "BENGALI",
                    A[A.CAMBODIAN = 14] = "CAMBODIAN",
                    A[A.CJK_EARTHLY_BRANCH = 15] = "CJK_EARTHLY_BRANCH",
                    A[A.CJK_HEAVENLY_STEM = 16] = "CJK_HEAVENLY_STEM",
                    A[A.CJK_IDEOGRAPHIC = 17] = "CJK_IDEOGRAPHIC",
                    A[A.DEVANAGARI = 18] = "DEVANAGARI",
                    A[A.ETHIOPIC_NUMERIC = 19] = "ETHIOPIC_NUMERIC",
                    A[A.GEORGIAN = 20] = "GEORGIAN",
                    A[A.GUJARATI = 21] = "GUJARATI",
                    A[A.GURMUKHI = 22] = "GURMUKHI",
                    A[A.HEBREW = 22] = "HEBREW",
                    A[A.HIRAGANA = 23] = "HIRAGANA",
                    A[A.HIRAGANA_IROHA = 24] = "HIRAGANA_IROHA",
                    A[A.JAPANESE_FORMAL = 25] = "JAPANESE_FORMAL",
                    A[A.JAPANESE_INFORMAL = 26] = "JAPANESE_INFORMAL",
                    A[A.KANNADA = 27] = "KANNADA",
                    A[A.KATAKANA = 28] = "KATAKANA",
                    A[A.KATAKANA_IROHA = 29] = "KATAKANA_IROHA",
                    A[A.KHMER = 30] = "KHMER",
                    A[A.KOREAN_HANGUL_FORMAL = 31] = "KOREAN_HANGUL_FORMAL",
                    A[A.KOREAN_HANJA_FORMAL = 32] = "KOREAN_HANJA_FORMAL",
                    A[A.KOREAN_HANJA_INFORMAL = 33] = "KOREAN_HANJA_INFORMAL",
                    A[A.LAO = 34] = "LAO",
                    A[A.LOWER_ARMENIAN = 35] = "LOWER_ARMENIAN",
                    A[A.MALAYALAM = 36] = "MALAYALAM",
                    A[A.MONGOLIAN = 37] = "MONGOLIAN",
                    A[A.MYANMAR = 38] = "MYANMAR",
                    A[A.ORIYA = 39] = "ORIYA",
                    A[A.PERSIAN = 40] = "PERSIAN",
                    A[A.SIMP_CHINESE_FORMAL = 41] = "SIMP_CHINESE_FORMAL",
                    A[A.SIMP_CHINESE_INFORMAL = 42] = "SIMP_CHINESE_INFORMAL",
                    A[A.TAMIL = 43] = "TAMIL",
                    A[A.TELUGU = 44] = "TELUGU",
                    A[A.THAI = 45] = "THAI",
                    A[A.TIBETAN = 46] = "TIBETAN",
                    A[A.TRAD_CHINESE_FORMAL = 47] = "TRAD_CHINESE_FORMAL",
                    A[A.TRAD_CHINESE_INFORMAL = 48] = "TRAD_CHINESE_INFORMAL",
                    A[A.UPPER_ARMENIAN = 49] = "UPPER_ARMENIAN",
                    A[A.DISCLOSURE_OPEN = 50] = "DISCLOSURE_OPEN",
                    A[A.DISCLOSURE_CLOSED = 51] = "DISCLOSURE_CLOSED"
            }(Xt = Xt || {});
            var Jt, Yt = {
                name: "list-style-type",
                initialValue: "none",
                prefix: !1,
                type: pe.IDENT_VALUE,
                parse: function(A) {
                    switch (A) {
                        case "disc":
                            return Xt.DISC;
                        case "circle":
                            return Xt.CIRCLE;
                        case "square":
                            return Xt.SQUARE;
                        case "decimal":
                            return Xt.DECIMAL;
                        case "cjk-decimal":
                            return Xt.CJK_DECIMAL;
                        case "decimal-leading-zero":
                            return Xt.DECIMAL_LEADING_ZERO;
                        case "lower-roman":
                            return Xt.LOWER_ROMAN;
                        case "upper-roman":
                            return Xt.UPPER_ROMAN;
                        case "lower-greek":
                            return Xt.LOWER_GREEK;
                        case "lower-alpha":
                            return Xt.LOWER_ALPHA;
                        case "upper-alpha":
                            return Xt.UPPER_ALPHA;
                        case "arabic-indic":
                            return Xt.ARABIC_INDIC;
                        case "armenian":
                            return Xt.ARMENIAN;
                        case "bengali":
                            return Xt.BENGALI;
                        case "cambodian":
                            return Xt.CAMBODIAN;
                        case "cjk-earthly-branch":
                            return Xt.CJK_EARTHLY_BRANCH;
                        case "cjk-heavenly-stem":
                            return Xt.CJK_HEAVENLY_STEM;
                        case "cjk-ideographic":
                            return Xt.CJK_IDEOGRAPHIC;
                        case "devanagari":
                            return Xt.DEVANAGARI;
                        case "ethiopic-numeric":
                            return Xt.ETHIOPIC_NUMERIC;
                        case "georgian":
                            return Xt.GEORGIAN;
                        case "gujarati":
                            return Xt.GUJARATI;
                        case "gurmukhi":
                            return Xt.GURMUKHI;
                        case "hebrew":
                            return Xt.HEBREW;
                        case "hiragana":
                            return Xt.HIRAGANA;
                        case "hiragana-iroha":
                            return Xt.HIRAGANA_IROHA;
                        case "japanese-formal":
                            return Xt.JAPANESE_FORMAL;
                        case "japanese-informal":
                            return Xt.JAPANESE_INFORMAL;
                        case "kannada":
                            return Xt.KANNADA;
                        case "katakana":
                            return Xt.KATAKANA;
                        case "katakana-iroha":
                            return Xt.KATAKANA_IROHA;
                        case "khmer":
                            return Xt.KHMER;
                        case "korean-hangul-formal":
                            return Xt.KOREAN_HANGUL_FORMAL;
                        case "korean-hanja-formal":
                            return Xt.KOREAN_HANJA_FORMAL;
                        case "korean-hanja-informal":
                            return Xt.KOREAN_HANJA_INFORMAL;
                        case "lao":
                            return Xt.LAO;
                        case "lower-armenian":
                            return Xt.LOWER_ARMENIAN;
                        case "malayalam":
                            return Xt.MALAYALAM;
                        case "mongolian":
                            return Xt.MONGOLIAN;
                        case "myanmar":
                            return Xt.MYANMAR;
                        case "oriya":
                            return Xt.ORIYA;
                        case "persian":
                            return Xt.PERSIAN;
                        case "simp-chinese-formal":
                            return Xt.SIMP_CHINESE_FORMAL;
                        case "simp-chinese-informal":
                            return Xt.SIMP_CHINESE_INFORMAL;
                        case "tamil":
                            return Xt.TAMIL;
                        case "telugu":
                            return Xt.TELUGU;
                        case "thai":
                            return Xt.THAI;
                        case "tibetan":
                            return Xt.TIBETAN;
                        case "trad-chinese-formal":
                            return Xt.TRAD_CHINESE_FORMAL;
                        case "trad-chinese-informal":
                            return Xt.TRAD_CHINESE_INFORMAL;
                        case "upper-armenian":
                            return Xt.UPPER_ARMENIAN;
                        case "disclosure-open":
                            return Xt.DISCLOSURE_OPEN;
                        case "disclosure-closed":
                            return Xt.DISCLOSURE_CLOSED;
                        case "none":
                        default:
                            return Xt.NONE
                    }
                }
            }, Wt = function(A) {
                return {
                    name: "margin-" + A,
                    initialValue: "0",
                    prefix: !1,
                    type: pe.TOKEN_VALUE
                }
            }, qt = Wt("top"), Zt = Wt("right"), $t = Wt("bottom"), An = Wt("left");
            !function(A) {
                A[A.VISIBLE = 0] = "VISIBLE",
                    A[A.HIDDEN = 1] = "HIDDEN",
                    A[A.SCROLL = 2] = "SCROLL",
                    A[A.AUTO = 3] = "AUTO"
            }(Jt = Jt || {});
            var en, tn = {
                name: "overflow",
                initialValue: "visible",
                prefix: !1,
                type: pe.LIST,
                parse: function(A) {
                    return A.filter(GA).map(function(A) {
                        switch (A.value) {
                            case "hidden":
                                return Jt.HIDDEN;
                            case "scroll":
                                return Jt.SCROLL;
                            case "auto":
                                return Jt.AUTO;
                            case "visible":
                            default:
                                return Jt.VISIBLE
                        }
                    })
                }
            };
            !function(A) {
                A.NORMAL = "normal",
                    A.BREAK_WORD = "break-word"
            }(en = en || {});
            var nn, rn = {
                name: "overflow-wrap",
                initialValue: "normal",
                prefix: !1,
                type: pe.IDENT_VALUE,
                parse: function(A) {
                    switch (A) {
                        case "break-word":
                            return en.BREAK_WORD;
                        case "normal":
                        default:
                            return en.NORMAL
                    }
                }
            }, on = function(A) {
                return {
                    name: "padding-" + A,
                    initialValue: "0",
                    prefix: !1,
                    type: pe.TYPE_VALUE,
                    format: "length-percentage"
                }
            }, sn = on("top"), an = on("right"), cn = on("bottom"), un = on("left");
            !function(A) {
                A[A.LEFT = 0] = "LEFT",
                    A[A.CENTER = 1] = "CENTER",
                    A[A.RIGHT = 2] = "RIGHT"
            }(nn = nn || {});
            var Bn, ln = {
                name: "text-align",
                initialValue: "left",
                prefix: !1,
                type: pe.IDENT_VALUE,
                parse: function(A) {
                    switch (A) {
                        case "right":
                            return nn.RIGHT;
                        case "center":
                        case "justify":
                            return nn.CENTER;
                        case "left":
                        default:
                            return nn.LEFT
                    }
                }
            };
            !function(A) {
                A[A.STATIC = 0] = "STATIC",
                    A[A.RELATIVE = 1] = "RELATIVE",
                    A[A.ABSOLUTE = 2] = "ABSOLUTE",
                    A[A.FIXED = 3] = "FIXED",
                    A[A.STICKY = 4] = "STICKY"
            }(Bn = Bn || {});
            var dn, wn = {
                name: "position",
                initialValue: "static",
                prefix: !1,
                type: pe.IDENT_VALUE,
                parse: function(A) {
                    switch (A) {
                        case "relative":
                            return Bn.RELATIVE;
                        case "absolute":
                            return Bn.ABSOLUTE;
                        case "fixed":
                            return Bn.FIXED;
                        case "sticky":
                            return Bn.STICKY
                    }
                    return Bn.STATIC
                }
            }, Qn = {
                name: "text-shadow",
                initialValue: "none",
                type: pe.LIST,
                prefix: !1,
                parse: function(A) {
                    return 1 === A.length && YA(A[0], "none") ? [] : ZA(A).map(function(A) {
                        for (var e = {
                            color: me.TRANSPARENT,
                            offsetX: ne,
                            offsetY: ne,
                            blur: ne
                        }, t = 0, n = 0; n < A.length; n++) {
                            var r = A[n];
                            Ae(r) ? (0 === t ? e.offsetX = r : 1 === t ? e.offsetY = r : e.blur = r,
                                t++) : e.color = le.parse(r)
                        }
                        return e
                    })
                }
            };
            !function(A) {
                A[A.NONE = 0] = "NONE",
                    A[A.LOWERCASE = 1] = "LOWERCASE",
                    A[A.UPPERCASE = 2] = "UPPERCASE",
                    A[A.CAPITALIZE = 3] = "CAPITALIZE"
            }(dn = dn || {});
            var hn, fn = {
                name: "text-transform",
                initialValue: "none",
                prefix: !1,
                type: pe.IDENT_VALUE,
                parse: function(A) {
                    switch (A) {
                        case "uppercase":
                            return dn.UPPERCASE;
                        case "lowercase":
                            return dn.LOWERCASE;
                        case "capitalize":
                            return dn.CAPITALIZE
                    }
                    return dn.NONE
                }
            }, gn = {
                name: "transform",
                initialValue: "none",
                prefix: !0,
                type: pe.VALUE,
                parse: function(A) {
                    if (A.type === p.IDENT_TOKEN && "none" === A.value)
                        return null;
                    if (A.type !== p.FUNCTION)
                        return null;
                    var e = pn[A.name];
                    if (void 0 === e)
                        throw new Error('Attempting to parse an unsupported transform function "' + A.name + '"');
                    return e(A.values)
                }
            }, pn = {
                matrix: function(A) {
                    var e = A.filter(function(A) {
                        return A.type === p.NUMBER_TOKEN
                    }).map(function(A) {
                        return A.number
                    });
                    return 6 === e.length ? e : null
                },
                matrix3d: function(A) {
                    var e = A.filter(function(A) {
                        return A.type === p.NUMBER_TOKEN
                    }).map(function(A) {
                        return A.number
                    })
                        , t = e[0]
                        , n = e[1]
                        , r = (e[2],
                        e[3],
                        e[4])
                        , o = e[5]
                        , s = (e[6],
                        e[7],
                        e[8],
                        e[9],
                        e[10],
                        e[11],
                        e[12])
                        , i = e[13];
                    e[14],
                        e[15];
                    return 16 === e.length ? [t, n, r, o, s, i] : null
                }
            }, Un = {
                type: p.PERCENTAGE_TOKEN,
                number: 50,
                flags: 4
            }, Cn = [Un, Un], En = {
                name: "transform-origin",
                initialValue: "50% 50%",
                prefix: !0,
                type: pe.LIST,
                parse: function(A) {
                    var e = A.filter(ee);
                    return 2 !== e.length ? Cn : [e[0], e[1]]
                }
            };
            !function(A) {
                A[A.VISIBLE = 0] = "VISIBLE",
                    A[A.HIDDEN = 1] = "HIDDEN",
                    A[A.COLLAPSE = 2] = "COLLAPSE"
            }(hn = hn || {});
            var mn, Fn = {
                name: "visible",
                initialValue: "none",
                prefix: !1,
                type: pe.IDENT_VALUE,
                parse: function(A) {
                    switch (A) {
                        case "hidden":
                            return hn.HIDDEN;
                        case "collapse":
                            return hn.COLLAPSE;
                        case "visible":
                        default:
                            return hn.VISIBLE
                    }
                }
            };
            !function(A) {
                A.NORMAL = "normal",
                    A.BREAK_ALL = "break-all",
                    A.KEEP_ALL = "keep-all"
            }(mn = mn || {});
            var Hn, _n = {
                name: "word-break",
                initialValue: "normal",
                prefix: !1,
                type: pe.IDENT_VALUE,
                parse: function(A) {
                    switch (A) {
                        case "break-all":
                            return mn.BREAK_ALL;
                        case "keep-all":
                            return mn.KEEP_ALL;
                        case "normal":
                        default:
                            return mn.NORMAL
                    }
                }
            }, vn = {
                name: "z-index",
                initialValue: "auto",
                prefix: !1,
                type: pe.VALUE,
                parse: function(A) {
                    if (A.type === p.IDENT_TOKEN)
                        return {
                            auto: !0,
                            order: 0
                        };
                    if (XA(A))
                        return {
                            auto: !1,
                            order: A.number
                        };
                    throw new Error("Invalid z-index number parsed")
                }
            }, Nn = {
                name: "opacity",
                initialValue: "1",
                type: pe.VALUE,
                prefix: !1,
                parse: function(A) {
                    return XA(A) ? A.number : 1
                }
            }, Kn = {
                name: "text-decoration-color",
                initialValue: "transparent",
                prefix: !1,
                type: pe.TYPE_VALUE,
                format: "color"
            }, yn = {
                name: "text-decoration-line",
                initialValue: "none",
                prefix: !1,
                type: pe.LIST,
                parse: function(A) {
                    return A.filter(GA).map(function(A) {
                        switch (A.value) {
                            case "underline":
                                return 1;
                            case "overline":
                                return 2;
                            case "line-through":
                                return 3;
                            case "none":
                                return 4
                        }
                        return 0
                    }).filter(function(A) {
                        return 0 !== A
                    })
                }
            }, bn = {
                name: "font-family",
                initialValue: "",
                prefix: !1,
                type: pe.LIST,
                parse: function(A) {
                    return A.filter(In).map(function(A) {
                        return A.value
                    })
                }
            }, In = function(A) {
                return A.type === p.STRING_TOKEN || A.type === p.IDENT_TOKEN
            }, Tn = {
                name: "font-size",
                initialValue: "0",
                prefix: !1,
                type: pe.TYPE_VALUE,
                format: "length"
            }, Rn = {
                name: "font-weight",
                initialValue: "normal",
                type: pe.VALUE,
                prefix: !1,
                parse: function(A) {
                    if (XA(A))
                        return A.number;
                    if (GA(A))
                        switch (A.value) {
                            case "bold":
                                return 700;
                            case "normal":
                            default:
                                return 400
                        }
                    return 400
                }
            }, On = {
                name: "font-variant",
                initialValue: "none",
                type: pe.LIST,
                prefix: !1,
                parse: function(A) {
                    return A.filter(GA).map(function(A) {
                        return A.value
                    })
                }
            };
            !function(A) {
                A.NORMAL = "normal",
                    A.ITALIC = "italic",
                    A.OBLIQUE = "oblique"
            }(Hn = Hn || {});
            var Sn, Ln = {
                name: "font-style",
                initialValue: "normal",
                prefix: !1,
                type: pe.IDENT_VALUE,
                parse: function(A) {
                    switch (A) {
                        case "oblique":
                            return Hn.OBLIQUE;
                        case "italic":
                            return Hn.ITALIC;
                        case "normal":
                        default:
                            return Hn.NORMAL
                    }
                }
            }, jn = function(A, e) {
                return 0 != (A & e)
            }, Mn = {
                name: "content",
                initialValue: "none",
                type: pe.LIST,
                prefix: !1,
                parse: function(A) {
                    if (0 === A.length)
                        return [];
                    var e = A[0];
                    return e.type === p.IDENT_TOKEN && "none" === e.value ? [] : A
                }
            }, xn = {
                name: "counter-increment",
                initialValue: "none",
                prefix: !0,
                type: pe.LIST,
                parse: function(A) {
                    if (0 === A.length)
                        return null;
                    var e = A[0];
                    if (e.type === p.IDENT_TOKEN && "none" === e.value)
                        return null;
                    for (var t = [], n = A.filter(WA), r = 0; r < n.length; r++) {
                        var o = n[r]
                            , s = n[r + 1];
                        if (o.type === p.IDENT_TOKEN) {
                            var i = s && XA(s) ? s.number : 1;
                            t.push({
                                counter: o.value,
                                increment: i
                            })
                        }
                    }
                    return t
                }
            }, Dn = {
                name: "counter-reset",
                initialValue: "none",
                prefix: !0,
                type: pe.LIST,
                parse: function(A) {
                    if (0 === A.length)
                        return [];
                    for (var e = [], t = A.filter(WA), n = 0; n < t.length; n++) {
                        var r = t[n]
                            , o = t[n + 1];
                        if (GA(r) && "none" !== r.value) {
                            var s = o && XA(o) ? o.number : 0;
                            e.push({
                                counter: r.value,
                                reset: s
                            })
                        }
                    }
                    return e
                }
            }, Pn = {
                name: "quotes",
                initialValue: "none",
                prefix: !0,
                type: pe.LIST,
                parse: function(A) {
                    if (0 === A.length)
                        return null;
                    var e = A[0];
                    if (e.type === p.IDENT_TOKEN && "none" === e.value)
                        return null;
                    var t = []
                        , n = A.filter(JA);
                    if (n.length % 2 != 0)
                        return null;
                    for (var r = 0; r < n.length; r += 2) {
                        var o = n[r].value
                            , s = n[r + 1].value;
                        t.push({
                            open: o,
                            close: s
                        })
                    }
                    return t
                }
            }, kn = function(A, e, t) {
                if (!A)
                    return "";
                var n = A[Math.min(e, A.length - 1)];
                return n ? t ? n.open : n.close : ""
            }, Vn = {
                name: "box-shadow",
                initialValue: "none",
                type: pe.LIST,
                prefix: !1,
                parse: function(A) {
                    return 1 === A.length && YA(A[0], "none") ? [] : ZA(A).map(function(A) {
                        for (var e = {
                            color: 255,
                            offsetX: ne,
                            offsetY: ne,
                            blur: ne,
                            spread: ne,
                            inset: !1
                        }, t = 0, n = 0; n < A.length; n++) {
                            var r = A[n];
                            YA(r, "inset") ? e.inset = !0 : Ae(r) ? (0 === t ? e.offsetX = r : 1 === t ? e.offsetY = r : 2 === t ? e.blur = r : e.spread = r,
                                t++) : e.color = le.parse(r)
                        }
                        return e
                    })
                }
            }, zn = function() {
                function A(A) {
                    this.backgroundClip = Jn(He, A.backgroundClip),
                        this.backgroundColor = Jn(_e, A.backgroundColor),
                        this.backgroundImage = Jn(st, A.backgroundImage),
                        this.backgroundOrigin = Jn(it, A.backgroundOrigin),
                        this.backgroundPosition = Jn(at, A.backgroundPosition),
                        this.backgroundRepeat = Jn(ut, A.backgroundRepeat),
                        this.backgroundSize = Jn(dt, A.backgroundSize),
                        this.borderTopColor = Jn(ht, A.borderTopColor),
                        this.borderRightColor = Jn(ft, A.borderRightColor),
                        this.borderBottomColor = Jn(gt, A.borderBottomColor),
                        this.borderLeftColor = Jn(pt, A.borderLeftColor),
                        this.borderTopLeftRadius = Jn(Ct, A.borderTopLeftRadius),
                        this.borderTopRightRadius = Jn(Et, A.borderTopRightRadius),
                        this.borderBottomRightRadius = Jn(mt, A.borderBottomRightRadius),
                        this.borderBottomLeftRadius = Jn(Ft, A.borderBottomLeftRadius),
                        this.borderTopStyle = Jn(vt, A.borderTopStyle),
                        this.borderRightStyle = Jn(Nt, A.borderRightStyle),
                        this.borderBottomStyle = Jn(Kt, A.borderBottomStyle),
                        this.borderLeftStyle = Jn(yt, A.borderLeftStyle),
                        this.borderTopWidth = Jn(It, A.borderTopWidth),
                        this.borderRightWidth = Jn(Tt, A.borderRightWidth),
                        this.borderBottomWidth = Jn(Rt, A.borderBottomWidth),
                        this.borderLeftWidth = Jn(Ot, A.borderLeftWidth),
                        this.boxShadow = Jn(Vn, A.boxShadow),
                        this.color = Jn(St, A.color),
                        this.display = Jn(Lt, A.display),
                        this.float = Jn(xt, A.cssFloat),
                        this.fontFamily = Jn(bn, A.fontFamily),
                        this.fontSize = Jn(Tn, A.fontSize),
                        this.fontStyle = Jn(Ln, A.fontStyle),
                        this.fontVariant = Jn(On, A.fontVariant),
                        this.fontWeight = Jn(Rn, A.fontWeight),
                        this.letterSpacing = Jn(Dt, A.letterSpacing),
                        this.lineBreak = Jn(kt, A.lineBreak),
                        this.lineHeight = Jn(Vt, A.lineHeight),
                        this.listStyleImage = Jn(zt, A.listStyleImage),
                        this.listStylePosition = Jn(Gt, A.listStylePosition),
                        this.listStyleType = Jn(Yt, A.listStyleType),
                        this.marginTop = Jn(qt, A.marginTop),
                        this.marginRight = Jn(Zt, A.marginRight),
                        this.marginBottom = Jn($t, A.marginBottom),
                        this.marginLeft = Jn(An, A.marginLeft),
                        this.opacity = Jn(Nn, A.opacity);
                    var e = Jn(tn, A.overflow);
                    this.overflowX = e[0],
                        this.overflowY = e[1 < e.length ? 1 : 0],
                        this.overflowWrap = Jn(rn, A.overflowWrap),
                        this.paddingTop = Jn(sn, A.paddingTop),
                        this.paddingRight = Jn(an, A.paddingRight),
                        this.paddingBottom = Jn(cn, A.paddingBottom),
                        this.paddingLeft = Jn(un, A.paddingLeft),
                        this.position = Jn(wn, A.position),
                        this.textAlign = Jn(ln, A.textAlign),
                        this.textDecorationColor = Jn(Kn, A.textDecorationColor || A.color),
                        this.textDecorationLine = Jn(yn, A.textDecorationLine),
                        this.textShadow = Jn(Qn, A.textShadow),
                        this.textTransform = Jn(fn, A.textTransform),
                        this.transform = Jn(gn, A.transform),
                        this.transformOrigin = Jn(En, A.transformOrigin),
                        this.visibility = Jn(Fn, A.visibility),
                        this.wordBreak = Jn(_n, A.wordBreak),
                        this.zIndex = Jn(vn, A.zIndex)
                }
                return A.prototype.isVisible = function() {
                    return 0 < this.display && 0 < this.opacity && this.visibility === hn.VISIBLE
                }
                    ,
                    A.prototype.isTransparent = function() {
                        return de(this.backgroundColor)
                    }
                    ,
                    A.prototype.isTransformed = function() {
                        return null !== this.transform
                    }
                    ,
                    A.prototype.isPositioned = function() {
                        return this.position !== Bn.STATIC
                    }
                    ,
                    A.prototype.isPositionedWithZIndex = function() {
                        return this.isPositioned() && !this.zIndex.auto
                    }
                    ,
                    A.prototype.isFloating = function() {
                        return this.float !== Ht.NONE
                    }
                    ,
                    A.prototype.isInlineLevel = function() {
                        return jn(this.display, 4) || jn(this.display, 33554432) || jn(this.display, 268435456) || jn(this.display, 536870912) || jn(this.display, 67108864) || jn(this.display, 134217728)
                    }
                    ,
                    A
            }(), Xn = function(A) {
                this.content = Jn(Mn, A.content),
                    this.quotes = Jn(Pn, A.quotes)
            }, Gn = function(A) {
                this.counterIncrement = Jn(xn, A.counterIncrement),
                    this.counterReset = Jn(Dn, A.counterReset)
            }, Jn = function(A, e) {
                var t = new kA
                    , n = null != e ? e.toString() : A.initialValue;
                t.write(n);
                var r = new VA(t.read());
                switch (A.type) {
                    case pe.IDENT_VALUE:
                        var o = r.parseComponentValue();
                        return A.parse(GA(o) ? o.value : A.initialValue);
                    case pe.VALUE:
                        return A.parse(r.parseComponentValue());
                    case pe.LIST:
                        return A.parse(r.parseComponentValues());
                    case pe.TOKEN_VALUE:
                        return r.parseComponentValue();
                    case pe.TYPE_VALUE:
                        switch (A.format) {
                            case "angle":
                                return ae.parse(r.parseComponentValue());
                            case "color":
                                return le.parse(r.parseComponentValue());
                            case "image":
                                return nt.parse(r.parseComponentValue());
                            case "length":
                                var s = r.parseComponentValue();
                                return Ae(s) ? s : ne;
                            case "length-percentage":
                                var i = r.parseComponentValue();
                                return ee(i) ? i : ne
                        }
                }
                throw new Error("Attempting to parse unsupported css format type " + A.format)
            }, Yn = function(A) {
                this.styles = new zn(window.getComputedStyle(A, null)),
                    this.textNodes = [],
                    this.elements = [],
                null !== this.styles.transform && Kr(A) && (A.style.transform = "none"),
                    this.bounds = N(A),
                    this.flags = 0
            }, Wn = function(A, e) {
                this.text = A,
                    this.bounds = e
            }, qn = function(A) {
                var e = A.ownerDocument;
                if (e) {
                    var t = e.createElement("html2canvaswrapper");
                    t.appendChild(A.cloneNode(!0));
                    var n = A.parentNode;
                    if (n) {
                        n.replaceChild(t, A);
                        var r = N(t);
                        return t.firstChild && n.replaceChild(t.firstChild, t),
                            r
                    }
                }
                return new v(0,0,0,0)
            }, Zn = function(A, e, t) {
                var n = A.ownerDocument;
                if (!n)
                    throw new Error("Node has no owner document");
                var r = n.createRange();
                return r.setStart(A, e),
                    r.setEnd(A, e + t),
                    v.fromClientRect(r.getBoundingClientRect())
            }, $n = function(A, e) {
                return 0 !== e.letterSpacing ? u(A).map(function(A) {
                    return Q(A)
                }) : Ar(A, e)
            }, Ar = function(A, e) {
                for (var t, n = function(A, e) {
                    var t = u(A)
                        , n = rA(t, e)
                        , r = n[0]
                        , o = n[1]
                        , s = n[2]
                        , i = t.length
                        , a = 0
                        , c = 0;
                    return {
                        next: function() {
                            if (c >= i) {
                                return {
                                    done: true,
                                    value: null
                                }
                            }
                            var A = X;
                            while (c < i && (A = nA(t, o, r, ++c, s)) === X) {}
                            if (A !== X || c === i) {
                                var e = new oA(t,A,a,c);
                                a = c;
                                return {
                                    value: e,
                                    done: false
                                }
                            }
                            return {
                                done: true,
                                value: null
                            }
                        }
                    }
                }(A, {
                    lineBreak: e.lineBreak,
                    wordBreak: e.overflowWrap === en.BREAK_WORD ? "break-word" : e.wordBreak
                }), r = []; !(t = n.next()).done; )
                    t.value && r.push(t.value.slice());
                return r
            }, er = function(A, e) {
                var t, n, r, o, s, i;
                this.text = tr(A.data, e.textTransform),
                    this.textBounds = (t = this.text,
                        r = A,
                        o = $n(t, n = e),
                        s = [],
                        i = 0,
                        o.forEach(function(A) {
                            if (n.textDecorationLine.length || 0 < A.trim().length)
                                if (Se.SUPPORT_RANGE_BOUNDS)
                                    s.push(new Wn(A,Zn(r, i, A.length)));
                                else {
                                    var e = r.splitText(A.length);
                                    s.push(new Wn(A,qn(r))),
                                        r = e
                                }
                            else
                                Se.SUPPORT_RANGE_BOUNDS || (r = r.splitText(A.length));
                            i += A.length
                        }),
                        s)
            }, tr = function(A, e) {
                switch (e) {
                    case dn.LOWERCASE:
                        return A.toLowerCase();
                    case dn.CAPITALIZE:
                        return A.replace(nr, rr);
                    case dn.UPPERCASE:
                        return A.toUpperCase();
                    default:
                        return A
                }
            }, nr = /(^|\s|:|-|\(|\))([a-z])/g, rr = function(A, e, t) {
                return 0 < A.length ? e + t.toUpperCase() : A
            }, or = function(t) {
                function A(A) {
                    var e = t.call(this, A) || this;
                    return e.src = A.currentSrc || A.src,
                        e.intrinsicWidth = A.naturalWidth,
                        e.intrinsicHeight = A.naturalHeight,
                        je.getInstance().addImage(e.src),
                        e
                }
                return e(A, t),
                    A
            }(Yn), sr = function(t) {
                function A(A) {
                    var e = t.call(this, A) || this;
                    return e.canvas = A,
                        e.intrinsicWidth = A.width,
                        e.intrinsicHeight = A.height,
                        e
                }
                return e(A, t),
                    A
            }(Yn), ir = function(n) {
                function A(A) {
                    var e = n.call(this, A) || this
                        , t = new XMLSerializer;
                    return e.svg = "data:image/svg+xml," + encodeURIComponent(t.serializeToString(A)),
                        e.intrinsicWidth = A.width.baseVal.value,
                        e.intrinsicHeight = A.height.baseVal.value,
                        je.getInstance().addImage(e.svg),
                        e
                }
                return e(A, n),
                    A
            }(Yn), ar = function(t) {
                function A(A) {
                    var e = t.call(this, A) || this;
                    return e.value = A.value,
                        e
                }
                return e(A, t),
                    A
            }(Yn), cr = function(t) {
                function A(A) {
                    var e = t.call(this, A) || this;
                    return e.start = A.start,
                        e.reversed = "boolean" == typeof A.reversed && !0 === A.reversed,
                        e
                }
                return e(A, t),
                    A
            }(Yn), ur = [{
                type: p.DIMENSION_TOKEN,
                flags: 0,
                unit: "px",
                number: 3
            }], Br = [{
                type: p.PERCENTAGE_TOKEN,
                flags: 0,
                number: 50
            }], lr = "checkbox", dr = "radio", wr = "password", Qr = 707406591, hr = function(t) {
                function A(A) {
                    var e = t.call(this, A) || this;
                    switch (e.type = A.type.toLowerCase(),
                        e.checked = A.checked,
                        e.value = function(A) {
                            var e = A.type === wr ? new Array(A.value.length + 1).join("•") : A.value;
                            return e.length === 0 ? A.placeholder || "" : e
                        }(A),
                    e.type !== lr && e.type !== dr || (e.styles.backgroundColor = 3739148031,
                        e.styles.borderTopColor = e.styles.borderRightColor = e.styles.borderBottomColor = e.styles.borderLeftColor = 2779096575,
                        e.styles.borderTopWidth = e.styles.borderRightWidth = e.styles.borderBottomWidth = e.styles.borderLeftWidth = 1,
                        e.styles.borderTopStyle = e.styles.borderRightStyle = e.styles.borderBottomStyle = e.styles.borderLeftStyle = lt.SOLID,
                        e.styles.backgroundClip = [Ue.BORDER_BOX],
                        e.styles.backgroundOrigin = [0],
                        e.bounds = function(A) {
                            if (A.width > A.height) {
                                return new v(A.left + (A.width - A.height) / 2,A.top,A.height,A.height)
                            } else if (A.width < A.height) {
                                return new v(A.left,A.top + (A.height - A.width) / 2,A.width,A.width)
                            }
                            return A
                        }(e.bounds)),
                        e.type) {
                        case lr:
                            e.styles.borderTopRightRadius = e.styles.borderTopLeftRadius = e.styles.borderBottomRightRadius = e.styles.borderBottomLeftRadius = ur;
                            break;
                        case dr:
                            e.styles.borderTopRightRadius = e.styles.borderTopLeftRadius = e.styles.borderBottomRightRadius = e.styles.borderBottomLeftRadius = Br
                    }
                    return e
                }
                return e(A, t),
                    A
            }(Yn), fr = function(n) {
                function A(A) {
                    var e = n.call(this, A) || this
                        , t = A.options[A.selectedIndex || 0];
                    return e.value = t && t.text || "",
                        e
                }
                return e(A, n),
                    A
            }(Yn), gr = function(t) {
                function A(A) {
                    var e = t.call(this, A) || this;
                    return e.value = A.value,
                        e
                }
                return e(A, t),
                    A
            }(Yn), pr = function(A) {
                return le.parse(VA.create(A).parseComponentValue())
            }, Ur = function(r) {
                function A(A) {
                    var e = r.call(this, A) || this;
                    e.src = A.src,
                        e.width = parseInt(A.width, 10) || 0,
                        e.height = parseInt(A.height, 10) || 0,
                        e.backgroundColor = e.styles.backgroundColor;
                    try {
                        if (A.contentWindow && A.contentWindow.document && A.contentWindow.document.documentElement) {
                            e.tree = Fr(A.contentWindow.document.documentElement);
                            var t = A.contentWindow.document.documentElement ? pr(getComputedStyle(A.contentWindow.document.documentElement).backgroundColor) : me.TRANSPARENT
                                , n = A.contentWindow.document.body ? pr(getComputedStyle(A.contentWindow.document.body).backgroundColor) : me.TRANSPARENT;
                            e.backgroundColor = de(t) ? de(n) ? e.styles.backgroundColor : n : t
                        }
                    } catch (A) {}
                    return e
                }
                return e(A, r),
                    A
            }(Yn), Cr = ["OL", "UL", "MENU"], Er = function(A, e, t) {
                for (var n = A.firstChild, r = void 0; n; n = r)
                    if (r = n.nextSibling,
                    vr(n) && 0 < n.data.trim().length)
                        e.textNodes.push(new er(n,e.styles));
                    else if (Nr(n)) {
                        var o = mr(n);
                        o.styles.isVisible() && (Hr(n, o, t) ? o.flags |= 4 : _r(o.styles) && (o.flags |= 2),
                        -1 !== Cr.indexOf(n.tagName) && (o.flags |= 8),
                            e.elements.push(o),
                        Mr(n) || Tr(n) || xr(n) || Er(n, o, t))
                    }
            }, mr = function(A) {
                return Sr(A) ? new or(A) : Or(A) ? new sr(A) : Tr(A) ? new ir(A) : yr(A) ? new ar(A) : br(A) ? new cr(A) : Ir(A) ? new hr(A) : xr(A) ? new fr(A) : Mr(A) ? new gr(A) : Lr(A) ? new Ur(A) : new Yn(A)
            }, Fr = function(A) {
                var e = mr(A);
                return e.flags |= 4,
                    Er(A, e, e),
                    e
            }, Hr = function(A, e, t) {
                return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || Rr(A) && t.styles.isTransparent()
            }, _r = function(A) {
                return A.isPositioned() || A.isFloating()
            }, vr = function(A) {
                return A.nodeType === Node.TEXT_NODE
            }, Nr = function(A) {
                return A.nodeType === Node.ELEMENT_NODE
            }, Kr = function(A) {
                return void 0 !== A.style
            }, yr = function(A) {
                return "LI" === A.tagName
            }, br = function(A) {
                return "OL" === A.tagName
            }, Ir = function(A) {
                return "INPUT" === A.tagName
            }, Tr = function(A) {
                return "svg" === A.tagName
            }, Rr = function(A) {
                return "BODY" === A.tagName
            }, Or = function(A) {
                return "CANVAS" === A.tagName
            }, Sr = function(A) {
                return "IMG" === A.tagName
            }, Lr = function(A) {
                return "IFRAME" === A.tagName
            }, jr = function(A) {
                return "STYLE" === A.tagName
            }, Mr = function(A) {
                return "TEXTAREA" === A.tagName
            }, xr = function(A) {
                return "SELECT" === A.tagName
            }, Dr = function() {
                function A() {
                    this.counters = {}
                }
                return A.prototype.getCounterValue = function(A) {
                    var e = this.counters[A];
                    return e && e.length ? e[e.length - 1] : 1
                }
                    ,
                    A.prototype.getCounterValues = function(A) {
                        var e = this.counters[A];
                        return e || []
                    }
                    ,
                    A.prototype.pop = function(A) {
                        var e = this;
                        A.forEach(function(A) {
                            return e.counters[A].pop()
                        })
                    }
                    ,
                    A.prototype.parse = function(A) {
                        var t = this
                            , e = A.counterIncrement
                            , n = A.counterReset
                            , r = !0;
                        null !== e && e.forEach(function(A) {
                            var e = t.counters[A.counter];
                            e && 0 !== A.increment && (r = !1,
                                e[Math.max(0, e.length - 1)] += A.increment)
                        });
                        var o = [];
                        return r && n.forEach(function(A) {
                            var e = t.counters[A.counter];
                            o.push(A.counter),
                                (e = e || (t.counters[A.counter] = [])).push(A.reset)
                        }),
                            o
                    }
                    ,
                    A
            }(), Pr = {
                integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
                values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
            }, kr = {
                integers: [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                values: ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"]
            }, Vr = {
                integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                values: ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"]
            }, zr = {
                integers: [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
                values: ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"]
            }, Xr = function(n, A, e, r, t, o) {
                return n < A || e < n ? Zr(n, t, 0 < o.length) : r.integers.reduce(function(A, e, t) {
                    for (; e <= n; )
                        n -= e,
                            A += r.values[t];
                    return A
                }, "") + o
            }, Gr = function(A, e, t, n) {
                for (var r = ""; t || A--,
                    r = n(A) + r,
                e <= (A /= e) * e; )
                    ;
                return r
            }, Jr = function(A, e, t, n, r) {
                var o = t - e + 1;
                return (A < 0 ? "-" : "") + (Gr(Math.abs(A), o, n, function(A) {
                    return Q(Math.floor(A % o) + e)
                }) + r)
            }, Yr = function(A, e, t) {
                void 0 === t && (t = ". ");
                var n = e.length;
                return Gr(Math.abs(A), n, !1, function(A) {
                    return e[Math.floor(A % n)]
                }) + t
            }, Wr = function(A, e, t, n, r, o) {
                if (A < -9999 || 9999 < A)
                    return Zr(A, Xt.CJK_DECIMAL, 0 < r.length);
                var s = Math.abs(A)
                    , i = r;
                if (0 === s)
                    return e[0] + i;
                for (var a = 0; 0 < s && a <= 4; a++) {
                    var c = s % 10;
                    0 == c && jn(o, 1) && "" !== i ? i = e[c] + i : 1 < c || 1 == c && 0 === a || 1 == c && 1 === a && jn(o, 2) || 1 == c && 1 === a && jn(o, 4) && 100 < A || 1 == c && 1 < a && jn(o, 8) ? i = e[c] + (0 < a ? t[a - 1] : "") + i : 1 == c && 0 < a && (i = t[a - 1] + i),
                        s = Math.floor(s / 10)
                }
                return (A < 0 ? n : "") + i
            }, qr = "마이너스", Zr = function(A, e, t) {
                var n = t ? ". " : ""
                    , r = t ? "、" : ""
                    , o = t ? ", " : ""
                    , s = t ? " " : "";
                switch (e) {
                    case Xt.DISC:
                        return "•" + s;
                    case Xt.CIRCLE:
                        return "◦" + s;
                    case Xt.SQUARE:
                        return "◾" + s;
                    case Xt.DECIMAL_LEADING_ZERO:
                        var i = Jr(A, 48, 57, !0, n);
                        return i.length < 4 ? "0" + i : i;
                    case Xt.CJK_DECIMAL:
                        return Yr(A, "〇一二三四五六七八九", r);
                    case Xt.LOWER_ROMAN:
                        return Xr(A, 1, 3999, Pr, Xt.DECIMAL, n).toLowerCase();
                    case Xt.UPPER_ROMAN:
                        return Xr(A, 1, 3999, Pr, Xt.DECIMAL, n);
                    case Xt.LOWER_GREEK:
                        return Jr(A, 945, 969, !1, n);
                    case Xt.LOWER_ALPHA:
                        return Jr(A, 97, 122, !1, n);
                    case Xt.UPPER_ALPHA:
                        return Jr(A, 65, 90, !1, n);
                    case Xt.ARABIC_INDIC:
                        return Jr(A, 1632, 1641, !0, n);
                    case Xt.ARMENIAN:
                    case Xt.UPPER_ARMENIAN:
                        return Xr(A, 1, 9999, kr, Xt.DECIMAL, n);
                    case Xt.LOWER_ARMENIAN:
                        return Xr(A, 1, 9999, kr, Xt.DECIMAL, n).toLowerCase();
                    case Xt.BENGALI:
                        return Jr(A, 2534, 2543, !0, n);
                    case Xt.CAMBODIAN:
                    case Xt.KHMER:
                        return Jr(A, 6112, 6121, !0, n);
                    case Xt.CJK_EARTHLY_BRANCH:
                        return Yr(A, "子丑寅卯辰巳午未申酉戌亥", r);
                    case Xt.CJK_HEAVENLY_STEM:
                        return Yr(A, "甲乙丙丁戊己庚辛壬癸", r);
                    case Xt.CJK_IDEOGRAPHIC:
                    case Xt.TRAD_CHINESE_INFORMAL:
                        return Wr(A, "零一二三四五六七八九", "十百千萬", "負", r, 14);
                    case Xt.TRAD_CHINESE_FORMAL:
                        return Wr(A, "零壹貳參肆伍陸柒捌玖", "拾佰仟萬", "負", r, 15);
                    case Xt.SIMP_CHINESE_INFORMAL:
                        return Wr(A, "零一二三四五六七八九", "十百千萬", "负", r, 14);
                    case Xt.SIMP_CHINESE_FORMAL:
                        return Wr(A, "零壹贰叁肆伍陆柒捌玖", "拾佰仟萬", "负", r, 15);
                    case Xt.JAPANESE_INFORMAL:
                        return Wr(A, "〇一二三四五六七八九", "十百千万", "マイナス", r, 0);
                    case Xt.JAPANESE_FORMAL:
                        return Wr(A, "零壱弐参四伍六七八九", "拾百千万", "マイナス", r, 7);
                    case Xt.KOREAN_HANGUL_FORMAL:
                        return Wr(A, "영일이삼사오육칠팔구", "십백천만", qr, o, 7);
                    case Xt.KOREAN_HANJA_INFORMAL:
                        return Wr(A, "零一二三四五六七八九", "十百千萬", qr, o, 0);
                    case Xt.KOREAN_HANJA_FORMAL:
                        return Wr(A, "零壹貳參四五六七八九", "拾百千", qr, o, 7);
                    case Xt.DEVANAGARI:
                        return Jr(A, 2406, 2415, !0, n);
                    case Xt.GEORGIAN:
                        return Xr(A, 1, 19999, zr, Xt.DECIMAL, n);
                    case Xt.GUJARATI:
                        return Jr(A, 2790, 2799, !0, n);
                    case Xt.GURMUKHI:
                        return Jr(A, 2662, 2671, !0, n);
                    case Xt.HEBREW:
                        return Xr(A, 1, 10999, Vr, Xt.DECIMAL, n);
                    case Xt.HIRAGANA:
                        return Yr(A, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
                    case Xt.HIRAGANA_IROHA:
                        return Yr(A, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
                    case Xt.KANNADA:
                        return Jr(A, 3302, 3311, !0, n);
                    case Xt.KATAKANA:
                        return Yr(A, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", r);
                    case Xt.KATAKANA_IROHA:
                        return Yr(A, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", r);
                    case Xt.LAO:
                        return Jr(A, 3792, 3801, !0, n);
                    case Xt.MONGOLIAN:
                        return Jr(A, 6160, 6169, !0, n);
                    case Xt.MYANMAR:
                        return Jr(A, 4160, 4169, !0, n);
                    case Xt.ORIYA:
                        return Jr(A, 2918, 2927, !0, n);
                    case Xt.PERSIAN:
                        return Jr(A, 1776, 1785, !0, n);
                    case Xt.TAMIL:
                        return Jr(A, 3046, 3055, !0, n);
                    case Xt.TELUGU:
                        return Jr(A, 3174, 3183, !0, n);
                    case Xt.THAI:
                        return Jr(A, 3664, 3673, !0, n);
                    case Xt.TIBETAN:
                        return Jr(A, 3872, 3881, !0, n);
                    case Xt.DECIMAL:
                    default:
                        return Jr(A, 48, 57, !0, n)
                }
            }, $r = "data-html2canvas-ignore", Ao = function() {
                function A(A, e) {
                    if (this.options = e,
                        this.scrolledElements = [],
                        this.referenceElement = A,
                        this.counters = new Dr,
                        this.quoteDepth = 0,
                        !A.ownerDocument)
                        throw new Error("Cloned element does not have an owner document");
                    this.documentElement = this.cloneNode(A.ownerDocument.documentElement)
                }
                return A.prototype.toIFrame = function(A, t) {
                    var e = this
                        , n = to(A, t);
                    if (!n.contentWindow)
                        return Promise.reject("Unable to find iframe window");
                    var r = A.defaultView.pageXOffset
                        , o = A.defaultView.pageYOffset
                        , s = n.contentWindow
                        , i = s.document
                        , a = no(n).then(function() {
                        return c(e, void 0, void 0, function() {
                            var e;
                            return S(this, function(A) {
                                switch (A.label) {
                                    case 0:
                                        return this.scrolledElements.forEach(io),
                                        s && (s.scrollTo(t.left, t.top),
                                        !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || s.scrollY === t.top && s.scrollX === t.left || (i.documentElement.style.top = -t.top + "px",
                                            i.documentElement.style.left = -t.left + "px",
                                            i.documentElement.style.position = "absolute")),
                                            e = this.options.onclone,
                                            void 0 === this.clonedReferenceElement ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : i.fonts && i.fonts.ready ? [4, i.fonts.ready] : [3, 2];
                                    case 1:
                                        A.sent(),
                                            A.label = 2;
                                    case 2:
                                        return "function" == typeof e ? [2, Promise.resolve().then(function() {
                                            return e(i)
                                        }).then(function() {
                                            return n
                                        })] : [2, n]
                                }
                            })
                        })
                    });
                    return i.open(),
                        i.write(oo(document.doctype) + "<html></html>"),
                        so(this.referenceElement.ownerDocument, r, o),
                        i.replaceChild(i.adoptNode(this.documentElement), i.documentElement),
                        i.close(),
                        a
                }
                    ,
                    A.prototype.createElementClone = function(A) {
                        return Or(A) ? this.createCanvasClone(A) : jr(A) ? this.createStyleClone(A) : A.cloneNode(!1)
                    }
                    ,
                    A.prototype.createStyleClone = function(A) {
                        try {
                            var e = A.sheet;
                            if (e && e.cssRules) {
                                var t = [].slice.call(e.cssRules, 0).reduce(function(A, e) {
                                    return e && "string" == typeof e.cssText ? A + e.cssText : A
                                }, "")
                                    , n = A.cloneNode(!1);
                                return n.textContent = t,
                                    n
                            }
                        } catch (A) {
                            if (Le.getInstance(this.options.id).error("Unable to access cssRules property", A),
                            "SecurityError" !== A.name)
                                throw A
                        }
                        return A.cloneNode(!1)
                    }
                    ,
                    A.prototype.createCanvasClone = function(A) {
                        if (this.options.inlineImages && A.ownerDocument) {
                            var e = A.ownerDocument.createElement("img");
                            try {
                                return e.src = A.toDataURL(),
                                    e
                            } catch (A) {
                                Le.getInstance(this.options.id).info("Unable to clone canvas contents, canvas is tainted")
                            }
                        }
                        var t = A.cloneNode(!1);
                        try {
                            t.width = A.width,
                                t.height = A.height;
                            var n = A.getContext("2d")
                                , r = t.getContext("2d");
                            return r && (n ? r.putImageData(n.getImageData(0, 0, A.width, A.height), 0, 0) : r.drawImage(A, 0, 0)),
                                t
                        } catch (A) {}
                        return t
                    }
                    ,
                    A.prototype.cloneNode = function(A) {
                        if (vr(A))
                            return document.createTextNode(A.data);
                        if (!A.ownerDocument)
                            return A.cloneNode(!1);
                        var e = A.ownerDocument.defaultView;
                        if (Kr(A) && e) {
                            var t = this.createElementClone(A)
                                , n = e.getComputedStyle(A)
                                , r = e.getComputedStyle(A, ":before")
                                , o = e.getComputedStyle(A, ":after");
                            this.referenceElement === A && (this.clonedReferenceElement = t),
                            Rr(t) && Bo(t);
                            for (var s = this.counters.parse(new Gn(n)), i = this.resolvePseudoContent(A, t, r, Sn.BEFORE), a = A.firstChild; a; a = a.nextSibling)
                                Nr(a) && ("SCRIPT" === a.tagName || a.hasAttribute($r) || "function" == typeof this.options.ignoreElements && this.options.ignoreElements(a)) || this.options.copyStyles && Nr(a) && jr(a) || t.appendChild(this.cloneNode(a));
                            i && t.insertBefore(i, t.firstChild);
                            var c = this.resolvePseudoContent(A, t, o, Sn.AFTER);
                            return c && t.appendChild(c),
                                this.counters.pop(s),
                            n && this.options.copyStyles && !Lr(A) && ro(n, t),
                            0 === A.scrollTop && 0 === A.scrollLeft || this.scrolledElements.push([t, A.scrollLeft, A.scrollTop]),
                            (Mr(A) || xr(A)) && (Mr(t) || xr(t)) && (t.value = A.value),
                                t
                        }
                        return A.cloneNode(!1)
                    }
                    ,
                    A.prototype.resolvePseudoContent = function(w, A, e, t) {
                        var Q = this;
                        if (e) {
                            var n = e.content
                                , h = A.ownerDocument;
                            if (h && n && "none" !== n && "-moz-alt-content" !== n && "none" !== e.display) {
                                this.counters.parse(new Gn(e));
                                var f = new Xn(e)
                                    , g = h.createElement("html2canvaspseudoelement");
                                return ro(e, g),
                                    f.content.forEach(function(A) {
                                        if (A.type === p.STRING_TOKEN)
                                            g.appendChild(h.createTextNode(A.value));
                                        else if (A.type === p.URL_TOKEN) {
                                            var e = h.createElement("img");
                                            e.src = A.value,
                                                e.style.opacity = "1",
                                                g.appendChild(e)
                                        } else if (A.type === p.FUNCTION) {
                                            if ("attr" === A.name) {
                                                var t = A.values.filter(GA);
                                                t.length && g.appendChild(h.createTextNode(w.getAttribute(t[0].value) || ""))
                                            } else if ("counter" === A.name) {
                                                var n = A.values.filter(qA)
                                                    , r = n[0]
                                                    , o = n[1];
                                                if (r && GA(r)) {
                                                    var s = Q.counters.getCounterValue(r.value)
                                                        , i = o && GA(o) ? Yt.parse(o.value) : Xt.DECIMAL;
                                                    g.appendChild(h.createTextNode(Zr(s, i, !1)))
                                                }
                                            } else if ("counters" === A.name) {
                                                var a = A.values.filter(qA)
                                                    , r = a[0]
                                                    , c = a[1]
                                                    , o = a[2];
                                                if (r && GA(r)) {
                                                    var u = Q.counters.getCounterValues(r.value)
                                                        , B = o && GA(o) ? Yt.parse(o.value) : Xt.DECIMAL
                                                        , l = c && c.type === p.STRING_TOKEN ? c.value : ""
                                                        , d = u.map(function(A) {
                                                        return Zr(A, B, !1)
                                                    }).join(l);
                                                    g.appendChild(h.createTextNode(d))
                                                }
                                            }
                                        } else if (A.type === p.IDENT_TOKEN)
                                            switch (A.value) {
                                                case "open-quote":
                                                    g.appendChild(h.createTextNode(kn(f.quotes, Q.quoteDepth++, !0)));
                                                    break;
                                                case "close-quote":
                                                    g.appendChild(h.createTextNode(kn(f.quotes, --Q.quoteDepth, !1)));
                                                    break;
                                                default:
                                                    g.appendChild(h.createTextNode(A.value))
                                            }
                                    }),
                                    g.className = ao + " " + co,
                                    A.className += t === Sn.BEFORE ? " " + ao : " " + co,
                                    g
                            }
                        }
                    }
                    ,
                    A.destroy = function(A) {
                        return !!A.parentNode && (A.parentNode.removeChild(A),
                            !0)
                    }
                    ,
                    A
            }();
            !function(A) {
                A[A.BEFORE = 0] = "BEFORE",
                    A[A.AFTER = 1] = "AFTER"
            }(Sn = Sn || {});
            var eo, to = function(A, e) {
                var t = A.createElement("iframe");
                return t.className = "html2canvas-container",
                    t.style.visibility = "hidden",
                    t.style.position = "fixed",
                    t.style.left = "-10000px",
                    t.style.top = "0px",
                    t.style.border = "0",
                    t.width = e.width.toString(),
                    t.height = e.height.toString(),
                    t.scrolling = "no",
                    t.setAttribute($r, "true"),
                    A.body.appendChild(t),
                    t
            }, no = function(r) {
                return new Promise(function(e, A) {
                        var t = r.contentWindow;
                        if (!t)
                            return A("No window assigned for iframe");
                        var n = t.document;
                        t.onload = r.onload = n.onreadystatechange = function() {
                            t.onload = r.onload = n.onreadystatechange = null;
                            var A = setInterval(function() {
                                0 < n.body.childNodes.length && "complete" === n.readyState && (clearInterval(A),
                                    e(r))
                            }, 50)
                        }
                    }
                )
            }, ro = function(A, e) {
                for (var t = A.length - 1; 0 <= t; t--) {
                    var n = A.item(t);
                    "content" !== n && e.style.setProperty(n, A.getPropertyValue(n))
                }
                return e
            }, oo = function(A) {
                var e = "";
                return A && (e += "<!DOCTYPE ",
                A.name && (e += A.name),
                A.internalSubset && (e += A.internalSubset),
                A.publicId && (e += '"' + A.publicId + '"'),
                A.systemId && (e += '"' + A.systemId + '"'),
                    e += ">"),
                    e
            }, so = function(A, e, t) {
                A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t)
            }, io = function(A) {
                var e = A[0]
                    , t = A[1]
                    , n = A[2];
                e.scrollLeft = t,
                    e.scrollTop = n
            }, ao = "___html2canvas___pseudoelement_before", co = "___html2canvas___pseudoelement_after", uo = '{\n    content: "" !important;\n    display: none !important;\n}', Bo = function(A) {
                lo(A, "." + ao + ":before" + uo + "\n         ." + co + ":after" + uo)
            }, lo = function(A, e) {
                var t = A.ownerDocument;
                if (t) {
                    var n = t.createElement("style");
                    n.textContent = e,
                        A.appendChild(n)
                }
            };
            !function(A) {
                A[A.VECTOR = 0] = "VECTOR",
                    A[A.BEZIER_CURVE = 1] = "BEZIER_CURVE"
            }(eo = eo || {});
            var wo, Qo = function(A, t) {
                return A.length === t.length && A.some(function(A, e) {
                    return A === t[e]
                })
            }, ho = function() {
                function t(A, e) {
                    this.type = eo.VECTOR,
                        this.x = A,
                        this.y = e
                }
                return t.prototype.add = function(A, e) {
                    return new t(this.x + A,this.y + e)
                }
                    ,
                    t
            }(), fo = function(A, e, t) {
                return new ho(A.x + (e.x - A.x) * t,A.y + (e.y - A.y) * t)
            }, go = function() {
                function a(A, e, t, n) {
                    this.type = eo.BEZIER_CURVE,
                        this.start = A,
                        this.startControl = e,
                        this.endControl = t,
                        this.end = n
                }
                return a.prototype.subdivide = function(A, e) {
                    var t = fo(this.start, this.startControl, A)
                        , n = fo(this.startControl, this.endControl, A)
                        , r = fo(this.endControl, this.end, A)
                        , o = fo(t, n, A)
                        , s = fo(n, r, A)
                        , i = fo(o, s, A);
                    return e ? new a(this.start,t,o,i) : new a(i,s,r,this.end)
                }
                    ,
                    a.prototype.add = function(A, e) {
                        return new a(this.start.add(A, e),this.startControl.add(A, e),this.endControl.add(A, e),this.end.add(A, e))
                    }
                    ,
                    a.prototype.reverse = function() {
                        return new a(this.end,this.endControl,this.startControl,this.start)
                    }
                    ,
                    a
            }(), po = function(A) {
                return A.type === eo.BEZIER_CURVE
            }, Uo = function(A) {
                var e = A.styles
                    , t = A.bounds
                    , n = se(e.borderTopLeftRadius, t.width, t.height)
                    , r = n[0]
                    , o = n[1]
                    , s = se(e.borderTopRightRadius, t.width, t.height)
                    , i = s[0]
                    , a = s[1]
                    , c = se(e.borderBottomRightRadius, t.width, t.height)
                    , u = c[0]
                    , B = c[1]
                    , l = se(e.borderBottomLeftRadius, t.width, t.height)
                    , d = l[0]
                    , w = l[1]
                    , Q = [];
                Q.push((r + i) / t.width),
                    Q.push((d + u) / t.width),
                    Q.push((o + w) / t.height),
                    Q.push((a + B) / t.height);
                var h = Math.max.apply(Math, Q);
                1 < h && (r /= h,
                    o /= h,
                    i /= h,
                    a /= h,
                    u /= h,
                    B /= h,
                    d /= h,
                    w /= h);
                var f = t.width - i
                    , g = t.height - B
                    , p = t.width - u
                    , U = t.height - w
                    , C = e.borderTopWidth
                    , E = e.borderRightWidth
                    , m = e.borderBottomWidth
                    , F = e.borderLeftWidth
                    , H = ie(e.paddingTop, A.bounds.width)
                    , _ = ie(e.paddingRight, A.bounds.width)
                    , v = ie(e.paddingBottom, A.bounds.width)
                    , N = ie(e.paddingLeft, A.bounds.width);
                this.topLeftBorderBox = 0 < r || 0 < o ? Co(t.left, t.top, r, o, wo.TOP_LEFT) : new ho(t.left,t.top),
                    this.topRightBorderBox = 0 < i || 0 < a ? Co(t.left + f, t.top, i, a, wo.TOP_RIGHT) : new ho(t.left + t.width,t.top),
                    this.bottomRightBorderBox = 0 < u || 0 < B ? Co(t.left + p, t.top + g, u, B, wo.BOTTOM_RIGHT) : new ho(t.left + t.width,t.top + t.height),
                    this.bottomLeftBorderBox = 0 < d || 0 < w ? Co(t.left, t.top + U, d, w, wo.BOTTOM_LEFT) : new ho(t.left,t.top + t.height),
                    this.topLeftPaddingBox = 0 < r || 0 < o ? Co(t.left + F, t.top + C, Math.max(0, r - F), Math.max(0, o - C), wo.TOP_LEFT) : new ho(t.left + F,t.top + C),
                    this.topRightPaddingBox = 0 < i || 0 < a ? Co(t.left + Math.min(f, t.width + F), t.top + C, f > t.width + F ? 0 : i - F, a - C, wo.TOP_RIGHT) : new ho(t.left + t.width - E,t.top + C),
                    this.bottomRightPaddingBox = 0 < u || 0 < B ? Co(t.left + Math.min(p, t.width - F), t.top + Math.min(g, t.height + C), Math.max(0, u - E), B - m, wo.BOTTOM_RIGHT) : new ho(t.left + t.width - E,t.top + t.height - m),
                    this.bottomLeftPaddingBox = 0 < d || 0 < w ? Co(t.left + F, t.top + U, Math.max(0, d - F), w - m, wo.BOTTOM_LEFT) : new ho(t.left + F,t.top + t.height - m),
                    this.topLeftContentBox = 0 < r || 0 < o ? Co(t.left + F + N, t.top + C + H, Math.max(0, r - (F + N)), Math.max(0, o - (C + H)), wo.TOP_LEFT) : new ho(t.left + F + N,t.top + C + H),
                    this.topRightContentBox = 0 < i || 0 < a ? Co(t.left + Math.min(f, t.width + F + N), t.top + C + H, f > t.width + F + N ? 0 : i - F + N, a - (C + H), wo.TOP_RIGHT) : new ho(t.left + t.width - (E + _),t.top + C + H),
                    this.bottomRightContentBox = 0 < u || 0 < B ? Co(t.left + Math.min(p, t.width - (F + N)), t.top + Math.min(g, t.height + C + H), Math.max(0, u - (E + _)), B - (m + v), wo.BOTTOM_RIGHT) : new ho(t.left + t.width - (E + _),t.top + t.height - (m + v)),
                    this.bottomLeftContentBox = 0 < d || 0 < w ? Co(t.left + F + N, t.top + U, Math.max(0, d - (F + N)), w - (m + v), wo.BOTTOM_LEFT) : new ho(t.left + F + N,t.top + t.height - (m + v))
            };
            !function(A) {
                A[A.TOP_LEFT = 0] = "TOP_LEFT",
                    A[A.TOP_RIGHT = 1] = "TOP_RIGHT",
                    A[A.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT",
                    A[A.BOTTOM_LEFT = 3] = "BOTTOM_LEFT"
            }(wo = wo || {});
            var Co = function(A, e, t, n, r) {
                var o = (Math.sqrt(2) - 1) / 3 * 4
                    , s = t * o
                    , i = n * o
                    , a = A + t
                    , c = e + n;
                switch (r) {
                    case wo.TOP_LEFT:
                        return new go(new ho(A,c),new ho(A,c - i),new ho(a - s,e),new ho(a,e));
                    case wo.TOP_RIGHT:
                        return new go(new ho(A,e),new ho(A + s,e),new ho(a,c - i),new ho(a,c));
                    case wo.BOTTOM_RIGHT:
                        return new go(new ho(a,e),new ho(a,e + i),new ho(A + s,c),new ho(A,c));
                    case wo.BOTTOM_LEFT:
                    default:
                        return new go(new ho(a,c),new ho(a - s,c),new ho(A,e + i),new ho(A,e))
                }
            }
                , Eo = function(A) {
                return [A.topLeftBorderBox, A.topRightBorderBox, A.bottomRightBorderBox, A.bottomLeftBorderBox]
            }
                , mo = function(A) {
                return [A.topLeftPaddingBox, A.topRightPaddingBox, A.bottomRightPaddingBox, A.bottomLeftPaddingBox]
            }
                , Fo = function(A, e, t) {
                this.type = 0,
                    this.offsetX = A,
                    this.offsetY = e,
                    this.matrix = t,
                    this.target = 6
            }
                , Ho = function(A, e) {
                this.type = 1,
                    this.target = e,
                    this.path = A
            }
                , _o = function(A) {
                this.element = A,
                    this.inlineLevel = [],
                    this.nonInlineLevel = [],
                    this.negativeZIndex = [],
                    this.zeroOrAutoZIndexOrTransformedOrOpacity = [],
                    this.positiveZIndex = [],
                    this.nonPositionedFloats = [],
                    this.nonPositionedInlineLevel = []
            }
                , vo = function() {
                function A(A, e) {
                    if (this.container = A,
                        this.effects = e.slice(0),
                        this.curves = new Uo(A),
                    null !== A.styles.transform) {
                        var t = A.bounds.left + A.styles.transformOrigin[0].number
                            , n = A.bounds.top + A.styles.transformOrigin[1].number
                            , r = A.styles.transform;
                        this.effects.push(new Fo(t,n,r))
                    }
                    if (A.styles.overflowX !== Jt.VISIBLE) {
                        var o = Eo(this.curves)
                            , s = mo(this.curves);
                        Qo(o, s) ? this.effects.push(new Ho(o,6)) : (this.effects.push(new Ho(o,2)),
                            this.effects.push(new Ho(s,4)))
                    }
                }
                return A.prototype.getParentEffects = function() {
                    var A = this.effects.slice(0);
                    if (this.container.styles.overflowX !== Jt.VISIBLE) {
                        var e = Eo(this.curves)
                            , t = mo(this.curves);
                        Qo(e, t) || A.push(new Ho(t,6))
                    }
                    return A
                }
                    ,
                    A
            }()
                , No = function(u, B, l, d) {
                u.container.elements.forEach(function(A) {
                    var e = jn(A.flags, 4)
                        , t = jn(A.flags, 2)
                        , n = new vo(A,u.getParentEffects());
                    jn(A.styles.display, 2048) && d.push(n);
                    var r = jn(A.flags, 8) ? [] : d;
                    if (e || t) {
                        var o = e || A.styles.isPositioned() ? l : B
                            , s = new _o(n);
                        if (A.styles.isPositioned() || A.styles.opacity < 1 || A.styles.isTransformed()) {
                            var i = A.styles.zIndex.order;
                            if (i < 0) {
                                var a = 0;
                                o.negativeZIndex.some(function(A, e) {
                                    return i > A.element.container.styles.zIndex.order ? (a = e,
                                        !1) : 0 < a
                                }),
                                    o.negativeZIndex.splice(a, 0, s)
                            } else if (0 < i) {
                                var c = 0;
                                o.positiveZIndex.some(function(A, e) {
                                    return i > A.element.container.styles.zIndex.order ? (c = e + 1,
                                        !1) : 0 < c
                                }),
                                    o.positiveZIndex.splice(c, 0, s)
                            } else
                                o.zeroOrAutoZIndexOrTransformedOrOpacity.push(s)
                        } else
                            A.styles.isFloating() ? o.nonPositionedFloats.push(s) : o.nonPositionedInlineLevel.push(s);
                        No(n, s, e ? s : l, r)
                    } else
                        A.styles.isInlineLevel() ? B.inlineLevel.push(n) : B.nonInlineLevel.push(n),
                            No(n, B, l, r);
                    jn(A.flags, 8) && Ko(A, r)
                })
            }
                , Ko = function(A, e) {
                for (var t = A instanceof cr ? A.start : 1, n = A instanceof cr && A.reversed, r = 0; r < e.length; r++) {
                    var o = e[r];
                    o.container instanceof ar && "number" == typeof o.container.value && 0 !== o.container.value && (t = o.container.value),
                        o.listValue = Zr(t, o.container.styles.listStyleType, !0),
                        t += n ? -1 : 1
                }
            }
                , yo = function(A, e, t, n) {
                var r = [];
                return po(A) ? r.push(A.subdivide(.5, !1)) : r.push(A),
                    po(t) ? r.push(t.subdivide(.5, !0)) : r.push(t),
                    po(n) ? r.push(n.subdivide(.5, !0).reverse()) : r.push(n),
                    po(e) ? r.push(e.subdivide(.5, !1).reverse()) : r.push(e),
                    r
            }
                , bo = function(A) {
                var e = A.bounds
                    , t = A.styles;
                return e.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth))
            }
                , Io = function(A) {
                var e = A.styles
                    , t = A.bounds
                    , n = ie(e.paddingLeft, t.width)
                    , r = ie(e.paddingRight, t.width)
                    , o = ie(e.paddingTop, t.width)
                    , s = ie(e.paddingBottom, t.width);
                return t.add(n + e.borderLeftWidth, o + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + n + r), -(e.borderTopWidth + e.borderBottomWidth + o + s))
            }
                , To = function(A, e, t) {
                var n = function(A, e) {
                    return 0 !== A ? 2 !== A ? bo(e) : Io(e) : e.bounds
                }(Lo(A.styles.backgroundOrigin, e), A)
                    , r = function(A, e) {
                    return A !== Ue.BORDER_BOX ? A !== Ue.CONTENT_BOX ? bo(e) : Io(e) : e.bounds
                }(Lo(A.styles.backgroundClip, e), A)
                    , o = So(Lo(A.styles.backgroundSize, e), t, n)
                    , s = o[0]
                    , i = o[1]
                    , a = se(Lo(A.styles.backgroundPosition, e), n.width - s, n.height - i)
                    , c = jo(Lo(A.styles.backgroundRepeat, e), a, o, n, r)
                    , u = Math.round(n.left + a[0])
                    , B = Math.round(n.top + a[1]);
                return [c, u, B, s, i]
            }
                , Ro = function(A) {
                return GA(A) && A.value === ct.AUTO
            }
                , Oo = function(A) {
                return "number" == typeof A
            }
                , So = function(A, e, t) {
                var n = e[0]
                    , r = e[1]
                    , o = e[2]
                    , s = A[0]
                    , i = A[1];
                if (ee(s) && i && ee(i))
                    return [ie(s, t.width), ie(i, t.height)];
                var a = Oo(o);
                if (GA(s) && (s.value === ct.CONTAIN || s.value === ct.COVER)) {
                    if (Oo(o)) {
                        var c = t.width / t.height;
                        return c < o != (s.value === ct.COVER) ? [t.width, t.width / o] : [t.height * o, t.height]
                    }
                    return [t.width, t.height]
                }
                var u = Oo(n)
                    , B = Oo(r)
                    , l = u || B;
                if (Ro(s) && (!i || Ro(i))) {
                    if (u && B)
                        return [n, r];
                    if (!a && !l)
                        return [t.width, t.height];
                    if (l && a) {
                        var d = u ? n : r * o
                            , w = B ? r : n / o;
                        return [d, w]
                    }
                    var Q = u ? n : t.width
                        , h = B ? r : t.height;
                    return [Q, h]
                }
                if (a) {
                    var f = 0
                        , g = 0;
                    return ee(s) ? f = ie(s, t.width) : ee(i) && (g = ie(i, t.height)),
                        Ro(s) ? f = g * o : i && !Ro(i) || (g = f / o),
                        [f, g]
                }
                var p = null
                    , U = null;
                if (ee(s) ? p = ie(s, t.width) : i && ee(i) && (U = ie(i, t.height)),
                null === p || i && !Ro(i) || (U = u && B ? p / n * r : t.height),
                null !== U && Ro(s) && (p = u && B ? U / r * n : t.width),
                null !== p && null !== U)
                    return [p, U];
                throw new Error("Unable to calculate background-size for element")
            }
                , Lo = function(A, e) {
                var t = A[e];
                return void 0 === t ? A[0] : t
            }
                , jo = function(A, e, t, n, r) {
                var o = e[0]
                    , s = e[1]
                    , i = t[0]
                    , a = t[1];
                switch (A) {
                    case rt.REPEAT_X:
                        return [new ho(Math.round(n.left),Math.round(n.top + s)), new ho(Math.round(n.left + n.width),Math.round(n.top + s)), new ho(Math.round(n.left + n.width),Math.round(a + n.top + s)), new ho(Math.round(n.left),Math.round(a + n.top + s))];
                    case rt.REPEAT_Y:
                        return [new ho(Math.round(n.left + o),Math.round(n.top)), new ho(Math.round(n.left + o + i),Math.round(n.top)), new ho(Math.round(n.left + o + i),Math.round(n.height + n.top)), new ho(Math.round(n.left + o),Math.round(n.height + n.top))];
                    case rt.NO_REPEAT:
                        return [new ho(Math.round(n.left + o),Math.round(n.top + s)), new ho(Math.round(n.left + o + i),Math.round(n.top + s)), new ho(Math.round(n.left + o + i),Math.round(n.top + s + a)), new ho(Math.round(n.left + o),Math.round(n.top + s + a))];
                    default:
                        return [new ho(Math.round(r.left),Math.round(r.top)), new ho(Math.round(r.left + r.width),Math.round(r.top)), new ho(Math.round(r.left + r.width),Math.round(r.height + r.top)), new ho(Math.round(r.left),Math.round(r.height + r.top))]
                }
            }
                , Mo = "Hidden Text"
                , xo = function() {
                function A(A) {
                    this._data = {},
                        this._document = A
                }
                return A.prototype.parseMetrics = function(A, e) {
                    var t = this._document.createElement("div")
                        , n = this._document.createElement("img")
                        , r = this._document.createElement("span")
                        , o = this._document.body;
                    t.style.visibility = "hidden",
                        t.style.fontFamily = A,
                        t.style.fontSize = e,
                        t.style.margin = "0",
                        t.style.padding = "0",
                        o.appendChild(t),
                        n.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                        n.width = 1,
                        n.height = 1,
                        n.style.margin = "0",
                        n.style.padding = "0",
                        n.style.verticalAlign = "baseline",
                        r.style.fontFamily = A,
                        r.style.fontSize = e,
                        r.style.margin = "0",
                        r.style.padding = "0",
                        r.appendChild(this._document.createTextNode(Mo)),
                        t.appendChild(r),
                        t.appendChild(n);
                    var s = n.offsetTop - r.offsetTop + 2;
                    t.removeChild(r),
                        t.appendChild(this._document.createTextNode(Mo)),
                        t.style.lineHeight = "normal",
                        n.style.verticalAlign = "super";
                    var i = n.offsetTop - t.offsetTop + 2;
                    return o.removeChild(t),
                        {
                            baseline: s,
                            middle: i
                        }
                }
                    ,
                    A.prototype.getMetrics = function(A, e) {
                        var t = A + " " + e;
                        return void 0 === this._data[t] && (this._data[t] = this.parseMetrics(A, e)),
                            this._data[t]
                    }
                    ,
                    A
            }()
                , Do = function() {
                function h(A) {
                    this._activeEffects = [],
                        this.canvas = A.canvas ? A.canvas : document.createElement("canvas"),
                        this.ctx = this.canvas.getContext("2d"),
                    (this.options = A).canvas || (this.canvas.width = Math.floor(A.width * A.scale),
                        this.canvas.height = Math.floor(A.height * A.scale),
                        this.canvas.style.width = A.width + "px",
                        this.canvas.style.height = A.height + "px"),
                        this.fontMetrics = new xo(document),
                        this.ctx.scale(this.options.scale, this.options.scale),
                        this.ctx.translate(-A.x + A.scrollX, -A.y + A.scrollY),
                        this.ctx.textBaseline = "bottom",
                        this._activeEffects = [],
                        Le.getInstance(A.id).debug("Canvas renderer initialized (" + A.width + "x" + A.height + " at " + A.x + "," + A.y + ") with scale " + A.scale)
                }
                return h.prototype.applyEffects = function(A, e) {
                    for (var t = this; this._activeEffects.length; )
                        this.popEffect();
                    A.filter(function(A) {
                        return jn(A.target, e)
                    }).forEach(function(A) {
                        return t.applyEffect(A)
                    })
                }
                    ,
                    h.prototype.applyEffect = function(A) {
                        this.ctx.save(),
                        function(A) {
                            return A.type === 0
                        }(A) && (this.ctx.translate(A.offsetX, A.offsetY),
                            this.ctx.transform(A.matrix[0], A.matrix[1], A.matrix[2], A.matrix[3], A.matrix[4], A.matrix[5]),
                            this.ctx.translate(-A.offsetX, -A.offsetY)),
                        function(A) {
                            return A.type === 1
                        }(A) && (this.path(A.path),
                            this.ctx.clip()),
                            this._activeEffects.push(A)
                    }
                    ,
                    h.prototype.popEffect = function() {
                        this._activeEffects.pop(),
                            this.ctx.restore()
                    }
                    ,
                    h.prototype.renderStack = function(t) {
                        return c(this, void 0, void 0, function() {
                            var e;
                            return S(this, function(A) {
                                switch (A.label) {
                                    case 0:
                                        return (e = t.element.container.styles).isVisible() ? (this.ctx.globalAlpha = e.opacity,
                                            [4, this.renderStackContent(t)]) : [3, 2];
                                    case 1:
                                        A.sent(),
                                            A.label = 2;
                                    case 2:
                                        return [2]
                                }
                            })
                        })
                    }
                    ,
                    h.prototype.renderNode = function(e) {
                        return c(this, void 0, void 0, function() {
                            return S(this, function(A) {
                                switch (A.label) {
                                    case 0:
                                        return e.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(e)] : [3, 3];
                                    case 1:
                                        return A.sent(),
                                            [4, this.renderNodeContent(e)];
                                    case 2:
                                        A.sent(),
                                            A.label = 3;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }
                    ,
                    h.prototype.renderTextWithLetterSpacing = function(t, A) {
                        var n = this;
                        if (0 === A)
                            this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + t.bounds.height);
                        else {
                            var e = u(t.text).map(function(A) {
                                return Q(A)
                            });
                            e.reduce(function(A, e) {
                                return n.ctx.fillText(e, A, t.bounds.top + t.bounds.height),
                                A + n.ctx.measureText(e).width
                            }, t.bounds.left)
                        }
                    }
                    ,
                    h.prototype.createFontStyle = function(A) {
                        var e = A.fontVariant.filter(function(A) {
                            return "normal" === A || "small-caps" === A
                        }).join("")
                            , t = A.fontFamily.join(", ")
                            , n = zA(A.fontSize) ? "" + A.fontSize.number + A.fontSize.unit : A.fontSize.number + "px";
                        return [[A.fontStyle, e, A.fontWeight, n, t].join(" "), t, n]
                    }
                    ,
                    h.prototype.renderTextNode = function(n, i) {
                        return c(this, void 0, void 0, function() {
                            var e, t, r, o, s = this;
                            return S(this, function(A) {
                                return e = this.createFontStyle(i),
                                    t = e[0],
                                    r = e[1],
                                    o = e[2],
                                    this.ctx.font = t,
                                    n.textBounds.forEach(function(n) {
                                        s.ctx.fillStyle = we(i.color),
                                            s.renderTextWithLetterSpacing(n, i.letterSpacing);
                                        var A = i.textShadow;
                                        A.length && n.text.trim().length && (A.slice(0).reverse().forEach(function(A) {
                                            s.ctx.shadowColor = we(A.color),
                                                s.ctx.shadowOffsetX = A.offsetX.number * s.options.scale,
                                                s.ctx.shadowOffsetY = A.offsetY.number * s.options.scale,
                                                s.ctx.shadowBlur = A.blur.number,
                                                s.ctx.fillText(n.text, n.bounds.left, n.bounds.top + n.bounds.height)
                                        }),
                                            s.ctx.shadowColor = "",
                                            s.ctx.shadowOffsetX = 0,
                                            s.ctx.shadowOffsetY = 0,
                                            s.ctx.shadowBlur = 0),
                                        i.textDecorationLine.length && (s.ctx.fillStyle = we(i.textDecorationColor || i.color),
                                            i.textDecorationLine.forEach(function(A) {
                                                switch (A) {
                                                    case 1:
                                                        var e = s.fontMetrics.getMetrics(r, o).baseline;
                                                        s.ctx.fillRect(n.bounds.left, Math.round(n.bounds.top + e), n.bounds.width, 1);
                                                        break;
                                                    case 2:
                                                        s.ctx.fillRect(n.bounds.left, Math.round(n.bounds.top), n.bounds.width, 1);
                                                        break;
                                                    case 3:
                                                        var t = s.fontMetrics.getMetrics(r, o).middle;
                                                        s.ctx.fillRect(n.bounds.left, Math.ceil(n.bounds.top + t), n.bounds.width, 1)
                                                }
                                            }))
                                    }),
                                    [2]
                            })
                        })
                    }
                    ,
                    h.prototype.renderReplacedElement = function(A, e, t) {
                        if (t && 0 < A.intrinsicWidth && 0 < A.intrinsicHeight) {
                            var n = Io(A)
                                , r = mo(e);
                            this.path(r),
                                this.ctx.save(),
                                this.ctx.clip(),
                                this.ctx.drawImage(t, 0, 0, A.intrinsicWidth, A.intrinsicHeight, n.left, n.top, n.width, n.height),
                                this.ctx.restore()
                        }
                    }
                    ,
                    h.prototype.renderNodeContent = function(Q) {
                        return c(this, void 0, void 0, function() {
                            var e, t, n, r, o, s, i, a, c, u, B, l, d, w;
                            return S(this, function(A) {
                                switch (A.label) {
                                    case 0:
                                        this.applyEffects(Q.effects, 4),
                                            e = Q.container,
                                            t = Q.curves,
                                            n = e.styles,
                                            r = 0,
                                            o = e.textNodes,
                                            A.label = 1;
                                    case 1:
                                        return r < o.length ? (s = o[r],
                                            [4, this.renderTextNode(s, n)]) : [3, 4];
                                    case 2:
                                        A.sent(),
                                            A.label = 3;
                                    case 3:
                                        return r++,
                                            [3, 1];
                                    case 4:
                                        if (!(e instanceof or))
                                            return [3, 8];
                                        A.label = 5;
                                    case 5:
                                        return A.trys.push([5, 7, , 8]),
                                            [4, this.options.cache.match(e.src)];
                                    case 6:
                                        return l = A.sent(),
                                            this.renderReplacedElement(e, t, l),
                                            [3, 8];
                                    case 7:
                                        return A.sent(),
                                            Le.getInstance(this.options.id).error("Error loading image " + e.src),
                                            [3, 8];
                                    case 8:
                                        if (e instanceof sr && this.renderReplacedElement(e, t, e.canvas),
                                            !(e instanceof ir))
                                            return [3, 12];
                                        A.label = 9;
                                    case 9:
                                        return A.trys.push([9, 11, , 12]),
                                            [4, this.options.cache.match(e.svg)];
                                    case 10:
                                        return l = A.sent(),
                                            this.renderReplacedElement(e, t, l),
                                            [3, 12];
                                    case 11:
                                        return A.sent(),
                                            Le.getInstance(this.options.id).error("Error loading svg " + e.svg.substring(0, 255)),
                                            [3, 12];
                                    case 12:
                                        return e instanceof Ur && e.tree ? [4, new h({
                                            id: this.options.id,
                                            scale: this.options.scale,
                                            backgroundColor: e.backgroundColor,
                                            x: 0,
                                            y: 0,
                                            scrollX: 0,
                                            scrollY: 0,
                                            width: e.width,
                                            height: e.height,
                                            cache: this.options.cache,
                                            windowWidth: e.width,
                                            windowHeight: e.height
                                        }).render(e.tree)] : [3, 14];
                                    case 13:
                                        i = A.sent(),
                                        e.width && e.height && this.ctx.drawImage(i, 0, 0, e.width, e.height, e.bounds.left, e.bounds.top, e.bounds.width, e.bounds.height),
                                            A.label = 14;
                                    case 14:
                                        if (e instanceof hr && (a = Math.min(e.bounds.width, e.bounds.height),
                                            e.type === lr ? e.checked && (this.ctx.save(),
                                                this.path([new ho(e.bounds.left + .39363 * a,e.bounds.top + .79 * a), new ho(e.bounds.left + .16 * a,e.bounds.top + .5549 * a), new ho(e.bounds.left + .27347 * a,e.bounds.top + .44071 * a), new ho(e.bounds.left + .39694 * a,e.bounds.top + .5649 * a), new ho(e.bounds.left + .72983 * a,e.bounds.top + .23 * a), new ho(e.bounds.left + .84 * a,e.bounds.top + .34085 * a), new ho(e.bounds.left + .39363 * a,e.bounds.top + .79 * a)]),
                                                this.ctx.fillStyle = we(Qr),
                                                this.ctx.fill(),
                                                this.ctx.restore()) : e.type === dr && e.checked && (this.ctx.save(),
                                                this.ctx.beginPath(),
                                                this.ctx.arc(e.bounds.left + a / 2, e.bounds.top + a / 2, a / 4, 0, 2 * Math.PI, !0),
                                                this.ctx.fillStyle = we(Qr),
                                                this.ctx.fill(),
                                                this.ctx.restore())),
                                        Po(e) && e.value.length) {
                                            switch (this.ctx.font = this.createFontStyle(n)[0],
                                                this.ctx.fillStyle = we(n.color),
                                                this.ctx.textBaseline = "middle",
                                                this.ctx.textAlign = Vo(e.styles.textAlign),
                                                w = Io(e),
                                                c = 0,
                                                e.styles.textAlign) {
                                                case nn.CENTER:
                                                    c += w.width / 2;
                                                    break;
                                                case nn.RIGHT:
                                                    c += w.width
                                            }
                                            u = w.add(c, 0, 0, -w.height / 2 + 1),
                                                this.ctx.save(),
                                                this.path([new ho(w.left,w.top), new ho(w.left + w.width,w.top), new ho(w.left + w.width,w.top + w.height), new ho(w.left,w.top + w.height)]),
                                                this.ctx.clip(),
                                                this.renderTextWithLetterSpacing(new Wn(e.value,u), n.letterSpacing),
                                                this.ctx.restore(),
                                                this.ctx.textBaseline = "bottom",
                                                this.ctx.textAlign = "left"
                                        }
                                        if (!jn(e.styles.display, 2048))
                                            return [3, 20];
                                        if (null === e.styles.listStyleImage)
                                            return [3, 19];
                                        if ((B = e.styles.listStyleImage).type !== Fe.URL)
                                            return [3, 18];
                                        l = void 0,
                                            d = B.url,
                                            A.label = 15;
                                    case 15:
                                        return A.trys.push([15, 17, , 18]),
                                            [4, this.options.cache.match(d)];
                                    case 16:
                                        return l = A.sent(),
                                            this.ctx.drawImage(l, e.bounds.left - (l.width + 10), e.bounds.top),
                                            [3, 18];
                                    case 17:
                                        return A.sent(),
                                            Le.getInstance(this.options.id).error("Error loading list-style-image " + d),
                                            [3, 18];
                                    case 18:
                                        return [3, 20];
                                    case 19:
                                        Q.listValue && e.styles.listStyleType !== Xt.NONE && (this.ctx.font = this.createFontStyle(n)[0],
                                            this.ctx.fillStyle = we(n.color),
                                            this.ctx.textBaseline = "middle",
                                            this.ctx.textAlign = "right",
                                            w = new v(e.bounds.left,e.bounds.top + ie(e.styles.paddingTop, e.bounds.width),e.bounds.width,function(A, e) {
                                                if (GA(A) && A.value === "normal") {
                                                    return 1.2 * e
                                                } else if (A.type === p.NUMBER_TOKEN) {
                                                    return e * A.number
                                                } else if (ee(A)) {
                                                    return ie(A, e)
                                                }
                                                return e
                                            }(n.lineHeight, n.fontSize.number) / 2 + 1),
                                            this.renderTextWithLetterSpacing(new Wn(Q.listValue,w), n.letterSpacing),
                                            this.ctx.textBaseline = "bottom",
                                            this.ctx.textAlign = "left"),
                                            A.label = 20;
                                    case 20:
                                        return [2]
                                }
                            })
                        })
                    }
                    ,
                    h.prototype.renderStackContent = function(h) {
                        return c(this, void 0, void 0, function() {
                            var e, t, n, r, o, s, i, a, c, u, B, l, d, w, Q;
                            return S(this, function(A) {
                                switch (A.label) {
                                    case 0:
                                        return [4, this.renderNodeBackgroundAndBorders(h.element)];
                                    case 1:
                                        A.sent(),
                                            e = 0,
                                            t = h.negativeZIndex,
                                            A.label = 2;
                                    case 2:
                                        return e < t.length ? (Q = t[e],
                                            [4, this.renderStack(Q)]) : [3, 5];
                                    case 3:
                                        A.sent(),
                                            A.label = 4;
                                    case 4:
                                        return e++,
                                            [3, 2];
                                    case 5:
                                        return [4, this.renderNodeContent(h.element)];
                                    case 6:
                                        A.sent(),
                                            n = 0,
                                            r = h.nonInlineLevel,
                                            A.label = 7;
                                    case 7:
                                        return n < r.length ? (Q = r[n],
                                            [4, this.renderNode(Q)]) : [3, 10];
                                    case 8:
                                        A.sent(),
                                            A.label = 9;
                                    case 9:
                                        return n++,
                                            [3, 7];
                                    case 10:
                                        o = 0,
                                            s = h.nonPositionedFloats,
                                            A.label = 11;
                                    case 11:
                                        return o < s.length ? (Q = s[o],
                                            [4, this.renderStack(Q)]) : [3, 14];
                                    case 12:
                                        A.sent(),
                                            A.label = 13;
                                    case 13:
                                        return o++,
                                            [3, 11];
                                    case 14:
                                        i = 0,
                                            a = h.nonPositionedInlineLevel,
                                            A.label = 15;
                                    case 15:
                                        return i < a.length ? (Q = a[i],
                                            [4, this.renderStack(Q)]) : [3, 18];
                                    case 16:
                                        A.sent(),
                                            A.label = 17;
                                    case 17:
                                        return i++,
                                            [3, 15];
                                    case 18:
                                        c = 0,
                                            u = h.inlineLevel,
                                            A.label = 19;
                                    case 19:
                                        return c < u.length ? (Q = u[c],
                                            [4, this.renderNode(Q)]) : [3, 22];
                                    case 20:
                                        A.sent(),
                                            A.label = 21;
                                    case 21:
                                        return c++,
                                            [3, 19];
                                    case 22:
                                        B = 0,
                                            l = h.zeroOrAutoZIndexOrTransformedOrOpacity,
                                            A.label = 23;
                                    case 23:
                                        return B < l.length ? (Q = l[B],
                                            [4, this.renderStack(Q)]) : [3, 26];
                                    case 24:
                                        A.sent(),
                                            A.label = 25;
                                    case 25:
                                        return B++,
                                            [3, 23];
                                    case 26:
                                        d = 0,
                                            w = h.positiveZIndex,
                                            A.label = 27;
                                    case 27:
                                        return d < w.length ? (Q = w[d],
                                            [4, this.renderStack(Q)]) : [3, 30];
                                    case 28:
                                        A.sent(),
                                            A.label = 29;
                                    case 29:
                                        return d++,
                                            [3, 27];
                                    case 30:
                                        return [2]
                                }
                            })
                        })
                    }
                    ,
                    h.prototype.mask = function(A) {
                        this.ctx.beginPath(),
                            this.ctx.moveTo(0, 0),
                            this.ctx.lineTo(this.canvas.width, 0),
                            this.ctx.lineTo(this.canvas.width, this.canvas.height),
                            this.ctx.lineTo(0, this.canvas.height),
                            this.ctx.lineTo(0, 0),
                            this.formatPath(A.slice(0).reverse()),
                            this.ctx.closePath()
                    }
                    ,
                    h.prototype.path = function(A) {
                        this.ctx.beginPath(),
                            this.formatPath(A),
                            this.ctx.closePath()
                    }
                    ,
                    h.prototype.formatPath = function(A) {
                        var n = this;
                        A.forEach(function(A, e) {
                            var t = po(A) ? A.start : A;
                            0 === e ? n.ctx.moveTo(t.x, t.y) : n.ctx.lineTo(t.x, t.y),
                            po(A) && n.ctx.bezierCurveTo(A.startControl.x, A.startControl.y, A.endControl.x, A.endControl.y, A.end.x, A.end.y)
                        })
                    }
                    ,
                    h.prototype.renderRepeat = function(A, e, t, n) {
                        this.path(A),
                            this.ctx.fillStyle = e,
                            this.ctx.translate(t, n),
                            this.ctx.fill(),
                            this.ctx.translate(-t, -n)
                    }
                    ,
                    h.prototype.resizeImage = function(A, e, t) {
                        if (A.width === e && A.height === t)
                            return A;
                        var n = this.canvas.ownerDocument.createElement("canvas");
                        n.width = e,
                            n.height = t;
                        var r = n.getContext("2d");
                        return r.drawImage(A, 0, 0, A.width, A.height, 0, 0, e, t),
                            n
                    }
                    ,
                    h.prototype.renderBackgroundImage = function(O) {
                        return c(this, void 0, void 0, function() {
                            var T, e, R, t, n, r;
                            return S(this, function(A) {
                                switch (A.label) {
                                    case 0:
                                        T = O.styles.backgroundImage.length - 1,
                                            e = function(e) {
                                                var t, n, r, o, s, i, a, c, u, B, l, d, w, Q, h, f, g, p, U, C, E, m, F, H, _, v, N, K, y, b, I;
                                                return S(this, function(A) {
                                                    switch (A.label) {
                                                        case 0:
                                                            if (e.type !== Fe.URL)
                                                                return [3, 5];
                                                            t = void 0,
                                                                n = e.url,
                                                                A.label = 1;
                                                        case 1:
                                                            return A.trys.push([1, 3, , 4]),
                                                                [4, R.options.cache.match(n)];
                                                        case 2:
                                                            return t = A.sent(),
                                                                [3, 4];
                                                        case 3:
                                                            return A.sent(),
                                                                Le.getInstance(R.options.id).error("Error loading background-image " + n),
                                                                [3, 4];
                                                        case 4:
                                                            return t && (r = To(O, T, [t.width, t.height, t.width / t.height]),
                                                                f = r[0],
                                                                m = r[1],
                                                                F = r[2],
                                                                U = r[3],
                                                                C = r[4],
                                                                Q = R.ctx.createPattern(R.resizeImage(t, U, C), "repeat"),
                                                                R.renderRepeat(f, Q, m, F)),
                                                                [3, 6];
                                                        case 5:
                                                            !function(A) {
                                                                return A.type === Fe.LINEAR_GRADIENT
                                                            }(e) ? function(A) {
                                                                return A.type === Fe.RADIAL_GRADIENT
                                                            }(e) && (h = To(O, T, [null, null, null]),
                                                                f = h[0],
                                                                g = h[1],
                                                                p = h[2],
                                                                U = h[3],
                                                                C = h[4],
                                                                E = 0 === e.position.length ? [re] : e.position,
                                                                m = ie(E[0], U),
                                                                F = ie(E[E.length - 1], C),
                                                                H = function(A, e, t, n, r) {
                                                                    var o = 0
                                                                        , s = 0;
                                                                    switch (A.size) {
                                                                        case tt.CLOSEST_SIDE:
                                                                            if (A.shape === et.CIRCLE) {
                                                                                o = s = Math.min(Math.abs(e), Math.abs(e - n), Math.abs(t), Math.abs(t - r))
                                                                            } else if (A.shape === et.ELLIPSE) {
                                                                                o = Math.min(Math.abs(e), Math.abs(e - n));
                                                                                s = Math.min(Math.abs(t), Math.abs(t - r))
                                                                            }
                                                                            break;
                                                                        case tt.CLOSEST_CORNER:
                                                                            if (A.shape === et.CIRCLE) {
                                                                                o = s = Math.min(ye(e, t), ye(e, t - r), ye(e - n, t), ye(e - n, t - r))
                                                                            } else if (A.shape === et.ELLIPSE) {
                                                                                var i = Math.min(Math.abs(t), Math.abs(t - r)) / Math.min(Math.abs(e), Math.abs(e - n));
                                                                                var a = be(n, r, e, t, true)
                                                                                    , c = a[0]
                                                                                    , u = a[1];
                                                                                o = ye(c - e, (u - t) / i);
                                                                                s = i * o
                                                                            }
                                                                            break;
                                                                        case tt.FARTHEST_SIDE:
                                                                            if (A.shape === et.CIRCLE) {
                                                                                o = s = Math.max(Math.abs(e), Math.abs(e - n), Math.abs(t), Math.abs(t - r))
                                                                            } else if (A.shape === et.ELLIPSE) {
                                                                                o = Math.max(Math.abs(e), Math.abs(e - n));
                                                                                s = Math.max(Math.abs(t), Math.abs(t - r))
                                                                            }
                                                                            break;
                                                                        case tt.FARTHEST_CORNER:
                                                                            if (A.shape === et.CIRCLE) {
                                                                                o = s = Math.max(ye(e, t), ye(e, t - r), ye(e - n, t), ye(e - n, t - r))
                                                                            } else if (A.shape === et.ELLIPSE) {
                                                                                var i = Math.max(Math.abs(t), Math.abs(t - r)) / Math.max(Math.abs(e), Math.abs(e - n));
                                                                                var B = be(n, r, e, t, false)
                                                                                    , c = B[0]
                                                                                    , u = B[1];
                                                                                o = ye(c - e, (u - t) / i);
                                                                                s = i * o
                                                                            }
                                                                            break
                                                                    }
                                                                    if (Array.isArray(A.size)) {
                                                                        o = ie(A.size[0], n);
                                                                        s = A.size.length === 2 ? ie(A.size[1], r) : o
                                                                    }
                                                                    return [o, s]
                                                                }(e, m, F, U, C),
                                                                _ = H[0],
                                                                v = H[1],
                                                            0 < _ && 0 < _ && (N = R.ctx.createRadialGradient(g + m, p + F, 0, g + m, p + F, _),
                                                                Ne(e.stops, 2 * _).forEach(function(A) {
                                                                    return N.addColorStop(A.stop, we(A.color))
                                                                }),
                                                                R.path(f),
                                                                R.ctx.fillStyle = N,
                                                                _ !== v ? (K = O.bounds.left + .5 * O.bounds.width,
                                                                    y = O.bounds.top + .5 * O.bounds.height,
                                                                    I = 1 / (b = v / _),
                                                                    R.ctx.save(),
                                                                    R.ctx.translate(K, y),
                                                                    R.ctx.transform(1, 0, 0, b, 0, 0),
                                                                    R.ctx.translate(-K, -y),
                                                                    R.ctx.fillRect(g, I * (p - y) + y, U, C * I),
                                                                    R.ctx.restore()) : R.ctx.fill())) : (o = To(O, T, [null, null, null]),
                                                                f = o[0],
                                                                m = o[1],
                                                                F = o[2],
                                                                U = o[3],
                                                                C = o[4],
                                                                s = Ke(e.angle, U, C),
                                                                i = s[0],
                                                                a = s[1],
                                                                c = s[2],
                                                                u = s[3],
                                                                B = s[4],
                                                                (l = document.createElement("canvas")).width = U,
                                                                l.height = C,
                                                                d = l.getContext("2d"),
                                                                w = d.createLinearGradient(a, u, c, B),
                                                                Ne(e.stops, i).forEach(function(A) {
                                                                    return w.addColorStop(A.stop, we(A.color))
                                                                }),
                                                                d.fillStyle = w,
                                                                d.fillRect(0, 0, U, C),
                                                            0 < U && 0 < C && (Q = R.ctx.createPattern(l, "repeat"),
                                                                R.renderRepeat(f, Q, m, F))),
                                                                A.label = 6;
                                                        case 6:
                                                            return T--,
                                                                [2]
                                                    }
                                                })
                                            }
                                            ,
                                            R = this,
                                            t = 0,
                                            n = O.styles.backgroundImage.slice(0).reverse(),
                                            A.label = 1;
                                    case 1:
                                        return t < n.length ? (r = n[t],
                                            [5, e(r)]) : [3, 4];
                                    case 2:
                                        A.sent(),
                                            A.label = 3;
                                    case 3:
                                        return t++,
                                            [3, 1];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }
                    ,
                    h.prototype.renderBorder = function(e, t, n) {
                        return c(this, void 0, void 0, function() {
                            return S(this, function(A) {
                                return this.path(function(A, e) {
                                    switch (e) {
                                        case 0:
                                            return yo(A.topLeftBorderBox, A.topLeftPaddingBox, A.topRightBorderBox, A.topRightPaddingBox);
                                        case 1:
                                            return yo(A.topRightBorderBox, A.topRightPaddingBox, A.bottomRightBorderBox, A.bottomRightPaddingBox);
                                        case 2:
                                            return yo(A.bottomRightBorderBox, A.bottomRightPaddingBox, A.bottomLeftBorderBox, A.bottomLeftPaddingBox);
                                        case 3:
                                        default:
                                            return yo(A.bottomLeftBorderBox, A.bottomLeftPaddingBox, A.topLeftBorderBox, A.topLeftPaddingBox)
                                    }
                                }(n, t)),
                                    this.ctx.fillStyle = we(e),
                                    this.ctx.fill(),
                                    [2]
                            })
                        })
                    }
                    ,
                    h.prototype.renderNodeBackgroundAndBorders = function(u) {
                        return c(this, void 0, void 0, function() {
                            var e, t, n, r, o, s, i, a, c = this;
                            return S(this, function(A) {
                                switch (A.label) {
                                    case 0:
                                        return this.applyEffects(u.effects, 2),
                                            e = u.container.styles,
                                            t = !de(e.backgroundColor) || e.backgroundImage.length,
                                            n = [{
                                                style: e.borderTopStyle,
                                                color: e.borderTopColor
                                            }, {
                                                style: e.borderRightStyle,
                                                color: e.borderRightColor
                                            }, {
                                                style: e.borderBottomStyle,
                                                color: e.borderBottomColor
                                            }, {
                                                style: e.borderLeftStyle,
                                                color: e.borderLeftColor
                                            }],
                                            r = ko(Lo(e.backgroundClip, 0), u.curves),
                                            t || e.boxShadow.length ? (this.ctx.save(),
                                                this.path(r),
                                                this.ctx.clip(),
                                            de(e.backgroundColor) || (this.ctx.fillStyle = we(e.backgroundColor),
                                                this.ctx.fill()),
                                                [4, this.renderBackgroundImage(u.container)]) : [3, 2];
                                    case 1:
                                        A.sent(),
                                            this.ctx.restore(),
                                            e.boxShadow.slice(0).reverse().forEach(function(A) {
                                                c.ctx.save();
                                                var e = Eo(u.curves)
                                                    , t = A.inset ? 0 : 1e4
                                                    , n = function(A, t, n, r, o) {
                                                    return A.map(function(A, e) {
                                                        switch (e) {
                                                            case 0:
                                                                return A.add(t, n);
                                                            case 1:
                                                                return A.add(t + r, n);
                                                            case 2:
                                                                return A.add(t + r, n + o);
                                                            case 3:
                                                                return A.add(t, n + o)
                                                        }
                                                        return A
                                                    })
                                                }(e, -t + (A.inset ? 1 : -1) * A.spread.number, (A.inset ? 1 : -1) * A.spread.number, A.spread.number * (A.inset ? -2 : 2), A.spread.number * (A.inset ? -2 : 2));
                                                A.inset ? (c.path(e),
                                                    c.ctx.clip(),
                                                    c.mask(n)) : (c.mask(e),
                                                    c.ctx.clip(),
                                                    c.path(n)),
                                                    c.ctx.shadowOffsetX = A.offsetX.number + t,
                                                    c.ctx.shadowOffsetY = A.offsetY.number,
                                                    c.ctx.shadowColor = we(A.color),
                                                    c.ctx.shadowBlur = A.blur.number,
                                                    c.ctx.fillStyle = A.inset ? we(A.color) : "rgba(0,0,0,1)",
                                                    c.ctx.fill(),
                                                    c.ctx.restore()
                                            }),
                                            A.label = 2;
                                    case 2:
                                        s = o = 0,
                                            i = n,
                                            A.label = 3;
                                    case 3:
                                        return s < i.length ? (a = i[s]).style === lt.NONE || de(a.color) ? [3, 5] : [4, this.renderBorder(a.color, o, u.curves)] : [3, 7];
                                    case 4:
                                        A.sent(),
                                            A.label = 5;
                                    case 5:
                                        o++,
                                            A.label = 6;
                                    case 6:
                                        return s++,
                                            [3, 3];
                                    case 7:
                                        return [2]
                                }
                            })
                        })
                    }
                    ,
                    h.prototype.render = function(t) {
                        return c(this, void 0, void 0, function() {
                            var e;
                            return S(this, function(A) {
                                switch (A.label) {
                                    case 0:
                                        return this.options.backgroundColor && (this.ctx.fillStyle = we(this.options.backgroundColor),
                                            this.ctx.fillRect(this.options.x - this.options.scrollX, this.options.y - this.options.scrollY, this.options.width, this.options.height)),
                                            e = function(A) {
                                                var e = new vo(A,[])
                                                    , t = new _o(e)
                                                    , n = [];
                                                return No(e, t, t, n),
                                                    Ko(e.container, n),
                                                    t
                                            }(t),
                                            [4, this.renderStack(e)];
                                    case 1:
                                        return A.sent(),
                                            this.applyEffects([], 2),
                                            [2, this.canvas]
                                }
                            })
                        })
                    }
                    ,
                    h
            }()
                , Po = function(A) {
                return A instanceof gr || (A instanceof fr || A instanceof hr && A.type !== dr && A.type !== lr)
            }
                , ko = function(A, e) {
                switch (A) {
                    case Ue.BORDER_BOX:
                        return Eo(e);
                    case Ue.CONTENT_BOX:
                        return function(A) {
                            return [A.topLeftContentBox, A.topRightContentBox, A.bottomRightContentBox, A.bottomLeftContentBox]
                        }(e);
                    case Ue.PADDING_BOX:
                    default:
                        return mo(e)
                }
            }
                , Vo = function(A) {
                switch (A) {
                    case nn.CENTER:
                        return "center";
                    case nn.RIGHT:
                        return "right";
                    case nn.LEFT:
                    default:
                        return "left"
                }
            }
                , zo = function() {
                function A(A) {
                    this.canvas = A.canvas ? A.canvas : document.createElement("canvas"),
                        this.ctx = this.canvas.getContext("2d"),
                        this.options = A,
                        this.canvas.width = Math.floor(A.width * A.scale),
                        this.canvas.height = Math.floor(A.height * A.scale),
                        this.canvas.style.width = A.width + "px",
                        this.canvas.style.height = A.height + "px",
                        this.ctx.scale(this.options.scale, this.options.scale),
                        this.ctx.translate(-A.x + A.scrollX, -A.y + A.scrollY),
                        Le.getInstance(A.id).debug("EXPERIMENTAL ForeignObject renderer initialized (" + A.width + "x" + A.height + " at " + A.x + "," + A.y + ") with scale " + A.scale)
                }
                return A.prototype.render = function(n) {
                    return c(this, void 0, void 0, function() {
                        var e, t;
                        return S(this, function(A) {
                            switch (A.label) {
                                case 0:
                                    return e = Re(Math.max(this.options.windowWidth, this.options.width) * this.options.scale, Math.max(this.options.windowHeight, this.options.height) * this.options.scale, this.options.scrollX * this.options.scale, this.options.scrollY * this.options.scale, n),
                                        [4, Xo(e)];
                                case 1:
                                    return t = A.sent(),
                                    this.options.backgroundColor && (this.ctx.fillStyle = we(this.options.backgroundColor),
                                        this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)),
                                        this.ctx.drawImage(t, -this.options.x * this.options.scale, -this.options.y * this.options.scale),
                                        [2, this.canvas]
                            }
                        })
                    })
                }
                    ,
                    A
            }()
                , Xo = function(n) {
                return new Promise(function(A, e) {
                        var t = new Image;
                        t.onload = function() {
                            A(t)
                        }
                            ,
                            t.onerror = e,
                            t.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent((new XMLSerializer).serializeToString(n))
                    }
                )
            }
                , Go = void 0
                , Jo = function(A) {
                return le.parse(VA.create(A).parseComponentValue())
            };
            je.setContext(window);
            var Yo = function(F, H) {
                return c(Go, void 0, void 0, function() {
                    var e, t, n, r, o, s, i, a, c, u, B, l, d, w, Q, h, f, g, p, U, C, E, m;
                    return S(this, function(A) {
                        switch (A.label) {
                            case 0:
                                if (!(e = F.ownerDocument))
                                    throw new Error("Element is not attached to a Document");
                                if (!(t = e.defaultView))
                                    throw new Error("Document is not attached to a Window");
                                return n = (Math.round(1e3 * Math.random()) + Date.now()).toString(16),
                                    r = Rr(F) || function(A) {
                                        return A.tagName === "HTML"
                                    }(F) ? function(A) {
                                        var e = A.body
                                            , t = A.documentElement;
                                        if (!e || !t) {
                                            throw new Error("Unable to get document size")
                                        }
                                        var n = Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth))
                                            , r = Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight));
                                        return new v(0,0,n,r)
                                    }(e) : N(F),
                                    o = r.width,
                                    s = r.height,
                                    i = r.left,
                                    a = r.top,
                                    c = _({}, {
                                        allowTaint: !1,
                                        imageTimeout: 15e3,
                                        proxy: void 0,
                                        useCORS: !1
                                    }, H),
                                    u = {
                                        backgroundColor: "#ffffff",
                                        cache: H.cache ? H.cache : je.create(n, c),
                                        logging: !0,
                                        removeContainer: !0,
                                        foreignObjectRendering: !1,
                                        scale: t.devicePixelRatio || 1,
                                        windowWidth: t.innerWidth,
                                        windowHeight: t.innerHeight,
                                        scrollX: t.pageXOffset,
                                        scrollY: t.pageYOffset,
                                        x: i,
                                        y: a,
                                        width: Math.ceil(o),
                                        height: Math.ceil(s),
                                        id: n
                                    },
                                    B = _({}, u, c, H),
                                    l = new v(B.scrollX,B.scrollY,B.windowWidth,B.windowHeight),
                                    Le.create({
                                        id: n,
                                        enabled: B.logging
                                    }),
                                    Le.getInstance(n).debug("Starting document clone"),
                                    d = new Ao(F,{
                                        id: n,
                                        onclone: B.onclone,
                                        ignoreElements: B.ignoreElements,
                                        inlineImages: B.foreignObjectRendering,
                                        copyStyles: B.foreignObjectRendering
                                    }),
                                    (w = d.clonedReferenceElement) ? [4, d.toIFrame(e, l)] : [2, Promise.reject("Unable to find element in cloned iframe")];
                            case 1:
                                return Q = A.sent(),
                                    h = e.documentElement ? Jo(getComputedStyle(e.documentElement).backgroundColor) : me.TRANSPARENT,
                                    f = e.body ? Jo(getComputedStyle(e.body).backgroundColor) : me.TRANSPARENT,
                                    g = H.backgroundColor,
                                    p = "string" == typeof g ? Jo(g) : null === g ? me.TRANSPARENT : 4294967295,
                                    U = F === e.documentElement ? de(h) ? de(f) ? p : f : h : p,
                                    C = {
                                        id: n,
                                        cache: B.cache,
                                        canvas: B.canvas,
                                        backgroundColor: U,
                                        scale: B.scale,
                                        x: B.x,
                                        y: B.y,
                                        scrollX: B.scrollX,
                                        scrollY: B.scrollY,
                                        width: B.width,
                                        height: B.height,
                                        windowWidth: B.windowWidth,
                                        windowHeight: B.windowHeight
                                    },
                                    B.foreignObjectRendering ? (Le.getInstance(n).debug("Document cloned, using foreign object rendering"),
                                        [4, new zo(C).render(w)]) : [3, 3];
                            case 2:
                                return E = A.sent(),
                                    [3, 5];
                            case 3:
                                return Le.getInstance(n).debug("Document cloned, using computed rendering"),
                                    je.attachInstance(B.cache),
                                    Le.getInstance(n).debug("Starting DOM parsing"),
                                    m = Fr(w),
                                    je.detachInstance(),
                                U === m.styles.backgroundColor && (m.styles.backgroundColor = me.TRANSPARENT),
                                    Le.getInstance(n).debug("Starting renderer"),
                                    [4, new Do(C).render(m)];
                            case 4:
                                E = A.sent(),
                                    A.label = 5;
                            case 5:
                                return !0 === B.removeContainer && (Ao.destroy(Q) || Le.getInstance(n).error("Cannot detach cloned iframe as it is not in the DOM anymore")),
                                    Le.getInstance(n).debug("Finished rendering"),
                                    Le.destroy(n),
                                    je.destroy(n),
                                    [2, E]
                        }
                    })
                })
            };
            return function(A, e) {
                if (e === void 0) {
                    e = {}
                }
                return Yo(A, e)
            }
        }()
    },
    "./node_modules/process/browser.js": function(A, e) {
        var t, n, r = A.exports = {};
        function o() {
            throw new Error("setTimeout has not been defined")
        }
        function s() {
            throw new Error("clearTimeout has not been defined")
        }
        function i(e) {
            if (t === setTimeout)
                return setTimeout(e, 0);
            if ((t === o || !t) && setTimeout)
                return t = setTimeout,
                    setTimeout(e, 0);
            try {
                return t(e, 0)
            } catch (A) {
                try {
                    return t.call(null, e, 0)
                } catch (A) {
                    return t.call(this, e, 0)
                }
            }
        }
        !function() {
            try {
                t = "function" == typeof setTimeout ? setTimeout : o
            } catch (A) {
                t = o
            }
            try {
                n = "function" == typeof clearTimeout ? clearTimeout : s
            } catch (A) {
                n = s
            }
        }();
        var a, c = [], u = !1, B = -1;
        function l() {
            u && a && (u = !1,
                a.length ? c = a.concat(c) : B = -1,
            c.length && d())
        }
        function d() {
            if (!u) {
                var A = i(l);
                u = !0;
                for (var e = c.length; e; ) {
                    for (a = c,
                             c = []; ++B < e; )
                        a && a[B].run();
                    B = -1,
                        e = c.length
                }
                a = null,
                    u = !1,
                    function(e) {
                        if (n === clearTimeout)
                            return clearTimeout(e);
                        if ((n === s || !n) && clearTimeout)
                            return n = clearTimeout,
                                clearTimeout(e);
                        try {
                            n(e)
                        } catch (A) {
                            try {
                                return n.call(null, e)
                            } catch (A) {
                                return n.call(this, e)
                            }
                        }
                    }(A)
            }
        }
        function w(A, e) {
            this.fun = A,
                this.array = e
        }
        function Q() {}
        r.nextTick = function(A) {
            var e = new Array(arguments.length - 1);
            if (1 < arguments.length)
                for (var t = 1; t < arguments.length; t++)
                    e[t - 1] = arguments[t];
            c.push(new w(A,e)),
            1 !== c.length || u || i(d)
        }
            ,
            w.prototype.run = function() {
                this.fun.apply(null, this.array)
            }
            ,
            r.title = "browser",
            r.browser = !0,
            r.env = {},
            r.argv = [],
            r.version = "",
            r.versions = {},
            r.on = Q,
            r.addListener = Q,
            r.once = Q,
            r.off = Q,
            r.removeListener = Q,
            r.removeAllListeners = Q,
            r.emit = Q,
            r.prependListener = Q,
            r.prependOnceListener = Q,
            r.listeners = function(A) {
                return []
            }
            ,
            r.binding = function(A) {
                throw new Error("process.binding is not supported")
            }
            ,
            r.cwd = function() {
                return "/"
            }
            ,
            r.chdir = function(A) {
                throw new Error("process.chdir is not supported")
            }
            ,
            r.umask = function() {
                return 0
            }
    },
    "./node_modules/regenerator-runtime/runtime.js": function(A, e, t) {
        var n = function(o) {
            "use strict";
            var a, A = Object.prototype, c = A.hasOwnProperty, e = "function" == typeof Symbol ? Symbol : {}, r = e.iterator || "@@iterator", t = e.asyncIterator || "@@asyncIterator", n = e.toStringTag || "@@toStringTag";
            function s(A, e, t, n) {
                var r = e && e.prototype instanceof i ? e : i
                    , o = Object.create(r.prototype)
                    , s = new v(n || []);
                return o._invoke = function(o, s, i) {
                    var a = B;
                    return function(A, e) {
                        if (a === d)
                            throw new Error("Generator is already running");
                        if (a === w) {
                            if ("throw" === A)
                                throw e;
                            return K()
                        }
                        for (i.method = A,
                                 i.arg = e; ; ) {
                            var t = i.delegate;
                            if (t) {
                                var n = F(t, i);
                                if (n) {
                                    if (n === Q)
                                        continue;
                                    return n
                                }
                            }
                            if ("next" === i.method)
                                i.sent = i._sent = i.arg;
                            else if ("throw" === i.method) {
                                if (a === B)
                                    throw a = w,
                                        i.arg;
                                i.dispatchException(i.arg)
                            } else
                                "return" === i.method && i.abrupt("return", i.arg);
                            a = d;
                            var r = u(o, s, i);
                            if ("normal" === r.type) {
                                if (a = i.done ? w : l,
                                r.arg === Q)
                                    continue;
                                return {
                                    value: r.arg,
                                    done: i.done
                                }
                            }
                            "throw" === r.type && (a = w,
                                i.method = "throw",
                                i.arg = r.arg)
                        }
                    }
                }(A, t, s),
                    o
            }
            function u(A, e, t) {
                try {
                    return {
                        type: "normal",
                        arg: A.call(e, t)
                    }
                } catch (A) {
                    return {
                        type: "throw",
                        arg: A
                    }
                }
            }
            o.wrap = s;
            var B = "suspendedStart"
                , l = "suspendedYield"
                , d = "executing"
                , w = "completed"
                , Q = {};
            function i() {}
            function h() {}
            function f() {}
            var g = {};
            g[r] = function() {
                return this
            }
            ;
            var p = Object.getPrototypeOf
                , U = p && p(p(N([])));
            U && U !== A && c.call(U, r) && (g = U);
            var C = f.prototype = i.prototype = Object.create(g);
            function E(A) {
                ["next", "throw", "return"].forEach(function(e) {
                    A[e] = function(A) {
                        return this._invoke(e, A)
                    }
                })
            }
            function m(a) {
                var e;
                this._invoke = function(t, n) {
                    function A() {
                        return new Promise(function(A, e) {
                                !function e(A, t, n, r) {
                                    var o = u(a[A], a, t);
                                    if ("throw" !== o.type) {
                                        var s = o.arg
                                            , i = s.value;
                                        return i && "object" == typeof i && c.call(i, "__await") ? Promise.resolve(i.__await).then(function(A) {
                                            e("next", A, n, r)
                                        }, function(A) {
                                            e("throw", A, n, r)
                                        }) : Promise.resolve(i).then(function(A) {
                                            s.value = A,
                                                n(s)
                                        }, function(A) {
                                            return e("throw", A, n, r)
                                        })
                                    }
                                    r(o.arg)
                                }(t, n, A, e)
                            }
                        )
                    }
                    return e = e ? e.then(A, A) : A()
                }
            }
            function F(A, e) {
                var t = A.iterator[e.method];
                if (t === a) {
                    if (e.delegate = null,
                    "throw" === e.method) {
                        if (A.iterator.return && (e.method = "return",
                            e.arg = a,
                            F(A, e),
                        "throw" === e.method))
                            return Q;
                        e.method = "throw",
                            e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return Q
                }
                var n = u(t, A.iterator, e.arg);
                if ("throw" === n.type)
                    return e.method = "throw",
                        e.arg = n.arg,
                        e.delegate = null,
                        Q;
                var r = n.arg;
                return r ? r.done ? (e[A.resultName] = r.value,
                    e.next = A.nextLoc,
                "return" !== e.method && (e.method = "next",
                    e.arg = a),
                    e.delegate = null,
                    Q) : r : (e.method = "throw",
                    e.arg = new TypeError("iterator result is not an object"),
                    e.delegate = null,
                    Q)
            }
            function H(A) {
                var e = {
                    tryLoc: A[0]
                };
                1 in A && (e.catchLoc = A[1]),
                2 in A && (e.finallyLoc = A[2],
                    e.afterLoc = A[3]),
                    this.tryEntries.push(e)
            }
            function _(A) {
                var e = A.completion || {};
                e.type = "normal",
                    delete e.arg,
                    A.completion = e
            }
            function v(A) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                    A.forEach(H, this),
                    this.reset(!0)
            }
            function N(e) {
                if (e) {
                    var A = e[r];
                    if (A)
                        return A.call(e);
                    if ("function" == typeof e.next)
                        return e;
                    if (!isNaN(e.length)) {
                        var t = -1
                            , n = function A() {
                            for (; ++t < e.length; )
                                if (c.call(e, t))
                                    return A.value = e[t],
                                        A.done = !1,
                                        A;
                            return A.value = a,
                                A.done = !0,
                                A
                        };
                        return n.next = n
                    }
                }
                return {
                    next: K
                }
            }
            function K() {
                return {
                    value: a,
                    done: !0
                }
            }
            return h.prototype = C.constructor = f,
                f.constructor = h,
                f[n] = h.displayName = "GeneratorFunction",
                o.isGeneratorFunction = function(A) {
                    var e = "function" == typeof A && A.constructor;
                    return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
                }
                ,
                o.mark = function(A) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(A, f) : (A.__proto__ = f,
                    n in A || (A[n] = "GeneratorFunction")),
                        A.prototype = Object.create(C),
                        A
                }
                ,
                o.awrap = function(A) {
                    return {
                        __await: A
                    }
                }
                ,
                E(m.prototype),
                m.prototype[t] = function() {
                    return this
                }
                ,
                o.AsyncIterator = m,
                o.async = function(A, e, t, n) {
                    var r = new m(s(A, e, t, n));
                    return o.isGeneratorFunction(e) ? r : r.next().then(function(A) {
                        return A.done ? A.value : r.next()
                    })
                }
                ,
                E(C),
                C[n] = "Generator",
                C[r] = function() {
                    return this
                }
                ,
                C.toString = function() {
                    return "[object Generator]"
                }
                ,
                o.keys = function(t) {
                    var n = [];
                    for (var A in t)
                        n.push(A);
                    return n.reverse(),
                        function A() {
                            for (; n.length; ) {
                                var e = n.pop();
                                if (e in t)
                                    return A.value = e,
                                        A.done = !1,
                                        A
                            }
                            return A.done = !0,
                                A
                        }
                }
                ,
                o.values = N,
                v.prototype = {
                    constructor: v,
                    reset: function(A) {
                        if (this.prev = 0,
                            this.next = 0,
                            this.sent = this._sent = a,
                            this.done = !1,
                            this.delegate = null,
                            this.method = "next",
                            this.arg = a,
                            this.tryEntries.forEach(_),
                            !A)
                            for (var e in this)
                                "t" === e.charAt(0) && c.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = a)
                    },
                    stop: function() {
                        this.done = !0;
                        var A = this.tryEntries[0].completion;
                        if ("throw" === A.type)
                            throw A.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done)
                            throw t;
                        var n = this;
                        function A(A, e) {
                            return o.type = "throw",
                                o.arg = t,
                                n.next = A,
                            e && (n.method = "next",
                                n.arg = a),
                                !!e
                        }
                        for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                            var r = this.tryEntries[e]
                                , o = r.completion;
                            if ("root" === r.tryLoc)
                                return A("end");
                            if (r.tryLoc <= this.prev) {
                                var s = c.call(r, "catchLoc")
                                    , i = c.call(r, "finallyLoc");
                                if (s && i) {
                                    if (this.prev < r.catchLoc)
                                        return A(r.catchLoc, !0);
                                    if (this.prev < r.finallyLoc)
                                        return A(r.finallyLoc)
                                } else if (s) {
                                    if (this.prev < r.catchLoc)
                                        return A(r.catchLoc, !0)
                                } else {
                                    if (!i)
                                        throw new Error("try statement without catch or finally");
                                    if (this.prev < r.finallyLoc)
                                        return A(r.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(A, e) {
                        for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc <= this.prev && c.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                var r = n;
                                break
                            }
                        }
                        r && ("break" === A || "continue" === A) && r.tryLoc <= e && e <= r.finallyLoc && (r = null);
                        var o = r ? r.completion : {};
                        return o.type = A,
                            o.arg = e,
                            r ? (this.method = "next",
                                this.next = r.finallyLoc,
                                Q) : this.complete(o)
                    },
                    complete: function(A, e) {
                        if ("throw" === A.type)
                            throw A.arg;
                        return "break" === A.type || "continue" === A.type ? this.next = A.arg : "return" === A.type ? (this.rval = this.arg = A.arg,
                            this.method = "return",
                            this.next = "end") : "normal" === A.type && e && (this.next = e),
                            Q
                    },
                    finish: function(A) {
                        for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                            var t = this.tryEntries[e];
                            if (t.finallyLoc === A)
                                return this.complete(t.completion, t.afterLoc),
                                    _(t),
                                    Q
                        }
                    },
                    catch: function(A) {
                        for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                            var t = this.tryEntries[e];
                            if (t.tryLoc === A) {
                                var n = t.completion;
                                if ("throw" === n.type) {
                                    var r = n.arg;
                                    _(t)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(A, e, t) {
                        return this.delegate = {
                            iterator: N(A),
                            resultName: e,
                            nextLoc: t
                        },
                        "next" === this.method && (this.arg = a),
                            Q
                    }
                },
                o
        }(A.exports);
        try {
            regeneratorRuntime = n
        } catch (A) {
            Function("r", "regeneratorRuntime = r")(n)
        }
    }
}]);
