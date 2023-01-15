// Copyright 2012 Google Inc. All rights reserved.
(function () {
    const data = {
        resource: {
            version: "1",

            macros: [
                { function: "__e" },
                { vtp_signal: 0, function: "__c", vtp_value: 0 },
                { function: "__c", vtp_value: "google.com.br" },
                { function: "__c", vtp_value: 0 },
                {
                    function: "__aev",
                    vtp_varType: "URL",
                    vtp_component: "IS_OUTBOUND",
                    vtp_affiliatedDomains: ["list"],
                },
                {
                    function: "__v",
                    vtp_name: "gtm.triggers",
                    vtp_dataLayerVersion: 2,
                    vtp_setDefaultValue: true,
                    vtp_defaultValue: "",
                },
                { function: "__v", vtp_name: "gtm.elementId", vtp_dataLayerVersion: 1 },
                { function: "__v", vtp_name: "gtm.elementClasses", vtp_dataLayerVersion: 1 },
                { function: "__aev", vtp_varType: "URL", vtp_component: "URL_NO_FRAGMENT" },
                { function: "__aev", vtp_varType: "URL", vtp_component: "HOST", vtp_stripWww: true },
                { function: "__aev", vtp_varType: "URL", vtp_component: "EXTENSION" },
                { function: "__aev", vtp_varType: "TEXT" },
                { function: "__aev", vtp_varType: "URL", vtp_component: "PATH" },
                { function: "__v", vtp_name: "gtm.videoStatus", vtp_dataLayerVersion: 1 },
                { function: "__v", vtp_name: "gtm.videoUrl", vtp_dataLayerVersion: 1 },
                { function: "__v", vtp_name: "gtm.videoTitle", vtp_dataLayerVersion: 1 },
                { function: "__v", vtp_name: "gtm.videoProvider", vtp_dataLayerVersion: 1 },
                { function: "__v", vtp_name: "gtm.videoCurrentTime", vtp_dataLayerVersion: 1 },
                { function: "__v", vtp_name: "gtm.videoDuration", vtp_dataLayerVersion: 1 },
                { function: "__v", vtp_name: "gtm.videoPercent", vtp_dataLayerVersion: 1 },
                { function: "__v", vtp_name: "gtm.videoVisible", vtp_dataLayerVersion: 1 },
                {
                    function: "__u",
                    vtp_component: "QUERY",
                    vtp_queryKey: "q,s,search,query,keyword",
                    vtp_multiQueryKeys: true,
                    vtp_ignoreEmptyQueryParam: true,
                    vtp_enableMultiQueryKeys: false,
                    vtp_enableIgnoreEmptyQueryParam: false,
                },
                { function: "__v", vtp_name: "gtm.scrollThreshold", vtp_dataLayerVersion: 1 },
                { function: "__v", vtp_name: "gtm.historyChangeSource", vtp_dataLayerVersion: 1 },
                { function: "__v", vtp_name: "gtm.oldUrl", vtp_dataLayerVersion: 1 },
                { function: "__v", vtp_name: "gtm.newUrl", vtp_dataLayerVersion: 1 },
            ],
            tags: [
                {
                    function: "__gct",
                    vtp_trackingId: "G-TKZ0EYZ31J",
                    vtp_sessionDuration: 0,
                    vtp_googleSignals: ["macro", 1],
                    vtp_foreignTld: ["macro", 2],
                    vtp_restrictDomain: ["macro", 3],
                    vtp_eventSettings: ["map", "purchase", ["map", "blacklisted", false, "conversion", true]],
                    tag_id: 7,
                },
                {
                    function: "__get",
                    vtp_eventName: "click",
                    vtp_settings: [
                        "map",
                        "streamId",
                        "G-TKZ0EYZ31J",
                        "eventParameters",
                        [
                            "map",
                            "link_id",
                            ["macro", 6],
                            "link_classes",
                            ["macro", 7],
                            "link_url",
                            ["macro", 8],
                            "link_domain",
                            ["macro", 9],
                            "outbound",
                            true,
                        ],
                    ],
                    vtp_deferrable: false,
                    tag_id: 17,
                },
                {
                    function: "__get",
                    vtp_eventName: "file_download",
                    vtp_settings: [
                        "map",
                        "streamId",
                        "G-TKZ0EYZ31J",
                        "eventParameters",
                        [
                            "map",
                            "link_id",
                            ["macro", 6],
                            "link_text",
                            ["macro", 11],
                            "link_url",
                            ["macro", 8],
                            "file_name",
                            ["macro", 12],
                            "file_extension",
                            ["macro", 10],
                        ],
                    ],
                    vtp_deferrable: false,
                    tag_id: 24,
                },
                {
                    function: "__get",
                    vtp_eventName: ["template", "video_", ["macro", 13]],
                    vtp_settings: [
                        "map",
                        "streamId",
                        "G-TKZ0EYZ31J",
                        "eventParameters",
                        [
                            "map",
                            "video_url",
                            ["macro", 14],
                            "video_title",
                            ["macro", 15],
                            "video_provider",
                            ["macro", 16],
                            "video_current_time",
                            ["macro", 17],
                            "video_duration",
                            ["macro", 18],
                            "video_percent",
                            ["macro", 19],
                            "visible",
                            ["macro", 20],
                        ],
                    ],
                    vtp_deferrable: false,
                    tag_id: 27,
                },
                {
                    function: "__get",
                    vtp_eventName: "view_search_results",
                    vtp_settings: [
                        "map",
                        "streamId",
                        "G-TKZ0EYZ31J",
                        "eventParameters",
                        ["map", "search_term", ["macro", 21]],
                    ],
                    vtp_deferrable: true,
                    tag_id: 32,
                },
                {
                    function: "__get",
                    vtp_eventName: "scroll",
                    vtp_settings: [
                        "map",
                        "streamId",
                        "G-TKZ0EYZ31J",
                        "eventParameters",
                        ["map", "percent_scrolled", ["macro", 22]],
                    ],
                    vtp_deferrable: false,
                    tag_id: 35,
                },
                {
                    function: "__get",
                    vtp_eventName: "page_view",
                    vtp_settings: [
                        "map",
                        "streamId",
                        "G-TKZ0EYZ31J",
                        "eventParameters",
                        ["map", "page_referrer", ["macro", 24]],
                    ],
                    vtp_deferrable: false,
                    tag_id: 38,
                },
                {
                    function: "__dlm",
                    vtp_userInput: ["list", ["map", "key", "gtm.gtagReferrer.G-TKZ0EYZ31J", "value", ["macro", 24]]],
                    tag_id: 39,
                },
                {
                    function: "__lcl",
                    vtp_waitForTags: false,
                    vtp_checkValidation: true,
                    vtp_uniqueTriggerId: "1_15",
                    tag_id: 40,
                },
                {
                    function: "__lcl",
                    vtp_waitForTags: false,
                    vtp_checkValidation: true,
                    vtp_uniqueTriggerId: "1_22",
                    tag_id: 41,
                },
                {
                    function: "__ytl",
                    vtp_captureStart: true,
                    vtp_captureComplete: true,
                    vtp_captureProgress: true,
                    vtp_progressThresholdsPercent: "10,25,50,75",
                    vtp_triggerStartOption: "DOM_READY",
                    vtp_uniqueTriggerId: "1_25",
                    vtp_enableTriggerStartOption: true,
                    tag_id: 42,
                },
                {
                    function: "__sdl",
                    vtp_verticalThresholdUnits: "PERCENT",
                    vtp_verticalThresholdsPercent: "90",
                    vtp_verticalThresholdOn: true,
                    vtp_horizontalThresholdOn: false,
                    vtp_triggerStartOption: "WINDOW_LOAD",
                    vtp_uniqueTriggerId: "1_33",
                    vtp_enableTriggerStartOption: true,
                    tag_id: 43,
                },
                {
                    function: "__ehl",
                    vtp_groupEvents: true,
                    vtp_groupEventsInterval: 1000,
                    vtp_uniqueTriggerId: "1_36",
                    tag_id: 44,
                },
            ],
            predicates: [
                { function: "_eq", arg0: ["macro", 0], arg1: "gtm.js" },
                { function: "_eq", arg0: ["macro", 4], arg1: true },
                { function: "_eq", arg0: ["macro", 0], arg1: "gtm.linkClick" },
                { function: "_re", arg0: ["macro", 5], arg1: "(^$|((^|,)1_15($|,)))" },
                {
                    function: "_re",
                    arg0: ["macro", 10],
                    arg1: "pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma",
                    ignore_case: true,
                },
                { function: "_re", arg0: ["macro", 5], arg1: "(^$|((^|,)1_22($|,)))" },
                { function: "_eq", arg0: ["macro", 0], arg1: "gtm.video" },
                { function: "_re", arg0: ["macro", 5], arg1: "(^$|((^|,)1_25($|,)))" },
                { function: "_eq", arg0: ["macro", 21], arg1: "undefined" },
                { function: "_eq", arg0: ["macro", 0], arg1: "gtm.scrollDepth" },
                { function: "_re", arg0: ["macro", 5], arg1: "(^$|((^|,)1_33($|,)))" },
                {
                    function: "_eq",
                    arg0: ["macro", 23],
                    arg1: ["list", "pushState", "popstate", "replaceState"],
                    any_of: true,
                },
                { function: "_eq", arg0: ["macro", 24], arg1: ["macro", 25] },
                { function: "_eq", arg0: ["macro", 0], arg1: "gtm.historyChange-v2" },
                { function: "_re", arg0: ["macro", 5], arg1: "(^$|((^|,)1_36($|,)))" },
                { function: "_eq", arg0: ["macro", 0], arg1: "gtm.dom" },
                { function: "_eq", arg0: ["macro", 0], arg1: "gtm.load" },
            ],
            rules: [
                [
                    ["if", 0],
                    ["add", 0, 8, 9, 12],
                ],
                [
                    ["if", 1, 2, 3],
                    ["add", 1],
                ],
                [
                    ["if", 2, 4, 5],
                    ["add", 2],
                ],
                [
                    ["if", 6, 7],
                    ["add", 3],
                ],
                [
                    ["if", 0],
                    ["unless", 8],
                    ["add", 4],
                ],
                [
                    ["if", 9, 10],
                    ["add", 5],
                ],
                [
                    ["if", 11, 13, 14],
                    ["unless", 12],
                    ["add", 6, 7],
                ],
                [
                    ["if", 15],
                    ["add", 10],
                ],
                [
                    ["if", 16],
                    ["add", 11],
                ],
            ],
        },
        runtime: [],
    };

    /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
    let aa;
    const ca = function (a) {
        let b = 0;
        return function () {
            return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
        };
    };
    const ea = function (a) {
        const b = typeof Symbol !== "undefined" && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : { next: ca(a) };
    };
    const fa =
        typeof Object.create === "function"
            ? Object.create
            : function (a) {
                let b = function () {};
                b.prototype = a;
                return new b();
              };
    let ha;
    if (typeof Object.setPrototypeOf === "function") ha = Object.setPrototypeOf;
    else {
        let ia;
        a: {
            const ja = { a: !0 };
            const ka = {};
            try {
                ka.__proto__ = ja;
                ia = ka.a;
                break a;
            } catch (a) {}
            ia = !1;
        }
        ha = ia
            ? function (a, b) {
                  a.__proto__ = b;
                  if (a.__proto__ !== b) throw new TypeError(`${a} is not extensible`);
                  return a;
              }
            : null;
    }
    const la = ha;
    const na = function (a, b) {
        a.prototype = fa(b.prototype);
        a.prototype.constructor = a;
        if (la) la(a, b);
        else
            for (const c in b)
                if (c != "prototype")
                    if (Object.defineProperties) {
                        const d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d);
                    } else a[c] = b[c];
        a.vj = b.prototype;
    };
    const pa = this || self;
    const qa = function (a) {
        return a;
    };
    const ra = function () {};
    const sa = function (a) {
        return typeof a === "function";
    };
    const h = function (a) {
        return typeof a === "string";
    };
    const ta = function (a) {
        return typeof a === "number" && !isNaN(a);
    };
    const ua = Array.isArray;
    const wa = function (a, b) {
        if (Array.prototype.indexOf) {
            const c = a.indexOf(b);
            return typeof c === "number" ? c : -1;
        }
        for (let d = 0; d < a.length; d++) if (a[d] === b) return d;
        return -1;
    };
    const xa = function (a, b) {
        if (a && ua(a)) for (let c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c];
    };
    const ya = function (a, b) {
        if (!ta(a) || !ta(b) || a > b) (a = 0), (b = 2147483647);
        return Math.floor(Math.random() * (b - a + 1) + a);
    };
    const Ba = function (a, b) {
        for (var c = new za(), d = 0; d < a.length; d++) c.set(a[d], !0);
        for (let e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
        return !1;
    };
    const Da = function (a, b) {
        for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c]);
    };
    const Fa = function (a) {
        return (
            !!a &&
            (Object.prototype.toString.call(a) == "[object Arguments]" ||
                Object.prototype.hasOwnProperty.call(a, "callee"))
        );
    };
    const Ga = function (a) {
        return Math.round(Number(a)) || 0;
    };
    const Ia = function (a) {
        return String(a).toLowerCase() == "false" ? !1 : !!a;
    };
    const La = function (a) {
        const b = [];
        if (ua(a)) for (let c = 0; c < a.length; c++) b.push(String(a[c]));
        return b;
    };
    const Ma = function (a) {
        return a ? a.replace(/^\s+|\s+$/g, "") : "";
    };
    const Na = function () {
        return new Date(Date.now());
    };
    const Oa = function () {
        return Na().getTime();
    };
    var za = function () {
        this.prefix = "gtm.";
        this.values = {};
    };
    za.prototype.set = function (a, b) {
        this.values[this.prefix + a] = b;
    };
    za.prototype.get = function (a) {
        return this.values[this.prefix + a];
    };
    const Pa = function (a, b, c) {
        return a && a.hasOwnProperty(b) ? a[b] : c;
    };
    const Ra = function (a) {
        let b = a;
        return function () {
            if (b) {
                const c = b;
                b = void 0;
                try {
                    c();
                } catch (d) {}
            }
        };
    };
    const Sa = function (a, b) {
        for (const c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    };
    const Ua = function (a) {
        for (const b in a) if (a.hasOwnProperty(b)) return !0;
        return !1;
    };
    const Va = function (a, b) {
        for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
        return c;
    };
    const Wa = function (a, b) {
        for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
        d[e[e.length - 1]] = b;
        return c;
    };
    const Xa = /^\w{1,9}$/;
    const Ya = function (a, b) {
        a = a || {};
        b = b || ",";
        const c = [];
        Da(a, function (d, e) {
            Xa.test(d) && e && c.push(d);
        });
        return c.join(b);
    };
    let Za;
    const $a = function () {
        if (void 0 === Za) {
            let a = null;
            const b = pa.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", { createHTML: qa, createScript: qa, createScriptURL: qa });
                } catch (c) {
                    pa.console && pa.console.error(c.message);
                }
                Za = a;
            } else Za = a;
        }
        return Za;
    };
    const cb = function (a, b) {
        this.o = b === ab ? a : "";
    };
    cb.prototype.toString = function () {
        return `${this.o}`;
    };
    var ab = {};
    const db = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    let eb;
    a: {
        const fb = pa.navigator;
        if (fb) {
            const gb = fb.userAgent;
            if (gb) {
                eb = gb;
                break a;
            }
        }
        eb = "";
    }
    const hb = function (a) {
        return eb.indexOf(a) != -1;
    };
    const ib = {};
    const lb = function (a, b, c) {
        this.o = c === ib ? a : "";
    };
    lb.prototype.toString = function () {
        return this.o.toString();
    };
    const mb = function (a) {
        return a instanceof lb && a.constructor === lb ? a.o : "type_error:SafeHtml";
    };
    const nb = function (a) {
        const b = $a();
        const c = b ? b.createHTML(a) : a;
        return new lb(c, null, ib);
    };
    const ob = new lb((pa.trustedTypes && pa.trustedTypes.emptyHTML) || "", 0, ib);
    const pb = function (a, b) {
        const c = function () {};
        c.prototype = a.prototype;
        const d = new c();
        a.apply(d, Array.prototype.slice.call(arguments, 1));
        return d;
    };
    const qb = function (a) {
        let b = a;
        return function () {
            if (b) {
                const c = b;
                b = null;
                c();
            }
        };
    };
    const rb = (function (a) {
        let b = !1;
        let c;
        return function () {
            b || ((c = a()), (b = !0));
            return c;
        };
    })(function () {
        const a = document.createElement("div");
        const b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        const c = a.firstChild.firstChild;
        a.innerHTML = mb(ob);
        return !c.parentElement;
    });
    const vb = function (a, b) {
        if (rb()) for (; a.lastChild; ) a.removeChild(a.lastChild);
        a.innerHTML = mb(b);
    };
    const m = window;
    const B = document;
    const wb = navigator;
    const xb = B.currentScript && B.currentScript.src;
    const yb = function (a, b) {
        const c = m[a];
        m[a] = void 0 === c ? b : c;
        return m[a];
    };
    const zb = function (a, b) {
        b &&
            (a.addEventListener
                ? (a.onload = b)
                : (a.onreadystatechange = function () {
                    a.readyState in { loaded: 1, complete: 1 } && ((a.onreadystatechange = null), b());
                  }));
    };
    const Ab = function (a, b, c) {
        const d = B.createElement("script");
        d.type = "text/javascript";
        d.async = !0;
        let e;
        const f = $a();
        const g = f ? f.createScriptURL(a) : a;
        e = new cb(g, ab);
        d.src = e instanceof cb && e.constructor === cb ? e.o : "type_error:TrustedResourceUrl";
        let k;
        let l;
        const n = ((d.ownerDocument && d.ownerDocument.defaultView) || window).document;
        const p = (l = n.querySelector) === null || void 0 === l ? void 0 : l.call(n, "script[nonce]");
        (k = p ? p.nonce || p.getAttribute("nonce") || "" : "") && d.setAttribute("nonce", k);
        zb(d, b);
        c && (d.onerror = c);
        const q = B.getElementsByTagName("script")[0] || B.body || B.head;
        q.parentNode.insertBefore(d, q);
        return d;
    };
    const Bb = function () {
        if (xb) {
            const a = xb.toLowerCase();
            if (a.indexOf("https://") === 0) return 2;
            if (a.indexOf("http://") === 0) return 3;
        }
        return 1;
    };
    const Cb = function (a, b) {
        const c = B.createElement("iframe");
        c.height = "0";
        c.width = "0";
        c.style.display = "none";
        c.style.visibility = "hidden";
        const d = (B.body && B.body.lastChild) || B.body || B.head;
        d.parentNode.insertBefore(c, d);
        zb(c, b);
        void 0 !== a && (c.src = a);
        return c;
    };
    const Db = function (a, b, c) {
        const d = new Image(1, 1);
        d.onload = function () {
            d.onload = null;
            b && b();
        };
        d.onerror = function () {
            d.onerror = null;
            c && c();
        };
        d.src = a;
        return d;
    };
    const Eb = function (a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent(`on${b}`, c);
    };
    const Fb = function (a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent(`on${b}`, c);
    };
    const G = function (a) {
        m.setTimeout(a, 0);
    };
    const Gb = function (a, b) {
        return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null;
    };
    const Hb = function (a) {
        let b = a.innerText || a.textContent || "";
        b && b != " " && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
        b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
        return b;
    };
    const Kb = function (a) {
        let b = B.createElement("div");
        const c = nb(`A<div>${a}</div>`);
        vb(b, c);
        b = b.lastChild;
        for (var d = []; b.firstChild; ) d.push(b.removeChild(b.firstChild));
        return d;
    };
    const Lb = function (a, b, c) {
        c = c || 100;
        for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
        for (let f = a, g = 0; f && g <= c; g++) {
            if (d[String(f.tagName).toLowerCase()]) return f;
            f = f.parentElement;
        }
        return null;
    };
    const Mb = function (a) {
        (wb.sendBeacon && wb.sendBeacon(a)) || Db(a);
    };
    const Nb = function (a, b) {
        let c = a[b];
        c && typeof c.animVal === "string" && (c = c.animVal);
        return c;
    };
    const Ob = function (a) {
        const b = B.featurePolicy;
        return b && sa(b.features) ? b.features().indexOf(a) !== -1 : !1;
    }; /*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    const Pb = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/;
    const Qb = function (a) {
        if (a == null) return String(a);
        const b = Pb.exec(Object.prototype.toString.call(Object(a)));
        return b ? b[1].toLowerCase() : "object";
    };
    const Rb = function (a, b) {
        return Object.prototype.hasOwnProperty.call(Object(a), b);
    };
    const Sb = function (a) {
        if (!a || Qb(a) != "object" || a.nodeType || a == a.window) return !1;
        try {
            if (a.constructor && !Rb(a, "constructor") && !Rb(a.constructor.prototype, "isPrototypeOf")) return !1;
        } catch (c) {
            return !1;
        }
        for (var b in a);
        return void 0 === b || Rb(a, b);
    };
    const H = function (a, b) {
        const c = b || (Qb(a) == "array" ? [] : {});
        let d;
        for (d in a)
            if (Rb(a, d)) {
                const e = a[d];
                Qb(e) == "array"
                    ? (Qb(c[d]) != "array" && (c[d] = []), (c[d] = H(e, c[d])))
                    : Sb(e)
                        ? (Sb(c[d]) || (c[d] = {}), (c[d] = H(e, c[d])))
                        : (c[d] = e);
            }
        return c;
    };
    const Vb = function (a) {
        if (void 0 === a || ua(a) || Sb(a)) return !0;
        switch (typeof a) {
        case "boolean":
        case "number":
        case "string":
        case "function":
            return !0;
        }
        return !1;
    };
    const Wb = (function () {
        const a = function (b) {
            return {
                toString() {
                    return b;
                },
            };
        };
        return {
            Mg: a("consent"),
            Ng: a("consent_always_fire"),
            $e: a("convert_case_to"),
            af: a("convert_false_to"),
            bf: a("convert_null_to"),
            cf: a("convert_true_to"),
            df: a("convert_undefined_to"),
            ej: a("debug_mode_metadata"),
            gj: a("event_data_overrides"),
            lb: a("function"),
            Hh: a("instance_name"),
            Jh: a("live_only"),
            Kh: a("malware_disabled"),
            Lh: a("metadata"),
            ij: a("original_activity_id"),
            jj: a("original_vendor_template_id"),
            Nh: a("once_per_event"),
            Gf: a("once_per_load"),
            lj: a("priority_override"),
            mj: a("respected_consent_types"),
            Kf: a("setup_tags"),
            Mf: a("tag_id"),
            Nf: a("teardown_tags"),
        };
    })();
    let tc;
    const uc = [];
    const vc = [];
    const wc = [];
    const xc = [];
    const yc = [];
    let Ec = {};
    let Fc;
    let Gc;
    let Hc;
    const Ic = function (a, b) {
        const c = a.function;
        if (!c) throw Error("Error: No function name given for function call.");
        const d = Ec[c];
        const e = {};
        let f;
        for (f in a)
            if (a.hasOwnProperty(f))
                if (f.indexOf("vtp_") === 0) d && b && b.Yf && b.Yf(a[f]), (e[void 0 !== d ? f : f.substr(4)] = a[f]);
                else if (f === Wb.Ng.toString() && a[f]) {
                }
        d && b && b.Xf && (e.vtp_gtmCachedValues = b.Xf);
        return void 0 !== d ? d(e) : tc(c, e, b);
    };
    const Kc = function (a, b, c) {
        c = c || [];
        const d = {};
        let e;
        for (e in a) a.hasOwnProperty(e) && (d[e] = Jc(a[e], b, c));
        return d;
    };
    var Jc = function (a, b, c) {
        if (ua(a)) {
            let d;
            switch (a[0]) {
                case "function_id":
                return a[1];
                case "list":
                    d = [];
                    for (let e = 1; e < a.length; e++) d.push(Jc(a[e], b, c));
                return d;
                case "macro":
                    var f = a[1];
                    if (c[f]) return;
                var g = uc[f];
                    if (!g || b.Ge(g)) return;
                    c[f] = !0;
                    try {
                    let k = Kc(g, b, c);
                        k.vtp_gtmEventId = b.id;
                    d = Ic(k, b);
                        Hc && (d = Hc.bi(d, k));
                } catch (z) {
                        b.mg && b.mg(z, Number(f)), (d = !1);
                    }
                    c[f] = !1;
                return d;
                case "map":
                d = {};
                    for (let l = 1; l < a.length; l += 2) d[Jc(a[l], b, c)] = Jc(a[l + 1], b, c);
                return d;
                case "template":
                    d = [];
                    for (var n = !1, p = 1; p < a.length; p++) {
                    let q = Jc(a[p], b, c);
                        Gc && (n = n || q === Gc.Yc);
                        d.push(q);
                }
                    return Gc && n ? Gc.ei(d) : d.join("");
            case "escape":
                    d = Jc(a[1], b, c);
                if (Gc && ua(a[1]) && a[1][0] === "macro" && Gc.yi(a)) return Gc.Ni(d);
                d = String(d);
                    for (let t = 2; t < a.length; t++) Xb[a[t]] && (d = Xb[a[t]](d));
                return d;
                case "tag":
                    var u = a[1];
                    if (!xc[u]) throw Error(`Unable to resolve tag reference ${u}.`);
                return (d = { dg: a[2], index: u });
                case "zb":
                    var r = { arg0: a[2], arg1: a[3], ignore_case: a[5] };
                    r.function = a[1];
                var v = Lc(r, b, c);
                var x = !!a[4];
                    return x || v !== 2 ? x !== (v === 1) : null;
            default:
                    throw Error(`Attempting to expand unknown Value type: ${a[0]}.`);
            }
        }
        return a;
    };
    var Lc = function (a, b, c) {
        try {
            return Fc(Kc(a, b, c));
        } catch (d) {
            JSON.stringify(a);
        }
        return 2;
    };
    const Oc = function (a) {
        function b(t) {
            for (let u = 0; u < t.length; u++) d[t[u]] = !0;
        }
        for (var c = [], d = [], e = Mc(a), f = 0; f < vc.length; f++) {
            const g = vc[f];
            const k = Nc(g, e);
            if (k) {
                for (let l = g.add || [], n = 0; n < l.length; n++) c[l[n]] = !0;
                b(g.block || []);
            } else k === null && b(g.block || []);
        }
        for (var p = [], q = 0; q < xc.length; q++) c[q] && !d[q] && (p[q] = !0);
        return p;
    };
    var Nc = function (a, b) {
        for (let c = a.if || [], d = 0; d < c.length; d++) {
            const e = b(c[d]);
            if (e === 0) return !1;
            if (e === 2) return null;
        }
        for (let f = a.unless || [], g = 0; g < f.length; g++) {
            const k = b(f[g]);
            if (k === 2) return null;
            if (k === 1) return !1;
        }
        return !0;
    };
    var Mc = function (a) {
        const b = [];
        return function (c) {
            void 0 === b[c] && (b[c] = Lc(wc[c], a));
            return b[c];
        };
    };
    const Pc = {
        bi(a, b) {
            b[Wb.$e] && typeof a === "string" && (a = b[Wb.$e] == 1 ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Wb.bf) && a === null && (a = b[Wb.bf]);
            b.hasOwnProperty(Wb.df) && void 0 === a && (a = b[Wb.df]);
            b.hasOwnProperty(Wb.cf) && !0 === a && (a = b[Wb.cf]);
            b.hasOwnProperty(Wb.af) && !1 === a && (a = b[Wb.af]);
            return a;
        },
    };
    const Qc = function (a, b) {
        const c = String(a);
        return c;
    };
    const Vc = function (a) {
        const b = {};
        let c = 0;
        Da(a, function (e, f) {
            if (void 0 !== f)
                if (((f = Qc(f, 100)), Rc.hasOwnProperty(e))) b[Rc[e]] = Sc(f);
                else if (Tc.hasOwnProperty(e)) {
                    const g = Tc[e];
                    const k = Sc(f);
                    b.hasOwnProperty(g) || (b[g] = k);
                } else if (e === "category")
                    for (let l = Sc(f).split("/", 5), n = 0; n < l.length; n++) {
                        const p = Uc[n];
                        const q = l[n];
                        b.hasOwnProperty(p) || (b[p] = q);
                    }
                else c < 10 && ((b[`k${c}`] = Sc(Qc(e, 40))), (b[`v${c}`] = Sc(f)), c++);
        });
        const d = [];
        Da(b, function (e, f) {
            d.push(`${e}${f}`);
        });
        return d.join("~");
    };
    var Sc = function (a) {
        return `${a}`.replace(/~/g, function () {
            return "~~";
        });
    };
    var Rc = {
        item_id: "id",
        item_name: "nm",
        item_brand: "br",
        item_category: "ca",
        item_category2: "c2",
        item_category3: "c3",
        item_category4: "c4",
        item_category5: "c5",
        item_variant: "va",
        price: "pr",
        quantity: "qt",
        coupon: "cp",
        item_list_name: "ln",
        index: "lp",
        item_list_id: "li",
        discount: "ds",
        affiliation: "af",
        promotion_id: "pi",
        promotion_name: "pn",
        creative_name: "cn",
        creative_slot: "cs",
        location_id: "lo",
    };
    var Tc = {
        id: "id",
        name: "nm",
        brand: "br",
        variant: "va",
        list_name: "ln",
        list_position: "lp",
        list: "ln",
        position: "lp",
        creative: "cn",
    };
    var Uc = ["ca", "c2", "c3", "c4", "c5"];
    const Wc = function (a) {
        const b = [];
        Da(a, function (c, d) {
            d != null && b.push(`${encodeURIComponent(c)}=${encodeURIComponent(String(d))}`);
        });
        return b.join("&");
    };
    const Xc = function (a, b, c, d) {
        this.Sa = a.Sa;
        this.sb = a.sb;
        this.K = a.K;
        this.s = b;
        this.F = c;
        this.C = Wc(a.Sa);
        this.o = Wc(a.K);
        this.P = d ? this.o.length : 0;
        if (this.P > 16384) throw Error("EVENT_TOO_LARGE");
    };
    const Yc = function () {
        this.events = [];
        this.o = this.Sa = "";
        this.C = 0;
        this.s = !1;
    };
    Yc.prototype.add = function (a) {
        return this.F(a)
            ? (this.events.push(a), (this.Sa = a.C), (this.o = a.s), (this.C += a.P), (this.s = a.F), !0)
            : !1;
    };
    Yc.prototype.F = function (a) {
        const b = this.events.length < 20 && a.P + this.C < 16384;
        const c = this.Sa === a.C && this.o === a.s && this.s === a.F;
        return this.events.length == 0 || (b && c);
    };
    const Zc = function (a, b) {
        Da(a, function (c, d) {
            d != null && b.push(`${encodeURIComponent(c)}=${encodeURIComponent(d)}`);
        });
    };
    const $c = function (a, b) {
        const c = [];
        a.C && c.push(a.C);
        b && c.push(`_s=${b}`);
        Zc(a.sb, c);
        let d = !1;
        a.o && (c.push(a.o), (d = !0));
        let e = c.join("&");
        let f = "";
        const g = e.length + a.s.length + 1;
        d && g > 2048 && ((f = c.pop()), (e = c.join("&")));
        return { Me: e, body: f };
    };
    const hd = function (a, b) {
        const c = a.events;
        if (c.length == 1) return $c(c[0], b);
        const d = [];
        a.Sa && d.push(a.Sa);
        for (var e = {}, f = 0; f < c.length; f++)
            Da(c[f].sb, function (u, r) {
                r != null && ((e[u] = e[u] || {}), (e[u][String(r)] = e[u][String(r)] + 1 || 1));
            });
        const g = {};
        Da(e, function (u, r) {
            let v;
            let x = -1;
            let z = 0;
            Da(r, function (w, y) {
                z += y;
                const A = (w.length + u.length + 2) * (y - 1);
                A > x && ((v = w), (x = A));
            });
            z == c.length && (g[u] = v);
        });
        Zc(g, d);
        b && d.push(`_s=${b}`);
        for (var k = d.join("&"), l = [], n = {}, p = 0; p < c.length; n = { Gc: n.Gc }, p++) {
            const q = [];
            n.Gc = {};
            Da(
                c[p].sb,
                (function (u) {
                    return function (r, v) {
                        g[r] != `${v}` && (u.Gc[r] = v);
                    };
                })(n),
            );
            c[p].o && q.push(c[p].o);
            Zc(n.Gc, q);
            l.push(q.join("&"));
        }
        const t = l.join("\r\n");
        return { Me: k, body: t };
    };
    const M = {
        cc: "_ee",
        cd: "_syn_or_mod",
        oj: "_uei",
        ae: "_eu",
        kj: "_pci",
        Cb: "event_callback",
        Oc: "event_timeout",
        Da: "gtag.config",
        La: "gtag.get",
        xa: "purchase",
        Ab: "refund",
        eb: "begin_checkout",
        xb: "add_to_cart",
        yb: "remove_from_cart",
        Wg: "view_cart",
        ff: "add_to_wishlist",
        Ka: "view_item",
        Sb: "view_promotion",
        Jc: "select_promotion",
        Ed: "select_item",
        zb: "view_item_list",
        ef: "add_payment_info",
        Vg: "add_shipping_info",
        Oa: "value_key",
        Va: "value_callback",
        Ea: "allow_ad_personalization_signals",
        Yb: "restricted_data_processing",
        Ub: "allow_google_signals",
        Ha: "cookie_expires",
        Vb: "cookie_update",
        $b: "session_duration",
        Sc: "session_engaged_time",
        Pa: "user_properties",
        oa: "transport_url",
        R: "ads_data_redaction",
        ya: "user_data",
        Wb: "first_party_collection",
        D: "ad_storage",
        I: "analytics_storage",
        Ye: "region",
        Ze: "wait_for_update",
        Ga: "conversion_linker",
        Fa: "conversion_cookie_prefix",
        fa: "value",
        da: "currency",
        Af: "trip_type",
        X: "items",
        tf: "passengers",
        Hd: "allow_custom_scripts",
        ac: "session_id",
        yf: "quantity",
        kb: "transaction_id",
        ib: "language",
        Mc: "country",
        Kc: "allow_enhanced_conversions",
        Md: "aw_merchant_id",
        Kd: "aw_feed_country",
        Ld: "aw_feed_language",
        Jd: "discount",
        ma: "developer_id",
        Tc: "delivery_postal_code",
        Sd: "estimated_delivery_date",
        Qd: "shipping",
        Xd: "new_customer",
        Nd: "customer_lifetime_value",
        Rd: "enhanced_conversions",
        Tb: "page_view",
        na: "linker",
        O: "domains",
        Fb: "decorate_forms",
        qf: "enhanced_conversions_automatic_settings",
        fh: "auto_detection_enabled",
        rf: "ga_temp_client_id",
    };
    (M.Fd = "user_engagement"),
        (M.Qg = "app_remove"),
        (M.Rg = "app_store_refund"),
        (M.Sg = "app_store_subscription_cancel"),
        (M.Tg = "app_store_subscription_convert"),
        (M.Ug = "app_store_subscription_renew"),
        (M.Xg = "first_open"),
        (M.Yg = "first_visit"),
        (M.Zg = "in_app_purchase"),
        (M.$g = "session_start"),
        (M.ah = "user_data_login"),
        (M.bh = "user_data_logout"),
        (M.dh = "allow_display_features"),
        (M.Ma = "campaign"),
        (M.gh = "content"),
        (M.hh = "id"),
        (M.ih = "medium"),
        (M.jh = "name"),
        (M.kh = "source"),
        (M.lh = "term"),
        (M.Bb = "client_id"),
        (M.la = "cookie_domain"),
        (M.Lc = "cookie_name"),
        (M.fb = "cookie_path"),
        (M.Na = "cookie_flags"),
        (M.jf = "custom_map"),
        (M.Ud = "groups"),
        (M.fj = "non_interaction"),
        (M.Gb = "page_location"),
        (M.sf = "page_path"),
        (M.Xa = "page_referrer"),
        (M.Yd = "page_title"),
        (M.Zb = "send_page_view"),
        (M.jb = "send_to"),
        (M.Zd = "session_engaged"),
        (M.Qc = "_logged_in_state"),
        (M.$d = "session_number"),
        (M.Dh = "tracking_id"),
        (M.Ya = "url_passthrough"),
        (M.Eb = "accept_incoming"),
        (M.Xb = "url_position"),
        (M.wf = "phone_conversion_number"),
        (M.uf = "phone_conversion_callback"),
        (M.vf = "phone_conversion_css_class"),
        (M.xf = "phone_conversion_options"),
        (M.zh = "phone_conversion_ids"),
        (M.yh = "phone_conversion_country_code"),
        (M.hf = "aw_remarketing"),
        (M.Id = "aw_remarketing_only"),
        (M.Gd = "gclid"),
        (M.eh = "auid"),
        (M.qh = "affiliation"),
        (M.pf = "tax"),
        (M.Pd = "list_name"),
        (M.nf = "checkout_step"),
        (M.lf = "checkout_option"),
        (M.rh = "coupon"),
        (M.sh = "promotions"),
        (M.Hb = "user_id"),
        (M.Ah = "retoken"),
        (M.ca = "cookie_prefix"),
        (M.kf = "disable_merchant_reported_purchases"),
        (M.ph = "dc_natural_search"),
        (M.oh = "dc_custom_params"),
        (M.wh = "method"),
        (M.Ch = "search_term"),
        (M.nh = "content_type"),
        (M.xh = "optimize_id"),
        (M.th = "experiments"),
        (M.Wa = "google_signals"),
        (M.Pc = "google_tld"),
        (M.Uc = "update"),
        (M.Td = "firebase_id"),
        (M.Db = "ga_restrict_domain"),
        (M.Nc = "event_settings"),
        (M.Od = "dynamic_event_settings"),
        (M.bc = "user_data_settings"),
        (M.Bh = "screen_name"),
        (M.vh = "_x_19"),
        (M.hb = "_ecid"),
        (M.uh = "_x_20"),
        (M.Wd = "internal_traffic_results"),
        (M.zf = "traffic_type"),
        (M.Rc = "referral_exclusion_definition"),
        (M.Vd = "ignore_referrer"),
        (M.mh = "content_group");
    (M.Eh = [
        M.Ea,
        M.Kc,
        M.Ub,
        M.X,
        M.Yb,
        M.la,
        M.Ha,
        M.Na,
        M.Lc,
        M.fb,
        M.ca,
        M.Vb,
        M.jf,
        M.ma,
        M.Od,
        M.Cb,
        M.Nc,
        M.Oc,
        M.Wb,
        M.Db,
        M.Wa,
        M.Pc,
        M.Ud,
        M.Wd,
        M.na,
        M.Rc,
        M.jb,
        M.Zb,
        M.$b,
        M.Sc,
        M.oa,
        M.Uc,
        M.bc,
        M.Pa,
        M.Tc,
        M.ae,
    ]),
        (M.Bf = [M.Gb, M.Xa, M.Yd, M.ib, M.Bh, M.Hb, M.Td, M.mh]),
        (M.Gh = [M.Qg, M.Rg, M.Sg, M.Tg, M.Ug, M.Xg, M.Yg, M.Zg, M.$g, M.Fd]);
    M.Df = [M.xa, M.Ab, M.eb, M.xb, M.yb, M.Wg, M.ff, M.Ka, M.Sb, M.Jc, M.zb, M.Ed, M.ef, M.Vg];
    M.Cf = [M.Ea, M.Ub, M.Vb];
    M.Ef = [M.Ha, M.Oc, M.$b, M.Sc];
    const rd = {};
    const sd = function (a, b) {
        rd[a] = rd[a] || [];
        rd[a][b] = !0;
    };
    const td = function (a) {
        for (var b = [], c = rd[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
        for (let e = 0; e < b.length; e++)
            b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
        return b.join("");
    };
    const ud = function (a) {
        sd("GTM", a);
    };
    const vd = new (function (a, b) {
        this.o = a;
        this.defaultValue = void 0 === b ? !1 : b;
    })(1933);
    const xd = function () {
        const a = wd;
        if (a.Ee && a.hasOwnProperty("Ee")) return a.Ee;
        const b = new a();
        return (a.Ee = b);
    };
    var wd = function () {
        const a = {};
        this.o = function () {
            const b = vd.o;
            const c = vd.defaultValue;
            return a[b] != null ? a[b] : c;
        };
        this.s = function () {
            a[vd.o] = !0;
        };
    };
    const yd = [];
    function zd() {
        const a = yb("google_tag_data", {});
        a.ics ||
            (a.ics = {
                entries: {},
                set: Ad,
                update: Bd,
                addListener: Cd,
                notifyListeners: Md,
                active: !1,
                usedDefault: !1,
            });
        return a.ics;
    }
    function Ad(a, b, c, d, e, f) {
        const g = zd();
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            const k = g.entries;
            const l = k[a] || {};
            const n = l.region;
            const p = c && h(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if (d === "" || p === e || (p === d ? n !== e : !p && !n)) {
                const q = !!(f && f > 0 && void 0 === l.update);
                const t = { region: p, initial: b === "granted", update: l.update, quiet: q };
                if (d !== "" || !1 !== l.initial) k[a] = t;
                q &&
                    m.setTimeout(function () {
                        k[a] === t && t.quiet && ((t.quiet = !1), Nd(a), Md(), sd("TAGGING", 2));
                    }, f);
            }
        }
    }
    function Bd(a, b) {
        const c = zd();
        c.active = !0;
        if (void 0 != b) {
            const d = Od(a);
            const e = c.entries;
            const f = (e[a] = e[a] || {});
            f.update = b === "granted";
            const g = Od(a);
            f.quiet ? ((f.quiet = !1), Nd(a)) : g !== d && Nd(a);
        }
    }
    function Cd(a, b) {
        yd.push({ te: a, mi: b });
    }
    function Nd(a) {
        for (let b = 0; b < yd.length; ++b) {
            const c = yd[b];
            ua(c.te) && c.te.indexOf(a) !== -1 && (c.qg = !0);
        }
    }
    function Md(a) {
        for (let b = 0; b < yd.length; ++b) {
            const c = yd[b];
            if (c.qg) {
                c.qg = !1;
                try {
                    c.mi({ ai: a });
                } catch (d) {}
            }
        }
    }
    var Od = function (a) {
        const b = zd().entries[a] || {};
        return void 0 !== b.update ? b.update : b.initial;
    };
    const Pd = function (a) {
        return (zd().entries[a] || {}).initial;
    };
    const Qd = function (a) {
        return !(zd().entries[a] || {}).quiet;
    };
    const Rd = function () {
        return xd().o() ? zd().active : !1;
    };
    const Sd = function () {
        return zd().usedDefault;
    };
    const Td = function (a, b) {
        zd().addListener(a, b);
    };
    const Ud = function (a) {
        zd().notifyListeners(a);
    };
    const Vd = function (a, b) {
        function c() {
            for (let e = 0; e < b.length; e++) if (!Qd(b[e])) return !0;
            return !1;
        }
        if (c()) {
            let d = !1;
            Td(b, function (e) {
                d || c() || ((d = !0), a(e));
            });
        } else a({});
    };
    const Wd = function (a, b) {
        function c() {
            for (var f = [], g = 0; g < d.length; g++) {
                const k = d[g];
                !1 === Od(k) || e[k] || (f.push(k), (e[k] = !0));
            }
            return f;
        }
        var d = h(b) ? [b] : b;
        var e = {};
        c().length !== d.length &&
            Td(d, function (f) {
                const g = c();
                g.length > 0 && ((f.te = g), a(f));
            });
    };
    function Xd(a) {
        for (var b = [], c = 0; c < Yd.length; c++) {
            const d = a(Yd[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-";
        }
        return b.join("");
    }
    var Yd = [M.D, M.I];
    const Zd = function (a) {
        const b = a[M.Ye];
        b && ud(40);
        const c = a[M.Ze];
        c && ud(41);
        for (var d = ua(b) ? b : [b], e = { Ob: 0 }; e.Ob < d.length; e = { Ob: e.Ob }, ++e.Ob)
            Da(
                a,
                (function (f) {
                    return function (g, k) {
                        if (g !== M.Ye && g !== M.Ze) {
                            const l = d[f.Ob];
                            zd().set(g, k, l, "BR", "BR-SP", c);
                        }
                    };
                })(e),
            );
    };
    let $d = 0;
    const ae = function (a, b) {
        Da(a, function (e, f) {
            zd().update(e, f);
        });
        Ud(b);
        const c = Oa();
        const d = c - $d;
        $d && d >= 0 && d < 1e3 && ud(66);
        $d = c;
    };
    const be = function (a) {
        const b = Od(a);
        return void 0 != b ? b : !0;
    };
    const ce = function () {
        return `G1${Xd(Od)}`;
    };
    const de = function () {
        return `G1${Xd(Pd)}`;
    };
    const ee = function (a, b) {
        Wd(a, b);
    };
    const fe = function (a, b) {
        Vd(a, b);
    };
    const he = function (a) {
        return ge ? B.querySelectorAll(a) : null;
    };
    const ie = function (a, b) {
        if (!ge) return null;
        if (Element.prototype.closest)
            try {
                return a.closest(b);
            } catch (e) {
                return null;
            }
        const c =
            Element.prototype.matches ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector;
        let d = a;
        if (!B.documentElement.contains(d)) return null;
        do {
            try {
                if (c.call(d, b)) return d;
            } catch (e) {
                break;
            }
            d = d.parentElement || d.parentNode;
        } while (d !== null && d.nodeType === 1);
        return null;
    };
    let je = !1;
    if (B.querySelectorAll)
        try {
            const ke = B.querySelectorAll(":root");
            ke && ke.length == 1 && ke[0] == B.documentElement && (je = !0);
        } catch (a) {}
    var ge = je;
    let le;
    let me = !1;
    const ne = function (a) {
        if (!me) {
            me = !0;
            le = le || {};
        }
        return le[a];
    };
    const oe = function (a) {
        if (B.hidden) return !0;
        const b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !m.getComputedStyle) return !0;
        const c = m.getComputedStyle(a, null);
        if (c.visibility === "hidden") return !0;
        for (let d = a, e = c; d; ) {
            if (e.display === "none") return !0;
            let f = e.opacity;
            let g = e.filter;
            if (g) {
                const k = g.indexOf("opacity(");
                k >= 0 &&
                    ((g = g.substring(k + 8, g.indexOf(")", k))),
                    g.charAt(g.length - 1) == "%" && (g = g.substring(0, g.length - 1)),
                    (f = Math.min(g, f)));
            }
            if (void 0 !== f && f <= 0) return !0;
            (d = d.parentElement) && (e = m.getComputedStyle(d, null));
        }
        return !1;
    };
    const pe = function () {
        const a = B.body;
        const b = B.documentElement || (a && a.parentElement);
        let c;
        let d;
        if (B.compatMode && B.compatMode !== "BackCompat") (c = b ? b.clientHeight : 0), (d = b ? b.clientWidth : 0);
        else {
            const e = function (f, g) {
                return f && g ? Math.min(f, g) : Math.max(f, g);
            };
            ud(7);
            c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
            d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0);
        }
        return { width: d, height: c };
    };
    const qe = function (a) {
        const b = pe();
        const c = b.height;
        const d = b.width;
        const e = a.getBoundingClientRect();
        const f = e.bottom - e.top;
        const g = e.right - e.left;
        return f && g
            ? (1 - Math.min((Math.max(0 - e.left, 0) + Math.max(e.right - d, 0)) / g, 1)) *
                  (1 - Math.min((Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f, 1))
            : 0;
    };
    const xe = /:[0-9]+$/;
    const ye = function (a, b, c) {
        for (let d = a.split("&"), e = 0; e < d.length; e++) {
            const f = d[e].split("=");
            if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
                const g = f.slice(1).join("=");
                return c ? g : decodeURIComponent(g).replace(/\+/g, " ");
            }
        }
    };
    const Be = function (a, b, c, d, e) {
        b && (b = String(b).toLowerCase());
        if (b === "protocol" || b === "port") a.protocol = ze(a.protocol) || ze(m.location.protocol);
        b === "port"
            ? (a.port = String(
                Number(a.hostname ? a.port : m.location.port) ||
                      (a.protocol == "http" ? 80 : a.protocol == "https" ? 443 : ""),
              ))
            : b === "host" && (a.hostname = (a.hostname || m.location.hostname).replace(xe, "").toLowerCase());
        return Ae(a, b, c, d, e);
    };
    var Ae = function (a, b, c, d, e) {
        let f;
        const g = ze(a.protocol);
        b && (b = String(b).toLowerCase());
        switch (b) {
        case "url_no_fragment":
                f = Ce(a);
            break;
            case "protocol":
            f = g;
                break;
            case "host":
                f = a.hostname.replace(xe, "").toLowerCase();
            if (c) {
                    let k = /^www\d*\./.exec(f);
                    k && k[0] && (f = f.substr(k[0].length));
                }
            break;
            case "port":
                f = String(Number(a.port) || (g == "http" ? 80 : g == "https" ? 443 : ""));
            break;
            case "path":
                a.pathname || a.hostname || sd("TAGGING", 1);
                f = a.pathname.substr(0, 1) == "/" ? a.pathname : `/${a.pathname}`;
                var l = f.split("/");
            wa(d || [], l[l.length - 1]) >= 0 && (l[l.length - 1] = "");
            f = l.join("/");
                break;
            case "query":
                f = a.search.replace("?", "");
                e && (f = ye(f, e, void 0));
            break;
            case "extension":
            var n = a.pathname.split(".");
                f = n.length > 1 ? n[n.length - 1] : "";
                f = f.split("/")[0];
            break;
            case "fragment":
                f = a.hash.replace("#", "");
            break;
            default:
                f = a && a.href;
        }
        return f;
    };
    var ze = function (a) {
        return a ? a.replace(":", "").toLowerCase() : "";
    };
    var Ce = function (a) {
        let b = "";
        if (a && a.href) {
            const c = a.href.indexOf("#");
            b = c < 0 ? a.href : a.href.substr(0, c);
        }
        return b;
    };
    const De = function (a) {
        const b = B.createElement("a");
        a && (b.href = a);
        let c = b.pathname;
        c[0] !== "/" && (a || sd("TAGGING", 1), (c = `/${c}`));
        const d = b.hostname.replace(xe, "");
        return {
            href: b.href,
            protocol: b.protocol,
            host: b.host,
            hostname: d,
            pathname: c,
            search: b.search,
            hash: b.hash,
            port: b.port,
        };
    };
    const Ee = function (a) {
        function b(n) {
            const p = n.split("=")[0];
            return d.indexOf(p) < 0 ? n : `${p}=0`;
        }
        function c(n) {
            return n
                .split("&")
                .map(b)
                .filter(function (p) {
                    return void 0 != p;
                })
                .join("&");
        }
        var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" ");
        const e = De(a);
        const f = a.split(/[?#]/)[0];
        let g = e.search;
        let k = e.hash;
        g[0] === "?" && (g = g.substring(1));
        k[0] === "#" && (k = k.substring(1));
        g = c(g);
        k = c(k);
        g !== "" && (g = `?${g}`);
        k !== "" && (k = `#${k}`);
        let l = `${f}${g}${k}`;
        l[l.length - 1] === "/" && (l = l.substring(0, l.length - 1));
        return l;
    };
    const He = {};
    const Ie = !0;
    const Je = !1;
    He.Kg = "false";
    const Ke = function (a) {
        if (He.Kg === "false" || !Ie) return !1;
        if (Je) return !0;
        const b = ne(`AW-${a}`);
        return !!b && !!b.preAutoPii;
    };
    const Le = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
    const Me = new RegExp(/@(gmail|googlemail)\./i);
    const Ne = new RegExp(/support|noreply/i);
    const Oe = "SCRIPT STYLE IMG SVG PATH BR".split(" ");
    const Pe = ["BR"];
    const Qe = {};
    function Re(a) {
        let b;
        if (a === B.body) b = "body";
        else {
            let c;
            if (a.id) c = `#${a.id}`;
            else {
                let d;
                if (a.parentElement) {
                    let e;
                    a: {
                        const f = a.parentElement;
                        if (f) {
                            for (let g = 0; g < f.childElementCount; g++)
                                if (f.children[g] === a) {
                                    e = g + 1;
                                    break a;
                                }
                            e = -1;
                        } else e = 1;
                    }
                    d = `${Re(a.parentElement)}>:nth-child(${e})`;
                } else d = "";
                c = d;
            }
            b = c;
        }
        return b;
    }
    function Se(a, b) {
        if (a.length <= 1) return a;
        const c = a.filter(b);
        return c.length == 0 ? a : c;
    }
    function Te(a) {
        if (a.length == 0) return null;
        let b;
        b = Se(a, function (c) {
            return !Ne.test(c.wa);
        });
        b = Se(b, function (c) {
            return c.element.tagName.toUpperCase() === "INPUT";
        });
        b = Se(b, function (c) {
            return !oe(c.element);
        });
        return b[0];
    }
    const Ue = function (a) {
        a = a || { Ce: !0, De: !0 };
        a.ab = a.ab || { email: !0, phone: !0, Vf: !0 };
        let b;
        const c = a;
        let d = `${!!c.Ce}.${!!c.De}`;
        c && c.nd && c.nd.length && (d += `.${c.nd.join(".")}`);
        c && c.ab && (d += `.${c.ab.email}.${c.ab.phone}.${c.ab.Vf}`);
        b = d;
        const e = Qe[b];
        if (e && Oa() - e.timestamp < 200) return e.result;
        let f;
        const g = [];
        const k = B.body;
        if (k) {
            for (var l = k.querySelectorAll("*"), n = 0; n < l.length && n < 1e4; n++) {
                const p = l[n];
                if (!(Oe.indexOf(p.tagName.toUpperCase()) >= 0)) {
                    for (var q = !1, t = 0; t < p.childElementCount && t < 1e4; t++)
                        if (!(Pe.indexOf(p.children[t].tagName.toUpperCase()) >= 0)) {
                            q = !0;
                            break;
                        }
                    q || g.push(p);
                }
            }
            f = { elements: g, status: l.length > 1e4 ? "2" : "1" };
        } else f = { elements: g, status: "4" };
        const u = f;
        let r = u.status;
        let v;
        if (a.ab && a.ab.email) {
            for (var x = u.elements, z = [], w = 0; w < x.length; w++) {
                const y = x[w];
                let A = y.textContent;
                y.value && (A = y.value);
                if (A) {
                    const C = A.match(Le);
                    if (C) {
                        const D = C[0];
                        var F;
                        if (m.location) {
                            const E = Ae(m.location, "host", !0);
                            F = D.toLowerCase().indexOf(E) >= 0;
                        } else F = !1;
                        F || z.push({ element: y, wa: D });
                    }
                }
            }
            let O;
            const J = a && a.nd;
            if (J && J.length !== 0) {
                for (var K = [], V = 0; V < z.length; V++) {
                    for (var L = !0, I = 0; I < J.length; I++) {
                        const P = J[I];
                        if (P && ie(z[V].element, P)) {
                            L = !1;
                            break;
                        }
                    }
                    L && K.push(z[V]);
                }
                O = K;
            } else O = z;
            v = Te(O);
            z.length > 10 && (r = "3");
        }
        const ba = [];
        if (v) {
            const da = v.element;
            const Q = { wa: v.wa, tagName: da.tagName, type: 1 };
            a.Ce && (Q.querySelector = Re(da));
            a.De && (Q.isVisible = !oe(da));
            ba.push(Q);
        }
        const U = { elements: ba, status: r };
        Qe[b] = { timestamp: Oa(), result: U };
        return U;
    };
    const Ve = function (a) {
        return `${a.tagName}:${a.isVisible}:${a.wa.length}:${Me.test(a.wa)}`;
    };
    const We = function (a) {
        return /^e\d+$/.test(a) || /^[0-9A-Za-z_-]{43}$/.test(a);
    };
    const Xe = function (a) {
        return void 0 === a || a === null ? "" : h(a) ? Ma(String(a)) : "e0";
    };
    const Ze = function (a) {
        return a.replace(Ye, "");
    };
    const af = function (a) {
        return $e(a.replace(/\s/g, ""));
    };
    var $e = function (a) {
        return Ma(a.replace(bf, "").toLowerCase());
    };
    const df = function (a) {
        a = a.replace(/[\s-()/.]/g, "");
        a.charAt(0) !== "+" && (a = `+${a}`);
        return cf.test(a) ? a : "e0";
    };
    const ff = function (a) {
        const b = a.toLowerCase().split("@");
        if (b.length == 2) {
            let c = b[0];
            /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
            c = `${c}@${b[1]}`;
            if (ef.test(c)) return c;
        }
        return "e0";
    };
    const jf = function (a, b, c) {
        window.Promise || c([], []);
        Promise.all(
            a.map(function (d) {
                return d.value && gf(d.name)
                    ? hf(d.value).then(function (e) {
                          d.value = e;
                    })
                    : Promise.resolve();
            }),
        )
            .then(function () {
                c(a, b);
            })
            .catch(function () {
                c([], []);
            });
    };
    var hf = function (a) {
        if (a === "" || a === "e0") return Promise.resolve(a);
        if (m.crypto && m.crypto.subtle)
            try {
                const b = kf(a);
                return m.crypto.subtle
                    .digest("SHA-256", b)
                    .then(function (c) {
                        const d = Array.from(new Uint8Array(c))
                            .map(function (e) {
                                return String.fromCharCode(e);
                            })
                            .join("");
                        return m.btoa(d).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
                    })
                    .catch(function () {
                        return "e2";
                    });
            } catch (c) {
                return Promise.resolve("e2");
            }
        else return Promise.resolve("e1");
    };
    var kf = function (a) {
        let b;
        if (m.TextEncoder) b = new m.TextEncoder("utf-8").encode(a);
        else {
            for (var c = [], d = 0; d < a.length; d++) {
                let e = a.charCodeAt(d);
                e < 128
                    ? c.push(e)
                    : e < 2048
                    ? c.push(192 | (e >> 6), 128 | (e & 63))
                    : e < 55296 || e >= 57344
                    ? c.push(224 | (e >> 12), 128 | ((e >> 6) & 63), 128 | (e & 63))
                    : ((e = 65536 + (((e & 1023) << 10) | (a.charCodeAt(++d) & 1023))),
                      c.push(240 | (e >> 18), 128 | ((e >> 12) & 63), 128 | ((e >> 6) & 63), 128 | (e & 63)));
            }
            b = new Uint8Array(c);
        }
        return b;
    };
    var bf = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g;
    var ef = /^\S+@\S+\.\S+$/;
    var cf = /^\+\d{11,15}$/;
    var Ye = /[.~]/g;
    const lf = {};
    const mf =
        ((lf.email = "em"),
        (lf.phone_number = "pn"),
        (lf.first_name = "fn"),
        (lf.last_name = "ln"),
        (lf.street = "sa"),
        (lf.city = "ct"),
        (lf.region = "rg"),
        (lf.country = "co"),
        (lf.postal_code = "pc"),
        (lf.error_code = "ec"),
        lf);
    const nf = function (a, b, c) {
        function d(r, v, x) {
            let z = r[v];
            ua(z) || (z = [z]);
            for (let w = 0; w < z.length; ++w) {
                const y = Xe(z[w]);
                y !== "" && g.push({ name: v, value: x(y), index: void 0 });
            }
        }
        function e(r, v, x, z) {
            const w = Xe(r[v]);
            w !== "" && g.push({ name: v, value: x(w), index: z });
        }
        function f(r) {
            return function (v) {
                ud(64);
                return r(v);
            };
        }
        var g = [];
        const k = [];
        if (m.location.protocol === "https:") {
            const l = function (r, v) {
                let x = r[v];
                ua(x) || (x = [x]);
                for (let z = 0; z < x.length; ++z) {
                    const w = Xe(x[z]);
                    if (w !== "") return w;
                }
                return null;
            };
            d(a, "email", ff);
            const n = l(a, "email");
            if (n) for (let p = 0; p < b.length; p++) k.push(b[p].wa.toLowerCase() === n.toLowerCase());
            d(a, "phone_number", df);
            d(a, "first_name", f(af));
            d(a, "last_name", f(af));
            const q = a.home_address || {};
            d(q, "street", f($e));
            d(q, "city", f($e));
            d(q, "postal_code", f(Ze));
            d(q, "region", f($e));
            d(q, "country", f(Ze));
            let t = a.address || {};
            ua(t) || (t = [t]);
            for (let u = 0; u < t.length; u++)
                e(t[u], "first_name", af, u),
                    e(t[u], "last_name", af, u),
                e(t[u], "street", $e, u),
                    e(t[u], "city", $e, u),
                e(t[u], "postal_code", Ze, u),
                e(t[u], "region", $e, u),
                e(t[u], "country", Ze, u);
            jf(g, k, c);
        } else g.push({ name: "error_code", value: "e3", index: void 0 }), c(g, k);
    };
    const of = function (a, b) {
        nf(a, [], function (c, d) {
            for (var e = ["tv.1"], f = 0; f < c.length; ++f) {
                const g = c[f].name;
                const k = c[f].value;
                const l = c[f].index;
                let n = mf[g];
                n && k && (!gf(g) || We(k)) && (void 0 !== l && (n += l), e.push(`${n}.${k}`));
            }
            b(encodeURIComponent(e.join("~")), d);
        });
    };
    const pf = function (a, b) {
        if (m.Promise)
            try {
                return new Promise(function (c) {
                    nf(a, b, function (d, e) {
                        for (var f = ["tv.1"], g = 0; g < d.length; ++g) {
                            const k = d[g].name;
                            const l = d[g].value;
                            const n = d[g].index;
                            let p = mf[k];
                            p && l && (!gf(k) || We(l)) && (void 0 !== n && (p += n), f.push(`${p}.${l}`));
                        }
                        c({ xc: encodeURIComponent(f.join("~")), kc: e });
                    });
                });
            } catch (c) {}
    };
    var gf = function (a) {
        return ["email", "phone_number", "first_name", "last_name", "street"].indexOf(a) !== -1;
    };
    const qf = function () {
        this.eventModel = {};
        this.targetConfig = {};
        this.containerConfig = {};
        this.remoteConfig = {};
        this.globalConfig = {};
        this.onSuccess = function () {};
        this.onFailure = function () {};
        this.setContainerTypeLoaded = function () {};
        this.getContainerTypeLoaded = function () {};
        this.eventId = void 0;
        this.isGtmEvent = !1;
    };
    const rf = function (a) {
        const b = new qf();
        b.eventModel = a;
        return b;
    };
    const sf = function (a, b) {
        a.targetConfig = b;
        return a;
    };
    const tf = function (a, b) {
        a.containerConfig = b;
        return a;
    };
    const uf = function (a, b) {
        a.remoteConfig = b;
        return a;
    };
    const vf = function (a, b) {
        a.globalConfig = b;
        return a;
    };
    const wf = function (a, b) {
        a.onSuccess = b;
        return a;
    };
    const xf = function (a, b) {
        a.setContainerTypeLoaded = b;
        return a;
    };
    const yf = function (a, b) {
        a.getContainerTypeLoaded = b;
        return a;
    };
    const zf = function (a, b) {
        a.onFailure = b;
        return a;
    };
    qf.prototype.getWithConfig = function (a) {
        if (void 0 !== this.eventModel[a]) return this.eventModel[a];
        if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
        if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
        if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a];
        if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
    };
    const Af = function (a) {
        function b(d) {
            for (let e = Object.keys(d), f = 0; f < e.length; ++f) c[e[f]] = 1;
        }
        var c = {};
        b(a.eventModel);
        b(a.targetConfig);
        b(a.containerConfig);
        b(a.globalConfig);
        return Object.keys(c);
    };
    const Bf = function (a, b, c) {
        function d(g) {
            Sb(g) &&
                Da(g, function (k, l) {
                    f = !0;
                    e[k] = l;
                });
        }
        var e = {};
        var f = !1;
        (c && c !== 1) || (d(a.globalConfig[b]), d(a.remoteConfig[b]), d(a.containerConfig[b]), d(a.targetConfig[b]));
        (c && c !== 2) || d(a.eventModel[b]);
        return f ? e : void 0;
    };
    const Cf = {};
    let N = null;
    const Df = Math.random();
    Cf.M = "G-TKZ0EYZ31J";
    Cf.bd = "910";
    Cf.Pg = "ChEI8NXRiQYQlYLIzcnplaGmARIlAGzlgcXwJ6uPOXaFwFrG0Lr8Ux6sLynJQKV9/AdBBFyz/I8x1xoC0IE\x3d";
    const Ef = {
        __cl: !0,
        __ecl: !0,
        __ehl: !0,
        __evl: !0,
        __fal: !0,
        __fil: !0,
        __fsl: !0,
        __hl: !0,
        __jel: !0,
        __lcl: !0,
        __sdl: !0,
        __tl: !0,
        __ytl: !0,
    };
    const Ff = { __paused: !0, __tg: !0 };
    let Gf;
    for (Gf in Ef) Ef.hasOwnProperty(Gf) && (Ff[Gf] = !0);
    let Hf = "www.googletagmanager.com/gtm.js";
    Hf = "www.googletagmanager.com/gtag/js";
    const If = Hf;
    const Jf = Ia("");
    let Kf = null;
    let Lf = null;
    const Mf = `https://www.googletagmanager.com/a?id=${Cf.M}&cv=1`;
    const Nf = {};
    const Of = {};
    const Pf = function () {
        const a = N.sequence || 1;
        N.sequence = a + 1;
        return a;
    };
    Cf.Og = "";
    const Qf = "";
    Cf.nj = Qf;
    const Rf = {};
    let Sf = new za();
    let Tf = {};
    const Uf = {};
    const Xf = {
        name: "dataLayer",
        set(a, b) {
            H(Wa(a, b), Tf);
            Vf();
        },
        get(a) {
            return Wf(a, 2);
        },
        reset() {
            Sf = new za();
            Tf = {};
            Vf();
        },
    };
    var Wf = function (a, b) {
        return b != 2 ? Sf.get(a) : Yf(a);
    };
    var Yf = function (a) {
        let b;
        const c = a.split(".");
        b = b || [];
        for (var d = Tf, e = 0; e < c.length; e++) {
            if (d === null) return !1;
            if (void 0 === d) break;
            d = d[c[e]];
            if (wa(b, d) !== -1) return;
        }
        return d;
    };
    const Zf = function (a, b) {
        Uf.hasOwnProperty(a) || (Sf.set(a, b), H(Wa(a, b), Tf), Vf());
    };
    var Vf = function (a) {
        Da(Uf, function (b, c) {
            Sf.set(b, c);
            H(Wa(b, void 0), Tf);
            H(Wa(b, c), Tf);
            a && delete Uf[b];
        });
    };
    const ag = function (a, b, c) {
        Rf[a] = Rf[a] || {};
        Rf[a][b] = $f(b, c);
    };
    var $f = function (a, b) {
        let c;
        const d = (void 0 === b ? 2 : b) !== 1 ? Yf(a) : Sf.get(a);
        Qb(d) === "array" || Qb(d) === "object" ? (c = H(d)) : (c = d);
        return c;
    };
    const bg = function (a, b) {
        if (Rf[a]) return Rf[a][b];
    };
    const cg = function (a, b) {
        Rf[a] && delete Rf[a][b];
    };
    const dg = function (a, b, c) {
        if (c) {
            const d = c.selector_type;
            let e = String(c.value);
            let f;
            if (d === "js_variable") {
                e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
                for (let g = e.split(","), k = 0; k < g.length; k++) {
                    const l = g[k].trim();
                    if (l) {
                        if (l.indexOf("dataLayer.") === 0) f = Wf(l.substring(10));
                        else {
                            const n = l.split(".");
                            f = m[n.shift()];
                            for (let p = 0; p < n.length; p++) f = f && f[n[p]];
                        }
                        if (void 0 !== f) break;
                    }
                }
            } else if (d === "css_selector" && ge) {
                const q = he(e);
                q && q.length > 0 && (f = Hb(q[0]) || Ma(q[0].value));
            }
            f && (a[b] = f);
        }
    };
    const eg = function (a) {
        if (a) {
            const b = {};
            dg(b, "email", a.email);
            dg(b, "phone_number", a.phone);
            b.address = [];
            for (let c = a.name_and_address || [], d = 0; d < c.length; d++) {
                const e = {};
                dg(e, "first_name", c[d].first_name);
                dg(e, "last_name", c[d].last_name);
                dg(e, "street", c[d].street);
                dg(e, "city", c[d].city);
                dg(e, "region", c[d].region);
                dg(e, "country", c[d].country);
                dg(e, "postal_code", c[d].postal_code);
                b.address.push(e);
            }
            return b;
        }
    };
    const fg = function (a) {
        if (a)
            switch (a.mode) {
                case "selectors":
                return eg(a.selectors);
            case "auto_detect":
                    var b;
                var c = a.auto_detect;
                if (c) {
                    const d = Ue({
                            Ce: !1,
                            De: !1,
                        nd: c.exclude_element_selectors,
                        ab: { email: !!c.email, phone: !!c.phone, Vf: !!c.address },
                        }).elements;
                        const e = {};
                    if (d.length > 0)
                        for (let f = 0; f < d.length; f++) {
                                var g = d[f];
                            if (g.type === 1) {
                                    e.email = g.wa;
                                break;
                                }
                        }
                    b = e;
                } else b = void 0;
                    return b;
            }
    };
    const gg = function (a) {
        switch (a.enhanced_conversions_mode) {
            case "manual":
                var b = a.enhanced_conversions_manual_var;
                return void 0 !== b ? b : m.enhanced_conversion_data;
            case "automatic":
                return eg(a[M.qf]);
        }
    };
    const hg = {};
    const ig = function (a, b) {
        if (m._gtmexpgrp && m._gtmexpgrp.hasOwnProperty(a)) return m._gtmexpgrp[a];
        void 0 === hg[a] && (hg[a] = Math.floor(Math.random() * b));
        return hg[a];
    };
    function jg(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            const g = e[f].split("=");
            const k = g[0].replace(/^\s*|\s*$/g, "");
            if (k && k == a) {
                let l = g
                    .slice(1)
                    .join("=")
                    .replace(/^\s*|\s*$/g, "");
                l && c && (l = decodeURIComponent(l));
                d.push(l);
            }
        }
        return d;
    }
    function kg(a) {
        return a.origin !== "null";
    }
    const ng = function (a, b, c, d) {
        return lg(d) ? jg(a, String(b || mg()), c) : [];
    };
    const ug = function (a, b, c, d, e) {
        if (lg(e)) {
            let f = og(a, d, e);
            if (f.length === 1) return f[0].id;
            if (f.length !== 0) {
                f = tg(
                    f,
                    function (g) {
                        return g.kd;
                    },
                    b,
                );
                if (f.length === 1) return f[0].id;
                f = tg(
                    f,
                    function (g) {
                        return g.yc;
                    },
                    c,
                );
                return f[0] ? f[0].id : void 0;
            }
        }
    };
    function vg(a, b, c, d) {
        const e = mg();
        const f = window;
        kg(f) && (f.document.cookie = a);
        const g = mg();
        return e != g || (void 0 != c && ng(b, g, !1, d).indexOf(c) >= 0);
    }
    const zg = function (a, b, c) {
        function d(u, r, v) {
            if (v == null) return delete g[r], u;
            g[r] = v;
            return `${u}; ${r}=${v}`;
        }
        function e(u, r) {
            if (r == null) return delete g[r], u;
            g[r] = !0;
            return `${u}; ${r}`;
        }
        if (!lg(c.Ta)) return 2;
        let f;
        void 0 == b
            ? (f = `${a}=deleted; expires=${new Date(0).toUTCString()}`)
            : (c.encode && (b = encodeURIComponent(b)), (b = wg(b)), (f = `${a}=${b}`));
        var g = {};
        f = d(f, "path", c.path);
        let k;
        c.expires instanceof Date ? (k = c.expires.toUTCString()) : c.expires != null && (k = `${c.expires}`);
        f = d(f, "expires", k);
        f = d(f, "max-age", c.sj);
        f = d(f, "samesite", c.tj);
        c.uj && (f = e(f, "secure"));
        const l = c.domain;
        if (l === "auto") {
            for (let n = xg(), p = 0; p < n.length; ++p) {
                const q = n[p] !== "none" ? n[p] : void 0;
                let t = d(f, "domain", q);
                t = e(t, c.flags);
                if (!yg(q, c.path) && vg(t, a, b, c.Ta)) return 0;
            }
            return 1;
        }
        l && l !== "none" && (f = d(f, "domain", l));
        f = e(f, c.flags);
        return yg(l, c.path) ? 1 : vg(f, a, b, c.Ta) ? 0 : 1;
    };
    const Ag = function (a, b, c) {
        c.path == null && (c.path = "/");
        c.domain || (c.domain = "auto");
        return zg(a, b, c);
    };
    function tg(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            const k = a[g];
            const l = b(k);
            l === c ? d.push(k) : void 0 === f || l < f ? ((e = [k]), (f = l)) : l === f && e.push(k);
        }
        return d.length > 0 ? d : e;
    }
    function og(a, b, c) {
        for (var d = [], e = ng(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            const g = e[f].split(".");
            const k = g.shift();
            if (!b || b.indexOf(k) !== -1) {
                let l = g.shift();
                l && ((l = l.split("-")), d.push({ id: g.join("."), kd: 1 * l[0] || 1, yc: 1 * l[1] || 1 }));
            }
        }
        return d;
    }
    var wg = function (a) {
        a && a.length > 1200 && (a = a.substring(0, 1200));
        return a;
    };
    const Bg = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/;
    const Cg = /(^|\.)doubleclick\.net$/i;
    var yg = function (a, b) {
        return Cg.test(window.document.location.hostname) || (b === "/" && Bg.test(a));
    };
    var mg = function () {
        return kg(window) ? window.document.cookie : "";
    };
    var xg = function () {
        const a = [];
        const b = window.document.location.hostname.split(".");
        if (b.length === 4) {
            const c = b[b.length - 1];
            if (parseInt(c, 10).toString() === c) return ["none"];
        }
        for (let d = b.length - 2; d >= 0; d--) a.push(b.slice(d).join("."));
        const e = window.document.location.hostname;
        Cg.test(e) || Bg.test(e) || a.push("none");
        return a;
    };
    var lg = function (a) {
        if (!xd().o() || !a || !Rd()) return !0;
        if (!Qd(a)) return !1;
        const b = Od(a);
        return b == null ? !0 : !!b;
    };
    const Dg = function () {
        return [Math.round(2147483647 * Math.random()), Math.round(Oa() / 1e3)].join(".");
    };
    const Gg = function (a, b, c, d, e) {
        const f = Eg(b);
        return ug(a, f, Fg(c), d, e);
    };
    const Hg = function (a, b, c, d) {
        let e = `${Eg(c)}`;
        const f = Fg(d);
        f > 1 && (e += `-${f}`);
        return [b, e, a].join(".");
    };
    var Eg = function (a) {
        if (!a) return 1;
        a = a.indexOf(".") === 0 ? a.substr(1) : a;
        return a.split(".").length;
    };
    var Fg = function (a) {
        if (!a || a === "/") return 1;
        a[0] !== "/" && (a = `/${a}`);
        a[a.length - 1] !== "/" && (a += "/");
        return a.split("/").length - 1;
    };
    function Ig(a, b, c) {
        let d;
        const e = Number(a.pb != null ? a.pb : void 0);
        e !== 0 && (d = new Date((b || Oa()) + 1e3 * (e || 7776e3)));
        return { path: a.path, domain: a.domain, flags: a.flags, encode: !!c, expires: d };
    }
    const Jg = ["1"];
    const Kg = {};
    const Og = function (a, b) {
        b = void 0 === b ? !0 : b;
        const c = Lg(a.prefix);
        if (!Kg[c] && !Mg(c, a.path, a.domain) && b) {
            const d = Lg(a.prefix);
            const e = Dg();
            if (Ng(d, e, a) === 0) {
                const f = yb("google_tag_data", {});
                f._gcl_au ? sd("GTM", 57) : (f._gcl_au = e);
            }
            Mg(c, a.path, a.domain);
        }
    };
    function Ng(a, b, c) {
        const d = Hg(b, "1", c.domain, c.path);
        const e = Ig(c);
        e.Ta = "ad_storage";
        return Ag(a, d, e);
    }
    function Mg(a, b, c) {
        const d = Gg(a, b, c, Jg, "ad_storage");
        d && (Kg[a] = d);
        return d;
    }
    function Lg(a) {
        return `${a || "_gcl"}_au`;
    }
    const Pg = function (a) {
        for (
            var b = [],
                c = B.cookie.split(";"),
                d = new RegExp(`^\\s*${a || "_gac"}_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$`),
                e = 0;
            e < c.length;
            e++
        ) {
            const f = c[e].match(d);
            f && b.push({ Ue: f[1], value: f[2], timestamp: Number(f[2].split(".")[1]) || 0 });
        }
        b.sort(function (g, k) {
            return k.timestamp - g.timestamp;
        });
        return b;
    };
    function Qg(a, b) {
        const c = Pg(a);
        const d = {};
        if (!c || !c.length) return d;
        for (let e = 0; e < c.length; e++) {
            const f = c[e].value.split(".");
            if (!(f[0] !== "1" || (b && f.length < 3) || (!b && f.length !== 3)) && Number(f[1])) {
                d[c[e].Ue] || (d[c[e].Ue] = []);
                const g = { version: f[0], timestamp: 1e3 * Number(f[1]), ra: f[2] };
                b && f.length > 3 && (g.labels = f.slice(3));
                d[c[e].Ue].push(g);
            }
        }
        return d;
    }
    function Rg() {
        for (var a = Sg, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b;
    }
    function Tg() {
        let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += `${a.toLowerCase()}0123456789-_`;
        return `${a}.`;
    }
    let Sg;
    let Ug;
    function Vg(a) {
        function b(l) {
            for (; d < a.length; ) {
                const n = a.charAt(d++);
                const p = Ug[n];
                if (p != null) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error(`Unknown base64 encoding at char: ${n}`);
            }
            return l;
        }
        Sg = Sg || Tg();
        Ug = Ug || Rg();
        for (var c = "", d = 0; ; ) {
            const e = b(-1);
            const f = b(0);
            const g = b(64);
            const k = b(64);
            if (k === 64 && e === -1) return c;
            c += String.fromCharCode((e << 2) | (f >> 4));
            g != 64 &&
                ((c += String.fromCharCode(((f << 4) & 240) | (g >> 2))),
                k != 64 && (c += String.fromCharCode(((g << 6) & 192) | k)));
        }
    }
    let Wg;
    const $g = function () {
        const a = Xg;
        const b = Yg;
        const c = Zg();
        const d = function (g) {
            a(g.target || g.srcElement || {});
        };
        const e = function (g) {
            b(g.target || g.srcElement || {});
        };
        if (!c.init) {
            Eb(B, "mousedown", d);
            Eb(B, "keyup", d);
            Eb(B, "submit", e);
            const f = HTMLFormElement.prototype.submit;
            HTMLFormElement.prototype.submit = function () {
                b(this);
                f.call(this);
            };
            c.init = !0;
        }
    };
    const ah = function (a, b, c, d, e) {
        const f = { callback: a, domains: b, fragment: c === 2, placement: c, forms: d, sameHost: e };
        Zg().decorators.push(f);
    };
    const bh = function (a, b, c) {
        for (var d = Zg().decorators, e = {}, f = 0; f < d.length; ++f) {
            const g = d[f];
            var k;
            if ((k = !c || g.forms))
                a: {
                    const l = g.domains;
                    const n = a;
                    const p = !!g.sameHost;
                    if (l && (p || n !== B.location.hostname))
                        for (let q = 0; q < l.length; q++)
                            if (l[q] instanceof RegExp) {
                                if (l[q].test(n)) {
                                    k = !0;
                                    break a;
                                }
                            } else if (n.indexOf(l[q]) >= 0 || (p && l[q].indexOf(n) >= 0)) {
                                k = !0;
                                break a;
                            }
                    k = !1;
                }
            if (k) {
                let t = g.placement;
                void 0 == t && (t = g.fragment ? 2 : 1);
                t === b && Sa(e, g.callback());
            }
        }
        return e;
    };
    var Zg = function () {
        const a = yb("google_tag_data", {});
        let b = a.gl;
        (b && b.decorators) || ((b = { decorators: [] }), (a.gl = b));
        return b;
    };
    const ch = /(.*?)\*(.*?)\*(.*)/;
    const dh = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/;
    const eh = /^(?:www\.|m\.|amp\.)+/;
    const fh = /([^?#]+)(\?[^#]*)?(#.*)?/;
    function gh(a) {
        return new RegExp(`(.*?)(^|&)${a}=([^&]*)&?(.*)`);
    }
    const ih = function (a) {
        const b = [];
        let c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                const d = a[c];
                if (void 0 !== d && d === d && d !== null && d.toString() !== "[object Object]") {
                    b.push(c);
                    const e = b;
                    const f = e.push;
                    var g;
                    const k = String(d);
                    Sg = Sg || Tg();
                    Ug = Ug || Rg();
                    for (var l = [], n = 0; n < k.length; n += 3) {
                        const p = n + 1 < k.length;
                        const q = n + 2 < k.length;
                        const t = k.charCodeAt(n);
                        const u = p ? k.charCodeAt(n + 1) : 0;
                        const r = q ? k.charCodeAt(n + 2) : 0;
                        const v = t >> 2;
                        const x = ((t & 3) << 4) | (u >> 4);
                        let z = ((u & 15) << 2) | (r >> 6);
                        let w = r & 63;
                        q || ((w = 64), p || (z = 64));
                        l.push(Sg[v], Sg[x], Sg[z], Sg[w]);
                    }
                    g = l.join("");
                    f.call(e, g);
                }
            }
        const y = b.join("*");
        return ["1", hh(y), y].join("*");
    };
    var hh = function (a, b) {
        const c = [
            window.navigator.userAgent,
            new Date().getTimezoneOffset(),
            window.navigator.userLanguage || window.navigator.language,
            Math.floor(new Date().getTime() / 60 / 1e3) - (void 0 === b ? 0 : b),
            a,
        ].join("*");
        let d;
        if (!(d = Wg)) {
            for (var e = Array(256), f = 0; f < 256; f++) {
                for (var g = f, k = 0; k < 8; k++) g = g & 1 ? (g >>> 1) ^ 3988292384 : g >>> 1;
                e[f] = g;
            }
            d = e;
        }
        Wg = d;
        for (var l = 4294967295, n = 0; n < c.length; n++) l = (l >>> 8) ^ Wg[(l ^ c.charCodeAt(n)) & 255];
        return ((l ^ -1) >>> 0).toString(36);
    };
    const kh = function () {
        return function (a) {
            const b = De(m.location.href);
            const c = b.search.replace("?", "");
            const d = ye(c, "_gl", !0) || "";
            a.query = jh(d) || {};
            const e = Be(b, "fragment").match(gh("_gl"));
            a.fragment = jh((e && e[3]) || "") || {};
        };
    };
    const lh = function (a) {
        const b = kh();
        const c = Zg();
        c.data || ((c.data = { query: {}, fragment: {} }), b(c.data));
        const d = {};
        const e = c.data;
        e && (Sa(d, e.query), a && Sa(d, e.fragment));
        return d;
    };
    var jh = function (a) {
        let b;
        b = void 0 === b ? 3 : b;
        try {
            if (a) {
                let c;
                a: {
                    for (let d = a, e = 0; e < 3; ++e) {
                        const f = ch.exec(d);
                        if (f) {
                            c = f;
                            break a;
                        }
                        d = decodeURIComponent(d);
                    }
                    c = void 0;
                }
                const g = c;
                if (g && g[1] === "1") {
                    const k = g[3];
                    let l;
                    a: {
                        for (let n = g[2], p = 0; p < b; ++p)
                            if (n === hh(k, p)) {
                                l = !0;
                                break a;
                            }
                        l = !1;
                    }
                    if (l) {
                        for (var q = {}, t = k ? k.split("*") : [], u = 0; u < t.length; u += 2) q[t[u]] = Vg(t[u + 1]);
                        return q;
                    }
                }
            }
        } catch (r) {}
    };
    function mh(a, b, c, d) {
        function e(p) {
            const q = p;
            const t = gh(a).exec(q);
            let u = q;
            if (t) {
                const r = t[2];
                const v = t[4];
                u = t[1];
                v && (u = u + r + v);
            }
            p = u;
            const x = p.charAt(p.length - 1);
            p && x !== "&" && (p += "&");
            return p + n;
        }
        d = void 0 === d ? !1 : d;
        const f = fh.exec(c);
        if (!f) return "";
        const g = f[1];
        let k = f[2] || "";
        let l = f[3] || "";
        var n = `${a}=${b}`;
        d ? (l = `#${e(l.substring(1))}`) : (k = `?${e(k.substring(1))}`);
        return `${g}${k}${l}`;
    }
    function nh(a, b) {
        const c = (a.tagName || "").toUpperCase() === "FORM";
        const d = bh(b, 1, c);
        const e = bh(b, 2, c);
        const f = bh(b, 3, c);
        if (Ua(d)) {
            const g = ih(d);
            c ? oh("_gl", g, a) : ph("_gl", g, a, !1);
        }
        if (!c && Ua(e)) {
            const k = ih(e);
            ph("_gl", k, a, !0);
        }
        for (const l in f)
            if (f.hasOwnProperty(l))
                a: {
                    const n = l;
                    const p = f[l];
                    const q = a;
                    if (q.tagName) {
                        if (q.tagName.toLowerCase() === "a") {
                            ph(n, p, q, void 0);
                            break a;
                        }
                        if (q.tagName.toLowerCase() === "form") {
                            oh(n, p, q);
                            break a;
                        }
                    }
                    typeof q === "string" && mh(n, p, q, void 0);
                }
    }
    function ph(a, b, c, d) {
        if (c.href) {
            const e = mh(a, b, c.href, void 0 === d ? !1 : d);
            db.test(e) && (c.href = e);
        }
    }
    function oh(a, b, c) {
        if (c && c.action) {
            const d = (c.method || "").toLowerCase();
            if (d === "get") {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    const k = e[g];
                    if (k.name === a) {
                        k.setAttribute("value", b);
                        f = !0;
                        break;
                    }
                }
                if (!f) {
                    const l = B.createElement("input");
                    l.setAttribute("type", "hidden");
                    l.setAttribute("name", a);
                    l.setAttribute("value", b);
                    c.appendChild(l);
                }
            } else if (d === "post") {
                const n = mh(a, b, c.action);
                db.test(n) && (c.action = n);
            }
        }
    }
    var Xg = function (a) {
        try {
            let b;
            a: {
                for (let c = a, d = 100; c && d > 0; ) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a;
                    }
                    c = c.parentNode;
                    d--;
                }
                b = null;
            }
            const e = b;
            if (e) {
                const f = e.protocol;
                (f !== "http:" && f !== "https:") || nh(e, e.hostname);
            }
        } catch (g) {}
    };
    var Yg = function (a) {
        try {
            if (a.action) {
                const b = Be(De(a.action), "host");
                nh(a, b);
            }
        } catch (c) {}
    };
    const qh = function (a, b, c, d) {
        $g();
        ah(a, b, c === "fragment" ? 2 : 1, !!d, !1);
    };
    const rh = function (a, b) {
        $g();
        ah(a, [Ae(m.location, "host", !0)], b, !0, !0);
    };
    const sh = function () {
        const a = B.location.hostname;
        const b = dh.exec(B.referrer);
        if (!b) return !1;
        const c = b[2];
        const d = b[1];
        let e = "";
        if (c) {
            const f = c.split("/");
            const g = f[1];
            e = g === "s" ? decodeURIComponent(f[2]) : decodeURIComponent(g);
        } else if (d) {
            if (d.indexOf("xn--") === 0) return !1;
            e = d.replace(/-/g, ".").replace(/\.\./g, "-");
        }
        const k = a.replace(eh, "");
        const l = e.replace(eh, "");
        let n;
        if (!(n = k === l)) {
            const p = `.${l}`;
            n = k.substring(k.length - p.length, k.length) === p;
        }
        return n;
    };
    const th = function (a, b) {
        return !1 === a ? !1 : a || b || sh();
    };
    const uh = {};
    const vh = /^\w+$/;
    const wh = /^[\w-]+$/;
    const xh = { aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb" };
    const yh = function () {
        if (!xd().o() || !Rd()) return !0;
        const a = Od("ad_storage");
        return a == null ? !0 : !!a;
    };
    const zh = function (a, b) {
        Qd("ad_storage")
            ? yh()
                ? a()
                : Wd(a, "ad_storage")
            : b
                ? sd("TAGGING", 3)
                : Vd(
                    function () {
                        zh(a, !0);
                    },
                  ["ad_storage"],
                );
    };
    const Bh = function (a) {
        return Ah(a).map(function (b) {
            return b.ra;
        });
    };
    var Ah = function (a) {
        const b = [];
        if (!kg(m) || !B.cookie) return b;
        const c = ng(a, B.cookie, void 0, "ad_storage");
        if (!c || c.length == 0) return b;
        for (let d = {}, e = 0; e < c.length; d = { Fc: d.Fc }, e++) {
            const f = Ch(c[e]);
            if (f != null) {
                const g = f;
                const k = g.version;
                d.Fc = g.ra;
                const l = g.timestamp;
                const n = g.labels;
                const p = xa(
                    b,
                    (function (q) {
                        return function (t) {
                            return t.ra === q.Fc;
                        };
                    })(d),
                );
                p
                    ? ((p.timestamp = Math.max(p.timestamp, l)), (p.labels = Dh(p.labels, n || [])))
                    : b.push({ version: k, ra: d.Fc, timestamp: l, labels: n });
            }
        }
        b.sort(function (q, t) {
            return t.timestamp - q.timestamp;
        });
        return Eh(b);
    };
    function Dh(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) (c[a[e]] = !0), d.push(a[e]);
        for (let f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d;
    }
    function Fh(a) {
        return a && typeof a === "string" && a.match(vh) ? a : "_gcl";
    }
    const Hh = function () {
        const a = De(m.location.href);
        let b = Be(a, "query", !1, void 0, "gclid");
        let c = Be(a, "query", !1, void 0, "gclsrc");
        let d = Be(a, "query", !1, void 0, "wbraid");
        const e = Be(a, "query", !1, void 0, "dclid");
        if (!b || !c || !d) {
            const f = a.hash.replace("#", "");
            b = b || ye(f, "gclid", void 0);
            c = c || ye(f, "gclsrc", void 0);
            d = d || ye(f, "wbraid", void 0);
        }
        return Gh(b, c, e, d);
    };
    var Gh = function (a, b, c, d) {
        const e = {};
        const f = function (g, k) {
            e[k] || (e[k] = []);
            e[k].push(g);
        };
        e.gclid = a;
        e.gclsrc = b;
        e.dclid = c;
        void 0 !== d && wh.test(d) && ((e.gbraid = d), f(d, "gb"));
        if (void 0 !== a && a.match(wh))
            switch (b) {
                case void 0:
                    f(a, "aw");
                break;
                case "aw.ds":
                f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                f(a, "dc");
                    break;
                case "3p.ds":
                f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
            case "ha":
                    f(a, "ha");
            }
        c && f(c, "dc");
        return e;
    };
    const Jh = function (a) {
        const b = Hh();
        zh(function () {
            Ih(b, !1, a);
        });
    };
    function Ih(a, b, c, d, e) {
        function f(x, z) {
            const w = Kh(x, g);
            w && (Ag(w, z, k), (l = !0));
        }
        c = c || {};
        e = e || [];
        var g = Fh(c.prefix);
        d = d || Oa();
        var k = Ig(c, d, !0);
        k.Ta = "ad_storage";
        var l = !1;
        const n = Math.round(d / 1e3);
        const p = function (x) {
            const z = ["GCL", n, x];
            e.length > 0 && z.push(e.join("."));
            return z.join(".");
        };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if ((void 0 == uh.enable_gbraid_cookie_write ? 0 : uh.enable_gbraid_cookie_write) && !l && a.gb) {
            const q = a.gb[0];
            const t = Kh("gb", g);
            let u = !1;
            if (!b)
                for (let r = Ah(t), v = 0; v < r.length; v++)
                    r[v].ra === q && r[v].labels && r[v].labels.length > 0 && (u = !0);
            u || f("gb", p(q));
        }
    }
    const Mh = function (a, b) {
        const c = lh(!0);
        zh(function () {
            for (let d = Fh(b.prefix), e = 0; e < a.length; ++e) {
                const f = a[e];
                if (void 0 !== xh[f]) {
                    const g = Kh(f, d);
                    const k = c[g];
                    if (k) {
                        const l = Math.min(Lh(k), Oa());
                        var n;
                        b: {
                            const p = l;
                            if (kg(m))
                                for (let q = ng(g, B.cookie, void 0, "ad_storage"), t = 0; t < q.length; ++t)
                                    if (Lh(q[t]) > p) {
                                        n = !0;
                                        break b;
                                    }
                            n = !1;
                        }
                        if (!n) {
                            const u = Ig(b, l, !0);
                            u.Ta = "ad_storage";
                            Ag(g, k, u);
                        }
                    }
                }
            }
            Ih(Gh(c.gclid, c.gclsrc), !1, b);
        });
    };
    var Kh = function (a, b) {
        const c = xh[a];
        if (void 0 !== c) return b + c;
    };
    var Lh = function (a) {
        return Nh(a.split(".")).length !== 0 ? 1e3 * (Number(a.split(".")[1]) || 0) : 0;
    };
    function Ch(a) {
        const b = Nh(a.split("."));
        return b.length === 0
            ? null
            : { version: b[0], ra: b[2], timestamp: 1e3 * (Number(b[1]) || 0), labels: b.slice(3) };
    }
    function Nh(a) {
        return a.length < 3 || (a[0] !== "GCL" && a[0] !== "1") || !/^\d+$/.test(a[1]) || !wh.test(a[2]) ? [] : a;
    }
    const Oh = function (a, b, c, d, e) {
        if (ua(b) && kg(m)) {
            const f = Fh(e);
            const g = function () {
                for (var k = {}, l = 0; l < a.length; ++l) {
                    const n = Kh(a[l], f);
                    if (n) {
                        const p = ng(n, B.cookie, void 0, "ad_storage");
                        p.length && (k[n] = p.sort()[p.length - 1]);
                    }
                }
                return k;
            };
            zh(function () {
                qh(g, b, c, d);
            });
        }
    };
    var Eh = function (a) {
        return a.filter(function (b) {
            return wh.test(b.ra);
        });
    };
    const Ph = function (a, b) {
        if (kg(m)) {
            for (var c = Fh(b.prefix), d = {}, e = 0; e < a.length; e++) xh[a[e]] && (d[a[e]] = xh[a[e]]);
            zh(function () {
                Da(d, function (f, g) {
                    const k = ng(c + g, B.cookie, void 0, "ad_storage");
                    k.sort(function (u, r) {
                        return Lh(r) - Lh(u);
                    });
                    if (k.length) {
                        const l = k[0];
                        const n = Lh(l);
                        const p = Nh(l.split(".")).length !== 0 ? l.split(".").slice(3) : [];
                        const q = {};
                        let t;
                        t = Nh(l.split(".")).length !== 0 ? l.split(".")[2] : void 0;
                        q[f] = [t];
                        Ih(q, !0, b, n, p);
                    }
                });
            });
        }
    };
    function Qh(a, b) {
        for (let c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
        return !1;
    }
    const Rh = function (a) {
        function b(e, f, g) {
            g && (e[f] = g);
        }
        if (Rd()) {
            const c = Hh();
            if (Qh(c, a)) {
                const d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.gbraid);
                rh(function () {
                    return d;
                }, 3);
                rh(function () {
                    const e = {};
                    return (e._up = "1"), e;
                }, 1);
            }
        }
    };
    function Sh(a, b) {
        const c = Fh(b);
        const d = Kh(a, c);
        if (!d) return 0;
        for (var e = Ah(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f;
    }
    function Th(a) {
        let b = 0;
        let c;
        for (c in a) for (let d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b;
    }
    const Uh = /^\d+\.fls\.doubleclick\.net$/;
    function Vh(a, b) {
        Qd(M.D)
            ? be(M.D)
                ? a()
                : Wd(a, M.D)
            : b
            ? ud(42)
            : fe(
                  function () {
                      Vh(a, !0);
                  },
                  [M.D],
              );
    }
    function Wh(a) {
        const b = De(m.location.href);
        const c = Be(b, "host", !1);
        if (c && c.match(Uh)) {
            const d = Be(b, "path").split(`${a}=`);
            if (d.length > 1) return d[1].split(";")[0].split("?")[0];
        }
    }
    function Xh(a, b, c) {
        if (a === "aw" || a === "dc" || a === "gb") {
            const d = Wh(`gcl${a}`);
            if (d) return d.split(".");
        }
        const e = Fh(b);
        if (e == "_gcl") {
            c = void 0 === c ? !0 : c;
            const f = !be(M.D) && c;
            let g;
            g = Hh()[a] || [];
            if (g.length > 0) return f ? ["0"] : g;
        }
        const k = Kh(a, e);
        return k ? Bh(k) : [];
    }
    const Yh = function (a, b) {
        return Xh("aw", a, b);
    };
    const Zh = function (a, b) {
        return Xh("dc", a, b);
    };
    function $h(a) {
        const b = [];
        Da(a, function (c, d) {
            d = Eh(d);
            for (var e = [], f = 0; f < d.length; f++) e.push(d[f].ra);
            e.length && b.push(`${c}:${e.join(",")}`);
        });
        return b.join(";");
    }
    const ai = function (a) {
        const b = Wh("gac");
        return b ? (!be(M.D) && a ? "0" : decodeURIComponent(b)) : $h(yh() ? Qg() : {});
    };
    const bi = function (a) {
        const b = Wh("gacgb");
        return b ? (!be(M.D) && a ? "0" : decodeURIComponent(b)) : $h(yh() ? Qg("_gac_gb", !0) : {});
    };
    const ci = function (a, b) {
        const c = Hh();
        const d = [];
        const e = c.gclid;
        const f = c.dclid;
        const g = c.gclsrc || "aw";
        !e || (g !== "aw.ds" && g !== "aw" && g !== "ds") || d.push({ ra: e, xe: g });
        f && d.push({ ra: f, xe: "ds" });
        Vh(function () {
            Og(b);
            const k = Kg[Lg(b.prefix)];
            let l = !1;
            if (k && d.length > 0)
                for (let n = (N.joined_auid = N.joined_auid || {}), p = 0; p < d.length; p++) {
                    const q = d[p];
                    const t = q.ra;
                    const u = q.xe;
                    const r = `${b.prefix || "_gcl"}.${u}.${t}`;
                    if (!n[r]) {
                        let v = "https://adservice.google.com/pagead/regclk";
                        v = u === "gb" ? `${v}?gbraid=${t}&auid=${k}` : `${v}?gclid=${t}&auid=${k}&gclsrc=${u}`;
                        Mb(v);
                        l = n[r] = !0;
                    }
                }
            a == null && (a = l);
            let x = !0;
            x = !1;
            if (x && a && k) {
                const z = Lg(b.prefix);
                const w = Kg[z];
                w && Ng(z, w, b);
            }
        });
    };
    const di = function (a) {
        let b;
        if (Wh("gclaw") || Wh("gac") || (Hh().aw || []).length > 0) b = !1;
        else {
            let c;
            if ((Hh().gb || []).length > 0) c = !0;
            else {
                const d = Math.max(Sh("aw", a), Th(yh() ? Qg() : {}));
                c = Math.max(Sh("gb", a), Th(yh() ? Qg("_gac_gb", !0) : {})) > d;
            }
            b = c;
        }
        return b;
    };
    function ei(a) {
        const b = (wb && wb.userAgent) || "";
        if (b.indexOf("Safari") < 0 || /Chrome|Coast|Opera|Edg|Silk|Android/.test(b)) return !1;
        const c = (/Version\/([\d\.]+)/.exec(b) || [])[1] || "";
        if (c === "") return !1;
        for (var d = a.split("."), e = c.split("."), f = 0; f < e.length; f++) {
            if (void 0 === d[f]) return !0;
            if (e[f] != d[f]) return Number(e[f]) > Number(d[f]);
        }
        return e.length >= d.length;
    }
    const fi = /[A-Z]+/;
    const gi = /\s/;
    const hi = function (a) {
        if (h(a) && ((a = Ma(a)), !gi.test(a))) {
            const b = a.indexOf("-");
            if (!(b < 0)) {
                const c = a.substring(0, b);
                if (fi.test(c)) {
                    for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++) if (!d[e]) return;
                    return { id: a, prefix: c, containerId: `${c}-${d[0]}`, N: d };
                }
            }
        }
    };
    const ji = function (a) {
        for (var b = {}, c = 0; c < a.length; ++c) {
            const d = hi(a[c]);
            d && (b[d.id] = d);
        }
        ii(b);
        const e = [];
        Da(b, function (f, g) {
            e.push(g);
        });
        return e;
    };
    function ii(a) {
        const b = [];
        let c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                const d = a[c];
                d.prefix === "AW" && d.N[1] && b.push(d.containerId);
            }
        for (let e = 0; e < b.length; ++e) delete a[b[e]];
    }
    const ki = function () {
        const a = !1;
        return a;
    };
    const mi = function (a, b, c, d) {
        return (li() === 2 || d || m.location.protocol != "http:" ? a : b) + c;
    };
    var li = function () {
        const a = Bb();
        let b;
        if (a === 1)
            a: {
                let c = If;
                c = c.toLowerCase();
                for (
                    var d = `https://${c}`, e = `http://${c}`, f = 1, g = B.getElementsByTagName("script"), k = 0;
                    k < g.length && k < 100;
                    k++
                ) {
                    let l = g[k].src;
                    if (l) {
                        l = l.toLowerCase();
                        if (l.indexOf(e) === 0) {
                            b = 3;
                            break a;
                        }
                        f === 1 && l.indexOf(d) === 0 && (f = 2);
                    }
                }
                b = f;
            }
        else b = a;
        return b;
    };
    const yi = function (a, b) {
        const c = a ? gg(a) : m.enhanced_conversion_data;
        const d = (a || {}).enhanced_conversions_mode;
        if (m.Promise)
            try {
                return c
                    ? pf(c, b).then(function (e) {
                        e.qe = d;
                        return e;
                    })
                    : Promise.resolve({ xc: "", kc: [], qe: d });
            } catch (e) {}
    };
    function zi(a) {
        if (be(M.D)) return a;
        a = a.replace(/&url=([^&#]+)/, function (b, c) {
            const d = Ee(decodeURIComponent(c));
            return `&url=${encodeURIComponent(d)}`;
        });
        a = a.replace(/&ref=([^&#]+)/, function (b, c) {
            const d = Ee(decodeURIComponent(c));
            return `&ref=${encodeURIComponent(d)}`;
        });
        return a;
    }
    function Ai() {
        if (Jf || (!0 !== m._gtmdgs && !ei("11"))) return -1;
        const a = Ga("1");
        return ig(1, 100) < a ? ig(2, 2) : -1;
    }
    function Bi(a) {
        let b;
        if (!a || !a.length) return;
        for (var c = [], d = 0; d < a.length; ++d) {
            const e = a[d];
            e && e.estimated_delivery_date ? c.push(`${e.estimated_delivery_date}`) : c.push("");
        }
        b = c.join(",");
        return b;
    }
    function Ci() {
        const a = !1;
        return a;
    }
    const Di = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/);
    const Ei = {
        cl: ["ecl"],
        customPixels: ["nonGooglePixels"],
        ecl: ["cl"],
        ehl: ["hl"],
        hl: ["ehl"],
        html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
        nonGooglePixels: [],
        nonGoogleScripts: ["nonGooglePixels"],
        nonGoogleIframes: ["nonGooglePixels"],
    };
    const Fi = {
        cl: ["ecl"],
        customPixels: ["customScripts", "html"],
        ecl: ["cl"],
        ehl: ["hl"],
        hl: ["ehl"],
        html: ["customScripts"],
        customScripts: ["html"],
        nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
        nonGoogleScripts: ["customScripts", "html"],
        nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"],
    };
    const Gi = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    const Hi = function () {
        let a = !1;
        a = !0;
        return a;
    };
    const Ji = function (a) {
        let b = Wf("gtm.allowlist") || Wf("gtm.whitelist");
        b && ud(9);
        Hi() && (b = "google gtagfl lcl zone oid op".split(" "));
        const c = b && Va(La(b), Ei);
        let d = Wf("gtm.blocklist") || Wf("gtm.blacklist");
        d || ((d = Wf("tagTypeBlacklist")) && ud(3));
        d ? ud(8) : (d = []);
        Ii() && ((d = La(d)), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
        wa(La(d), "google") >= 0 && ud(2);
        const e = d && Va(La(d), Fi);
        const f = {};
        return function (g) {
            let k = g && g[Wb.lb];
            if (!k || typeof k !== "string") return !0;
            k = k.replace(/^_*/, "");
            if (void 0 !== f[k]) return f[k];
            const l = Of[k] || [];
            let n = a(k, l);
            if (b) {
                let p;
                if ((p = n))
                    a: {
                        if (wa(c, k) < 0)
                            if (l && l.length > 0)
                                for (let q = 0; q < l.length; q++) {
                                    if (wa(c, l[q]) < 0) {
                                        ud(11);
                                        p = !1;
                                        break a;
                                    }
                                }
                            else {
                                p = !1;
                                break a;
                            }
                        p = !0;
                    }
                n = p;
            }
            let t = !1;
            if (d) {
                const u = wa(e, k) >= 0;
                if (u) t = u;
                else {
                    const r = Ba(e, l || []);
                    r && ud(10);
                    t = r;
                }
            }
            let v = !n || t;
            v || !(wa(l, "sandboxedScripts") >= 0) || (c && wa(c, "sandboxedScripts") !== -1) || (v = Ba(e, Gi));
            return (f[k] = v);
        };
    };
    var Ii = function () {
        return Di.test(m.location && m.location.hostname);
    };
    let Ki = !1;
    let Li = 0;
    const Mi = [];
    function Ni(a) {
        if (!Ki) {
            const b = B.createEventObject;
            const c = B.readyState == "complete";
            const d = B.readyState == "interactive";
            if (!a || a.type != "readystatechange" || c || (!b && d)) {
                Ki = !0;
                for (let e = 0; e < Mi.length; e++) G(Mi[e]);
            }
            Mi.push = function () {
                for (let f = 0; f < arguments.length; f++) G(arguments[f]);
                return 0;
            };
        }
    }
    function Oi() {
        if (!Ki && Li < 140) {
            Li++;
            try {
                B.documentElement.doScroll("left"), Ni();
            } catch (a) {
                m.setTimeout(Oi, 50);
            }
        }
    }
    const Pi = function (a) {
        Ki ? a() : Mi.push(a);
    };
    const Ri = function (a, b) {
        this.o = !1;
        this.F = [];
        this.P = { tags: [] };
        this.ba = !1;
        this.s = this.C = 0;
        Qi(this, a, b);
    };
    const Si = function (a, b, c, d) {
        if (Ff.hasOwnProperty(b) || b === "__zone") return -1;
        let e = {};
        Sb(d) && (e = H(d, e));
        e.id = c;
        e.status = "timeout";
        return a.P.tags.push(e) - 1;
    };
    const Ti = function (a, b, c, d) {
        const e = a.P.tags[b];
        e && ((e.status = c), (e.executionTime = d));
    };
    const Ui = function (a) {
        if (!a.o) {
            for (let b = a.F, c = 0; c < b.length; c++) b[c]();
            a.o = !0;
            a.F.length = 0;
        }
    };
    var Qi = function (a, b, c) {
        sa(b) && Vi(a, b);
        c &&
            m.setTimeout(function () {
                return Ui(a);
            }, Number(c));
    };
    var Vi = function (a, b) {
        const c = Ra(function () {
            return G(function () {
                b(Cf.M, a.P);
            });
        });
        a.o ? c() : a.F.push(c);
    };
    const Wi = function (a) {
        a.C++;
        return Ra(function () {
            a.s++;
            a.ba && a.s >= a.C && Ui(a);
        });
    };
    const Xi = function () {
        function a(d) {
            return !ta(d) || d < 0 ? 0 : d;
        }
        if (!N._li && m.performance && m.performance.timing) {
            const b = m.performance.timing.navigationStart;
            const c = ta(Xf.get("gtm.start")) ? Xf.get("gtm.start") : 0;
            N._li = { cst: a(c - b), cbt: a(Lf - b) };
        }
    };
    const Yi = function (a) {
        m.performance && m.performance.mark(`${Cf.M}_${a}_start`);
    };
    const Zi = function (a) {
        if (m.performance) {
            const b = `${Cf.M}_${a}_start`;
            const c = `${Cf.M}_${a}_duration`;
            m.performance.measure(c, b);
            const d = m.performance.getEntriesByName(c)[0];
            m.performance.clearMarks(b);
            m.performance.clearMeasures(c);
            const e = N._p || {};
            void 0 === e[a] && ((e[a] = d.duration), (N._p = e));
            return d.duration;
        }
    };
    const $i = function () {
        if (m.performance && m.performance.now) {
            const a = N._p || {};
            a.PAGEVIEW = m.performance.now();
            N._p = a;
        }
    };
    const aj = {};
    const ej = function () {
        return m.GoogleAnalyticsObject && m[m.GoogleAnalyticsObject];
    };
    const fj = !1;
    function jj() {
        return m.GoogleAnalyticsObject || "ga";
    }
    const kj = function (a) {};
    const lj = function (a, b) {
        return function () {
            const c = ej();
            const d = c && c.getByName && c.getByName(a);
            if (d) {
                const e = d.get("sendHitTask");
                d.set("sendHitTask", function (f) {
                    const g = f.get("hitPayload");
                    const k = f.get("hitCallback");
                    const l = g.indexOf(`&tid=${b}`) < 0;
                    l &&
                        (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, `&tid=${b}`), !0),
                        f.set("hitCallback", void 0, !0));
                    e(f);
                    l && (f.set("hitPayload", g, !0), f.set("hitCallback", k, !0), f.set("_x_19", void 0, !0), e(f));
                });
            }
        };
    };
    const sj = function (a) {};
    const wj = function (a) {};
    const xj = function () {
        return `&tc=${
            xc.filter(function (a) {
                return a;
            }).length
        }`;
    };
    const Aj = function () {
        yj().length >= 2022 && zj();
    };
    const Bj = function (a) {
        return a.indexOf("gtm.") === 0 ? encodeURIComponent(a) : "*";
    };
    const Dj = function () {
        Cj || (Cj = m.setTimeout(zj, 500));
    };
    var zj = function () {
        Cj && (m.clearTimeout(Cj), (Cj = void 0));
        void 0 === Ej ||
            (Fj[Ej] && !Gj && !Hj) ||
            (Ij[Ej] || Jj.zi() || Kj-- <= 0
                ? (ud(1), (Ij[Ej] = !0))
                : (Jj.Ti(), Db(yj(!0)), (Fj[Ej] = !0), (Lj = Mj = Nj = Hj = Gj = "")));
    };
    var yj = function (a) {
        const b = Ej;
        if (void 0 === b) return "";
        const c = td("GTM");
        const d = td("TAGGING");
        return [
            Oj,
            Fj[b] ? "" : "&es=1",
            Pj[b],
            sj(b),
            c ? `&u=${c}` : "",
            d ? `&ut=${d}` : "",
            xj(),
            Gj,
            Hj,
            Nj,
            Mj,
            wj(a),
            Lj,
            "&z=0",
        ].join("");
    };
    const Rj = function () {
        Oj = Qj();
    };
    var Qj = function () {
        return [Mf, "&v=3&t=t", `&pid=${ya()}`, `&rv=${Cf.bd}`].join("");
    };
    const vj = ["L", "S", "Y"];
    const rj = ["S", "E"];
    const Sj = { sampleRate: "0.005000", Hg: "", Gg: Number("5") };
    const Tj = B.location.search.indexOf("?gtm_latency=") >= 0 || B.location.search.indexOf("&gtm_latency=") >= 0;
    let Uj;
    if (!(Uj = Tj)) {
        const Vj = Math.random();
        const Wj = Sj.sampleRate;
        Uj = Vj < Wj;
    }
    const Xj = Uj;
    const Yj = { label: `${Cf.M} Container`, children: [{ label: "Initialization", children: [] }] };
    var Oj = Qj();
    var Fj = {};
    var Gj = "";
    var Hj = "";
    var Lj = "";
    var Mj = "";
    const uj = {};
    const tj = !1;
    const qj = {};
    const Zj = {};
    var Nj = "";
    var Ej = void 0;
    var Pj = {};
    var Ij = {};
    var Cj = void 0;
    let ak = 5;
    Sj.Gg > 0 && (ak = Sj.Gg);
    var Jj = (function (a, b) {
        for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
        return {
            zi() {
                return c < a ? !1 : Oa() - d[c % a] < b;
            },
            Ti() {
                const f = c++ % a;
                d[f] = Oa();
            },
        };
    })(ak, 1e3);
    var Kj = 1e3;
    const ck = function (a, b) {
        if (Xj && !Ij[a] && Ej !== a) {
            zj();
            Ej = a;
            Lj = Gj = "";
            Pj[a] = `&e=${Bj(b)}&eid=${a}`;
            Dj();
        }
    };
    const dk = function (a, b, c, d) {
        if (Xj && b) {
            let e;
            let f = String(b[Wb.lb] || "").replace(/_/g, "");
            f.indexOf("cvt") === 0 && (f = "cvt");
            e = f;
            const g = c + e;
            if (!Ij[a]) {
                a !== Ej && (zj(), (Ej = a));
                Gj = Gj ? `${Gj}.${g}` : `&tr=${g}`;
                const k = b.function;
                if (!k) throw Error("Error: No function name given for function call.");
                const l = (Ec[k] ? "1" : "2") + e;
                Lj = Lj ? `${Lj}.${l}` : `&ti=${l}`;
                Dj();
                Aj();
            }
        }
    };
    const kk = function (a, b, c) {
        if (Xj && !Ij[a]) {
            a !== Ej && (zj(), (Ej = a));
            const d = c + b;
            Hj = Hj ? `${Hj}.${d}` : `&epr=${d}`;
            Dj();
            Aj();
        }
    };
    const lk = function (a, b, c) {};
    const mk = {
        active: !0,
        isAllowed() {
            return !0;
        },
    };
    const nk = function (a) {
        const b = N.zones;
        return b ? b.checkState(Cf.M, a) : mk;
    };
    const ok = function (a) {
        let b = N.zones;
        !b && a && (b = N.zones = a());
        return b;
    };
    function pk() {}
    function qk() {}
    function rk(a, b, c, d) {
        const e = xc[a];
        let f = sk(a, b, c, d);
        if (!f) return null;
        const g = Jc(e[Wb.Kf], c, []);
        if (g && g.length) {
            const k = g[0];
            f = rk(k.index, { onSuccess: f, onFailure: k.dg === 1 ? b.terminate : f, terminate: b.terminate }, c, d);
        }
        return f;
    }
    function sk(a, b, c, d) {
        function e() {
            if (f[Wb.Kh]) k();
            else {
                const x = Kc(f, c, []);
                const z = x[Wb.Mg];
                if (z != null)
                    for (let w = 0; w < z.length; w++)
                        if (!be(z[w])) {
                            k();
                            return;
                        }
                const y = Si(c.mb, String(f[Wb.lb]), Number(f[Wb.Mf]), x[Wb.Lh]);
                let A = !1;
                x.vtp_gtmOnSuccess = function () {
                    if (!A) {
                        A = !0;
                        const F = Oa() - D;
                        dk(c.id, xc[a], "5", F);
                        Ti(c.mb, y, "success", F);
                        g();
                    }
                };
                x.vtp_gtmOnFailure = function () {
                    if (!A) {
                        A = !0;
                        const F = Oa() - D;
                        dk(c.id, xc[a], "6", F);
                        Ti(c.mb, y, "failure", F);
                        k();
                    }
                };
                x.vtp_gtmTagId = f.tag_id;
                x.vtp_gtmEventId = c.id;
                dk(c.id, f, "1");
                const C = function () {
                    const F = Oa() - D;
                    dk(c.id, f, "7", F);
                    Ti(c.mb, y, "exception", F);
                    A || ((A = !0), k());
                };
                var D = Oa();
                try {
                    Ic(x, c);
                } catch (F) {
                    C(F);
                }
            }
        }
        var f = xc[a];
        var g = b.onSuccess;
        var k = b.onFailure;
        const l = b.terminate;
        if (c.Ge(f)) return null;
        const n = Jc(f[Wb.Nf], c, []);
        if (n && n.length) {
            const p = n[0];
            const q = rk(p.index, { onSuccess: g, onFailure: k, terminate: l }, c, d);
            if (!q) return null;
            g = q;
            k = p.dg === 2 ? l : q;
        }
        if (f[Wb.Gf] || f[Wb.Nh]) {
            const t = f[Wb.Gf] ? yc : c.$i;
            const u = g;
            const r = k;
            if (!t[a]) {
                e = Ra(e);
                const v = tk(a, t, e);
                g = v.onSuccess;
                k = v.onFailure;
            }
            return function () {
                t[a](u, r);
            };
        }
        return e;
    }
    function tk(a, b, c) {
        const d = [];
        const e = [];
        b[a] = uk(d, e, c);
        return {
            onSuccess() {
                b[a] = vk;
                for (let f = 0; f < d.length; f++) d[f]();
            },
            onFailure() {
                b[a] = wk;
                for (let f = 0; f < e.length; f++) e[f]();
            },
        };
    }
    function uk(a, b, c) {
        return function (d, e) {
            a.push(d);
            b.push(e);
            c();
        };
    }
    function vk(a) {
        a();
    }
    function wk(a, b) {
        b();
    }
    const zk = function (a, b) {
        for (var c = [], d = 0; d < xc.length; d++)
            if (a[d]) {
                const e = xc[d];
                const f = Wi(b.mb);
                try {
                    const g = rk(d, { onSuccess: f, onFailure: f, terminate: f }, b, d);
                    if (g) {
                        const k = c;
                        const l = k.push;
                        const n = d;
                        const p = e.function;
                        if (!p) throw "Error: No function name given for function call.";
                        const q = Ec[p];
                        l.call(k, { Bg: n, rg: q ? q.priorityOverride || 0 : 0, li: g });
                    } else xk(d, b), f();
                } catch (r) {
                    f();
                }
            }
        const t = b.mb;
        t.ba = !0;
        t.s >= t.C && Ui(t);
        c.sort(yk);
        for (let u = 0; u < c.length; u++) c[u].li();
        return c.length > 0;
    };
    function yk(a, b) {
        let c;
        const d = b.rg;
        const e = a.rg;
        c = d > e ? 1 : d < e ? -1 : 0;
        let f;
        if (c !== 0) f = c;
        else {
            const g = a.Bg;
            const k = b.Bg;
            f = g > k ? 1 : g < k ? -1 : 0;
        }
        return f;
    }
    function xk(a, b) {
        if (!Xj) return;
        const c = function (d) {
            const e = b.Ge(xc[d]) ? "3" : "4";
            const f = Jc(xc[d][Wb.Kf], b, []);
            f && f.length && c(f[0].index);
            dk(b.id, xc[d], e);
            const g = Jc(xc[d][Wb.Nf], b, []);
            g && g.length && c(g[0].index);
        };
        c(a);
    }
    let Ak = !1;
    const Gk = function (a) {
        const b = Oa();
        const c = a["gtm.uniqueEventId"];
        const d = a.event;
        if (d === "gtm.js") {
            if (Ak) return !1;
            Ak = !0;
        }
        let g = nk(c);
        let k = !1;
        if (!g.active) {
            if (d !== "gtm.js") return !1;
            k = !0;
            g = nk(Number.MAX_SAFE_INTEGER);
        }
        ck(c, d);
        const l = a.eventCallback;
        const n = a.eventTimeout;
        const p = l;
        const q = {
            id: c,
            name: d,
            Ge: Ji(g.isAllowed),
            $i: [],
            mg() {
                ud(6);
            },
            Yf: Bk(c),
            mb: new Ri(p, n),
        };
        q.Xf = Ck();
        Dk(c, q.mb);
        let t = Oc(q);
        k && (t = Ek(t));
        const u = zk(t, q);
        (d !== "gtm.js" && d !== "gtm.sync") || kj(Cf.M);
        switch (d) {
            case "gtm.init":
                u && ud(20);
        }
        return Fk(t, u);
    };
    function Bk(a) {
        return function (b) {
            Xj && (Vb(b) || lk(a, "input", b));
        };
    }
    function Dk(a, b) {
        ag(a, "event", 1);
        ag(a, "ecommerce", 1);
        ag(a, "gtm");
        ag(a, "eventModel");
    }
    function Ck() {
        const a = {};
        a.event = $f("event", 1);
        a.ecommerce = $f("ecommerce", 1);
        a.gtm = $f("gtm");
        a.eventModel = $f("eventModel");
        return a;
    }
    function Ek(a) {
        for (var b = [], c = 0; c < a.length; c++) a[c] && Ef[String(xc[c][Wb.lb])] && (b[c] = !0);
        return b;
    }
    function Fk(a, b) {
        if (!b) return b;
        for (let c = 0; c < a.length; c++) if (a[c] && xc[c] && !Ff[String(xc[c][Wb.lb])]) return !0;
        return !1;
    }
    function Hk(a, b) {
        if (a) {
            let c = `${a}`;
            c.indexOf("http://") !== 0 && c.indexOf("https://") !== 0 && (c = `https://${c}`);
            c[c.length - 1] === "/" && (c = c.substring(0, c.length - 1));
            return De(`${c}${b}`).href;
        }
    }
    function Ik(a, b) {
        return Jk() ? Hk(a, b) : void 0;
    }
    function Jk() {
        const a = !1;
        return a;
    }
    let Kk;
    if (Cf.bd.length === 3) Kk = "g";
    else {
        let Lk = "G";
        Lk = "g";
        Kk = Lk;
    }
    const Mk = { "": "n", UA: "u", AW: "a", DC: "d", G: "e", GF: "f", HA: "h", GTM: Kk, OPT: "o" };
    const Nk = function (a) {
        const b = Cf.M.split("-");
        const c = b[0].toUpperCase();
        const d = Mk[c] || "i";
        const e = a && c === "GTM" ? b[1] : c === "OPT" ? b[1] : "";
        let f;
        if (Cf.bd.length === 3) {
            let g = "w";
            g = ki() ? "s" : "o";
            f = `2${g}`;
        } else f = "";
        return f + d + Cf.bd + e;
    };
    function Ok(a, b) {
        if (a === "") return b;
        const c = Number(a);
        return isNaN(c) ? b : c;
    }
    const Pk = function (a, b) {
        a.addEventListener && a.addEventListener.call(a, "message", b, !1);
    };
    const Qk = function () {
        return hb("iPhone") && !hb("iPod") && !hb("iPad");
    };
    hb("Opera");
    hb("Trident") || hb("MSIE");
    hb("Edge");
    !hb("Gecko") ||
        (eb.toLowerCase().indexOf("webkit") != -1 && !hb("Edge")) ||
        hb("Trident") ||
        hb("MSIE") ||
        hb("Edge");
    eb.toLowerCase().indexOf("webkit") != -1 && !hb("Edge") && hb("Mobile");
    hb("Macintosh");
    hb("Windows");
    hb("Linux") || hb("CrOS");
    const Rk = pa.navigator || null;
    Rk && (Rk.appVersion || "").indexOf("X11");
    hb("Android");
    Qk();
    hb("iPad");
    hb("iPod");
    Qk() || hb("iPad") || hb("iPod");
    eb.toLowerCase().indexOf("kaios");
    const Sk = function (a, b) {
        for (let c = a, d = 0; d < 50; ++d) {
            var e;
            try {
                e = !(!c.frames || !c.frames[b]);
            } catch (k) {
                e = !1;
            }
            if (e) return c;
            var f;
            a: {
                try {
                    const g = c.parent;
                    if (g && g != c) {
                        f = g;
                        break a;
                    }
                } catch (k) {}
                f = null;
            }
            if (!(c = f)) break;
        }
        return null;
    };
    const Tk = function (a) {
        let b = B;
        b = void 0 === b ? window.document : b;
        if (!a || !b.head) return null;
        const c = document.createElement("meta");
        b.head.appendChild(c);
        c.httpEquiv = "origin-trial";
        c.content = a;
        return c;
    };
    const Uk = function () {};
    const Vk = function (a) {
        void 0 !== a.addtlConsent && typeof a.addtlConsent !== "string" && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && typeof a.gdprApplies !== "boolean" && (a.gdprApplies = void 0);
        return (void 0 !== a.tcString && typeof a.tcString !== "string") ||
            (void 0 !== a.listenerId && typeof a.listenerId !== "number")
            ? 2
            : a.cmpStatus && a.cmpStatus !== "error"
                ? 0
                : 3;
    };
    const Wk = function (a, b) {
        this.s = a;
        this.o = null;
        this.F = {};
        this.ba = 0;
        this.P = void 0 === b ? 500 : b;
        this.C = null;
    };
    na(Wk, Uk);
    const Yk = function (a) {
        return typeof a.s.__tcfapi === "function" || Xk(a) != null;
    };
    Wk.prototype.addEventListener = function (a) {
        let b = {};
        const c = qb(function () {
            return a(b);
        });
        let d = 0;
        this.P !== -1 &&
            (d = setTimeout(function () {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c();
            }, this.P));
        const e = function (f, g) {
            clearTimeout(d);
            f
                ? ((b = f),
                (b.internalErrorState = Vk(b)),
                (g && b.internalErrorState === 0) ||
                      ((b.tcString = "tcunavailable"), g || (b.internalErrorState = 3)))
                : ((b.tcString = "tcunavailable"), (b.internalErrorState = 3));
            a(b);
        };
        try {
            Zk(this, "addEventListener", e);
        } catch (f) {
            (b.tcString = "tcunavailable"), (b.internalErrorState = 3), d && (clearTimeout(d), (d = 0)), c();
        }
    };
    Wk.prototype.removeEventListener = function (a) {
        a && a.listenerId && Zk(this, "removeEventListener", null, a.listenerId);
    };
    const al = function (a, b, c) {
        let d;
        d = void 0 === d ? "755" : d;
        let e;
        a: {
            if (a.publisher && a.publisher.restrictions) {
                const f = a.publisher.restrictions[b];
                if (void 0 !== f) {
                    e = f[void 0 === d ? "755" : d];
                    break a;
                }
            }
            e = void 0;
        }
        const g = e;
        if (g === 0) return !1;
        let k = c;
        c === 2 ? ((k = 0), g === 2 && (k = 1)) : c === 3 && ((k = 1), g === 1 && (k = 0));
        let l;
        if (k === 0)
            if (a.purpose && a.vendor) {
                const n = $k(a.vendor.consents, void 0 === d ? "755" : d);
                l =
                    n && b === "1" && a.purposeOneTreatment && (a.publisherCC === "DE" || a.publisherCC === "CH")
                        ? !0
                        : n && $k(a.purpose.consents, b);
            } else l = !0;
        else
            l =
                k === 1
                    ? a.purpose && a.vendor
                        ? $k(a.purpose.legitimateInterests, b) &&
                          $k(a.vendor.legitimateInterests, void 0 === d ? "755" : d)
                        : !0
                    : !0;
        return l;
    };
    var $k = function (a, b) {
        return !(!a || !a[b]);
    };
    var Zk = function (a, b, c, d) {
        c || (c = function () {});
        if (typeof a.s.__tcfapi === "function") {
            const e = a.s.__tcfapi;
            e(b, 2, c, d);
        } else if (Xk(a)) {
            bl(a);
            const f = ++a.ba;
            a.F[f] = c;
            if (a.o) {
                const g = {};
                a.o.postMessage(((g.__tcfapiCall = { command: b, version: 2, callId: f, parameter: d }), g), "*");
            }
        } else c({}, !1);
    };
    var Xk = function (a) {
        if (a.o) return a.o;
        a.o = Sk(a.s, "__tcfapiLocator");
        return a.o;
    };
    var bl = function (a) {
        a.C ||
            ((a.C = function (b) {
                try {
                    let c;
                    c = (typeof b.data === "string" ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.F[c.callId](c.returnValue, c.success);
                } catch (d) {}
            }),
            Pk(a.s, a.C));
    };
    let cl = !0;
    cl = !1;
    const dl = { 1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3 };
    const el = Ok("", 550);
    const fl = Ok("", 500);
    function gl() {
        const a = N.tcf || {};
        return (N.tcf = a);
    }
    const hl = function (a, b) {
        this.C = a;
        this.o = b;
        this.s = Oa();
    };
    const il = function (a) {};
    const jl = function (a) {};
    const pl = function () {
        const a = gl();
        const b = new Wk(m, cl ? 3e3 : -1);
        const c = new hl(b, a);
        if (
            (kl() ? !0 === m.gtag_enable_tcf_support : !1 !== m.gtag_enable_tcf_support) &&
            !a.active &&
            (typeof m.__tcfapi === "function" || Yk(b))
        ) {
            a.active = !0;
            a.Ac = {};
            ll();
            let d = null;
            cl
                ? (d = m.setTimeout(function () {
                      ml(a);
                    nl(a);
                      d = null;
                  }, fl))
                : (a.tcString = "tcunavailable");
            try {
                b.addEventListener(function (e) {
                    d && (clearTimeout(d), (d = null));
                    if (e.internalErrorState !== 0) ml(a), nl(a), il(c);
                    else {
                        let f;
                        a.gdprApplies = e.gdprApplies;
                        if (!1 === e.gdprApplies) (f = ol()), b.removeEventListener(e);
                        else if (
                            e.eventStatus === "tcloaded" ||
                            e.eventStatus === "useractioncomplete" ||
                            e.eventStatus === "cmpuishown"
                        ) {
                            const g = {};
                            let k;
                            for (k in dl)
                                if (dl.hasOwnProperty(k))
                                    if (k === "1") {
                                        const l = e;
                                        let n = !0;
                                        n = void 0 === n ? !1 : n;
                                        var p;
                                        const q = l;
                                        !1 === q.gdprApplies
                                            ? (p = !0)
                                            : (void 0 === q.internalErrorState && (q.internalErrorState = Vk(q)),
                                              (p =
                                                  q.cmpStatus === "error" ||
                                                  q.internalErrorState !== 0 ||
                                                  (q.cmpStatus === "loaded" &&
                                                      (q.eventStatus === "tcloaded" ||
                                                          q.eventStatus === "useractioncomplete"))
                                                      ? !0
                                                      : !1));
                                        g["1"] = p
                                            ? !1 === l.gdprApplies ||
                                              l.tcString === "tcunavailable" ||
                                              (void 0 === l.gdprApplies && !n) ||
                                              typeof l.tcString !== "string" ||
                                              !l.tcString.length
                                                ? !0
                                                : al(l, "1", 0)
                                            : !1;
                                    } else g[k] = al(e, k, dl[k]);
                            f = g;
                        }
                        f && ((a.tcString = e.tcString || "tcempty"), (a.Ac = f), nl(a), il(c));
                    }
                }),
                    jl(c);
            } catch (e) {
                d && (clearTimeout(d), (d = null)), ml(a), nl(a);
            }
        }
    };
    function ml(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        cl && (a.Ac = ol());
    }
    function ll() {
        const a = {};
        const b = ((a.ad_storage = "denied"), (a.wait_for_update = el), a);
        Zd(b);
    }
    var kl = function () {
        let a = !1;
        a = !0;
        return a;
    };
    function ol() {
        const a = {};
        let b;
        for (b in dl) dl.hasOwnProperty(b) && (a[b] = !0);
        return a;
    }
    function nl(a) {
        const b = {};
        const c = ((b.ad_storage = a.Ac["1"] ? "granted" : "denied"), b);
        ql();
        ae(c, 0);
    }
    const rl = function () {
        const a = gl();
        if (a.active && void 0 !== a.loadTime) return Number(a.loadTime);
    };
    var ql = function () {
        const a = gl();
        return a.active ? a.tcString || "" : "";
    };
    const sl = function () {
        const a = gl();
        return a.active && void 0 !== a.gdprApplies ? (a.gdprApplies ? "1" : "0") : "";
    };
    const tl = function (a) {
        if (!dl.hasOwnProperty(String(a))) return !0;
        const b = gl();
        return b.active && b.Ac ? !!b.Ac[String(a)] : !0;
    };
    const ul = !1;
    const vl = !1;
    function wl(a) {
        const b = String(m.location).split(/[?#]/)[0];
        const c = Cf.Pg || m._CONSENT_MODE_SALT;
        let d;
        if (a) {
            let e;
            if (c) {
                const f = b + a + c;
                let g = 1;
                let k;
                let l;
                let n;
                if (f)
                    for (g = 0, l = f.length - 1; l >= 0; l--)
                        (n = f.charCodeAt(l)),
                            (g = ((g << 6) & 268435455) + n + (n << 14)),
                            (k = g & 266338304),
                            (g = k != 0 ? g ^ (k >> 21) : g);
                e = String(g);
            } else e = "0";
            d = e;
        } else d = "";
        return d;
    }
    function xl(a) {
        function b(r) {
            let v;
            N.reported_gclid || (N.reported_gclid = {});
            v = N.reported_gclid;
            let x;
            x = !g || (Rd() && !be(M.D)) ? l + (r ? "gcu" : "gcs") : `${l}.${f.prefix || "_gcl"}${r ? "gcu" : "gcs"}`;
            if (!v[x]) {
                v[x] = !0;
                const z = [];
                const w = {};
                const y = function (J, K) {
                    K && (z.push(`${J}=${encodeURIComponent(K)}`), (w[J] = !0));
                };
                let A = "https://www.google.com";
                if (Rd()) {
                    const C = be(M.D);
                    y("gcs", ce());
                    r && y("gcu", "1");
                    Sd() && y("gcd", de());
                    N.dedupe_gclid || (N.dedupe_gclid = `${Dg()}`);
                    y("rnd", N.dedupe_gclid);
                    if ((!l || (n && n !== "aw.ds")) && be(M.D)) {
                        const D = Bh("_gcl_aw");
                        y("gclaw", D.join("."));
                    }
                    y("url", String(m.location).split(/[?#]/)[0]);
                    y("dclid", yl(d, p));
                    let F = !1;
                    F = !0;
                    C || (!d && !F) || (A = "https://pagead2.googlesyndication.com");
                }
                y("gdpr_consent", ql()), y("gdpr", sl());
                lh(!1)._up === "1" && y("gtm_up", "1");
                y("gclid", yl(d, l));
                y("gclsrc", n);
                if (!(w.gclid || w.dclid || w.gclaw) && (y("gbraid", yl(d, q)), !w.gbraid && Rd() && be(M.D))) {
                    const E = Bh("_gcl_gb");
                    y("gclgb", E.join("."));
                }
                y("gtm", Nk(!e));
                g && be(M.D) && (Og(f || {}), y("auid", Kg[Lg(f.prefix)] || ""));
                ul || (a.jd && y("did", a.jd)), vl && (a.Lb && y("gdid", a.Lb), a.Kb && y("edid", a.Kb));
                const O = `${A}/pagead/landing?${z.join("&")}`;
                Mb(O);
            }
        }
        const c = !!a.se;
        var d = !!a.sa;
        var e = a.U;
        var f = void 0 === a.gd ? {} : a.gd;
        var g = void 0 === a.sd ? !0 : a.sd;
        const k = Hh();
        var l = k.gclid || "";
        var n = k.gclsrc;
        var p = k.dclid || "";
        var q = k.gbraid || "";
        const t = !c && ((!l || (n && n !== "aw.ds") ? !1 : !0) || q);
        const u = Rd();
        if (t || u)
            u
                ? fe(
                      function () {
                          b();
                          be(M.D) ||
                              ee(function (r) {
                                  return b(!0, r.ai);
                              }, M.D);
                      },
                      [M.D],
                  )
                : b();
    }
    function yl(a, b) {
        const c = a && !be(M.D);
        return b && c ? "0" : b;
    }
    const zl = ["aw", "dc", "gb"];
    function Al(a, b, c, d) {
        const e = a.Fg;
        const f = a.callback;
        const g = a.ng;
        if (typeof f === "function")
            if (e === M.Gd && void 0 === g) {
                const k = d(b.prefix, c);
                k.length === 0 ? f(void 0) : k.length === 1 ? f(k[0]) : f(k);
            } else e === M.eh ? (ud(65), Og(b, !1), f(Kg[Lg(b.prefix)])) : f(g);
    }
    function Bl(a, b) {
        const c = a.Zf;
        const d = a.lg;
        const e = a.Dg;
        if (a.Jb) {
            const f = void 0 === c ? !0 : !!c;
            th(d[M.Eb], !!d[M.O]) && Mh(zl, b);
            Jh(b);
            Ph(zl, b);
            ci(f, b);
        }
        d[M.O] && Oh(zl, d[M.O], d[M.Xb], !!d[M.Fb], b.prefix);
        e && Rh(["aw", "dc", "gb"]);
    }
    const Cl = !1;
    const Dl = function () {
        this.o = {};
    };
    const El = function (a, b, c) {
        c != null && (a.o[b] = c);
    };
    const Fl = function (a) {
        return Object.keys(a.o)
            .map(function (b) {
                return `${encodeURIComponent(b)}=${encodeURIComponent(a.o[b])}`;
            })
            .join("&");
    };
    const Hl = function (a, b, c, d, e) {};
    let Jl = !1;
    const Kl = Number("200");
    function Ll() {
        if (!m.Promise) return !1;
        sa(B.interestCohort) ||
            Jl ||
            ((Jl = !0),
            Tk(
                "A489+ZNTpP/HCOD+k3I13nobRVH7eyh5fz5LGhYvQlNf9WauHk/0awCtXOEoWTIK9JN8bgzgn2SfPdaFXe5O9QkAAACKeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
            ));
        return sa(B.interestCohort);
    }
    function Ml() {
        const a = N.floc;
        if (a) {
            const b = a.ts;
            const c = a.floc;
            if (b && c && Oa() - b < 1e3) return Promise.resolve(c);
        }
        let d = void 0;
        try {
            d = Promise.race([
                B.interestCohort().then(function (e) {
                    N.floc = { ts: Oa(), floc: e };
                    return e;
                }),
                new Promise(function (e) {
                    m.setTimeout(function () {
                        return e();
                    }, Kl);
                }),
            ]).catch(function () {});
        } catch (e) {
            return;
        }
        return d;
    }
    const Km = function () {
        let a = !0;
        (tl(7) && tl(9) && tl(10)) || (a = !1);
        let b = !0;
        b = !1;
        b && !Jm() && (a = !1);
        return a;
    };
    var Jm = function () {
        let a = !0;
        (tl(3) && tl(4)) || (a = !1);
        return a;
    };
    const qn = !1;
    let rn = !1;
    rn = !0;
    function sn() {
        const a = N;
        return (a.gcq = a.gcq || new tn());
    }
    const un = function (a, b, c) {
        sn().register(a, b, c);
    };
    const vn = function (a, b, c, d) {
        sn().push("event", [b, a], c, d);
    };
    const wn = function (a, b) {
        sn().push("config", [a], b);
    };
    const xn = function (a, b, c, d) {
        sn().push("get", [a, b], c, d);
    };
    const yn = {};
    const zn = function () {
        this.status = 1;
        this.containerConfig = {};
        this.targetConfig = {};
        this.remoteConfig = {};
        this.s = {};
        this.C = null;
        this.o = !1;
    };
    const An = function (a, b, c, d, e) {
        this.type = a;
        this.C = b;
        this.U = c || "";
        this.o = d;
        this.s = e;
    };
    var tn = function () {
        this.s = {};
        this.C = {};
        this.o = [];
        this.F = { AW: !1, UA: !1 };
        this.enableDeferrableCommandAfterConfig = qn;
    };
    const Bn = function (a, b) {
        const c = hi(b);
        return (a.s[c.containerId] = a.s[c.containerId] || new zn());
    };
    const Cn = function (a, b, c) {
        if (b) {
            const d = hi(b);
            if (d && Bn(a, b).status === 1) {
                Bn(a, b).status = 2;
                const e = {};
                Xj &&
                    (e.timeoutId = m.setTimeout(function () {
                        ud(38);
                        Dj();
                    }, 3e3));
                a.push("require", [e], d.containerId);
                yn[d.containerId] = Oa();
                if (ki()) {
                } else {
                    const g = `/gtag/js?id=${encodeURIComponent(d.containerId)}&l=dataLayer&cx=c`;
                    const k = `${m.location.protocol != "http:" ? "https:" : "http:"}//www.googletagmanager.com${g}`;
                    const l = Ik(c, g) || k;
                    Ab(l);
                }
            }
        }
    };
    const Dn = function (a, b, c, d) {
        if (d.U) {
            const e = Bn(a, d.U);
            const f = e.C;
            if (f) {
                const g = H(c);
                const k = H(e.targetConfig[d.U]);
                const l = H(e.containerConfig);
                const n = H(e.remoteConfig);
                const p = H(a.C);
                const q = Wf("gtm.uniqueEventId");
                const t = hi(d.U).prefix;
                const u = Ra(function () {
                    const v = g[M.Cb];
                    v && G(v);
                });
                const r = yf(
                    xf(
                        zf(
                            wf(vf(uf(tf(sf(rf(g), k), l), n), p), function () {
                                kk(q, t, "2");
                                rn && u();
                            }),
                            function () {
                                kk(q, t, "3");
                                rn && u();
                            },
                        ),
                        function (v, x) {
                            a.F[v] = x;
                        },
                    ),
                    function (v) {
                        return a.F[v];
                    },
                );
                try {
                    kk(q, t, "1");
                    f(d.U, b, d.C, r);
                } catch (v) {
                    kk(q, t, "4");
                }
            }
        }
    };
    tn.prototype.register = function (a, b, c) {
        const d = Bn(this, a);
        if (d.status !== 3) {
            d.C = b;
            d.status = 3;
            c && (H(d.remoteConfig, c), (d.remoteConfig = c));
            const e = hi(a);
            const f = yn[e.containerId];
            if (void 0 !== f) {
                const g = N[e.containerId].bootstrap;
                let k = e.prefix.toUpperCase();
                N[e.containerId]._spx && (k = k.toLowerCase());
                const l = Wf("gtm.uniqueEventId");
                const n = k;
                const p = Oa() - g;
                if (Xj && !Ij[l]) {
                    l !== Ej && (zj(), (Ej = l));
                    const q = `${n}.${Math.floor(g - f)}.${Math.floor(p)}`;
                    Mj = Mj ? `${Mj},${q}` : `&cl=${q}`;
                }
                delete yn[e.containerId];
            }
            this.flush();
        }
    };
    tn.prototype.push = function (a, b, c, d) {
        const e = Math.floor(Oa() / 1e3);
        Cn(this, c, b[0][M.oa] || this.C[M.oa]);
        qn && c && Bn(this, c).o && (d = !1);
        this.o.push(new An(a, e, c, b, d));
        d || this.flush();
    };
    tn.prototype.insert = function (a, b, c) {
        const d = Math.floor(Oa() / 1e3);
        this.o.length > 0 ? this.o.splice(1, 0, new An(a, d, c, b, !1)) : this.o.push(new An(a, d, c, b, !1));
    };
    tn.prototype.flush = function (a) {
        for (var b = this, c = [], d = !1, e = {}; this.o.length; ) {
            const f = this.o[0];
            if (f.s)
                qn
                    ? !f.U || Bn(this, f.U).o
                        ? ((f.s = !1), this.o.push(f))
                        : c.push(f)
                    : ((f.s = !1), this.o.push(f)),
                    this.o.shift();
            else {
                switch (f.type) {
                    case "require":
                        if (Bn(this, f.U).status !== 3 && !a) {
                            qn && this.o.push.apply(this.o, c);
                            return;
                        }
                        Xj && m.clearTimeout(f.o[0].timeoutId);
                        break;
                    case "set":
                        Da(f.o[0], function (t, u) {
                            H(Wa(t, u), b.C);
                        });
                        break;
                    case "config":
                        e.Ja = {};
                        Da(
                            f.o[0],
                            (function (t) {
                                return function (u, r) {
                                    H(Wa(u, r), t.Ja);
                                };
                            })(e),
                        );
                        var g = !!e.Ja[M.Uc];
                        delete e.Ja[M.Uc];
                        var k = Bn(this, f.U);
                        var l = hi(f.U);
                        var n = l.containerId === l.id;
                        g || (n ? (k.containerConfig = {}) : (k.targetConfig[f.U] = {}));
                        (k.o && g) || Dn(this, M.Da, e.Ja, f);
                        k.o = !0;
                        delete e.Ja[M.cc];
                        n ? H(e.Ja, k.containerConfig) : H(e.Ja, k.targetConfig[f.U]);
                        qn && (d = !0);
                        break;
                    case "event":
                        e.Ec = {};
                        Da(
                            f.o[0],
                            (function (t) {
                                return function (u, r) {
                                    H(Wa(u, r), t.Ec);
                                };
                            })(e),
                        );
                        Dn(this, f.o[1], e.Ec, f);
                        break;
                    case "get":
                        var p = {};
                        var q = ((p[M.Oa] = f.o[0]), (p[M.Va] = f.o[1]), p);
                        Dn(this, M.La, q, f);
                }
                this.o.shift();
                En(this, f);
            }
            e = { Ja: e.Ja, Ec: e.Ec };
        }
        qn && (this.o.push.apply(this.o, c), d && this.flush());
    };
    var En = function (a, b) {
        if (b.type !== "require")
            if (b.U) for (let c = a.getCommandListeners(b.U)[b.type] || [], d = 0; d < c.length; d++) c[d]();
            else
                for (const e in a.s)
                    if (a.s.hasOwnProperty(e)) {
                        const f = a.s[e];
                        if (f && f.s) for (let g = f.s[b.type] || [], k = 0; k < g.length; k++) g[k]();
                    }
    };
    tn.prototype.getRemoteConfig = function (a) {
        return Bn(this, a).remoteConfig;
    };
    tn.prototype.getCommandListeners = function (a) {
        return Bn(this, a).s;
    };
    const Fn = function (a, b, c) {
        const d = {
            event: b,
            "gtm.element": a,
            "gtm.elementClasses": Nb(a, "className"),
            "gtm.elementId": a.for || Gb(a, "id") || "",
            "gtm.elementTarget": a.formTarget || Nb(a, "target") || "",
        };
        c && (d["gtm.triggers"] = c.join(","));
        d["gtm.elementUrl"] =
            (a.attributes && a.attributes.formaction ? a.formAction : "") ||
            a.action ||
            Nb(a, "href") ||
            a.src ||
            a.code ||
            a.codebase ||
            "";
        return d;
    };
    const Gn = function (a) {
        N.hasOwnProperty("autoEventsSettings") || (N.autoEventsSettings = {});
        const b = N.autoEventsSettings;
        b.hasOwnProperty(a) || (b[a] = {});
        return b[a];
    };
    const Hn = function (a, b, c) {
        Gn(a)[b] = c;
    };
    const In = function (a, b, c, d) {
        const e = Gn(a);
        const f = Pa(e, b, d);
        e[b] = c(f);
    };
    const Jn = function (a, b, c) {
        const d = Gn(a);
        return Pa(d, b, c);
    };
    const Kn = ["input", "select", "textarea"];
    const Ln = ["button", "hidden", "image", "reset", "submit"];
    const Mn = function (a) {
        const b = a.tagName.toLowerCase();
        return !xa(Kn, function (c) {
            return c === b;
        }) ||
            (b === "input" &&
                xa(Ln, function (c) {
                    return c === a.type.toLowerCase();
                }))
            ? !1
            : !0;
    };
    const Nn = function (a) {
        return a.form ? (a.form.tagName ? a.form : B.getElementById(a.form)) : Lb(a, ["form"], 100);
    };
    const On = function (a, b, c) {
        if (!a.elements) return 0;
        for (let d = b.dataset[c], e = 0, f = 1; e < a.elements.length; e++) {
            const g = a.elements[e];
            if (Mn(g)) {
                if (g.dataset[c] === d) return f;
                f++;
            }
        }
        return 0;
    };
    const Pn = !!m.MutationObserver;
    let Qn = void 0;
    const Rn = function (a) {
        if (!Qn) {
            const b = function () {
                const c = B.body;
                if (c)
                    if (Pn)
                        new MutationObserver(function () {
                            for (let e = 0; e < Qn.length; e++) G(Qn[e]);
                        }).observe(c, { childList: !0, subtree: !0 });
                    else {
                        let d = !1;
                        Eb(c, "DOMNodeInserted", function () {
                            d ||
                                ((d = !0),
                                G(function () {
                                    d = !1;
                                    for (let e = 0; e < Qn.length; e++) G(Qn[e]);
                                }));
                        });
                    }
            };
            Qn = [];
            B.body ? b() : G(b);
        }
        Qn.push(a);
    };
    const Sn = function (a, b, c) {
        function d() {
            const g = a();
            f += e ? ((Oa() - e) * g.playbackRate) / 1e3 : 0;
            e = Oa();
        }
        var e = 0;
        var f = 0;
        return {
            createEvent(g, k, l) {
                const n = a();
                const p = n.bg;
                const q = void 0 !== l ? Math.round(l) : void 0 !== k ? Math.round(n.bg * k) : Math.round(n.fi);
                const t = void 0 !== k ? Math.round(100 * k) : p <= 0 ? 0 : Math.round((q / p) * 100);
                const u = B.hidden ? !1 : qe(c) >= 0.5;
                d();
                let r = void 0;
                void 0 !== b && (r = [b]);
                const v = Fn(c, "gtm.video", r);
                v["gtm.videoProvider"] = "youtube";
                v["gtm.videoStatus"] = g;
                v["gtm.videoUrl"] = n.url;
                v["gtm.videoTitle"] = n.title;
                v["gtm.videoDuration"] = Math.round(p);
                v["gtm.videoCurrentTime"] = Math.round(q);
                v["gtm.videoElapsedTime"] = Math.round(f);
                v["gtm.videoPercent"] = t;
                v["gtm.videoVisible"] = u;
                return v;
            },
            Wi() {
                e = Oa();
            },
            oe() {
                d();
            },
        };
    };
    let Tn = !1;
    const Un = [];
    function Vn() {
        if (!Tn) {
            Tn = !0;
            for (let a = 0; a < Un.length; a++) G(Un[a]);
        }
    }
    const Wn = function (a) {
        Tn ? G(a) : Un.push(a);
    };
    function Xn(a, b) {
        a = String(a);
        b = String(b);
        const c = a.length - b.length;
        return c >= 0 && a.indexOf(b, c) == c;
    }
    const Yn = new za();
    function Zn(a, b, c) {
        const d = c ? "i" : void 0;
        try {
            const e = String(b) + d;
            let f = Yn.get(e);
            f || ((f = new RegExp(b, d)), Yn.set(e, f));
            return f.test(a);
        } catch (g) {
            return !1;
        }
    }
    function $n(a, b) {
        function c(g) {
            const k = De(g);
            let l = Be(k, "protocol");
            const n = Be(k, "host", !0);
            let p = Be(k, "port");
            const q = Be(k, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === l || (l == "http" && p == "80") || (l == "https" && p == "443"))
                (l = "web"), (p = "default");
            return [l, n, p, q];
        }
        for (let d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++) if (d[f] !== e[f]) return !1;
        return !0;
    }
    function ao(a) {
        return bo(a) ? 1 : 0;
    }
    function bo(a) {
        const b = a.arg0;
        const c = a.arg1;
        if (a.any_of && ua(c)) {
            for (let d = 0; d < c.length; d++) {
                const e = H(a, {});
                H({ arg1: c[d], any_of: void 0 }, e);
                if (ao(e)) return !0;
            }
            return !1;
        }
        switch (a.function) {
            case "_cn":
                return String(b).indexOf(String(c)) >= 0;
            case "_css":
                var f;
                a: {
                    if (b) {
                        const g = [
                        "matches",
                        "webkitMatchesSelector",
                        "mozMatchesSelector",
                        "msMatchesSelector",
                        "oMatchesSelector",
                    ];
                        try {
                            for (let k = 0; k < g.length; k++)
                                if (b[g[k]]) {
                                    f = b[g[k]](c);
                                    break a;
                                }
                        } catch (n) {}
                    }
                    f = !1;
                }
                return f;
            case "_ew":
                return Xn(b, c);
            case "_eq":
                return String(b) == String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                var l;
                l = String(b).split(",");
                return wa(l, String(c)) >= 0;
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                return Zn(b, c, a.ignore_case);
            case "_sw":
                return String(b).indexOf(String(c)) == 0;
            case "_um":
                return $n(b, c);
        }
        return !1;
    }
    Object.freeze({ dl: 1, id: 1 });
    const eo = {};
    const fo = function (a, b) {
        b = b.toString().split(",");
        for (let c = 0; c < b.length; c++) {
            const d = eo[b[c]] || [];
            eo[b[c]] = d;
            wa(d, a) < 0 && d.push(a);
        }
    };
    const go = function (a) {
        Da(eo, function (b, c) {
            const d = wa(c, a);
            d >= 0 && c.splice(d, 1);
        });
    };
    const ho = "HA GF G UA AW DC".split(" ");
    let io = !1;
    io = !0;
    let jo = !1;
    let ko = !1;
    function lo(a, b) {
        const c = { event: a };
        b && ((c.eventModel = H(b)), b[M.Cb] && (c.eventCallback = b[M.Cb]), b[M.Oc] && (c.eventTimeout = b[M.Oc]));
        return c;
    }
    function mo(a) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", { value: Pf() });
        return a["gtm.uniqueEventId"];
    }
    function no() {
        if (!jo && !N.gtagRegistered) {
            jo = N.gtagRegistered = !0;
            N.addTargetToGroup = function (c) {
                fo(c, "default");
            };
        }
        return jo;
    }
    const oo = {
        config(a) {
            let b;
            const c = mo(a);
            if (a.length < 2 || !h(a[1])) return;
            let d = {};
            if (a.length > 2) {
                if ((void 0 != a[2] && !Sb(a[2])) || a.length > 3) return;
                d = a[2];
            }
            const e = hi(a[1]);
            if (!e) return;
            go(e.id);
            fo(e.id, d[M.Ud] || "default");
            delete d[M.Ud];
            ko || ud(43);
            if (no() && wa(ho, e.prefix) !== -1) {
                e.prefix === "G" && (d[M.cc] = !0);
                io && delete d[M.Cb];
                wn(d, e.id);
                return;
            }
            Zf(`gtag.targets.${e.id}`, void 0);
            Zf(`gtag.targets.${e.id}`, H(d));
            const f = {};
            f[M.jb] = e.id;
            b = lo(M.Da, f);
            b["gtm.uniqueEventId"] = c;
            return b;
        },
        consent(a) {
            function b() {
                no() && H(a[2], { subcommand: a[1] });
            }
            if (a.length === 3) {
                ud(39);
                const c = Pf();
                const d = a[1];
                d === "default" ? (b(), Zd(a[2])) : d === "update" && (b(), ae(a[2], c));
            }
        },
        event(a) {
            const b = a[1];
            if (!(a.length < 2) && h(b)) {
                let c;
                if (a.length > 2) {
                    if ((!Sb(a[2]) && void 0 != a[2]) || a.length > 3) return;
                    c = a[2];
                }
                const d = lo(b, c);
                const e = mo(a);
                d["gtm.uniqueEventId"] = e;
                let f;
                let g = c && c[M.jb];
                void 0 === g && ((g = Wf(M.jb, 2)), void 0 === g && (g = "default"));
                if (h(g) || ua(g)) {
                    for (var k = g.toString().replace(/\s+/g, "").split(","), l = [], n = 0; n < k.length; n++)
                        if (k[n].indexOf("-") >= 0) l.push(k[n]);
                        else {
                            const p = eo[k[n]];
                            p && p.length && (l = l.concat(p));
                        }
                    f = ji(l);
                } else f = void 0;
                const q = f;
                if (!q) return;
                for (var t = no(), u = [], r = 0; t && r < q.length; r++) {
                    const v = q[r];
                    if (wa(ho, v.prefix) !== -1) {
                        const x = H(c);
                        v.prefix === "G" && (x[M.cc] = !0);
                        io && delete x[M.Cb];
                        vn(b, x, v.id);
                    }
                    u.push(v.id);
                }
                d.eventModel = d.eventModel || {};
                q.length > 0 ? (d.eventModel[M.jb] = u.join()) : delete d.eventModel[M.jb];
                ko || ud(43);
                return d;
            }
        },
        get(a) {
            ud(53);
            if (a.length !== 4 || !h(a[1]) || !h(a[2]) || !sa(a[3])) return;
            const b = hi(a[1]);
            const c = String(a[2]);
            const d = a[3];
            if (!b) return;
            ko || ud(43);
            if (!no() || wa(ho, b.prefix) === -1) return;
            Pf();
            const e = {};
            pk(H(((e[M.Oa] = c), (e[M.Va] = d), e)));
            xn(
                c,
                function (f) {
                    G(function () {
                        return d(f);
                    });
                },
                b.id,
            );
        },
        js(a) {
            if (a.length == 2 && a[1].getTime) {
                ko = !0;
                no();
                const b = {};
                return (b.event = "gtm.js"), (b["gtm.start"] = a[1].getTime()), (b["gtm.uniqueEventId"] = mo(a)), b;
            }
        },
        policy() {},
        set(a) {
            let b;
            a.length == 2 && Sb(a[1])
                ? (b = H(a[1]))
                : a.length == 3 && h(a[1]) && ((b = {}), Sb(a[2]) || ua(a[2]) ? (b[a[1]] = H(a[2])) : (b[a[1]] = a[2]));
            if (b) {
                if ((Pf(), no())) {
                    H(b);
                    const c = H(b);
                    sn().push("set", [c]);
                }
                b._clear = !0;
                return b;
            }
        },
    };
    const po = { policy: !0 };
    const qo = function (a, b) {
        const c = a.hide;
        if (c && void 0 !== c[b] && c.end) {
            c[b] = !1;
            let d = !0;
            let e;
            for (e in c)
                if (c.hasOwnProperty(e) && !0 === c[e]) {
                    d = !1;
                    break;
                }
            d && (c.end(), (c.end = null));
        }
    };
    const so = function (a) {
        const b = ro();
        const c = b && b.hide;
        c && c.end && (c[a] = !0);
    };
    const Jo = function (a) {
        if (Io(a)) return a;
        this.o = a;
    };
    Jo.prototype.ui = function () {
        return this.o;
    };
    var Io = function (a) {
        return !a || Qb(a) !== "object" || Sb(a) ? !1 : "getUntrustedUpdateValue" in a;
    };
    Jo.prototype.getUntrustedUpdateValue = Jo.prototype.ui;
    const Ko = [];
    let Lo = !1;
    let Mo = !1;
    const No = function (a) {
        return m.dataLayer.push(a);
    };
    const Oo = function (a) {
        const b = N.dataLayer;
        const c = b ? b.subscribers : 1;
        let d = 0;
        let e = a;
        return function () {
            ++d === c && (e(), (e = null));
        };
    };
    function Po(a) {
        const b = a._clear;
        Da(a, function (d, e) {
            d !== "_clear" && (b && Zf(d, void 0), Zf(d, e));
        });
        Kf || (Kf = a["gtm.start"]);
        let c = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        c || ((c = Pf()), (a["gtm.uniqueEventId"] = c), Zf("gtm.uniqueEventId", c));
        return Gk(a);
    }
    function Qo() {
        const a = Ko[0];
        if (a == null || typeof a !== "object") return !1;
        if (a.event) return !0;
        if (Fa(a)) {
            const b = a[0];
            if (b === "config" || b === "event" || b === "js") return !0;
        }
        return !1;
    }
    function Ro() {
        for (var a = !1; !Mo && Ko.length > 0; ) {
            if (!Lo && Qo()) {
                const b = {};
                const c = ((b.event = "gtm.init_consent"), b);
                const d = {};
                const e = ((d.event = "gtm.init"), d);
                Ko.unshift(c, e);
                Lo = !0;
            }
            Mo = !0;
            delete Tf.eventModel;
            Vf();
            let g = Ko.shift();
            if (g != null) {
                const k = Io(g);
                if (k) {
                    const l = g;
                    g = Io(l) ? l.getUntrustedUpdateValue() : void 0;
                    for (
                        let n = [
                                "gtm.allowlist",
                                "gtm.blocklist",
                                "gtm.whitelist",
                                "gtm.blacklist",
                                "tagTypeBlacklist",
                            ],
                            p = 0;
                        p < n.length;
                        p++
                    ) {
                        const q = n[p];
                        let t = Wf(q, 1);
                        if (ua(t) || Sb(t)) t = H(t);
                        Uf[q] = t;
                    }
                }
                try {
                    if (sa(g))
                        try {
                            g.call(Xf);
                        } catch (A) {}
                    else if (ua(g)) {
                        const u = g;
                        if (h(u[0])) {
                            const r = u[0].split(".");
                            const v = r.pop();
                            const x = u.slice(1);
                            const z = Wf(r.join("."), 2);
                            if (void 0 !== z && z !== null)
                                try {
                                    z[v].apply(z, x);
                                } catch (A) {}
                        }
                    } else {
                        if (Fa(g)) {
                            a: {
                                const w = g;
                                if (w.length && h(w[0])) {
                                    const y = oo[w[0]];
                                    if (y && (!k || !po[w[0]])) {
                                        g = y(w);
                                        break a;
                                    }
                                }
                                g = void 0;
                            }
                            if (!g) {
                                Mo = !1;
                                continue;
                            }
                        }
                        a = Po(g) || a;
                    }
                } finally {
                    k && Vf(!0);
                }
            }
            Mo = !1;
        }
        return !a;
    }
    function So() {
        const b = Ro();
        try {
            qo(m.dataLayer, Cf.M);
        } catch (c) {}
        return b;
    }
    const Uo = function () {
        const a = yb("dataLayer", []);
        let b = yb("google_tag_manager", {});
        b = b.dataLayer = b.dataLayer || {};
        Pi(function () {
            b.gtmDom || ((b.gtmDom = !0), a.push({ event: "gtm.dom" }));
        });
        Wn(function () {
            b.gtmLoad || ((b.gtmLoad = !0), a.push({ event: "gtm.load" }));
        });
        b.subscribers = (b.subscribers || 0) + 1;
        const c = a.push;
        a.push = function () {
            let e;
            if (N.SANDBOXED_JS_SEMAPHORE > 0) {
                e = [];
                for (let f = 0; f < arguments.length; f++) e[f] = new Jo(arguments[f]);
            } else e = [].slice.call(arguments, 0);
            const g = c.apply(a, e);
            Ko.push.apply(Ko, e);
            if (this.length > 300) for (ud(4); this.length > 300; ) this.shift();
            const k = typeof g !== "boolean" || g;
            return Ro() && k;
        };
        const d = a.slice(0);
        Ko.push.apply(Ko, d);
        if (To()) {
            G(So);
        }
    };
    var To = function () {
        const a = !0;
        return a;
    };
    const Vo = {};
    Vo.Yc = new String("undefined");
    const Wo = function (a) {
        this.o = function (b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === Vo.Yc ? b : a[d]);
            return c.join("");
        };
    };
    Wo.prototype.toString = function () {
        return this.o("undefined");
    };
    Wo.prototype.valueOf = Wo.prototype.toString;
    Vo.Ph = Wo;
    Vo.me = {};
    Vo.ei = function (a) {
        return new Wo(a);
    };
    const Xo = {};
    Vo.Ui = function (a, b) {
        const c = Pf();
        Xo[c] = [a, b];
        return c;
    };
    Vo.$f = function (a) {
        const b = a ? 0 : 1;
        return function (c) {
            const d = Xo[c];
            if (d && typeof d[b] === "function") d[b]();
            Xo[c] = void 0;
        };
    };
    Vo.yi = function (a) {
        for (var b = !1, c = !1, d = 2; d < a.length; d++) (b = b || a[d] === 8), (c = c || a[d] === 16);
        return b && c;
    };
    Vo.Ni = function (a) {
        if (a === Vo.Yc) return a;
        const b = Pf();
        Vo.me[b] = a;
        return `google_tag_manager["${Cf.M}"].macro(${b})`;
    };
    Vo.Ii = function (a, b, c) {
        a instanceof Vo.Ph && ((a = a.o(Vo.Ui(b, c))), (b = ra));
        return { vi: a, onSuccess: b };
    };
    const hp = m.clearTimeout;
    const ip = m.setTimeout;
    const R = function (a, b, c) {
        if (ki()) {
            b && G(b);
        } else return Ab(a, b, c);
    };
    const jp = function () {
        return new Date();
    };
    const kp = function () {
        return m.location.href;
    };
    const lp = function (a) {
        return Be(De(a), "fragment");
    };
    const mp = function (a) {
        return Ce(De(a));
    };
    const np = function (a, b) {
        return Wf(a, b || 2);
    };
    const op = function (a, b, c) {
        let d;
        b ? ((a.eventCallback = b), c && (a.eventTimeout = c), (d = No(a))) : (d = No(a));
        return d;
    };
    const pp = function (a, b) {
        m[a] = b;
    };
    const T = function (a, b, c) {
        b && (void 0 === m[a] || (c && !m[a])) && (m[a] = b);
        return m[a];
    };
    const qp = function (a, b, c) {
        return ng(a, b, void 0 === c ? !0 : !!c);
    };
    const rp = function (a, b, c) {
        return Ag(a, b, c) === 0;
    };
    const sp = function (a, b) {
        if (ki()) {
            b && G(b);
        } else Cb(a, b);
    };
    const tp = function (a) {
        return !!Jn(a, "init", !1);
    };
    const up = function (a) {
        Hn(a, "init", !0);
    };
    const vp = function (a) {
        const b = `${If}?id=${encodeURIComponent(a)}&l=dataLayer`;
        R(mi("https://", "http://", b));
    };
    const wp = function (a, b, c) {
        Xj && (Vb(a) || lk(c, b, a));
    };
    const xp = Vo.Ii;
    const Up = encodeURI;
    const W = encodeURIComponent;
    const Vp = Db;
    const Wp = function (a, b) {
        if (!a) return !1;
        const c = Be(De(a), "host");
        if (!c) return !1;
        for (let d = 0; b && d < b.length; d++) {
            let e = b[d] && b[d].toLowerCase();
            if (e) {
                let f = c.length - e.length;
                f > 0 && e.charAt(0) != "." && (f--, (e = `.${e}`));
                if (f >= 0 && c.indexOf(e, f) == f) return !0;
            }
        }
        return !1;
    };
    const Xp = function (a, b, c) {
        for (var d = {}, e = !1, f = 0; a && f < a.length; f++)
            a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && ((d[a[f][b]] = a[f][c]), (e = !0));
        return e ? d : null;
    };
    const fr = {};
    fr[M.Lc] = "";
    fr[M.ca] = "";
    fr[M.Na] = "";
    fr[M.la] = "auto";
    fr[M.fb] = "/";
    fr[M.Ha] = 63072e3;
    fr[M.$b] = 30;
    fr[M.Sc] = 1e4;
    fr[M.Zb] = !0;
    const gr = function (a, b, c, d, e) {
        this.s = a;
        this.J = b;
        this.F = c;
        this.K = d.eventModel;
        this.Qh = d.containerConfig;
        this.C = d;
        this.cb = d.getWithConfig(M.Bb) ? 1 : 7;
        this.ee = d.getWithConfig(M.hb) ? 1 : 7;
        this.ba = e;
        this.wb = this.de = this.Tf = this.P = this.Pf = this.Rf = this.Xc = !1;
        this.ob = 0;
        this.ie = this.je = this.Wc = !1;
        this.ke = void 0;
        this.Vc = 0;
        this.Lf = this.he = this.Sf = this.o = this.Of = this.fe = void 0;
    };
    aa = gr.prototype;
    aa.Ia = function (a, b) {
        void 0 === this.B(a) && (this.K[a] = b);
    };
    aa.yg = function (a, b) {
        b <= this.cb && ((this.K[M.Bb] = a), (this.cb = b));
    };
    aa.zg = function (a, b) {
        b <= this.ee && ((this.K[M.hb] = a), (this.ee = b));
    };
    aa.B = function (a) {
        return void 0 !== this.K[a]
            ? this.K[a]
            : void 0 !== this.C.getWithConfig(a)
            ? this.C.getWithConfig(a)
            : void 0 !== this.ba[a]
            ? this.ba[a]
            : fr[a];
    };
    aa.getRemoteConfig = function (a) {
        return void 0 !== this.C.remoteConfig[a] ? this.C.remoteConfig[a] : this.ba[a];
    };
    aa.qd = function (a) {
        const b = this.nb(M.Nc, this.ba[M.Nc]);
        if (b && void 0 !== b[a || this.J]) return b[a || this.J];
    };
    aa.nb = function (a, b) {
        return b;
    };
    aa.hg = function () {
        const a = this.B(M.ya);
        if (typeof a === "object") return a;
    };
    aa.ig = function () {
        return !!this.hg();
    };
    aa.abort = function () {
        throw "ABORT";
    };
    aa.Qa = function () {
        return !((!0 !== this.B(M.Wb) && this.B(M.Wb) !== "true") || !this.B(M.oa));
    };
    aa.Ji = function () {
        return this.P || !!this.B(M.rf);
    };
    let hr = !1;
    const ir = function () {
        hr = !0;
        hr = !0;
    };
    const jr = function (a) {
        let b = !1;
        b = a.J === M.Tb && Rd() && a.Qa();
        return !(!wb.sendBeacon || a.Wc || a.je || a.P || a.de || a.wb || b || hr);
    };
    const nr = function () {
        let a = 0;
        let b = 0;
        return {
            start() {
                a = Oa();
            },
            stop() {
                b = this.get();
            },
            get() {
                let c = 0;
                kr && lr && mr && (c = Oa() - a);
                return c + b;
            },
        };
    };
    const rr = function () {
        or += pr();
        qr = nr();
        kr && lr && mr && qr.start();
    };
    var qr = void 0;
    var or = 0;
    var kr = !1;
    var lr = !1;
    var mr = !1;
    let sr = void 0;
    let tr = void 0;
    const ur = function (a) {
        if (!qr) {
            kr = B.hasFocus();
            lr = !B.hidden;
            mr = !0;
            const b = function (c, d, e) {
                Eb(c, d, function (f) {
                    qr.stop();
                    e(f);
                    kr && lr && mr && qr.start();
                });
            };
            b(m, "focus", function () {
                kr = !0;
            });
            b(m, "blur", function () {
                kr = !1;
            });
            b(m, "pageshow", function (c) {
                mr = !0;
                c.persisted && ud(56);
                tr && tr();
            });
            b(m, "pagehide", function () {
                mr = !1;
                sr && sr();
            });
            b(B, "visibilitychange", function () {
                lr = !B.hidden;
            });
            a.Qa() &&
                (wb.userAgent || "").indexOf("Firefox") === -1 &&
                (wb.userAgent || "").indexOf("FxiOS") === -1 &&
                b(m, "beforeunload", function () {
                    ir();
                });
            rr();
            or = 0;
        }
    };
    var pr = function () {
        return (qr && qr.get()) || 0;
    };
    const vr = function (a) {
        sd("GA4_EVENT", a);
    };
    const xr = function (a) {
        return !a || wr.test(a) || wa(M.Gh, a) >= 0;
    };
    const yr = function (a) {
        const b = a[M.sf];
        if (b) return b;
        const c = a[M.Gb];
        if (h(c)) {
            if (typeof URL === "function")
                try {
                    return new URL(c).pathname;
                } catch (e) {
                    return;
                }
            const d = De(c);
            return d.hostname ? Be(d, "path") : void 0;
        }
    };
    const zr = function (a, b, c) {
        if (c)
            switch (c.type) {
            case "event_name":
                return a;
                case "const":
                return c.const_value;
            case "event_param":
                var d = c.event_param.param_name;
                    var e = b[d];
                return e;
            }
    };
    const Ar = function (a, b, c) {
        for (let d = c.event_param_ops || [], e = 0; e < d.length; e++) {
            const f = d[e];
            if (f.edit_param) {
                const g = f.edit_param.param_name;
                const k = zr(a, b, f.edit_param.param_value);
                var l;
                if (k) {
                    const n = Number(k);
                    l = isNaN(n) ? k : n;
                } else l = k;
                b[g] = l;
            } else f.delete_param && delete b[f.delete_param.param_name];
        }
    };
    const Br = function (a, b) {
        const c = b.values || [];
        let d = zr(a.J, a.K, c[0]);
        let e = zr(a.J, a.K, c[1]);
        const f = b.type;
        if (f === "eqi" || f === "swi" || f === "ewi" || f === "cni")
            (d = typeof d === "string" ? d.toLowerCase() : d), (e = typeof e === "string" ? e.toLowerCase() : e);
        let g = !1;
        switch (f) {
        case "eq":
        case "eqi":
            g = String(d) == String(e);
                break;
        case "sw":
        case "swi":
            g = String(d).indexOf(String(e)) == 0;
                break;
        case "ew":
        case "ewi":
            g = Xn(d, e);
                break;
        case "cn":
        case "cni":
            g = String(d).indexOf(String(e)) >= 0;
                break;
        case "lt":
            g = Number(d) < Number(e);
                break;
        case "le":
            g = Number(d) <= Number(e);
            break;
        case "gt":
            g = Number(d) > Number(e);
            break;
        case "ge":
            g = Number(d) >= Number(e);
            break;
        case "re":
        case "rei":
                g = Zn(d, e, f === "rei");
        }
        return !!b.negate !== g;
    };
    const Cr = function (a, b) {
        const c = b.event_name_predicate;
        if (c && !Br(a, c)) return !1;
        const d = b.conditions || [];
        if (d.length === 0) return !0;
        for (let e = 0; e < d.length; e++) {
            for (var f = d[e].predicates || [], g = !0, k = 0; k < f.length; k++)
                if (!Br(a, f[k])) {
                    g = !1;
                    break;
                }
            if (g) return !0;
        }
        return !1;
    };
    var wr = /^(_|ga_|google_|gtag\.|firebase_).*$/;
    let Dr = !1;
    Dr = !0;
    function Er() {
        return (m.gaGlobal = m.gaGlobal || {});
    }
    const Fr = function () {
        const a = Er();
        a.hid = a.hid || ya();
        return a.hid;
    };
    const Gr = function (a, b) {
        const c = Er();
        if (void 0 == c.vid || (b && !c.from_cookie)) (c.vid = a), (c.from_cookie = b);
    };
    const Jr = function (a, b) {
        const c = !0;
        return c;
    };
    const Lr = function (a) {
        let b;
        return b;
    };
    const Hr = function (a, b, c) {
        const d = String(c.B(M.la));
        const e = String(c.B(M.fb));
        const f = Number(c.B(M.Ha));
        const g = c.B(M.Vb);
        const k = {
            Ta: M.I,
            domain: d,
            path: e,
            expires: f ? new Date(Oa() + 1e3 * f) : void 0,
            flags: `${c.B(M.Na)}`,
        };
        if (!1 === g && Mr(c) === b) return !0;
        const l = Hg(b, Nr[0], d, e);
        return Ag(a, l, k) !== 1;
    };
    const Kr = function (a, b) {
        const c = `${b.B(M.la)}`;
        const d = `${b.B(M.fb)}`;
        let e = Gg(a, c, d, Nr, M.I);
        if (!e) {
            const f = String(b.B(M.Lc));
            f && f != a && (e = Gg(f, c, d, Nr, M.I));
        }
        return e;
    };
    const Ir = function (a) {
        return `${a.B(M.ca)}_ga_ecid`;
    };
    const Pr = function (a, b) {
        return Hr(Or(b), a, b);
    };
    var Mr = function (a) {
        return Kr(Or(a), a);
    };
    var Or = function (a) {
        return `${String(a.B(M.ca))}_ga`;
    };
    var Nr = ["GA1"];
    const Sr = function (a, b) {
        const c = Qr(b);
        const d = String(b.B(M.la));
        const e = String(b.B(M.fb));
        const f = Number(b.B(M.Ha));
        const g = Hg(a, Rr[0], d, e);
        const k = {
            Ta: M.I,
            domain: d,
            path: e,
            expires: f ? new Date(Oa() + 1e3 * f) : void 0,
            flags: String(b.B(M.Na)),
        };
        return Ag(c, g, k) !== 1;
    };
    const Tr = function (a) {
        const b = Qr(a);
        const c = String(a.B(M.la));
        const d = String(a.B(M.fb));
        return Gg(b, c, d, Rr, M.I);
    };
    var Rr = ["GS1"];
    var Qr = function (a) {
        return `${String(a.B(M.ca))}_ga_${a.s.substr(2)}`;
    };
    const Ur = function (a) {
        let b;
        const c = a.K[M.ac];
        const d = a.K[M.$d];
        const e = !!a.K[M.Qc];
        if (c && d) {
            const f = [c, d, Ga(a.K[M.Zd]), a.F, a.ob];
            b = f.join(".");
        } else b = void 0;
        return b;
    };
    const Vr = function (a) {
        const b = a.B(M.na);
        const c = a.getRemoteConfig(M.na);
        if (c === b) return c;
        const d = H(b);
        c && c[M.O] && (d[M.O] = (d[M.O] || []).concat(c[M.O]));
        return d;
    };
    const Wr = function (a, b, c, d) {
        const e = lh(!0);
        if (e._up !== "1") return {};
        const f = e[b];
        const g = e[d];
        let k;
        a.o && (k = e[c]);
        return { clientId: f, cg: k, xg: g };
    };
    const Xr = function (a, b, c, d) {
        const e = lh(!0);
        const f = e[b];
        f && (a.yg(f, 2), Pr(f, a));
        const g = e[c];
        a.o && g && (a.zg(g, 2), Jr(g, a));
        const k = e[d];
        k && Sr(k, a);
        return a.o ? !!(f && g && k) : !(!f || !k);
    };
    let Yr = !1;
    const Zr = function (a) {
        const b = Vr(a) || {};
        const c = Or(a);
        const d = Ir(a);
        const e = Qr(a);
        th(b[M.Eb], !!b[M.O]) && Xr(a, c, d, e) && (Yr = !0);
        b[M.O] &&
            qh(
                function () {
                    const f = {};
                    const g = Mr(a);
                    g && (f[c] = g);
                    if (a.o) {
                        const k = Lr(a);
                        k && (f[d] = k);
                    }
                    const l = Tr(a);
                    l && (f[e] = l);
                    const n = ng("FPLC", void 0, void 0, M.I);
                    n.length && (f._fplc = n[0]);
                    return f;
                },
                b[M.O],
                b[M.Xb],
                !!b[M.Fb],
            );
    };
    const as = function (a) {
        if (!a.B(M.Ya)) return {};
        const b = Or(a);
        const c = Ir(a);
        const d = Qr(a);
        rh(function () {
            let e;
            if (be("analytics_storage")) e = {};
            else {
                const f = {};
                const g = ((f._up = "1"), (f[b] = a.K[M.Bb]), (f[d] = Ur(a)), f);
                a.o && (g[c] = a.K[M.hb]);
                e = g;
            }
            return e;
        }, 1);
        if (!be("analytics_storage") && $r()) return Wr(a, b, c, d);
        return {};
    };
    var $r = function () {
        const a = Ae(m.location, "host");
        const b = Ae(De(B.referrer), "host");
        return a && b ? (a === b || a.indexOf(`.${b}`) >= 0 || b.indexOf(`.${a}`) >= 0 ? !0 : !1) : !1;
    };
    const bs = function () {
        let a = Oa();
        let b = a + 864e5;
        let c = 20;
        let d = 5e3;
        return function () {
            const e = Oa();
            e >= b && ((b = e + 864e5), (d = 5e3));
            if (d < 1) return !1;
            c = Math.min(c + ((e - a) / 1e3) * 5, 20);
            a = e;
            if (c < 1) return !1;
            d--;
            c--;
            return !0;
        };
    };
    let cs = !1;
    cs = !0;
    const ds = `${ya()}`;
    let es = !1;
    let fs = void 0;
    const gs = function () {
        if (sa(m.__uspapi)) {
            let a = "";
            try {
                m.__uspapi("getUSPData", 1, function (b, c) {
                    if (c && b) {
                        const d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d);
                    }
                });
            } catch (b) {}
            return a;
        }
    };
    const hs = function (a, b) {
        if (b.Qa()) {
            const c = gs();
            c && (a.us_privacy = c);
            const d = sl();
            d && (a.gdpr = d);
            const e = ql();
            e && (a.gdpr_consent = e);
        }
    };
    const js = function (a, b) {
        if (Rd() && ((a.gcs = ce()), b.he && (a.gcu = "1"), b.Qa())) {
            Sd() && (a.gcd = de());
            const c = b.B(M.R);
            a.adr = void 0 !== c && !1 !== c ? "1" : "0";
            b.he && (a.gcut = is[b.Lf || ""]);
        }
    };
    const ks = function (a, b, c) {
        void 0 === c && (c = {});
        if (typeof b === "object") for (const d in b) ks(`${a}.${d}`, b[d], c);
        else c[a] = b;
        return c;
    };
    const ls = function (a) {
        let b = "https://www.google-analytics.com/g/collect";
        const c = Hk(a.B(M.oa), "/g/collect");
        if (c) return c;
        let d = !0;
        (be(M.D) && be(M.I)) || (d = !1);
        let e = !1 !== a.B(M.Ea);
        e = !0;
        const f = a.nb(M.Wa, a.B(M.Wa));
        const g = a.nb(M.Db, a.B(M.Db));
        f && !g && e && !1 !== a.B(M.Ub) && Km() && d && (b = "https://analytics.google.com/g/collect");
        return b;
    };
    const ms = !1;
    const ns = {};
    var is = ((ns[M.D] = "1"), (ns[M.I] = "2"), ns);
    const os = {};
    os[M.Dh] = "tid";
    os[M.Bb] = "cid";
    os[M.ib] = "ul";
    os[M.Td] = "_fid";
    os[M.zf] = "tt";
    os[M.Vd] = "ir";
    const ps = {};
    ps[M.ac] = "sid";
    ps[M.$d] = "sct";
    ps[M.Zd] = "seg";
    ps[M.Gb] = "dl";
    ps[M.Xa] = "dr";
    ps[M.Yd] = "dt";
    ps[M.da] = "cu";
    ps[M.Hb] = "uid";
    ps[`${M.Ma}.${M.gh}`] = "cc";
    ps[`${M.Ma}.${M.hh}`] = "ci";
    ps[`${M.Ma}.${M.ih}`] = "cm";
    ps[`${M.Ma}.${M.jh}`] = "cn";
    ps[`${M.Ma}.${M.kh}`] = "cs";
    ps[`${M.Ma}.${M.lh}`] = "ck";
    const qs = function (a, b, c) {
        function d(w, y) {
            if (void 0 !== y && M.Eh.indexOf(w) == -1) {
                y === null && (y = "");
                let A;
                if (w.charAt(0) === "_") {
                    e[w] = Qc(y, 300);
                } else if (os[w]) (A = os[w]), (e[A] = Qc(y, 300));
                else if (ps[w]) (A = ps[w]), (g[A] = Qc(y, 300));
                else if (!t(w, y)) {
                    q(w, y);
                }
            }
        }
        var e = {};
        const f = {};
        var g = {};
        e.v = "2";
        e.tid = a.s;
        e.gtm = Nk();
        e._p = Fr();
        a.ke && (e.sr = a.ke);
        a.Of && (e._z = a.Of);
        c && (e.em = c);
        a.wb && (e._gaz = 1);
        js(e, a);
        hs(e, a);
        a.Sf && (e.gtm_up = "1");
        if (ms) {
            const k = Ya(Bf(a.C, M.ma, 1), ".");
            k && (e.gdid = k);
        }
        f.en = Qc(a.J, 40);
        a.Xc && (f._fv = a.Rf ? 2 : 1);
        a.Pf && (f._nsi = 1);
        a.P && (f._ss = a.Tf ? 2 : 1);
        a.Wc && (f._c = 1);
        a.Vc > 0 && (f._et = a.Vc);
        if (a.ie) {
            const l = a.B(M.X);
            if (ua(l)) for (let n = 0; n < l.length && n < 200; n++) f[`pr${n + 1}`] = Vc(l[n]);
        }
        a.fe && (f._eu = a.fe);
        if (ms) {
            const p = Ya(Bf(a.C, M.ma, 2), ".");
            p && (f.edid = p);
        }
        for (
            var q = function (w, y) {
                    w = Qc(w, 40);
                    const A = `ep.${w}`;
                    const C = `epn.${w}`;
                    w = ta(y) ? C : A;
                    const D = ta(y) ? A : C;
                    f.hasOwnProperty(D) && delete f[D];
                    f[w] = Qc(y, 100);
                },
                t = function (w, y) {
                    const A = w.split(".");
                    if (w === M.ya && typeof y !== "object") return q(w, y), !0;
                    if (A[0] === M.ya) {
                        if ((A.length > 1 || typeof y === "object") && a.Qa()) {
                            const C = ks(w, y);
                            Da(C, function (D, F) {
                                return void q(D, F);
                            });
                        }
                        return !0;
                    }
                    return !1;
                },
                u = 0;
            u < M.Bf.length;
            ++u
        ) {
            const r = M.Bf[u];
            d(r, a.B(r));
        }
        a.ie && d(M.da, a.B(M.da));
        Da(a.Qh, d);
        Da(a.K, d);
        const x = a.B(M.Pa) || {};
        (!1 !== a.B(M.Ea) && Jm()) || (x._npa = "1");
        Da(x, function (w, y) {
            if (void 0 !== y && (y === null && (y = ""), b[w] !== y)) {
                if (w !== M.Hb || g.uid) {
                    const A = (ta(y) ? "upn." : "up.") + Qc(w, 24);
                    f[A] = Qc(y, 36);
                } else g.uid = Qc(y, 36);
                b[w] = y;
            }
        });
        const z = !1;
        return Xc.call(this, { Sa: e, sb: g, K: f }, ls(a), a.Qa(), z) || this;
    };
    na(qs, Xc);
    const rs = function (a, b) {
        return a.replace(/\$\{([^\}]+)\}/g, function (c, d) {
            return b[d] || c;
        });
    };
    const ss = function (a) {
        const b = a.search;
        return `${a.protocol}//${a.hostname}${a.pathname}${b ? `${b}&richsstsse` : "?richsstsse"}`;
    };
    const ts = function (a) {
        const b = {};
        let c = "";
        const d = a.pathname.indexOf("/g/collect");
        d >= 0 && (c = a.pathname.substring(0, d));
        b.transport_url = `${a.protocol}//${a.hostname}${c}`;
        return b;
    };
    const us = function (a, b) {
        const c = new m.XMLHttpRequest();
        c.withCredentials = !0;
        const d = b ? "POST" : "GET";
        let e = "";
        let f = 0;
        const g = De(a);
        const k = ts(g);
        const l = ss(g);
        c.onprogress = function (n) {
            if (c.status === 200) {
                e += c.responseText.substring(f);
                f = n.loaded;
                for (var p = rs(e, k), q = p.indexOf("\n\n"); q !== -1; ) {
                    var t;
                    a: {
                        const u = ea(p.substring(0, q).split("\n"));
                        const r = u.next().value;
                        const v = u.next().value;
                        if (r.startsWith("event: message") && v.startsWith("data: "))
                            try {
                                t = JSON.parse(v.substring(v.indexOf(":") + 1));
                                break a;
                            } catch (w) {}
                        t = void 0;
                    }
                    if (t) {
                        const x = t.send_pixel || [];
                        if (Array.isArray(x)) for (let z = 0; z < x.length; z++) Db(x[z]);
                    }
                    p = p.substring(q + 2);
                    q = p.indexOf("\n\n");
                }
                e = p;
            }
        };
        c.open(d, l);
        c.send(b);
    };
    const ys = function (a, b, c, d) {
        const e = `${a}?${b}`;
        vs &&
            (d = !(
                e.indexOf("https://www.google-analytics.com/g/collect") === 0 ||
                e.indexOf("https://analytics.google.com/g/collect") === 0
            ));
        ws && d && !hr ? us(e, c) : xs(a, b, c);
    };
    const zs = function (a) {
        return a && a.indexOf("google.") === 0 && a != "google.com"
            ? "https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&".replace("%", a)
            : void 0;
    };
    var ws = !1;
    ws = !0;
    var vs = !1;
    const As = function () {
        this.F = 1;
        this.P = {};
        this.o = new Yc();
        this.s = -1;
    };
    As.prototype.C = function (a, b) {
        const c = this;
        let d;
        try {
            d = new qs(a, this.P, b);
        } catch (l) {
            a.abort();
        }
        const e = jr(a);
        (e && this.o.F(d)) || this.flush();
        if (e && this.o.add(d)) {
            if (this.s < 0) {
                const f = m.setTimeout;
                let g;
                a.Qa() ? (Bs ? ((Bs = !1), (g = Cs)) : (g = Ds)) : (g = 5e3);
                this.s = f.call(
                    m,
                    function () {
                        return c.flush();
                    },
                    g,
                );
            }
        } else {
            const k = $c(d, this.F++);
            ys(d.s, k.Me, k.body, d.F);
            Es(d, a.de, a.wb, String(a.nb(M.Pc, a.B(M.Pc))));
        }
    };
    As.prototype.add = function (a) {
        a.je ? this.ba(a) : this.C(a);
    };
    As.prototype.flush = function () {
        if (this.o.events.length) {
            const a = hd(this.o, this.F++);
            ys(this.o.o, a.Me, a.body, this.o.s);
            this.o = new Yc();
            this.s >= 0 && (m.clearTimeout(this.s), (this.s = -1));
        }
    };
    As.prototype.ba = function (a) {
        const b = this;
        const c = a.hg();
        c
            ? of(c, function (d) {
                  b.C(a, d);
              })
            : this.C(a);
    };
    var Es = function (a, b, c, d) {
        function e(k) {
            f.push(`${k}=${encodeURIComponent(`${a.Sa[k]}`)}`);
        }
        if (b || c) {
            var f = [];
            e("tid");
            e("cid");
            e("gtm");
            f.push("aip=1");
            a.sb.uid && f.push(`uid=${encodeURIComponent(`${a.sb.uid}`)}`);
            b &&
                (xs("https://stats.g.doubleclick.net/g/collect", `v=2&${f.join("&")}`),
                qk(`https://stats.g.doubleclick.net/g/collect?v=2&${f.join("&")}`));
            if (c) {
                f.push(`z=${ya()}`);
                const g = zs(d);
                g && Db(g + f.join("&"));
            }
        }
    };
    var xs = function (a, b, c) {
        const d = `${a}?${b}`;
        c ? wb.sendBeacon && wb.sendBeacon(d, c) : Mb(d);
    };
    var Cs = Ok("", 500);
    var Ds = Ok("", 5e3);
    var Bs = !0;
    const Fs = window;
    const Gs = document;
    const Hs = function (a) {
        const b = Fs._gaUserPrefs;
        if ((b && b.ioo && b.ioo()) || (a && !0 === Fs[`ga-disable-${a}`])) return !0;
        try {
            const c = Fs.external;
            if (c && c._gaUserPrefs && c._gaUserPrefs == "oo") return !0;
        } catch (f) {}
        for (let d = jg("AMP_TOKEN", String(Gs.cookie), !0), e = 0; e < d.length; e++)
            if (d[e] == "$OPT_OUT") return !0;
        return Gs.getElementById("__gaOptOutExtension") ? !0 : !1;
    };
    const Is = {};
    const Js = function (a, b) {
        const c = M.D;
        be(c) ||
            ee(function () {
                b.he = !0;
                b.Lf = c;
                a.Uf(b);
            }, c);
    };
    Is.Fh = "";
    const Ks = function (a, b) {
        this.cb = a;
        this.wb = b;
        this.ba = new As();
        this.o = this.F = this.C = this.s = void 0;
        this.P = !1;
    };
    aa = Ks.prototype;
    aa.Oi = function (a, b, c) {
        const d = this;
        if (c.eventModel[M.cc]) {
            if (a.charAt(0) === "_") return;
            a !== M.Da && a !== M.La && xr(a) && ud(58);
            Ls(c);
        }
        const e = new gr(this.cb, a, b, c, this.wb);
        const f = [M.I];
        let g = !1;
        g = e.Qa();
        (e.nb(M.Wa, e.B(M.Wa)) || g) && f.push(M.D);
        fe(function () {
            d.Pi(e);
        }, f);
    };
    aa.Pi = function (a) {
        this.o = a;
        try {
            Hs(a.s) && (ud(28), a.abort());
            const b = Is.Fh.replace(/\s+/g, "").split(",");
            wa(b, a.J) >= 0 && (ud(33), a.abort());
            const c = a.qd();
            c && c.blacklisted && (ud(34), a.abort());
            const d = B.location.protocol;
            d != "http:" && d != "https:" && (ud(29), a.abort());
            wb && wb.loadPurpose == "preview" && (ud(30), a.abort());
            let e = N.grl;
            e || ((e = bs()), (N.grl = e));
            e() || (ud(35), a.abort());
            a.Vc = pr();
            const k = this.sg;
            let l;
            b: {
                if (!a.B(M.Ya) || be(M.I) || a.cb === 1) break b;
                a.Sf = !0;
            }
            a.J === M.Da ? (a.B(M.Ya) && Rh(["aw", "dc"]), Zr(a), (l = as(a))) : (l = {});
            k.call(this, l);
            a.J !== M.La && ur(a);
            a.J == M.Da && (a.B(M.Zb) || a.abort(), (a.J = M.Tb));
            const n = this.s;
            const p = this.C;
            const q = this.F;
            let t = Tr(a);
            t || (t = q);
            const u = Ga(a.B(M.$b));
            let r;
            r = Ga(a.B(M.Sc));
            let v;
            a: {
                if (t) {
                    const x = t.split(".");
                    if (!(x.length < 5 || x.length > 6)) {
                        v = {
                            sessionId: x[0],
                            Te: Number(x[1]),
                            wd: !!Number(x[2]),
                            He: Number(x[3]),
                            ob: Number(x[4] || 0),
                            wc: x[5] === "1",
                        };
                        break a;
                    }
                }
                v = void 0;
            }
            v && v.ob && (a.ob = Math.max(0, v.ob - Math.max(0, a.F - v.He)));
            let z = !1;
            v || ((z = a.Xc = !0), (v = { sessionId: String(a.F), Te: 1, wd: !1, He: a.F, wc: !1 }));
            a.F > v.He + 60 * u && ((z = !0), (v.sessionId = String(a.F)), v.Te++, (v.wd = !1));
            if (z) (a.P = !0), (a.Vc = 0), rr(), (or = 0);
            else if (or + pr() > r || a.J == M.Tb) v.wd = !0;
            a.Ia(M.ac, v.sessionId);
            a.Ia(M.$d, v.Te);
            a.Ia(M.Zd, v.wd ? 1 : 0);
            let w = a.B(M.Bb);
            let y = a.cb;
            w || ((w = Mr(a)), (y = 3));
            w || ((w = n), (y = 4));
            if (!w) {
                const A = be(M.I);
                const C = Er();
                w = !C.from_cookie || A ? C.vid : void 0;
                y = 5;
            }
            w ? (w = `${w}`) : ((a.Xc = a.Pf = !0), (w = Dg()), (y = 6));
            a.yg(w, y);
            {
            }
            let E = "";
            const O = B.location;
            if (O) {
                let J = O.pathname || "";
                J.charAt(0) != "/" && (J = `/${J}`);
                E = `${O.protocol}//${O.hostname}${J}${O.search}`;
            }
            a.Ia(M.Gb, E);
            let K;
            {
                const I = Wf(`gtm.gtagReferrer.${a.s}`);
                K = I ? `${I}` : B.referrer;
            }
            const P = K;
            P && a.Ia(M.Xa, P);
            a.Ia(M.Yd, B.title);
            a.Ia(M.ib, (wb.language || "").toLowerCase());
            const ba = m.screen;
            const da = ba ? ba.width : 0;
            const Q = ba ? ba.height : 0;
            a.ke = `${da}x${Q}`;
            let U = !1 !== a.B(M.Ea);
            U = !0;
            if (U && !1 !== a.B(M.Ub) && Km() && be(M.D)) {
                const Y = a.nb(M.Wa, a.B(M.Wa));
                const ma = a.nb(M.Db, a.B(M.Db));
                a.Ji() && (a.de = !!Y);
                Y && !ma && a.ob === 0 && ((a.ob = 60), (a.wb = !0));
            }
            Ms(a);
            a.ie = M.Df.indexOf(a.J) >= 0;
            for (let Aa = a.B(M.Wd) || [], Ta = 0; Ta < Aa.length; Ta++) {
                const Ca = Aa[Ta];
                if (Ca.rule_result) {
                    a.Ia(M.zf, Ca.traffic_type);
                    vr(3);
                    break;
                }
            }
            if (a.B(M.oa)) {
                const ad = Vr(a) || {};
                const pg = th(ad[M.Eb], !!ad[M.O]) ? lh(!0)._fplc : void 0;
                a.K._fplc = pg || (ng("FPLC", void 0, void 0, M.I).length > 0 ? void 0 : "0");
            }
            if (void 0 === a.B(M.Vd)) {
                const ic = a.B(M.Rc);
                let Dd;
                let bd;
                a: {
                    if (Yr) {
                        const cd = Vr(a) || {};
                        if (cd && cd[M.O])
                            for (let zc = Be(De(a.B(M.Xa)), "host", !0), dd = cd[M.O], Ib = 0; Ib < dd.length; Ib++)
                                if (dd[Ib] instanceof RegExp) {
                                    if (dd[Ib].test(zc)) {
                                        bd = !0;
                                        break a;
                                    }
                                } else if (zc.indexOf(dd[Ib]) >= 0) {
                                    bd = !0;
                                    break a;
                                }
                    }
                    bd = !1;
                }
                let Ed;
                if (!(Ed = bd))
                    if (cs) Ed = !1;
                    else {
                        const bj = Be(De(a.B(M.Xa)), "host", !0);
                        let jc;
                        const Fd = String(a.B(M.la));
                        if (Fd !== "none")
                            if (Fd !== "auto") jc = Fd;
                            else {
                                if (!es) {
                                    for (let qg = String(a.B(M.fb)), oa = xg(), Z = 0; Z < oa.length; Z++)
                                        if (oa[Z] !== "none") {
                                            const Ja = `${String(a.B(M.ca))}_ga_autodomain`;
                                            if (Ag(Ja, ds, { Ta: M.I, domain: oa[Z], path: qg }) === 0) {
                                                Ag(Ja, void 0, { Ta: M.I, domain: oa[Z], path: qg });
                                                fs = oa[Z];
                                                break;
                                            }
                                        }
                                    es = !0;
                                }
                                jc = fs;
                            }
                        else jc = void 0;
                        const Ac = jc;
                        Ed = Ac ? bj.indexOf(Ac) >= 0 : !1;
                    }
                if (!(Dd = Ed)) {
                    let Jb;
                    if ((Jb = ic))
                        a: {
                            for (let jb = ic.include_conditions || [], sb = 0; sb < jb.length; sb++)
                                if (jb[sb].test(a.B(M.Xa))) {
                                    Jb = !0;
                                    break a;
                                }
                            Jb = !1;
                        }
                    Dd = Jb;
                }
                Dd && (a.Ia(M.Vd, 1), vr(4));
            }
            if (a.J == M.La) {
                const tb = a.B(M.Oa);
                a.B(M.Va)(a.B(tb));
                a.abort();
            }
            if (a.K[M.cd]) delete a.K[M.cd];
            else {
                const kb = a.B(M.Od);
                if (kb) {
                    for (let S = kb.edit_rules || [], Bc = 0; Bc < S.length; Bc++)
                        a: {
                            const Ka = a;
                            const va = S[Bc];
                            if (Cr(Ka, va)) {
                                if (va.new_event_name) {
                                    const Gd =
                                        typeof va.new_event_name === "string"
                                            ? String(va.new_event_name)
                                            : zr(Ka.J, Ka.K, va.new_event_name);
                                    if (xr(Gd)) break a;
                                    Ka.J = String(Gd);
                                }
                                Ar(Ka.J, Ka.K, va);
                                if (Dr) {
                                    Ka.K[M.cd] = !0;
                                    if (sn().enableDeferrableCommandAfterConfig) {
                                        const Hd = Ka.J;
                                        const Id = Ka.K;
                                        const rg = Ka.s;
                                        sn().insert("event", [Id, Hd], rg);
                                    } else vn(Ka.J, Ka.K, Ka.s, !0);
                                    vr(2);
                                    Ka.abort();
                                } else vr(2);
                            }
                        }
                    for (let ed = kb.synthesis_rules || [], Jd = 0; Jd < ed.length; Jd++) {
                        const Tb = a;
                        const Ub = ed[Jd];
                        if (Cr(Tb, Ub)) {
                            const Cc = Ub.new_event_name;
                            if (!xr(Cc)) {
                                const fd = Ub.merge_source_event_params ? H(Tb.K) : {};
                                fd[M.cd] = !0;
                                Ar(Cc, fd, Ub);
                                if (sn().enableDeferrableCommandAfterConfig) {
                                    const ub = Cc;
                                    const Qa = fd;
                                    const Ha = Tb.s;
                                    sn().insert("event", [Qa, ub], Ha);
                                } else vn(Cc, fd, Tb.s, !0);
                                vr(1);
                            }
                        }
                    }
                }
            }
            const Ea = a.K[M.ae];
            if (ua(Ea)) for (let bb = 0; bb < Ea.length; bb++) vr(Ea[bb]);
            const Kd = td("GA4_EVENT");
            Kd && (a.fe = Kd);
            const gd = this.sg;
            const Ld = this.s;
            const co = this.C;
            let cj;
            const dj = Ur(a);
            dj ? (Sr(dj, a) || (ud(25), a.abort()), (cj = dj)) : (cj = void 0);
            const Ts = cj;
            let sg;
            let Dc = a.K[M.Bb];
            Ld && Dc === Ld
                ? (sg = Dc)
                : Dc
                ? ((Dc = `${Dc}`), Pr(Dc, a) || (ud(31), a.abort()), Gr(Dc, be(M.I)), (sg = Dc))
                : (ud(32), a.abort(), (sg = ""));
            const Us = sg;
            let Fe;
            {
                Fe = void 0;
            }
            gd.call(this, { clientId: Us, cg: Fe, xg: Ts });
            this.bj();
            a.Qa() && (a.J === "page_view" || a.Wc) && Js(this, a);
            rr();
            this.Uf(a);
            a.C.onSuccess();
        } catch (Zs) {
            a.C.onFailure();
        }
        delete rd.GA4_EVENT;
    };
    aa.Uf = function (a) {
        this.ba.add(a);
    };
    aa.sg = function (a) {
        const b = a.clientId;
        const c = a.cg;
        const d = a.xg;
        b && d && ((this.s = b), (this.C = c), (this.F = d));
    };
    aa.flush = function () {
        this.ba.flush();
    };
    aa.bj = function () {
        const a = this;
        if (!this.P) {
            let b = be(M.I);
            Td([M.I], function () {
                const c = be(M.I);
                if (b ^ c && a.o && a.F && a.s) {
                    const d = a.s;
                    if (c) {
                        const e = Mr(a.o);
                        e
                            ? ((a.s = e), (a.F = Tr(a.o)), a.o.o && (a.C = Lr(a.o)))
                            : (Pr(a.s, a.o), Sr(a.F, a.o), Gr(a.s, !0), a.o.o && a.C && Jr(a.C, a.o));
                    } else (a.F = void 0), (a.s = void 0), (a.C = void 0);
                    b = c;
                }
            });
            this.P = !0;
        }
    };
    var Ms = function (a) {
        const b = function (c) {
            return !!c && c.conversion;
        };
        a.Wc = b(a.qd());
        a.Xc && (a.Rf = b(a.qd("first_visit")));
        a.P && (a.Tf = b(a.qd("session_start")));
    };
    function Ls(a) {
        delete a.eventModel[M.cc];
        Ns(a.eventModel);
    }
    var Ns = function (a) {
        Da(a, function (c) {
            c.charAt(0) === "_" && delete a[c];
        });
        const b = a[M.Pa] || {};
        Da(b, function (c) {
            c.charAt(0) === "_" && delete b[c];
        });
    };
    const Os = function (a) {
        if (B.visibilityState == "prerender") return !1;
        a();
        return !0;
    };
    const Ps = function (a) {
        if (!Os(a)) {
            let b = !1;
            const c = function () {
                !b && Os(a) && ((b = !0), Fb(B, "visibilitychange", c), ud(55));
            };
            Eb(B, "visibilitychange", c);
            ud(54);
        }
    };
    const Qs = function (a, b, c) {
        vn(b, c, a);
    };
    const Rs = function (a, b, c) {
        vn(b, c, a, !0);
    };
    const Vs = function (a, b) {
        const c = new Ks(a, b);
        Ps(function () {
            Ss(a, c);
        });
    };
    function Ss(a, b) {
        un(a, function (c, d, e, f) {
            b.Oi(d, e, f);
        }),
            (sr = function () {
                sn().flush();
                pr() >= 1e3 && wb.sendBeacon && Qs(a, M.Fd, {});
                ir();
                b.flush();
                tr = function () {
                    hr = !1;
                    hr = !1;
                    tr = void 0;
                };
            });
    }
    const X = { g: {} };
    (X.g.ehl = ["google"]),
        (function () {
            function a(l) {
                return l.target && l.target.location && l.target.location.href ? l.target.location.href : kp();
            }
            function b(l, n) {
                Eb(l, "hashchange", function (p) {
                    var q = a(p);
                    n({ source: "hashchange", state: null, url: mp(q), aa: lp(q) });
                });
            }
            function c(l, n) {
                Eb(l, "popstate", function (p) {
                    let q = a(p);
                    n({ source: "popstate", state: p.state, url: mp(q), aa: lp(q) });
                });
            }
            function d(l, n, p) {
                var q = n.history;
                const t = q[l];
                if (sa(t))
                    try {
                        q[l] = function (u, r, v) {
                            t.apply(q, [].slice.call(arguments, 0));
                            p({ source: l, state: u, url: mp(kp()), aa: lp(kp()) });
                        };
                    } catch (u) {}
            }
            function e() {
                let l = { source: null, state: T("history").state || null, url: mp(kp()), aa: lp(kp()) };
                return function (n, p) {
                    var q = l;
                    const t = {};
                    t[q.source] = !0;
                    t[n.source] = !0;
                    if (!t.popstate || !t.hashchange || q.aa != n.aa) {
                        let u = {
                            event: "gtm.historyChange-v2",
                            "gtm.historyChangeSource": n.source,
                            "gtm.oldUrlFragment": l.aa,
                            "gtm.newUrlFragment": n.aa,
                            "gtm.oldHistoryState": l.state,
                            "gtm.newHistoryState": n.state,
                            "gtm.oldUrl": l.url,
                            "gtm.newUrl": n.url,
                            "gtm.triggers": p.join(","),
                        };
                        l = n;
                        op(u);
                    }
                };
            }
            function f(l, n) {
            let p = `${n}`;
                if (g[p]) g[p].push(l);
                else {
                    const q = [l];
                    g[p] = q;
                    const t = e();
                    var u = -1;
                    k.push(function (r) {
                        u >= 0 && hp(u);
                        n
                            ? (u = ip(function () {
                                  t(r, q);
                                  u = -1;
                              }, n))
                            : t(r, q);
                    });
                }
            }
            var g = {};
            var k = [];
            (function (l) {
                X.__ehl = l;
                X.__ehl.h = "ehl";
                X.__ehl.m = !0;
                X.__ehl.priorityOverride = 0;
            })(function (l) {
                var n = T("self");
                const p = l.vtp_uniqueTriggerId || "0";
                let q = l.vtp_groupEvents ? Number(l.vtp_groupEventsInterval) : 0;
                q < 0 ? (q = 0) : isNaN(q) && (q = 1e3);
                if (tp("ehl")) {
                    const t = Jn("ehl", "reg");
                    t ? (t(p, q), G(l.vtp_gtmOnSuccess)) : G(l.vtp_gtmOnFailure);
                } else {
                    const u = function (r) {
                    for (let v = 0; v < k.length; v++) k[v](r);
                };
                    b(n, u);
                    c(n, u);
                    d("pushState", n, u);
                    d("replaceState", n, u);
                    f(p, q);
                    Hn("ehl", "reg", f);
                    up("ehl");
                    G(l.vtp_gtmOnSuccess);
                }
            });
        })();
    (X.g.sdl = ["google"]),
        (function () {
            function a() {
                return !!(
                    Object.keys(l("horiz.pix")).length ||
                    Object.keys(l("horiz.pct")).length ||
                    Object.keys(l("vert.pix")).length ||
                    Object.keys(l("vert.pct")).length
                );
            }
            function b(w) {
                for (var y = [], A = w.split(","), C = 0; C < A.length; C++) {
                    var D = Number(A[C]);
                    if (isNaN(D)) return [];
                    p.test(A[C]) || y.push(D);
                }
                return y;
            }
            function c() {
                let w = 0;
            let y = 0;
                return function () {
                    var A = pe();
                    const C = A.height;
                    w = Math.max(v.scrollLeft + A.width, w);
                    y = Math.max(v.scrollTop + C, y);
                    return { hi: w, ii: y };
                };
            }
            function d() {
                u = T("self");
                r = u.document;
                v = r.scrollingElement || (r.body && r.body.parentNode);
                z = c();
            }
            function e(w, y, A, C) {
                const D = l(y);
            let F = {};
                let E;
                for (E in D) {
                    F.vb = E;
                    if (D.hasOwnProperty(F.vb)) {
                        let O = Number(F.vb);
                        w < O ||
                            (op({
                                event: "gtm.scrollDepth",
                                "gtm.scrollThreshold": O,
                                "gtm.scrollUnits": A.toLowerCase(),
                                "gtm.scrollDirection": C,
                                "gtm.triggers": D[F.vb].join(","),
                            }),
                            In(
                                "sdl",
                                y,
                                (function (J) {
                                    return function (K) {
                                        delete K[J.vb];
                                        return K;
                                    };
                                })(F),
                                {},
                            ));
                    }
                    F = { vb: F.vb };
                }
            }
            function f() {
                const w = z();
            var y = w.hi;
                const A = w.ii;
                const C = (y / v.scrollWidth) * 100;
                const D = (A / v.scrollHeight) * 100;
                e(y, "horiz.pix", q.$c, t.Ff);
                e(C, "horiz.pct", q.Zc, t.Ff);
                e(A, "vert.pix", q.$c, t.Qf);
                e(D, "vert.pct", q.Zc, t.Qf);
                Hn("sdl", "pending", !1);
            }
            function g() {
                let w = 250;
                let y = !1;
                r.scrollingElement && r.documentElement && u.addEventListener && ((w = 50), (y = !0));
                var A = 0;
                let C = !1;
                const D = function () {
                    C
                    ? (A = ip(D, w))
                    : ((A = 0),
                          f(),
                    tp("sdl") && !a() && (Fb(u, "scroll", F), Fb(u, "resize", F), Hn("sdl", "init", !1)));
                    C = !1;
            };
                var F = function () {
                y && z();
                A ? (C = !0) : ((A = ip(D, w)), Hn("sdl", "pending", !0));
            };
                return F;
            }
            function k(w, y, A) {
                if (y) {
                    const C = b(String(w));
                    In(
                        "sdl",
                        A,
                        function (D) {
                            for (let F = 0; F < C.length; F++) {
                                const E = String(C[F]);
                                D.hasOwnProperty(E) || (D[E] = []);
                                D[E].push(y);
                            }
                            return D;
                        },
                        {},
                    );
                }
            }
            function l(w) {
                return Jn("sdl", w, {});
            }
            function n(w) {
                G(w.vtp_gtmOnSuccess);
                const y = w.vtp_uniqueTriggerId;
                const A = w.vtp_horizontalThresholdsPixels;
                var C = w.vtp_horizontalThresholdsPercent;
                const D = w.vtp_verticalThresholdUnits;
                let F = w.vtp_verticalThresholdsPixels;
                const E = w.vtp_verticalThresholdsPercent;
                switch (w.vtp_horizontalThresholdUnits) {
                    case q.$c:
                        k(A, y, "horiz.pix");
                        break;
                    case q.Zc:
                        k(C, y, "horiz.pct");
                }
                switch (D) {
                    case q.$c:
                        k(F, y, "vert.pix");
                        break;
                    case q.Zc:
                        k(E, y, "vert.pct");
                }
                tp("sdl")
                    ? Jn("sdl", "pending") ||
                      (x || (d(), (x = !0)),
                      G(function () {
                          return f();
                      }))
                    : (d(),
                      (x = !0),
                      v &&
                          (up("sdl"),
                          Hn("sdl", "pending", !0),
                          G(function () {
                              f();
                              if (a()) {
                                  const O = g();
                                  Eb(u, "scroll", O);
                                  Eb(u, "resize", O);
                              } else Hn("sdl", "init", !1);
                          })));
            }
            var p = /^\s*$/;
            var q = { Zc: "PERCENT", $c: "PIXELS" };
            var t = { Qf: "vertical", Ff: "horizontal" };
        var u;
            let r;
            let v;
            var x = !1;
        let z;
            (function (w) {
                X.__sdl = w;
                X.__sdl.h = "sdl";
                X.__sdl.m = !0;
                X.__sdl.priorityOverride = 0;
            })(function (w) {
                w.vtp_triggerStartOption
                    ? n(w)
                    : Wn(function () {
                          n(w);
                      });
            });
        })();
    (X.g.c = ["google"]),
        (function () {
            (function (a) {
                X.__c = a;
                X.__c.h = "c";
                X.__c.m = !0;
                X.__c.priorityOverride = 0;
            })(function (a) {
                wp(a.vtp_value, "c", a.vtp_gtmEventId);
                return a.vtp_value;
            });
        })();
    (X.g.e = ["google"]),
        (function () {
            (function (a) {
                X.__e = a;
                X.__e.h = "e";
                X.__e.m = !0;
                X.__e.priorityOverride = 0;
            })(function (a) {
                let b = String(bg(a.vtp_gtmEventId, "event"));
                a.vtp_gtmCachedValues && (b = String(a.vtp_gtmCachedValues.event));
                return b;
            });
        })();

    (X.g.u = ["google"]),
        (function () {
            const a = function (b) {
            return {
                toString() {
                        return b;
                    },
            };
        };
            (function (b) {
                X.__u = b;
                X.__u.h = "u";
                X.__u.m = !0;
                X.__u.priorityOverride = 0;
            })(function (b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : np("gtm.url", 1)) || kp();
                let d = b[a("vtp_component")];
                if (!d || d == "URL") return mp(String(c));
                const e = De(String(c));
            var f;
                if (d === "QUERY")
                    a: {
                        const g = b[a("vtp_multiQueryKeys").toString()];
                        const k = b[a("vtp_queryKey").toString()] || "";
                        const l = b[a("vtp_ignoreEmptyQueryParam").toString()];
                    let n;
                        g ? (ua(k) ? (n = k) : (n = String(k).replace(/\s+/g, "").split(","))) : (n = [String(k)]);
                        for (let p = 0; p < n.length; p++) {
                            const q = Be(e, "QUERY", void 0, void 0, n[p]);
                            if (void 0 != q && (!l || q !== "")) {
                                f = q;
                                break a;
                            }
                        }
                        f = void 0;
                    }
                else
                    f = Be(
                        e,
                        d,
                        d == "HOST" ? b[a("vtp_stripWww")] : void 0,
                        d == "PATH" ? b[a("vtp_defaultPages")] : void 0,
                        void 0,
                    );
                return f;
            });
        })();
    (X.g.v = ["google"]),
        (function () {
            (function (a) {
                X.__v = a;
                X.__v.h = "v";
                X.__v.m = !0;
                X.__v.priorityOverride = 0;
            })(function (a) {
                const b = a.vtp_name;
                if (!b || !b.replace) return !1;
                const c = np(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
            var d = void 0 !== c ? c : a.vtp_defaultValue;
                wp(d, "v", a.vtp_gtmEventId);
                return d;
            });
        })();

    (X.g.ytl = ["google"]),
        (function () {
            function a() {
            const r = `${Math.round(1e9 * Math.random())}`;
                return B.getElementById(r) ? a() : r;
            }
            function b(r, v) {
                if (!r) return !1;
                for (let x = 0; x < p.length; x++) if (r.indexOf(`//${p[x]}/${v}`) >= 0) return !0;
                return !1;
            }
            function c(r, v) {
                const x = r.getAttribute("src");
                if (b(x, "embed/")) {
                    if (x.indexOf("enablejsapi=1") > 0) return !0;
                    if (v) {
                        var z = r.setAttribute;
                    let w;
                        var y = x.indexOf("?") !== -1 ? "&" : "?";
                        if (x.indexOf("origin=") > -1) w = `${x + y}enablejsapi=1`;
                        else {
                            if (!t) {
                                const A = T("document");
                                t = `${A.location.protocol}//${A.location.hostname}`;
                                A.location.port && (t += `:${A.location.port}`);
                            }
                            w = `${x + y}enablejsapi=1&origin=${encodeURIComponent(t)}`;
                        }
                        z.call(r, "src", w);
                        return !0;
                    }
                }
                return !1;
            }
            function d(r, v) {
                if (
                    !r.getAttribute(`data-gtm-yt-inspected-${v.Ve}`) &&
                    (r.setAttribute(`data-gtm-yt-inspected-${v.Ve}`, "true"), c(r, v.fg))
                ) {
                    r.id || (r.id = a());
                    var x = T("YT");
                    let z = x.get(r.id);
                    z || (z = new x.Player(r.id));
                    var w = f(z, v);
                    let y = {};
                var A;
                    for (A in w)
                        (y.Rb = A),
                            w.hasOwnProperty(y.Rb) &&
                                z.addEventListener(
                                    y.Rb,
                                    (function (C) {
                                        return function (D) {
                                            return w[C.Rb](D.data);
                                        };
                                    })(y),
                                ),
                            (y = { Rb: y.Rb });
                }
            }
            function e(r) {
                G(function () {
                    function v() {
                        for (let z = x.getElementsByTagName("iframe"), w = z.length, y = 0; y < w; y++) d(z[y], r);
                    }
                    var x = T("document");
                    v();
                    Rn(v);
                });
            }
            function f(r, v) {
            let x;
            let z;
                function w() {
                    K = Sn(
                        function () {
                            return { url: I, title: P, bg: L, fi: r.getCurrentTime(), playbackRate: ba };
                        },
                        v.Ve,
                        r.getIframe(),
                    );
                    L = 0;
                    P = I = "";
                    ba = 1;
                    return y;
                }
                function y(Y) {
                    switch (Y) {
                        case q.PLAYING:
                            L = Math.round(r.getDuration());
                            I = r.getVideoUrl();
                            if (r.getVideoData) {
                                const ma = r.getVideoData();
                                P = ma ? ma.title : "";
                            }
                            ba = r.getPlaybackRate();
                            v.$h ? op(K.createEvent("start")) : K.oe();
                            V = l(v.Ri, v.Qi, r.getDuration());
                            return A(Y);
                        default:
                            return y;
                    }
                }
                function A() {
                    da = r.getCurrentTime();
                    Q = jp().getTime();
                    K.Wi();
                    J();
                    return C;
                }
                function C(Y) {
                    let ma;
                    switch (Y) {
                        case q.ENDED:
                            return F(Y);
                        case q.PAUSED:
                            ma = "pause";
                        case q.BUFFERING:
                            var Aa = r.getCurrentTime() - da;
                            ma = Math.abs(((jp().getTime() - Q) / 1e3) * ba - Aa) > 1 ? "seek" : ma || "buffering";
                            r.getCurrentTime() && (v.Zh ? op(K.createEvent(ma)) : K.oe());
                            O();
                            return D;
                        case q.UNSTARTED:
                            return w(Y);
                        default:
                            return C;
                    }
                }
                function D(Y) {
                    switch (Y) {
                        case q.ENDED:
                            return F(Y);
                        case q.PLAYING:
                            return A(Y);
                        case q.UNSTARTED:
                            return w(Y);
                        default:
                            return D;
                    }
                }
                function F() {
                    for (; z; ) {
                        const Y = x;
                        hp(z);
                        Y();
                    }
                    v.Yh && op(K.createEvent("complete", 1));
                    return w(q.UNSTARTED);
                }
                function E() {}
                function O() {
                    z && (hp(z), (z = 0), (x = E));
                }
                function J() {
                    if (V.length && ba !== 0) {
                        let Y = -1;
                    var ma;
                        do {
                            ma = V[0];
                            if (ma.rb > r.getDuration()) return;
                            Y = (ma.rb - r.getCurrentTime()) / ba;
                            if (Y < 0 && (V.shift(), V.length === 0)) return;
                        } while (Y < 0);
                        x = function () {
                            z = 0;
                            x = E;
                            V.length > 0 &&
                                V[0].rb === ma.rb &&
                                (V.shift(), op(K.createEvent("progress", ma.pg, ma.vg)));
                            J();
                        };
                        z = ip(x, 1e3 * Y);
                    }
                }
                let K;
                var V = [];
            var L;
                let I;
                let P;
                let ba;
            let da;
                let Q;
                let U = w(q.UNSTARTED);
                z = 0;
                x = E;
                return {
                    onStateChange(Y) {
                    U = U(Y);
                },
                    onPlaybackRateChange(Y) {
                    da = r.getCurrentTime();
                    Q = jp().getTime();
                    K.oe();
                    ba = Y;
                    O();
                    J();
                },
                };
            }
            function g(r) {
                for (var v = r.split(","), x = v.length, z = [], w = 0; w < x; w++) {
                    var y = parseInt(v[w], 10);
                    isNaN(y) || y > 100 || y < 0 || z.push(y / 100);
                }
                z.sort(function (A, C) {
                    return A - C;
                });
                return z;
            }
            function k(r) {
                for (var v = r.split(","), x = v.length, z = [], w = 0; w < x; w++) {
                    let y = parseInt(v[w], 10);
                    isNaN(y) || y < 0 || z.push(y);
                }
                z.sort(function (A, C) {
                    return A - C;
                });
                return z;
            }
            function l(r, v, x) {
                let z = r.map(function (A) {
                    return { rb: A, vg: A, pg: void 0 };
                });
                if (!v.length) return z;
                const w = v.map(function (A) {
                return { rb: A * x, vg: void 0, pg: A };
            });
                if (!z.length) return w;
                let y = z.concat(w);
                y.sort(function (A, C) {
                    return A.rb - C.rb;
                });
                return y;
            }
            function n(r) {
                const v = !!r.vtp_captureStart;
                let x = !!r.vtp_captureComplete;
                let z = !!r.vtp_capturePause;
                const w = g(`${r.vtp_progressThresholdsPercent}`);
                const y = k(`${r.vtp_progressThresholdsTimeInSeconds}`);
                var A = !!r.vtp_fixMissingApi;
                if (v || x || z || w.length || y.length) {
                    const C = {
                        $h: v,
                        Yh: x,
                        Zh: z,
                        Qi: w,
                        Ri: y,
                        fg: A,
                        Ve: void 0 === r.vtp_uniqueTriggerId ? "" : r.vtp_uniqueTriggerId,
                    };
                    const D = T("YT");
                    const F = function () {
                        e(C);
                    };
                    G(r.vtp_gtmOnSuccess);
                    if (D) D.ready && D.ready(F);
                    else {
                        let E = T("onYouTubeIframeAPIReady");
                        pp("onYouTubeIframeAPIReady", function () {
                            E && E();
                            F();
                        });
                        G(function () {
                            for (
                                var O = T("document"), J = O.getElementsByTagName("script"), K = J.length, V = 0;
                                V < K;
                                V++
                            ) {
                                const L = J[V].getAttribute("src");
                                if (b(L, "iframe_api") || b(L, "player_api")) return;
                            }
                            for (let I = O.getElementsByTagName("iframe"), P = I.length, ba = 0; ba < P; ba++)
                                if (!u && c(I[ba], C.fg)) {
                                    R("https://www.youtube.com/iframe_api");
                                    u = !0;
                                    break;
                                }
                        });
                    }
                } else G(r.vtp_gtmOnSuccess);
            }
            var p = ["www.youtube.com", "www.youtube-nocookie.com"];
        var q = { UNSTARTED: -1, ENDED: 0, PLAYING: 1, PAUSED: 2, BUFFERING: 3, CUED: 5 };
        let t;
            var u = !1;
            (function (r) {
                X.__ytl = r;
                X.__ytl.h = "ytl";
                X.__ytl.m = !0;
                X.__ytl.priorityOverride = 0;
            })(function (r) {
                r.vtp_triggerStartOption
                    ? n(r)
                    : Pi(function () {
                          n(r);
                      });
            });
        })();

    (X.g.aev = ["google"]),
        (function () {
            function a(u, r, v) {
                const x = u || bg(r, "gtm");
                if (x) return x[v];
            }
            function b(u, r, v, x, z) {
                z || (z = "element");
                let w = `${r}.${v}`;
                let y;
                if (p.hasOwnProperty(w)) y = p[w];
                else {
                    const A = a(u, r, z);
                    if (A && ((y = x(A)), (p[w] = y), q.push(w), q.length > 35)) {
                        var C = q.shift();
                        delete p[C];
                    }
                }
                return y;
            }
            function c(u, r, v, x) {
                let z = a(u, r, t[v]);
                return void 0 !== z ? z : x;
            }
            function d(u, r) {
                if (!u) return !1;
                var v = e(kp());
                ua(r) ||
                    (r = String(r || "")
                        .replace(/\s+/g, "")
                        .split(","));
                for (var x = [v], z = 0; z < r.length; z++) {
                    var w = r[z];
                    if (w.hasOwnProperty("is_regex"))
                        if (w.is_regex)
                            try {
                                w = new RegExp(w.domain);
                            } catch (A) {
                                continue;
                            }
                        else w = w.domain;
                    if (w instanceof RegExp) {
                        if (w.test(u)) return !1;
                    } else {
                        let y = w;
                        if (y.length != 0) {
                            if (e(u).indexOf(y) >= 0) return !1;
                            x.push(e(y));
                        }
                    }
                }
                return !Wp(u, x);
            }
            function e(u) {
                n.test(u) || (u = `http://${u}`);
                return Be(De(u), "HOST", !0);
            }
            function f(u, r, v, x) {
                switch (u) {
                    case "SUBMIT_TEXT":
                        return b(r, v, `FORM.${u}`, g, "formSubmitElement") || x;
                    case "LENGTH":
                        var z = b(r, v, `FORM.${u}`, k);
                        return void 0 === z ? x : z;
                    case "INTERACTED_FIELD_ID":
                        return l(r, v, "id", x);
                    case "INTERACTED_FIELD_NAME":
                        return l(r, v, "name", x);
                    case "INTERACTED_FIELD_TYPE":
                        return l(r, v, "type", x);
                    case "INTERACTED_FIELD_POSITION":
                        var w = a(r, v, "interactedFormFieldPosition");
                        return void 0 === w ? x : w;
                    case "INTERACT_SEQUENCE_NUMBER":
                        var y = a(r, v, "interactSequenceNumber");
                        return void 0 === y ? x : y;
                    default:
                        return x;
                }
            }
            function g(u) {
                switch (u.tagName.toLowerCase()) {
                    case "input":
                        return Gb(u, "value");
                    case "button":
                        return Hb(u);
                    default:
                        return null;
                }
            }
            function k(u) {
                if (u.tagName.toLowerCase() === "form" && u.elements) {
                    for (var r = 0, v = 0; v < u.elements.length; v++) Mn(u.elements[v]) && r++;
                    return r;
                }
            }
            function l(u, r, v, x) {
                const z = a(u, r, "interactedFormField");
                return (z && Gb(z, v)) || x;
            }
            var n = /^https?:\/\//i;
        var p = {};
            var q = [];
            var t = {
            ATTRIBUTE: "elementAttribute",
            CLASSES: "elementClasses",
            ELEMENT: "element",
            ID: "elementId",
            HISTORY_CHANGE_SOURCE: "historyChangeSource",
            HISTORY_NEW_STATE: "newHistoryState",
            HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
            HISTORY_OLD_STATE: "oldHistoryState",
            HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
            TARGET: "elementTarget",
        };
            (function (u) {
                X.__aev = u;
                X.__aev.h = "aev";
                X.__aev.m = !0;
                X.__aev.priorityOverride = 0;
            })(function (u) {
                var r = u.vtp_gtmEventId;
                const v = u.vtp_defaultValue;
                const x = u.vtp_varType;
            let z;
                u.vtp_gtmCachedValues && (z = u.vtp_gtmCachedValues.gtm);
                switch (x) {
                    case "TAG_NAME":
                        var w = a(z, r, "element");
                        return (w && w.tagName) || v;
                    case "TEXT":
                        return b(z, r, x, Hb) || v;
                    case "URL":
                        var y;
                        a: {
                            const A = String(a(z, r, "elementUrl") || v || "");
                            let C = De(A);
                            const D = String(u.vtp_component || "URL");
                            switch (D) {
                                case "URL":
                                    y = A;
                                    break a;
                                case "IS_OUTBOUND":
                                    y = d(A, u.vtp_affiliatedDomains);
                                    break a;
                                default:
                                    y = Be(C, D, u.vtp_stripWww, u.vtp_defaultPages, u.vtp_queryKey);
                            }
                        }
                        return y;
                    case "ATTRIBUTE":
                        var F;
                        if (void 0 === u.vtp_attribute) F = c(z, r, x, v);
                        else {
                            const E = u.vtp_attribute;
                            const O = a(z, r, "element");
                            F = (O && Gb(O, E)) || v || "";
                        }
                        return F;
                    case "MD":
                        var J = u.vtp_mdValue;
                        var K = b(z, r, "MD", dp);
                        return J && K ? gp(K, J) || v : K || v;
                    case "FORM":
                        return f(String(u.vtp_component || "SUBMIT_TEXT"), z, r, v);
                    default:
                        var V = c(z, r, x, v);
                        wp(V, "aev", u.vtp_gtmEventId);
                        return V;
                }
            });
        })();

    (X.g.dlm = ["google"]),
        (function () {
            (function (a) {
                X.__dlm = a;
                X.__dlm.h = "dlm";
                X.__dlm.m = !0;
                X.__dlm.priorityOverride = 0;
            })(function (a) {
                let b = Xp(a.vtp_userInput || [], "key", "value") || {};
                a.vtp_synchronousWrite
                    ? Da(b, function (c, d) {
                          Zf(c, d);
                      })
                    : op(b);
                G(a.vtp_gtmOnSuccess);
            });
        })();
    (X.g.gct = ["google"]),
        (function () {
            function a(d) {
                for (var e = [], f = 0; f < d.length; f++)
                    try {
                        e.push(new RegExp(d[f]));
                    } catch (g) {}
                return e;
            }
            function b(d) {
                return d.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
            }
            function c(d) {
                for (var e = [], f = 0; f < d.length; f++) {
                    const g = d[f].matchValue;
                var k;
                    switch (d[f].matchType) {
                        case "BEGINS_WITH":
                            k = `^${b(g)}`;
                            break;
                        case "ENDS_WITH":
                            k = `${b(g)}$`;
                            break;
                        case "EQUALS":
                            k = `^${b(g)}$`;
                            break;
                        case "REGEX":
                            k = g;
                            break;
                        default:
                            k = b(g);
                    }
                    e.push(k);
                }
                return e;
            }
            (function (d) {
                X.__gct = d;
                X.__gct.h = "gct";
                X.__gct.m = !0;
                X.__gct.priorityOverride = 0;
            })(function (d) {
                let e = {};
                d.vtp_sessionDuration > 0 && (e[M.$b] = d.vtp_sessionDuration);
                e[M.Nc] = d.vtp_eventSettings;
                e[M.Od] = d.vtp_dynamicEventSettings;
                e[M.Wa] = d.vtp_googleSignals === 1;
                e[M.Pc] = d.vtp_foreignTld;
                e[M.Db] = d.vtp_restrictDomain === 1;
                e[M.Wd] = d.vtp_internalTrafficResults;
                const f = M.na;
                const g = d.vtp_linker;
                g && g[M.O] && (g[M.O] = a(g[M.O]));
                e[f] = g;
                let k = M.Rc;
                const l = d.vtp_referralExclusionDefinition;
                l && l.include_conditions && (l.include_conditions = a(l.include_conditions));
                e[k] = l;
                let n;
                const p = d.vtp_trackingId;
                n = sn().getRemoteConfig(p);
                let q = n.referral_exclusion_conditions;
                q && (q.length && typeof q[0] === "object" && (q = c(q)), (e[M.Rc] = { include_conditions: a(q) }));
                var t = n.cross_domain_conditions;
                if (t) {
                    t.length && typeof t[0] === "object" && (t = c(t));
                    let u = {};
                    e[M.na] = ((u[M.O] = a(t)), (u[M.Fb] = !0), (u[M.Eb] = !0), (u[M.Xb] = "query"), u);
                }
                Vs(d.vtp_trackingId, e);
                G(d.vtp_gtmOnSuccess);
            });
        })();

    (X.g.get = ["google"]),
        (function () {
            (function (a) {
                X.__get = a;
                X.__get.h = "get";
                X.__get.m = !0;
                X.__get.priorityOverride = 0;
            })(function (a) {
                const b = a.vtp_settings;
                (a.vtp_deferrable ? Rs : Qs)(String(b.streamId), String(a.vtp_eventName), b.eventParameters || {});
                a.vtp_gtmOnSuccess();
            });
        })();

    (X.g.lcl = []),
        (function () {
            function a() {
                const c = T("document");
            var d = 0;
                const e = function (f) {
                    let g = f.target;
                    if (g && f.which !== 3 && !(f.xi || (f.timeStamp && f.timeStamp === d))) {
                        d = f.timeStamp;
                        g = Lb(g, ["a", "area"], 100);
                        if (!g) return f.returnValue;
                        var k = f.defaultPrevented || !1 === f.returnValue;
                        const l = Jn("lcl", k ? "nv.mwt" : "mwt", 0);
                    let n;
                        n = k ? Jn("lcl", "nv.ids", []) : Jn("lcl", "ids", []);
                        if (n.length) {
                            const p = Fn(g, "gtm.linkClick", n);
                            if (b(f, g, c) && !k && l && g.href) {
                                let q = !!xa(String(Nb(g, "rel") || "").split(" "), function (r) {
                                    return r.toLowerCase() === "noreferrer";
                                });
                                q && ud(36);
                                const t = T((Nb(g, "target") || "_self").substring(1));
                            let u = !0;
                                if (
                                    op(
                                        p,
                                        Oo(function () {
                                            let r;
                                            if ((r = u && t)) {
                                                let v;
                                                a: if (q) {
                                                    let x;
                                                    try {
                                                        x = new MouseEvent(f.type, { bubbles: !0 });
                                                    } catch (z) {
                                                        if (!c.createEvent) {
                                                            v = !1;
                                                            break a;
                                                        }
                                                        x = c.createEvent("MouseEvents");
                                                        x.initEvent(f.type, !0, !0);
                                                    }
                                                    x.xi = !0;
                                                    f.target.dispatchEvent(x);
                                                    v = !0;
                                                } else v = !1;
                                                r = !v;
                                            }
                                            r && (t.location.href = Nb(g, "href"));
                                        }),
                                        l,
                                    )
                                )
                                    u = !1;
                                else return f.preventDefault && f.preventDefault(), (f.returnValue = !1);
                            } else op(p, function () {}, l || 2e3);
                            return !0;
                        }
                    }
                };
                Eb(c, "click", e, !1);
                Eb(c, "auxclick", e, !1);
            }
            function b(c, d, e) {
                if (c.which === 2 || c.ctrlKey || c.shiftKey || c.altKey || c.metaKey) return !1;
                let f = Nb(d, "href");
                const g = f.indexOf("#");
                let k = Nb(d, "target");
                if ((k && k !== "_self" && k !== "_parent" && k !== "_top") || g === 0) return !1;
                if (g > 0) {
                    const l = mp(f);
                    const n = mp(e.location);
                    return l !== n;
                }
                return !0;
            }
            (function (c) {
                X.__lcl = c;
                X.__lcl.h = "lcl";
                X.__lcl.m = !0;
                X.__lcl.priorityOverride = 0;
            })(function (c) {
                const d = void 0 === c.vtp_waitForTags ? !0 : c.vtp_waitForTags;
                const e = void 0 === c.vtp_checkValidation ? !0 : c.vtp_checkValidation;
                let f = Number(c.vtp_waitForTagsTimeout);
                if (!f || f <= 0) f = 2e3;
                var g = c.vtp_uniqueTriggerId || "0";
                if (d) {
                    let k = function (n) {
                        return Math.max(f, n);
                    };
                    In("lcl", "mwt", k, 0);
                    e || In("lcl", "nv.mwt", k, 0);
                }
                const l = function (n) {
                n.push(g);
                return n;
            };
                In("lcl", "ids", l, []);
                e || In("lcl", "nv.ids", l, []);
                tp("lcl") || (a(), up("lcl"));
                G(c.vtp_gtmOnSuccess);
            });
        })();

    const Ws = {};
    (Ws.macro = function (a) {
        if (Vo.me.hasOwnProperty(a)) return Vo.me[a];
    }),
        (Ws.onHtmlSuccess = Vo.$f(!0)),
        (Ws.onHtmlFailure = Vo.$f(!1));
    Ws.dataLayer = Xf;
    Ws.callback = function (a) {
        Nf.hasOwnProperty(a) && sa(Nf[a]) && Nf[a]();
        delete Nf[a];
    };
    Ws.bootstrap = 0;
    Ws._spx = !1;
    function Xs() {
        N[Cf.M] = Ws;
        Sa(Of, X.g);
        Gc = Gc || Vo;
        Hc = Pc;
    }
    function Ys() {
        const a = !1;
        a && Yi("INIT");
        xd().s();
        N = m.google_tag_manager = m.google_tag_manager || {};
        pl();
        uh.enable_gbraid_cookie_write = !0;
        const b = !!N[Cf.M];
        if (b) {
            const c = N.zones;
            c && c.unregisterChild(Cf.M);
        } else {
            for (var d = data.resource || {}, e = d.macros || [], f = 0; f < e.length; f++) uc.push(e[f]);
            for (let g = d.tags || [], k = 0; k < g.length; k++) xc.push(g[k]);
            for (let l = d.predicates || [], n = 0; n < l.length; n++) wc.push(l[n]);
            for (let p = d.rules || [], q = 0; q < p.length; q++) {
                for (var t = p[q], u = {}, r = 0; r < t.length; r++) u[t[r][0]] = Array.prototype.slice.call(t[r], 1);
                vc.push(u);
            }
            Ec = X;
            Fc = ao;
            Xs();
            Uo();
            Ki = !1;
            Li = 0;
            if ((B.readyState == "interactive" && !B.createEventObject) || B.readyState == "complete") Ni();
            else {
                Eb(B, "DOMContentLoaded", Ni);
                Eb(B, "readystatechange", Ni);
                if (B.createEventObject && B.documentElement.doScroll) {
                    let v = !0;
                    try {
                        v = !m.frameElement;
                    } catch (A) {}
                    v && Oi();
                }
                Eb(m, "load", Ni);
            }
            Tn = !1;
            B.readyState === "complete" ? Vn() : Eb(m, "load", Vn);
            Xj && m.setInterval(Rj, 864e5);
            Lf = new Date().getTime();
            Ws.bootstrap = Lf;
            if (a) {
                const y = Zi("INIT");
            }
        }
    }
    (function (a) {
        if (!m.__TAGGY_INSTALLED) {
            let b = !1;
            if (B.referrer) {
                const c = De(B.referrer);
                b = Ae(c, "host") === "cct.google";
            }
            if (!b) {
                const d = ng("googTaggyReferrer");
                b = d.length && d[0].length;
            }
            b && ((m.__TAGGY_INSTALLED = !0), Ab("https://cct.google/taggy/agent.js"));
        }
        const f = function () {
            let n = m["google.tagmanager.debugui2.queue"];
            n ||
                ((n = []),
                (m["google.tagmanager.debugui2.queue"] = n),
                Ab("https://www.googletagmanager.com/debug/bootstrap"));
            const p = {
                messageType: "CONTAINER_STARTING",
                data: { scriptSource: xb, containerProduct: "GTM", debug: !1 },
            };
            p.data.resume = function () {
                a();
            };
            p.data.containerProduct = "OGT";
            Cf.Og && (p.data.initialPublish = !0);
            n.push(p);
        };
        let g = Be(m.location, "query", !1, void 0, "gtm_debug") === "x";
        if (!g && B.referrer) {
            const k = De(B.referrer);
            g = Ae(k, "host") === "tagassistant.google.com";
        }
        if (!g) {
            const l = ng("__TAG_ASSISTANT");
            g = l.length && l[0].length;
        }
        !g && m.__TAG_ASSISTANT_API && (g = !0);
        !g && B.documentElement.hasAttribute("data-tag-assistant-present") && (g = !0);
        g && xb ? f() : a();
    })(Ys);
})();
