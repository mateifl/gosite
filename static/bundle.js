/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/components/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/shapes.sgf":
/*!*************************!*\
  !*** ./data/shapes.sgf ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "(;GM[1]AP[Sabaki:0.30.0]CA[UTF-8]SZ[19]\n(;AB[dd][kc][qd]N[Low Chinese opening]C[size: 19, type: corner]CR[aa][ba][ca][da][ea][fa][ga][ha][ia][ja][ka][la][ma][na][oa][pa][qa][ra][sa][ab][bb][cb][db][eb][fb][gb][hb][ib][jb][kb][lb][mb][nb][ob][pb][qb][rb][sb][ac][bc][cc][dc][ec][fc][gc][hc][ic][jc][lc][mc][nc][oc][pc][qc][rc][sc][ad][bd][cd][ed][fd][gd][hd][id][jd][kd][ld][md][nd][od][pd][rd][sd][ae][be][ce][de][ee][fe][ge][he][ie][je][ke][le][me][ne][oe][pe][qe][re][se]MA[kc][dd][qd]\n)(;AB[dd][kd][qd]N[High Chinese opening]AE[so]C[size: 19, type: corner]CR[aa][ba][ca][da][ea][fa][ga][ha][ia][ja][ka][la][ma][na][oa][pa][qa][ra][sa][ab][bb][cb][db][eb][fb][gb][hb][ib][jb][kb][lb][mb][nb][ob][pb][qb][rb][sb][ac][bc][cc][dc][ec][fc][gc][hc][ic][jc][kc][lc][mc][nc][oc][pc][qc][rc][sc][ad][bd][cd][ed][fd][gd][hd][id][jd][ld][md][nd][od][pd][rd][sd][ae][be][ce][de][ee][fe][ge][he][ie][je][ke][le][me][ne][oe][pe][qe][re][se]MA[dd][kd][qd]\n)(;AB[dd][pc][qe]N[Orthodox opening]C[size: 19, type: corner]CR[aa][ba][ca][da][ea][fa][ga][ha][ia][ja][ka][la][ma][na][oa][pa][qa][ra][sa][ab][bb][cb][db][eb][fb][gb][hb][ib][jb][kb][lb][mb][nb][ob][pb][qb][rb][sb][ac][bc][cc][dc][ec][fc][gc][hc][ic][jc][kc][lc][mc][nc][oc][qc][rc][sc][ad][bd][cd][ed][fd][gd][hd][id][jd][kd][ld][md][nd][od][pd][qd][rd][sd][ae][be][ce][de][ee][fe][ge][he][ie][je][ke][le][me][ne][oe][pe][re][se][af][bf][cf][df][ef][ff][gf][hf][if][jf][kf][lf][mf][nf][of][pf][qf][rf][sf]MA[pc][dd][qe]\n)(;AB[cd][pc][qe]N[Orthodox opening]C[size: 19, type: corner]CR[aa][ba][ca][da][ea][fa][ga][ha][ia][ja][ka][la][ma][na][oa][pa][qa][ra][sa][ab][bb][cb][db][eb][fb][gb][hb][ib][jb][kb][lb][mb][nb][ob][pb][qb][rb][sb][ac][bc][cc][dc][ec][fc][gc][hc][ic][jc][kc][lc][mc][nc][oc][qc][rc][sc][ad][bd][dd][ed][fd][gd][hd][id][jd][kd][ld][md][nd][od][pd][qd][rd][sd][ae][be][ce][de][ee][fe][ge][he][ie][je][ke][le][me][ne][oe][pe][re][se][af][bf][cf][df][ef][ff][gf][hf][if][jf][kf][lf][mf][nf][of][pf][qf][rf][sf]MA[pc][cd][qe]\n)(;AB[dc][nc][jd]AW[pd]N[Kobayashi opening]C[size: 19, type: corner]CR[aa][ba][ca][da][ea][fa][ga][ha][ia][ja][ka][la][ma][na][oa][pa][qa][ra][sa][ab][bb][cb][db][eb][fb][gb][hb][ib][jb][kb][lb][mb][nb][ob][pb][qb][rb][sb][ac][bc][cc][ec][fc][gc][hc][ic][jc][kc][lc][mc][oc][pc][qc][rc][sc][ad][bd][cd][dd][ed][fd][gd][hd][id][kd][ld][md][nd][od][qd][rd][sd][ae][be][ce][de][ee][fe][ge][he][ie][je][ke][le][me][ne][oe][pe][qe][re][se]MA[dc][nc][jd][pd]\n)(;AB[cd][nc][ic]AW[pd]N[Small Chinese opening]C[size: 19, type: corner]CR[aa][ba][ca][da][ea][fa][ga][ha][ia][ja][ka][la][ma][na][oa][pa][qa][ra][sa][ab][bb][cb][db][eb][fb][gb][hb][ib][jb][kb][lb][mb][nb][ob][pb][qb][rb][sb][ac][bc][cc][dc][ec][fc][gc][hc][jc][kc][lc][mc][oc][pc][qc][rc][sc][ad][bd][dd][ed][fd][gd][hd][id][jd][kd][ld][md][nd][od][qd][rd][sd][ae][be][ce][de][ee][fe][ge][he][ie][je][ke][le][me][ne][oe][pe][qe][re][se]MA[ic][nc][cd][pd]\n)(;AB[cd][hc][nc]AW[pd]N[Micro Chinese opening]C[size: 19, type: corner]CR[aa][ba][ca][da][ea][fa][ga][ha][ia][ja][ka][la][ma][na][oa][pa][qa][ra][sa][ab][bb][cb][db][eb][fb][gb][hb][ib][jb][kb][lb][mb][nb][ob][pb][qb][rb][sb][ac][bc][cc][dc][ec][fc][gc][ic][jc][kc][lc][mc][oc][pc][qc][rc][sc][ad][bd][dd][ed][fd][gd][hd][id][jd][kd][ld][md][nd][od][qd][rd][sd][ae][be][ce][de][ee][fe][ge][he][ie][je][ke][le][me][ne][oe][pe][qe][re][se]MA[hc][nc][cd][pd]\n)(;AB[pd][jd][dd]N[Sanrensei opening]C[size: 19, type: corner]CR[aa][ba][ca][da][ea][fa][ga][ha][ia][ja][ka][la][ma][na][oa][pa][qa][ra][sa][ab][bb][cb][db][eb][fb][gb][hb][ib][jb][kb][lb][mb][nb][ob][pb][qb][rb][sb][ac][bc][cc][dc][ec][fc][gc][hc][ic][jc][kc][lc][mc][nc][oc][pc][qc][rc][sc][ad][bd][cd][ed][fd][gd][hd][id][kd][ld][md][nd][od][qd][rd][sd][ae][be][ce][de][ee][fe][ge][he][ie][je][ke][le][me][ne][oe][pe][qe][re][se]MA[dd][jd][pd]\n)(;AB[dd][pd]N[Nirensei opening]C[size: 19, type: corner]CR[aa][ba][ca][da][ea][fa][ga][ha][ia][ja][ka][la][ma][na][oa][pa][qa][ra][sa][ab][bb][cb][db][eb][fb][gb][hb][ib][jb][kb][lb][mb][nb][ob][pb][qb][rb][sb][ac][bc][cc][dc][ec][fc][gc][hc][ic][jc][kc][lc][mc][nc][oc][pc][qc][rc][sc][ad][bd][cd][ed][fd][gd][hd][id][jd][kd][ld][md][nd][od][qd][rd][sd][ae][be][ce][de][ee][fe][ge][he][ie][je][ke][le][me][ne][oe][pe][qe][re][se]MA[dd][pd]\n)(;AB[qd][pq][cp][pe]AW[dc][oc][qo]N[Shūsaku opening]C[size: 19, type: corner]CR[aa][ba][ca][da][ea][fa][ga][ha][ia][ja][ka][la][ma][na][oa][pa][qa][ra][sa][ab][bb][cb][db][eb][fb][gb][hb][ib][jb][kb][lb][mb][nb][ob][pb][qb][rb][sb][ac][bc][cc][ec][fc][gc][hc][ic][jc][kc][lc][mc][nc][pc][qc][rc][sc][ad][bd][cd][dd][ed][fd][gd][hd][id][jd][kd][ld][md][nd][od][pd][rd][sd][ae][be][ce][de][ee][fe][ge][he][ie][je][ke][le][me][ne][oe][qe][re][se][af][bf][cf][df][ef][ff][gf][hf][if][jf][kf][lf][mf][nf][of][pf][qf][rf][sf][ag][bg][cg][dg][eg][fg][gg][hg][ig][jg][kg][lg][mg][ng][og][pg][qg][rg][sg][ah][bh][ch][dh][eh][fh][gh][hh][ih][jh][kh][lh][mh][nh][oh][ph][qh][rh][sh][ai][bi][ci][di][ei][fi][gi][hi][ii][ji][ki][li][mi][ni][oi][pi][qi][ri][si][aj][bj][cj][dj][ej][fj][gj][hj][ij][jj][kj][lj][mj][nj][oj][pj][qj][rj][sj][ak][bk][ck][dk][ek][fk][gk][hk][ik][jk][kk][lk][mk][nk][ok][pk][qk][rk][sk][al][bl][cl][dl][el][fl][gl][hl][il][jl][kl][ll][ml][nl][ol][pl][ql][rl][sl][am][bm][cm][dm][em][fm][gm][hm][im][jm][km][lm][mm][nm][om][pm][qm][rm][sm][an][bn][cn][dn][en][fn][gn][hn][in][jn][kn][ln][mn][nn][on][pn][qn][rn][sn][ao][bo][co][do][eo][fo][go][ho][io][jo][ko][lo][mo][no][oo][po][ro][so][ap][bp][dp][ep][fp][gp][hp][ip][jp][kp][lp][mp][np][op][pp][qp][rp][sp][aq][bq][cq][dq][eq][fq][gq][hq][iq][jq][kq][lq][mq][nq][oq][qq][rq][sq][ar][br][cr][dr][er][fr][gr][hr][ir][jr][kr][lr][mr][nr][or][pr][qr][rr][sr][as][bs][cs][ds][es][fs][gs][hs][is][js][ks][ls][ms][ns][os][ps][qs][rs][ss]MA[dc][oc][qd][pe][qo][cp][pq]\n)(;AE[oc][qd]AB[qc]N[3-3 point]C[type: corner]CR[qa][ra][sa][qb][rb][sb][rc][sc]MA[qc]\n)(;AW[qd]AB[oc]N[Low approach]C[type: corner]CR[na][nb][nc][nd][ne][oa][ob][od][oe][pa][pb][pc][pd][pe][qa][qb][qc][qe][ra][rb][rc][rd][re][sa][sb][sc][sd][se]MA[oc]\n)(;AW[pd]AB[nc]N[Low approach]C[type: corner]CR[ma][mb][mc][md][me][na][nb][nd][ne][oa][ob][oc][od][oe][pa][pb][pc][pe][qa][qb][qc][qd][qe][ra][rb][rc][rd][re][sa][sb][sc][sd][se]MA[nc]\n)(;AW[qd]AB[od]N[High approach]C[type: corner]CR[na][nb][nc][nd][ne][oa][ob][oc][oe][pa][pb][pc][pd][pe][qa][qb][qc][qe][ra][rb][rc][rd][re][sa][sb][sc][sd][se]MA[od]\n)(;AW[pd]AB[nd]N[High approach]C[type: corner]CR[ma][mb][mc][md][me][na][nb][nc][ne][oa][ob][oc][od][oe][pa][pb][pc][pe][qa][qb][qc][qd][qe][ra][rb][rc][rd][re][sa][sb][sc][sd][se]MA[nd]\n)(;AB[oc][qd]N[Low enclosure]C[type: corner]CR[na][oa][pa][qa][ra][sa][nb][ob][pb][qb][rb][sb][nc][pc][qc][rc][sc][nd][od][pd][rd][sd][ne][oe][pe][qe][re][se]MA[oc][qd]\n)(;AB[nc][pd]N[Low enclosure]C[type: corner]CR[ma][na][oa][pa][qa][ra][sa][mb][nb][ob][pb][qb][rb][sb][mc][oc][pc][qc][rc][sc][md][nd][od][qd][rd][sd][me][ne][oe][pe][qe][re][se]MA[nc][pd]\n)(;AB[od][qd]N[High enclosure]C[type: corner]CR[na][oa][pa][qa][ra][sa][nb][ob][pb][qb][rb][sb][nc][oc][pc][qc][rc][sc][nd][pd][rd][sd][ne][oe][pe][qe][re][se]MA[od][qd]\n)(;AB[nd][pd]N[High enclosure]C[type: corner]CR[ma][na][oa][pa][qa][ra][sa][mb][nb][ob][pb][qb][rb][sb][mc][nc][oc][pc][qc][rc][sc][md][od][qd][rd][sd][me][ne][oe][pe][qe][re][se]MA[nd][pd]\n)(;AB[nc][qd]N[Low enclosure]C[type: corner]CR[ma][na][oa][pa][qa][ra][sa][mb][nb][ob][pb][qb][rb][sb][mc][oc][pc][qc][rc][sc][md][nd][od][pd][rd][sd][me][ne][oe][pe][qe][re][se]MA[nc][qd]\n)(;AB[mc][pd]N[Low enclosure]C[type: corner]CR[la][ma][na][oa][pa][qa][ra][sa][lb][mb][nb][ob][pb][qb][rb][sb][lc][nc][oc][pc][qc][rc][sc][ld][md][nd][od][qd][rd][sd][le][me][ne][oe][pe][qe][re][se]MA[mc][pd]\n)(;AB[nd][qd]N[High enclosure]C[type: corner]CR[ma][na][oa][pa][qa][ra][sa][mb][nb][ob][pb][qb][rb][sb][mc][nc][oc][pc][qc][rc][sc][md][od][pd][rd][sd][me][ne][oe][pe][qe][re][se]MA[nd][qd]\n)(;AB[md][pd]N[High enclosure]C[type: corner]CR[la][ma][na][oa][pa][qa][ra][sa][lb][mb][nb][ob][pb][qb][rb][sb][lc][mc][nc][oc][pc][qc][rc][sc][ld][nd][od][qd][rd][sd][le][me][ne][oe][pe][qe][re][se]MA[md][pd]\n)(;AB[dd][de][ef][ff][fd]N[Mouth shape]CR[ec][ed][fe][ge]MA[dd][fd][de][ef][ff]\n)(;AB[dd][de][fd][ff]N[Table shape]MA[dd][fd][de][ff]CR[ed][ee][fe][ge]\n)(;AB[dd][ed][df][fg]N[Tippy table]CR[de][ee][ef][ff]MA[fg]\n)(;AB[dd][ed][df][ef]N[Bamboo joint]MA[dd][ed][df][ef]CR[de][ee]\n)(;AB[dd][de][fd][ge]N[Trapezium]CR[ed][gd][ee][fe][ff]MA[fd][ge]\n)(;AB[dd][ce][ee][df]N[Diamond]MA[dd][ce][ee][df]CR[de]\n)(;AB[dd][ee][fd]N[Tiger’s mouth]CR[ec][ed]MA[dd][fd][ee]\n)(;AB[dd][de][ed]N[Empty triangle]MA[dd][ed][de]CR[ee]\n)(;AB[dd][ed][ee]AW[de]N[Turn]MA[dd][ee]\n)(;AB[dd][de]N[Stretch]MA[dd][de]\n)(;AB[dd][ee]N[Diagonal]MA[dd][ee]CR[ed][de]\n)(;AB[dd]AW[ed][cd]N[Wedge]CR[dc][de]MA[dd]\n)(;AB[dd][ee]AW[ed]N[Hane]MA[dd][ee]CR[de]\n)(;AB[dd][ee]AW[ed][de]N[Cut]MA[dd][ee]\n)(;AB[dd][fd][ff][df]N[Square]MA[dd][fd][df][ff]CR[ee]\n)(;AB[dd][fe][df][fg]N[Parallelogram]MA[dd][fe][df][fg]CR[ee][ef]\n)(;AB[dd][df][fe]N[Dog’s head]MA[dd][fe][df]CR[ed][de][ee][ef]\n)(;AB[dd][df][ge]N[Horse’s head]MA[dd][ge][df]CR[ed][de][ee][fe][ef]\n)(;AB[dd]AW[ed]N[Attachment]CR[dc][ec][de][ee]MA[dd]\n)(;AB[dd][fd]N[One-point jump]MA[dd][fd]CR[ed]\n)(;AB[dd][fe][eg]N[Big bulge]MA[dd][fe][eg]CR[ee][ef]\n)(;AB[dd][fe]N[Small knight]MA[dd][fe]CR[ed][ee]\n)(;AB[dd][gd]N[Two-point jump]MA[dd][gd]CR[ed][fd]\n)(;AB[dd][ge]N[Large knight]MA[dd][ge]CR[ed][fd][ee][fe]\n)(;AB[dd]AW[ee]N[Shoulder hit]CR[cc][dc][ec][cd][ed][ce][de]MA[dd]\n)(;AB[dd][ff]N[Diagonal jump]MA[dd][ff]CR[ed][de][ee][fe][ef]\n))"

/***/ }),

/***/ "./node_modules/@sabaki/deadstones/js/main.js":
/*!****************************************************!*\
  !*** ./node_modules/@sabaki/deadstones/js/main.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, setImmediate) {var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

Function.prototype.$asyncbind = function $asyncbind(self, catcher) {
    "use strict";

    if (!Function.prototype.$asyncbind) {
        Object.defineProperty(Function.prototype, "$asyncbind", {
            value: $asyncbind,
            enumerable: false,
            configurable: true,
            writable: true
        });
    }

    if (!$asyncbind.trampoline) {
        $asyncbind.trampoline = function trampoline(t, x, s, e, u) {
            return function b(q) {
                while (q) {
                    if (q.then) {
                        q = q.then(b, e);
                        return u ? undefined : q;
                    }

                    try {
                        if (q.pop) {
                            if (q.length) return q.pop() ? x.call(t) : q;
                            q = s;
                        } else q = q.call(t);
                    } catch (r) {
                        return e(r);
                    }
                }
            };
        };
    }

    if (!$asyncbind.LazyThenable) {
        $asyncbind.LazyThenable = function () {
            function isThenable(obj) {
                return obj && obj instanceof Object && typeof obj.then === "function";
            }

            function resolution(p, r, how) {
                try {
                    var x = how ? how(r) : r;
                    if (p === x) return p.reject(new TypeError("Promise resolution loop"));

                    if (isThenable(x)) {
                        x.then(function (y) {
                            resolution(p, y);
                        }, function (e) {
                            p.reject(e);
                        });
                    } else {
                        p.resolve(x);
                    }
                } catch (ex) {
                    p.reject(ex);
                }
            }

            function _unchained(v) {}

            function thenChain(res, rej) {
                this.resolve = res;
                this.reject = rej;
            }

            function Chained() {}

            ;
            Chained.prototype = {
                resolve: _unchained,
                reject: _unchained,
                then: thenChain
            };

            function then(res, rej) {
                var chain = new Chained();

                try {
                    this._resolver(function (value) {
                        return isThenable(value) ? value.then(res, rej) : resolution(chain, value, res);
                    }, function (ex) {
                        resolution(chain, ex, rej);
                    });
                } catch (ex) {
                    resolution(chain, ex, rej);
                }

                return chain;
            }

            function Thenable(resolver) {
                this._resolver = resolver;
                this.then = then;
            }

            ;

            Thenable.resolve = function (v) {
                return Thenable.isThenable(v) ? v : {
                    then: function then(resolve) {
                        return resolve(v);
                    }
                };
            };

            Thenable.isThenable = isThenable;
            return Thenable;
        }();

        $asyncbind.EagerThenable = $asyncbind.Thenable = ($asyncbind.EagerThenableFactory = function (tick) {
            tick = tick || typeof process === "object" && process.nextTick || typeof setImmediate === "function" && setImmediate || function (f) {
                setTimeout(f, 0);
            };

            var soon = function () {
                var fq = [],
                    fqStart = 0,
                    bufferSize = 1024;

                function callQueue() {
                    while (fq.length - fqStart) {
                        try {
                            fq[fqStart]();
                        } catch (ex) {}

                        fq[fqStart++] = undefined;

                        if (fqStart === bufferSize) {
                            fq.splice(0, bufferSize);
                            fqStart = 0;
                        }
                    }
                }

                return function (fn) {
                    fq.push(fn);
                    if (fq.length - fqStart === 1) tick(callQueue);
                };
            }();

            function Zousan(func) {
                if (func) {
                    var me = this;
                    func(function (arg) {
                        me.resolve(arg);
                    }, function (arg) {
                        me.reject(arg);
                    });
                }
            }

            Zousan.prototype = {
                resolve: function resolve(value) {
                    if (this.state !== undefined) return;
                    if (value === this) return this.reject(new TypeError("Attempt to resolve promise with self"));
                    var me = this;

                    if (value && (typeof value === "function" || typeof value === "object")) {
                        try {
                            var first = 0;
                            var then = value.then;

                            if (typeof then === "function") {
                                then.call(value, function (ra) {
                                    if (!first++) {
                                        me.resolve(ra);
                                    }
                                }, function (rr) {
                                    if (!first++) {
                                        me.reject(rr);
                                    }
                                });
                                return;
                            }
                        } catch (e) {
                            if (!first) this.reject(e);
                            return;
                        }
                    }

                    this.state = STATE_FULFILLED;
                    this.v = value;
                    if (me.c) soon(function () {
                        for (var n = 0, l = me.c.length; n < l; n++) STATE_FULFILLED(me.c[n], value);
                    });
                },
                reject: function reject(reason) {
                    if (this.state !== undefined) return;
                    this.state = STATE_REJECTED;
                    this.v = reason;
                    var clients = this.c;
                    if (clients) soon(function () {
                        for (var n = 0, l = clients.length; n < l; n++) STATE_REJECTED(clients[n], reason);
                    });
                },
                then: function then(onF, onR) {
                    var p = new Zousan();
                    var client = {
                        y: onF,
                        n: onR,
                        p: p
                    };

                    if (this.state === undefined) {
                        if (this.c) this.c.push(client);else this.c = [client];
                    } else {
                        var s = this.state,
                            a = this.v;
                        soon(function () {
                            s(client, a);
                        });
                    }

                    return p;
                }
            };

            function STATE_FULFILLED(c, arg) {
                if (typeof c.y === "function") {
                    try {
                        var yret = c.y.call(undefined, arg);
                        c.p.resolve(yret);
                    } catch (err) {
                        c.p.reject(err);
                    }
                } else c.p.resolve(arg);
            }

            function STATE_REJECTED(c, reason) {
                if (typeof c.n === "function") {
                    try {
                        var yret = c.n.call(undefined, reason);
                        c.p.resolve(yret);
                    } catch (err) {
                        c.p.reject(err);
                    }
                } else c.p.reject(reason);
            }

            Zousan.resolve = function (val) {
                if (val && val instanceof Zousan) return val;
                var z = new Zousan();
                z.resolve(val);
                return z;
            };

            Zousan.reject = function (err) {
                if (err && err instanceof Zousan) return err;
                var z = new Zousan();
                z.reject(err);
                return z;
            };

            Zousan.version = "2.3.3-nodent";
            return Zousan;
        })();
    }

    function boundThen() {
        return resolver.apply(self, arguments);
    }

    var resolver = this;

    switch (catcher) {
        case true:
            return new $asyncbind.Thenable(boundThen);

        case 0:
            return new $asyncbind.LazyThenable(boundThen);

        case undefined:
            boundThen.then = boundThen;
            return boundThen;

        default:
            return function () {
                try {
                    return resolver.apply(self, arguments);
                } catch (ex) {
                    return catcher(ex);
                }
            };
    }
};

const wasm = __webpack_require__(/*! ./wasm */ "./node_modules/@sabaki/deadstones/js/wasm.js");

const parseBoard = data => [data.reduce((acc, x) => (acc.push(...x), acc), []), data.length > 0 ? data[0].length : 0];

const parseVertices = (indices, width) => [...indices].map(i => {
    let x = i % width;
    return [x, (i - x) / width];
});

const parseGrid = (values, width) => {
    values = [...values];
    return [...Array(values.length / width)].map((_, y) => values.slice(y * width, (y + 1) * width));
};

exports.useFetch = function (path) {
    wasm.fetchPath = path;
};

exports.guess = function (data, { finished = false, iterations = 100 } = {}) {
    return new Promise(function ($return, $error) {
        var _parseBoard, _parseBoard2;

        let newData, width, indices;
        _parseBoard = parseBoard(data), _parseBoard2 = _slicedToArray(_parseBoard, 2);
        newData = _parseBoard2[0], width = _parseBoard2[1];
        return wasm.then(function ($await_3) {
            indices = $await_3.guess(newData, width, finished, iterations, Date.now());

            return $return(parseVertices(indices, width));
        }.$asyncbind(this, $error), $error);
    });
}, exports.playTillEnd = function (data, sign) {
    return new Promise(function ($return, $error) {
        var _parseBoard3, _parseBoard4;

        let newData, width, values;
        _parseBoard3 = parseBoard(data), _parseBoard4 = _slicedToArray(_parseBoard3, 2);
        newData = _parseBoard4[0], width = _parseBoard4[1];
        return wasm.then(function ($await_4) {
            values = $await_4.play_till_end(newData, width, sign, Date.now());

            return $return(parseGrid(values, width));
        }.$asyncbind(this, $error), $error);
    });
}, exports.getProbabilityMap = function (data, iterations) {
    return new Promise(function ($return, $error) {
        var _parseBoard5, _parseBoard6;

        let newData, width, values;
        _parseBoard5 = parseBoard(data), _parseBoard6 = _slicedToArray(_parseBoard5, 2);
        newData = _parseBoard6[0], width = _parseBoard6[1];
        return wasm.then(function ($await_5) {
            values = $await_5.get_probability_map(newData, width, iterations, Date.now());

            return $return(parseGrid(values, width));
        }.$asyncbind(this, $error), $error);
    });
}, exports.getFloatingStones = function (data) {
    return new Promise(function ($return, $error) {
        var _parseBoard7, _parseBoard8;

        let newData, width, indices;
        _parseBoard7 = parseBoard(data), _parseBoard8 = _slicedToArray(_parseBoard7, 2);
        newData = _parseBoard8[0], width = _parseBoard8[1];
        return wasm.then(function ($await_6) {
            indices = $await_6.get_floating_stones(newData, width);

            return $return(parseVertices(indices, width));
        }.$asyncbind(this, $error), $error);
    });
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/@sabaki/deadstones/js/wasm.js":
/*!****************************************************!*\
  !*** ./node_modules/@sabaki/deadstones/js/wasm.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

const make = wasm => {
    let result = {};

    let cachegetUint8Memory = null;
    function getUint8Memory() {
        if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
        return cachegetUint8Memory;
    }

    let cachegetUint64Memory = null;
    function getUint64Memory() {
        if (cachegetUint64Memory === null || cachegetUint64Memory.buffer !== wasm.memory.buffer) cachegetUint64Memory = new BigUint64Array(wasm.memory.buffer);
        return cachegetUint64Memory;
    }

    function passArray8ToWasm(arg) {
        const ptr = wasm.__wbindgen_malloc(arg.length * 1);
        getUint8Memory().set(arg, ptr / 1);
        return [ptr, arg.length];
    }

    let cachegetUint32Memory = null;
    function getUint32Memory() {
        if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== wasm.memory.buffer) cachegetUint32Memory = new Uint32Array(wasm.memory.buffer);
        return cachegetUint32Memory;
    }

    function getArrayU32FromWasm(ptr, len) {
        return getUint32Memory().subarray(ptr / 4, ptr / 4 + len);
    }

    let cachedGlobalArgumentPtr = null;
    function globalArgumentPtr() {
        if (cachedGlobalArgumentPtr === null) cachedGlobalArgumentPtr = wasm.__wbindgen_global_argument_ptr();
        return cachedGlobalArgumentPtr;
    }

    result.guess = function (arg0, arg1, arg2, arg3, arg4) {
        var _passArray8ToWasm = passArray8ToWasm(arg0),
            _passArray8ToWasm2 = _slicedToArray(_passArray8ToWasm, 2);

        const ptr0 = _passArray8ToWasm2[0],
              len0 = _passArray8ToWasm2[1];

        const retptr = globalArgumentPtr();
        wasm.guess(retptr, ptr0, len0, arg1, arg2 ? 1 : 0, arg3, arg4);
        const mem = getUint32Memory();
        const ptr = mem[retptr / 4];
        const len = mem[retptr / 4 + 1];
        const realRet = getArrayU32FromWasm(ptr, len);
        wasm.__wbindgen_free(ptr, len * 4);
        return realRet;
    };

    let cachegetFloat32Memory = null;
    function getFloat32Memory() {
        if (cachegetFloat32Memory === null || cachegetFloat32Memory.buffer !== wasm.memory.buffer) cachegetFloat32Memory = new Float32Array(wasm.memory.buffer);
        return cachegetFloat32Memory;
    }

    function getArrayF32FromWasm(ptr, len) {
        return getFloat32Memory().subarray(ptr / 4, ptr / 4 + len);
    }

    result.get_probability_map = function (arg0, arg1, arg2, arg3) {
        var _passArray8ToWasm3 = passArray8ToWasm(arg0),
            _passArray8ToWasm4 = _slicedToArray(_passArray8ToWasm3, 2);

        const ptr0 = _passArray8ToWasm4[0],
              len0 = _passArray8ToWasm4[1];

        const retptr = globalArgumentPtr();
        wasm.get_probability_map(retptr, ptr0, len0, arg1, arg2, arg3);
        const mem = getUint32Memory();
        const ptr = mem[retptr / 4];
        const len = mem[retptr / 4 + 1];
        const realRet = getArrayF32FromWasm(ptr, len);
        wasm.__wbindgen_free(ptr, len * 4);
        return realRet;
    };

    let cachegetInt8Memory = null;
    function getInt8Memory() {
        if (cachegetInt8Memory === null || cachegetInt8Memory.buffer !== wasm.memory.buffer) cachegetInt8Memory = new Int8Array(wasm.memory.buffer);
        return cachegetInt8Memory;
    }

    function getArrayI8FromWasm(ptr, len) {
        return getInt8Memory().subarray(ptr / 1, ptr / 1 + len);
    }

    result.play_till_end = function (arg0, arg1, arg2, arg3) {
        var _passArray8ToWasm5 = passArray8ToWasm(arg0),
            _passArray8ToWasm6 = _slicedToArray(_passArray8ToWasm5, 2);

        const ptr0 = _passArray8ToWasm6[0],
              len0 = _passArray8ToWasm6[1];

        const retptr = globalArgumentPtr();
        wasm.play_till_end(retptr, ptr0, len0, arg1, arg2, arg3);
        const mem = getUint32Memory();
        const ptr = mem[retptr / 4];
        const len = mem[retptr / 4 + 1];
        const realRet = getArrayI8FromWasm(ptr, len);
        wasm.__wbindgen_free(ptr, len * 1);
        return realRet;
    };

    result.get_floating_stones = function (arg0, arg1) {
        var _passArray8ToWasm7 = passArray8ToWasm(arg0),
            _passArray8ToWasm8 = _slicedToArray(_passArray8ToWasm7, 2);

        const ptr0 = _passArray8ToWasm8[0],
              len0 = _passArray8ToWasm8[1];

        const retptr = globalArgumentPtr();
        wasm.get_floating_stones(retptr, ptr0, len0, arg1);
        const mem = getUint32Memory();
        const ptr = mem[retptr / 4];
        const len = mem[retptr / 4 + 1];
        const realRet = getArrayU32FromWasm(ptr, len);
        wasm.__wbindgen_free(ptr, len * 4);
        return realRet;
    };

    const TextDecoder = __webpack_require__(/*! util */ "./src/modules/shims/util.js").TextDecoder;

    let cachedDecoder = new TextDecoder('utf-8');

    function getStringFromWasm(ptr, len) {
        return cachedDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
    }

    result.__wbindgen_throw = function (ptr, len) {
        throw new Error(getStringFromWasm(ptr, len));
    };

    return result;
};

let importObj = { './deadstones': make() };

module.exports = exports = new Promise((resolve, reject) => {
    var _require = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");

    const join = _require.join;

    var _require2 = __webpack_require__(/*! fs */ "./src/modules/shims/fs.js");

    const readFile = _require2.readFile;


    readFile(join(__dirname, '..', 'wasm', 'deadstones_bg.wasm'), (err, buffer) => {
        if (err) return reject(err);

        resolve(WebAssembly.instantiate(buffer, importObj));
    });
}).catch(() => fetch(exports.fetchPath).then(response => response.arrayBuffer()).then(buffer => WebAssembly.instantiate(buffer, importObj))).then(module => make(module.instance.exports));

exports.fetchPath = null;
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/@sabaki/influence/src/areaMap.js":
/*!*******************************************************!*\
  !*** ./node_modules/@sabaki/influence/src/areaMap.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _require = __webpack_require__(/*! ./helper */ "./node_modules/@sabaki/influence/src/helper.js");

const getNeighbors = _require.getNeighbors,
      getChain = _require.getChain;


module.exports = function (data) {
    let height = data.length;
    let width = height === 0 ? 0 : data[0].length;
    let map = [...Array(height)].map(_ => Array(width).fill(null));

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let vertex = [x, y];

            if (map[y][x] !== null) continue;
            if (data[y][x] !== 0) {
                map[y][x] = data[y][x];
                continue;
            }

            let chain = getChain(data, vertex);
            let sign = 0;
            let indicator = 1;

            for (let c of chain) {
                if (indicator === 0) break;

                for (let n of getNeighbors(c)) {
                    var _n = _slicedToArray(n, 2);

                    let nx = _n[0],
                        ny = _n[1];

                    if (!data[ny] || data[ny][nx] == null || data[ny][nx] === 0) continue;

                    if (sign === 0) {
                        sign = data[ny][nx];
                    } else if (sign !== data[ny][nx]) {
                        indicator = 0;
                        break;
                    }
                }
            }

            for (let _ref of chain) {
                var _ref2 = _slicedToArray(_ref, 2);

                let cx = _ref2[0];
                let cy = _ref2[1];

                map[cy][cx] = sign * indicator;
            }
        }
    }

    return map;
};

/***/ }),

/***/ "./node_modules/@sabaki/influence/src/helper.js":
/*!******************************************************!*\
  !*** ./node_modules/@sabaki/influence/src/helper.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.getNeighbors = ([x, y]) => [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]];

exports.getChain = function (data, v, result = [], done = {}, sign = null) {
    if (sign == null) sign = data[v[1]][v[0]];
    let neighbors = exports.getNeighbors(v);

    result.push(v);
    done[v] = true;

    for (let n of neighbors) {
        if (!data[n[1]] || data[n[1]][n[0]] !== sign || n in done) continue;

        exports.getChain(data, n, result, done, sign);
    }

    return result;
};

/***/ }),

/***/ "./node_modules/@sabaki/influence/src/influenceMap.js":
/*!************************************************************!*\
  !*** ./node_modules/@sabaki/influence/src/influenceMap.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

const areaMap = __webpack_require__(/*! ./areaMap */ "./node_modules/@sabaki/influence/src/areaMap.js");
const nearestNeighborMap = __webpack_require__(/*! ./nearestNeighborMap */ "./node_modules/@sabaki/influence/src/nearestNeighborMap.js");
const radianceMap = __webpack_require__(/*! ./radianceMap */ "./node_modules/@sabaki/influence/src/radianceMap.js");

var _require = __webpack_require__(/*! ./helper */ "./node_modules/@sabaki/influence/src/helper.js");

const getNeighbors = _require.getNeighbors;


module.exports = function (data, { discrete = false, maxDistance = 6, minRadiance = 2 } = {}) {
    let height = data.length;
    let width = height === 0 ? 0 : data[0].length;
    let map = areaMap(data);
    let pnnmap = nearestNeighborMap(data, 1);
    let nnnmap = nearestNeighborMap(data, -1);
    let prmap = radianceMap(data, 1);
    let nrmap = radianceMap(data, -1);

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            if (map[y][x] !== 0) continue;

            let s = Math.sign(nnnmap[y][x] - pnnmap[y][x]);
            let faraway = s === 0 || (s > 0 ? pnnmap : nnnmap)[y][x] > maxDistance;
            let dim = s === 0 || Math.round((s > 0 ? prmap : nrmap)[y][x]) < minRadiance;

            if (faraway || dim) map[y][x] = 0;else map[y][x] = s * (s > 0 ? prmap[y][x] : nrmap[y][x]);

            if (discrete) map[y][x] = Math.sign(map[y][x]);
        }
    }

    // Postprocessing

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            if (data[y][x] !== 0) continue;

            // Prevent single point areas

            let sign = Math.sign(map[y][x]);

            if (sign !== 0) {
                let neighbors = getNeighbors([x, y]).filter(([i, j]) => data[j] && data[j][i] != null);

                if (neighbors.length >= 2) {
                    var _neighbors$ = _slicedToArray(neighbors[0], 2);

                    let i = _neighbors$[0],
                        j = _neighbors$[1];


                    if (neighbors.every(([i, j]) => Math.sign(map[j][i]) !== sign)) {
                        map[y][x] = 0;
                        continue;
                    }
                }
            }

            // Fix ragged areas

            let distance = Math.min(x, y, width - x - 1, height - y - 1);

            if (sign !== 0) {
                let friendlyNeighbors = getNeighbors([x, y]).filter(([i, j]) => map[j] && Math.sign(map[j][i]) === sign);

                if (friendlyNeighbors.length === 1) {
                    var _friendlyNeighbors$ = _slicedToArray(friendlyNeighbors[0], 2);

                    let i = _friendlyNeighbors$[0],
                        j = _friendlyNeighbors$[1];


                    if (data[j][i] === sign) map[y][x] = 0;
                    continue;
                }
            }

            // Fix empty pillars

            if (distance <= 2 && sign === 0) {
                let signedNeighbors = getNeighbors([x, y]).filter(([i, j]) => map[j] && map[j][i] !== 0);

                if (signedNeighbors.length >= 2) {
                    var _signedNeighbors = _slicedToArray(signedNeighbors, 2),
                        _signedNeighbors$ = _slicedToArray(_signedNeighbors[0], 2);

                    let i1 = _signedNeighbors$[0],
                        j1 = _signedNeighbors$[1];

                    var _signedNeighbors$2 = _slicedToArray(_signedNeighbors[1], 2);

                    let i2 = _signedNeighbors$2[0],
                        j2 = _signedNeighbors$2[1];

                    let s = Math.sign(map[j1][i1]);

                    if ((signedNeighbors.length >= 3 || i1 === i2 || j1 === j2) && signedNeighbors.every(([i, j]) => Math.sign(map[j][i]) === s)) {
                        map[y][x] = !discrete ? signedNeighbors.reduce((sum, [i, j]) => sum + map[j][i], 0) / signedNeighbors.length : s;
                        continue;
                    }
                }
            }
        }
    }

    return areaMap(map);
};

/***/ }),

/***/ "./node_modules/@sabaki/influence/src/main.js":
/*!****************************************************!*\
  !*** ./node_modules/@sabaki/influence/src/main.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

let influence = {};

influence.areaMap = __webpack_require__(/*! ./areaMap */ "./node_modules/@sabaki/influence/src/areaMap.js");
influence.nearestNeighborMap = __webpack_require__(/*! ./nearestNeighborMap */ "./node_modules/@sabaki/influence/src/nearestNeighborMap.js");
influence.radianceMap = __webpack_require__(/*! ./radianceMap */ "./node_modules/@sabaki/influence/src/radianceMap.js");
influence.map = __webpack_require__(/*! ./influenceMap */ "./node_modules/@sabaki/influence/src/influenceMap.js");

module.exports = influence;

/***/ }),

/***/ "./node_modules/@sabaki/influence/src/nearestNeighborMap.js":
/*!******************************************************************!*\
  !*** ./node_modules/@sabaki/influence/src/nearestNeighborMap.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (data, sign) {
    let height = data.length;
    let width = height === 0 ? 0 : data[0].length;
    let map = [...Array(height)].map(_ => Array(width).fill(Infinity));
    let min = Infinity;

    let f = (x, y) => {
        if (data[y][x] === sign) min = 0;else min++;

        map[y][x] = min = Math.min(min, map[y][x]);
    };

    for (let y = 0; y < height; y++) {
        min = Infinity;

        for (let x = 0; x < width; x++) {
            let old = Infinity;

            f(x, y);
            old = min;

            for (let ny = y + 1; ny < height; ny++) f(x, ny);
            min = old;

            for (let ny = y - 1; ny >= 0; ny--) f(x, ny);
            min = old;
        }
    }

    for (let y = height - 1; y >= 0; y--) {
        min = Infinity;

        for (let x = width - 1; x >= 0; x--) {
            let old = Infinity;

            f(x, y);
            old = min;

            for (let ny = y + 1; ny < height; ny++) f(x, ny);
            min = old;

            for (let ny = y - 1; ny >= 0; ny--) f(x, ny);
            min = old;
        }
    }

    return map;
};

/***/ }),

/***/ "./node_modules/@sabaki/influence/src/radianceMap.js":
/*!***********************************************************!*\
  !*** ./node_modules/@sabaki/influence/src/radianceMap.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _require = __webpack_require__(/*! ./helper */ "./node_modules/@sabaki/influence/src/helper.js");

const getNeighbors = _require.getNeighbors,
      getChain = _require.getChain;


module.exports = function (data, sign, { p1 = 6, p2 = 1.5, p3 = 2 } = {}) {
    let height = data.length;
    let width = height === 0 ? 0 : data[0].length;
    let map = [...Array(height)].map(_ => Array(width).fill(0));
    let size = [width, height];
    let done = {};

    let getMirroredVertex = v => {
        if (v[0] >= 0 && v[0] < width && v[1] >= 0 && v[1] < height) return v;
        return v.map((z, i) => z < 0 ? -z - 1 : z >= size[i] ? 2 * size[i] - z - 1 : z);
    };

    let castRadiance = chain => {
        let queue = chain.map(x => [x, 0]);
        let visited = {};

        while (queue.length > 0) {
            var _queue$shift = queue.shift(),
                _queue$shift2 = _slicedToArray(_queue$shift, 2);

            let v = _queue$shift2[0],
                d = _queue$shift2[1];

            let mv = getMirroredVertex(v);

            map[mv[1]][mv[0]] += mv !== v ? p3 : p2 / (d / p1 * 6 + 1);

            for (let n of getNeighbors(v)) {
                if (d >= p1 || data[n[1]] && data[n[1]][n[0]] == null && data[n[1]][n[0]] === -sign || n in visited) continue;

                visited[n] = true;
                queue.push([n, d + 1]);
            }
        }
    };

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let v = [x, y];
            if (data[y][x] !== sign || v in done) continue;

            let chain = getChain(data, v);
            chain.forEach(w => done[w] = true);

            castRadiance(chain);
        }
    }

    return map;
};

/***/ }),

/***/ "./node_modules/@sabaki/sgf/src/helper.js":
/*!************************************************!*\
  !*** ./node_modules/@sabaki/sgf/src/helper.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

exports.escapeString = function (input) {
    return input.toString().replace(/\\/g, '\\\\').replace(/\]/g, '\\]');
};

exports.unescapeString = function (input) {
    let result = [];
    let inBackslash = false;

    input = input.replace(/\r/g, '');

    for (let i = 0; i < input.length; i++) {
        if (!inBackslash) {
            if (input[i] !== '\\') result.push(input[i]);else if (input[i] === '\\') inBackslash = true;
        } else {
            if (input[i] !== '\n') result.push(input[i]);

            inBackslash = false;
        }
    }

    return result.join('');
};

exports.parseDates = function (input) {
    if (!input.match(/^(\d{4}(-\d{1,2}(-\d{1,2})?)?(\s*,\s*(\d{4}|(\d{4}-)?\d{1,2}(-\d{1,2})?))*)?$/)) return null;
    if (input.trim() === '') return [];

    let dates = input.split(',').map(x => x.trim().split('-'));

    for (let i = 1; i < dates.length; i++) {
        let date = dates[i];
        let prev = dates[i - 1];

        if (date[0].length !== 4) {
            // No year

            if (date.length === 1 && prev.length === 3) {
                // Add month
                date.unshift(prev[1]);
            }

            // Add year
            date.unshift(prev[0]);
        }
    }

    return dates.map(x => x.map(y => +y));
};

exports.stringifyDates = function (dates) {
    if (dates.length === 0) return '';

    let datesCopy = [dates[0].slice()];

    for (let i = 1; i < dates.length; i++) {
        let date = dates[i];
        let prev = dates[i - 1];
        let k = 0;

        for (let j = 0; j < date.length; j++) {
            if (date[j] === prev[j] && k === j) k++;else break;
        }

        datesCopy.push(date.slice(k));
    }

    return datesCopy.map(x => x.map(y => y > 9 ? '' + y : '0' + y).join('-')).join(',');
};

exports.parseVertex = function (input) {
    if (input.length !== 2) return [-1, -1];
    return input.split('').map(x => alpha.indexOf(x));
};

exports.stringifyVertex = function ([x, y]) {
    if (Math.min(x, y) < 0 || Math.max(x, y) >= alpha.length) return '';
    return alpha[x] + alpha[y];
};

exports.parseCompressedVertices = function (input) {
    let colon = input.indexOf(':');
    if (colon < 0) return [exports.parseVertex(input)];

    let v1 = exports.parseVertex(input.slice(0, colon));
    let v2 = exports.parseVertex(input.slice(colon + 1));
    let vertices = [];

    for (let i = Math.min(v1[0], v2[0]); i <= Math.max(v1[0], v2[0]); i++) {
        for (let j = Math.min(v1[1], v2[1]); j <= Math.max(v1[1], v2[1]); j++) {
            vertices.push([i, j]);
        }
    }

    return vertices;
};

/***/ }),

/***/ "./node_modules/@sabaki/sgf/src/main.js":
/*!**********************************************!*\
  !*** ./node_modules/@sabaki/sgf/src/main.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! ./tokenize */ "./node_modules/@sabaki/sgf/src/tokenize.js");

const tokenize = _require.tokenize;

var _require2 = __webpack_require__(/*! ./parse */ "./node_modules/@sabaki/sgf/src/parse.js");

const detectEncoding = _require2.detectEncoding,
      parseTokens = _require2.parseTokens,
      parse = _require2.parse,
      parseFile = _require2.parseFile;

var _require3 = __webpack_require__(/*! ./stringify */ "./node_modules/@sabaki/sgf/src/stringify.js");

const stringify = _require3.stringify;

const helper = __webpack_require__(/*! ./helper */ "./node_modules/@sabaki/sgf/src/helper.js");

Object.assign(exports, {
    tokenize,
    detectEncoding,
    parseTokens,
    parse,
    parseFile,
    stringify
}, helper);

/***/ }),

/***/ "./node_modules/@sabaki/sgf/src/parse.js":
/*!***********************************************!*\
  !*** ./node_modules/@sabaki/sgf/src/parse.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const fs = __webpack_require__(/*! fs */ "./src/modules/shims/fs.js");
const iconv = __webpack_require__(/*! iconv-lite */ "./src/modules/shims/iconv-lite.js");
const jschardet = __webpack_require__(/*! jschardet */ "./src/modules/shims/jschardet.js");

var _require = __webpack_require__(/*! ./tokenize */ "./node_modules/@sabaki/sgf/src/tokenize.js");

const tokenize = _require.tokenize;

var _require2 = __webpack_require__(/*! ./helper */ "./node_modules/@sabaki/sgf/src/helper.js");

const unescapeString = _require2.unescapeString;

// The default encoding is defined in the SGF spec at
// http://www.red-bean.com/sgf/properties.html#CA

const defaultEncoding = 'ISO-8859-1';

exports.detectEncoding = function (tokens, { sampleLength = 100 } = {}) {
    let sampleText = '';

    for (let i = 0; i < tokens.length; i++) {
        var _tokens$i = tokens[i];
        let type = _tokens$i.type,
            value = _tokens$i.value;


        if (type === 'c_value_type') {
            sampleText += value;
            if (sampleText.length > sampleLength) break;
        } else if (type === 'prop_ident' && type === 'CA') {
            if (tokens[i + 1] && tokens[i + 1].type === 'c_value_type') {
                return unescapeString(tokens[i + 1].value.slice(1, -1));
            }
        }
    }

    let detected = jschardet.detect(sampleText);
    if (detected.confidence > 0.2) return detected.encoding;

    return null;
};

function _parseTokens(tokens, getId, onProgress, encoding, start = 0) {
    let i = start;
    let node, property, identifier;
    let tree = { id: getId(), nodes: [], subtrees: [], current: null, parent: null };

    while (i < tokens.length) {
        var _tokens$i2 = tokens[i];
        let type = _tokens$i2.type,
            value = _tokens$i2.value;


        if (type === 'parenthesis' && value === '(') break;
        if (type === 'parenthesis' && value === ')') return { tree, end: i };

        if (type === 'semicolon') {
            node = {};
            tree.nodes.push(node);
        } else if (type === 'prop_ident') {
            identifier = value.split('').filter(x => x.toUpperCase() === x).join('');

            if (identifier !== '') {
                if (!(identifier in node)) node[identifier] = [];
                property = node[identifier];
            }
        } else if (type === 'c_value_type') {
            value = unescapeString(value.slice(1, -1));

            if (encoding != null) {
                if (identifier === 'CA' && value !== encoding && iconv.encodingExists(value)) {
                    encoding = value;

                    // We may have already incorrectly parsed some values in this root node
                    // already, so we have to go back and re-parse them now.

                    for (let k in node) {
                        if (k === 'CA') continue;

                        node[k] = node[k].map(x => iconv.decode(Buffer.from(x, 'binary'), encoding));
                    }
                } else if (encoding !== defaultEncoding) {
                    value = iconv.decode(Buffer.from(value, 'binary'), encoding);
                }
            }

            property.push(value);
        } else {
            throw new Error(`Unexpected SGF token type '${type}'`);
        }

        i++;
    }

    while (i < tokens.length) {
        var _tokens$i3 = tokens[i];
        let type = _tokens$i3.type,
            value = _tokens$i3.value;


        if (type === 'parenthesis' && value === '(') {
            var _parseTokens2 = _parseTokens(tokens, getId, onProgress, encoding, i + 1);

            let subtree = _parseTokens2.tree,
                end = _parseTokens2.end;


            if (subtree.nodes.length > 0) {
                subtree.parent = tree;
                tree.current = 0;
                tree.subtrees.push(subtree);
            }

            i = end;
        } else if (type === 'parenthesis' && value === ')') {
            onProgress({ progress: i / tokens.length });
            break;
        }

        i++;
    }

    return { tree, end: i };
}

exports.parseTokens = function (tokens, { getId, onProgress = () => {}, encoding = null } = {}) {
    if (getId == null) {
        let id = 0;
        getId = () => id++;
    }

    var _parseTokens3 = _parseTokens(tokens, getId, onProgress, encoding);

    let tree = _parseTokens3.tree;

    tree.subtrees.forEach(subtree => subtree.parent = null);
    return tree.subtrees;
};

exports.parse = function (contents, options) {
    let tokens = tokenize(contents);
    return exports.parseTokens(tokens, options);
};

exports.parseFile = function (filename, { getId, onProgress, detectEncoding = true } = {}) {
    let contents = fs.readFileSync(filename, { encoding: 'binary' });
    let tokens = tokenize(contents);
    let encoding = !detectEncoding ? defaultEncoding : exports.detectEncoding(tokens) || defaultEncoding;

    return exports.parseTokens(tokens, { getId, onProgress, encoding });
};

/***/ }),

/***/ "./node_modules/@sabaki/sgf/src/stringify.js":
/*!***************************************************!*\
  !*** ./node_modules/@sabaki/sgf/src/stringify.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! ./helper */ "./node_modules/@sabaki/sgf/src/helper.js");

const escapeString = _require.escapeString;


exports.stringify = function (tree, { linebreak = '\n', level = 0 } = {}) {
    if (Array.isArray(tree)) {
        return exports.stringify({ nodes: [], subtrees: tree }, { linebreak });
    }

    let output = [];
    let indent = linebreak !== '' ? '  '.repeat(level) : '';

    for (let node of tree.nodes) {
        output.push(indent, ';');

        for (let id in node) {
            if (id.toUpperCase() !== id) continue;

            output.push(id, '[', node[id].map(escapeString).join(']['), ']');
        }

        output.push(linebreak);
    }

    if (tree.subtrees.length > 0) output.push(indent);

    for (let subtree of tree.subtrees) {
        output.push('(', linebreak, exports.stringify(subtree, { linebreak, level: level + 1 }), indent, ')');
    }

    if (tree.subtrees.length > 0) output.push(linebreak);

    return output.join('');
};

/***/ }),

/***/ "./node_modules/@sabaki/sgf/src/tokenize.js":
/*!**************************************************!*\
  !*** ./node_modules/@sabaki/sgf/src/tokenize.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.tokenize = function (contents) {
    let tokens = [];
    let pos = 0;
    let row = 0,
        col = 0;

    let rules = {
        newline: /^\n/,
        whitespace: /^[^\S\n]+/,
        parenthesis: /^(\(|\))/,
        semicolon: /^;/,
        prop_ident: /^[A-Za-z]+/,
        c_value_type: /^\[([^\\\]]|\\[^])*\]/
    };

    while (contents.length > 0) {
        let match = null;

        for (let type in rules) {
            match = rules[type].exec(contents);
            if (match == null) continue;

            let value = match[0];

            if (!['newline', 'whitespace'].includes(type)) {
                tokens.push({ type, value, row, col, pos });
            }

            // Update source position

            if (type === 'newline') {
                row++;
                col = 0;
            } else {
                col += value.length;
            }

            pos += value.length;
            contents = contents.slice(value.length);

            break;
        }

        if (match == null) throw new Error(`Unexpected SGF token at ${row + 1}:${col + 1}`);
    }

    return tokens;
};

/***/ }),

/***/ "./node_modules/bail/index.js":
/*!************************************!*\
  !*** ./node_modules/bail/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = bail;

function bail(err) {
  if (err) {
    throw err;
  }
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
})();

/***/ }),

/***/ "./node_modules/collapse-white-space/index.js":
/*!****************************************************!*\
  !*** ./node_modules/collapse-white-space/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = collapse;

/* collapse(' \t\nbar \nbaz\t'); // ' bar baz ' */
function collapse(value) {
  return String(value).replace(/\s+/g, ' ');
}

/***/ }),

/***/ "./node_modules/copy-text-to-clipboard/index.js":
/*!******************************************************!*\
  !*** ./node_modules/copy-text-to-clipboard/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = input => {
	const el = document.createElement('textarea');

	el.value = input;

	// Prevent keyboard from showing on mobile
	el.setAttribute('readonly', '');

	el.style.contain = 'strict';
	el.style.position = 'absolute';
	el.style.left = '-9999px';
	el.style.fontSize = '12pt'; // Prevent zooming on iOS

	const selection = document.getSelection();
	let originalRange = false;
	if (selection.rangeCount > 0) {
		originalRange = selection.getRangeAt(0);
	}

	document.body.appendChild(el);
	el.select();

	// Explicit selection workaround for iOS
	el.selectionStart = 0;
	el.selectionEnd = input.length;

	let success = false;
	try {
		success = document.execCommand('copy');
	} catch (err) {}

	document.body.removeChild(el);

	if (originalRange) {
		selection.removeAllRanges();
		selection.addRange(originalRange);
	}

	return success;
};

/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function (n) {
  if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function (type) {
  var er, handler, len, args, i, listeners;

  if (!this._events) this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler)) return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++) listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function (type, listener) {
  var m;

  if (!isFunction(listener)) throw TypeError('listener must be a function');

  if (!this._events) this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function (type, listener) {
  if (!isFunction(listener)) throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function (type, listener) {
  var list, position, length, i;

  if (!isFunction(listener)) throw TypeError('listener must be a function');

  if (!this._events || !this._events[type]) return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener || isFunction(list.listener) && list.listener === listener) {
    delete this._events[type];
    if (this._events.removeListener) this.emit('removeListener', type, listener);
  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener || list[i].listener && list[i].listener === listener) {
        position = i;
        break;
      }
    }

    if (position < 0) return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener) this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function (type) {
  var key, listeners;

  if (!this._events) return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0) this._events = {};else if (this._events[type]) delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length) this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function (type) {
  var ret;
  if (!this._events || !this._events[type]) ret = [];else if (isFunction(this._events[type])) ret = [this._events[type]];else ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function (type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener)) return 1;else if (evlistener) return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function (emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

/***/ }),

/***/ "./node_modules/extend/index.js":
/*!**************************************!*\
  !*** ./node_modules/extend/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) {/**/}

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || typeof target !== 'object' && typeof target !== 'function') {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = target[name];
				copy = options[name];

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[name] = extend(deep, clone, copy);

						// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						target[name] = copy;
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};

/***/ }),

/***/ "./node_modules/inherits/inherits_browser.js":
/*!***************************************************!*\
  !*** ./node_modules/inherits/inherits_browser.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    var TempCtor = function TempCtor() {};
    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  };
}

/***/ }),

/***/ "./node_modules/is-alphabetical/index.js":
/*!***********************************************!*\
  !*** ./node_modules/is-alphabetical/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = alphabetical;

/* Check if the given character code, or the character
 * code at the first character, is alphabetical. */
function alphabetical(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character;

  return code >= 97 && code <= 122 || /* a-z */code >= 65 && code <= 90 /* A-Z */
  ;
}

/***/ }),

/***/ "./node_modules/is-alphanumerical/index.js":
/*!*************************************************!*\
  !*** ./node_modules/is-alphanumerical/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabetical = __webpack_require__(/*! is-alphabetical */ "./node_modules/is-alphabetical/index.js");
var decimal = __webpack_require__(/*! is-decimal */ "./node_modules/is-decimal/index.js");

module.exports = alphanumerical;

/* Check if the given character code, or the character
 * code at the first character, is alphanumerical. */
function alphanumerical(character) {
  return alphabetical(character) || decimal(character);
}

/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
};

function isBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer(obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0));
}

/***/ }),

/***/ "./node_modules/is-decimal/index.js":
/*!******************************************!*\
  !*** ./node_modules/is-decimal/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = decimal;

/* Check if the given character code, or the character
 * code at the first character, is decimal. */
function decimal(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character;

  return code >= 48 && code <= 57; /* 0-9 */
}

/***/ }),

/***/ "./node_modules/is-hexadecimal/index.js":
/*!**********************************************!*\
  !*** ./node_modules/is-hexadecimal/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = hexadecimal;

/* Check if the given character code, or the character
 * code at the first character, is hexadecimal. */
function hexadecimal(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character;

  return code >= 97 /* a */ && code <= 102 || /* z */code >= 65 /* A */ && code <= 70 /* Z */ || code >= 48 /* A */ && code <= 57 /* Z */
  ;
}

/***/ }),

/***/ "./node_modules/is-plain-obj/index.js":
/*!********************************************!*\
  !*** ./node_modules/is-plain-obj/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toString = Object.prototype.toString;

module.exports = function (x) {
	var prototype;
	return toString.call(x) === '[object Object]' && (prototype = Object.getPrototypeOf(x), prototype === null || prototype === Object.getPrototypeOf({}));
};

/***/ }),

/***/ "./node_modules/is-whitespace-character/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/is-whitespace-character/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = whitespace;

var fromCode = String.fromCharCode;
var re = /\s/;

/* Check if the given character code, or the character
 * code at the first character, is a whitespace character. */
function whitespace(character) {
  return re.test(typeof character === 'number' ? fromCode(character) : character.charAt(0));
}

/***/ }),

/***/ "./node_modules/is-word-character/index.js":
/*!*************************************************!*\
  !*** ./node_modules/is-word-character/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = wordCharacter;

var fromCode = String.fromCharCode;
var re = /\w/;

/* Check if the given character code, or the character
 * code at the first character, is a word character. */
function wordCharacter(character) {
  return re.test(typeof character === 'number' ? fromCode(character) : character.charAt(0));
}

/***/ }),

/***/ "./node_modules/markdown-escapes/index.js":
/*!************************************************!*\
  !*** ./node_modules/markdown-escapes/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = escapes;

var defaults = ['\\', '`', '*', '{', '}', '[', ']', '(', ')', '#', '+', '-', '.', '!', '_', '>'];

var gfm = defaults.concat(['~', '|']);

var commonmark = gfm.concat(['\n', '"', '$', '%', '&', "'", ',', '/', ':', ';', '<', '=', '?', '@', '^']);

escapes.default = defaults;
escapes.gfm = gfm;
escapes.commonmark = commonmark;

/* Get markdown escapes. */
function escapes(options) {
  var settings = options || {};

  if (settings.commonmark) {
    return commonmark;
  }

  return settings.gfm ? gfm : defaults;
}

/***/ }),

/***/ "./node_modules/natsort/index.js":
/*!***************************************!*\
  !*** ./node_modules/natsort/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
 * natsort
 * https://github.com/bubkoo/natsort
 *
 * Copyright 2016 bubkoo
 * Released under the MIT license
 */

(function () {

    'use strict';

    function natsort(options) {

        options = options || {};

        var GREATER = options.desc ? -1 : 1;
        var SMALLER = -GREATER;

        var ore = /^0/;
        var sre = /\s+/g;
        var tre = /^\s+|\s+$/g;
        // unicode
        var ure = /[^\x00-\x80]/;
        // hex
        var hre = /^0x[0-9a-f]+$/i;
        // numeric
        // var nre = /(^([+\-]?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?(?=\D|\s|$))|^0x[\da-fA-F]+$|\d+)/g;
        var nre = /(0x[\da-fA-F]+|(^[\+\-]?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?(?=\D|\s|$))|\d+)/g;
        // datetime
        var dre = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/;

        var normalize = options.insensitive ? function (s) {
            return lowerCase('' + s).replace(tre, '');
        } : function (s) {
            return ('' + s).replace(tre, '');
        };

        function lowerCase(s) {
            if (s.toLocaleLowerCase) {
                return s.toLocaleLowerCase();
            }
            return s.toLowerCase();
        }

        function tokenize(s) {
            return s.replace(nre, '\0$1\0').replace(/\0$/, '').replace(/^\0/, '').split('\0');
        }

        function parse(s, l) {
            // normalize spaces; find floats not starting with '0',
            // string or 0 if not defined (Clint Priest)
            return (!s.match(ore) || l === 1) && parseFloat(s) || s.replace(sre, ' ').replace(tre, '') || 0;
        }

        return function (a, b) {

            // trim pre-post whitespace
            var x = normalize(a);
            var y = normalize(b);

            // return immediately if at least one of the values is empty.
            // - empty string < any others
            if (!x && !y) {
                return 0;
            }

            if (!x && y) {
                return SMALLER;
            }

            if (x && !y) {
                return GREATER;
            }

            // tokenize: split numeric strings and default strings
            var xArr = tokenize(x);
            var yArr = tokenize(y);

            // hex or date detection
            var xD = parseInt(x.match(hre), 16) || xArr.length !== 1 && Date.parse(x);
            var yD = parseInt(y.match(hre), 16) || xD && y.match(dre) && Date.parse(y) || null;

            // try and sort Hex codes or Dates
            if (yD) {
                if (xD < yD) {
                    return SMALLER;
                } else if (xD > yD) {
                    return GREATER;
                }
            }

            //console.log('x: ' + xArr.join('@'));
            //console.log('y: ' + yArr.join('@'));

            var xL = xArr.length;
            var yL = yArr.length;

            // handle numeric strings and default strings
            for (var i = 0, l = Math.max(xL, yL); i < l; i++) {

                var xF = parse(xArr[i] || '', xL);
                var yF = parse(yArr[i] || '', yL);

                //console.log('xF: ' + xF);
                //console.log('yF: ' + yF);

                // handle numeric vs string comparison
                // - numeric < string - (Kyle Adams)
                if (isNaN(xF) !== isNaN(yF)) {
                    return isNaN(xF) ? GREATER : SMALLER;
                }

                // if unicode use locale comparison
                if (ure.test(xF + yF) && xF.localeCompare) {
                    var comp = xF.localeCompare(yF);

                    if (comp > 0) {
                        return GREATER;
                    } else if (comp < 0) {
                        return SMALLER;
                    } else {
                        if (i === l - 1) {
                            return 0;
                        } else {
                            continue;
                        }
                    }
                }

                if (xF < yF) {
                    return SMALLER;
                } else if (xF > yF) {
                    return GREATER;
                }
            }

            return 0;
        };
    }

    // exports
    // -------

    /*global module:true, define: true, window: true */

    if (true) {
        module.exports = natsort;
    } else {}
})();

/***/ }),

/***/ "./node_modules/parse-entities/index.js":
/*!**********************************************!*\
  !*** ./node_modules/parse-entities/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var characterEntities = __webpack_require__(/*! character-entities */ "./src/modules/shims/empty.js");
var legacy = __webpack_require__(/*! character-entities-legacy */ "./src/modules/shims/empty.js");
var invalid = __webpack_require__(/*! character-reference-invalid */ "./src/modules/shims/empty.js");
var decimal = __webpack_require__(/*! is-decimal */ "./node_modules/is-decimal/index.js");
var hexadecimal = __webpack_require__(/*! is-hexadecimal */ "./node_modules/is-hexadecimal/index.js");
var alphanumerical = __webpack_require__(/*! is-alphanumerical */ "./node_modules/is-alphanumerical/index.js");

module.exports = parseEntities;

var own = {}.hasOwnProperty;
var fromCharCode = String.fromCharCode;
var noop = Function.prototype;

/* Default settings. */
var defaults = {
  warning: null,
  reference: null,
  text: null,
  warningContext: null,
  referenceContext: null,
  textContext: null,
  position: {},
  additional: null,
  attribute: false,
  nonTerminated: true

  /* Reference types. */
};var NAMED = 'named';
var HEXADECIMAL = 'hexadecimal';
var DECIMAL = 'decimal';

/* Map of bases. */
var BASE = {};

BASE[HEXADECIMAL] = 16;
BASE[DECIMAL] = 10;

/* Map of types to tests. Each type of character reference
 * accepts different characters. This test is used to
 * detect whether a reference has ended (as the semicolon
 * is not strictly needed). */
var TESTS = {};

TESTS[NAMED] = alphanumerical;
TESTS[DECIMAL] = decimal;
TESTS[HEXADECIMAL] = hexadecimal;

/* Warning messages. */
var NAMED_NOT_TERMINATED = 1;
var NUMERIC_NOT_TERMINATED = 2;
var NAMED_EMPTY = 3;
var NUMERIC_EMPTY = 4;
var NAMED_UNKNOWN = 5;
var NUMERIC_DISALLOWED = 6;
var NUMERIC_PROHIBITED = 7;

var MESSAGES = {};

MESSAGES[NAMED_NOT_TERMINATED] = 'Named character references must be terminated by a semicolon';
MESSAGES[NUMERIC_NOT_TERMINATED] = 'Numeric character references must be terminated by a semicolon';
MESSAGES[NAMED_EMPTY] = 'Named character references cannot be empty';
MESSAGES[NUMERIC_EMPTY] = 'Numeric character references cannot be empty';
MESSAGES[NAMED_UNKNOWN] = 'Named character references must be known';
MESSAGES[NUMERIC_DISALLOWED] = 'Numeric character references cannot be disallowed';
MESSAGES[NUMERIC_PROHIBITED] = 'Numeric character references cannot be outside the permissible Unicode range';

/* Wrap to ensure clean parameters are given to `parse`. */
function parseEntities(value, options) {
  var settings = {};
  var option;
  var key;

  if (!options) {
    options = {};
  }

  for (key in defaults) {
    option = options[key];
    settings[key] = option === null || option === undefined ? defaults[key] : option;
  }

  if (settings.position.indent || settings.position.start) {
    settings.indent = settings.position.indent || [];
    settings.position = settings.position.start;
  }

  return parse(value, settings);
}

/* Parse entities. */
function parse(value, settings) {
  var additional = settings.additional;
  var nonTerminated = settings.nonTerminated;
  var handleText = settings.text;
  var handleReference = settings.reference;
  var handleWarning = settings.warning;
  var textContext = settings.textContext;
  var referenceContext = settings.referenceContext;
  var warningContext = settings.warningContext;
  var pos = settings.position;
  var indent = settings.indent || [];
  var length = value.length;
  var index = 0;
  var lines = -1;
  var column = pos.column || 1;
  var line = pos.line || 1;
  var queue = '';
  var result = [];
  var entityCharacters;
  var terminated;
  var characters;
  var character;
  var reference;
  var following;
  var warning;
  var reason;
  var output;
  var entity;
  var begin;
  var start;
  var type;
  var test;
  var prev;
  var next;
  var diff;
  var end;

  /* Cache the current point. */
  prev = now();

  /* Wrap `handleWarning`. */
  warning = handleWarning ? parseError : noop;

  /* Ensure the algorithm walks over the first character
   * and the end (inclusive). */
  index--;
  length++;

  while (++index < length) {
    /* If the previous character was a newline. */
    if (character === '\n') {
      column = indent[lines] || 1;
    }

    character = at(index);

    /* Handle anything other than an ampersand,
     * including newlines and EOF. */
    if (character !== '&') {
      if (character === '\n') {
        line++;
        lines++;
        column = 0;
      }

      if (character) {
        queue += character;
        column++;
      } else {
        flush();
      }
    } else {
      following = at(index + 1);

      /* The behaviour depends on the identity of the next
       * character. */
      if (following === '\t' /* Tab */ || following === '\n' /* Newline */ || following === '\f' /* Form feed */ || following === ' ' /* Space */ || following === '<' /* Less-than */ || following === '&' /* Ampersand */ || following === '' || additional && following === additional) {
        /* Not a character reference. No characters
         * are consumed, and nothing is returned.
         * This is not an error, either. */
        queue += character;
        column++;

        continue;
      }

      start = index + 1;
      begin = start;
      end = start;

      /* Numerical entity. */
      if (following !== '#') {
        type = NAMED;
      } else {
        end = ++begin;

        /* The behaviour further depends on the
         * character after the U+0023 NUMBER SIGN. */
        following = at(end);

        if (following === 'x' || following === 'X') {
          /* ASCII hex digits. */
          type = HEXADECIMAL;
          end = ++begin;
        } else {
          /* ASCII digits. */
          type = DECIMAL;
        }
      }

      entityCharacters = '';
      entity = '';
      characters = '';
      test = TESTS[type];
      end--;

      while (++end < length) {
        following = at(end);

        if (!test(following)) {
          break;
        }

        characters += following;

        /* Check if we can match a legacy named
         * reference.  If so, we cache that as the
         * last viable named reference.  This
         * ensures we do not need to walk backwards
         * later. */
        if (type === NAMED && own.call(legacy, characters)) {
          entityCharacters = characters;
          entity = legacy[characters];
        }
      }

      terminated = at(end) === ';';

      if (terminated) {
        end++;

        if (type === NAMED && own.call(characterEntities, characters)) {
          entityCharacters = characters;
          entity = characterEntities[characters];
        }
      }

      diff = 1 + end - start;

      if (!terminated && !nonTerminated) {
        /* Empty. */
      } else if (!characters) {
        /* An empty (possible) entity is valid, unless
         * its numeric (thus an ampersand followed by
         * an octothorp). */
        if (type !== NAMED) {
          warning(NUMERIC_EMPTY, diff);
        }
      } else if (type === NAMED) {
        /* An ampersand followed by anything
         * unknown, and not terminated, is invalid. */
        if (terminated && !entity) {
          warning(NAMED_UNKNOWN, 1);
        } else {
          /* If theres something after an entity
           * name which is not known, cap the
           * reference. */
          if (entityCharacters !== characters) {
            end = begin + entityCharacters.length;
            diff = 1 + end - begin;
            terminated = false;
          }

          /* If the reference is not terminated,
           * warn. */
          if (!terminated) {
            reason = entityCharacters ? NAMED_NOT_TERMINATED : NAMED_EMPTY;

            if (!settings.attribute) {
              warning(reason, diff);
            } else {
              following = at(end);

              if (following === '=') {
                warning(reason, diff);
                entity = null;
              } else if (alphanumerical(following)) {
                entity = null;
              } else {
                warning(reason, diff);
              }
            }
          }
        }

        reference = entity;
      } else {
        if (!terminated) {
          /* All non-terminated numeric entities are
           * not rendered, and trigger a warning. */
          warning(NUMERIC_NOT_TERMINATED, diff);
        }

        /* When terminated and number, parse as
         * either hexadecimal or decimal. */
        reference = parseInt(characters, BASE[type]);

        /* Trigger a warning when the parsed number
         * is prohibited, and replace with
         * replacement character. */
        if (prohibited(reference)) {
          warning(NUMERIC_PROHIBITED, diff);
          reference = '\uFFFD';
        } else if (reference in invalid) {
          /* Trigger a warning when the parsed number
           * is disallowed, and replace by an
           * alternative. */
          warning(NUMERIC_DISALLOWED, diff);
          reference = invalid[reference];
        } else {
          /* Parse the number. */
          output = '';

          /* Trigger a warning when the parsed
           * number should not be used. */
          if (disallowed(reference)) {
            warning(NUMERIC_DISALLOWED, diff);
          }

          /* Stringify the number. */
          if (reference > 0xffff) {
            reference -= 0x10000;
            output += fromCharCode(reference >>> (10 & 0x3ff) | 0xd800);
            reference = 0xdc00 | reference & 0x3ff;
          }

          reference = output + fromCharCode(reference);
        }
      }

      /* If we could not find a reference, queue the
       * checked characters (as normal characters),
       * and move the pointer to their end. This is
       * possible because we can be certain neither
       * newlines nor ampersands are included. */
      if (!reference) {
        characters = value.slice(start - 1, end);
        queue += characters;
        column += characters.length;
        index = end - 1;
      } else {
        /* Found it! First eat the queued
         * characters as normal text, then eat
         * an entity. */
        flush();

        prev = now();
        index = end - 1;
        column += end - start + 1;
        result.push(reference);
        next = now();
        next.offset++;

        if (handleReference) {
          handleReference.call(referenceContext, reference, { start: prev, end: next }, value.slice(start - 1, end));
        }

        prev = next;
      }
    }
  }

  /* Return the reduced nodes, and any possible warnings. */
  return result.join('');

  /* Get current position. */
  function now() {
    return {
      line: line,
      column: column,
      offset: index + (pos.offset || 0)
    };
  }

  /* “Throw” a parse-error: a warning. */
  function parseError(code, offset) {
    var position = now();

    position.column += offset;
    position.offset += offset;

    handleWarning.call(warningContext, MESSAGES[code], position, code);
  }

  /* Get character at position. */
  function at(position) {
    return value.charAt(position);
  }

  /* Flush `queue` (normal text). Macro invoked before
   * each entity and at the end of `value`.
   * Does nothing when `queue` is empty. */
  function flush() {
    if (queue) {
      result.push(queue);

      if (handleText) {
        handleText.call(textContext, queue, { start: prev, end: now() });
      }

      queue = '';
    }
  }
}

/* Check if `character` is outside the permissible unicode range. */
function prohibited(code) {
  return code >= 0xd800 && code <= 0xdfff || code > 0x10ffff;
}

/* Check if `character` is disallowed. */
function disallowed(code) {
  return code >= 0x0001 && code <= 0x0008 || code === 0x000b || code >= 0x000d && code <= 0x001f || code >= 0x007f && code <= 0x009f || code >= 0xfdd0 && code <= 0xfdef || (code & 0xffff) === 0xffff || (code & 0xffff) === 0xfffe;
}

/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function splitPath(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function () {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = i >= 0 ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function (p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function (path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function (p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function (path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function () {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function (p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};

// path.relative(from, to)
// posix version
exports.relative = function (from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};

exports.basename = function (path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  return splitPath(path)[3];
};

function filter(xs, f) {
  if (xs.filter) return xs.filter(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    if (f(xs[i], i, xs)) res.push(xs[i]);
  }
  return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b' ? function (str, start, len) {
  return str.substr(start, len);
} : function (str, start, len) {
  if (start < 0) start = str.length + start;
  return str.substr(start, len);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/pikaday/pikaday.js":
/*!*****************************************!*\
  !*** ./node_modules/pikaday/pikaday.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Pikaday
 *
 * Copyright © 2014 David Bushell | BSD & MIT license | https://github.com/dbushell/Pikaday
 */

(function (root, factory) {
    'use strict';

    var moment;
    if (true) {
        // CommonJS module
        // Load moment.js as an optional dependency
        try {
            moment = __webpack_require__(/*! moment */ "./src/modules/shims/empty.js");
        } catch (e) {}
        module.exports = factory(moment);
    } else {}
})(this, function (moment) {
    'use strict';

    /**
     * feature detection and helper functions
     */

    var hasMoment = typeof moment === 'function',
        hasEventListeners = !!window.addEventListener,
        document = window.document,
        sto = window.setTimeout,
        addEvent = function addEvent(el, e, callback, capture) {
        if (hasEventListeners) {
            el.addEventListener(e, callback, !!capture);
        } else {
            el.attachEvent('on' + e, callback);
        }
    },
        removeEvent = function removeEvent(el, e, callback, capture) {
        if (hasEventListeners) {
            el.removeEventListener(e, callback, !!capture);
        } else {
            el.detachEvent('on' + e, callback);
        }
    },
        trim = function trim(str) {
        return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
    },
        hasClass = function hasClass(el, cn) {
        return (' ' + el.className + ' ').indexOf(' ' + cn + ' ') !== -1;
    },
        addClass = function addClass(el, cn) {
        if (!hasClass(el, cn)) {
            el.className = el.className === '' ? cn : el.className + ' ' + cn;
        }
    },
        removeClass = function removeClass(el, cn) {
        el.className = trim((' ' + el.className + ' ').replace(' ' + cn + ' ', ' '));
    },
        isArray = function isArray(obj) {
        return (/Array/.test(Object.prototype.toString.call(obj))
        );
    },
        isDate = function isDate(obj) {
        return (/Date/.test(Object.prototype.toString.call(obj)) && !isNaN(obj.getTime())
        );
    },
        isWeekend = function isWeekend(date) {
        var day = date.getDay();
        return day === 0 || day === 6;
    },
        isLeapYear = function isLeapYear(year) {
        // solution by Matti Virkkunen: http://stackoverflow.com/a/4881951
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    },
        getDaysInMonth = function getDaysInMonth(year, month) {
        return [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
    },
        setToStartOfDay = function setToStartOfDay(date) {
        if (isDate(date)) date.setHours(0, 0, 0, 0);
    },
        compareDates = function compareDates(a, b) {
        // weak date comparison (use setToStartOfDay(date) to ensure correct result)
        return a.getTime() === b.getTime();
    },
        extend = function extend(to, from, overwrite) {
        var prop, hasProp;
        for (prop in from) {
            hasProp = to[prop] !== undefined;
            if (hasProp && typeof from[prop] === 'object' && from[prop] !== null && from[prop].nodeName === undefined) {
                if (isDate(from[prop])) {
                    if (overwrite) {
                        to[prop] = new Date(from[prop].getTime());
                    }
                } else if (isArray(from[prop])) {
                    if (overwrite) {
                        to[prop] = from[prop].slice(0);
                    }
                } else {
                    to[prop] = extend({}, from[prop], overwrite);
                }
            } else if (overwrite || !hasProp) {
                to[prop] = from[prop];
            }
        }
        return to;
    },
        fireEvent = function fireEvent(el, eventName, data) {
        var ev;

        if (document.createEvent) {
            ev = document.createEvent('HTMLEvents');
            ev.initEvent(eventName, true, false);
            ev = extend(ev, data);
            el.dispatchEvent(ev);
        } else if (document.createEventObject) {
            ev = document.createEventObject();
            ev = extend(ev, data);
            el.fireEvent('on' + eventName, ev);
        }
    },
        adjustCalendar = function adjustCalendar(calendar) {
        if (calendar.month < 0) {
            calendar.year -= Math.ceil(Math.abs(calendar.month) / 12);
            calendar.month += 12;
        }
        if (calendar.month > 11) {
            calendar.year += Math.floor(Math.abs(calendar.month) / 12);
            calendar.month -= 12;
        }
        return calendar;
    },


    /**
     * defaults and localisation
     */
    defaults = {

        // bind the picker to a form field
        field: null,

        // automatically show/hide the picker on `field` focus (default `true` if `field` is set)
        bound: undefined,

        // position of the datepicker, relative to the field (default to bottom & left)
        // ('bottom' & 'left' keywords are not used, 'top' & 'right' are modifier on the bottom/left position)
        position: 'bottom left',

        // automatically fit in the viewport even if it means repositioning from the position option
        reposition: true,

        // the default output format for `.toString()` and `field` value
        format: 'YYYY-MM-DD',

        // the toString function which gets passed a current date object and format
        // and returns a string
        toString: null,

        // used to create date object from current input string
        parse: null,

        // the initial date to view when first opened
        defaultDate: null,

        // make the `defaultDate` the initial selected value
        setDefaultDate: false,

        // first day of week (0: Sunday, 1: Monday etc)
        firstDay: 0,

        // the default flag for moment's strict date parsing
        formatStrict: false,

        // the minimum/earliest date that can be selected
        minDate: null,
        // the maximum/latest date that can be selected
        maxDate: null,

        // number of years either side, or array of upper/lower range
        yearRange: 10,

        // show week numbers at head of row
        showWeekNumber: false,

        // Week picker mode
        pickWholeWeek: false,

        // used internally (don't config outside)
        minYear: 0,
        maxYear: 9999,
        minMonth: undefined,
        maxMonth: undefined,

        startRange: null,
        endRange: null,

        isRTL: false,

        // Additional text to append to the year in the calendar title
        yearSuffix: '',

        // Render the month after year in the calendar title
        showMonthAfterYear: false,

        // Render days of the calendar grid that fall in the next or previous month
        showDaysInNextAndPreviousMonths: false,

        // Allows user to select days that fall in the next or previous month
        enableSelectionDaysInNextAndPreviousMonths: false,

        // how many months are visible
        numberOfMonths: 1,

        // when numberOfMonths is used, this will help you to choose where the main calendar will be (default `left`, can be set to `right`)
        // only used for the first display or when a selected date is not visible
        mainCalendar: 'left',

        // Specify a DOM element to render the calendar in
        container: undefined,

        // Blur field when date is selected
        blurFieldOnSelect: true,

        // internationalization
        i18n: {
            previousMonth: 'Previous Month',
            nextMonth: 'Next Month',
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        },

        // Theme Classname
        theme: null,

        // events array
        events: [],

        // callback function
        onSelect: null,
        onOpen: null,
        onClose: null,
        onDraw: null,

        // Enable keyboard input
        keyboardInput: true
    },


    /**
     * templating functions to abstract HTML rendering
     */
    renderDayName = function renderDayName(opts, day, abbr) {
        day += opts.firstDay;
        while (day >= 7) {
            day -= 7;
        }
        return abbr ? opts.i18n.weekdaysShort[day] : opts.i18n.weekdays[day];
    },
        renderDay = function renderDay(opts) {
        var arr = [];
        var ariaSelected = 'false';
        if (opts.isEmpty) {
            if (opts.showDaysInNextAndPreviousMonths) {
                arr.push('is-outside-current-month');

                if (!opts.enableSelectionDaysInNextAndPreviousMonths) {
                    arr.push('is-selection-disabled');
                }
            } else {
                return '<td class="is-empty"></td>';
            }
        }
        if (opts.isDisabled) {
            arr.push('is-disabled');
        }
        if (opts.isToday) {
            arr.push('is-today');
        }
        if (opts.isSelected) {
            arr.push('is-selected');
            ariaSelected = 'true';
        }
        if (opts.hasEvent) {
            arr.push('has-event');
        }
        if (opts.isInRange) {
            arr.push('is-inrange');
        }
        if (opts.isStartRange) {
            arr.push('is-startrange');
        }
        if (opts.isEndRange) {
            arr.push('is-endrange');
        }
        return '<td data-day="' + opts.day + '" class="' + arr.join(' ') + '" aria-selected="' + ariaSelected + '">' + '<button class="pika-button pika-day" type="button" ' + 'data-pika-year="' + opts.year + '" data-pika-month="' + opts.month + '" data-pika-day="' + opts.day + '">' + opts.day + '</button>' + '</td>';
    },
        renderWeek = function renderWeek(d, m, y) {
        // Lifted from http://javascript.about.com/library/blweekyear.htm, lightly modified.
        var onejan = new Date(y, 0, 1),
            weekNum = Math.ceil(((new Date(y, m, d) - onejan) / 86400000 + onejan.getDay() + 1) / 7);
        return '<td class="pika-week">' + weekNum + '</td>';
    },
        renderRow = function renderRow(days, isRTL, pickWholeWeek, isRowSelected) {
        return '<tr class="pika-row' + (pickWholeWeek ? ' pick-whole-week' : '') + (isRowSelected ? ' is-selected' : '') + '">' + (isRTL ? days.reverse() : days).join('') + '</tr>';
    },
        renderBody = function renderBody(rows) {
        return '<tbody>' + rows.join('') + '</tbody>';
    },
        renderHead = function renderHead(opts) {
        var i,
            arr = [];
        if (opts.showWeekNumber) {
            arr.push('<th></th>');
        }
        for (i = 0; i < 7; i++) {
            arr.push('<th scope="col"><abbr title="' + renderDayName(opts, i) + '">' + renderDayName(opts, i, true) + '</abbr></th>');
        }
        return '<thead><tr>' + (opts.isRTL ? arr.reverse() : arr).join('') + '</tr></thead>';
    },
        renderTitle = function renderTitle(instance, c, year, month, refYear, randId) {
        var i,
            j,
            arr,
            opts = instance._o,
            isMinYear = year === opts.minYear,
            isMaxYear = year === opts.maxYear,
            html = '<div id="' + randId + '" class="pika-title" role="heading" aria-live="assertive">',
            monthHtml,
            yearHtml,
            prev = true,
            next = true;

        for (arr = [], i = 0; i < 12; i++) {
            arr.push('<option value="' + (year === refYear ? i - c : 12 + i - c) + '"' + (i === month ? ' selected="selected"' : '') + (isMinYear && i < opts.minMonth || isMaxYear && i > opts.maxMonth ? 'disabled="disabled"' : '') + '>' + opts.i18n.months[i] + '</option>');
        }

        monthHtml = '<div class="pika-label">' + opts.i18n.months[month] + '<select class="pika-select pika-select-month" tabindex="-1">' + arr.join('') + '</select></div>';

        if (isArray(opts.yearRange)) {
            i = opts.yearRange[0];
            j = opts.yearRange[1] + 1;
        } else {
            i = year - opts.yearRange;
            j = 1 + year + opts.yearRange;
        }

        for (arr = []; i < j && i <= opts.maxYear; i++) {
            if (i >= opts.minYear) {
                arr.push('<option value="' + i + '"' + (i === year ? ' selected="selected"' : '') + '>' + i + '</option>');
            }
        }
        yearHtml = '<div class="pika-label">' + year + opts.yearSuffix + '<select class="pika-select pika-select-year" tabindex="-1">' + arr.join('') + '</select></div>';

        if (opts.showMonthAfterYear) {
            html += yearHtml + monthHtml;
        } else {
            html += monthHtml + yearHtml;
        }

        if (isMinYear && (month === 0 || opts.minMonth >= month)) {
            prev = false;
        }

        if (isMaxYear && (month === 11 || opts.maxMonth <= month)) {
            next = false;
        }

        if (c === 0) {
            html += '<button class="pika-prev' + (prev ? '' : ' is-disabled') + '" type="button">' + opts.i18n.previousMonth + '</button>';
        }
        if (c === instance._o.numberOfMonths - 1) {
            html += '<button class="pika-next' + (next ? '' : ' is-disabled') + '" type="button">' + opts.i18n.nextMonth + '</button>';
        }

        return html += '</div>';
    },
        renderTable = function renderTable(opts, data, randId) {
        return '<table cellpadding="0" cellspacing="0" class="pika-table" role="grid" aria-labelledby="' + randId + '">' + renderHead(opts) + renderBody(data) + '</table>';
    },


    /**
     * Pikaday constructor
     */
    Pikaday = function Pikaday(options) {
        var self = this,
            opts = self.config(options);

        self._onMouseDown = function (e) {
            if (!self._v) {
                return;
            }
            e = e || window.event;
            var target = e.target || e.srcElement;
            if (!target) {
                return;
            }

            if (!hasClass(target, 'is-disabled')) {
                if (hasClass(target, 'pika-button') && !hasClass(target, 'is-empty') && !hasClass(target.parentNode, 'is-disabled')) {
                    self.setDate(new Date(target.getAttribute('data-pika-year'), target.getAttribute('data-pika-month'), target.getAttribute('data-pika-day')));
                    if (opts.bound) {
                        sto(function () {
                            self.hide();
                            if (opts.blurFieldOnSelect && opts.field) {
                                opts.field.blur();
                            }
                        }, 100);
                    }
                } else if (hasClass(target, 'pika-prev')) {
                    self.prevMonth();
                } else if (hasClass(target, 'pika-next')) {
                    self.nextMonth();
                }
            }
            if (!hasClass(target, 'pika-select')) {
                // if this is touch event prevent mouse events emulation
                if (e.preventDefault) {
                    e.preventDefault();
                } else {
                    e.returnValue = false;
                    return false;
                }
            } else {
                self._c = true;
            }
        };

        self._onChange = function (e) {
            e = e || window.event;
            var target = e.target || e.srcElement;
            if (!target) {
                return;
            }
            if (hasClass(target, 'pika-select-month')) {
                self.gotoMonth(target.value);
            } else if (hasClass(target, 'pika-select-year')) {
                self.gotoYear(target.value);
            }
        };

        self._onKeyChange = function (e) {
            e = e || window.event;

            if (self.isVisible()) {

                switch (e.keyCode) {
                    case 13:
                    case 27:
                        if (opts.field) {
                            opts.field.blur();
                        }
                        break;
                    case 37:
                        e.preventDefault();
                        self.adjustDate('subtract', 1);
                        break;
                    case 38:
                        self.adjustDate('subtract', 7);
                        break;
                    case 39:
                        self.adjustDate('add', 1);
                        break;
                    case 40:
                        self.adjustDate('add', 7);
                        break;
                }
            }
        };

        self._onInputChange = function (e) {
            var date;

            if (e.firedBy === self) {
                return;
            }
            if (opts.parse) {
                date = opts.parse(opts.field.value, opts.format);
            } else if (hasMoment) {
                date = moment(opts.field.value, opts.format, opts.formatStrict);
                date = date && date.isValid() ? date.toDate() : null;
            } else {
                date = new Date(Date.parse(opts.field.value));
            }
            if (isDate(date)) {
                self.setDate(date);
            }
            if (!self._v) {
                self.show();
            }
        };

        self._onInputFocus = function () {
            self.show();
        };

        self._onInputClick = function () {
            self.show();
        };

        self._onInputBlur = function () {
            // IE allows pika div to gain focus; catch blur the input field
            var pEl = document.activeElement;
            do {
                if (hasClass(pEl, 'pika-single')) {
                    return;
                }
            } while (pEl = pEl.parentNode);

            if (!self._c) {
                self._b = sto(function () {
                    self.hide();
                }, 50);
            }
            self._c = false;
        };

        self._onClick = function (e) {
            e = e || window.event;
            var target = e.target || e.srcElement,
                pEl = target;
            if (!target) {
                return;
            }
            if (!hasEventListeners && hasClass(target, 'pika-select')) {
                if (!target.onchange) {
                    target.setAttribute('onchange', 'return;');
                    addEvent(target, 'change', self._onChange);
                }
            }
            do {
                if (hasClass(pEl, 'pika-single') || pEl === opts.trigger) {
                    return;
                }
            } while (pEl = pEl.parentNode);
            if (self._v && target !== opts.trigger && pEl !== opts.trigger) {
                self.hide();
            }
        };

        self.el = document.createElement('div');
        self.el.className = 'pika-single' + (opts.isRTL ? ' is-rtl' : '') + (opts.theme ? ' ' + opts.theme : '');

        addEvent(self.el, 'mousedown', self._onMouseDown, true);
        addEvent(self.el, 'touchend', self._onMouseDown, true);
        addEvent(self.el, 'change', self._onChange);

        if (opts.keyboardInput) {
            addEvent(document, 'keydown', self._onKeyChange);
        }

        if (opts.field) {
            if (opts.container) {
                opts.container.appendChild(self.el);
            } else if (opts.bound) {
                document.body.appendChild(self.el);
            } else {
                opts.field.parentNode.insertBefore(self.el, opts.field.nextSibling);
            }
            addEvent(opts.field, 'change', self._onInputChange);

            if (!opts.defaultDate) {
                if (hasMoment && opts.field.value) {
                    opts.defaultDate = moment(opts.field.value, opts.format).toDate();
                } else {
                    opts.defaultDate = new Date(Date.parse(opts.field.value));
                }
                opts.setDefaultDate = true;
            }
        }

        var defDate = opts.defaultDate;

        if (isDate(defDate)) {
            if (opts.setDefaultDate) {
                self.setDate(defDate, true);
            } else {
                self.gotoDate(defDate);
            }
        } else {
            self.gotoDate(new Date());
        }

        if (opts.bound) {
            this.hide();
            self.el.className += ' is-bound';
            addEvent(opts.trigger, 'click', self._onInputClick);
            addEvent(opts.trigger, 'focus', self._onInputFocus);
            addEvent(opts.trigger, 'blur', self._onInputBlur);
        } else {
            this.show();
        }
    };

    /**
     * public Pikaday API
     */
    Pikaday.prototype = {

        /**
         * configure functionality
         */
        config: function config(options) {
            if (!this._o) {
                this._o = extend({}, defaults, true);
            }

            var opts = extend(this._o, options, true);

            opts.isRTL = !!opts.isRTL;

            opts.field = opts.field && opts.field.nodeName ? opts.field : null;

            opts.theme = typeof opts.theme === 'string' && opts.theme ? opts.theme : null;

            opts.bound = !!(opts.bound !== undefined ? opts.field && opts.bound : opts.field);

            opts.trigger = opts.trigger && opts.trigger.nodeName ? opts.trigger : opts.field;

            opts.disableWeekends = !!opts.disableWeekends;

            opts.disableDayFn = typeof opts.disableDayFn === 'function' ? opts.disableDayFn : null;

            var nom = parseInt(opts.numberOfMonths, 10) || 1;
            opts.numberOfMonths = nom > 4 ? 4 : nom;

            if (!isDate(opts.minDate)) {
                opts.minDate = false;
            }
            if (!isDate(opts.maxDate)) {
                opts.maxDate = false;
            }
            if (opts.minDate && opts.maxDate && opts.maxDate < opts.minDate) {
                opts.maxDate = opts.minDate = false;
            }
            if (opts.minDate) {
                this.setMinDate(opts.minDate);
            }
            if (opts.maxDate) {
                this.setMaxDate(opts.maxDate);
            }

            if (isArray(opts.yearRange)) {
                var fallback = new Date().getFullYear() - 10;
                opts.yearRange[0] = parseInt(opts.yearRange[0], 10) || fallback;
                opts.yearRange[1] = parseInt(opts.yearRange[1], 10) || fallback;
            } else {
                opts.yearRange = Math.abs(parseInt(opts.yearRange, 10)) || defaults.yearRange;
                if (opts.yearRange > 100) {
                    opts.yearRange = 100;
                }
            }

            return opts;
        },

        /**
         * return a formatted string of the current selection (using Moment.js if available)
         */
        toString: function toString(format) {
            format = format || this._o.format;
            if (!isDate(this._d)) {
                return '';
            }
            if (this._o.toString) {
                return this._o.toString(this._d, format);
            }
            if (hasMoment) {
                return moment(this._d).format(format);
            }
            return this._d.toDateString();
        },

        /**
         * return a Moment.js object of the current selection (if available)
         */
        getMoment: function getMoment() {
            return hasMoment ? moment(this._d) : null;
        },

        /**
         * set the current selection from a Moment.js object (if available)
         */
        setMoment: function setMoment(date, preventOnSelect) {
            if (hasMoment && moment.isMoment(date)) {
                this.setDate(date.toDate(), preventOnSelect);
            }
        },

        /**
         * return a Date object of the current selection
         */
        getDate: function getDate() {
            return isDate(this._d) ? new Date(this._d.getTime()) : null;
        },

        /**
         * set the current selection
         */
        setDate: function setDate(date, preventOnSelect) {
            if (!date) {
                this._d = null;

                if (this._o.field) {
                    this._o.field.value = '';
                    fireEvent(this._o.field, 'change', { firedBy: this });
                }

                return this.draw();
            }
            if (typeof date === 'string') {
                date = new Date(Date.parse(date));
            }
            if (!isDate(date)) {
                return;
            }

            var min = this._o.minDate,
                max = this._o.maxDate;

            if (isDate(min) && date < min) {
                date = min;
            } else if (isDate(max) && date > max) {
                date = max;
            }

            this._d = new Date(date.getTime());
            setToStartOfDay(this._d);
            this.gotoDate(this._d);

            if (this._o.field) {
                this._o.field.value = this.toString();
                fireEvent(this._o.field, 'change', { firedBy: this });
            }
            if (!preventOnSelect && typeof this._o.onSelect === 'function') {
                this._o.onSelect.call(this, this.getDate());
            }
        },

        /**
         * change view to a specific date
         */
        gotoDate: function gotoDate(date) {
            var newCalendar = true;

            if (!isDate(date)) {
                return;
            }

            if (this.calendars) {
                var firstVisibleDate = new Date(this.calendars[0].year, this.calendars[0].month, 1),
                    lastVisibleDate = new Date(this.calendars[this.calendars.length - 1].year, this.calendars[this.calendars.length - 1].month, 1),
                    visibleDate = date.getTime();
                // get the end of the month
                lastVisibleDate.setMonth(lastVisibleDate.getMonth() + 1);
                lastVisibleDate.setDate(lastVisibleDate.getDate() - 1);
                newCalendar = visibleDate < firstVisibleDate.getTime() || lastVisibleDate.getTime() < visibleDate;
            }

            if (newCalendar) {
                this.calendars = [{
                    month: date.getMonth(),
                    year: date.getFullYear()
                }];
                if (this._o.mainCalendar === 'right') {
                    this.calendars[0].month += 1 - this._o.numberOfMonths;
                }
            }

            this.adjustCalendars();
        },

        adjustDate: function adjustDate(sign, days) {

            var day = this.getDate() || new Date();
            var difference = parseInt(days) * 24 * 60 * 60 * 1000;

            var newDay;

            if (sign === 'add') {
                newDay = new Date(day.valueOf() + difference);
            } else if (sign === 'subtract') {
                newDay = new Date(day.valueOf() - difference);
            }

            this.setDate(newDay);
        },

        adjustCalendars: function adjustCalendars() {
            this.calendars[0] = adjustCalendar(this.calendars[0]);
            for (var c = 1; c < this._o.numberOfMonths; c++) {
                this.calendars[c] = adjustCalendar({
                    month: this.calendars[0].month + c,
                    year: this.calendars[0].year
                });
            }
            this.draw();
        },

        gotoToday: function gotoToday() {
            this.gotoDate(new Date());
        },

        /**
         * change view to a specific month (zero-index, e.g. 0: January)
         */
        gotoMonth: function gotoMonth(month) {
            if (!isNaN(month)) {
                this.calendars[0].month = parseInt(month, 10);
                this.adjustCalendars();
            }
        },

        nextMonth: function nextMonth() {
            this.calendars[0].month++;
            this.adjustCalendars();
        },

        prevMonth: function prevMonth() {
            this.calendars[0].month--;
            this.adjustCalendars();
        },

        /**
         * change view to a specific full year (e.g. "2012")
         */
        gotoYear: function gotoYear(year) {
            if (!isNaN(year)) {
                this.calendars[0].year = parseInt(year, 10);
                this.adjustCalendars();
            }
        },

        /**
         * change the minDate
         */
        setMinDate: function setMinDate(value) {
            if (value instanceof Date) {
                setToStartOfDay(value);
                this._o.minDate = value;
                this._o.minYear = value.getFullYear();
                this._o.minMonth = value.getMonth();
            } else {
                this._o.minDate = defaults.minDate;
                this._o.minYear = defaults.minYear;
                this._o.minMonth = defaults.minMonth;
                this._o.startRange = defaults.startRange;
            }

            this.draw();
        },

        /**
         * change the maxDate
         */
        setMaxDate: function setMaxDate(value) {
            if (value instanceof Date) {
                setToStartOfDay(value);
                this._o.maxDate = value;
                this._o.maxYear = value.getFullYear();
                this._o.maxMonth = value.getMonth();
            } else {
                this._o.maxDate = defaults.maxDate;
                this._o.maxYear = defaults.maxYear;
                this._o.maxMonth = defaults.maxMonth;
                this._o.endRange = defaults.endRange;
            }

            this.draw();
        },

        setStartRange: function setStartRange(value) {
            this._o.startRange = value;
        },

        setEndRange: function setEndRange(value) {
            this._o.endRange = value;
        },

        /**
         * refresh the HTML
         */
        draw: function draw(force) {
            if (!this._v && !force) {
                return;
            }
            var opts = this._o,
                minYear = opts.minYear,
                maxYear = opts.maxYear,
                minMonth = opts.minMonth,
                maxMonth = opts.maxMonth,
                html = '',
                randId;

            if (this._y <= minYear) {
                this._y = minYear;
                if (!isNaN(minMonth) && this._m < minMonth) {
                    this._m = minMonth;
                }
            }
            if (this._y >= maxYear) {
                this._y = maxYear;
                if (!isNaN(maxMonth) && this._m > maxMonth) {
                    this._m = maxMonth;
                }
            }

            randId = 'pika-title-' + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 2);

            for (var c = 0; c < opts.numberOfMonths; c++) {
                html += '<div class="pika-lendar">' + renderTitle(this, c, this.calendars[c].year, this.calendars[c].month, this.calendars[0].year, randId) + this.render(this.calendars[c].year, this.calendars[c].month, randId) + '</div>';
            }

            this.el.innerHTML = html;

            if (opts.bound) {
                if (opts.field.type !== 'hidden') {
                    sto(function () {
                        opts.trigger.focus();
                    }, 1);
                }
            }

            if (typeof this._o.onDraw === 'function') {
                this._o.onDraw(this);
            }

            if (opts.bound) {
                // let the screen reader user know to use arrow keys
                opts.field.setAttribute('aria-label', 'Use the arrow keys to pick a date');
            }
        },

        adjustPosition: function adjustPosition() {
            var field, pEl, width, height, viewportWidth, viewportHeight, scrollTop, left, top, clientRect;

            if (this._o.container) return;

            this.el.style.position = 'absolute';

            field = this._o.trigger;
            pEl = field;
            width = this.el.offsetWidth;
            height = this.el.offsetHeight;
            viewportWidth = window.innerWidth || document.documentElement.clientWidth;
            viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;

            if (typeof field.getBoundingClientRect === 'function') {
                clientRect = field.getBoundingClientRect();
                left = clientRect.left + window.pageXOffset;
                top = clientRect.bottom + window.pageYOffset;
            } else {
                left = pEl.offsetLeft;
                top = pEl.offsetTop + pEl.offsetHeight;
                while (pEl = pEl.offsetParent) {
                    left += pEl.offsetLeft;
                    top += pEl.offsetTop;
                }
            }

            // default position is bottom & left
            if (this._o.reposition && left + width > viewportWidth || this._o.position.indexOf('right') > -1 && left - width + field.offsetWidth > 0) {
                left = left - width + field.offsetWidth;
            }
            if (this._o.reposition && top + height > viewportHeight + scrollTop || this._o.position.indexOf('top') > -1 && top - height - field.offsetHeight > 0) {
                top = top - height - field.offsetHeight;
            }

            this.el.style.left = left + 'px';
            this.el.style.top = top + 'px';
        },

        /**
         * render HTML for a particular month
         */
        render: function render(year, month, randId) {
            var opts = this._o,
                now = new Date(),
                days = getDaysInMonth(year, month),
                before = new Date(year, month, 1).getDay(),
                data = [],
                row = [];
            setToStartOfDay(now);
            if (opts.firstDay > 0) {
                before -= opts.firstDay;
                if (before < 0) {
                    before += 7;
                }
            }
            var previousMonth = month === 0 ? 11 : month - 1,
                nextMonth = month === 11 ? 0 : month + 1,
                yearOfPreviousMonth = month === 0 ? year - 1 : year,
                yearOfNextMonth = month === 11 ? year + 1 : year,
                daysInPreviousMonth = getDaysInMonth(yearOfPreviousMonth, previousMonth);
            var cells = days + before,
                after = cells;
            while (after > 7) {
                after -= 7;
            }
            cells += 7 - after;
            var isWeekSelected = false;
            for (var i = 0, r = 0; i < cells; i++) {
                var day = new Date(year, month, 1 + (i - before)),
                    isSelected = isDate(this._d) ? compareDates(day, this._d) : false,
                    isToday = compareDates(day, now),
                    hasEvent = opts.events.indexOf(day.toDateString()) !== -1 ? true : false,
                    isEmpty = i < before || i >= days + before,
                    dayNumber = 1 + (i - before),
                    monthNumber = month,
                    yearNumber = year,
                    isStartRange = opts.startRange && compareDates(opts.startRange, day),
                    isEndRange = opts.endRange && compareDates(opts.endRange, day),
                    isInRange = opts.startRange && opts.endRange && opts.startRange < day && day < opts.endRange,
                    isDisabled = opts.minDate && day < opts.minDate || opts.maxDate && day > opts.maxDate || opts.disableWeekends && isWeekend(day) || opts.disableDayFn && opts.disableDayFn(day);

                if (isEmpty) {
                    if (i < before) {
                        dayNumber = daysInPreviousMonth + dayNumber;
                        monthNumber = previousMonth;
                        yearNumber = yearOfPreviousMonth;
                    } else {
                        dayNumber = dayNumber - days;
                        monthNumber = nextMonth;
                        yearNumber = yearOfNextMonth;
                    }
                }

                var dayConfig = {
                    day: dayNumber,
                    month: monthNumber,
                    year: yearNumber,
                    hasEvent: hasEvent,
                    isSelected: isSelected,
                    isToday: isToday,
                    isDisabled: isDisabled,
                    isEmpty: isEmpty,
                    isStartRange: isStartRange,
                    isEndRange: isEndRange,
                    isInRange: isInRange,
                    showDaysInNextAndPreviousMonths: opts.showDaysInNextAndPreviousMonths,
                    enableSelectionDaysInNextAndPreviousMonths: opts.enableSelectionDaysInNextAndPreviousMonths
                };

                if (opts.pickWholeWeek && isSelected) {
                    isWeekSelected = true;
                }

                row.push(renderDay(dayConfig));

                if (++r === 7) {
                    if (opts.showWeekNumber) {
                        row.unshift(renderWeek(i - before, month, year));
                    }
                    data.push(renderRow(row, opts.isRTL, opts.pickWholeWeek, isWeekSelected));
                    row = [];
                    r = 0;
                    isWeekSelected = false;
                }
            }
            return renderTable(opts, data, randId);
        },

        isVisible: function isVisible() {
            return this._v;
        },

        show: function show() {
            if (!this.isVisible()) {
                this._v = true;
                this.draw();
                removeClass(this.el, 'is-hidden');
                if (this._o.bound) {
                    addEvent(document, 'click', this._onClick);
                    this.adjustPosition();
                }
                if (typeof this._o.onOpen === 'function') {
                    this._o.onOpen.call(this);
                }
            }
        },

        hide: function hide() {
            var v = this._v;
            if (v !== false) {
                if (this._o.bound) {
                    removeEvent(document, 'click', this._onClick);
                }
                this.el.style.position = 'static'; // reset
                this.el.style.left = 'auto';
                this.el.style.top = 'auto';
                addClass(this.el, 'is-hidden');
                this._v = false;
                if (v !== undefined && typeof this._o.onClose === 'function') {
                    this._o.onClose.call(this);
                }
            }
        },

        /**
         * GAME OVER
         */
        destroy: function destroy() {
            var opts = this._o;

            this.hide();
            removeEvent(this.el, 'mousedown', this._onMouseDown, true);
            removeEvent(this.el, 'touchend', this._onMouseDown, true);
            removeEvent(this.el, 'change', this._onChange);
            if (opts.keyboardInput) {
                removeEvent(document, 'keydown', this._onKeyChange);
            }
            if (opts.field) {
                removeEvent(opts.field, 'change', this._onInputChange);
                if (opts.bound) {
                    removeEvent(opts.trigger, 'click', this._onInputClick);
                    removeEvent(opts.trigger, 'focus', this._onInputFocus);
                    removeEvent(opts.trigger, 'blur', this._onInputBlur);
                }
            }
            if (this.el.parentNode) {
                this.el.parentNode.removeChild(this.el);
            }
        }

    };

    return Pikaday;
});

/***/ }),

/***/ "./node_modules/preact/dist/preact.min.js":
/*!************************************************!*\
  !*** ./node_modules/preact/dist/preact.min.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function () {
  "use strict";
  function e() {}function t(t, n) {
    var o,
        r,
        i,
        l,
        a = E;for (l = arguments.length; l-- > 2;) W.push(arguments[l]);n && null != n.children && (W.length || W.push(n.children), delete n.children);while (W.length) if ((r = W.pop()) && void 0 !== r.pop) for (l = r.length; l--;) W.push(r[l]);else "boolean" == typeof r && (r = null), (i = "function" != typeof t) && (null == r ? r = "" : "number" == typeof r ? r += "" : "string" != typeof r && (i = !1)), i && o ? a[a.length - 1] += r : a === E ? a = [r] : a.push(r), o = i;var u = new e();return u.nodeName = t, u.children = a, u.attributes = null == n ? void 0 : n, u.key = null == n ? void 0 : n.key, void 0 !== S.vnode && S.vnode(u), u;
  }function n(e, t) {
    for (var n in t) e[n] = t[n];return e;
  }function o(e, o) {
    return t(e.nodeName, n(n({}, e.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == A.push(e) && (S.debounceRendering || P)(i);
  }function i() {
    var e,
        t = A;A = [];while (e = t.pop()) e.__d && k(e);
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var t = n({}, e.attributes);t.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) void 0 === t[r] && (t[r] = o[r]);return t;
  }function _(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function c(e, t, n, o, r) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n && n(null), o && o(e);else if ("class" !== t || r) {
      if ("style" === t) {
        if (o && "string" != typeof o && "string" != typeof n || (e.style.cssText = o || ""), o && "object" == typeof o) {
          if ("string" != typeof n) for (var i in n) i in o || (e.style[i] = "");for (var i in o) e.style[i] = "number" == typeof o[i] && !1 === V.test(i) ? o[i] + "px" : o[i];
        }
      } else if ("dangerouslySetInnerHTML" === t) o && (e.innerHTML = o.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var l = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), o ? n || e.addEventListener(t, f, l) : e.removeEventListener(t, f, l), (e.__l || (e.__l = {}))[t] = o;
      } else if ("list" !== t && "type" !== t && !r && t in e) s(e, t, null == o ? "" : o), null != o && !1 !== o || e.removeAttribute(t);else {
        var a = r && t !== (t = t.replace(/^xlink:?/, ""));null == o || !1 === o ? a ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof o && (a ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), o) : e.setAttribute(t, o));
      }
    } else e.className = o || "";
  }function s(e, t, n) {
    try {
      e[t] = n;
    } catch (e) {}
  }function f(e) {
    return this.__l[e.type](S.event && S.event(e) || e);
  }function d() {
    var e;while (e = D.pop()) S.afterMount && S.afterMount(e), e.componentDidMount && e.componentDidMount();
  }function h(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, j = null != e && !("__preactattr_" in e));var l = m(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (j = !1, i || d()), l;
  }function m(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return U(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = _(u, R), e)) {
      while (e.firstChild) i.appendChild(e.firstChild);e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0);
    }var p = i.firstChild,
        c = i.__preactattr_,
        s = t.children;if (null == c) {
      c = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) c[f[d].name] = f[d].value;
    }return !j && s && 1 === s.length && "string" == typeof s[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != s[0] && (p.nodeValue = s[0]) : (s && s.length || null != p) && v(i, s, n, o, j || null != c.dangerouslySetInnerHTML), g(i, t.attributes, c), R = l, i;
  }function v(e, t, n, o, r) {
    var i,
        a,
        u,
        _,
        c,
        s = e.childNodes,
        f = [],
        d = {},
        h = 0,
        v = 0,
        y = s.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = s[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (h++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      _ = t[C], c = null;var k = _.key;if (null != k) h && void 0 !== d[k] && (c = d[k], d[k] = void 0, h--);else if (!c && v < g) for (i = v; i < g; i++) if (void 0 !== f[i] && l(a = f[i], _, r)) {
        c = a, f[i] = void 0, i === g - 1 && g--, i === v && v++;break;
      }c = m(c, _, n, o), u = s[C], c && c !== e && c !== u && (null == u ? e.appendChild(c) : c === u.nextSibling ? p(u) : e.insertBefore(c, u));
    }if (h) for (var C in d) void 0 !== d[C] && b(d[C], !1);while (v <= g) void 0 !== (c = f[g--]) && b(c, !1);
  }function b(e, t) {
    var n = e._component;n ? L(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || p(e), y(e));
  }function y(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;b(e, !0), e = t;
    }
  }function g(e, t, n) {
    var o;for (o in n) t && null != t[o] || null == n[o] || c(e, o, n[o], n[o] = void 0, R);for (o in t) "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || c(e, o, n[o], n[o] = t[o], R);
  }function w(e) {
    var t = e.constructor.name;(I[t] || (I[t] = [])).push(e);
  }function C(e, t, n) {
    var o,
        r = I[e.name];if (e.prototype && e.prototype.render ? (o = new e(t, n), T.call(o, t, n)) : (o = new T(t, n), o.constructor = e, o.render = x), r) for (var i = r.length; i--;) if (r[i].constructor === e) {
      o.__b = r[i].__b, r.splice(i, 1);break;
    }return o;
  }function x(e, t, n) {
    return this.constructor(e, n);
  }function N(e, t, n, o, i) {
    e.__x || (e.__x = !0, (e.__r = t.ref) && delete t.ref, (e.__k = t.key) && delete t.key, !e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, o), o && o !== e.context && (e.__c || (e.__c = e.context), e.context = o), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== n && (1 !== n && !1 === S.syncComponentUpdates && e.base ? r(e) : k(e, 1, i)), e.__r && e.__r(e));
  }function k(e, t, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          _ = e.props,
          p = e.state,
          c = e.context,
          s = e.__p || _,
          f = e.__s || p,
          m = e.__c || c,
          v = e.base,
          y = e.__b,
          g = v || y,
          w = e._component,
          x = !1;if (v && (e.props = s, e.state = f, e.context = m, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(_, p, c) ? x = !0 : e.componentWillUpdate && e.componentWillUpdate(_, p, c), e.props = _, e.state = p, e.context = c), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !x) {
        i = e.render(_, p, c), e.getChildContext && (c = n(n({}, c), e.getChildContext()));var U,
            T,
            M = i && i.nodeName;if ("function" == typeof M) {
          var W = u(i);l = w, l && l.constructor === M && W.key == l.__k ? N(l, W, 1, c, !1) : (U = l, e._component = l = C(M, W, c), l.__b = l.__b || y, l.__u = e, N(l, W, 0, c, !1), k(l, 1, o, !0)), T = l.base;
        } else a = g, U = w, U && (a = e._component = null), (g || 1 === t) && (a && (a._component = null), T = h(a, i, c, o || !v, g && g.parentNode, !0));if (g && T !== g && l !== w) {
          var E = g.parentNode;E && T !== E && (E.replaceChild(T, g), U || (g._component = null, b(g, !1)));
        }if (U && L(U), e.base = T, T && !r) {
          var P = e,
              V = e;while (V = V.__u) (P = V).base = T;T._component = P, T._componentConstructor = P.constructor;
        }
      }if (!v || o ? D.unshift(e) : x || (e.componentDidUpdate && e.componentDidUpdate(s, f, m), S.afterUpdate && S.afterUpdate(e)), null != e.__h) while (e.__h.length) e.__h.pop().call(e);H || r || d();
    }
  }function U(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        _ = a,
        p = u(t);while (r && !_ && (r = r.__u)) _ = r.constructor === t.nodeName;return r && _ && (!o || r._component) ? (N(r, p, 3, n, o), e = r.base) : (i && !a && (L(i), e = l = null), r = C(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), N(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, b(l, !1))), e;
  }function L(e) {
    S.beforeUnmount && S.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var n = e._component;n ? L(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.__b = t, p(t), w(e), y(t)), e.__r && e.__r(null);
  }function T(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {};
  }function M(e, t, n) {
    return h(n, e, {}, !1, t, !1);
  }var S = {},
      W = [],
      E = [],
      P = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      V = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      A = [],
      D = [],
      H = 0,
      R = !1,
      j = !1,
      I = {};n(T.prototype, { setState: function setState(e, t) {
      var o = this.state;this.__s || (this.__s = n({}, o)), n(o, "function" == typeof e ? e(o, this.props) : e), t && (this.__h = this.__h || []).push(t), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && (this.__h = this.__h || []).push(e), k(this, 2);
    }, render: function render() {} });var $ = { h: t, createElement: t, cloneElement: o, Component: T, render: M, rerender: i, options: S }; true ? module.exports = $ : undefined;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),

/***/ "./node_modules/react-markdown/lib/ast-to-react.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-markdown/lib/ast-to-react.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(/*! react */ "./node_modules/preact/dist/preact.min.js");
var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");

function astToReact(node, options) {
  var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  var renderer = options.renderers[node.type];

  var pos = node.position.start;
  var key = [node.type, pos.line, pos.column].join('-');

  if (node.type === 'text') {
    return renderer ? renderer(node.value, key) : node.value;
  }

  if (typeof renderer !== 'function' && typeof renderer !== 'string' && !isReactFragment(renderer)) {
    throw new Error('Renderer for type `' + node.type + '` not defined or is not renderable');
  }

  var nodeProps = getNodeProps(node, key, options, renderer, parent, index);

  return React.createElement(renderer, nodeProps, nodeProps.children || resolveChildren() || undefined);

  function resolveChildren() {
    return node.children && node.children.map(function (childNode, i) {
      return astToReact(childNode, options, { node: node, props: nodeProps }, i);
    });
  }
}

function isReactFragment(renderer) {
  return React.Fragment && React.Fragment === renderer;
}

// eslint-disable-next-line max-params, complexity
function getNodeProps(node, key, opts, renderer, parent, index) {
  var props = { key: key };

  var isTagRenderer = typeof renderer === 'string';

  // `sourcePos` is true if the user wants source information (line/column info from markdown source)
  if (opts.sourcePos && node.position) {
    props['data-sourcepos'] = flattenPosition(node.position);
  }

  if (opts.rawSourcePos && !isTagRenderer) {
    props.sourcePosition = node.position;
  }

  var ref = node.identifier !== null && node.identifier !== undefined ? opts.definitions[node.identifier] || {} : null;

  switch (node.type) {
    case 'root':
      assignDefined(props, { className: opts.className });
      break;
    case 'heading':
      props.level = node.depth;
      break;
    case 'list':
      props.start = node.start;
      props.ordered = node.ordered;
      props.tight = !node.loose;
      break;
    case 'listItem':
      props.checked = node.checked;
      props.tight = !node.loose;
      props.children = (props.tight ? unwrapParagraphs(node) : node.children).map(function (childNode, i) {
        return astToReact(childNode, opts, { node: node, props: props }, i);
      });
      break;
    case 'definition':
      assignDefined(props, { identifier: node.identifier, title: node.title, url: node.url });
      break;
    case 'code':
      assignDefined(props, { language: node.lang && node.lang.split(/\s/, 1)[0] });
      break;
    case 'inlineCode':
      props.children = node.value;
      props.inline = true;
      break;
    case 'link':
      assignDefined(props, {
        title: node.title || undefined,
        href: opts.transformLinkUri ? opts.transformLinkUri(node.url, node.children, node.title) : node.url
      });
      break;
    case 'image':
      assignDefined(props, {
        alt: node.alt || undefined,
        title: node.title || undefined,
        src: opts.transformImageUri ? opts.transformImageUri(node.url, node.children, node.title, node.alt) : node.url
      });
      break;
    case 'linkReference':
      assignDefined(props, xtend(ref, {
        href: opts.transformLinkUri ? opts.transformLinkUri(ref.href) : ref.href
      }));
      break;
    case 'imageReference':
      assignDefined(props, {
        src: opts.transformImageUri && ref.href ? opts.transformImageUri(ref.href, node.children, ref.title, node.alt) : ref.href,
        title: ref.title || undefined,
        alt: node.alt || undefined
      });
      break;
    case 'table':
    case 'tableHead':
    case 'tableBody':
      props.columnAlignment = node.align;
      break;
    case 'tableRow':
      props.isHeader = parent.node.type === 'tableHead';
      props.columnAlignment = parent.props.columnAlignment;
      break;
    case 'tableCell':
      assignDefined(props, {
        isHeader: parent.props.isHeader,
        align: parent.props.columnAlignment[index]
      });
      break;
    case 'virtualHtml':
      props.tag = node.tag;
      break;
    case 'html':
      // @todo find a better way than this
      props.isBlock = node.position.start.line !== node.position.end.line;
      props.escapeHtml = opts.escapeHtml;
      props.skipHtml = opts.skipHtml;
      break;
    default:
      assignDefined(props, xtend(node, {
        type: undefined,
        position: undefined,
        children: undefined
      }));
  }

  if (!isTagRenderer && node.value) {
    props.value = node.value;
  }

  return props;
}

function assignDefined(target, attrs) {
  for (var key in attrs) {
    if (typeof attrs[key] !== 'undefined') {
      target[key] = attrs[key];
    }
  }
}

function flattenPosition(pos) {
  return [pos.start.line, ':', pos.start.column, '-', pos.end.line, ':', pos.end.column].map(String).join('');
}

function unwrapParagraphs(node) {
  return node.children.reduce(function (array, child) {
    return array.concat(child.type === 'paragraph' ? child.children || [] : [child]);
  }, []);
}

module.exports = astToReact;

/***/ }),

/***/ "./node_modules/react-markdown/lib/get-definitions.js":
/*!************************************************************!*\
  !*** ./node_modules/react-markdown/lib/get-definitions.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function getDefinitions(node) {
  var defs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return (node.children || []).reduce(function (definitions, child) {
    if (child.type === 'definition') {
      definitions[child.identifier] = {
        href: child.url,
        title: child.title
      };
    }

    return getDefinitions(child, definitions);
  }, defs);
};

/***/ }),

/***/ "./node_modules/react-markdown/lib/plugins/disallow-node.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-markdown/lib/plugins/disallow-node.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var visit = __webpack_require__(/*! unist-util-visit */ "./node_modules/unist-util-visit/index.js");

exports.ofType = function (types, mode) {
  return function (node) {
    types.forEach(function (type) {
      return visit(node, type, disallow, true);
    });
    return node;
  };

  function disallow(node, index, parent) {
    if (parent) {
      untangle(node, index, parent, mode);
    }
  }
};

exports.ifNotMatch = function (allowNode, mode) {
  return function (node) {
    visit(node, disallow, true);
    return node;
  };

  function disallow(node, index, parent) {
    if (parent && !allowNode(node, index, parent)) {
      untangle(node, index, parent, mode);
    }
  }
};

function untangle(node, index, parent, mode) {
  if (mode === 'remove') {
    parent.children.splice(index, 1);
  } else if (mode === 'unwrap') {
    var args = [index, 1];

    if (node.children) {
      args = args.concat(node.children);
    }

    Array.prototype.splice.apply(parent.children, args);
  }
}

/***/ }),

/***/ "./node_modules/react-markdown/lib/plugins/naive-html.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-markdown/lib/plugins/naive-html.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Naive, simple plugin to match inline nodes without attributes
 * This allows say <strong>foo</strong>, but not <strong class="very">foo</strong>
 * For proper HTML support, you'll want a different plugin
 **/

var visit = __webpack_require__(/*! unist-util-visit */ "./node_modules/unist-util-visit/index.js");

var type = 'virtualHtml';
var selfClosingRe = /^<(area|base|br|col|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)\s*\/?>$/i;
var simpleTagRe = /^<(\/?)([a-z]+)\s*>$/;

module.exports = function (tree) {
  var open = void 0;
  var currentParent = void 0;
  visit(tree, 'html', function (node, index, parent) {
    if (currentParent !== parent) {
      open = [];
      currentParent = parent;
    }

    var selfClosing = getSelfClosing(node);
    if (selfClosing) {
      parent.children.splice(index, 1, {
        type: type,
        tag: selfClosing,
        position: node.position
      });
      return true;
    }

    var current = getSimpleTag(node, parent);
    if (!current) {
      return true;
    }

    var matching = findAndPull(open, current.tag);

    if (matching) {
      parent.children.splice(index, 0, virtual(current, matching, parent));
    } else if (!current.opening) {
      open.push(current);
    }

    return true;
  }, true // Iterate in reverse
  );

  return tree;
};

function findAndPull(open, matchingTag) {
  var i = open.length;
  while (i--) {
    if (open[i].tag === matchingTag) {
      return open.splice(i, 1)[0];
    }
  }

  return false;
}

function getSimpleTag(node, parent) {
  var match = node.value.match(simpleTagRe);
  return match ? { tag: match[2], opening: !match[1], node: node } : false;
}

function getSelfClosing(node) {
  var match = node.value.match(selfClosingRe);
  return match ? match[1] : false;
}

function virtual(fromNode, toNode, parent) {
  var fromIndex = parent.children.indexOf(fromNode.node);
  var toIndex = parent.children.indexOf(toNode.node);

  var extracted = parent.children.splice(fromIndex, toIndex - fromIndex + 1);
  var children = extracted.slice(1, -1);
  return {
    type: type,
    children: children,
    tag: fromNode.tag,
    position: {
      start: fromNode.node.position.start,
      end: toNode.node.position.end,
      indent: []
    }
  };
}

/***/ }),

/***/ "./node_modules/react-markdown/lib/react-markdown.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-markdown/lib/react-markdown.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return Array.from(arr);
  }
}

var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");
var unified = __webpack_require__(/*! unified */ "./node_modules/unified/index.js");
var parse = __webpack_require__(/*! remark-parse */ "./node_modules/remark-parse/index.js");
var PropTypes = __webpack_require__(/*! prop-types */ "./src/modules/shims/prop-types.js");
var naiveHtml = __webpack_require__(/*! ./plugins/naive-html */ "./node_modules/react-markdown/lib/plugins/naive-html.js");
var disallowNode = __webpack_require__(/*! ./plugins/disallow-node */ "./node_modules/react-markdown/lib/plugins/disallow-node.js");
var astToReact = __webpack_require__(/*! ./ast-to-react */ "./node_modules/react-markdown/lib/ast-to-react.js");
var wrapTableRows = __webpack_require__(/*! ./wrap-table-rows */ "./node_modules/react-markdown/lib/wrap-table-rows.js");
var getDefinitions = __webpack_require__(/*! ./get-definitions */ "./node_modules/react-markdown/lib/get-definitions.js");
var uriTransformer = __webpack_require__(/*! ./uriTransformer */ "./node_modules/react-markdown/lib/uriTransformer.js");
var defaultRenderers = __webpack_require__(/*! ./renderers */ "./node_modules/react-markdown/lib/renderers.js");

var allTypes = Object.keys(defaultRenderers);

var ReactMarkdown = function ReactMarkdown(props) {
  var src = props.source || props.children || '';

  if (props.allowedTypes && props.disallowedTypes) {
    throw new Error('Only one of `allowedTypes` and `disallowedTypes` should be defined');
  }

  var renderers = xtend(defaultRenderers, props.renderers);

  var plugins = [parse].concat(props.plugins || []);
  var parser = plugins.reduce(applyParserPlugin, unified());

  var rawAst = parser.parse(src);
  var renderProps = xtend(props, {
    renderers: renderers,
    definitions: getDefinitions(rawAst)
  });

  var astPlugins = determineAstPlugins(props);
  var ast = astPlugins.reduce(function (node, plugin) {
    return plugin(node, renderProps);
  }, rawAst);

  return astToReact(ast, renderProps);
};

function applyParserPlugin(parser, plugin) {
  return Array.isArray(plugin) ? parser.use.apply(parser, _toConsumableArray(plugin)) : parser.use(plugin);
}

function determineAstPlugins(props) {
  var plugins = [wrapTableRows];

  var disallowedTypes = props.disallowedTypes;
  if (props.allowedTypes) {
    disallowedTypes = allTypes.filter(function (type) {
      return type !== 'root' && props.allowedTypes.indexOf(type) === -1;
    });
  }

  var removalMethod = props.unwrapDisallowed ? 'unwrap' : 'remove';
  if (disallowedTypes && disallowedTypes.length > 0) {
    plugins.push(disallowNode.ofType(disallowedTypes, removalMethod));
  }

  if (props.allowNode) {
    plugins.push(disallowNode.ifNotMatch(props.allowNode, removalMethod));
  }

  var renderHtml = !props.escapeHtml && !props.skipHtml;
  if (renderHtml) {
    plugins.push(naiveHtml);
  }

  return props.astPlugins ? plugins.concat(props.astPlugins) : plugins;
}

ReactMarkdown.defaultProps = {
  renderers: {},
  escapeHtml: true,
  skipHtml: false,
  sourcePos: false,
  rawSourcePos: false,
  transformLinkUri: uriTransformer,
  astPlugins: [],
  plugins: []
};

ReactMarkdown.propTypes = {
  className: PropTypes.string,
  source: PropTypes.string,
  children: PropTypes.string,
  sourcePos: PropTypes.bool,
  rawSourcePos: PropTypes.bool,
  escapeHtml: PropTypes.bool,
  skipHtml: PropTypes.bool,
  allowNode: PropTypes.func,
  allowedTypes: PropTypes.arrayOf(PropTypes.oneOf(allTypes)),
  disallowedTypes: PropTypes.arrayOf(PropTypes.oneOf(allTypes)),
  transformLinkUri: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  transformImageUri: PropTypes.func,
  astPlugins: PropTypes.arrayOf(PropTypes.func),
  unwrapDisallowed: PropTypes.bool,
  renderers: PropTypes.object,
  plugins: PropTypes.array
};

ReactMarkdown.types = allTypes;
ReactMarkdown.renderers = defaultRenderers;
ReactMarkdown.uriTransformer = uriTransformer;

module.exports = ReactMarkdown;

/***/ }),

/***/ "./node_modules/react-markdown/lib/renderers.js":
/*!******************************************************!*\
  !*** ./node_modules/react-markdown/lib/renderers.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable react/prop-types, react/no-multi-comp */


var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");
var React = __webpack_require__(/*! react */ "./node_modules/preact/dist/preact.min.js");
var createElement = React.createElement;

module.exports = {
  root: 'div',
  break: 'br',
  paragraph: 'p',
  emphasis: 'em',
  strong: 'strong',
  thematicBreak: 'hr',
  blockquote: 'blockquote',
  delete: 'del',
  link: 'a',
  image: 'img',
  linkReference: 'a',
  imageReference: 'img',
  table: SimpleRenderer.bind(null, 'table'),
  tableHead: SimpleRenderer.bind(null, 'thead'),
  tableBody: SimpleRenderer.bind(null, 'tbody'),
  tableRow: SimpleRenderer.bind(null, 'tr'),
  tableCell: TableCell,

  list: List,
  listItem: ListItem,
  definition: NullRenderer,
  heading: Heading,
  inlineCode: InlineCode,
  code: CodeBlock,
  html: Html,
  virtualHtml: VirtualHtml
};

function SimpleRenderer(tag, props) {
  return createElement(tag, getCoreProps(props), props.children);
}

function TableCell(props) {
  var style = props.align ? { textAlign: props.align } : undefined;
  var coreProps = getCoreProps(props);
  return createElement(props.isHeader ? 'th' : 'td', style ? xtend({ style: style }, coreProps) : coreProps, props.children);
}

function Heading(props) {
  return createElement('h' + props.level, getCoreProps(props), props.children);
}

function List(props) {
  var attrs = getCoreProps(props);
  if (props.start !== null && props.start !== 1) {
    attrs.start = props.start.toString();
  }

  return createElement(props.ordered ? 'ol' : 'ul', attrs, props.children);
}

function ListItem(props) {
  var checkbox = null;
  if (props.checked !== null) {
    var checked = props.checked;
    checkbox = createElement('input', { type: 'checkbox', checked: checked, readOnly: true });
  }

  return createElement('li', getCoreProps(props), checkbox, props.children);
}

function CodeBlock(props) {
  var className = props.language && 'language-' + props.language;
  var code = createElement('code', className ? { className: className } : null, props.value);
  return createElement('pre', getCoreProps(props), code);
}

function InlineCode(props) {
  return createElement('code', getCoreProps(props), props.children);
}

function Html(props) {
  if (props.skipHtml) {
    return null;
  }

  var tag = props.isBlock ? 'div' : 'span';
  if (props.escapeHtml) {
    // @todo when fiber lands, we can simply render props.value
    return createElement(tag, null, props.value);
  }

  var nodeProps = { dangerouslySetInnerHTML: { __html: props.value } };
  return createElement(tag, nodeProps);
}

function VirtualHtml(props) {
  return createElement(props.tag, getCoreProps(props), props.children);
}

function NullRenderer() {
  return null;
}

function getCoreProps(props) {
  return props['data-sourcepos'] ? { 'data-sourcepos': props['data-sourcepos'] } : {};
}

/***/ }),

/***/ "./node_modules/react-markdown/lib/uriTransformer.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-markdown/lib/uriTransformer.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var protocols = ['http', 'https', 'mailto', 'tel'];

module.exports = function uriTransformer(uri) {
  var url = (uri || '').trim();
  var first = url.charAt(0);

  if (first === '#' || first === '/') {
    return url;
  }

  var colon = url.indexOf(':');
  if (colon === -1) {
    return url;
  }

  var length = protocols.length;
  var index = -1;

  while (++index < length) {
    var protocol = protocols[index];

    if (colon === protocol.length && url.slice(0, protocol.length) === protocol) {
      return url;
    }
  }

  index = url.indexOf('?');
  if (index !== -1 && colon > index) {
    return url;
  }

  index = url.indexOf('#');
  if (index !== -1 && colon > index) {
    return url;
  }

  // eslint-disable-next-line no-script-url
  return 'javascript:void(0)';
};

/***/ }),

/***/ "./node_modules/react-markdown/lib/wrap-table-rows.js":
/*!************************************************************!*\
  !*** ./node_modules/react-markdown/lib/wrap-table-rows.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var visit = __webpack_require__(/*! unist-util-visit */ "./node_modules/unist-util-visit/index.js");

module.exports = function (node) {
  visit(node, 'table', wrap);
  return node;
};

function wrap(table) {
  var children = table.children;
  table.children = [{
    type: 'tableHead',
    align: table.align,
    children: [children[0]],
    position: children[0].position
  }];
  if (children.length > 1) {
    table.children.push({
      type: 'tableBody',
      align: table.align,
      children: children.slice(1),
      position: {
        start: children[1].position.start,
        end: children[children.length - 1].position.end
      }
    });
  }
}

/***/ }),

/***/ "./node_modules/remark-breaks/index.js":
/*!*********************************************!*\
  !*** ./node_modules/remark-breaks/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = breaks;

function breaks() {
  var parser = this.Parser;
  var tokenizers;

  if (!isRemarkParser(parser)) {
    throw new Error('Missing parser to attach `remark-breaks` to');
  }

  tokenizers = parser.prototype.inlineTokenizers;

  tokenizeBreak.locator = tokenizers.break.locator;

  tokenizers.break = tokenizeBreak;

  function tokenizeBreak(eat, value, silent) {
    var length = value.length;
    var index = -1;
    var queue = '';
    var character;

    while (++index < length) {
      character = value.charAt(index);

      if (character === '\n') {
        /* istanbul ignore if - never used (yet) */
        if (silent) {
          return true;
        }

        queue += character;

        return eat(queue)({ type: 'break' });
      }

      if (character !== ' ') {
        return;
      }

      queue += character;
    }
  }
}

function isRemarkParser(parser) {
  return Boolean(parser && parser.prototype && parser.prototype.inlineTokenizers && parser.prototype.inlineTokenizers.break && parser.prototype.inlineTokenizers.break.locator);
}

/***/ }),

/***/ "./node_modules/remark-parse/index.js":
/*!********************************************!*\
  !*** ./node_modules/remark-parse/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var unherit = __webpack_require__(/*! unherit */ "./node_modules/unherit/index.js");
var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");
var Parser = __webpack_require__(/*! ./lib/parser.js */ "./node_modules/remark-parse/lib/parser.js");

module.exports = parse;
parse.Parser = Parser;

function parse(options) {
  var Local = unherit(Parser);
  Local.prototype.options = xtend(Local.prototype.options, this.data('settings'), options);
  this.Parser = Local;
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/block-elements.json":
/*!***********************************************************!*\
  !*** ./node_modules/remark-parse/lib/block-elements.json ***!
  \***********************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, default */
/***/ (function(module) {

module.exports = ["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","legend","li","link","main","menu","menuitem","meta","nav","noframes","ol","optgroup","option","p","param","pre","section","source","title","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"];

/***/ }),

/***/ "./node_modules/remark-parse/lib/decode.js":
/*!*************************************************!*\
  !*** ./node_modules/remark-parse/lib/decode.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");
var entities = __webpack_require__(/*! parse-entities */ "./node_modules/parse-entities/index.js");

module.exports = factory;

/* Factory to create an entity decoder. */
function factory(ctx) {
  decoder.raw = decodeRaw;

  return decoder;

  /* Normalize `position` to add an `indent`. */
  function normalize(position) {
    var offsets = ctx.offset;
    var line = position.line;
    var result = [];

    while (++line) {
      if (!(line in offsets)) {
        break;
      }

      result.push((offsets[line] || 0) + 1);
    }

    return {
      start: position,
      indent: result
    };
  }

  /* Handle a warning.
   * See https://github.com/wooorm/parse-entities
   * for the warnings. */
  function handleWarning(reason, position, code) {
    if (code === 3) {
      return;
    }

    ctx.file.message(reason, position);
  }

  /* Decode `value` (at `position`) into text-nodes. */
  function decoder(value, position, handler) {
    entities(value, {
      position: normalize(position),
      warning: handleWarning,
      text: handler,
      reference: handler,
      textContext: ctx,
      referenceContext: ctx
    });
  }

  /* Decode `value` (at `position`) into a string. */
  function decodeRaw(value, position, options) {
    return entities(value, xtend(options, {
      position: normalize(position),
      warning: handleWarning
    }));
  }
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/defaults.js":
/*!***************************************************!*\
  !*** ./node_modules/remark-parse/lib/defaults.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  position: true,
  gfm: true,
  commonmark: false,
  footnotes: false,
  pedantic: false,
  blocks: __webpack_require__(/*! ./block-elements.json */ "./node_modules/remark-parse/lib/block-elements.json")
};

/***/ }),

/***/ "./node_modules/remark-parse/lib/locate/break.js":
/*!*******************************************************!*\
  !*** ./node_modules/remark-parse/lib/locate/break.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  var index = value.indexOf('\n', fromIndex);

  while (index > fromIndex) {
    if (value.charAt(index - 1) !== ' ') {
      break;
    }

    index--;
  }

  return index;
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/locate/code-inline.js":
/*!*************************************************************!*\
  !*** ./node_modules/remark-parse/lib/locate/code-inline.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  return value.indexOf('`', fromIndex);
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/locate/delete.js":
/*!********************************************************!*\
  !*** ./node_modules/remark-parse/lib/locate/delete.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  return value.indexOf('~~', fromIndex);
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/locate/emphasis.js":
/*!**********************************************************!*\
  !*** ./node_modules/remark-parse/lib/locate/emphasis.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  var asterisk = value.indexOf('*', fromIndex);
  var underscore = value.indexOf('_', fromIndex);

  if (underscore === -1) {
    return asterisk;
  }

  if (asterisk === -1) {
    return underscore;
  }

  return underscore < asterisk ? underscore : asterisk;
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/locate/escape.js":
/*!********************************************************!*\
  !*** ./node_modules/remark-parse/lib/locate/escape.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  return value.indexOf('\\', fromIndex);
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/locate/link.js":
/*!******************************************************!*\
  !*** ./node_modules/remark-parse/lib/locate/link.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  var link = value.indexOf('[', fromIndex);
  var image = value.indexOf('![', fromIndex);

  if (image === -1) {
    return link;
  }

  /* Link can never be `-1` if an image is found, so we don’t need
   * to check for that :) */
  return link < image ? link : image;
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/locate/strong.js":
/*!********************************************************!*\
  !*** ./node_modules/remark-parse/lib/locate/strong.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  var asterisk = value.indexOf('**', fromIndex);
  var underscore = value.indexOf('__', fromIndex);

  if (underscore === -1) {
    return asterisk;
  }

  if (asterisk === -1) {
    return underscore;
  }

  return underscore < asterisk ? underscore : asterisk;
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/locate/tag.js":
/*!*****************************************************!*\
  !*** ./node_modules/remark-parse/lib/locate/tag.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  return value.indexOf('<', fromIndex);
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/locate/url.js":
/*!*****************************************************!*\
  !*** ./node_modules/remark-parse/lib/locate/url.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

var PROTOCOLS = ['https://', 'http://', 'mailto:'];

function locate(value, fromIndex) {
  var length = PROTOCOLS.length;
  var index = -1;
  var min = -1;
  var position;

  if (!this.options.gfm) {
    return -1;
  }

  while (++index < length) {
    position = value.indexOf(PROTOCOLS[index], fromIndex);

    if (position !== -1 && (position < min || min === -1)) {
      min = position;
    }
  }

  return min;
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/parse.js":
/*!************************************************!*\
  !*** ./node_modules/remark-parse/lib/parse.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");
var removePosition = __webpack_require__(/*! unist-util-remove-position */ "./node_modules/unist-util-remove-position/index.js");

module.exports = parse;

var C_NEWLINE = '\n';
var EXPRESSION_LINE_BREAKS = /\r\n|\r/g;

/* Parse the bound file. */
function parse() {
  var self = this;
  var value = String(self.file);
  var start = { line: 1, column: 1, offset: 0 };
  var content = xtend(start);
  var node;

  /* Clean non-unix newlines: `\r\n` and `\r` are all
   * changed to `\n`.  This should not affect positional
   * information. */
  value = value.replace(EXPRESSION_LINE_BREAKS, C_NEWLINE);

  if (value.charCodeAt(0) === 0xFEFF) {
    value = value.slice(1);

    content.column++;
    content.offset++;
  }

  node = {
    type: 'root',
    children: self.tokenizeBlock(value, content),
    position: {
      start: start,
      end: self.eof || xtend(start)
    }
  };

  if (!self.options.position) {
    removePosition(node, true);
  }

  return node;
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/parser.js":
/*!*************************************************!*\
  !*** ./node_modules/remark-parse/lib/parser.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");
var toggle = __webpack_require__(/*! state-toggle */ "./node_modules/state-toggle/index.js");
var vfileLocation = __webpack_require__(/*! vfile-location */ "./node_modules/vfile-location/index.js");
var unescape = __webpack_require__(/*! ./unescape */ "./node_modules/remark-parse/lib/unescape.js");
var decode = __webpack_require__(/*! ./decode */ "./node_modules/remark-parse/lib/decode.js");
var tokenizer = __webpack_require__(/*! ./tokenizer */ "./node_modules/remark-parse/lib/tokenizer.js");

module.exports = Parser;

function Parser(doc, file) {
  this.file = file;
  this.offset = {};
  this.options = xtend(this.options);
  this.setOptions({});

  this.inList = false;
  this.inBlock = false;
  this.inLink = false;
  this.atStart = true;

  this.toOffset = vfileLocation(file).toOffset;
  this.unescape = unescape(this, 'escape');
  this.decode = decode(this);
}

var proto = Parser.prototype;

/* Expose core. */
proto.setOptions = __webpack_require__(/*! ./set-options */ "./node_modules/remark-parse/lib/set-options.js");
proto.parse = __webpack_require__(/*! ./parse */ "./node_modules/remark-parse/lib/parse.js");

/* Expose `defaults`. */
proto.options = __webpack_require__(/*! ./defaults */ "./node_modules/remark-parse/lib/defaults.js");

/* Enter and exit helpers. */
proto.exitStart = toggle('atStart', true);
proto.enterList = toggle('inList', false);
proto.enterLink = toggle('inLink', false);
proto.enterBlock = toggle('inBlock', false);

/* Nodes that can interupt a paragraph:
 *
 * ```markdown
 * A paragraph, followed by a thematic break.
 * ___
 * ```
 *
 * In the above example, the thematic break “interupts”
 * the paragraph. */
proto.interruptParagraph = [['thematicBreak'], ['atxHeading'], ['fencedCode'], ['blockquote'], ['html'], ['setextHeading', { commonmark: false }], ['definition', { commonmark: false }], ['footnote', { commonmark: false }]];

/* Nodes that can interupt a list:
 *
 * ```markdown
 * - One
 * ___
 * ```
 *
 * In the above example, the thematic break “interupts”
 * the list. */
proto.interruptList = [['atxHeading', { pedantic: false }], ['fencedCode', { pedantic: false }], ['thematicBreak', { pedantic: false }], ['definition', { commonmark: false }], ['footnote', { commonmark: false }]];

/* Nodes that can interupt a blockquote:
 *
 * ```markdown
 * > A paragraph.
 * ___
 * ```
 *
 * In the above example, the thematic break “interupts”
 * the blockquote. */
proto.interruptBlockquote = [['indentedCode', { commonmark: true }], ['fencedCode', { commonmark: true }], ['atxHeading', { commonmark: true }], ['setextHeading', { commonmark: true }], ['thematicBreak', { commonmark: true }], ['html', { commonmark: true }], ['list', { commonmark: true }], ['definition', { commonmark: false }], ['footnote', { commonmark: false }]];

/* Handlers. */
proto.blockTokenizers = {
  newline: __webpack_require__(/*! ./tokenize/newline */ "./node_modules/remark-parse/lib/tokenize/newline.js"),
  indentedCode: __webpack_require__(/*! ./tokenize/code-indented */ "./node_modules/remark-parse/lib/tokenize/code-indented.js"),
  fencedCode: __webpack_require__(/*! ./tokenize/code-fenced */ "./node_modules/remark-parse/lib/tokenize/code-fenced.js"),
  blockquote: __webpack_require__(/*! ./tokenize/blockquote */ "./node_modules/remark-parse/lib/tokenize/blockquote.js"),
  atxHeading: __webpack_require__(/*! ./tokenize/heading-atx */ "./node_modules/remark-parse/lib/tokenize/heading-atx.js"),
  thematicBreak: __webpack_require__(/*! ./tokenize/thematic-break */ "./node_modules/remark-parse/lib/tokenize/thematic-break.js"),
  list: __webpack_require__(/*! ./tokenize/list */ "./node_modules/remark-parse/lib/tokenize/list.js"),
  setextHeading: __webpack_require__(/*! ./tokenize/heading-setext */ "./node_modules/remark-parse/lib/tokenize/heading-setext.js"),
  html: __webpack_require__(/*! ./tokenize/html-block */ "./node_modules/remark-parse/lib/tokenize/html-block.js"),
  footnote: __webpack_require__(/*! ./tokenize/footnote-definition */ "./node_modules/remark-parse/lib/tokenize/footnote-definition.js"),
  definition: __webpack_require__(/*! ./tokenize/definition */ "./node_modules/remark-parse/lib/tokenize/definition.js"),
  table: __webpack_require__(/*! ./tokenize/table */ "./node_modules/remark-parse/lib/tokenize/table.js"),
  paragraph: __webpack_require__(/*! ./tokenize/paragraph */ "./node_modules/remark-parse/lib/tokenize/paragraph.js")
};

proto.inlineTokenizers = {
  escape: __webpack_require__(/*! ./tokenize/escape */ "./node_modules/remark-parse/lib/tokenize/escape.js"),
  autoLink: __webpack_require__(/*! ./tokenize/auto-link */ "./node_modules/remark-parse/lib/tokenize/auto-link.js"),
  url: __webpack_require__(/*! ./tokenize/url */ "./node_modules/remark-parse/lib/tokenize/url.js"),
  html: __webpack_require__(/*! ./tokenize/html-inline */ "./node_modules/remark-parse/lib/tokenize/html-inline.js"),
  link: __webpack_require__(/*! ./tokenize/link */ "./node_modules/remark-parse/lib/tokenize/link.js"),
  reference: __webpack_require__(/*! ./tokenize/reference */ "./node_modules/remark-parse/lib/tokenize/reference.js"),
  strong: __webpack_require__(/*! ./tokenize/strong */ "./node_modules/remark-parse/lib/tokenize/strong.js"),
  emphasis: __webpack_require__(/*! ./tokenize/emphasis */ "./node_modules/remark-parse/lib/tokenize/emphasis.js"),
  deletion: __webpack_require__(/*! ./tokenize/delete */ "./node_modules/remark-parse/lib/tokenize/delete.js"),
  code: __webpack_require__(/*! ./tokenize/code-inline */ "./node_modules/remark-parse/lib/tokenize/code-inline.js"),
  break: __webpack_require__(/*! ./tokenize/break */ "./node_modules/remark-parse/lib/tokenize/break.js"),
  text: __webpack_require__(/*! ./tokenize/text */ "./node_modules/remark-parse/lib/tokenize/text.js")
};

/* Expose precedence. */
proto.blockMethods = keys(proto.blockTokenizers);
proto.inlineMethods = keys(proto.inlineTokenizers);

/* Tokenizers. */
proto.tokenizeBlock = tokenizer('block');
proto.tokenizeInline = tokenizer('inline');
proto.tokenizeFactory = tokenizer;

/* Get all keys in `value`. */
function keys(value) {
  var result = [];
  var key;

  for (key in value) {
    result.push(key);
  }

  return result;
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/set-options.js":
/*!******************************************************!*\
  !*** ./node_modules/remark-parse/lib/set-options.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");
var escapes = __webpack_require__(/*! markdown-escapes */ "./node_modules/markdown-escapes/index.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/remark-parse/lib/defaults.js");

module.exports = setOptions;

function setOptions(options) {
  var self = this;
  var current = self.options;
  var key;
  var value;

  if (options == null) {
    options = {};
  } else if (typeof options === 'object') {
    options = xtend(options);
  } else {
    throw new Error('Invalid value `' + options + '` ' + 'for setting `options`');
  }

  for (key in defaults) {
    value = options[key];

    if (value == null) {
      value = current[key];
    }

    if (key !== 'blocks' && typeof value !== 'boolean' || key === 'blocks' && typeof value !== 'object') {
      throw new Error('Invalid value `' + value + '` for setting `options.' + key + '`');
    }

    options[key] = value;
  }

  self.options = options;
  self.escape = escapes(options);

  return self;
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/auto-link.js":
/*!*************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/auto-link.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "./node_modules/is-whitespace-character/index.js");
var decode = __webpack_require__(/*! parse-entities */ "./node_modules/parse-entities/index.js");
var locate = __webpack_require__(/*! ../locate/tag */ "./node_modules/remark-parse/lib/locate/tag.js");

module.exports = autoLink;
autoLink.locator = locate;
autoLink.notInLink = true;

var C_LT = '<';
var C_GT = '>';
var C_AT_SIGN = '@';
var C_SLASH = '/';
var MAILTO = 'mailto:';
var MAILTO_LENGTH = MAILTO.length;

/* Tokenise a link. */
function autoLink(eat, value, silent) {
  var self;
  var subvalue;
  var length;
  var index;
  var queue;
  var character;
  var hasAtCharacter;
  var link;
  var now;
  var content;
  var tokenizers;
  var exit;

  if (value.charAt(0) !== C_LT) {
    return;
  }

  self = this;
  subvalue = '';
  length = value.length;
  index = 0;
  queue = '';
  hasAtCharacter = false;
  link = '';

  index++;
  subvalue = C_LT;

  while (index < length) {
    character = value.charAt(index);

    if (whitespace(character) || character === C_GT || character === C_AT_SIGN || character === ':' && value.charAt(index + 1) === C_SLASH) {
      break;
    }

    queue += character;
    index++;
  }

  if (!queue) {
    return;
  }

  link += queue;
  queue = '';

  character = value.charAt(index);
  link += character;
  index++;

  if (character === C_AT_SIGN) {
    hasAtCharacter = true;
  } else {
    if (character !== ':' || value.charAt(index + 1) !== C_SLASH) {
      return;
    }

    link += C_SLASH;
    index++;
  }

  while (index < length) {
    character = value.charAt(index);

    if (whitespace(character) || character === C_GT) {
      break;
    }

    queue += character;
    index++;
  }

  character = value.charAt(index);

  if (!queue || character !== C_GT) {
    return;
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  link += queue;
  content = link;
  subvalue += link + character;
  now = eat.now();
  now.column++;
  now.offset++;

  if (hasAtCharacter) {
    if (link.slice(0, MAILTO_LENGTH).toLowerCase() === MAILTO) {
      content = content.substr(MAILTO_LENGTH);
      now.column += MAILTO_LENGTH;
      now.offset += MAILTO_LENGTH;
    } else {
      link = MAILTO + link;
    }
  }

  /* Temporarily remove all tokenizers except text in autolinks. */
  tokenizers = self.inlineTokenizers;
  self.inlineTokenizers = { text: tokenizers.text };

  exit = self.enterLink();

  content = self.tokenizeInline(content, now);

  self.inlineTokenizers = tokenizers;
  exit();

  return eat(subvalue)({
    type: 'link',
    title: null,
    url: decode(link, { nonTerminated: false }),
    children: content
  });
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/blockquote.js":
/*!**************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/blockquote.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(/*! trim */ "./node_modules/trim/index.js");
var interrupt = __webpack_require__(/*! ../util/interrupt */ "./node_modules/remark-parse/lib/util/interrupt.js");

module.exports = blockquote;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_GT = '>';

/* Tokenise a blockquote. */
function blockquote(eat, value, silent) {
  var self = this;
  var offsets = self.offset;
  var tokenizers = self.blockTokenizers;
  var interruptors = self.interruptBlockquote;
  var now = eat.now();
  var currentLine = now.line;
  var length = value.length;
  var values = [];
  var contents = [];
  var indents = [];
  var add;
  var index = 0;
  var character;
  var rest;
  var nextIndex;
  var content;
  var line;
  var startIndex;
  var prefixed;
  var exit;

  while (index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      break;
    }

    index++;
  }

  if (value.charAt(index) !== C_GT) {
    return;
  }

  if (silent) {
    return true;
  }

  index = 0;

  while (index < length) {
    nextIndex = value.indexOf(C_NEWLINE, index);
    startIndex = index;
    prefixed = false;

    if (nextIndex === -1) {
      nextIndex = length;
    }

    while (index < length) {
      character = value.charAt(index);

      if (character !== C_SPACE && character !== C_TAB) {
        break;
      }

      index++;
    }

    if (value.charAt(index) === C_GT) {
      index++;
      prefixed = true;

      if (value.charAt(index) === C_SPACE) {
        index++;
      }
    } else {
      index = startIndex;
    }

    content = value.slice(index, nextIndex);

    if (!prefixed && !trim(content)) {
      index = startIndex;
      break;
    }

    if (!prefixed) {
      rest = value.slice(index);

      /* Check if the following code contains a possible
       * block. */
      if (interrupt(interruptors, tokenizers, self, [eat, rest, true])) {
        break;
      }
    }

    line = startIndex === index ? content : value.slice(startIndex, nextIndex);

    indents.push(index - startIndex);
    values.push(line);
    contents.push(content);

    index = nextIndex + 1;
  }

  index = -1;
  length = indents.length;
  add = eat(values.join(C_NEWLINE));

  while (++index < length) {
    offsets[currentLine] = (offsets[currentLine] || 0) + indents[index];
    currentLine++;
  }

  exit = self.enterBlock();
  contents = self.tokenizeBlock(contents.join(C_NEWLINE), now);
  exit();

  return add({
    type: 'blockquote',
    children: contents
  });
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/break.js":
/*!*********************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/break.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var locate = __webpack_require__(/*! ../locate/break */ "./node_modules/remark-parse/lib/locate/break.js");

module.exports = hardBreak;
hardBreak.locator = locate;

var MIN_BREAK_LENGTH = 2;

function hardBreak(eat, value, silent) {
  var length = value.length;
  var index = -1;
  var queue = '';
  var character;

  while (++index < length) {
    character = value.charAt(index);

    if (character === '\n') {
      if (index < MIN_BREAK_LENGTH) {
        return;
      }

      /* istanbul ignore if - never used (yet) */
      if (silent) {
        return true;
      }

      queue += character;

      return eat(queue)({ type: 'break' });
    }

    if (character !== ' ') {
      return;
    }

    queue += character;
  }
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/code-fenced.js":
/*!***************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/code-fenced.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(/*! trim-trailing-lines */ "./node_modules/trim-trailing-lines/index.js");

module.exports = fencedCode;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_TILDE = '~';
var C_TICK = '`';

var MIN_FENCE_COUNT = 3;
var CODE_INDENT_COUNT = 4;

function fencedCode(eat, value, silent) {
  var self = this;
  var settings = self.options;
  var length = value.length + 1;
  var index = 0;
  var subvalue = '';
  var fenceCount;
  var marker;
  var character;
  var flag;
  var queue;
  var content;
  var exdentedContent;
  var closing;
  var exdentedClosing;
  var indent;
  var now;

  if (!settings.gfm) {
    return;
  }

  /* Eat initial spacing. */
  while (index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      break;
    }

    subvalue += character;
    index++;
  }

  indent = index;

  /* Eat the fence. */
  character = value.charAt(index);

  if (character !== C_TILDE && character !== C_TICK) {
    return;
  }

  index++;
  marker = character;
  fenceCount = 1;
  subvalue += character;

  while (index < length) {
    character = value.charAt(index);

    if (character !== marker) {
      break;
    }

    subvalue += character;
    fenceCount++;
    index++;
  }

  if (fenceCount < MIN_FENCE_COUNT) {
    return;
  }

  /* Eat spacing before flag. */
  while (index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      break;
    }

    subvalue += character;
    index++;
  }

  /* Eat flag. */
  flag = '';
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (character === C_NEWLINE || character === C_TILDE || character === C_TICK) {
      break;
    }

    if (character === C_SPACE || character === C_TAB) {
      queue += character;
    } else {
      flag += queue + character;
      queue = '';
    }

    index++;
  }

  character = value.charAt(index);

  if (character && character !== C_NEWLINE) {
    return;
  }

  if (silent) {
    return true;
  }

  now = eat.now();
  now.column += subvalue.length;
  now.offset += subvalue.length;

  subvalue += flag;
  flag = self.decode.raw(self.unescape(flag), now);

  if (queue) {
    subvalue += queue;
  }

  queue = '';
  closing = '';
  exdentedClosing = '';
  content = '';
  exdentedContent = '';

  /* Eat content. */
  while (index < length) {
    character = value.charAt(index);
    content += closing;
    exdentedContent += exdentedClosing;
    closing = '';
    exdentedClosing = '';

    if (character !== C_NEWLINE) {
      content += character;
      exdentedClosing += character;
      index++;
      continue;
    }

    /* Add the newline to `subvalue` if its the first
     * character.  Otherwise, add it to the `closing`
     * queue. */
    if (content) {
      closing += character;
      exdentedClosing += character;
    } else {
      subvalue += character;
    }

    queue = '';
    index++;

    while (index < length) {
      character = value.charAt(index);

      if (character !== C_SPACE) {
        break;
      }

      queue += character;
      index++;
    }

    closing += queue;
    exdentedClosing += queue.slice(indent);

    if (queue.length >= CODE_INDENT_COUNT) {
      continue;
    }

    queue = '';

    while (index < length) {
      character = value.charAt(index);

      if (character !== marker) {
        break;
      }

      queue += character;
      index++;
    }

    closing += queue;
    exdentedClosing += queue;

    if (queue.length < fenceCount) {
      continue;
    }

    queue = '';

    while (index < length) {
      character = value.charAt(index);

      if (character !== C_SPACE && character !== C_TAB) {
        break;
      }

      closing += character;
      exdentedClosing += character;
      index++;
    }

    if (!character || character === C_NEWLINE) {
      break;
    }
  }

  subvalue += content + closing;

  return eat(subvalue)({
    type: 'code',
    lang: flag || null,
    value: trim(exdentedContent)
  });
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/code-indented.js":
/*!*****************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/code-indented.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var repeat = __webpack_require__(/*! repeat-string */ "./node_modules/repeat-string/index.js");
var trim = __webpack_require__(/*! trim-trailing-lines */ "./node_modules/trim-trailing-lines/index.js");

module.exports = indentedCode;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';

var CODE_INDENT_COUNT = 4;
var CODE_INDENT = repeat(C_SPACE, CODE_INDENT_COUNT);

/* Tokenise indented code. */
function indentedCode(eat, value, silent) {
  var index = -1;
  var length = value.length;
  var subvalue = '';
  var content = '';
  var subvalueQueue = '';
  var contentQueue = '';
  var character;
  var blankQueue;
  var indent;

  while (++index < length) {
    character = value.charAt(index);

    if (indent) {
      indent = false;

      subvalue += subvalueQueue;
      content += contentQueue;
      subvalueQueue = '';
      contentQueue = '';

      if (character === C_NEWLINE) {
        subvalueQueue = character;
        contentQueue = character;
      } else {
        subvalue += character;
        content += character;

        while (++index < length) {
          character = value.charAt(index);

          if (!character || character === C_NEWLINE) {
            contentQueue = character;
            subvalueQueue = character;
            break;
          }

          subvalue += character;
          content += character;
        }
      }
    } else if (character === C_SPACE && value.charAt(index + 1) === character && value.charAt(index + 2) === character && value.charAt(index + 3) === character) {
      subvalueQueue += CODE_INDENT;
      index += 3;
      indent = true;
    } else if (character === C_TAB) {
      subvalueQueue += character;
      indent = true;
    } else {
      blankQueue = '';

      while (character === C_TAB || character === C_SPACE) {
        blankQueue += character;
        character = value.charAt(++index);
      }

      if (character !== C_NEWLINE) {
        break;
      }

      subvalueQueue += blankQueue + character;
      contentQueue += character;
    }
  }

  if (content) {
    if (silent) {
      return true;
    }

    return eat(subvalue)({
      type: 'code',
      lang: null,
      value: trim(content)
    });
  }
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/code-inline.js":
/*!***************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/code-inline.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "./node_modules/is-whitespace-character/index.js");
var locate = __webpack_require__(/*! ../locate/code-inline */ "./node_modules/remark-parse/lib/locate/code-inline.js");

module.exports = inlineCode;
inlineCode.locator = locate;

var C_TICK = '`';

/* Tokenise inline code. */
function inlineCode(eat, value, silent) {
  var length = value.length;
  var index = 0;
  var queue = '';
  var tickQueue = '';
  var contentQueue;
  var subqueue;
  var count;
  var openingCount;
  var subvalue;
  var character;
  var found;
  var next;

  while (index < length) {
    if (value.charAt(index) !== C_TICK) {
      break;
    }

    queue += C_TICK;
    index++;
  }

  if (!queue) {
    return;
  }

  subvalue = queue;
  openingCount = index;
  queue = '';
  next = value.charAt(index);
  count = 0;

  while (index < length) {
    character = next;
    next = value.charAt(index + 1);

    if (character === C_TICK) {
      count++;
      tickQueue += character;
    } else {
      count = 0;
      queue += character;
    }

    if (count && next !== C_TICK) {
      if (count === openingCount) {
        subvalue += queue + tickQueue;
        found = true;
        break;
      }

      queue += tickQueue;
      tickQueue = '';
    }

    index++;
  }

  if (!found) {
    if (openingCount % 2 !== 0) {
      return;
    }

    queue = '';
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  contentQueue = '';
  subqueue = '';
  length = queue.length;
  index = -1;

  while (++index < length) {
    character = queue.charAt(index);

    if (whitespace(character)) {
      subqueue += character;
      continue;
    }

    if (subqueue) {
      if (contentQueue) {
        contentQueue += subqueue;
      }

      subqueue = '';
    }

    contentQueue += character;
  }

  return eat(subvalue)({
    type: 'inlineCode',
    value: contentQueue
  });
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/definition.js":
/*!**************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/definition.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "./node_modules/is-whitespace-character/index.js");
var normalize = __webpack_require__(/*! ../util/normalize */ "./node_modules/remark-parse/lib/util/normalize.js");

module.exports = definition;
definition.notInList = true;
definition.notInBlock = true;

var C_DOUBLE_QUOTE = '"';
var C_SINGLE_QUOTE = '\'';
var C_BACKSLASH = '\\';
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';
var C_PAREN_OPEN = '(';
var C_PAREN_CLOSE = ')';
var C_COLON = ':';
var C_LT = '<';
var C_GT = '>';

function definition(eat, value, silent) {
  var self = this;
  var commonmark = self.options.commonmark;
  var index = 0;
  var length = value.length;
  var subvalue = '';
  var beforeURL;
  var beforeTitle;
  var queue;
  var character;
  var test;
  var identifier;
  var url;
  var title;

  while (index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      break;
    }

    subvalue += character;
    index++;
  }

  character = value.charAt(index);

  if (character !== C_BRACKET_OPEN) {
    return;
  }

  index++;
  subvalue += character;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (character === C_BRACKET_CLOSE) {
      break;
    } else if (character === C_BACKSLASH) {
      queue += character;
      index++;
      character = value.charAt(index);
    }

    queue += character;
    index++;
  }

  if (!queue || value.charAt(index) !== C_BRACKET_CLOSE || value.charAt(index + 1) !== C_COLON) {
    return;
  }

  identifier = queue;
  subvalue += queue + C_BRACKET_CLOSE + C_COLON;
  index = subvalue.length;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (character !== C_TAB && character !== C_SPACE && character !== C_NEWLINE) {
      break;
    }

    subvalue += character;
    index++;
  }

  character = value.charAt(index);
  queue = '';
  beforeURL = subvalue;

  if (character === C_LT) {
    index++;

    while (index < length) {
      character = value.charAt(index);

      if (!isEnclosedURLCharacter(character)) {
        break;
      }

      queue += character;
      index++;
    }

    character = value.charAt(index);

    if (character === isEnclosedURLCharacter.delimiter) {
      subvalue += C_LT + queue + character;
      index++;
    } else {
      if (commonmark) {
        return;
      }

      index -= queue.length + 1;
      queue = '';
    }
  }

  if (!queue) {
    while (index < length) {
      character = value.charAt(index);

      if (!isUnclosedURLCharacter(character)) {
        break;
      }

      queue += character;
      index++;
    }

    subvalue += queue;
  }

  if (!queue) {
    return;
  }

  url = queue;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (character !== C_TAB && character !== C_SPACE && character !== C_NEWLINE) {
      break;
    }

    queue += character;
    index++;
  }

  character = value.charAt(index);
  test = null;

  if (character === C_DOUBLE_QUOTE) {
    test = C_DOUBLE_QUOTE;
  } else if (character === C_SINGLE_QUOTE) {
    test = C_SINGLE_QUOTE;
  } else if (character === C_PAREN_OPEN) {
    test = C_PAREN_CLOSE;
  }

  if (!test) {
    queue = '';
    index = subvalue.length;
  } else if (queue) {
    subvalue += queue + character;
    index = subvalue.length;
    queue = '';

    while (index < length) {
      character = value.charAt(index);

      if (character === test) {
        break;
      }

      if (character === C_NEWLINE) {
        index++;
        character = value.charAt(index);

        if (character === C_NEWLINE || character === test) {
          return;
        }

        queue += C_NEWLINE;
      }

      queue += character;
      index++;
    }

    character = value.charAt(index);

    if (character !== test) {
      return;
    }

    beforeTitle = subvalue;
    subvalue += queue + character;
    index++;
    title = queue;
    queue = '';
  } else {
    return;
  }

  while (index < length) {
    character = value.charAt(index);

    if (character !== C_TAB && character !== C_SPACE) {
      break;
    }

    subvalue += character;
    index++;
  }

  character = value.charAt(index);

  if (!character || character === C_NEWLINE) {
    if (silent) {
      return true;
    }

    beforeURL = eat(beforeURL).test().end;
    url = self.decode.raw(self.unescape(url), beforeURL, { nonTerminated: false });

    if (title) {
      beforeTitle = eat(beforeTitle).test().end;
      title = self.decode.raw(self.unescape(title), beforeTitle);
    }

    return eat(subvalue)({
      type: 'definition',
      identifier: normalize(identifier),
      title: title || null,
      url: url
    });
  }
}

/* Check if `character` can be inside an enclosed URI. */
function isEnclosedURLCharacter(character) {
  return character !== C_GT && character !== C_BRACKET_OPEN && character !== C_BRACKET_CLOSE;
}

isEnclosedURLCharacter.delimiter = C_GT;

/* Check if `character` can be inside an unclosed URI. */
function isUnclosedURLCharacter(character) {
  return character !== C_BRACKET_OPEN && character !== C_BRACKET_CLOSE && !whitespace(character);
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/delete.js":
/*!**********************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/delete.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "./node_modules/is-whitespace-character/index.js");
var locate = __webpack_require__(/*! ../locate/delete */ "./node_modules/remark-parse/lib/locate/delete.js");

module.exports = strikethrough;
strikethrough.locator = locate;

var C_TILDE = '~';
var DOUBLE = '~~';

function strikethrough(eat, value, silent) {
  var self = this;
  var character = '';
  var previous = '';
  var preceding = '';
  var subvalue = '';
  var index;
  var length;
  var now;

  if (!self.options.gfm || value.charAt(0) !== C_TILDE || value.charAt(1) !== C_TILDE || whitespace(value.charAt(2))) {
    return;
  }

  index = 1;
  length = value.length;
  now = eat.now();
  now.column += 2;
  now.offset += 2;

  while (++index < length) {
    character = value.charAt(index);

    if (character === C_TILDE && previous === C_TILDE && (!preceding || !whitespace(preceding))) {
      /* istanbul ignore if - never used (yet) */
      if (silent) {
        return true;
      }

      return eat(DOUBLE + subvalue + DOUBLE)({
        type: 'delete',
        children: self.tokenizeInline(subvalue, now)
      });
    }

    subvalue += previous;
    preceding = previous;
    previous = character;
  }
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/emphasis.js":
/*!************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/emphasis.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(/*! trim */ "./node_modules/trim/index.js");
var word = __webpack_require__(/*! is-word-character */ "./node_modules/is-word-character/index.js");
var whitespace = __webpack_require__(/*! is-whitespace-character */ "./node_modules/is-whitespace-character/index.js");
var locate = __webpack_require__(/*! ../locate/emphasis */ "./node_modules/remark-parse/lib/locate/emphasis.js");

module.exports = emphasis;
emphasis.locator = locate;

var C_ASTERISK = '*';
var C_UNDERSCORE = '_';

function emphasis(eat, value, silent) {
  var self = this;
  var index = 0;
  var character = value.charAt(index);
  var now;
  var pedantic;
  var marker;
  var queue;
  var subvalue;
  var length;
  var prev;

  if (character !== C_ASTERISK && character !== C_UNDERSCORE) {
    return;
  }

  pedantic = self.options.pedantic;
  subvalue = character;
  marker = character;
  length = value.length;
  index++;
  queue = '';
  character = '';

  if (pedantic && whitespace(value.charAt(index))) {
    return;
  }

  while (index < length) {
    prev = character;
    character = value.charAt(index);

    if (character === marker && (!pedantic || !whitespace(prev))) {
      character = value.charAt(++index);

      if (character !== marker) {
        if (!trim(queue) || prev === marker) {
          return;
        }

        if (!pedantic && marker === C_UNDERSCORE && word(character)) {
          queue += marker;
          continue;
        }

        /* istanbul ignore if - never used (yet) */
        if (silent) {
          return true;
        }

        now = eat.now();
        now.column++;
        now.offset++;

        return eat(subvalue + queue + marker)({
          type: 'emphasis',
          children: self.tokenizeInline(queue, now)
        });
      }

      queue += marker;
    }

    if (!pedantic && character === '\\') {
      queue += character;
      character = value.charAt(++index);
    }

    queue += character;
    index++;
  }
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/escape.js":
/*!**********************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/escape.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var locate = __webpack_require__(/*! ../locate/escape */ "./node_modules/remark-parse/lib/locate/escape.js");

module.exports = escape;
escape.locator = locate;

function escape(eat, value, silent) {
  var self = this;
  var character;
  var node;

  if (value.charAt(0) === '\\') {
    character = value.charAt(1);

    if (self.escape.indexOf(character) !== -1) {
      /* istanbul ignore if - never used (yet) */
      if (silent) {
        return true;
      }

      if (character === '\n') {
        node = { type: 'break' };
      } else {
        node = {
          type: 'text',
          value: character
        };
      }

      return eat('\\' + character)(node);
    }
  }
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/footnote-definition.js":
/*!***********************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/footnote-definition.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "./node_modules/is-whitespace-character/index.js");
var normalize = __webpack_require__(/*! ../util/normalize */ "./node_modules/remark-parse/lib/util/normalize.js");

module.exports = footnoteDefinition;
footnoteDefinition.notInList = true;
footnoteDefinition.notInBlock = true;

var C_BACKSLASH = '\\';
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';
var C_CARET = '^';
var C_COLON = ':';

var EXPRESSION_INITIAL_TAB = /^( {4}|\t)?/gm;

function footnoteDefinition(eat, value, silent) {
  var self = this;
  var offsets = self.offset;
  var index;
  var length;
  var subvalue;
  var now;
  var currentLine;
  var content;
  var queue;
  var subqueue;
  var character;
  var identifier;
  var add;
  var exit;

  if (!self.options.footnotes) {
    return;
  }

  index = 0;
  length = value.length;
  subvalue = '';
  now = eat.now();
  currentLine = now.line;

  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    subvalue += character;
    index++;
  }

  if (value.charAt(index) !== C_BRACKET_OPEN || value.charAt(index + 1) !== C_CARET) {
    return;
  }

  subvalue += C_BRACKET_OPEN + C_CARET;
  index = subvalue.length;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (character === C_BRACKET_CLOSE) {
      break;
    } else if (character === C_BACKSLASH) {
      queue += character;
      index++;
      character = value.charAt(index);
    }

    queue += character;
    index++;
  }

  if (!queue || value.charAt(index) !== C_BRACKET_CLOSE || value.charAt(index + 1) !== C_COLON) {
    return;
  }

  if (silent) {
    return true;
  }

  identifier = normalize(queue);
  subvalue += queue + C_BRACKET_CLOSE + C_COLON;
  index = subvalue.length;

  while (index < length) {
    character = value.charAt(index);

    if (character !== C_TAB && character !== C_SPACE) {
      break;
    }

    subvalue += character;
    index++;
  }

  now.column += subvalue.length;
  now.offset += subvalue.length;
  queue = '';
  content = '';
  subqueue = '';

  while (index < length) {
    character = value.charAt(index);

    if (character === C_NEWLINE) {
      subqueue = character;
      index++;

      while (index < length) {
        character = value.charAt(index);

        if (character !== C_NEWLINE) {
          break;
        }

        subqueue += character;
        index++;
      }

      queue += subqueue;
      subqueue = '';

      while (index < length) {
        character = value.charAt(index);

        if (character !== C_SPACE) {
          break;
        }

        subqueue += character;
        index++;
      }

      if (subqueue.length === 0) {
        break;
      }

      queue += subqueue;
    }

    if (queue) {
      content += queue;
      queue = '';
    }

    content += character;
    index++;
  }

  subvalue += content;

  content = content.replace(EXPRESSION_INITIAL_TAB, function (line) {
    offsets[currentLine] = (offsets[currentLine] || 0) + line.length;
    currentLine++;

    return '';
  });

  add = eat(subvalue);

  exit = self.enterBlock();
  content = self.tokenizeBlock(content, now);
  exit();

  return add({
    type: 'footnoteDefinition',
    identifier: identifier,
    children: content
  });
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/heading-atx.js":
/*!***************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/heading-atx.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = atxHeading;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_HASH = '#';

var MAX_ATX_COUNT = 6;

function atxHeading(eat, value, silent) {
  var self = this;
  var settings = self.options;
  var length = value.length + 1;
  var index = -1;
  var now = eat.now();
  var subvalue = '';
  var content = '';
  var character;
  var queue;
  var depth;

  /* Eat initial spacing. */
  while (++index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      index--;
      break;
    }

    subvalue += character;
  }

  /* Eat hashes. */
  depth = 0;

  while (++index <= length) {
    character = value.charAt(index);

    if (character !== C_HASH) {
      index--;
      break;
    }

    subvalue += character;
    depth++;
  }

  if (depth > MAX_ATX_COUNT) {
    return;
  }

  if (!depth || !settings.pedantic && value.charAt(index + 1) === C_HASH) {
    return;
  }

  length = value.length + 1;

  /* Eat intermediate white-space. */
  queue = '';

  while (++index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      index--;
      break;
    }

    queue += character;
  }

  /* Exit when not in pedantic mode without spacing. */
  if (!settings.pedantic && queue.length === 0 && character && character !== C_NEWLINE) {
    return;
  }

  if (silent) {
    return true;
  }

  /* Eat content. */
  subvalue += queue;
  queue = '';
  content = '';

  while (++index < length) {
    character = value.charAt(index);

    if (!character || character === C_NEWLINE) {
      break;
    }

    if (character !== C_SPACE && character !== C_TAB && character !== C_HASH) {
      content += queue + character;
      queue = '';
      continue;
    }

    while (character === C_SPACE || character === C_TAB) {
      queue += character;
      character = value.charAt(++index);
    }

    while (character === C_HASH) {
      queue += character;
      character = value.charAt(++index);
    }

    while (character === C_SPACE || character === C_TAB) {
      queue += character;
      character = value.charAt(++index);
    }

    index--;
  }

  now.column += subvalue.length;
  now.offset += subvalue.length;
  subvalue += content + queue;

  return eat(subvalue)({
    type: 'heading',
    depth: depth,
    children: self.tokenizeInline(content, now)
  });
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/heading-setext.js":
/*!******************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/heading-setext.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = setextHeading;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_EQUALS = '=';
var C_DASH = '-';

var MAX_HEADING_INDENT = 3;

/* Map of characters which can be used to mark setext
 * headers, mapping to their corresponding depth. */
var SETEXT_MARKERS = {};

SETEXT_MARKERS[C_EQUALS] = 1;
SETEXT_MARKERS[C_DASH] = 2;

function setextHeading(eat, value, silent) {
  var self = this;
  var now = eat.now();
  var length = value.length;
  var index = -1;
  var subvalue = '';
  var content;
  var queue;
  var character;
  var marker;
  var depth;

  /* Eat initial indentation. */
  while (++index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE || index >= MAX_HEADING_INDENT) {
      index--;
      break;
    }

    subvalue += character;
  }

  /* Eat content. */
  content = '';
  queue = '';

  while (++index < length) {
    character = value.charAt(index);

    if (character === C_NEWLINE) {
      index--;
      break;
    }

    if (character === C_SPACE || character === C_TAB) {
      queue += character;
    } else {
      content += queue + character;
      queue = '';
    }
  }

  now.column += subvalue.length;
  now.offset += subvalue.length;
  subvalue += content + queue;

  /* Ensure the content is followed by a newline and a
   * valid marker. */
  character = value.charAt(++index);
  marker = value.charAt(++index);

  if (character !== C_NEWLINE || !SETEXT_MARKERS[marker]) {
    return;
  }

  subvalue += character;

  /* Eat Setext-line. */
  queue = marker;
  depth = SETEXT_MARKERS[marker];

  while (++index < length) {
    character = value.charAt(index);

    if (character !== marker) {
      if (character !== C_NEWLINE) {
        return;
      }

      index--;
      break;
    }

    queue += character;
  }

  if (silent) {
    return true;
  }

  return eat(subvalue + queue)({
    type: 'heading',
    depth: depth,
    children: self.tokenizeInline(content, now)
  });
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/html-block.js":
/*!**************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/html-block.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var openCloseTag = __webpack_require__(/*! ../util/html */ "./node_modules/remark-parse/lib/util/html.js").openCloseTag;

module.exports = blockHTML;

var C_TAB = '\t';
var C_SPACE = ' ';
var C_NEWLINE = '\n';
var C_LT = '<';

function blockHTML(eat, value, silent) {
  var self = this;
  var blocks = self.options.blocks;
  var length = value.length;
  var index = 0;
  var next;
  var line;
  var offset;
  var character;
  var count;
  var sequence;
  var subvalue;

  var sequences = [[/^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, true], [/^<!--/, /-->/, true], [/^<\?/, /\?>/, true], [/^<![A-Za-z]/, />/, true], [/^<!\[CDATA\[/, /\]\]>/, true], [new RegExp('^</?(' + blocks.join('|') + ')(?=(\\s|/?>|$))', 'i'), /^$/, true], [new RegExp(openCloseTag.source + '\\s*$'), /^$/, false]];

  /* Eat initial spacing. */
  while (index < length) {
    character = value.charAt(index);

    if (character !== C_TAB && character !== C_SPACE) {
      break;
    }

    index++;
  }

  if (value.charAt(index) !== C_LT) {
    return;
  }

  next = value.indexOf(C_NEWLINE, index + 1);
  next = next === -1 ? length : next;
  line = value.slice(index, next);
  offset = -1;
  count = sequences.length;

  while (++offset < count) {
    if (sequences[offset][0].test(line)) {
      sequence = sequences[offset];
      break;
    }
  }

  if (!sequence) {
    return;
  }

  if (silent) {
    return sequence[2];
  }

  index = next;

  if (!sequence[1].test(line)) {
    while (index < length) {
      next = value.indexOf(C_NEWLINE, index + 1);
      next = next === -1 ? length : next;
      line = value.slice(index + 1, next);

      if (sequence[1].test(line)) {
        if (line) {
          index = next;
        }

        break;
      }

      index = next;
    }
  }

  subvalue = value.slice(0, index);

  return eat(subvalue)({ type: 'html', value: subvalue });
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/html-inline.js":
/*!***************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/html-inline.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabetical = __webpack_require__(/*! is-alphabetical */ "./node_modules/is-alphabetical/index.js");
var locate = __webpack_require__(/*! ../locate/tag */ "./node_modules/remark-parse/lib/locate/tag.js");
var tag = __webpack_require__(/*! ../util/html */ "./node_modules/remark-parse/lib/util/html.js").tag;

module.exports = inlineHTML;
inlineHTML.locator = locate;

var EXPRESSION_HTML_LINK_OPEN = /^<a /i;
var EXPRESSION_HTML_LINK_CLOSE = /^<\/a>/i;

function inlineHTML(eat, value, silent) {
  var self = this;
  var length = value.length;
  var character;
  var subvalue;

  if (value.charAt(0) !== '<' || length < 3) {
    return;
  }

  character = value.charAt(1);

  if (!alphabetical(character) && character !== '?' && character !== '!' && character !== '/') {
    return;
  }

  subvalue = value.match(tag);

  if (!subvalue) {
    return;
  }

  /* istanbul ignore if - not used yet. */
  if (silent) {
    return true;
  }

  subvalue = subvalue[0];

  if (!self.inLink && EXPRESSION_HTML_LINK_OPEN.test(subvalue)) {
    self.inLink = true;
  } else if (self.inLink && EXPRESSION_HTML_LINK_CLOSE.test(subvalue)) {
    self.inLink = false;
  }

  return eat(subvalue)({ type: 'html', value: subvalue });
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/link.js":
/*!********************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/link.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "./node_modules/is-whitespace-character/index.js");
var locate = __webpack_require__(/*! ../locate/link */ "./node_modules/remark-parse/lib/locate/link.js");

module.exports = link;
link.locator = locate;

var own = {}.hasOwnProperty;

var C_BACKSLASH = '\\';
var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';
var C_PAREN_OPEN = '(';
var C_PAREN_CLOSE = ')';
var C_LT = '<';
var C_GT = '>';
var C_TICK = '`';
var C_DOUBLE_QUOTE = '"';
var C_SINGLE_QUOTE = '\'';

/* Map of characters, which can be used to mark link
 * and image titles. */
var LINK_MARKERS = {};

LINK_MARKERS[C_DOUBLE_QUOTE] = C_DOUBLE_QUOTE;
LINK_MARKERS[C_SINGLE_QUOTE] = C_SINGLE_QUOTE;

/* Map of characters, which can be used to mark link
 * and image titles in commonmark-mode. */
var COMMONMARK_LINK_MARKERS = {};

COMMONMARK_LINK_MARKERS[C_DOUBLE_QUOTE] = C_DOUBLE_QUOTE;
COMMONMARK_LINK_MARKERS[C_SINGLE_QUOTE] = C_SINGLE_QUOTE;
COMMONMARK_LINK_MARKERS[C_PAREN_OPEN] = C_PAREN_CLOSE;

function link(eat, value, silent) {
  var self = this;
  var subvalue = '';
  var index = 0;
  var character = value.charAt(0);
  var pedantic = self.options.pedantic;
  var commonmark = self.options.commonmark;
  var gfm = self.options.gfm;
  var closed;
  var count;
  var opening;
  var beforeURL;
  var beforeTitle;
  var subqueue;
  var hasMarker;
  var markers;
  var isImage;
  var content;
  var marker;
  var length;
  var title;
  var depth;
  var queue;
  var url;
  var now;
  var exit;
  var node;

  /* Detect whether this is an image. */
  if (character === '!') {
    isImage = true;
    subvalue = character;
    character = value.charAt(++index);
  }

  /* Eat the opening. */
  if (character !== C_BRACKET_OPEN) {
    return;
  }

  /* Exit when this is a link and we’re already inside
   * a link. */
  if (!isImage && self.inLink) {
    return;
  }

  subvalue += character;
  queue = '';
  index++;

  /* Eat the content. */
  length = value.length;
  now = eat.now();
  depth = 0;

  now.column += index;
  now.offset += index;

  while (index < length) {
    character = value.charAt(index);
    subqueue = character;

    if (character === C_TICK) {
      /* Inline-code in link content. */
      count = 1;

      while (value.charAt(index + 1) === C_TICK) {
        subqueue += character;
        index++;
        count++;
      }

      if (!opening) {
        opening = count;
      } else if (count >= opening) {
        opening = 0;
      }
    } else if (character === C_BACKSLASH) {
      /* Allow brackets to be escaped. */
      index++;
      subqueue += value.charAt(index);
      /* In GFM mode, brackets in code still count.
       * In all other modes, they don’t.  This empty
       * block prevents the next statements are
       * entered. */
    } else if ((!opening || gfm) && character === C_BRACKET_OPEN) {
      depth++;
    } else if ((!opening || gfm) && character === C_BRACKET_CLOSE) {
      if (depth) {
        depth--;
      } else {
        /* Allow white-space between content and
         * url in GFM mode. */
        if (!pedantic) {
          while (index < length) {
            character = value.charAt(index + 1);

            if (!whitespace(character)) {
              break;
            }

            subqueue += character;
            index++;
          }
        }

        if (value.charAt(index + 1) !== C_PAREN_OPEN) {
          return;
        }

        subqueue += C_PAREN_OPEN;
        closed = true;
        index++;

        break;
      }
    }

    queue += subqueue;
    subqueue = '';
    index++;
  }

  /* Eat the content closing. */
  if (!closed) {
    return;
  }

  content = queue;
  subvalue += queue + subqueue;
  index++;

  /* Eat white-space. */
  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    subvalue += character;
    index++;
  }

  /* Eat the URL. */
  character = value.charAt(index);
  markers = commonmark ? COMMONMARK_LINK_MARKERS : LINK_MARKERS;
  queue = '';
  beforeURL = subvalue;

  if (character === C_LT) {
    index++;
    beforeURL += C_LT;

    while (index < length) {
      character = value.charAt(index);

      if (character === C_GT) {
        break;
      }

      if (commonmark && character === '\n') {
        return;
      }

      queue += character;
      index++;
    }

    if (value.charAt(index) !== C_GT) {
      return;
    }

    subvalue += C_LT + queue + C_GT;
    url = queue;
    index++;
  } else {
    character = null;
    subqueue = '';

    while (index < length) {
      character = value.charAt(index);

      if (subqueue && own.call(markers, character)) {
        break;
      }

      if (whitespace(character)) {
        if (!pedantic) {
          break;
        }

        subqueue += character;
      } else {
        if (character === C_PAREN_OPEN) {
          depth++;
        } else if (character === C_PAREN_CLOSE) {
          if (depth === 0) {
            break;
          }

          depth--;
        }

        queue += subqueue;
        subqueue = '';

        if (character === C_BACKSLASH) {
          queue += C_BACKSLASH;
          character = value.charAt(++index);
        }

        queue += character;
      }

      index++;
    }

    subvalue += queue;
    url = queue;
    index = subvalue.length;
  }

  /* Eat white-space. */
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    queue += character;
    index++;
  }

  character = value.charAt(index);
  subvalue += queue;

  /* Eat the title. */
  if (queue && own.call(markers, character)) {
    index++;
    subvalue += character;
    queue = '';
    marker = markers[character];
    beforeTitle = subvalue;

    /* In commonmark-mode, things are pretty easy: the
     * marker cannot occur inside the title.
     *
     * Non-commonmark does, however, support nested
     * delimiters. */
    if (commonmark) {
      while (index < length) {
        character = value.charAt(index);

        if (character === marker) {
          break;
        }

        if (character === C_BACKSLASH) {
          queue += C_BACKSLASH;
          character = value.charAt(++index);
        }

        index++;
        queue += character;
      }

      character = value.charAt(index);

      if (character !== marker) {
        return;
      }

      title = queue;
      subvalue += queue + character;
      index++;

      while (index < length) {
        character = value.charAt(index);

        if (!whitespace(character)) {
          break;
        }

        subvalue += character;
        index++;
      }
    } else {
      subqueue = '';

      while (index < length) {
        character = value.charAt(index);

        if (character === marker) {
          if (hasMarker) {
            queue += marker + subqueue;
            subqueue = '';
          }

          hasMarker = true;
        } else if (!hasMarker) {
          queue += character;
        } else if (character === C_PAREN_CLOSE) {
          subvalue += queue + marker + subqueue;
          title = queue;
          break;
        } else if (whitespace(character)) {
          subqueue += character;
        } else {
          queue += marker + subqueue + character;
          subqueue = '';
          hasMarker = false;
        }

        index++;
      }
    }
  }

  if (value.charAt(index) !== C_PAREN_CLOSE) {
    return;
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  subvalue += C_PAREN_CLOSE;

  url = self.decode.raw(self.unescape(url), eat(beforeURL).test().end, { nonTerminated: false });

  if (title) {
    beforeTitle = eat(beforeTitle).test().end;
    title = self.decode.raw(self.unescape(title), beforeTitle);
  }

  node = {
    type: isImage ? 'image' : 'link',
    title: title || null,
    url: url
  };

  if (isImage) {
    node.alt = self.decode.raw(self.unescape(content), now) || null;
  } else {
    exit = self.enterLink();
    node.children = self.tokenizeInline(content, now);
    exit();
  }

  return eat(subvalue)(node);
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/list.js":
/*!********************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/list.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable max-params */

var trim = __webpack_require__(/*! trim */ "./node_modules/trim/index.js");
var repeat = __webpack_require__(/*! repeat-string */ "./node_modules/repeat-string/index.js");
var decimal = __webpack_require__(/*! is-decimal */ "./node_modules/is-decimal/index.js");
var getIndent = __webpack_require__(/*! ../util/get-indentation */ "./node_modules/remark-parse/lib/util/get-indentation.js");
var removeIndent = __webpack_require__(/*! ../util/remove-indentation */ "./node_modules/remark-parse/lib/util/remove-indentation.js");
var interrupt = __webpack_require__(/*! ../util/interrupt */ "./node_modules/remark-parse/lib/util/interrupt.js");

module.exports = list;

var C_ASTERISK = '*';
var C_UNDERSCORE = '_';
var C_PLUS = '+';
var C_DASH = '-';
var C_DOT = '.';
var C_SPACE = ' ';
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_PAREN_CLOSE = ')';
var C_X_LOWER = 'x';

var TAB_SIZE = 4;
var EXPRESSION_LOOSE_LIST_ITEM = /\n\n(?!\s*$)/;
var EXPRESSION_TASK_ITEM = /^\[([ \t]|x|X)][ \t]/;
var EXPRESSION_BULLET = /^([ \t]*)([*+-]|\d+[.)])( {1,4}(?! )| |\t|$|(?=\n))([^\n]*)/;
var EXPRESSION_PEDANTIC_BULLET = /^([ \t]*)([*+-]|\d+[.)])([ \t]+)/;
var EXPRESSION_INITIAL_INDENT = /^( {1,4}|\t)?/gm;

/* Map of characters which can be used to mark
 * list-items. */
var LIST_UNORDERED_MARKERS = {};

LIST_UNORDERED_MARKERS[C_ASTERISK] = true;
LIST_UNORDERED_MARKERS[C_PLUS] = true;
LIST_UNORDERED_MARKERS[C_DASH] = true;

/* Map of characters which can be used to mark
 * list-items after a digit. */
var LIST_ORDERED_MARKERS = {};

LIST_ORDERED_MARKERS[C_DOT] = true;

/* Map of characters which can be used to mark
 * list-items after a digit. */
var LIST_ORDERED_COMMONMARK_MARKERS = {};

LIST_ORDERED_COMMONMARK_MARKERS[C_DOT] = true;
LIST_ORDERED_COMMONMARK_MARKERS[C_PAREN_CLOSE] = true;

function list(eat, value, silent) {
  var self = this;
  var commonmark = self.options.commonmark;
  var pedantic = self.options.pedantic;
  var tokenizers = self.blockTokenizers;
  var interuptors = self.interruptList;
  var markers;
  var index = 0;
  var length = value.length;
  var start = null;
  var size = 0;
  var queue;
  var ordered;
  var character;
  var marker;
  var nextIndex;
  var startIndex;
  var prefixed;
  var currentMarker;
  var content;
  var line;
  var prevEmpty;
  var empty;
  var items;
  var allLines;
  var emptyLines;
  var item;
  var enterTop;
  var exitBlockquote;
  var isLoose;
  var node;
  var now;
  var end;
  var indented;

  while (index < length) {
    character = value.charAt(index);

    if (character === C_TAB) {
      size += TAB_SIZE - size % TAB_SIZE;
    } else if (character === C_SPACE) {
      size++;
    } else {
      break;
    }

    index++;
  }

  if (size >= TAB_SIZE) {
    return;
  }

  character = value.charAt(index);

  markers = commonmark ? LIST_ORDERED_COMMONMARK_MARKERS : LIST_ORDERED_MARKERS;

  if (LIST_UNORDERED_MARKERS[character] === true) {
    marker = character;
    ordered = false;
  } else {
    ordered = true;
    queue = '';

    while (index < length) {
      character = value.charAt(index);

      if (!decimal(character)) {
        break;
      }

      queue += character;
      index++;
    }

    character = value.charAt(index);

    if (!queue || markers[character] !== true) {
      return;
    }

    start = parseInt(queue, 10);
    marker = character;
  }

  character = value.charAt(++index);

  if (character !== C_SPACE && character !== C_TAB) {
    return;
  }

  if (silent) {
    return true;
  }

  index = 0;
  items = [];
  allLines = [];
  emptyLines = [];

  while (index < length) {
    nextIndex = value.indexOf(C_NEWLINE, index);
    startIndex = index;
    prefixed = false;
    indented = false;

    if (nextIndex === -1) {
      nextIndex = length;
    }

    end = index + TAB_SIZE;
    size = 0;

    while (index < length) {
      character = value.charAt(index);

      if (character === C_TAB) {
        size += TAB_SIZE - size % TAB_SIZE;
      } else if (character === C_SPACE) {
        size++;
      } else {
        break;
      }

      index++;
    }

    if (size >= TAB_SIZE) {
      indented = true;
    }

    if (item && size >= item.indent) {
      indented = true;
    }

    character = value.charAt(index);
    currentMarker = null;

    if (!indented) {
      if (LIST_UNORDERED_MARKERS[character] === true) {
        currentMarker = character;
        index++;
        size++;
      } else {
        queue = '';

        while (index < length) {
          character = value.charAt(index);

          if (!decimal(character)) {
            break;
          }

          queue += character;
          index++;
        }

        character = value.charAt(index);
        index++;

        if (queue && markers[character] === true) {
          currentMarker = character;
          size += queue.length + 1;
        }
      }

      if (currentMarker) {
        character = value.charAt(index);

        if (character === C_TAB) {
          size += TAB_SIZE - size % TAB_SIZE;
          index++;
        } else if (character === C_SPACE) {
          end = index + TAB_SIZE;

          while (index < end) {
            if (value.charAt(index) !== C_SPACE) {
              break;
            }

            index++;
            size++;
          }

          if (index === end && value.charAt(index) === C_SPACE) {
            index -= TAB_SIZE - 1;
            size -= TAB_SIZE - 1;
          }
        } else if (character !== C_NEWLINE && character !== '') {
          currentMarker = null;
        }
      }
    }

    if (currentMarker) {
      if (!pedantic && marker !== currentMarker) {
        break;
      }

      prefixed = true;
    } else {
      if (!commonmark && !indented && value.charAt(startIndex) === C_SPACE) {
        indented = true;
      } else if (commonmark && item) {
        indented = size >= item.indent || size > TAB_SIZE;
      }

      prefixed = false;
      index = startIndex;
    }

    line = value.slice(startIndex, nextIndex);
    content = startIndex === index ? line : value.slice(index, nextIndex);

    if (currentMarker === C_ASTERISK || currentMarker === C_UNDERSCORE || currentMarker === C_DASH) {
      if (tokenizers.thematicBreak.call(self, eat, line, true)) {
        break;
      }
    }

    prevEmpty = empty;
    empty = !trim(content).length;

    if (indented && item) {
      item.value = item.value.concat(emptyLines, line);
      allLines = allLines.concat(emptyLines, line);
      emptyLines = [];
    } else if (prefixed) {
      if (emptyLines.length !== 0) {
        item.value.push('');
        item.trail = emptyLines.concat();
      }

      item = {
        value: [line],
        indent: size,
        trail: []
      };

      items.push(item);
      allLines = allLines.concat(emptyLines, line);
      emptyLines = [];
    } else if (empty) {
      if (prevEmpty) {
        break;
      }

      emptyLines.push(line);
    } else {
      if (prevEmpty) {
        break;
      }

      if (interrupt(interuptors, tokenizers, self, [eat, line, true])) {
        break;
      }

      item.value = item.value.concat(emptyLines, line);
      allLines = allLines.concat(emptyLines, line);
      emptyLines = [];
    }

    index = nextIndex + 1;
  }

  node = eat(allLines.join(C_NEWLINE)).reset({
    type: 'list',
    ordered: ordered,
    start: start,
    loose: null,
    children: []
  });

  enterTop = self.enterList();
  exitBlockquote = self.enterBlock();
  isLoose = false;
  index = -1;
  length = items.length;

  while (++index < length) {
    item = items[index].value.join(C_NEWLINE);
    now = eat.now();

    item = eat(item)(listItem(self, item, now), node);

    if (item.loose) {
      isLoose = true;
    }

    item = items[index].trail.join(C_NEWLINE);

    if (index !== length - 1) {
      item += C_NEWLINE;
    }

    eat(item);
  }

  enterTop();
  exitBlockquote();

  node.loose = isLoose;

  return node;
}

function listItem(ctx, value, position) {
  var offsets = ctx.offset;
  var fn = ctx.options.pedantic ? pedanticListItem : normalListItem;
  var checked = null;
  var task;
  var indent;

  value = fn.apply(null, arguments);

  if (ctx.options.gfm) {
    task = value.match(EXPRESSION_TASK_ITEM);

    if (task) {
      indent = task[0].length;
      checked = task[1].toLowerCase() === C_X_LOWER;
      offsets[position.line] += indent;
      value = value.slice(indent);
    }
  }

  return {
    type: 'listItem',
    loose: EXPRESSION_LOOSE_LIST_ITEM.test(value) || value.charAt(value.length - 1) === C_NEWLINE,
    checked: checked,
    children: ctx.tokenizeBlock(value, position)
  };
}

/* Create a list-item using overly simple mechanics. */
function pedanticListItem(ctx, value, position) {
  var offsets = ctx.offset;
  var line = position.line;

  /* Remove the list-item’s bullet. */
  value = value.replace(EXPRESSION_PEDANTIC_BULLET, replacer);

  /* The initial line was also matched by the below, so
   * we reset the `line`. */
  line = position.line;

  return value.replace(EXPRESSION_INITIAL_INDENT, replacer);

  /* A simple replacer which removed all matches,
   * and adds their length to `offset`. */
  function replacer($0) {
    offsets[line] = (offsets[line] || 0) + $0.length;
    line++;

    return '';
  }
}

/* Create a list-item using sane mechanics. */
function normalListItem(ctx, value, position) {
  var offsets = ctx.offset;
  var line = position.line;
  var max;
  var bullet;
  var rest;
  var lines;
  var trimmedLines;
  var index;
  var length;

  /* Remove the list-item’s bullet. */
  value = value.replace(EXPRESSION_BULLET, replacer);

  lines = value.split(C_NEWLINE);

  trimmedLines = removeIndent(value, getIndent(max).indent).split(C_NEWLINE);

  /* We replaced the initial bullet with something
   * else above, which was used to trick
   * `removeIndentation` into removing some more
   * characters when possible.  However, that could
   * result in the initial line to be stripped more
   * than it should be. */
  trimmedLines[0] = rest;

  offsets[line] = (offsets[line] || 0) + bullet.length;
  line++;

  index = 0;
  length = lines.length;

  while (++index < length) {
    offsets[line] = (offsets[line] || 0) + lines[index].length - trimmedLines[index].length;
    line++;
  }

  return trimmedLines.join(C_NEWLINE);

  function replacer($0, $1, $2, $3, $4) {
    bullet = $1 + $2 + $3;
    rest = $4;

    /* Make sure that the first nine numbered list items
     * can indent with an extra space.  That is, when
     * the bullet did not receive an extra final space. */
    if (Number($2) < 10 && bullet.length % 2 === 1) {
      $2 = C_SPACE + $2;
    }

    max = $1 + repeat(C_SPACE, $2.length) + $3;

    return max + rest;
  }
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/newline.js":
/*!***********************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/newline.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "./node_modules/is-whitespace-character/index.js");

module.exports = newline;

/* Tokenise newline. */
function newline(eat, value, silent) {
  var character = value.charAt(0);
  var length;
  var subvalue;
  var queue;
  var index;

  if (character !== '\n') {
    return;
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  index = 1;
  length = value.length;
  subvalue = character;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    queue += character;

    if (character === '\n') {
      subvalue += queue;
      queue = '';
    }

    index++;
  }

  eat(subvalue);
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/paragraph.js":
/*!*************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/paragraph.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(/*! trim */ "./node_modules/trim/index.js");
var decimal = __webpack_require__(/*! is-decimal */ "./node_modules/is-decimal/index.js");
var trimTrailingLines = __webpack_require__(/*! trim-trailing-lines */ "./node_modules/trim-trailing-lines/index.js");
var interrupt = __webpack_require__(/*! ../util/interrupt */ "./node_modules/remark-parse/lib/util/interrupt.js");

module.exports = paragraph;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';

var TAB_SIZE = 4;

/* Tokenise paragraph. */
function paragraph(eat, value, silent) {
  var self = this;
  var settings = self.options;
  var commonmark = settings.commonmark;
  var gfm = settings.gfm;
  var tokenizers = self.blockTokenizers;
  var interruptors = self.interruptParagraph;
  var index = value.indexOf(C_NEWLINE);
  var length = value.length;
  var position;
  var subvalue;
  var character;
  var size;
  var now;

  while (index < length) {
    /* Eat everything if there’s no following newline. */
    if (index === -1) {
      index = length;
      break;
    }

    /* Stop if the next character is NEWLINE. */
    if (value.charAt(index + 1) === C_NEWLINE) {
      break;
    }

    /* In commonmark-mode, following indented lines
     * are part of the paragraph. */
    if (commonmark) {
      size = 0;
      position = index + 1;

      while (position < length) {
        character = value.charAt(position);

        if (character === C_TAB) {
          size = TAB_SIZE;
          break;
        } else if (character === C_SPACE) {
          size++;
        } else {
          break;
        }

        position++;
      }

      if (size >= TAB_SIZE) {
        index = value.indexOf(C_NEWLINE, index + 1);
        continue;
      }
    }

    subvalue = value.slice(index + 1);

    /* Check if the following code contains a possible
     * block. */
    if (interrupt(interruptors, tokenizers, self, [eat, subvalue, true])) {
      break;
    }

    /* Break if the following line starts a list, when
     * already in a list, or when in commonmark, or when
     * in gfm mode and the bullet is *not* numeric. */
    if (tokenizers.list.call(self, eat, subvalue, true) && (self.inList || commonmark || gfm && !decimal(trim.left(subvalue).charAt(0)))) {
      break;
    }

    position = index;
    index = value.indexOf(C_NEWLINE, index + 1);

    if (index !== -1 && trim(value.slice(position, index)) === '') {
      index = position;
      break;
    }
  }

  subvalue = value.slice(0, index);

  if (trim(subvalue) === '') {
    eat(subvalue);

    return null;
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  now = eat.now();
  subvalue = trimTrailingLines(subvalue);

  return eat(subvalue)({
    type: 'paragraph',
    children: self.tokenizeInline(subvalue, now)
  });
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/reference.js":
/*!*************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/reference.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "./node_modules/is-whitespace-character/index.js");
var locate = __webpack_require__(/*! ../locate/link */ "./node_modules/remark-parse/lib/locate/link.js");
var normalize = __webpack_require__(/*! ../util/normalize */ "./node_modules/remark-parse/lib/util/normalize.js");

module.exports = reference;
reference.locator = locate;

var T_LINK = 'link';
var T_IMAGE = 'image';
var T_FOOTNOTE = 'footnote';
var REFERENCE_TYPE_SHORTCUT = 'shortcut';
var REFERENCE_TYPE_COLLAPSED = 'collapsed';
var REFERENCE_TYPE_FULL = 'full';
var C_CARET = '^';
var C_BACKSLASH = '\\';
var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';

function reference(eat, value, silent) {
  var self = this;
  var character = value.charAt(0);
  var index = 0;
  var length = value.length;
  var subvalue = '';
  var intro = '';
  var type = T_LINK;
  var referenceType = REFERENCE_TYPE_SHORTCUT;
  var content;
  var identifier;
  var now;
  var node;
  var exit;
  var queue;
  var bracketed;
  var depth;

  /* Check whether we’re eating an image. */
  if (character === '!') {
    type = T_IMAGE;
    intro = character;
    character = value.charAt(++index);
  }

  if (character !== C_BRACKET_OPEN) {
    return;
  }

  index++;
  intro += character;
  queue = '';

  /* Check whether we’re eating a footnote. */
  if (self.options.footnotes && value.charAt(index) === C_CARET) {
    /* Exit if `![^` is found, so the `!` will be seen as text after this,
     * and we’ll enter this function again when `[^` is found. */
    if (type === T_IMAGE) {
      return;
    }

    intro += C_CARET;
    index++;
    type = T_FOOTNOTE;
  }

  /* Eat the text. */
  depth = 0;

  while (index < length) {
    character = value.charAt(index);

    if (character === C_BRACKET_OPEN) {
      bracketed = true;
      depth++;
    } else if (character === C_BRACKET_CLOSE) {
      if (!depth) {
        break;
      }

      depth--;
    }

    if (character === C_BACKSLASH) {
      queue += C_BACKSLASH;
      character = value.charAt(++index);
    }

    queue += character;
    index++;
  }

  subvalue = queue;
  content = queue;
  character = value.charAt(index);

  if (character !== C_BRACKET_CLOSE) {
    return;
  }

  index++;
  subvalue += character;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    queue += character;
    index++;
  }

  character = value.charAt(index);

  /* Inline footnotes cannot have an identifier. */
  if (type !== T_FOOTNOTE && character === C_BRACKET_OPEN) {
    identifier = '';
    queue += character;
    index++;

    while (index < length) {
      character = value.charAt(index);

      if (character === C_BRACKET_OPEN || character === C_BRACKET_CLOSE) {
        break;
      }

      if (character === C_BACKSLASH) {
        identifier += C_BACKSLASH;
        character = value.charAt(++index);
      }

      identifier += character;
      index++;
    }

    character = value.charAt(index);

    if (character === C_BRACKET_CLOSE) {
      referenceType = identifier ? REFERENCE_TYPE_FULL : REFERENCE_TYPE_COLLAPSED;
      queue += identifier + character;
      index++;
    } else {
      identifier = '';
    }

    subvalue += queue;
    queue = '';
  } else {
    if (!content) {
      return;
    }

    identifier = content;
  }

  /* Brackets cannot be inside the identifier. */
  if (referenceType !== REFERENCE_TYPE_FULL && bracketed) {
    return;
  }

  subvalue = intro + subvalue;

  if (type === T_LINK && self.inLink) {
    return null;
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  if (type === T_FOOTNOTE && content.indexOf(' ') !== -1) {
    return eat(subvalue)({
      type: 'footnote',
      children: this.tokenizeInline(content, eat.now())
    });
  }

  now = eat.now();
  now.column += intro.length;
  now.offset += intro.length;
  identifier = referenceType === REFERENCE_TYPE_FULL ? identifier : content;

  node = {
    type: type + 'Reference',
    identifier: normalize(identifier)
  };

  if (type === T_LINK || type === T_IMAGE) {
    node.referenceType = referenceType;
  }

  if (type === T_LINK) {
    exit = self.enterLink();
    node.children = self.tokenizeInline(content, now);
    exit();
  } else if (type === T_IMAGE) {
    node.alt = self.decode.raw(self.unescape(content), now) || null;
  }

  return eat(subvalue)(node);
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/strong.js":
/*!**********************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/strong.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(/*! trim */ "./node_modules/trim/index.js");
var whitespace = __webpack_require__(/*! is-whitespace-character */ "./node_modules/is-whitespace-character/index.js");
var locate = __webpack_require__(/*! ../locate/strong */ "./node_modules/remark-parse/lib/locate/strong.js");

module.exports = strong;
strong.locator = locate;

var C_ASTERISK = '*';
var C_UNDERSCORE = '_';

function strong(eat, value, silent) {
  var self = this;
  var index = 0;
  var character = value.charAt(index);
  var now;
  var pedantic;
  var marker;
  var queue;
  var subvalue;
  var length;
  var prev;

  if (character !== C_ASTERISK && character !== C_UNDERSCORE || value.charAt(++index) !== character) {
    return;
  }

  pedantic = self.options.pedantic;
  marker = character;
  subvalue = marker + marker;
  length = value.length;
  index++;
  queue = '';
  character = '';

  if (pedantic && whitespace(value.charAt(index))) {
    return;
  }

  while (index < length) {
    prev = character;
    character = value.charAt(index);

    if (character === marker && value.charAt(index + 1) === marker && (!pedantic || !whitespace(prev))) {
      character = value.charAt(index + 2);

      if (character !== marker) {
        if (!trim(queue)) {
          return;
        }

        /* istanbul ignore if - never used (yet) */
        if (silent) {
          return true;
        }

        now = eat.now();
        now.column += 2;
        now.offset += 2;

        return eat(subvalue + queue + subvalue)({
          type: 'strong',
          children: self.tokenizeInline(queue, now)
        });
      }
    }

    if (!pedantic && character === '\\') {
      queue += character;
      character = value.charAt(++index);
    }

    queue += character;
    index++;
  }
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/table.js":
/*!*********************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/table.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "./node_modules/is-whitespace-character/index.js");

module.exports = table;

var C_BACKSLASH = '\\';
var C_TICK = '`';
var C_DASH = '-';
var C_PIPE = '|';
var C_COLON = ':';
var C_SPACE = ' ';
var C_NEWLINE = '\n';
var C_TAB = '\t';

var MIN_TABLE_COLUMNS = 1;
var MIN_TABLE_ROWS = 2;

var TABLE_ALIGN_LEFT = 'left';
var TABLE_ALIGN_CENTER = 'center';
var TABLE_ALIGN_RIGHT = 'right';
var TABLE_ALIGN_NONE = null;

function table(eat, value, silent) {
  var self = this;
  var index;
  var alignments;
  var alignment;
  var subvalue;
  var row;
  var length;
  var lines;
  var queue;
  var character;
  var hasDash;
  var align;
  var cell;
  var preamble;
  var count;
  var opening;
  var now;
  var position;
  var lineCount;
  var line;
  var rows;
  var table;
  var lineIndex;
  var pipeIndex;
  var first;

  /* Exit when not in gfm-mode. */
  if (!self.options.gfm) {
    return;
  }

  /* Get the rows.
   * Detecting tables soon is hard, so there are some
   * checks for performance here, such as the minimum
   * number of rows, and allowed characters in the
   * alignment row. */
  index = 0;
  lineCount = 0;
  length = value.length + 1;
  lines = [];

  while (index < length) {
    lineIndex = value.indexOf(C_NEWLINE, index);
    pipeIndex = value.indexOf(C_PIPE, index + 1);

    if (lineIndex === -1) {
      lineIndex = value.length;
    }

    if (pipeIndex === -1 || pipeIndex > lineIndex) {
      if (lineCount < MIN_TABLE_ROWS) {
        return;
      }

      break;
    }

    lines.push(value.slice(index, lineIndex));
    lineCount++;
    index = lineIndex + 1;
  }

  /* Parse the alignment row. */
  subvalue = lines.join(C_NEWLINE);
  alignments = lines.splice(1, 1)[0] || [];
  index = 0;
  length = alignments.length;
  lineCount--;
  alignment = false;
  align = [];

  while (index < length) {
    character = alignments.charAt(index);

    if (character === C_PIPE) {
      hasDash = null;

      if (alignment === false) {
        if (first === false) {
          return;
        }
      } else {
        align.push(alignment);
        alignment = false;
      }

      first = false;
    } else if (character === C_DASH) {
      hasDash = true;
      alignment = alignment || TABLE_ALIGN_NONE;
    } else if (character === C_COLON) {
      if (alignment === TABLE_ALIGN_LEFT) {
        alignment = TABLE_ALIGN_CENTER;
      } else if (hasDash && alignment === TABLE_ALIGN_NONE) {
        alignment = TABLE_ALIGN_RIGHT;
      } else {
        alignment = TABLE_ALIGN_LEFT;
      }
    } else if (!whitespace(character)) {
      return;
    }

    index++;
  }

  if (alignment !== false) {
    align.push(alignment);
  }

  /* Exit when without enough columns. */
  if (align.length < MIN_TABLE_COLUMNS) {
    return;
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  /* Parse the rows. */
  position = -1;
  rows = [];

  table = eat(subvalue).reset({
    type: 'table',
    align: align,
    children: rows
  });

  while (++position < lineCount) {
    line = lines[position];
    row = { type: 'tableRow', children: [] };

    /* Eat a newline character when this is not the
     * first row. */
    if (position) {
      eat(C_NEWLINE);
    }

    /* Eat the row. */
    eat(line).reset(row, table);

    length = line.length + 1;
    index = 0;
    queue = '';
    cell = '';
    preamble = true;
    count = null;
    opening = null;

    while (index < length) {
      character = line.charAt(index);

      if (character === C_TAB || character === C_SPACE) {
        if (cell) {
          queue += character;
        } else {
          eat(character);
        }

        index++;
        continue;
      }

      if (character === '' || character === C_PIPE) {
        if (preamble) {
          eat(character);
        } else {
          if (character && opening) {
            queue += character;
            index++;
            continue;
          }

          if ((cell || character) && !preamble) {
            subvalue = cell;

            if (queue.length > 1) {
              if (character) {
                subvalue += queue.slice(0, queue.length - 1);
                queue = queue.charAt(queue.length - 1);
              } else {
                subvalue += queue;
                queue = '';
              }
            }

            now = eat.now();

            eat(subvalue)({
              type: 'tableCell',
              children: self.tokenizeInline(cell, now)
            }, row);
          }

          eat(queue + character);

          queue = '';
          cell = '';
        }
      } else {
        if (queue) {
          cell += queue;
          queue = '';
        }

        cell += character;

        if (character === C_BACKSLASH && index !== length - 2) {
          cell += line.charAt(index + 1);
          index++;
        }

        if (character === C_TICK) {
          count = 1;

          while (line.charAt(index + 1) === character) {
            cell += character;
            index++;
            count++;
          }

          if (!opening) {
            opening = count;
          } else if (count >= opening) {
            opening = 0;
          }
        }
      }

      preamble = false;
      index++;
    }

    /* Eat the alignment row. */
    if (!position) {
      eat(C_NEWLINE + alignments);
    }
  }

  return table;
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/text.js":
/*!********************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/text.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = text;

function text(eat, value, silent) {
  var self = this;
  var methods;
  var tokenizers;
  var index;
  var length;
  var subvalue;
  var position;
  var tokenizer;
  var name;
  var min;
  var now;

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  methods = self.inlineMethods;
  length = methods.length;
  tokenizers = self.inlineTokenizers;
  index = -1;
  min = value.length;

  while (++index < length) {
    name = methods[index];

    if (name === 'text' || !tokenizers[name]) {
      continue;
    }

    tokenizer = tokenizers[name].locator;

    if (!tokenizer) {
      eat.file.fail('Missing locator: `' + name + '`');
    }

    position = tokenizer.call(self, value, 1);

    if (position !== -1 && position < min) {
      min = position;
    }
  }

  subvalue = value.slice(0, min);
  now = eat.now();

  self.decode(subvalue, now, function (content, position, source) {
    eat(source || content)({
      type: 'text',
      value: content
    });
  });
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/thematic-break.js":
/*!******************************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/thematic-break.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = thematicBreak;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_ASTERISK = '*';
var C_UNDERSCORE = '_';
var C_DASH = '-';

var THEMATIC_BREAK_MARKER_COUNT = 3;

function thematicBreak(eat, value, silent) {
  var index = -1;
  var length = value.length + 1;
  var subvalue = '';
  var character;
  var marker;
  var markerCount;
  var queue;

  while (++index < length) {
    character = value.charAt(index);

    if (character !== C_TAB && character !== C_SPACE) {
      break;
    }

    subvalue += character;
  }

  if (character !== C_ASTERISK && character !== C_DASH && character !== C_UNDERSCORE) {
    return;
  }

  marker = character;
  subvalue += character;
  markerCount = 1;
  queue = '';

  while (++index < length) {
    character = value.charAt(index);

    if (character === marker) {
      markerCount++;
      subvalue += queue + marker;
      queue = '';
    } else if (character === C_SPACE) {
      queue += character;
    } else if (markerCount >= THEMATIC_BREAK_MARKER_COUNT && (!character || character === C_NEWLINE)) {
      subvalue += queue;

      if (silent) {
        return true;
      }

      return eat(subvalue)({ type: 'thematicBreak' });
    } else {
      return;
    }
  }
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenize/url.js":
/*!*******************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenize/url.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var decode = __webpack_require__(/*! parse-entities */ "./node_modules/parse-entities/index.js");
var whitespace = __webpack_require__(/*! is-whitespace-character */ "./node_modules/is-whitespace-character/index.js");
var locate = __webpack_require__(/*! ../locate/url */ "./node_modules/remark-parse/lib/locate/url.js");

module.exports = url;
url.locator = locate;
url.notInLink = true;

var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';
var C_PAREN_OPEN = '(';
var C_PAREN_CLOSE = ')';
var C_LT = '<';
var C_AT_SIGN = '@';

var HTTP_PROTOCOL = 'http://';
var HTTPS_PROTOCOL = 'https://';
var MAILTO_PROTOCOL = 'mailto:';

var PROTOCOLS = [HTTP_PROTOCOL, HTTPS_PROTOCOL, MAILTO_PROTOCOL];

var PROTOCOLS_LENGTH = PROTOCOLS.length;

function url(eat, value, silent) {
  var self = this;
  var subvalue;
  var content;
  var character;
  var index;
  var position;
  var protocol;
  var match;
  var length;
  var queue;
  var parenCount;
  var nextCharacter;
  var exit;

  if (!self.options.gfm) {
    return;
  }

  subvalue = '';
  index = -1;
  length = PROTOCOLS_LENGTH;

  while (++index < length) {
    protocol = PROTOCOLS[index];
    match = value.slice(0, protocol.length);

    if (match.toLowerCase() === protocol) {
      subvalue = match;
      break;
    }
  }

  if (!subvalue) {
    return;
  }

  index = subvalue.length;
  length = value.length;
  queue = '';
  parenCount = 0;

  while (index < length) {
    character = value.charAt(index);

    if (whitespace(character) || character === C_LT) {
      break;
    }

    if (character === '.' || character === ',' || character === ':' || character === ';' || character === '"' || character === '\'' || character === ')' || character === ']') {
      nextCharacter = value.charAt(index + 1);

      if (!nextCharacter || whitespace(nextCharacter)) {
        break;
      }
    }

    if (character === C_PAREN_OPEN || character === C_BRACKET_OPEN) {
      parenCount++;
    }

    if (character === C_PAREN_CLOSE || character === C_BRACKET_CLOSE) {
      parenCount--;

      if (parenCount < 0) {
        break;
      }
    }

    queue += character;
    index++;
  }

  if (!queue) {
    return;
  }

  subvalue += queue;
  content = subvalue;

  if (protocol === MAILTO_PROTOCOL) {
    position = queue.indexOf(C_AT_SIGN);

    if (position === -1 || position === length - 1) {
      return;
    }

    content = content.substr(MAILTO_PROTOCOL.length);
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  exit = self.enterLink();
  content = self.tokenizeInline(content, eat.now());
  exit();

  return eat(subvalue)({
    type: 'link',
    title: null,
    url: decode(subvalue, { nonTerminated: false }),
    children: content
  });
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/tokenizer.js":
/*!****************************************************!*\
  !*** ./node_modules/remark-parse/lib/tokenizer.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory;

var MERGEABLE_NODES = {
  text: mergeText,
  blockquote: mergeBlockquote
};

/* Check whether a node is mergeable with adjacent nodes. */
function mergeable(node) {
  var start;
  var end;

  if (node.type !== 'text' || !node.position) {
    return true;
  }

  start = node.position.start;
  end = node.position.end;

  /* Only merge nodes which occupy the same size as their
   * `value`. */
  return start.line !== end.line || end.column - start.column === node.value.length;
}

/* Merge two text nodes: `node` into `prev`. */
function mergeText(prev, node) {
  prev.value += node.value;

  return prev;
}

/* Merge two blockquotes: `node` into `prev`, unless in
 * CommonMark mode. */
function mergeBlockquote(prev, node) {
  if (this.options.commonmark) {
    return node;
  }

  prev.children = prev.children.concat(node.children);

  return prev;
}

/* Construct a tokenizer.  This creates both
 * `tokenizeInline` and `tokenizeBlock`. */
function factory(type) {
  return tokenize;

  /* Tokenizer for a bound `type`. */
  function tokenize(value, location) {
    var self = this;
    var offset = self.offset;
    var tokens = [];
    var methods = self[type + 'Methods'];
    var tokenizers = self[type + 'Tokenizers'];
    var line = location.line;
    var column = location.column;
    var index;
    var length;
    var method;
    var name;
    var matched;
    var valueLength;

    /* Trim white space only lines. */
    if (!value) {
      return tokens;
    }

    /* Expose on `eat`. */
    eat.now = now;
    eat.file = self.file;

    /* Sync initial offset. */
    updatePosition('');

    /* Iterate over `value`, and iterate over all
     * tokenizers.  When one eats something, re-iterate
     * with the remaining value.  If no tokenizer eats,
     * something failed (should not happen) and an
     * exception is thrown. */
    while (value) {
      index = -1;
      length = methods.length;
      matched = false;

      while (++index < length) {
        name = methods[index];
        method = tokenizers[name];

        if (method && (
        /* istanbul ignore next */!method.onlyAtStart || self.atStart) && (!method.notInList || !self.inList) && (!method.notInBlock || !self.inBlock) && (!method.notInLink || !self.inLink)) {
          valueLength = value.length;

          method.apply(self, [eat, value]);

          matched = valueLength !== value.length;

          if (matched) {
            break;
          }
        }
      }

      /* istanbul ignore if */
      if (!matched) {
        self.file.fail(new Error('Infinite loop'), eat.now());
      }
    }

    self.eof = now();

    return tokens;

    /* Update line, column, and offset based on
     * `value`. */
    function updatePosition(subvalue) {
      var lastIndex = -1;
      var index = subvalue.indexOf('\n');

      while (index !== -1) {
        line++;
        lastIndex = index;
        index = subvalue.indexOf('\n', index + 1);
      }

      if (lastIndex === -1) {
        column += subvalue.length;
      } else {
        column = subvalue.length - lastIndex;
      }

      if (line in offset) {
        if (lastIndex !== -1) {
          column += offset[line];
        } else if (column <= offset[line]) {
          column = offset[line] + 1;
        }
      }
    }

    /* Get offset.  Called before the first character is
     * eaten to retrieve the range's offsets. */
    function getOffset() {
      var indentation = [];
      var pos = line + 1;

      /* Done.  Called when the last character is
       * eaten to retrieve the range’s offsets. */
      return function () {
        var last = line + 1;

        while (pos < last) {
          indentation.push((offset[pos] || 0) + 1);

          pos++;
        }

        return indentation;
      };
    }

    /* Get the current position. */
    function now() {
      var pos = { line: line, column: column };

      pos.offset = self.toOffset(pos);

      return pos;
    }

    /* Store position information for a node. */
    function Position(start) {
      this.start = start;
      this.end = now();
    }

    /* Throw when a value is incorrectly eaten.
     * This shouldn’t happen but will throw on new,
     * incorrect rules. */
    function validateEat(subvalue) {
      /* istanbul ignore if */
      if (value.substring(0, subvalue.length) !== subvalue) {
        /* Capture stack-trace. */
        self.file.fail(new Error('Incorrectly eaten value: please report this ' + 'warning on http://git.io/vg5Ft'), now());
      }
    }

    /* Mark position and patch `node.position`. */
    function position() {
      var before = now();

      return update;

      /* Add the position to a node. */
      function update(node, indent) {
        var prev = node.position;
        var start = prev ? prev.start : before;
        var combined = [];
        var n = prev && prev.end.line;
        var l = before.line;

        node.position = new Position(start);

        /* If there was already a `position`, this
         * node was merged.  Fixing `start` wasn’t
         * hard, but the indent is different.
         * Especially because some information, the
         * indent between `n` and `l` wasn’t
         * tracked.  Luckily, that space is
         * (should be?) empty, so we can safely
         * check for it now. */
        if (prev && indent && prev.indent) {
          combined = prev.indent;

          if (n < l) {
            while (++n < l) {
              combined.push((offset[n] || 0) + 1);
            }

            combined.push(before.column);
          }

          indent = combined.concat(indent);
        }

        node.position.indent = indent || [];

        return node;
      }
    }

    /* Add `node` to `parent`s children or to `tokens`.
     * Performs merges where possible. */
    function add(node, parent) {
      var children = parent ? parent.children : tokens;
      var prev = children[children.length - 1];

      if (prev && node.type === prev.type && node.type in MERGEABLE_NODES && mergeable(prev) && mergeable(node)) {
        node = MERGEABLE_NODES[node.type].call(self, prev, node);
      }

      if (node !== prev) {
        children.push(node);
      }

      if (self.atStart && tokens.length !== 0) {
        self.exitStart();
      }

      return node;
    }

    /* Remove `subvalue` from `value`.
     * `subvalue` must be at the start of `value`. */
    function eat(subvalue) {
      var indent = getOffset();
      var pos = position();
      var current = now();

      validateEat(subvalue);

      apply.reset = reset;
      reset.test = test;
      apply.test = test;

      value = value.substring(subvalue.length);

      updatePosition(subvalue);

      indent = indent();

      return apply;

      /* Add the given arguments, add `position` to
       * the returned node, and return the node. */
      function apply(node, parent) {
        return pos(add(pos(node), parent), indent);
      }

      /* Functions just like apply, but resets the
       * content:  the line and column are reversed,
       * and the eaten value is re-added.
       * This is useful for nodes with a single
       * type of content, such as lists and tables.
       * See `apply` above for what parameters are
       * expected. */
      function reset() {
        var node = apply.apply(null, arguments);

        line = current.line;
        column = current.column;
        value = subvalue + value;

        return node;
      }

      /* Test the position, after eating, and reverse
       * to a not-eaten state. */
      function test() {
        var result = pos({});

        line = current.line;
        column = current.column;
        value = subvalue + value;

        return result.position;
      }
    }
  }
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/unescape.js":
/*!***************************************************!*\
  !*** ./node_modules/remark-parse/lib/unescape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory;

/* Factory to de-escape a value, based on a list at `key`
 * in `ctx`. */
function factory(ctx, key) {
  return unescape;

  /* De-escape a string using the expression at `key`
   * in `ctx`. */
  function unescape(value) {
    var prev = 0;
    var index = value.indexOf('\\');
    var escape = ctx[key];
    var queue = [];
    var character;

    while (index !== -1) {
      queue.push(value.slice(prev, index));
      prev = index + 1;
      character = value.charAt(prev);

      /* If the following character is not a valid escape,
       * add the slash. */
      if (!character || escape.indexOf(character) === -1) {
        queue.push('\\');
      }

      index = value.indexOf('\\', prev);
    }

    queue.push(value.slice(prev));

    return queue.join('');
  }
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/util/get-indentation.js":
/*!***************************************************************!*\
  !*** ./node_modules/remark-parse/lib/util/get-indentation.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = indentation;

/* Map of characters, and their column length,
 * which can be used as indentation. */
var characters = { ' ': 1, '\t': 4 };

/* Gets indentation information for a line. */
function indentation(value) {
  var index = 0;
  var indent = 0;
  var character = value.charAt(index);
  var stops = {};
  var size;

  while (character in characters) {
    size = characters[character];

    indent += size;

    if (size > 1) {
      indent = Math.floor(indent / size) * size;
    }

    stops[indent] = index;

    character = value.charAt(++index);
  }

  return { indent: indent, stops: stops };
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/util/html.js":
/*!****************************************************!*\
  !*** ./node_modules/remark-parse/lib/util/html.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var attributeName = '[a-zA-Z_:][a-zA-Z0-9:._-]*';
var unquoted = '[^"\'=<>`\\u0000-\\u0020]+';
var singleQuoted = '\'[^\']*\'';
var doubleQuoted = '"[^"]*"';
var attributeValue = '(?:' + unquoted + '|' + singleQuoted + '|' + doubleQuoted + ')';
var attribute = '(?:\\s+' + attributeName + '(?:\\s*=\\s*' + attributeValue + ')?)';
var openTag = '<[A-Za-z][A-Za-z0-9\\-]*' + attribute + '*\\s*\\/?>';
var closeTag = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>';
var comment = '<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->';
var processing = '<[?].*?[?]>';
var declaration = '<![A-Za-z]+\\s+[^>]*>';
var cdata = '<!\\[CDATA\\[[\\s\\S]*?\\]\\]>';

exports.openCloseTag = new RegExp('^(?:' + openTag + '|' + closeTag + ')');

exports.tag = new RegExp('^(?:' + openTag + '|' + closeTag + '|' + comment + '|' + processing + '|' + declaration + '|' + cdata + ')');

/***/ }),

/***/ "./node_modules/remark-parse/lib/util/interrupt.js":
/*!*********************************************************!*\
  !*** ./node_modules/remark-parse/lib/util/interrupt.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = interrupt;

function interrupt(interruptors, tokenizers, ctx, params) {
  var bools = ['pedantic', 'commonmark'];
  var count = bools.length;
  var length = interruptors.length;
  var index = -1;
  var interruptor;
  var config;
  var fn;
  var offset;
  var bool;
  var ignore;

  while (++index < length) {
    interruptor = interruptors[index];
    config = interruptor[1] || {};
    fn = interruptor[0];
    offset = -1;
    ignore = false;

    while (++offset < count) {
      bool = bools[offset];

      if (config[bool] !== undefined && config[bool] !== ctx.options[bool]) {
        ignore = true;
        break;
      }
    }

    if (ignore) {
      continue;
    }

    if (tokenizers[fn].apply(ctx, params)) {
      return true;
    }
  }

  return false;
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/util/normalize.js":
/*!*********************************************************!*\
  !*** ./node_modules/remark-parse/lib/util/normalize.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var collapseWhiteSpace = __webpack_require__(/*! collapse-white-space */ "./node_modules/collapse-white-space/index.js");

module.exports = normalize;

/* Normalize an identifier.  Collapses multiple white space
 * characters into a single space, and removes casing. */
function normalize(value) {
  return collapseWhiteSpace(value).toLowerCase();
}

/***/ }),

/***/ "./node_modules/remark-parse/lib/util/remove-indentation.js":
/*!******************************************************************!*\
  !*** ./node_modules/remark-parse/lib/util/remove-indentation.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(/*! trim */ "./node_modules/trim/index.js");
var repeat = __webpack_require__(/*! repeat-string */ "./node_modules/repeat-string/index.js");
var getIndent = __webpack_require__(/*! ./get-indentation */ "./node_modules/remark-parse/lib/util/get-indentation.js");

module.exports = indentation;

var C_SPACE = ' ';
var C_NEWLINE = '\n';
var C_TAB = '\t';

/* Remove the minimum indent from every line in `value`.
 * Supports both tab, spaced, and mixed indentation (as
 * well as possible). */
function indentation(value, maximum) {
  var values = value.split(C_NEWLINE);
  var position = values.length + 1;
  var minIndent = Infinity;
  var matrix = [];
  var index;
  var indentation;
  var stops;
  var padding;

  values.unshift(repeat(C_SPACE, maximum) + '!');

  while (position--) {
    indentation = getIndent(values[position]);

    matrix[position] = indentation.stops;

    if (trim(values[position]).length === 0) {
      continue;
    }

    if (indentation.indent) {
      if (indentation.indent > 0 && indentation.indent < minIndent) {
        minIndent = indentation.indent;
      }
    } else {
      minIndent = Infinity;

      break;
    }
  }

  if (minIndent !== Infinity) {
    position = values.length;

    while (position--) {
      stops = matrix[position];
      index = minIndent;

      while (index && !(index in stops)) {
        index--;
      }

      if (trim(values[position]).length !== 0 && minIndent && index !== minIndent) {
        padding = C_TAB;
      } else {
        padding = '';
      }

      values[position] = padding + values[position].slice(index in stops ? stops[index] + 1 : 0);
    }
  }

  values.shift();

  return values.join(C_NEWLINE);
}

/***/ }),

/***/ "./node_modules/repeat-string/index.js":
/*!*********************************************!*\
  !*** ./node_modules/repeat-string/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



/**
 * Results cache
 */

var res = '';
var cache;

/**
 * Expose `repeat`
 */

module.exports = repeat;

/**
 * Repeat the given `string` the specified `number`
 * of times.
 *
 * **Example:**
 *
 * ```js
 * var repeat = require('repeat-string');
 * repeat('A', 5);
 * //=> AAAAA
 * ```
 *
 * @param {String} `string` The string to repeat
 * @param {Number} `number` The number of times to repeat the string
 * @return {String} Repeated string
 * @api public
 */

function repeat(str, num) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }

  // cover common, quick use cases
  if (num === 1) return str;
  if (num === 2) return str + str;

  var max = str.length * num;
  if (cache !== str || typeof cache === 'undefined') {
    cache = str;
    res = '';
  } else if (res.length >= max) {
    return res.substr(0, max);
  }

  while (max > res.length && num > 1) {
    if (num & 1) {
      res += str;
    }

    num >>= 1;
    str += str;
  }

  res += str;
  res = res.substr(0, max);
  return res;
}

/***/ }),

/***/ "./node_modules/replace-ext/index.js":
/*!*******************************************!*\
  !*** ./node_modules/replace-ext/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");

function replaceExt(npath, ext) {
  if (typeof npath !== 'string') {
    return npath;
  }

  if (npath.length === 0) {
    return npath;
  }

  var nFileName = path.basename(npath, path.extname(npath)) + ext;
  return path.join(path.dirname(npath), nFileName);
}

module.exports = replaceExt;

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
        // Callback can either be a function or a string
        if (typeof callback !== "function") {
            callback = new Function("" + callback);
        }
        // Copy function arguments
        var args = new Array(arguments.length - 1);
        for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i + 1];
        }
        // Store and register the task
        var task = { callback: callback, args: args };
        tasksByHandle[nextHandle] = task;
        registerImmediate(nextHandle);
        return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
            case 0:
                callback();
                break;
            case 1:
                callback(args[0]);
                break;
            case 2:
                callback(args[0], args[1]);
                break;
            case 3:
                callback(args[0], args[1], args[2]);
                break;
            default:
                callback.apply(undefined, args);
                break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function registerImmediate(handle) {
            process.nextTick(function () {
                runIfPresent(handle);
            });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function () {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function onGlobalMessage(event) {
            if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function registerImmediate(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function (event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function registerImmediate(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function registerImmediate(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function registerImmediate(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();
    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();
    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();
    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();
    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/state-toggle/index.js":
/*!********************************************!*\
  !*** ./node_modules/state-toggle/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory;

/* Construct a state `toggler`: a function which inverses
 * `property` in context based on its current value.
 * The by `toggler` returned function restores that value. */
function factory(key, state, ctx) {
  return enter;

  function enter() {
    var context = ctx || this;
    var current = context[key];

    context[key] = !state;

    return exit;

    function exit() {
      context[key] = current;
    }
  }
}

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function () {};
Timeout.prototype.close = function () {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/trim-trailing-lines/index.js":
/*!***************************************************!*\
  !*** ./node_modules/trim-trailing-lines/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = trimTrailingLines;

var line = '\n';

/* Remove final newline characters from `value`. */
function trimTrailingLines(value) {
  var val = String(value);
  var index = val.length;

  while (val.charAt(--index) === line) {
    /* Empty */
  }

  return val.slice(0, index + 1);
}

/***/ }),

/***/ "./node_modules/trim/index.js":
/*!************************************!*\
  !*** ./node_modules/trim/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {


exports = module.exports = trim;

function trim(str) {
  return str.replace(/^\s*|\s*$/g, '');
}

exports.left = function (str) {
  return str.replace(/^\s*/, '');
};

exports.right = function (str) {
  return str.replace(/\s*$/, '');
};

/***/ }),

/***/ "./node_modules/trough/index.js":
/*!**************************************!*\
  !*** ./node_modules/trough/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Expose. */

module.exports = trough;

/* Methods. */
var slice = [].slice;

/* Create new middleware. */
function trough() {
  var fns = [];
  var middleware = {};

  middleware.run = run;
  middleware.use = use;

  return middleware;

  /* Run `fns`.  Last argument must be
   * a completion handler. */
  function run() {
    var index = -1;
    var input = slice.call(arguments, 0, -1);
    var done = arguments[arguments.length - 1];

    if (typeof done !== 'function') {
      throw new Error('Expected function as last argument, not ' + done);
    }

    next.apply(null, [null].concat(input));

    /* Run the next `fn`, if any. */
    function next(err) {
      var fn = fns[++index];
      var params = slice.call(arguments, 0);
      var values = params.slice(1);
      var length = input.length;
      var pos = -1;

      if (err) {
        done(err);
        return;
      }

      /* Copy non-nully input into values. */
      while (++pos < length) {
        if (values[pos] === null || values[pos] === undefined) {
          values[pos] = input[pos];
        }
      }

      input = values;

      /* Next or done. */
      if (fn) {
        wrap(fn, next).apply(null, input);
      } else {
        done.apply(null, [null].concat(input));
      }
    }
  }

  /* Add `fn` to the list. */
  function use(fn) {
    if (typeof fn !== 'function') {
      throw new Error('Expected `fn` to be a function, not ' + fn);
    }

    fns.push(fn);

    return middleware;
  }
}

/* Wrap `fn`.  Can be sync or async; return a promise,
 * receive a completion handler, return new values and
 * errors. */
function wrap(fn, next) {
  var invoked;

  return wrapped;

  function wrapped() {
    var params = slice.call(arguments, 0);
    var callback = fn.length > params.length;
    var result;

    if (callback) {
      params.push(done);
    }

    try {
      result = fn.apply(null, params);
    } catch (err) {
      /* Well, this is quite the pickle.  `fn` received
       * a callback and invoked it (thus continuing the
       * pipeline), but later also threw an error.
       * We’re not about to restart the pipeline again,
       * so the only thing left to do is to throw the
       * thing instea. */
      if (callback && invoked) {
        throw err;
      }

      return done(err);
    }

    if (!callback) {
      if (result && typeof result.then === 'function') {
        result.then(then, done);
      } else if (result instanceof Error) {
        done(result);
      } else {
        then(result);
      }
    }
  }

  /* Invoke `next`, only once. */
  function done() {
    if (!invoked) {
      invoked = true;

      next.apply(null, arguments);
    }
  }

  /* Invoke `done` with one value.
   * Tracks if an error is passed, too. */
  function then(value) {
    done(null, value);
  }
}

/***/ }),

/***/ "./node_modules/unherit/index.js":
/*!***************************************!*\
  !*** ./node_modules/unherit/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");
var inherits = __webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js");

module.exports = unherit;

/* Create a custom constructor which can be modified
 * without affecting the original class. */
function unherit(Super) {
  var result;
  var key;
  var value;

  inherits(Of, Super);
  inherits(From, Of);

  /* Clone values. */
  result = Of.prototype;

  for (key in result) {
    value = result[key];

    if (value && typeof value === 'object') {
      result[key] = 'concat' in value ? value.concat() : xtend(value);
    }
  }

  return Of;

  /* Constructor accepting a single argument,
   * which itself is an `arguments` object. */
  function From(parameters) {
    return Super.apply(this, parameters);
  }

  /* Constructor accepting variadic arguments. */
  function Of() {
    if (!(this instanceof Of)) {
      return new From(arguments);
    }

    return Super.apply(this, arguments);
  }
}

/***/ }),

/***/ "./node_modules/unified/index.js":
/*!***************************************!*\
  !*** ./node_modules/unified/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Dependencies. */

var extend = __webpack_require__(/*! extend */ "./node_modules/extend/index.js");
var bail = __webpack_require__(/*! bail */ "./node_modules/bail/index.js");
var vfile = __webpack_require__(/*! vfile */ "./node_modules/vfile/index.js");
var trough = __webpack_require__(/*! trough */ "./node_modules/trough/index.js");
var string = __webpack_require__(/*! x-is-string */ "./node_modules/x-is-string/index.js");
var plain = __webpack_require__(/*! is-plain-obj */ "./node_modules/is-plain-obj/index.js");

/* Expose a frozen processor. */
module.exports = unified().freeze();

var slice = [].slice;
var own = {}.hasOwnProperty;

/* Process pipeline. */
var pipeline = trough().use(pipelineParse).use(pipelineRun).use(pipelineStringify);

function pipelineParse(p, ctx) {
  ctx.tree = p.parse(ctx.file);
}

function pipelineRun(p, ctx, next) {
  p.run(ctx.tree, ctx.file, done);

  function done(err, tree, file) {
    if (err) {
      next(err);
    } else {
      ctx.tree = tree;
      ctx.file = file;
      next();
    }
  }
}

function pipelineStringify(p, ctx) {
  ctx.file.contents = p.stringify(ctx.tree, ctx.file);
}

/* Function to create the first processor. */
function unified() {
  var attachers = [];
  var transformers = trough();
  var namespace = {};
  var frozen = false;
  var freezeIndex = -1;

  /* Data management. */
  processor.data = data;

  /* Lock. */
  processor.freeze = freeze;

  /* Plug-ins. */
  processor.attachers = attachers;
  processor.use = use;

  /* API. */
  processor.parse = parse;
  processor.stringify = stringify;
  processor.run = run;
  processor.runSync = runSync;
  processor.process = process;
  processor.processSync = processSync;

  /* Expose. */
  return processor;

  /* Create a new processor based on the processor
   * in the current scope. */
  function processor() {
    var destination = unified();
    var length = attachers.length;
    var index = -1;

    while (++index < length) {
      destination.use.apply(null, attachers[index]);
    }

    destination.data(extend(true, {}, namespace));

    return destination;
  }

  /* Freeze: used to signal a processor that has finished
   * configuration.
   *
   * For example, take unified itself.  It’s frozen.
   * Plug-ins should not be added to it.  Rather, it should
   * be extended, by invoking it, before modifying it.
   *
   * In essence, always invoke this when exporting a
   * processor. */
  function freeze() {
    var values;
    var plugin;
    var options;
    var transformer;

    if (frozen) {
      return processor;
    }

    while (++freezeIndex < attachers.length) {
      values = attachers[freezeIndex];
      plugin = values[0];
      options = values[1];
      transformer = null;

      if (options === false) {
        continue;
      }

      if (options === true) {
        values[1] = undefined;
      }

      transformer = plugin.apply(processor, values.slice(1));

      if (typeof transformer === 'function') {
        transformers.use(transformer);
      }
    }

    frozen = true;
    freezeIndex = Infinity;

    return processor;
  }

  /* Data management.
   * Getter / setter for processor-specific informtion. */
  function data(key, value) {
    if (string(key)) {
      /* Set `key`. */
      if (arguments.length === 2) {
        assertUnfrozen('data', frozen);

        namespace[key] = value;

        return processor;
      }

      /* Get `key`. */
      return own.call(namespace, key) && namespace[key] || null;
    }

    /* Set space. */
    if (key) {
      assertUnfrozen('data', frozen);
      namespace = key;
      return processor;
    }

    /* Get space. */
    return namespace;
  }

  /* Plug-in management.
   *
   * Pass it:
   * *   an attacher and options,
   * *   a preset,
   * *   a list of presets, attachers, and arguments (list
   *     of attachers and options). */
  function use(value) {
    var settings;

    assertUnfrozen('use', frozen);

    if (value === null || value === undefined) {
      /* Empty */
    } else if (typeof value === 'function') {
      addPlugin.apply(null, arguments);
    } else if (typeof value === 'object') {
      if ('length' in value) {
        addList(value);
      } else {
        addPreset(value);
      }
    } else {
      throw new Error('Expected usable value, not `' + value + '`');
    }

    if (settings) {
      namespace.settings = extend(namespace.settings || {}, settings);
    }

    return processor;

    function addPreset(result) {
      addList(result.plugins);

      if (result.settings) {
        settings = extend(settings || {}, result.settings);
      }
    }

    function add(value) {
      if (typeof value === 'function') {
        addPlugin(value);
      } else if (typeof value === 'object') {
        if ('length' in value) {
          addPlugin.apply(null, value);
        } else {
          addPreset(value);
        }
      } else {
        throw new Error('Expected usable value, not `' + value + '`');
      }
    }

    function addList(plugins) {
      var length;
      var index;

      if (plugins === null || plugins === undefined) {
        /* Empty */
      } else if (typeof plugins === 'object' && 'length' in plugins) {
        length = plugins.length;
        index = -1;

        while (++index < length) {
          add(plugins[index]);
        }
      } else {
        throw new Error('Expected a list of plugins, not `' + plugins + '`');
      }
    }

    function addPlugin(plugin, value) {
      var entry = find(plugin);

      if (entry) {
        if (plain(entry[1]) && plain(value)) {
          value = extend(entry[1], value);
        }

        entry[1] = value;
      } else {
        attachers.push(slice.call(arguments));
      }
    }
  }

  function find(plugin) {
    var length = attachers.length;
    var index = -1;
    var entry;

    while (++index < length) {
      entry = attachers[index];

      if (entry[0] === plugin) {
        return entry;
      }
    }
  }

  /* Parse a file (in string or VFile representation)
   * into a Unist node using the `Parser` on the
   * processor. */
  function parse(doc) {
    var file = vfile(doc);
    var Parser;

    freeze();
    Parser = processor.Parser;
    assertParser('parse', Parser);

    if (newable(Parser)) {
      return new Parser(String(file), file).parse();
    }

    return Parser(String(file), file); // eslint-disable-line new-cap
  }

  /* Run transforms on a Unist node representation of a file
   * (in string or VFile representation), async. */
  function run(node, file, cb) {
    assertNode(node);
    freeze();

    if (!cb && typeof file === 'function') {
      cb = file;
      file = null;
    }

    if (!cb) {
      return new Promise(executor);
    }

    executor(null, cb);

    function executor(resolve, reject) {
      transformers.run(node, vfile(file), done);

      function done(err, tree, file) {
        tree = tree || node;
        if (err) {
          reject(err);
        } else if (resolve) {
          resolve(tree);
        } else {
          cb(null, tree, file);
        }
      }
    }
  }

  /* Run transforms on a Unist node representation of a file
   * (in string or VFile representation), sync. */
  function runSync(node, file) {
    var complete = false;
    var result;

    run(node, file, done);

    assertDone('runSync', 'run', complete);

    return result;

    function done(err, tree) {
      complete = true;
      bail(err);
      result = tree;
    }
  }

  /* Stringify a Unist node representation of a file
   * (in string or VFile representation) into a string
   * using the `Compiler` on the processor. */
  function stringify(node, doc) {
    var file = vfile(doc);
    var Compiler;

    freeze();
    Compiler = processor.Compiler;
    assertCompiler('stringify', Compiler);
    assertNode(node);

    if (newable(Compiler)) {
      return new Compiler(node, file).compile();
    }

    return Compiler(node, file); // eslint-disable-line new-cap
  }

  /* Parse a file (in string or VFile representation)
   * into a Unist node using the `Parser` on the processor,
   * then run transforms on that node, and compile the
   * resulting node using the `Compiler` on the processor,
   * and store that result on the VFile. */
  function process(doc, cb) {
    freeze();
    assertParser('process', processor.Parser);
    assertCompiler('process', processor.Compiler);

    if (!cb) {
      return new Promise(executor);
    }

    executor(null, cb);

    function executor(resolve, reject) {
      var file = vfile(doc);

      pipeline.run(processor, { file: file }, done);

      function done(err) {
        if (err) {
          reject(err);
        } else if (resolve) {
          resolve(file);
        } else {
          cb(null, file);
        }
      }
    }
  }

  /* Process the given document (in string or VFile
   * representation), sync. */
  function processSync(doc) {
    var complete = false;
    var file;

    freeze();
    assertParser('processSync', processor.Parser);
    assertCompiler('processSync', processor.Compiler);
    file = vfile(doc);

    process(file, done);

    assertDone('processSync', 'process', complete);

    return file;

    function done(err) {
      complete = true;
      bail(err);
    }
  }
}

/* Check if `func` is a constructor. */
function newable(value) {
  return typeof value === 'function' && keys(value.prototype);
}

/* Check if `value` is an object with keys. */
function keys(value) {
  var key;
  for (key in value) {
    return true;
  }
  return false;
}

/* Assert a parser is available. */
function assertParser(name, Parser) {
  if (typeof Parser !== 'function') {
    throw new Error('Cannot `' + name + '` without `Parser`');
  }
}

/* Assert a compiler is available. */
function assertCompiler(name, Compiler) {
  if (typeof Compiler !== 'function') {
    throw new Error('Cannot `' + name + '` without `Compiler`');
  }
}

/* Assert the processor is not frozen. */
function assertUnfrozen(name, frozen) {
  if (frozen) {
    throw new Error(['Cannot invoke `' + name + '` on a frozen processor.\nCreate a new ', 'processor first, by invoking it: use `processor()` instead of ', '`processor`.'].join(''));
  }
}

/* Assert `node` is a Unist node. */
function assertNode(node) {
  if (!node || !string(node.type)) {
    throw new Error('Expected node, got `' + node + '`');
  }
}

/* Assert that `complete` is `true`. */
function assertDone(name, asyncName, complete) {
  if (!complete) {
    throw new Error('`' + name + '` finished async. Use `' + asyncName + '` instead');
  }
}

/***/ }),

/***/ "./node_modules/unist-util-is/index.js":
/*!*********************************************!*\
  !*** ./node_modules/unist-util-is/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable max-params */

/* Expose. */

module.exports = is;

/* Assert if `test` passes for `node`.
 * When a `parent` node is known the `index` of node */
function is(test, node, index, parent, context) {
  var hasParent = parent !== null && parent !== undefined;
  var hasIndex = index !== null && index !== undefined;
  var check = convert(test);

  if (hasIndex && (typeof index !== 'number' || index < 0 || index === Infinity)) {
    throw new Error('Expected positive finite index or child node');
  }

  if (hasParent && (!is(null, parent) || !parent.children)) {
    throw new Error('Expected parent node');
  }

  if (!node || !node.type || typeof node.type !== 'string') {
    return false;
  }

  if (hasParent !== hasIndex) {
    throw new Error('Expected both parent and index');
  }

  return Boolean(check.call(context, node, index, parent));
}

function convert(test) {
  if (typeof test === 'string') {
    return typeFactory(test);
  }

  if (test === null || test === undefined) {
    return ok;
  }

  if (typeof test === 'object') {
    return ('length' in test ? anyFactory : matchesFactory)(test);
  }

  if (typeof test === 'function') {
    return test;
  }

  throw new Error('Expected function, string, or object as test');
}

function convertAll(tests) {
  var results = [];
  var length = tests.length;
  var index = -1;

  while (++index < length) {
    results[index] = convert(tests[index]);
  }

  return results;
}

/* Utility assert each property in `test` is represented
 * in `node`, and each values are strictly equal. */
function matchesFactory(test) {
  return matches;

  function matches(node) {
    var key;

    for (key in test) {
      if (node[key] !== test[key]) {
        return false;
      }
    }

    return true;
  }
}

function anyFactory(tests) {
  var checks = convertAll(tests);
  var length = checks.length;

  return matches;

  function matches() {
    var index = -1;

    while (++index < length) {
      if (checks[index].apply(this, arguments)) {
        return true;
      }
    }

    return false;
  }
}

/* Utility to convert a string into a function which checks
 * a given node’s type for said string. */
function typeFactory(test) {
  return type;

  function type(node) {
    return Boolean(node && node.type === test);
  }
}

/* Utility to return true. */
function ok() {
  return true;
}

/***/ }),

/***/ "./node_modules/unist-util-remove-position/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/unist-util-remove-position/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var visit = __webpack_require__(/*! unist-util-visit */ "./node_modules/unist-util-visit/index.js");

module.exports = removePosition;

/* Remove `position`s from `tree`. */
function removePosition(node, force) {
  visit(node, force ? hard : soft);
  return node;
}

function hard(node) {
  delete node.position;
}

function soft(node) {
  node.position = undefined;
}

/***/ }),

/***/ "./node_modules/unist-util-stringify-position/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/unist-util-stringify-position/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var own = {}.hasOwnProperty;

module.exports = stringify;

function stringify(value) {
  /* Nothing. */
  if (!value || typeof value !== 'object') {
    return null;
  }

  /* Node. */
  if (own.call(value, 'position') || own.call(value, 'type')) {
    return position(value.position);
  }

  /* Position. */
  if (own.call(value, 'start') || own.call(value, 'end')) {
    return position(value);
  }

  /* Point. */
  if (own.call(value, 'line') || own.call(value, 'column')) {
    return point(value);
  }

  /* ? */
  return null;
}

function point(point) {
  if (!point || typeof point !== 'object') {
    point = {};
  }

  return index(point.line) + ':' + index(point.column);
}

function position(pos) {
  if (!pos || typeof pos !== 'object') {
    pos = {};
  }

  return point(pos.start) + '-' + point(pos.end);
}

function index(value) {
  return value && typeof value === 'number' ? value : 1;
}

/***/ }),

/***/ "./node_modules/unist-util-visit/index.js":
/*!************************************************!*\
  !*** ./node_modules/unist-util-visit/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = visit;

var is = __webpack_require__(/*! unist-util-is */ "./node_modules/unist-util-is/index.js");

var CONTINUE = true;
var SKIP = 'skip';
var EXIT = false;

visit.CONTINUE = CONTINUE;
visit.SKIP = SKIP;
visit.EXIT = EXIT;

function visit(tree, test, visitor, reverse) {
  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor;
    visitor = test;
    test = null;
  }

  one(tree);

  /* Visit a single node. */
  function one(node, index, parent) {
    var result;

    index = index || (parent ? 0 : null);

    if (!test || node.type === test || is(test, node, index, parent || null)) {
      result = visitor(node, index, parent || null);
    }

    if (result === EXIT) {
      return result;
    }

    if (node.children && result !== SKIP) {
      return all(node.children, node) === EXIT ? EXIT : result;
    }

    return result;
  }

  /* Visit children in `parent`. */
  function all(children, parent) {
    var step = reverse ? -1 : 1;
    var index = (reverse ? children.length : -1) + step;
    var child;
    var result;

    while (index > -1 && index < children.length) {
      child = children[index];
      result = child && one(child, index, parent);

      if (result === EXIT) {
        return result;
      }

      index = typeof result === 'number' ? result : index + step;
    }

    return CONTINUE;
  }
}

/***/ }),

/***/ "./node_modules/vfile-location/index.js":
/*!**********************************************!*\
  !*** ./node_modules/vfile-location/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Expose. */

module.exports = factory;

/* Factory. */
function factory(file) {
  var contents = indices(String(file));

  return {
    toPosition: offsetToPositionFactory(contents),
    toOffset: positionToOffsetFactory(contents)
  };
}

/* Factory to get the line and column-based `position` for
 * `offset` in the bound indices. */
function offsetToPositionFactory(indices) {
  return offsetToPosition;

  /* Get the line and column-based `position` for
   * `offset` in the bound indices. */
  function offsetToPosition(offset) {
    var index = -1;
    var length = indices.length;

    if (offset < 0) {
      return {};
    }

    while (++index < length) {
      if (indices[index] > offset) {
        return {
          line: index + 1,
          column: offset - (indices[index - 1] || 0) + 1,
          offset: offset
        };
      }
    }

    return {};
  }
}

/* Factory to get the `offset` for a line and column-based
 * `position` in the bound indices. */
function positionToOffsetFactory(indices) {
  return positionToOffset;

  /* Get the `offset` for a line and column-based
   * `position` in the bound indices. */
  function positionToOffset(position) {
    var line = position && position.line;
    var column = position && position.column;

    if (!isNaN(line) && !isNaN(column) && line - 1 in indices) {
      return (indices[line - 2] || 0) + column - 1 || 0;
    }

    return -1;
  }
}

/* Get indices of line-breaks in `value`. */
function indices(value) {
  var result = [];
  var index = value.indexOf('\n');

  while (index !== -1) {
    result.push(index + 1);
    index = value.indexOf('\n', index + 1);
  }

  result.push(value.length + 1);

  return result;
}

/***/ }),

/***/ "./node_modules/vfile-message/index.js":
/*!*********************************************!*\
  !*** ./node_modules/vfile-message/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(/*! unist-util-stringify-position */ "./node_modules/unist-util-stringify-position/index.js");

module.exports = VMessage;

/* Inherit from `Error#`. */
function VMessagePrototype() {}
VMessagePrototype.prototype = Error.prototype;
VMessage.prototype = new VMessagePrototype();

/* Message properties. */
var proto = VMessage.prototype;

proto.file = '';
proto.name = '';
proto.reason = '';
proto.message = '';
proto.stack = '';
proto.fatal = null;
proto.column = null;
proto.line = null;

/* Construct a new VMessage.
 *
 * Note: We cannot invoke `Error` on the created context,
 * as that adds readonly `line` and `column` attributes on
 * Safari 9, thus throwing and failing the data. */
function VMessage(reason, position, origin) {
  var parts;
  var range;
  var location;

  if (typeof position === 'string') {
    origin = position;
    position = null;
  }

  parts = parseOrigin(origin);
  range = stringify(position) || '1:1';

  location = {
    start: { line: null, column: null },
    end: { line: null, column: null }

    /* Node. */
  };if (position && position.position) {
    position = position.position;
  }

  if (position) {
    /* Position. */
    if (position.start) {
      location = position;
      position = position.start;
    } else {
      /* Point. */
      location.start = position;
    }
  }

  if (reason.stack) {
    this.stack = reason.stack;
    reason = reason.message;
  }

  this.message = reason;
  this.name = range;
  this.reason = reason;
  this.line = position ? position.line : null;
  this.column = position ? position.column : null;
  this.location = location;
  this.source = parts[0];
  this.ruleId = parts[1];
}

function parseOrigin(origin) {
  var result = [null, null];
  var index;

  if (typeof origin === 'string') {
    index = origin.indexOf(':');

    if (index === -1) {
      result[1] = origin;
    } else {
      result[0] = origin.slice(0, index);
      result[1] = origin.slice(index + 1);
    }
  }

  return result;
}

/***/ }),

/***/ "./node_modules/vfile/core.js":
/*!************************************!*\
  !*** ./node_modules/vfile/core.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
var replace = __webpack_require__(/*! replace-ext */ "./node_modules/replace-ext/index.js");
var buffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js");

module.exports = VFile;

var own = {}.hasOwnProperty;
var proto = VFile.prototype;

proto.toString = toString;

/* Order of setting (least specific to most), we need this because
 * otherwise `{stem: 'a', path: '~/b.js'}` would throw, as a path
 * is needed before a stem can be set. */
var order = ['history', 'path', 'basename', 'stem', 'extname', 'dirname'];

/* Construct a new file. */
function VFile(options) {
  var prop;
  var index;
  var length;

  if (!options) {
    options = {};
  } else if (typeof options === 'string' || buffer(options)) {
    options = { contents: options };
  } else if ('message' in options && 'messages' in options) {
    return options;
  }

  if (!(this instanceof VFile)) {
    return new VFile(options);
  }

  this.data = {};
  this.messages = [];
  this.history = [];
  this.cwd = process.cwd();

  /* Set path related properties in the correct order. */
  index = -1;
  length = order.length;

  while (++index < length) {
    prop = order[index];

    if (own.call(options, prop)) {
      this[prop] = options[prop];
    }
  }

  /* Set non-path related properties. */
  for (prop in options) {
    if (order.indexOf(prop) === -1) {
      this[prop] = options[prop];
    }
  }
}

/* Access full path (`~/index.min.js`). */
Object.defineProperty(proto, 'path', {
  get: function get() {
    return this.history[this.history.length - 1];
  },
  set: function set(path) {
    assertNonEmpty(path, 'path');

    if (path !== this.path) {
      this.history.push(path);
    }
  }
});

/* Access parent path (`~`). */
Object.defineProperty(proto, 'dirname', {
  get: function get() {
    return typeof this.path === 'string' ? path.dirname(this.path) : undefined;
  },
  set: function set(dirname) {
    assertPath(this.path, 'dirname');
    this.path = path.join(dirname || '', this.basename);
  }
});

/* Access basename (`index.min.js`). */
Object.defineProperty(proto, 'basename', {
  get: function get() {
    return typeof this.path === 'string' ? path.basename(this.path) : undefined;
  },
  set: function set(basename) {
    assertNonEmpty(basename, 'basename');
    assertPart(basename, 'basename');
    this.path = path.join(this.dirname || '', basename);
  }
});

/* Access extname (`.js`). */
Object.defineProperty(proto, 'extname', {
  get: function get() {
    return typeof this.path === 'string' ? path.extname(this.path) : undefined;
  },
  set: function set(extname) {
    var ext = extname || '';

    assertPart(ext, 'extname');
    assertPath(this.path, 'extname');

    if (ext) {
      if (ext.charAt(0) !== '.') {
        throw new Error('`extname` must start with `.`');
      }

      if (ext.indexOf('.', 1) !== -1) {
        throw new Error('`extname` cannot contain multiple dots');
      }
    }

    this.path = replace(this.path, ext);
  }
});

/* Access stem (`index.min`). */
Object.defineProperty(proto, 'stem', {
  get: function get() {
    return typeof this.path === 'string' ? path.basename(this.path, this.extname) : undefined;
  },
  set: function set(stem) {
    assertNonEmpty(stem, 'stem');
    assertPart(stem, 'stem');
    this.path = path.join(this.dirname || '', stem + (this.extname || ''));
  }
});

/* Get the value of the file. */
function toString(encoding) {
  var value = this.contents || '';
  return buffer(value) ? value.toString(encoding) : String(value);
}

/* Assert that `part` is not a path (i.e., does
 * not contain `path.sep`). */
function assertPart(part, name) {
  if (part.indexOf(path.sep) !== -1) {
    throw new Error('`' + name + '` cannot be a path: did not expect `' + path.sep + '`');
  }
}

/* Assert that `part` is not empty. */
function assertNonEmpty(part, name) {
  if (!part) {
    throw new Error('`' + name + '` cannot be empty');
  }
}

/* Assert `path` exists. */
function assertPath(path, name) {
  if (!path) {
    throw new Error('Setting `' + name + '` requires `path` to be set too');
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/vfile/index.js":
/*!*************************************!*\
  !*** ./node_modules/vfile/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var VMessage = __webpack_require__(/*! vfile-message */ "./node_modules/vfile-message/index.js");
var VFile = __webpack_require__(/*! ./core.js */ "./node_modules/vfile/core.js");

module.exports = VFile;

var proto = VFile.prototype;

proto.message = message;
proto.info = info;
proto.fail = fail;

/* Slight backwards compatibility.  Remove in the future. */
proto.warn = message;

/* Create a message with `reason` at `position`.
 * When an error is passed in as `reason`, copies the stack. */
function message(reason, position, origin) {
  var filePath = this.path;
  var message = new VMessage(reason, position, origin);

  if (filePath) {
    message.name = filePath + ':' + message.name;
    message.file = filePath;
  }

  message.fatal = false;

  this.messages.push(message);

  return message;
}

/* Fail. Creates a vmessage, associates it with the file,
 * and throws it. */
function fail() {
  var message = this.message.apply(this, arguments);

  message.fatal = true;

  throw message;
}

/* Info. Creates a vmessage, associates it with the file,
 * and marks the fatality as null. */
function info() {
  var message = this.message.apply(this, arguments);

  message.fatal = null;

  return message;
}

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),

/***/ "./node_modules/x-is-string/index.js":
/*!*******************************************!*\
  !*** ./node_modules/x-is-string/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = Object.prototype.toString;

module.exports = isString;

function isString(obj) {
    return toString.call(obj) === "[object String]";
}

/***/ }),

/***/ "./node_modules/xtend/immutable.js":
/*!*****************************************!*\
  !*** ./node_modules/xtend/immutable.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = extend;

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {};

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }

    return target;
}

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, setImmediate) {var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

Function.prototype.$asyncbind = function $asyncbind(self, catcher) {
    "use strict";

    if (!Function.prototype.$asyncbind) {
        Object.defineProperty(Function.prototype, "$asyncbind", {
            value: $asyncbind,
            enumerable: false,
            configurable: true,
            writable: true
        });
    }

    if (!$asyncbind.trampoline) {
        $asyncbind.trampoline = function trampoline(t, x, s, e, u) {
            return function b(q) {
                while (q) {
                    if (q.then) {
                        q = q.then(b, e);
                        return u ? undefined : q;
                    }

                    try {
                        if (q.pop) {
                            if (q.length) return q.pop() ? x.call(t) : q;
                            q = s;
                        } else q = q.call(t);
                    } catch (r) {
                        return e(r);
                    }
                }
            };
        };
    }

    if (!$asyncbind.LazyThenable) {
        $asyncbind.LazyThenable = function () {
            function isThenable(obj) {
                return obj && obj instanceof Object && typeof obj.then === "function";
            }

            function resolution(p, r, how) {
                try {
                    var x = how ? how(r) : r;
                    if (p === x) return p.reject(new TypeError("Promise resolution loop"));

                    if (isThenable(x)) {
                        x.then(function (y) {
                            resolution(p, y);
                        }, function (e) {
                            p.reject(e);
                        });
                    } else {
                        p.resolve(x);
                    }
                } catch (ex) {
                    p.reject(ex);
                }
            }

            function _unchained(v) {}

            function thenChain(res, rej) {
                this.resolve = res;
                this.reject = rej;
            }

            function Chained() {}

            ;
            Chained.prototype = {
                resolve: _unchained,
                reject: _unchained,
                then: thenChain
            };

            function then(res, rej) {
                var chain = new Chained();

                try {
                    this._resolver(function (value) {
                        return isThenable(value) ? value.then(res, rej) : resolution(chain, value, res);
                    }, function (ex) {
                        resolution(chain, ex, rej);
                    });
                } catch (ex) {
                    resolution(chain, ex, rej);
                }

                return chain;
            }

            function Thenable(resolver) {
                this._resolver = resolver;
                this.then = then;
            }

            ;

            Thenable.resolve = function (v) {
                return Thenable.isThenable(v) ? v : {
                    then: function then(resolve) {
                        return resolve(v);
                    }
                };
            };

            Thenable.isThenable = isThenable;
            return Thenable;
        }();

        $asyncbind.EagerThenable = $asyncbind.Thenable = ($asyncbind.EagerThenableFactory = function (tick) {
            tick = tick || typeof process === "object" && process.nextTick || typeof setImmediate === "function" && setImmediate || function (f) {
                setTimeout(f, 0);
            };

            var soon = function () {
                var fq = [],
                    fqStart = 0,
                    bufferSize = 1024;

                function callQueue() {
                    while (fq.length - fqStart) {
                        try {
                            fq[fqStart]();
                        } catch (ex) {}

                        fq[fqStart++] = undefined;

                        if (fqStart === bufferSize) {
                            fq.splice(0, bufferSize);
                            fqStart = 0;
                        }
                    }
                }

                return function (fn) {
                    fq.push(fn);
                    if (fq.length - fqStart === 1) tick(callQueue);
                };
            }();

            function Zousan(func) {
                if (func) {
                    var me = this;
                    func(function (arg) {
                        me.resolve(arg);
                    }, function (arg) {
                        me.reject(arg);
                    });
                }
            }

            Zousan.prototype = {
                resolve: function resolve(value) {
                    if (this.state !== undefined) return;
                    if (value === this) return this.reject(new TypeError("Attempt to resolve promise with self"));
                    var me = this;

                    if (value && (typeof value === "function" || typeof value === "object")) {
                        try {
                            var first = 0;
                            var then = value.then;

                            if (typeof then === "function") {
                                then.call(value, function (ra) {
                                    if (!first++) {
                                        me.resolve(ra);
                                    }
                                }, function (rr) {
                                    if (!first++) {
                                        me.reject(rr);
                                    }
                                });
                                return;
                            }
                        } catch (e) {
                            if (!first) this.reject(e);
                            return;
                        }
                    }

                    this.state = STATE_FULFILLED;
                    this.v = value;
                    if (me.c) soon(function () {
                        for (var n = 0, l = me.c.length; n < l; n++) STATE_FULFILLED(me.c[n], value);
                    });
                },
                reject: function reject(reason) {
                    if (this.state !== undefined) return;
                    this.state = STATE_REJECTED;
                    this.v = reason;
                    var clients = this.c;
                    if (clients) soon(function () {
                        for (var n = 0, l = clients.length; n < l; n++) STATE_REJECTED(clients[n], reason);
                    });
                },
                then: function then(onF, onR) {
                    var p = new Zousan();
                    var client = {
                        y: onF,
                        n: onR,
                        p: p
                    };

                    if (this.state === undefined) {
                        if (this.c) this.c.push(client);else this.c = [client];
                    } else {
                        var s = this.state,
                            a = this.v;
                        soon(function () {
                            s(client, a);
                        });
                    }

                    return p;
                }
            };

            function STATE_FULFILLED(c, arg) {
                if (typeof c.y === "function") {
                    try {
                        var yret = c.y.call(undefined, arg);
                        c.p.resolve(yret);
                    } catch (err) {
                        c.p.reject(err);
                    }
                } else c.p.resolve(arg);
            }

            function STATE_REJECTED(c, reason) {
                if (typeof c.n === "function") {
                    try {
                        var yret = c.n.call(undefined, reason);
                        c.p.resolve(yret);
                    } catch (err) {
                        c.p.reject(err);
                    }
                } else c.p.reject(reason);
            }

            Zousan.resolve = function (val) {
                if (val && val instanceof Zousan) return val;
                var z = new Zousan();
                z.resolve(val);
                return z;
            };

            Zousan.reject = function (err) {
                if (err && err instanceof Zousan) return err;
                var z = new Zousan();
                z.reject(err);
                return z;
            };

            Zousan.version = "2.3.3-nodent";
            return Zousan;
        })();
    }

    function boundThen() {
        return resolver.apply(self, arguments);
    }

    var resolver = this;

    switch (catcher) {
        case true:
            return new $asyncbind.Thenable(boundThen);

        case 0:
            return new $asyncbind.LazyThenable(boundThen);

        case undefined:
            boundThen.then = boundThen;
            return boundThen;

        default:
            return function () {
                try {
                    return resolver.apply(self, arguments);
                } catch (ex) {
                    return catcher(ex);
                }
            };
    }
};

const fs = __webpack_require__(/*! fs */ "./src/modules/shims/fs.js");
const EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js");

var _require = __webpack_require__(/*! electron */ "./src/modules/shims/electron.js");

const ipcRenderer = _require.ipcRenderer,
      remote = _require.remote;
const app = remote.app,
      Menu = remote.Menu;

var _require2 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.min.js");

const h = _require2.h,
      render = _require2.render,
      Component = _require2.Component;

const classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

const ThemeManager = __webpack_require__(/*! ./ThemeManager */ "./src/modules/shims/noop.js");
const MainView = __webpack_require__(/*! ./MainView */ "./src/components/MainView.js");
const LeftSidebar = __webpack_require__(/*! ./LeftSidebar */ "./src/modules/shims/noop.js");
const Sidebar = __webpack_require__(/*! ./Sidebar */ "./src/components/Sidebar.js");
const DrawerManager = __webpack_require__(/*! ./DrawerManager */ "./src/components/DrawerManager.js");
const InputBox = __webpack_require__(/*! ./InputBox */ "./src/components/InputBox.js");
const BusyScreen = __webpack_require__(/*! ./BusyScreen */ "./src/components/BusyScreen.js");
const InfoOverlay = __webpack_require__(/*! ./InfoOverlay */ "./src/components/InfoOverlay.js");

const deadstones = __webpack_require__(/*! @sabaki/deadstones */ "./node_modules/@sabaki/deadstones/js/main.js");
const gtp = __webpack_require__(/*! @sabaki/gtp */ "./src/modules/shims/empty.js");
const sgf = __webpack_require__(/*! @sabaki/sgf */ "./node_modules/@sabaki/sgf/src/main.js");
const influence = __webpack_require__(/*! @sabaki/influence */ "./node_modules/@sabaki/influence/src/main.js");

deadstones.useFetch('./node_modules/@sabaki/deadstones/wasm/deadstones_bg.wasm');

const Board = __webpack_require__(/*! ../modules/board */ "./src/modules/board.js");
const boardmatcher = __webpack_require__(/*! ../modules/boardmatcher */ "./src/modules/boardmatcher.js");
const dialog = __webpack_require__(/*! ../modules/dialog */ "./src/modules/dialog.js");
const enginesyncer = __webpack_require__(/*! ../modules/enginesyncer */ "./src/modules/shims/empty.js");
const fileformats = __webpack_require__(/*! ../modules/fileformats */ "./src/modules/fileformats/index.js");
const gametree = __webpack_require__(/*! ../modules/gametree */ "./src/modules/gametree.js");
const helper = __webpack_require__(/*! ../modules/helper */ "./src/modules/helper.js");
const rotation = __webpack_require__(/*! ../modules/rotation */ "./src/modules/shims/empty.js");
const setting = remote.require('./setting');
const sound = __webpack_require__(/*! ../modules/sound */ "./src/modules/sound.js");

class App extends Component {
    constructor() {
        super();
        window.sabaki = this;

        let emptyTree = gametree.new();
        emptyTree.nodes.push({});

        this.state = {
            mode: 'play',
            openDrawer: null,
            busy: 0,
            fullScreen: false,
            showMenuBar: null,
            zoomFactor: null,

            representedFilename: null,
            gameTrees: [emptyTree],
            treePosition: [emptyTree, 0],

            // Bars

            undoable: false,
            undoText: 'Undo',
            selectedTool: 'stone_1',
            scoringMethod: null,
            findText: '',
            findVertex: null,
            deadStones: [],
            blockedGuesses: [],

            // Goban

            highlightVertices: [],
            heatMap: null,
            showCoordinates: null,
            showMoveColorization: null,
            showNextMoves: null,
            showSiblings: null,
            fuzzyStonePlacement: null,
            animatedStonePlacement: null,
            animatedVertex: null,

            // Sidebar

            consoleLog: [],
            showConsole: setting.get('view.show_leftsidebar'),
            leftSidebarWidth: setting.get('view.leftsidebar_width'),
            showGameGraph: setting.get('view.show_graph'),
            showCommentBox: setting.get('view.show_comments'),
            sidebarWidth: setting.get('view.sidebar_width'),
            graphGridSize: null,
            graphNodeSize: null,

            // Engines

            engines: null,
            attachedEngines: [null, null],
            engineCommands: [[], []],
            generatingMoves: false,

            // Drawers

            preferencesTab: 'general',

            // Input Box

            showInputBox: false,
            inputBoxText: '',
            onInputBoxSubmit: helper.noop,
            onInputBoxCancel: helper.noop,

            // Info Overlay

            infoOverlayText: '',
            showInfoOverlay: false
        };

        this.events = new EventEmitter();
        this.appName = app.getName();
        this.version = app.getVersion();
        this.window = remote.getCurrentWindow();

        this.treeHash = this.generateTreeHash();
        this.attachedEngineControllers = [null, null];
        this.engineStates = [null, null];

        // Expose submodules

        this.modules = { Board, boardmatcher, dialog, enginesyncer,
            fileformats, gametree, helper, setting, sound

            // Bind state to settings

        };setting.events.on('change', ({ key }) => this.updateSettingState(key));
        this.updateSettingState();
    }

    componentDidMount() {
        window.addEventListener('contextmenu', evt => {
            evt.preventDefault();
        });

        window.addEventListener('load', () => {
            this.events.emit('ready');
            this.window.show();
        });

        ipcRenderer.on('load-file', (evt, ...args) => {
            setTimeout(() => this.loadFile(...args), setting.get('app.loadgame_delay'));
        });

        this.window.on('focus', () => {
            if (setting.get('file.show_reload_warning')) {
                this.askForReload();
            }

            ipcRenderer.send('build-menu', this.state.busy > 0);
        });

        this.window.on('resize', () => {
            clearTimeout(this.resizeId);

            this.resizeId = setTimeout(() => {
                if (!this.window.isMaximized() && !this.window.isMinimized() && !this.window.isFullScreen()) {
                    var _window$getContentSiz = this.window.getContentSize(),
                        _window$getContentSiz2 = _slicedToArray(_window$getContentSiz, 2);

                    let width = _window$getContentSiz2[0],
                        height = _window$getContentSiz2[1];

                    setting.set('window.width', width).set('window.height', height);
                }
            }, 1000);
        });

        // Handle main menu items

        let menuData = __webpack_require__(/*! ../menu */ "./src/modules/shims/empty.js");

        let handleMenuClicks = menu => {
            for (let item of menu) {
                if ('click' in item) {
                    ipcRenderer.on(`menu-click-${item.id}`, () => {
                        if (!this.state.showMenuBar) this.window.setMenuBarVisibility(false);
                        dialog.closeInputBox();
                        item.click();
                    });
                }

                if ('submenu' in item) {
                    handleMenuClicks(item.submenu);
                }
            }
        };

        handleMenuClicks(menuData);

        // Handle mouse wheel

        for (let el of document.querySelectorAll('#main main, #graph')) {
            el.addEventListener('wheel', evt => {
                evt.preventDefault();

                if (this.residueDeltaY == null) this.residueDeltaY = 0;
                this.residueDeltaY += evt.deltaY;

                if (Math.abs(this.residueDeltaY) >= setting.get('game.navigation_sensitivity')) {
                    this.goStep(Math.sign(this.residueDeltaY));
                    this.residueDeltaY = 0;
                }
            });
        }

        // Handle file drag & drop

        document.body.addEventListener('dragover', evt => evt.preventDefault());
        document.body.addEventListener('drop', evt => {
            evt.preventDefault();

            if (evt.dataTransfer.files.length === 0) return;
            this.loadFile(evt.dataTransfer.files[0]);
        });

        // Handle escape key

        document.addEventListener('keyup', evt => {
            if (evt.keyCode === 27) {
                // Escape

                if (this.state.generatingMoves) {
                    this.stopGeneratingMoves();
                } else if (this.state.openDrawer != null) {
                    this.closeDrawer();
                } else if (this.state.mode !== 'play') {
                    this.setMode('play');
                } else if (this.state.fullScreen) {
                    this.setState({ fullScreen: false });
                }
            }
        });

        // Handle other keyboard shortcuts

        document.addEventListener('keydown', evt => {
            if (['input', 'textarea'].indexOf(document.activeElement.tagName.toLowerCase()) >= 0) {
                return;
            }

            if (evt.keyCode == 36) {
                // Home
                this.goToBeginning();
            } else if (evt.keyCode == 35) {
                // End
                this.goToEnd();
            } else if (evt.keyCode == 38) {
                // Up
                this.goStep(-1);
            } else if (evt.keyCode == 40) {
                // Down
                this.goStep(1);
            } else if (evt.keyCode == 37) {
                // Left
                this.goToSiblingVariation(-1);
            } else if (evt.keyCode == 39) {
                // Right
                this.goToSiblingVariation(1);
            }
        });

        // Handle window closing

        window.addEventListener('beforeunload', evt => {
            evt.returnValue = ' ';
        });

        this.newFile();
    }

    componentDidUpdate(_, prevState = {}) {
        // Update title

        var _require3 = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");

        let basename = _require3.basename;

        let title = this.appName;
        var _state = this.state;
        let representedFilename = _state.representedFilename,
            gameTrees = _state.gameTrees;

        var _state$treePosition = _slicedToArray(_state.treePosition, 1);

        let tree = _state$treePosition[0];


        if (representedFilename) title = basename(representedFilename);
        if (gameTrees.length > 1) title += ' — Game ' + (this.inferredState.gameIndex + 1);
        if (representedFilename && process.platform != 'darwin') title += ' — ' + this.appName;

        if (document.title !== title) document.title = title;

        // Handle full screen & menu bar

        if (prevState.fullScreen !== this.state.fullScreen) {
            if (this.state.fullScreen) this.flashInfoOverlay('Press Esc to exit full screen mode');
            this.window.setFullScreen(this.state.fullScreen);
        }

        if (prevState.showMenuBar !== this.state.showMenuBar) {
            if (!this.state.showMenuBar) this.flashInfoOverlay('Press Alt to show menu bar');
            this.window.setMenuBarVisibility(this.state.showMenuBar);
            this.window.setAutoHideMenuBar(!this.state.showMenuBar);
        }

        // Handle sidebar showing/hiding

        if (prevState.showLeftSidebar !== this.state.showLeftSidebar || prevState.showSidebar !== this.state.showSidebar) {
            var _window$getContentSiz3 = this.window.getContentSize(),
                _window$getContentSiz4 = _slicedToArray(_window$getContentSiz3, 2);

            let width = _window$getContentSiz4[0],
                height = _window$getContentSiz4[1];

            let widthDiff = 0;

            if (prevState.showSidebar !== this.state.showSidebar) {
                widthDiff += this.state.sidebarWidth * (this.state.showSidebar ? 1 : -1);
            }

            if (prevState.showLeftSidebar !== this.state.showLeftSidebar) {
                widthDiff += this.state.leftSidebarWidth * (this.state.showLeftSidebar ? 1 : -1);
            }

            if (!this.window.isMaximized() && !this.window.isMinimized() && !this.window.isFullScreen()) {
                this.window.setContentSize(width + widthDiff, height);
            }
        }

        // Handle zoom factor

        if (prevState.zoomFactor !== this.state.zoomFactor) {
            this.window.webContents.setZoomFactor(this.state.zoomFactor);
        }
    }

    updateSettingState(key = null) {
        let data = {
            'app.zoom_factor': 'zoomFactor',
            'view.show_menubar': 'showMenuBar',
            'view.show_coordinates': 'showCoordinates',
            'view.show_move_colorization': 'showMoveColorization',
            'view.show_next_moves': 'showNextMoves',
            'view.show_siblings': 'showSiblings',
            'view.fuzzy_stone_placement': 'fuzzyStonePlacement',
            'view.animated_stone_placement': 'animatedStonePlacement',
            'graph.grid_size': 'graphGridSize',
            'graph.node_size': 'graphNodeSize',
            'engines.list': 'engines',
            'scoring.method': 'scoringMethod'
        };

        if (key == null) {
            for (let k in data) this.updateSettingState(k);
            return;
        }

        if (key in data) {
            ipcRenderer.send('build-menu', this.state.busy > 0);
            this.setState({ [data[key]]: setting.get(key) });
        }
    }

    waitForRender() {
        return new Promise(resolve => this.setState({}, resolve));
    }

    // User Interface

    setSidebarWidth(sidebarWidth) {
        this.setState({ sidebarWidth }, () => window.dispatchEvent(new Event('resize')));
    }

    setLeftSidebarWidth(leftSidebarWidth) {
        this.setState({ leftSidebarWidth }, () => window.dispatchEvent(new Event('resize')));
    }

    setMode(mode) {
        let stateChange = { mode };

        if (['scoring', 'estimator'].includes(mode)) {
            // Guess dead stones

            let treePosition = this.state.treePosition;

            let iterations = setting.get('score.estimator_iterations');

            deadstones.guess(gametree.getBoard(...treePosition).arrangement, {
                finished: mode === 'scoring',
                iterations
            }).then(result => {
                this.setState({ deadStones: result });
            });
        }

        this.setState(stateChange);
        this.events.emit('modeChange');
    }

    openDrawer(drawer) {
        this.setState({ openDrawer: drawer });
    }

    closeDrawer() {
        this.openDrawer(null);
    }

    setBusy(busy) {
        let diff = busy ? 1 : -1;
        this.setState(s => ({ busy: Math.max(s.busy + diff, 0) }));
    }

    showInfoOverlay(text) {
        this.setState({
            infoOverlayText: text,
            showInfoOverlay: true
        });
    }

    hideInfoOverlay() {
        this.setState({ showInfoOverlay: false });
    }

    flashInfoOverlay(text) {
        this.showInfoOverlay(text);
        setTimeout(() => this.hideInfoOverlay(), setting.get('infooverlay.duration'));
    }

    clearConsole() {
        this.setState({ consoleLog: [] });
    }

    // File Management

    getEmptyGameTree() {
        let handicap = setting.get('game.default_handicap');
        let size = setting.get('game.default_board_size').toString().split(':').map(x => +x);
        var _ref = [size[0], size.slice(-1)[0]];
        let width = _ref[0],
            height = _ref[1];

        let handicapStones = new Board(width, height).getHandicapPlacement(handicap).map(sgf.stringifyVertex);

        let sizeInfo = width === height ? width.toString() : `${width}:${height}`;
        let handicapInfo = handicapStones.length > 0 ? `HA[${handicap}]AB[${handicapStones.join('][')}]` : '';
        let date = new Date();
        let dateInfo = sgf.stringifyDates([[date.getFullYear(), date.getMonth() + 1, date.getDate()]]);

        return sgf.parse(`
            (;GM[1]FF[4]CA[UTF-8]AP[${this.appName}:${this.version}]
            KM[${setting.get('game.default_komi')}]
            SZ[${sizeInfo}]DT[${dateInfo}]
            ${handicapInfo})
        `, { getId: helper.getId })[0];
    }

    newFile({ playSound = false, showInfo = false, suppressAskForSave = false } = {}) {
        return new Promise(function ($return, $error) {
            let emptyTree;

            if (!suppressAskForSave && !this.askForSave()) return $return();

            if (showInfo && this.state.openDrawer === 'info') this.closeDrawer();
            this.setMode('play');

            this.clearUndoPoint();
            this.detachEngines();
            this.clearConsole();

            return this.waitForRender().then(function ($await_7) {

                emptyTree = this.getEmptyGameTree();

                this.setState({
                    openDrawer: showInfo ? 'info' : null,
                    gameTrees: [emptyTree],
                    representedFilename: null
                });

                this.setCurrentTreePosition(emptyTree, 0);

                this.treeHash = this.generateTreeHash();
                this.fileHash = this.generateFileHash();

                if (playSound) sound.playNewGame();
                return $return();
            }.$asyncbind(this, $error), $error);
        }.$asyncbind(this));
    }

    loadFile(file = null, { suppressAskForSave = false } = {}) {
        return new Promise(function ($return, $error) {
            var _require4;

            let extname, extension, content, gameTrees, success, lastProgress;

            if (!suppressAskForSave && !this.askForSave()) return $return();

            if (!file) {
                dialog.showOpenDialog({
                    properties: ['openFile'],
                    filters: [...fileformats.meta, { name: 'All Files', extensions: ['*'] }]
                }, ({ result }) => {
                    if (result) file = result[0];
                    if (file) this.loadFile(file, { suppressAskForSave: true });
                });

                return $return();
            }

            this.setBusy(true);

            _require4 = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
            extname = _require4.extname;

            extension = extname(file.name).slice(1);
            return new Promise((resolve, reject) => fs.readFile(file, (err, content) => err ? reject(err) : resolve(content))).then(function ($await_8) {
                content = $await_8;

                gameTrees = [];
                success = true;
                lastProgress = -1;

                try {
                    let fileFormatModule = fileformats.getModuleByExtension(extension);

                    gameTrees = fileFormatModule.parse(content, evt => {
                        if (evt.progress - lastProgress < 0.1) return;
                        this.window.setProgressBar(evt.progress);
                        lastProgress = evt.progress;
                    }, true);

                    if (gameTrees.length == 0) throw true;
                } catch (err) {
                    dialog.showMessageBox('This file is unreadable.', 'warning');
                    success = false;
                }

                if (success) {
                    return this.loadGameTrees(gameTrees, { suppressAskForSave: true }).then(function ($await_9) {

                        this.setState({ representedFilename: file.name });
                        this.fileHash = this.generateFileHash();

                        if (setting.get('game.goto_end_after_loading')) {
                            this.goToEnd();
                        }
                        return $If_5.call(this);
                    }.$asyncbind(this, $error), $error);
                }

                function $If_5() {
                    this.setBusy(false);
                    return $return();
                }

                return $If_5.call(this);
            }.$asyncbind(this, $error), $error);
        }.$asyncbind(this));
    }

    loadContent(content, extension, { suppressAskForSave = false, ignoreEncoding = false } = {}) {
        return new Promise(function ($return, $error) {
            let gameTrees, success, lastProgress;

            this.setBusy(true);

            gameTrees = [];
            success = true;
            lastProgress = -1;

            try {
                let fileFormatModule = fileformats.getModuleByExtension(extension);

                gameTrees = fileFormatModule.parse(content, evt => {
                    if (evt.progress - lastProgress < 0.1) return;
                    this.window.setProgressBar(evt.progress);
                    lastProgress = evt.progress;
                }, ignoreEncoding);

                if (gameTrees.length == 0) throw true;
            } catch (err) {
                dialog.showMessageBox('This file is unreadable.', 'warning');
                success = false;
            }

            if (success) {
                return this.loadGameTrees(gameTrees, { suppressAskForSave }).then(function ($await_10) {
                    return $If_6.call(this);
                }.$asyncbind(this, $error), $error);
            }

            function $If_6() {
                this.setBusy(false);
                return $return();
            }

            return $If_6.call(this);
        }.$asyncbind(this));
    }

    loadGameTrees(gameTrees, { suppressAskForSave = false } = {}) {
        return new Promise(function ($return, $error) {
            if (!suppressAskForSave && !this.askForSave()) return $return();

            this.setBusy(true);
            if (this.state.openDrawer !== 'gamechooser') this.closeDrawer();
            this.setMode('play');

            return helper.wait(setting.get('app.loadgame_delay')).then(function ($await_11) {

                if (gameTrees.length != 0) {
                    this.clearUndoPoint();
                    this.detachEngines();
                    this.setState({
                        representedFilename: null,
                        gameTrees
                    });

                    this.setCurrentTreePosition(gameTrees[0], 0);

                    this.treeHash = this.generateTreeHash();
                    this.fileHash = this.generateFileHash();
                }

                this.setBusy(false);

                if (gameTrees.length > 1) {
                    setTimeout(() => {
                        this.openDrawer('gamechooser');
                    }, setting.get('gamechooser.show_delay'));
                }

                this.window.setProgressBar(-1);
                this.events.emit('fileLoad');
                return $return();
            }.$asyncbind(this, $error), $error);
        }.$asyncbind(this));
    }

    saveFile(filename = null) {
        dialog.showSaveDialog({
            type: 'application/x-go-sgf',
            name: this.state.representedFilename || 'game.sgf',
            content: this.getSGF()
        });

        this.treeHash = this.generateTreeHash();
        this.fileHash = this.generateFileHash();

        return true;
    }

    getSGF() {
        let gameTrees = this.state.gameTrees;


        for (let tree of gameTrees) {
            Object.assign(tree.nodes[0], {
                AP: [`${this.appName}:${this.version}`],
                CA: ['UTF-8']
            });
        }

        return sgf.stringify(gameTrees);
    }

    generateTreeHash() {
        return this.state.gameTrees.map(tree => gametree.getHash(tree)).join('');
    }

    generateFileHash() {}

    askForSave() {
        let hash = this.generateTreeHash();

        if (hash !== this.treeHash) {
            let answer = dialog.showMessageBox('Your changes will be lost if you close this file without saving. Do you want to continue?', 'warning', ['Save', 'Don’t Save', 'Cancel'], 2);

            if (answer === 0) return true;else if (answer === 2) return false;
        }

        return true;
    }

    askForReload() {}

    // Playing

    clickVertex(vertex, { button = 0, ctrlKey = false, x = 0, y = 0 } = {}) {
        this.closeDrawer();

        var _state$treePosition2 = _slicedToArray(this.state.treePosition, 2);

        let tree = _state$treePosition2[0],
            index = _state$treePosition2[1];

        let board = gametree.getBoard(tree, index);
        let node = tree.nodes[index];

        if (typeof vertex == 'string') {
            vertex = board.coord2vertex(vertex);
        }

        if (['play', 'autoplay'].includes(this.state.mode)) {
            if (button === 0) {
                if (board.get(vertex) === 0) {
                    this.makeMove(vertex, { sendToEngine: true });
                } else if (vertex in board.markups && board.markups[vertex][0] === 'point' && setting.get('edit.click_currentvertex_to_remove')) {
                    this.removeNode(tree, index);
                }
            } else if (button === 2) {
                if (vertex in board.markups && board.markups[vertex][0] === 'point') {
                    this.openCommentMenu(tree, index, { x, y });
                }
            }
        } else if (this.state.mode === 'edit') {
            if (ctrlKey) {
                // Add coordinates to comment

                let coord = board.vertex2coord(vertex);
                let commentText = node.C ? node.C[0] : '';

                node.C = commentText !== '' ? [commentText.trim() + ' ' + coord] : [coord];
                return;
            }

            let tool = this.state.selectedTool;

            if (button === 2) {
                // Right mouse click

                if (['stone_1', 'stone_-1'].includes(tool)) {
                    // Switch stone tool

                    tool = tool === 'stone_1' ? 'stone_-1' : 'stone_1';
                } else if (['number', 'label'].includes(tool)) {
                    // Show label editing context menu

                    let click = () => dialog.showInputBox('Enter label text', ({ value }) => {
                        this.useTool('label', vertex, value);
                    });

                    let template = [{ label: '&Edit Label', click }];
                    helper.popupMenu(template, x, y);

                    return;
                }
            }

            if (['line', 'arrow'].includes(tool)) {
                // Remember clicked vertex and pass as an argument the second time

                if (!this.editVertexData || this.editVertexData[0] !== tool) {
                    this.useTool(tool, vertex);
                    this.editVertexData = [tool, vertex];
                } else {
                    this.useTool(tool, vertex, this.editVertexData[1]);
                    this.editVertexData = null;
                }
            } else {
                this.useTool(tool, vertex);
                this.editVertexData = null;
            }
        } else if (['scoring', 'estimator'].includes(this.state.mode)) {
            if (button !== 0 || board.get(vertex) === 0) return;

            var _state2 = this.state;
            let mode = _state2.mode,
                deadStones = _state2.deadStones;

            let dead = deadStones.some(v => helper.vertexEquals(v, vertex));
            let stones = mode === 'estimator' ? board.getChain(vertex) : board.getRelatedChains(vertex);

            if (!dead) {
                deadStones = [...deadStones, ...stones];
            } else {
                deadStones = deadStones.filter(v => !stones.some(w => helper.vertexEquals(v, w)));
            }

            this.setState({ deadStones });
        } else if (this.state.mode === 'find') {
            if (button !== 0) return;

            if (helper.vertexEquals(this.state.findVertex || [-1, -1], vertex)) {
                this.setState({ findVertex: null });
            } else {
                this.setState({ findVertex: vertex });
                this.findMove(1, { vertex, text: this.state.findText });
            }
        } else if (this.state.mode === 'guess') {
            if (button !== 0) return;

            let tp = gametree.navigate(...this.state.treePosition, 1);
            if (!tp) return this.setMode('play');

            let nextNode = tp[0].nodes[tp[1]];
            if (!('B' in nextNode || 'W' in nextNode)) return this.setMode('play');

            let nextVertex = sgf.parseVertex(nextNode['B' in nextNode ? 'B' : 'W'][0]);
            let board = gametree.getBoard(...this.state.treePosition);
            if (!board.hasVertex(nextVertex)) return this.setMode('play');

            if (helper.vertexEquals(vertex, nextVertex)) {
                this.makeMove(vertex, { player: 'B' in nextNode ? 1 : -1 });
            } else {
                if (board.get(vertex) !== 0 || this.state.blockedGuesses.some(v => helper.vertexEquals(v, vertex))) return;

                let blocked = [];

                var _vertex$map$reduce = vertex.map((x, i) => Math.abs(x - nextVertex[i])).reduce(([max, i], x, j) => x > max ? [x, j] : [max, i], [-Infinity, -1]),
                    _vertex$map$reduce2 = _slicedToArray(_vertex$map$reduce, 2);

                let i = _vertex$map$reduce2[1];


                for (let x = 0; x < board.width; x++) {
                    for (let y = 0; y < board.height; y++) {
                        let z = i === 0 ? x : y;
                        if (Math.abs(z - vertex[i]) < Math.abs(z - nextVertex[i])) blocked.push([x, y]);
                    }
                }

                let blockedGuesses = this.state.blockedGuesses;

                blockedGuesses.push(...blocked);
                this.setState({ blockedGuesses });
            }
        }

        this.events.emit('vertexClick');
    }

    makeMove(vertex, { player = null, clearUndoPoint = true, sendToEngine = false } = {}) {
        if (!['play', 'autoplay', 'guess'].includes(this.state.mode)) {
            this.closeDrawer();
            this.setMode('play');
        }

        var _state$treePosition3 = _slicedToArray(this.state.treePosition, 2);

        let tree = _state$treePosition3[0],
            index = _state$treePosition3[1];

        let board = gametree.getBoard(tree, index);

        if (typeof vertex == 'string') {
            vertex = board.coord2vertex(vertex);
        }

        let pass = !board.hasVertex(vertex);
        if (!pass && board.get(vertex) !== 0) return;

        let prev = gametree.navigate(tree, index, -1);
        if (!player) player = this.inferredState.currentPlayer;
        let color = player > 0 ? 'B' : 'W';
        let capture = false,
            suicide = false,
            ko = false;
        let createNode = true;

        if (!pass) {
            // Check for ko

            if (prev && setting.get('game.show_ko_warning')) {
                let hash = board.makeMove(player, vertex).getPositionHash();

                ko = prev[0].nodes[prev[1]].board.getPositionHash() == hash;

                if (ko && dialog.showMessageBox(['You are about to play a move which repeats a previous board position.', 'This is invalid in some rulesets. Do you want to play anyway?'].join('\n'), 'info', ['Play Anyway', 'Don’t Play'], 1) != 0) return;
            }

            let vertexNeighbors = board.getNeighbors(vertex);

            // Check for suicide

            capture = vertexNeighbors.some(v => board.get(v) == -player && board.getLiberties(v).length == 1);

            suicide = !capture && vertexNeighbors.filter(v => board.get(v) == player).every(v => board.getLiberties(v).length == 1) && vertexNeighbors.filter(v => board.get(v) == 0).length == 0;

            if (suicide && setting.get('game.show_suicide_warning')) {
                if (dialog.showMessageBox(['You are about to play a suicide move.', 'This is invalid in some rulesets. Do you want to play anyway?'].join('\n'), 'info', ['Play Anyway', 'Don’t Play'], 1) != 0) return;
            }

            // Animate board

            this.setState({ animatedVertex: vertex });
        }

        // Update data

        let nextTreePosition;

        if (tree.subtrees.length === 0 && tree.nodes.length - 1 === index) {
            // Append move

            let node = {};
            node[color] = [sgf.stringifyVertex(vertex)];
            tree.nodes.push(node);

            nextTreePosition = [tree, tree.nodes.length - 1];
        } else {
            if (index !== tree.nodes.length - 1) {
                // Search for next move

                let nextNode = tree.nodes[index + 1];
                let moveExists = color in nextNode && helper.vertexEquals(sgf.parseVertex(nextNode[color][0]), vertex);

                if (moveExists) {
                    nextTreePosition = [tree, index + 1];
                    createNode = false;
                }
            } else {
                // Search for variation

                let variations = tree.subtrees.filter(subtree => subtree.nodes.length > 0 && color in subtree.nodes[0] && helper.vertexEquals(sgf.parseVertex(subtree.nodes[0][color][0]), vertex));

                if (variations.length > 0) {
                    nextTreePosition = [variations[0], 0];
                    createNode = false;
                }
            }

            if (createNode) {
                // Create variation

                let updateRoot = tree.parent == null;
                let splitted = gametree.split(tree, index);
                let newTree = gametree.new();
                let node = { [color]: [sgf.stringifyVertex(vertex)] };

                newTree.nodes = [node];
                newTree.parent = splitted;

                splitted.subtrees.push(newTree);
                splitted.current = splitted.subtrees.length - 1;

                if (updateRoot) {
                    let gameTrees = this.state.gameTrees;

                    gameTrees[gameTrees.indexOf(tree)] = splitted;
                }

                nextTreePosition = [newTree, 0];
            }
        }

        this.setCurrentTreePosition(...nextTreePosition);

        // Play sounds

        if (!pass) {
            let delay = setting.get('sound.capture_delay_min');
            delay += Math.floor(Math.random() * (setting.get('sound.capture_delay_max') - delay));

            if (capture || suicide) sound.playCapture(delay);

            sound.playPachi();
        } else {
            sound.playPass();
        }

        // Clear undo point

        if (createNode && clearUndoPoint) this.clearUndoPoint();

        // Enter scoring mode after two consecutive passes

        let enterScoring = false;

        if (pass && createNode && prev) {
            let prevNode = tree.nodes[index];
            let prevColor = color === 'B' ? 'W' : 'B';
            let prevPass = prevColor in prevNode && prevNode[prevColor][0] === '';

            if (prevPass) {
                enterScoring = true;
                this.setMode('scoring');
            }
        }

        // Emit event

        this.events.emit('moveMake', { pass, capture, suicide, ko, enterScoring });

        // Send command to engine

        if (sendToEngine && this.attachedEngineControllers.some(x => x != null)) {
            let passPlayer = pass ? player : null;
            setTimeout(() => this.startGeneratingMoves({ passPlayer }), setting.get('gtp.move_delay'));
        }
    }

    makeResign({ player = null, setUndoPoint = true } = {}) {
        var _inferredState = this.inferredState;
        let rootTree = _inferredState.rootTree,
            currentPlayer = _inferredState.currentPlayer;

        if (player == null) player = currentPlayer;
        let color = player > 0 ? 'W' : 'B';
        let rootNode = rootTree.nodes[0];

        if (setUndoPoint) this.setUndoPoint('Undo Resignation');
        rootNode.RE = [`${color}+Resign`];

        this.makeMove([-1, -1], { player, clearUndoPoint: false });
        this.makeMainVariation(...this.state.treePosition, { setUndoPoint: false });

        this.events.emit('resign', { player });
    }

    useTool(tool, vertex, argument = null) {
        var _state$treePosition4 = _slicedToArray(this.state.treePosition, 2);

        let tree = _state$treePosition4[0],
            index = _state$treePosition4[1];
        var _inferredState2 = this.inferredState;
        let currentPlayer = _inferredState2.currentPlayer,
            gameIndex = _inferredState2.gameIndex;

        let board = gametree.getBoard(tree, index);
        let node = tree.nodes[index];

        if (typeof vertex == 'string') {
            vertex = board.coord2vertex(vertex);
        }

        let data = {
            cross: 'MA',
            triangle: 'TR',
            circle: 'CR',
            square: 'SQ',
            number: 'LB',
            label: 'LB'
        };

        if (['stone_-1', 'stone_1'].includes(tool)) {
            if ('B' in node || 'W' in node || gametree.navigate(tree, index, 1)) {
                // New variation needed

                let updateRoot = tree.parent == null;
                let splitted = gametree.split(tree, index);

                if (splitted != tree || splitted.subtrees.length != 0) {
                    tree = gametree.new();
                    tree.parent = splitted;
                    splitted.subtrees.push(tree);
                }

                node = { PL: currentPlayer > 0 ? ['B'] : ['W'] };
                index = tree.nodes.length;
                tree.nodes.push(node);

                if (updateRoot) {
                    let gameTrees = this.state.gameTrees;

                    gameTrees[gameIndex] = splitted;
                }
            }

            let sign = tool === 'stone_1' ? 1 : -1;
            let oldSign = board.get(vertex);
            let properties = ['AW', 'AE', 'AB'];
            let point = sgf.stringifyVertex(vertex);

            for (let prop of properties) {
                if (!(prop in node)) continue;

                // Resolve compressed lists

                if (node[prop].some(x => x.includes(':'))) {
                    node[prop] = node[prop].map(value => sgf.parseCompressedVertices(value).map(sgf.stringifyVertex)).reduce((list, x) => [...list, x]);
                }

                // Remove residue

                node[prop] = node[prop].filter(x => x !== point);
                if (node[prop].length === 0) delete node[prop];
            }

            let prop = oldSign !== sign ? properties[sign + 1] : 'AE';

            if (prop in node) node[prop].push(point);else node[prop] = [point];
        } else if (['line', 'arrow'].includes(tool)) {
            let endVertex = argument;

            if (!endVertex || helper.vertexEquals(vertex, endVertex)) return;

            // Check whether to remove a line

            let toDelete = board.lines.findIndex(x => helper.equals(x.slice(0, 2), [vertex, endVertex]));

            if (toDelete === -1) {
                toDelete = board.lines.findIndex(x => helper.equals(x.slice(0, 2), [endVertex, vertex]));

                if (toDelete >= 0 && tool !== 'line' && board.lines[toDelete][2]) {
                    // Do not delete after all
                    toDelete = -1;
                }
            }

            // Mutate board first, then apply changes to actual game tree

            if (toDelete >= 0) {
                board.lines.splice(toDelete, 1);
            } else {
                board.lines.push([vertex, endVertex, tool === 'arrow']);
            }

            node.LN = [];
            node.AR = [];

            for (let _ref2 of board.lines) {
                var _ref3 = _slicedToArray(_ref2, 3);

                let v1 = _ref3[0];
                let v2 = _ref3[1];
                let arrow = _ref3[2];

                var _map = [v1, v2].map(sgf.stringifyVertex),
                    _map2 = _slicedToArray(_map, 2);

                let p1 = _map2[0],
                    p2 = _map2[1];

                if (p1 === p2) continue;

                node[arrow ? 'AR' : 'LN'].push([p1, p2].join(':'));
            }

            if (node.LN.length === 0) delete node.LN;
            if (node.AR.length === 0) delete node.AR;
        } else {
            // Mutate board first, then apply changes to actual game tree

            if (tool === 'number') {
                if (vertex in board.markups && board.markups[vertex][0] === 'label') {
                    delete board.markups[vertex];
                } else {
                    let number = !node.LB ? 1 : node.LB.map(x => parseFloat(x.substr(3))).filter(x => !isNaN(x)).sort((a, b) => a - b).filter((x, i, arr) => i === 0 || x !== arr[i - 1]).concat([null]).findIndex((x, i) => i + 1 !== x) + 1;

                    argument = number.toString();
                    board.markups[vertex] = [tool, number.toString()];
                }
            } else if (tool === 'label') {
                let label = argument;

                if (label != null && label.trim() === '' || label == null && vertex in board.markups && board.markups[vertex][0] === 'label') {
                    delete board.markups[vertex];
                } else {
                    if (label == null) {
                        let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                        let letterIndex = Math.max(!node.LB ? 0 : node.LB.filter(x => x.length === 4).map(x => alpha.indexOf(x[3])).filter(x => x >= 0).sort((a, b) => a - b).filter((x, i, arr) => i === 0 || x !== arr[i - 1]).concat([null]).findIndex((x, i) => i !== x), !node.L ? 0 : node.L.length);

                        label = alpha[Math.min(letterIndex, alpha.length - 1)];
                        argument = label;
                    }

                    board.markups[vertex] = [tool, label];
                }
            } else {
                if (vertex in board.markups && board.markups[vertex][0] === tool) {
                    delete board.markups[vertex];
                } else {
                    board.markups[vertex] = [tool, ''];
                }
            }

            delete node.L;
            for (let id in data) delete node[data[id]];

            // Now apply changes to game tree

            for (let x = 0; x < board.width; x++) {
                for (let y = 0; y < board.height; y++) {
                    let v = [x, y];
                    if (!(v in board.markups)) continue;

                    let prop = data[board.markups[v][0]];
                    let value = sgf.stringifyVertex(v);

                    if (prop === 'LB') value += ':' + board.markups[v][1];

                    if (prop in node) node[prop].push(value);else node[prop] = [value];
                }
            }
        }

        this.clearUndoPoint();
        this.setCurrentTreePosition(tree, index);

        this.events.emit('toolUse', { tool, vertex, argument });
    }

    // Undo Methods

    setUndoPoint(undoText = 'Undo') {
        var _state$treePosition5 = _slicedToArray(this.state.treePosition, 2);

        let tree = _state$treePosition5[0],
            index = _state$treePosition5[1];

        let rootTree = gametree.clone(gametree.getRoot(tree));
        let level = gametree.getLevel(tree, index);

        this.undoData = [rootTree, level];
        this.setState({ undoable: true, undoText });
    }

    clearUndoPoint() {
        this.undoData = null;
        this.setState({ undoable: false });
    }

    undo() {
        if (!this.state.undoable || !this.undoData) return;

        this.setBusy(true);

        setTimeout(() => {
            var _undoData = _slicedToArray(this.undoData, 2);

            let undoRoot = _undoData[0],
                undoLevel = _undoData[1];
            var _state3 = this.state;
            let treePosition = _state3.treePosition,
                gameTrees = _state3.gameTrees;


            gameTrees[this.inferredState.gameIndex] = undoRoot;
            treePosition = gametree.navigate(undoRoot, 0, undoLevel);

            this.setCurrentTreePosition(...treePosition);
            this.clearUndoPoint();
            this.setBusy(false);
        }, setting.get('edit.undo_delay'));
    }

    // Navigation

    setCurrentTreePosition(tree, index, { clearUndoPoint = true } = {}) {
        if (['scoring', 'estimator'].includes(this.state.mode)) return;

        let t = tree;
        while (t.parent != null) {
            t.parent.current = t.parent.subtrees.indexOf(t);
            t = t.parent;
        }

        if (clearUndoPoint && t !== gametree.getRoot(this.state.treePosition[0])) {
            this.clearUndoPoint();
        }

        this.setState({
            heatMap: null,
            blockedGuesses: [],
            highlightVertices: [],
            treePosition: [tree, index]
        });

        this.events.emit('navigate');
    }

    goStep(step) {
        let treePosition = gametree.navigate(...this.state.treePosition, step);
        if (treePosition) this.setCurrentTreePosition(...treePosition);
    }

    goToMoveNumber(number) {
        number = +number;

        if (isNaN(number)) return;
        if (number < 0) number = 0;

        let treePosition = this.state.treePosition;

        let root = gametree.getRoot(...treePosition);

        treePosition = gametree.navigate(root, 0, Math.round(number));

        if (treePosition) this.setCurrentTreePosition(...treePosition);else this.goToEnd();
    }

    goToNextFork() {
        var _state$treePosition6 = _slicedToArray(this.state.treePosition, 2);

        let tree = _state$treePosition6[0],
            index = _state$treePosition6[1];


        if (index !== tree.nodes.length - 1) {
            this.setCurrentTreePosition(tree, tree.nodes.length - 1);
        } else if (tree.subtrees.length !== 0) {
            let subtree = tree.subtrees[tree.current];
            this.setCurrentTreePosition(subtree, subtree.nodes.length - 1);
        }
    }

    goToPreviousFork() {
        var _state$treePosition7 = _slicedToArray(this.state.treePosition, 2);

        let tree = _state$treePosition7[0],
            index = _state$treePosition7[1];


        if (tree.parent == null || tree.parent.nodes.length === 0) {
            if (index != 0) this.setCurrentTreePosition(tree, 0);
        } else {
            this.setCurrentTreePosition(tree.parent, tree.parent.nodes.length - 1);
        }
    }

    goToComment(step) {
        let tp = this.state.treePosition;

        while (true) {
            tp = gametree.navigate(...tp, step);
            if (!tp) break;

            let node = tp[0].nodes[tp[1]];

            if (setting.get('sgf.comment_properties').some(p => p in node)) break;
        }

        if (tp) this.setCurrentTreePosition(...tp);
    }

    goToBeginning() {
        this.setCurrentTreePosition(gametree.getRoot(...this.state.treePosition), 0);
    }

    goToEnd() {
        let rootTree = gametree.getRoot(...this.state.treePosition);
        let tp = gametree.navigate(rootTree, 0, gametree.getCurrentHeight(rootTree) - 1);
        this.setCurrentTreePosition(...tp);
    }

    goToSiblingVariation(step) {
        var _state$treePosition8 = _slicedToArray(this.state.treePosition, 2);

        let tree = _state$treePosition8[0],
            index = _state$treePosition8[1];

        if (!tree.parent) return;

        step = step < 0 ? -1 : 1;

        let mod = tree.parent.subtrees.length;
        let i = (tree.parent.current + mod + step) % mod;

        this.setCurrentTreePosition(tree.parent.subtrees[i], 0);
    }

    goToMainVariation() {
        let tp = this.state.treePosition;
        let root = gametree.getRoot(...tp);

        while (root.subtrees.length !== 0) {
            root.current = 0;
            root = root.subtrees[0];
        }

        if (gametree.onMainTrack(...tp)) {
            this.setCurrentTreePosition(...tp);
        } else {
            var _tp = _slicedToArray(tp, 1);

            let tree = _tp[0];


            while (!gametree.onMainTrack(tree)) {
                tree = tree.parent;
            }

            this.setCurrentTreePosition(tree, tree.nodes.length - 1);
        }
    }

    goToSiblingGame(step) {
        var _state4 = this.state;
        let gameTrees = _state4.gameTrees,
            treePosition = _state4.treePosition;

        var _treePosition = _slicedToArray(treePosition, 1);

        let tree = _treePosition[0];

        let index = gameTrees.indexOf(gametree.getRoot(tree));
        let newIndex = Math.max(0, Math.min(gameTrees.length - 1, index + step));

        this.setCurrentTreePosition(gameTrees[newIndex], 0);
    }

    // Find Methods

    findPosition(step, condition) {
        return new Promise(function ($return, $error) {
            let tp, iterator;

            if (isNaN(step)) step = 1;else step = step >= 0 ? 1 : -1;

            this.setBusy(true);

            return helper.wait(setting.get('find.delay')).then(function ($await_12) {

                tp = this.state.treePosition;
                iterator = gametree.makeHorizontalNavigator(...tp);

                while (true) {
                    tp = step >= 0 ? iterator.next() : iterator.prev();

                    if (!tp) {
                        let root = this.inferredState.rootTree;

                        if (step === 1) {
                            tp = [root, 0];
                        } else {
                            let sections = gametree.getSection(root, gametree.getHeight(root) - 1);
                            tp = sections[sections.length - 1];
                        }

                        iterator = gametree.makeHorizontalNavigator(...tp);
                    }

                    if (helper.vertexEquals(tp, this.state.treePosition) || condition(...tp)) break;
                }

                this.setCurrentTreePosition(...tp);
                this.setBusy(false);
                return $return();
            }.$asyncbind(this, $error), $error);
        }.$asyncbind(this));
    }

    findHotspot(step) {
        return new Promise(function ($return, $error) {
            return this.findPosition(step, (tree, index) => 'HO' in tree.nodes[index]).then(function ($await_13) {
                return $return();
            }.$asyncbind(this, $error), $error);
        }.$asyncbind(this));
    }

    findMove(step, { vertex = null, text = '' }) {
        return new Promise(function ($return, $error) {
            let point;

            if (vertex == null && text.trim() === '') return $return();
            point = vertex ? sgf.stringifyVertex(vertex) : null;

            return this.findPosition(step, (tree, index) => {
                let node = tree.nodes[index];
                let cond = (prop, value) => prop in node && node[prop][0].toLowerCase().includes(value.toLowerCase());

                return (!point || ['B', 'W'].some(x => cond(x, point))) && (!text || cond('C', text) || cond('N', text));
            }).then(function ($await_14) {
                return $return();
            }.$asyncbind(this, $error), $error);
        }.$asyncbind(this));
    }

    // Node Actions

    getGameInfo(tree) {
        let root = gametree.getRoot(tree);

        let komi = gametree.getRootProperty(root, 'KM');
        if (komi != null && !isNaN(komi)) komi = +komi;else komi = null;

        let size = gametree.getRootProperty(root, 'SZ');
        if (size == null) {
            size = [19, 19];
        } else {
            let s = size.toString().split(':');
            size = [+s[0], +s[s.length - 1]];
        }

        let handicap = ~~gametree.getRootProperty(root, 'HA', 0);
        handicap = Math.max(1, Math.min(9, handicap));
        if (handicap === 1) handicap = 0;

        let playerNames = ['B', 'W'].map(x => gametree.getRootProperty(tree, `P${x}`) || gametree.getRootProperty(tree, `${x}T`));

        let playerRanks = ['BR', 'WR'].map(x => gametree.getRootProperty(root, x));

        return {
            playerNames,
            playerRanks,
            blackName: playerNames[0],
            blackRank: playerRanks[0],
            whiteName: playerNames[1],
            whiteRank: playerRanks[1],
            gameName: gametree.getRootProperty(root, 'GN'),
            eventName: gametree.getRootProperty(root, 'EV'),
            date: gametree.getRootProperty(root, 'DT'),
            result: gametree.getRootProperty(root, 'RE'),
            komi,
            handicap,
            size
        };
    }

    setGameInfo(tree, data) {
        let root = gametree.getRoot(tree);
        let node = root.nodes[0];

        if ('size' in data) {
            // Update board size

            if (data.size) {
                let value = data.size;
                value = value.map((x, i) => isNaN(x) || !x ? 19 : Math.min(25, Math.max(2, x)));

                if (value[0] === value[1]) value = value[0];else value = value.join(':');

                setting.set('game.default_board_size', value);
                node.SZ = [value];
            } else {
                delete node.SZ;
            }
        }

        let props = {
            blackName: 'PB',
            blackRank: 'BR',
            whiteName: 'PW',
            whiteRank: 'WR',
            gameName: 'GN',
            eventName: 'EV',
            date: 'DT',
            result: 'RE',
            komi: 'KM',
            handicap: 'HA'
        };

        for (let key in props) {
            if (!(key in data)) continue;

            let value = data[key];

            if (value && value.toString().trim() !== '') {
                if (key === 'komi') {
                    if (isNaN(value)) value = 0;

                    setting.set('game.default_komi', value);
                } else if (key === 'handicap') {
                    let board = gametree.getBoard(root, 0);
                    let stones = board.getHandicapPlacement(+value);

                    value = stones.length;
                    setting.set('game.default_handicap', value);

                    if (value <= 1) {
                        delete node[props[key]];
                        delete node.AB;
                        continue;
                    }

                    node.AB = stones.map(sgf.stringifyVertex);
                }

                node[props[key]] = [value];
            } else {
                delete node[props[key]];
            }
        }
    }

    getPlayer(tree, index) {
        let node = tree.nodes[index];

        return 'PL' in node ? node.PL[0] == 'W' ? -1 : 1 : 'B' in node || 'HA' in node && +node.HA[0] >= 1 ? -1 : 1;
    }

    setPlayer(tree, index, sign) {
        let node = tree.nodes[index];
        let intendedSign = 'B' in node || 'HA' in node && +node.HA[0] >= 1 ? -1 : +('W' in node);

        if (intendedSign === sign || sign === 0) {
            delete node.PL;
        } else {
            node.PL = [sign > 0 ? 'B' : 'W'];
        }

        this.clearUndoPoint();
    }

    getComment(tree, index) {
        let node = tree.nodes[index];

        return {
            title: 'N' in node ? node.N[0].trim() : null,
            comment: 'C' in node ? node.C[0] : null,
            hotspot: 'HO' in node,
            moveAnnotation: 'BM' in node ? 'BM' : 'TE' in node ? 'TE' : 'DO' in node ? 'DO' : 'IT' in node ? 'IT' : null,
            positionAnnotation: 'UC' in node ? 'UC' : 'GW' in node ? 'GW' : 'DM' in node ? 'DM' : 'GB' in node ? 'GB' : null
        };
    }

    setComment(tree, index, data) {
        let node = tree.nodes[index];

        for (let _ref4 of [['title', 'N'], ['comment', 'C']]) {
            var _ref5 = _slicedToArray(_ref4, 2);

            let key = _ref5[0];
            let prop = _ref5[1];

            if (key in data) {
                if (data[key] && data[key].trim() !== '') node[prop] = [data[key]];else delete node[prop];
            }
        }

        if ('hotspot' in data) {
            if (data.hotspot) node.HO = [1];else delete node.HO;
        }

        let clearProperties = properties => properties.forEach(p => delete node[p]);

        if ('moveAnnotation' in data) {
            let moveProps = { 'BM': 1, 'DO': '', 'IT': '', 'TE': 1 };

            clearProperties(Object.keys(moveProps));

            if (data.moveAnnotation != null) node[data.moveAnnotation] = [moveProps[data.moveAnnotation]];
        }

        if ('positionAnnotation' in data) {
            let positionProps = { 'UC': 1, 'GW': 1, 'GB': 1, 'DM': 1 };

            clearProperties(Object.keys(positionProps));

            if (data.positionAnnotation != null) node[data.positionAnnotation] = [positionProps[data.positionAnnotation]];
        }

        this.clearUndoPoint();
    }

    rotateBoard(anticlockwise) {
        let root = gametree.getRoot(this.state.treePosition[0]);
        let trees = gametree.getTreesRecursive(root);
        let info = this.getGameInfo(root);

        for (let tree of trees) {
            for (let node of tree.nodes) {
                rotation.rotateNode(node, info.size[0], info.size[1], anticlockwise);
                node.board = null;
            }
        }

        if (info.size[1] !== info.size[0]) {
            this.setGameInfo(root, { size: [info.size[1], info.size[0]] });
        }
    }

    copyVariation(tree, index) {
        let clone = gametree.clone(tree);
        if (index != 0) gametree.split(clone, index - 1);

        this.copyVariationData = clone;
    }

    cutVariation(tree, index, { setUndoPoint = true } = {}) {
        if (setUndoPoint) this.setUndoPoint('Undo Cut Variation');

        this.copyVariation(tree, index);
        this.removeNode(tree, index, {
            suppressConfirmation: true,
            setUndoPoint: false
        });
    }

    pasteVariation(tree, index, { setUndoPoint = true } = {}) {
        if (this.copyVariationData == null) return;

        if (setUndoPoint) this.setUndoPoint('Undo Paste Variation');
        this.closeDrawer();
        this.setMode('play');

        let updateRoot = !tree.parent;
        let oldLength = tree.nodes.length;
        let splitted = gametree.split(tree, index);
        let copied = gametree.clone(this.copyVariationData);

        copied.parent = splitted;
        splitted.subtrees.push(copied);

        if (updateRoot) {
            let gameTrees = this.state.gameTrees;

            gameTrees[this.inferredState.gameIndex] = splitted;
            this.setState({ gameTrees });
        }

        if (splitted.subtrees.length === 1) {
            gametree.reduce(splitted);
            this.setCurrentTreePosition(splitted, oldLength);
        } else {
            this.setCurrentTreePosition(copied, 0);
        }
    }

    flattenVariation(tree, index, { setUndoPoint = true } = {}) {
        if (setUndoPoint) this.setUndoPoint('Undo Flatten');
        this.closeDrawer();
        this.setMode('play');

        let gameTrees = this.state.gameTrees;
        var _inferredState3 = this.inferredState;
        let rootTree = _inferredState3.rootTree,
            gameIndex = _inferredState3.gameIndex;

        let board = gametree.getBoard(tree, index);
        let rootNode = rootTree.nodes[0];
        let inherit = ['BR', 'BT', 'DT', 'EV', 'GN', 'GC', 'PB', 'PW', 'RE', 'SO', 'WT', 'WR'];

        let clone = gametree.clone(tree);
        if (index !== 0) gametree.split(clone, index - 1);
        let node = clone.nodes[0];

        node.AB = [];
        node.AW = [];
        delete node.AE;
        delete node.B;
        delete node.W;

        clone.parent = null;
        inherit.forEach(x => x in rootNode ? node[x] = rootNode[x] : null);

        for (let x = 0; x < board.width; x++) {
            for (let y = 0; y < board.height; y++) {
                let sign = board.get([x, y]);
                if (sign == 0) continue;

                node[sign > 0 ? 'AB' : 'AW'].push(sgf.stringifyVertex([x, y]));
            }
        }

        if (node.AB.length === 0) delete node.AB;
        if (node.AW.length === 0) delete node.AW;

        gameTrees[gameIndex] = clone;
        this.setState({ gameTrees });
        this.setCurrentTreePosition(clone, 0, { clearUndoPoint: false });
    }

    makeMainVariation(tree, index, { setUndoPoint = true } = {}) {
        if (setUndoPoint) this.setUndoPoint('Restore Main Variation');
        this.closeDrawer();
        this.setMode('play');

        let t = tree;

        while (t.parent != null) {
            t.parent.subtrees.splice(t.parent.subtrees.indexOf(t), 1);
            t.parent.subtrees.unshift(t);
            t.parent.current = 0;

            t = t.parent;
        }

        t = tree;

        while (t.subtrees.length !== 0) {
            var _t$subtrees$splice = t.subtrees.splice(t.current, 1),
                _t$subtrees$splice2 = _slicedToArray(_t$subtrees$splice, 1);

            let x = _t$subtrees$splice2[0];

            t.subtrees.unshift(x);
            t.current = 0;

            t = x;
        }

        this.setCurrentTreePosition(tree, index);
    }

    shiftVariation(tree, index, step, { setUndoPoint = true } = {}) {
        if (!tree.parent) return;

        if (setUndoPoint) this.setUndoPoint('Undo Shift Variation');
        this.closeDrawer();
        this.setMode('play');

        let subtrees = tree.parent.subtrees;
        let m = subtrees.length;
        let i = subtrees.indexOf(tree);
        let iNew = ((i + step) % m + m) % m;

        subtrees.splice(i, 1);
        subtrees.splice(iNew, 0, tree);

        this.setCurrentTreePosition(...this.state.treePosition);
    }

    removeNode(tree, index, { suppressConfirmation = false, setUndoPoint = true } = {}) {
        if (!tree.parent && index === 0) {
            dialog.showMessageBox('The root node cannot be removed.', 'warning');
            return;
        }

        if (suppressConfirmation !== true && setting.get('edit.show_removenode_warning') && dialog.showMessageBox('Do you really want to remove this node?', 'warning', ['Remove Node', 'Cancel'], 1) === 1) return;

        if (setUndoPoint) this.setUndoPoint('Undo Remove Node');
        this.closeDrawer();
        this.setMode('play');

        // Remove node

        let prev = gametree.navigate(tree, index, -1);

        if (index !== 0) {
            tree.nodes.splice(index, tree.nodes.length);
            tree.current = null;
            tree.subtrees.length = 0;
        } else {
            let parent = tree.parent;
            let i = parent.subtrees.indexOf(tree);

            parent.subtrees.splice(i, 1);
            if (parent.current >= 1) parent.current--;
            gametree.reduce(parent);
        }

        if (!prev) prev = this.state.treePosition;
        this.setCurrentTreePosition(...prev);
    }

    removeOtherVariations(tree, index, { suppressConfirmation = false, setUndoPoint = true } = {}) {
        if (suppressConfirmation !== true && setting.get('edit.show_removeothervariations_warning') && dialog.showMessageBox('Do you really want to remove all other variations?', 'warning', ['Remove Variations', 'Cancel'], 1) == 1) return;

        // Save undo information

        if (setUndoPoint) this.setUndoPoint('Undo Remove Other Variations');
        this.closeDrawer();
        this.setMode('play');

        // Remove all subsequent variations

        let t = tree;

        while (t.subtrees.length != 0) {
            t.subtrees = [t.subtrees[t.current]];
            t.current = 0;

            t = t.subtrees[0];
        }

        // Remove all precedent variations

        t = tree;

        while (t.parent != null) {
            t.parent.subtrees = [t];
            t.parent.current = 0;

            t = t.parent;
        }

        this.setCurrentTreePosition(tree, index);
    }

    // Menus

    openNodeMenu(tree, index, options = {}) {
        if (this.state.mode === 'scoring') return;

        let template = [{
            label: 'C&opy Variation',
            click: () => this.copyVariation(tree, index)
        }, {
            label: 'C&ut Variation',
            click: () => this.cutVariation(tree, index)
        }, {
            label: '&Paste Variation',
            click: () => this.pasteVariation(tree, index)
        }, { type: 'separator' }, {
            label: 'Make &Main Variation',
            click: () => this.makeMainVariation(tree, index)
        }, {
            label: "Shift &Left",
            click: () => this.shiftVariation(tree, index, -1)
        }, {
            label: "Shift Ri&ght",
            click: () => this.shiftVariation(tree, index, 1)
        }, { type: 'separator' }, {
            label: '&Flatten',
            click: () => this.flattenVariation(tree, index)
        }, {
            label: '&Remove Node',
            click: () => this.removeNode(tree, index)
        }, {
            label: 'Remove &Other Variations',
            click: () => this.removeOtherVariations(tree, index)
        }];

        helper.popupMenu(template, options.x, options.y);
    }

    openCommentMenu(tree, index, options = {}) {
        let node = tree.nodes[index];

        let template = [{
            label: '&Clear Annotations',
            click: () => {
                this.setComment(tree, index, { positionAnnotation: null, moveAnnotation: null });
            }
        }, { type: 'separator' }, {
            label: 'Good for &Black',
            type: 'checkbox',
            data: { positionAnnotation: 'GB' }
        }, {
            label: '&Unclear Position',
            type: 'checkbox',
            data: { positionAnnotation: 'UC' }
        }, {
            label: '&Even Position',
            type: 'checkbox',
            data: { positionAnnotation: 'DM' }
        }, {
            label: 'Good for &White',
            type: 'checkbox',
            data: { positionAnnotation: 'GW' }
        }];

        if ('B' in node || 'W' in node) {
            template.push({ type: 'separator' }, {
                label: '&Good Move',
                type: 'checkbox',
                data: { moveAnnotation: 'TE' }
            }, {
                label: '&Interesting Move',
                type: 'checkbox',
                data: { moveAnnotation: 'IT' }
            }, {
                label: '&Doubtful Move',
                type: 'checkbox',
                data: { moveAnnotation: 'DO' }
            }, {
                label: 'B&ad Move',
                type: 'checkbox',
                data: { moveAnnotation: 'BM' }
            });
        }

        template.push({ type: 'separator' }, {
            label: '&Hotspot',
            type: 'checkbox',
            data: { hotspot: true }
        });

        for (let item of template) {
            if (!('data' in item)) continue;

            var _Object$keys = Object.keys(item.data),
                _Object$keys2 = _slicedToArray(_Object$keys, 1);

            let key = _Object$keys2[0];

            let prop = key === 'hotspot' ? 'HO' : item.data[key];

            item.checked = prop in node;
            if (item.checked) item.data[key] = null;

            item.click = () => this.setComment(tree, index, item.data);
        }

        helper.popupMenu(template, options.x, options.y);
    }

    // GTP Engines

    attachEngines(...engines) {}

    detachEngines() {}

    suspendEngines() {}

    handleCommandSent({ controller, command, getResponse }) {
        return new Promise(function ($return, $error) {
            return $return();
        });
    }

    syncEngines({ passPlayer = null } = {}) {
        return new Promise(function ($return, $error) {
            return $return();
        });
    }

    startGeneratingMoves({ passPlayer = null, followUp = false } = {}) {
        return new Promise(function ($return, $error) {
            return $return();
        });
    }

    stopGeneratingMoves() {}

    // Render

    render(_, state) {
        // Calculate some inferred values

        let rootTree = gametree.getRoot(...state.treePosition);
        let scoreBoard, areaMap;

        if (['scoring', 'estimator'].includes(state.mode)) {
            // Calculate area map

            scoreBoard = gametree.getBoard(...state.treePosition).clone();

            for (let vertex of state.deadStones) {
                let sign = scoreBoard.get(vertex);
                if (sign === 0) continue;

                scoreBoard.captures[sign > 0 ? 1 : 0]++;
                scoreBoard.set(vertex, 0);
            }

            areaMap = state.mode === 'estimator' ? influence.map(scoreBoard.arrangement, { discrete: true }) : influence.areaMap(scoreBoard.arrangement);
        }

        this.inferredState = {
            showSidebar: state.showGameGraph || state.showCommentBox,
            showLeftSidebar: state.showConsole,
            rootTree,
            gameIndex: state.gameTrees.indexOf(rootTree),
            gameInfo: this.getGameInfo(rootTree),
            currentPlayer: this.getPlayer(...state.treePosition),
            scoreBoard,
            areaMap
        };

        state = Object.assign(state, this.inferredState);

        return h('section', {
            class: classNames({
                leftsidebar: state.showLeftSidebar,
                sidebar: state.showSidebar,
                [state.mode]: true
            })
        }, h(ThemeManager), h(MainView, state), h(LeftSidebar, state), h(Sidebar, state), h(DrawerManager, state), h(InputBox, {
            text: state.inputBoxText,
            show: state.showInputBox,
            onSubmit: state.onInputBoxSubmit,
            onCancel: state.onInputBoxCancel
        }), h(BusyScreen, { show: state.busy > 0 }), h(InfoOverlay, { text: state.infoOverlayText, show: state.showInfoOverlay }));
    }
}

// Render

render(h(App), document.body);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./src/components/BusyScreen.js":
/*!**************************************!*\
  !*** ./src/components/BusyScreen.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! electron */ "./src/modules/shims/electron.js");

const remote = _require.remote,
      ipcRenderer = _require.ipcRenderer;

var _require2 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.min.js");

const h = _require2.h,
      Component = _require2.Component;


const setting = remote.require('./setting');

class BusyScreen extends Component {
    componentWillReceiveProps({ show }) {
        if (show === this.props.show) return;

        clearTimeout(this.busyId);

        if (show) {
            ipcRenderer.send('build-menu', true);
            this.setState({ show: true });
            document.activeElement.blur();
        } else {
            ipcRenderer.send('build-menu');
            let delay = setting.get('app.hide_busy_delay');
            this.busyId = setTimeout(() => this.setState({ show: false }), delay);
        }
    }

    render(_, { show }) {
        return h('section', {
            id: 'busy',
            style: { display: show ? 'block' : 'none' }
        });
    }
}

module.exports = BusyScreen;

/***/ }),

/***/ "./src/components/CommentBox.js":
/*!**************************************!*\
  !*** ./src/components/CommentBox.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _require = __webpack_require__(/*! electron */ "./src/modules/shims/electron.js");

const remote = _require.remote;

var _require2 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.min.js");

const h = _require2.h,
      Component = _require2.Component;

const classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
const sgf = __webpack_require__(/*! @sabaki/sgf */ "./node_modules/@sabaki/sgf/src/main.js");

const MarkdownContentDisplay = __webpack_require__(/*! ./MarkdownContentDisplay */ "./src/components/MarkdownContentDisplay.js");

const boardmatcher = __webpack_require__(/*! ../modules/boardmatcher */ "./src/modules/boardmatcher.js");
const gametree = __webpack_require__(/*! ../modules/gametree */ "./src/modules/gametree.js");
const helper = __webpack_require__(/*! ../modules/helper */ "./src/modules/helper.js");
const setting = remote.require('./setting');
const Board = __webpack_require__(/*! ../modules/board */ "./src/modules/board.js");

class CommentTitle extends Component {
    constructor() {
        super();

        this.handleEditButtonClick = () => sabaki.setMode('edit');
    }

    shouldComponentUpdate({ treePosition, moveAnnotation, positionAnnotation, title }) {
        var _treePosition = _slicedToArray(treePosition, 2);

        let tree = _treePosition[0],
            index = _treePosition[1];


        return title !== this.props.title
        // First node
        || !tree.parent && index === 0
        // Last node
        || tree.subtrees.length === 0 && index === tree.nodes.length - 1
        // Other data changed
        || treePosition !== this.props.treePosition || !helper.vertexEquals(moveAnnotation, this.props.moveAnnotation) || !helper.vertexEquals(positionAnnotation, this.props.positionAnnotation);
    }

    getCurrentMoveInterpretation() {
        var _props = this.props,
            _props$treePosition = _slicedToArray(_props.treePosition, 2);

        let tree = _props$treePosition[0],
            index = _props$treePosition[1],
            board = _props.board;

        let node = tree.nodes[index];

        // Determine root node

        if (!tree.parent && index === 0) {
            let result = [];

            if ('EV' in node) result.push(node.EV[0]);
            if ('GN' in node) result.push(node.GN[0]);

            result = result.filter(x => x.trim() !== '').join(' — ');
            if (result !== '') return result;

            let today = new Date();
            if (today.getDate() === 25 && today.getMonth() === 3) return 'Happy Birthday, Sabaki!';
        }

        // Determine end of main variation and show game result

        if (tree.subtrees.length === 0 && index === tree.nodes.length - 1 && gametree.onMainTrack(tree)) {
            let rootNode = gametree.getRoot(tree).nodes[0];

            if ('RE' in rootNode && rootNode.RE[0].trim() !== '') return 'Result: ' + rootNode.RE[0];
        }

        // Determine capture

        let ptp = gametree.navigate(tree, index, -1);

        if (ptp) {
            let prevBoard = ptp[0].nodes[ptp[1]].board || gametree.getBoard(...ptp);

            if (!helper.vertexEquals(prevBoard.captures, board.captures)) return 'Take';
        }

        // Get current vertex

        let vertex;

        if ('B' in node && node.B[0] !== '') vertex = sgf.parseVertex(node.B[0]);else if ('W' in node && node.W[0] !== '') vertex = sgf.parseVertex(node.W[0]);else if ('W' in node || 'B' in node) return 'Pass';else return '';

        return boardmatcher.getMoveInterpretation(board, vertex) || '';
    }

    render({
        moveAnnotation: [ma, mv],
        positionAnnotation: [pa, pv],
        title
    }) {
        let moveData = {
            '-1': ['Bad move', 'badmove'],
            '0': ['Doubtful move', 'doubtfulmove'],
            '1': ['Interesting move', 'interestingmove'],
            '2': ['Good move', 'goodmove']
        };

        if (mv > 1) {
            for (let s in moveData) {
                moveData[s][0] = 'Very ' + moveData[s][0].toLowerCase();
            }
        }

        let positionData = {
            '-1': ['Good for white', 'white'],
            '0': ['Even position', 'balance'],
            '1': ['Good for black', 'black'],
            '-2': ['Unclear position', 'unclear']
        };

        if (pv > 1) {
            for (let s in positionData) {
                positionData[s][0] = 'Very ' + positionData[s][0].toLowerCase();
            }
        }

        let showMoveInterpretation = setting.get('comments.show_move_interpretation');

        return h('p', {
            class: classNames({
                header: true,
                movestatus: ma !== null,
                positionstatus: pa !== null
            })
        }, h('img', {
            width: 16,
            height: 16,
            class: 'positionstatus',
            title: pa in positionData ? positionData[pa][0] : '',
            src: pa in positionData ? `/static/game/img/ui/${positionData[pa][1]}.svg` : ''
        }), h('img', {
            width: 16,
            height: 16,
            class: 'movestatus',
            title: ma in moveData ? moveData[ma][0] : '',
            src: ma in moveData ? `/static/game/img/ui/${moveData[ma][1]}.svg` : ''
        }), h('img', {
            src: '/static/node_modules/octicons/build/svg/pencil.svg',
            class: 'edit-button',
            title: 'Edit',
            width: 16,
            height: 16,
            onClick: this.handleEditButtonClick
        }), h('span', {}, helper.typographer(title !== '' ? title : showMoveInterpretation ? this.getCurrentMoveInterpretation() : '')));
    }
}

class CommentText extends Component {
    shouldComponentUpdate({ comment }) {
        return comment !== this.props.comment;
    }

    render({ comment }) {
        return h('div', {
            ref: el => this.element = el,
            class: 'comment'
        }, h(MarkdownContentDisplay, { source: comment }));
    }
}

class CommentBox extends Component {
    constructor(props) {
        super();

        this.state = {
            board: new Board()
        };

        this.handleCommentInput = () => {
            var _props$onCommentInput = this.props.onCommentInput;
            let onCommentInput = _props$onCommentInput === undefined ? helper.noop : _props$onCommentInput;


            onCommentInput({
                title: this.titleInputElement.value,
                comment: this.textareaElement.value
            });
        };

        this.handleMenuButtonClick = () => {
            var _menuButtonElement$ge = this.menuButtonElement.getBoundingClientRect();

            let left = _menuButtonElement$ge.left,
                bottom = _menuButtonElement$ge.bottom;


            sabaki.openCommentMenu(...this.props.treePosition, {
                x: Math.round(left),
                y: Math.round(bottom)
            });
        };
    }

    shouldComponentUpdate({ showCommentBox, height }) {
        return height !== this.props.height || showCommentBox && !this.dirty;
    }

    componentWillReceiveProps({ treePosition, mode }) {
        let treePositionChanged = treePosition !== this.props.treePosition;

        if (mode === 'edit') {
            this.element.scrollTop = 0;
            if (treePositionChanged) this.textareaElement.scrollTop = 0;

            return;
        }

        // Debounce rendering

        this.dirty = true;

        clearTimeout(this.updateId);
        this.updateId = setTimeout(() => {
            this.dirty = false;

            if (treePositionChanged) {
                this.setState({
                    board: gametree.getBoard(...this.props.treePosition)
                });

                this.element.scrollTop = 0;
            } else {
                this.setState(this.state);
            }
        }, setting.get('graph.delay'));
    }

    render({
        treePosition,
        height,
        sidebarSplitTransition,
        moveAnnotation,
        positionAnnotation,
        title,
        comment,

        onResizerMouseDown = helper.noop,
        onLinkClick = helper.noop,
        onCoordinateMouseEnter = helper.noop,
        onCoordinateMouseLeave = helper.noop
    }, {
        board
    }) {
        return h('section', {
            ref: el => this.element = el,
            id: 'properties',
            style: {
                transition: sidebarSplitTransition ? null : 'none',
                height: height + '%'
            }
        }, h('div', {
            class: 'horizontalresizer',
            onMouseDown: onResizerMouseDown
        }), h('div', { class: 'inner' }, h(CommentTitle, {
            board,
            treePosition,
            moveAnnotation,
            positionAnnotation,
            title
        }), h(CommentText, {
            comment,
            onLinkClick,
            onCoordinateMouseEnter,
            onCoordinateMouseLeave
        })), h('div', { class: 'edit' }, h('div', { class: 'header' }, h('img', {
            ref: el => this.menuButtonElement = el,
            src: '/static/node_modules/octicons/build/svg/chevron-down.svg',
            width: 16,
            height: 16,
            onClick: this.handleMenuButtonClick
        }), h('div', {}, h('input', {
            ref: el => this.titleInputElement = el,
            type: 'text',
            name: 'title',
            value: title,
            placeholder: 'Title',
            onInput: this.handleCommentInput
        }))), h('textarea', {
            ref: el => this.textareaElement = el,
            placeholder: 'Comment',
            value: comment,
            onInput: this.handleCommentInput
        })));
    }
}

module.exports = CommentBox;

/***/ }),

/***/ "./src/components/ContentDisplay.js":
/*!******************************************!*\
  !*** ./src/components/ContentDisplay.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! electron */ "./src/modules/shims/electron.js");

const shell = _require.shell;

var _require2 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.min.js");

const h = _require2.h,
      Component = _require2.Component;


const gametree = __webpack_require__(/*! ../modules/gametree */ "./src/modules/gametree.js");

function htmlify(input) {
    let urlRegex = '\\b(ht|f)tps?:\\/\\/[^\\s<]+[^<.,:;"\')\\]\\s](\\/\\B|\\b)';
    let emailRegex = '\\b[^\\s@<]+@[^\\s@<]+\\b';
    let coordRegex = '\\b[a-hj-zA-HJ-Z][1-9][0-9]?\\b';
    let movenumberRegex = '\\B#\\d+\\b';
    let totalRegex = '(' + [urlRegex, emailRegex, coordRegex, movenumberRegex].join('|') + ')';

    input = input.replace(new RegExp(totalRegex, 'g'), match => {
        if (new RegExp(urlRegex).test(match)) return `<a href="${match}" class="external">${match}</a>`;
        if (new RegExp(emailRegex).test(match)) return `<a href="mailto:${match}" class="external">${match}</a>`;
        if (new RegExp(movenumberRegex).test(match)) return `<a href="#" class="movenumber" title="Jump to Move Number">${match}</a>`;
        if (new RegExp(coordRegex).test(match)) return `<span class="coord">${match}</span>`;
    });

    return input;
}

class ContentDisplay extends Component {
    constructor(props) {
        super(props);

        this.handleLinkClick = evt => {
            let linkElement = evt.currentTarget;

            if (linkElement.classList.contains('external')) {
                evt.preventDefault();
                shell.openExternal(linkElement.href);
            } else if (linkElement.classList.contains('movenumber')) {
                evt.preventDefault();
                let moveNumber = +linkElement.innerText.slice(1);

                sabaki.setUndoPoint('Go Back');
                sabaki.goToMainVariation();
                sabaki.goToMoveNumber(moveNumber);
            }
        };

        this.handleCoordMouseEnter = evt => {
            let board = gametree.getBoard(...sabaki.state.treePosition);
            let vertex = board.coord2vertex(evt.currentTarget.innerText);

            sabaki.setState({ highlightVertices: [vertex] });
        };

        this.handleCoordMouseLeave = evt => {
            sabaki.setState({ highlightVertices: [] });
        };
    }

    componentDidMount() {
        this.componentDidUpdate();
    }

    componentDidUpdate() {
        // Handle link clicks

        for (let el of this.element.querySelectorAll('a')) {
            el.removeEventListener('click', this.handleLinkClick);
            el.addEventListener('click', this.handleLinkClick);
        }

        // Hover on coordinates

        for (let el of this.element.querySelectorAll('.coord')) {
            el.removeEventListener('mouseenter', this.handleCoordMouseEnter);
            el.removeEventListener('mouseleave', this.handleCoordMouseLeave);
            el.addEventListener('mouseenter', this.handleCoordMouseEnter);
            el.addEventListener('mouseleave', this.handleCoordMouseLeave);
        }
    }

    render({ tag, content, children }) {
        return content != null ? h(tag, Object.assign({
            ref: el => this.element = el,
            dangerouslySetInnerHTML: {
                __html: htmlify(content.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'))
            }
        }, this.props)) : h(tag, Object.assign({
            ref: el => this.element = el
        }, this.props), children);
    }
}

module.exports = ContentDisplay;

/***/ }),

/***/ "./src/components/DrawerManager.js":
/*!*****************************************!*\
  !*** ./src/components/DrawerManager.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.min.js");

const h = _require.h,
      Component = _require.Component;

const gametree = __webpack_require__(/*! ../modules/gametree */ "./src/modules/gametree.js");

const InfoDrawer = __webpack_require__(/*! ./drawers/InfoDrawer */ "./src/components/drawers/InfoDrawer.js");
const ScoreDrawer = __webpack_require__(/*! ./drawers/ScoreDrawer */ "./src/components/drawers/ScoreDrawer.js");
const PreferencesDrawer = __webpack_require__(/*! ./drawers/PreferencesDrawer */ "./src/modules/shims/noop.js");
const GameChooserDrawer = __webpack_require__(/*! ./drawers/GameChooserDrawer */ "./src/components/drawers/GameChooserDrawer.js");
const CleanMarkupDrawer = __webpack_require__(/*! ./drawers/CleanMarkupDrawer */ "./src/modules/shims/noop.js");

class DrawerManager extends Component {
    constructor() {
        super();

        this.handleScoreSubmit = ({ resultString }) => {
            this.props.rootTree.nodes[0].RE = [resultString];
            sabaki.closeDrawer();
            setTimeout(() => sabaki.setMode('play'), 500);
        };

        this.handleGameSelect = ({ selectedTree }) => {
            sabaki.closeDrawer();
            sabaki.setMode('play');
            sabaki.setCurrentTreePosition(selectedTree, 0);
        };

        this.handleGameTreesChange = evt => {
            let newGameTrees = evt.gameTrees;
            var _props = this.props;
            let gameTrees = _props.gameTrees,
                gameIndex = _props.gameIndex,
                rootTree = _props.rootTree;


            if (!newGameTrees.includes(rootTree)) {
                if (newGameTrees.length === 0) {
                    newGameTrees = [sabaki.getEmptyGameTree()];
                }

                let newIndex = Math.min(Math.max(gameIndex - 1, 0), newGameTrees.length - 1);
                let newTreePosition = [newGameTrees[newIndex], 0];

                sabaki.setCurrentTreePosition(...newTreePosition);
            }

            sabaki.setState({ gameTrees: newGameTrees });
        };
    }

    render({
        mode,
        openDrawer,
        gameTrees,
        gameIndex,
        treePosition,
        rootTree,

        gameInfo,
        currentPlayer,

        scoringMethod,
        scoreBoard,
        areaMap,

        engines,
        attachedEngines,
        graphGridSize,
        preferencesTab
    }) {
        return h('section', {}, h(InfoDrawer, {
            show: openDrawer === 'info',
            engines: attachedEngines,
            treePosition,
            gameInfo,
            currentPlayer
        }), h(PreferencesDrawer, {
            show: openDrawer === 'preferences',
            tab: preferencesTab,
            engines,
            graphGridSize
        }), h(GameChooserDrawer, {
            show: openDrawer === 'gamechooser',
            gameTrees,
            gameIndex,

            onItemClick: this.handleGameSelect,
            onChange: this.handleGameTreesChange
        }), h(CleanMarkupDrawer, {
            show: openDrawer === 'cleanmarkup',
            treePosition
        }), h(ScoreDrawer, {
            show: openDrawer === 'score',
            estimating: mode === 'estimator',
            areaMap,
            board: scoreBoard,
            method: scoringMethod,
            komi: +gametree.getRootProperty(treePosition[0], 'KM', 0),

            onSubmitButtonClick: this.handleScoreSubmit
        }));
    }
}

module.exports = DrawerManager;

/***/ }),

/***/ "./src/components/GameGraph.js":
/*!*************************************!*\
  !*** ./src/components/GameGraph.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _require = __webpack_require__(/*! electron */ "./src/modules/shims/electron.js");

const remote = _require.remote;

var _require2 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.min.js");

const h = _require2.h,
      Component = _require2.Component;

const classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

const gametree = __webpack_require__(/*! ../modules/gametree */ "./src/modules/gametree.js");
const helper = __webpack_require__(/*! ../modules/helper */ "./src/modules/helper.js");
const setting = remote.require('./setting');

var _map = ['graph.delay', 'graph.animation_duration', 'sgf.comment_properties', 'graph.edge_color', 'graph.edge_inactive_color', 'graph.edge_size', 'graph.edge_inactive_size', 'graph.node_color', 'graph.node_inactive_color', 'graph.node_active_color', 'graph.node_bookmark_color', 'graph.node_comment_color', 'graph.node_inactive_bookmark_color', 'graph.node_inactive_comment_color'].map(x => setting.get(x)),
    _map2 = _slicedToArray(_map, 14);

let delay = _map2[0],
    animationDuration = _map2[1],
    commentProperties = _map2[2],
    edgeColor = _map2[3],
    edgeInactiveColor = _map2[4],
    edgeSize = _map2[5],
    edgeInactiveSize = _map2[6],
    nodeColor = _map2[7],
    nodeInactiveColor = _map2[8],
    nodeActiveColor = _map2[9],
    nodeBookmarkColor = _map2[10],
    nodeCommentColor = _map2[11],
    nodeInactiveBookmarkColor = _map2[12],
    nodeInactiveCommentColor = _map2[13];


class GameGraphNode extends Component {
    constructor() {
        super();

        this.state = {
            hover: false
        };

        this.handleMouseMove = evt => {
            if (!this.element) return;

            let x = evt.clientX,
                y = evt.clientY;
            var _props = this.props;
            let position = _props.position;

            var _props$mouseShift = _slicedToArray(_props.mouseShift, 2);

            let sx = _props$mouseShift[0],
                sy = _props$mouseShift[1],
                gridSize = _props.gridSize;

            let mousePosition = [x + sx, y + sy];
            let hover = false;

            if (mousePosition.every((x, i) => Math.ceil(position[i] - gridSize / 2) <= x && x <= Math.floor(position[i] + gridSize / 2) - 1)) {
                hover = true;
            }

            if (hover !== this.state.hover) {
                this.setState({ hover });
            }
        };
    }

    componentDidMount() {
        document.addEventListener('mousemove', this.handleMouseMove);
    }

    componentWillUnmount() {
        document.removeEventListener('mousemove', this.handleMouseMove);
    }

    shouldComponentUpdate({ type, fill, nodeSize, gridSize }, { hover }) {
        return type !== this.props.type || fill !== this.props.fill || nodeSize !== this.props.nodeSize || gridSize !== this.props.gridSize || hover !== this.state.hover;
    }

    render({
        position: [left, top],
        type,
        fill,
        nodeSize
    }, {
        hover
    }) {
        return h('path', {
            ref: el => this.element = el,
            d: (() => {
                let nodeSize2 = nodeSize * 2;

                if (type === 'square') {
                    return `M ${left - nodeSize} ${top - nodeSize}
                        h ${nodeSize2} v ${nodeSize2} h ${-nodeSize2} v ${-nodeSize2}`;
                } else if (type === 'circle') {
                    return `M ${left} ${top} m ${-nodeSize} 0
                        a ${nodeSize} ${nodeSize} 0 1 0 ${nodeSize2} 0
                        a ${nodeSize} ${nodeSize} 0 1 0 ${-nodeSize2} 0`;
                } else if (type === 'diamond') {
                    let diamondSide = Math.round(Math.sqrt(2) * nodeSize);

                    return `M ${left} ${top - diamondSide}
                        L ${left - diamondSide} ${top} L ${left} ${top + diamondSide}
                        L ${left + diamondSide} ${top} L ${left} ${top - diamondSide}`;
                }

                return '';
            })(),

            class: classNames({ hover }),
            fill
        });
    }
}

class GameGraphEdge extends Component {
    shouldComponentUpdate({ positionAbove, positionBelow, current, length, gridSize }) {
        return length !== this.props.length || current !== this.props.current || gridSize !== this.props.gridSize || !helper.vertexEquals(positionAbove, this.props.positionAbove) || !helper.vertexEquals(positionBelow, this.props.positionBelow);
    }

    render({
        positionAbove: [left1, top1],
        positionBelow: [left2, top2],
        length,
        gridSize,
        current
    }) {
        let points;

        if (left1 === left2) {
            points = `${left1},${top1} ${left1},${top2 + length}`;
        } else {
            points = `${left1},${top1} ${left2 - gridSize},${top2 - gridSize}
                ${left2},${top2} ${left2},${top2 + length}`;
        }

        return h('polyline', {
            points,
            fill: 'none',
            stroke: current ? edgeColor : edgeInactiveColor,
            'stroke-width': current ? edgeSize : edgeInactiveSize
        });
    }
}

class GameGraph extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cameraPosition: [-props.gridSize, -props.gridSize],
            viewportSize: [props.viewportWidth, props.height],
            viewportPosition: [0, 0],
            matrixDict: null
        };

        this.mousePosition = [-100, -100];
        this.matrixDictHash = null;
        this.matrixDictCache = {};

        this.handleNodeClick = this.handleNodeClick.bind(this);
        this.handleGraphMouseDown = this.handleGraphMouseDown.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousemove', evt => {
            if (!this.svgElement) return;

            let x = evt.clientX,
                y = evt.clientY,
                movementX = evt.movementX,
                movementY = evt.movementY;

            var _state = this.state,
                _state$cameraPosition = _slicedToArray(_state.cameraPosition, 2);

            let cx = _state$cameraPosition[0],
                cy = _state$cameraPosition[1];

            var _state$viewportPositi = _slicedToArray(_state.viewportPosition, 2);

            let vx = _state$viewportPositi[0],
                vy = _state$viewportPositi[1];


            if (this.mouseDown === 0) {
                this.drag = true;
            } else {
                ;movementX = 0;
                movementY = 0;

                this.drag = false;
            }

            this.mousePosition = [x - vx, y - vy];

            if (this.drag) {
                evt.preventDefault();
                this.setState({ cameraPosition: [cx - movementX, cy - movementY] });
            }
        });

        document.addEventListener('mouseup', () => {
            this.mouseDown = null;
        });

        window.addEventListener('resize', () => {
            clearTimeout(this.remeasureId);
            this.remeasureId = setTimeout(() => this.remeasure(), 500);
        });

        this.remeasure();
        this.componentWillReceiveProps();
    }

    shouldComponentUpdate({ showGameGraph, height }) {
        return height !== this.props.height || showGameGraph && !this.dirty;
    }

    componentWillReceiveProps({ treePosition, showGameGraph } = {}) {
        // Debounce rendering

        if (treePosition === this.props.treePosition) return;

        this.dirty = true;

        if (!this.props.showGameGraph && showGameGraph) {
            if (treePosition == null) return;

            var _getMatrixDict = this.getMatrixDict(gametree.getRoot(treePosition[0])),
                _getMatrixDict2 = _slicedToArray(_getMatrixDict, 2);

            let matrix = _getMatrixDict2[0],
                dict = _getMatrixDict2[1];

            this.setState({ matrixDict: [matrix, dict] });
        }

        clearTimeout(this.renderId);
        this.renderId = setTimeout(() => this.updateCameraPosition(), delay);
    }

    componentDidUpdate({ height, showGameGraph }) {
        if (height !== this.props.height) {
            setTimeout(() => this.remeasure(), 200);
        }

        if (showGameGraph !== this.props.showGameGraph) {
            setTimeout(() => this.updateCameraPosition(), 200);
        }
    }

    getMatrixDict(tree) {
        let hash = gametree.getMatrixHash(tree);

        if (hash !== this.matrixDictHash) {
            this.matrixDictHash = hash;
            this.matrixDictCache = gametree.getMatrixDict(tree);
        }

        return this.matrixDictCache;
    }

    updateCameraPosition() {
        var _props2 = this.props;
        let gridSize = _props2.gridSize;

        var _props2$treePosition = _slicedToArray(_props2.treePosition, 2);

        let tree = _props2$treePosition[0],
            index = _props2$treePosition[1];

        let id = tree.id + '-' + index;

        var _getMatrixDict3 = this.getMatrixDict(gametree.getRoot(tree)),
            _getMatrixDict4 = _slicedToArray(_getMatrixDict3, 2);

        let matrix = _getMatrixDict4[0],
            dict = _getMatrixDict4[1];

        var _dict$id = _slicedToArray(dict[id], 2);

        let x = _dict$id[0],
            y = _dict$id[1];

        var _gametree$getMatrixWi = gametree.getMatrixWidth(y, matrix),
            _gametree$getMatrixWi2 = _slicedToArray(_gametree$getMatrixWi, 2);

        let width = _gametree$getMatrixWi2[0],
            padding = _gametree$getMatrixWi2[1];


        let relX = width === 1 ? 0 : 1 - 2 * (x - padding) / (width - 1);
        let diff = (width - 1) * gridSize / 2;
        diff = Math.min(diff, this.state.viewportSize[0] / 2 - gridSize);

        this.dirty = false;

        this.setState({
            matrixDict: [matrix, dict],
            cameraPosition: [x * gridSize + relX * diff - this.state.viewportSize[0] / 2, y * gridSize - this.state.viewportSize[1] / 2].map(z => Math.round(z))
        });
    }

    remeasure() {
        if (!this.props.showGameGraph) return;

        var _element$getBoundingC = this.element.getBoundingClientRect();

        let left = _element$getBoundingC.left,
            top = _element$getBoundingC.top,
            width = _element$getBoundingC.width,
            height = _element$getBoundingC.height;

        this.setState({ viewportSize: [width, height], viewportPosition: [left, top] });
    }

    handleGraphMouseDown(evt) {
        this.mouseDown = evt.button;
    }

    handleNodeClick(evt) {
        if (this.drag) {
            this.drag = false;
            return;
        }

        var _props3 = this.props,
            _props3$onNodeClick = _props3.onNodeClick;
        let onNodeClick = _props3$onNodeClick === undefined ? helper.noop : _props3$onNodeClick,
            gridSize = _props3.gridSize;

        var _state2 = this.state,
            _state2$matrixDict = _slicedToArray(_state2.matrixDict, 1);

        let matrix = _state2$matrixDict[0];

        var _state2$cameraPositio = _slicedToArray(_state2.cameraPosition, 2);

        let cx = _state2$cameraPositio[0],
            cy = _state2$cameraPositio[1];

        var _mousePosition = _slicedToArray(this.mousePosition, 2);

        let mx = _mousePosition[0],
            my = _mousePosition[1];

        var _map3 = [mx + cx, my + cy].map(z => Math.round(z / gridSize)),
            _map4 = _slicedToArray(_map3, 2);

        let nearestX = _map4[0],
            nearestY = _map4[1];


        if (!matrix[nearestY] || !matrix[nearestY][nearestX]) return;

        evt.treePosition = matrix[nearestY][nearestX];
        onNodeClick(evt);
    }

    renderNodes({
        gridSize,
        nodeSize
    }, {
        matrixDict: [matrix, dict],
        cameraPosition: [cx, cy],
        viewportSize: [width, height],
        viewportPosition: [vx, vy]
    }) {
        let nodeColumns = [];
        let edges = [];

        var _map5 = [cx, cy].map(z => Math.max(Math.ceil(z / gridSize) - 2, 0)),
            _map6 = _slicedToArray(_map5, 2);

        let minX = _map6[0],
            minY = _map6[1];

        var _map7 = [cx, cy].map((z, i) => (z + [width, height][i]) / gridSize + 2),
            _map8 = _slicedToArray(_map7, 2);

        let maxX = _map8[0],
            maxY = _map8[1];

        minY -= 3;
        maxY += 3;

        let doneTreeBones = [];
        let currentTracks = [];
        let notCurrentTracks = [];

        // Render only nodes that are visible

        for (let x = minX; x <= maxX; x++) {
            let column = [];

            for (let y = minY; y <= maxY; y++) {
                if (matrix[y] == null || matrix[y][x] == null) continue;

                var _matrix$y$x = _slicedToArray(matrix[y][x], 2);

                let tree = _matrix$y$x[0],
                    index = _matrix$y$x[1];

                let node = tree.nodes[index];
                let onCurrentTrack;

                if (currentTracks.includes(tree.id)) {
                    onCurrentTrack = true;
                } else if (notCurrentTracks.includes(tree.id)) {
                    onCurrentTrack = false;
                } else {
                    if (!tree.parent) {
                        onCurrentTrack = true;
                        currentTracks.push(tree.id);
                    } else if (currentTracks.includes(tree.parent.id)) {
                        if (tree.parent.subtrees[tree.parent.current] !== tree) {
                            onCurrentTrack = false;
                            notCurrentTracks.push(tree.id);
                        } else {
                            onCurrentTrack = true;
                            currentTracks.push(tree.id);
                        }
                    } else if (notCurrentTracks.includes(tree.parent.id)) {
                        onCurrentTrack = false;
                        notCurrentTracks.push(tree.id);
                    } else {
                        onCurrentTrack = gametree.onCurrentTrack(tree);

                        if (onCurrentTrack) currentTracks.push(tree.id);else notCurrentTracks.push(tree.id);
                    }
                }

                // Render node

                let fill = nodeColor;
                if (onCurrentTrack) {
                    fill = helper.vertexEquals(this.props.treePosition, [tree, index]) ? nodeActiveColor : 'HO' in node ? nodeBookmarkColor : commentProperties.some(x => x in node) ? nodeCommentColor : nodeColor;
                } else {
                    fill = 'HO' in node ? nodeInactiveBookmarkColor : commentProperties.some(x => x in node) ? nodeInactiveCommentColor : nodeInactiveColor;
                }

                let left = x * gridSize;
                let top = y * gridSize;

                column.push(h(GameGraphNode, {
                    key: y,
                    mouseShift: [cx - vx, cy - vy],
                    position: [left, top],
                    type: 'B' in node && node.B[0] === '' || 'W' in node && node.W[0] === '' ? 'square' // Pass node
                    : !('B' in node || 'W' in node) ? 'diamond' // Non-move node
                    : 'circle', // Normal node
                    fill,
                    nodeSize,
                    gridSize
                }));

                if (!doneTreeBones.includes(tree.id)) {
                    // A *tree bone* denotes a straight edge through the whole tree

                    let positionAbove, positionBelow;

                    if (index === 0 && tree.parent) {
                        // Render precedent edge with tree bone

                        var _gametree$navigate = gametree.navigate(tree, index, -1),
                            _gametree$navigate2 = _slicedToArray(_gametree$navigate, 2);

                        let prevTree = _gametree$navigate2[0],
                            prevIndex = _gametree$navigate2[1];

                        var _dict = _slicedToArray(dict[prevTree.id + '-' + prevIndex], 2);

                        let px = _dict[0],
                            py = _dict[1];


                        positionAbove = [px * gridSize, py * gridSize];
                        positionBelow = [left, top];
                    } else {
                        // Render tree bone only

                        var _dict2 = _slicedToArray(dict[tree.id + '-0'], 2);

                        let sx = _dict2[0],
                            sy = _dict2[1];


                        positionAbove = [sx * gridSize, sy * gridSize];
                        positionBelow = positionAbove;
                    }

                    if (positionAbove != null && positionBelow != null) {
                        edges[!onCurrentTrack ? 'unshift' : 'push'](h(GameGraphEdge, {
                            key: tree.id,
                            positionAbove,
                            positionBelow,
                            length: (tree.nodes.length - 1) * gridSize,
                            current: onCurrentTrack,
                            gridSize
                        }));

                        doneTreeBones.push(tree.id);
                    }
                }

                if (index === tree.nodes.length - 1) {
                    // Render successor edges with subtree bones

                    for (let subtree of tree.subtrees) {
                        let current = onCurrentTrack && tree.subtrees[tree.current] === subtree;

                        var _dict3 = _slicedToArray(dict[subtree.id + '-0'], 2);

                        let nx = _dict3[0],
                            ny = _dict3[1];


                        edges[!current ? 'unshift' : 'push'](h(GameGraphEdge, {
                            key: subtree.id,
                            positionAbove: [left, top],
                            positionBelow: [nx * gridSize, ny * gridSize],
                            length: (subtree.nodes.length - 1) * gridSize,
                            current,
                            gridSize
                        }));

                        doneTreeBones.push(subtree.id);
                    }
                }
            }

            if (column.length > 0) nodeColumns.push(h('g', { key: x }, column));
        }

        return [h('g', {}, edges), h('g', {}, nodeColumns)];
    }

    render({
        height,
        treePosition,
        showGameGraph
    }, {
        matrixDict,
        viewportSize,
        cameraPosition: [cx, cy]
    }) {
        return h('section', {
            ref: el => this.element = el,
            id: 'graph'
        }, h('style', {}, `
                #graph {
                    height: ${height}%;
                }
                #graph svg > * {
                    transform: translate(${-cx}px, ${-cy}px);
                }
            `), showGameGraph && matrixDict && viewportSize && h('svg', {
            ref: el => this.svgElement = el,
            width: viewportSize[0],
            height: viewportSize[1],

            onClick: this.handleNodeClick,
            onContextMenu: this.handleNodeClick,
            onMouseDown: this.handleGraphMouseDown,
            onMouseUp: this.handleGraphMouseUp
        }, this.renderNodes(this.props, this.state)));
    }
}

module.exports = GameGraph;

/***/ }),

/***/ "./src/components/Goban.js":
/*!*********************************!*\
  !*** ./src/components/Goban.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.min.js");

const h = _require.h,
      Component = _require.Component;

const classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

const helper = __webpack_require__(/*! ../modules/helper */ "./src/modules/helper.js");

const alpha = 'ABCDEFGHJKLMNOPQRSTUVWXYZ';
const range = n => [...Array(n)].map((_, i) => i);
const random = n => Math.floor(Math.random() * n);

class GobanVertex extends Component {
    shouldComponentUpdate({
        sign,
        hoshi,
        shift,
        highlight,
        heat,
        paint,
        dimmed,
        animate,
        label,
        markupType,
        ghostTypes
    }) {
        return sign !== this.props.sign || highlight !== this.props.highlight || ghostTypes !== this.props.ghostTypes || markupType !== this.props.markupType || label !== this.props.label || shift !== this.props.shift || animate !== this.props.animate || heat !== this.props.heat || paint !== this.props.paint || dimmed !== this.props.dimmed || hoshi !== this.props.hoshi;
    }

    render({
        position: [x, y],
        shift,
        random,
        sign,
        highlight,
        heat,
        paint,
        dimmed,
        hoshi,
        animate,
        markupType,
        label,
        ghostTypes,

        onMouseDown,
        onMouseUp,
        onMouseMove
    }) {
        let classes = {
            [`pos_${x}-${y}`]: true,
            [`shift_${shift}`]: true,
            [`random_${random}`]: true,
            [`sign_${sign}`]: true,
            [`heat_${heat}`]: !!heat,
            [`paint_${paint}`]: !!paint,
            [markupType]: !!markupType,
            dimmed,
            hoshi,
            animate,
            smalllabel: label.length >= 3
        };

        for (let type of ghostTypes) {
            classes[type] = true;
        }

        return h('li', {
            'data-vertex': `${x}-${y}`,
            class: classNames(classes),
            onMouseDown,
            onMouseUp,
            onMouseMove
        }, h('div', { class: 'heat' }), h('div', { class: 'stone' }, h('img', { src: '/static/game/img/goban/blank.svg' }), h('span', { title: label })), !!paint && h('div', { class: 'paint' }), highlight && h('div', { class: 'highlight' }));
    }
}

class GobanLine extends Component {
    shouldComponentUpdate(nextProps) {
        for (let i in nextProps) if (nextProps[i] !== this.props[i]) return true;

        return false;
    }

    render({ v1, v2, type, temporary, showCoordinates, fieldSize }) {
        if (helper.vertexEquals(v1, v2)) return;

        var _map = [v1, v2].map(v => v.map(x => (showCoordinates ? x + 1 : x) * fieldSize)),
            _map2 = _slicedToArray(_map, 2);

        let pos1 = _map2[0],
            pos2 = _map2[1];

        var _pos1$map = pos1.map((x, i) => pos2[i] - x),
            _pos1$map2 = _slicedToArray(_pos1$map, 2);

        let dx = _pos1$map2[0],
            dy = _pos1$map2[1];

        var _pos1$map3 = pos1.map((x, i) => (x + pos2[i] + fieldSize) / 2),
            _pos1$map4 = _slicedToArray(_pos1$map3, 2);

        let left = _pos1$map4[0],
            top = _pos1$map4[1];


        let angle = Math.atan2(dy, dx) * 180 / Math.PI;
        let length = Math.sqrt(dx * dx + dy * dy);

        return h('hr', {
            class: classNames({ [type]: true, temporary }),
            style: {
                width: length,
                transform: `
                    translate(${left - length / 2}px, ${top}px)
                    rotate(${angle}deg)
                `
            }
        });
    }
}

class CoordX extends Component {
    shouldComponentUpdate({ rangeX }) {
        return rangeX.length !== this.props.rangeX.length;
    }

    render({ rangeX }) {
        return h('ol', { class: 'coordx' }, rangeX.map(i => h('li', {}, alpha[i])));
    }
}

class CoordY extends Component {
    shouldComponentUpdate({ rangeY }) {
        return rangeY.length !== this.props.rangeY.length;
    }

    render({ rangeY }) {
        return h('ol', { class: 'coordy' }, rangeY.map(i => h('li', {}, rangeY.length - i)));
    }
}

class Goban extends Component {
    constructor(props) {
        super();

        this.componentWillReceiveProps(props);

        this.handleVertexMouseUp = this.handleVertexMouseUp.bind(this);
        this.handleVertexMouseDown = this.handleVertexMouseDown.bind(this);
        this.handleVertexMouseMove = this.handleVertexMouseMove.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mouseup', () => {
            this.mouseDown = false;

            if (this.state.temporaryLine) this.setState({ temporaryLine: null });
        });

        // Measure CSS

        var _window$getComputedSt = window.getComputedStyle(this.element);

        let borderLeftWidth = _window$getComputedSt.borderLeftWidth,
            borderTopWidth = _window$getComputedSt.borderTopWidth,
            borderRightWidth = _window$getComputedSt.borderRightWidth,
            borderBottomWidth = _window$getComputedSt.borderBottomWidth,
            paddingLeft = _window$getComputedSt.paddingLeft,
            paddingTop = _window$getComputedSt.paddingTop,
            paddingRight = _window$getComputedSt.paddingRight,
            paddingBottom = _window$getComputedSt.paddingBottom;


        this.setState({
            borderLeftWidth: parseFloat(borderLeftWidth),
            borderTopWidth: parseFloat(borderTopWidth),
            borderRightWidth: parseFloat(borderRightWidth),
            borderBottomWidth: parseFloat(borderBottomWidth),
            paddingLeft: parseFloat(paddingLeft),
            paddingTop: parseFloat(paddingTop),
            paddingRight: parseFloat(paddingRight),
            paddingBottom: parseFloat(paddingBottom)
        });

        // Resize board when window is resizing

        window.addEventListener('resize', () => {
            this.resize();
        });

        this.resize();
    }

    componentWillReceiveProps({ board, animatedVertex }) {
        let dim = board => [board.width, board.height];

        if (!this.props || !helper.vertexEquals(dim(board), dim(this.props.board))) {
            // Update state to accomodate new board size

            let rangeX = range(board.width);
            let rangeY = range(board.height);
            let hoshis = board.getHandicapPlacement(9);

            let shifts = rangeY.map(_ => rangeX.map(__ => random(9)));
            this.readjustShifts(shifts);

            this.setState({
                rangeX,
                rangeY,
                hoshis,
                randomizer: rangeY.map(_ => rangeX.map(__ => random(5))),
                shifts
            }, () => this.resize());
        } else if (animatedVertex && !(this.props.animatedVertex && helper.vertexEquals(animatedVertex, this.props.animatedVertex))) {
            // Update shift

            var _animatedVertex = _slicedToArray(animatedVertex, 2);

            let x = _animatedVertex[0],
                y = _animatedVertex[1];
            let shifts = this.state.shifts;


            shifts[y][x] = random(9);
            this.readjustShifts(shifts, animatedVertex);

            this.setState({ shifts, animatedVertex });
            setTimeout(() => this.setState({ animatedVertex: null }), 200);
        }
    }

    componentDidUpdate({ showCoordinates }) {
        if (showCoordinates !== this.props.showCoordinates) {
            this.resize();
        }
    }

    resize() {
        if (!this.element || !this.element.parentElement) return;

        var _props = this.props;
        let board = _props.board,
            showCoordinates = _props.showCoordinates;
        var _props$onBeforeResize = _props.onBeforeResize;
        let onBeforeResize = _props$onBeforeResize === undefined ? helper.noop : _props$onBeforeResize;

        onBeforeResize();

        var _window$getComputedSt2 = window.getComputedStyle(this.element.parentElement);

        let outerWidth = _window$getComputedSt2.width,
            outerHeight = _window$getComputedSt2.height;

        outerWidth = parseFloat(outerWidth);
        outerHeight = parseFloat(outerHeight);

        let boardWidth = board.width;
        let boardHeight = board.height;

        if (showCoordinates) {
            boardWidth += 2;
            boardHeight += 2;
        }

        let width = helper.floorEven(outerWidth - this.state.paddingLeft - this.state.paddingRight - this.state.borderLeftWidth - this.state.borderRightWidth);
        let height = helper.floorEven(outerHeight - this.state.paddingTop - this.state.paddingBottom - this.state.borderTopWidth - this.state.borderBottomWidth);

        let fieldSize = helper.floorEven(Math.min(width / boardWidth, height / boardHeight, 150));
        let minX = fieldSize * boardWidth;
        let minY = fieldSize * boardHeight;

        this.setState({
            width: minX + outerWidth - width,
            height: minY + outerHeight - height,
            marginLeft: -(minX + outerWidth - width) / 2,
            marginTop: -(minY + outerHeight - height) / 2,
            innerWidth: minX,
            innerHeight: minY,
            innerMarginLeft: -minX / 2,
            innerMarginTop: -minY / 2,
            fieldSize
        });
    }

    readjustShifts(shifts, vertex = null) {
        if (vertex == null) {
            let movedVertices = [];

            for (let y = 0; y < shifts.length; y++) {
                for (let x = 0; x < shifts[0].length; x++) {
                    movedVertices.push(...this.readjustShifts(shifts, [x, y]));
                }
            }

            return movedVertices;
        }

        var _vertex = _slicedToArray(vertex, 2);

        let x = _vertex[0],
            y = _vertex[1];

        let direction = shifts[y][x];

        let data = [
        // Left
        [[1, 5, 8], [x - 1, y], [3, 7, 6]],
        // Top
        [[2, 5, 6], [x, y - 1], [4, 7, 8]],
        // Right
        [[3, 7, 6], [x + 1, y], [1, 5, 8]],
        // Bottom
        [[4, 7, 8], [x, y + 1], [2, 5, 6]]];

        let movedVertices = [];

        for (let _ref of data) {
            var _ref2 = _slicedToArray(_ref, 3);

            let directions = _ref2[0];

            var _ref2$ = _slicedToArray(_ref2[1], 2);

            let qx = _ref2$[0];
            let qy = _ref2$[1];
            let removeShifts = _ref2[2];

            if (!directions.includes(direction)) continue;

            if (shifts[qy] && removeShifts.includes(shifts[qy][qx])) {
                shifts[qy][qx] = 0;
                movedVertices.push([qx, qy]);
            }
        }

        return movedVertices;
    }

    handleVertexMouseDown(evt) {
        let currentTarget = evt.currentTarget;


        this.mouseDown = true;
        this.startVertex = currentTarget.dataset.vertex.split('-').map(x => +x);
    }

    handleVertexMouseUp(evt) {
        if (!this.mouseDown) return;

        var _props2 = this.props,
            _props2$onVertexClick = _props2.onVertexClick;
        let onVertexClick = _props2$onVertexClick === undefined ? helper.noop : _props2$onVertexClick;
        var _props2$onLineDraw = _props2.onLineDraw;
        let onLineDraw = _props2$onLineDraw === undefined ? helper.noop : _props2$onLineDraw;
        let currentTarget = evt.currentTarget;


        this.mouseDown = false;
        evt.vertex = currentTarget.dataset.vertex.split('-').map(x => +x);
        evt.line = this.state.temporaryLine;

        if (evt.x == null) evt.x = evt.clientX;
        if (evt.y == null) evt.y = evt.clientY;

        if (evt.line) {
            onLineDraw(evt);
        } else {
            onVertexClick(evt);
        }
    }

    handleVertexMouseMove(evt) {
        var _props3 = this.props;
        let drawLineMode = _props3.drawLineMode;
        var _props3$onVertexMouse = _props3.onVertexMouseMove;
        let onVertexMouseMove = _props3$onVertexMouse === undefined ? helper.noop : _props3$onVertexMouse;
        let currentTarget = evt.currentTarget;


        onVertexMouseMove(Object.assign(evt, {
            mouseDown: this.mouseDown,
            startVertex: this.startVertex,
            vertex: currentTarget.dataset.vertex.split('-').map(x => +x)
        }));

        if (!!drawLineMode && evt.mouseDown && evt.button === 0) {
            let temporaryLine = [evt.startVertex, evt.vertex];

            if (!helper.equals(temporaryLine, this.state.temporaryLine)) {
                this.setState({ temporaryLine });
            }
        }
    }

    render({
        board,
        paintMap,
        heatMap,
        highlightVertices = [],
        dimmedStones = [],

        crosshair = false,
        showCoordinates = false,
        showMoveColorization = true,
        showNextMoves = true,
        showSiblings = true,
        fuzzyStonePlacement = true,
        animatedStonePlacement = true,

        drawLineMode = null
    }, state) {
        let fieldSize = state.fieldSize,
            rangeY = state.rangeY,
            rangeX = state.rangeX,
            temporaryLine = state.temporaryLine,
            animatedVertex = state.animatedVertex;

        let animatedVertices = animatedVertex ? [animatedVertex, ...board.getNeighbors(animatedVertex)] : [];
        let drawTemporaryLine = !!drawLineMode && !!temporaryLine;

        return h('section', {
            ref: el => this.element = el,
            id: 'goban',
            class: classNames({
                goban: true,
                crosshair,
                coordinates: showCoordinates,
                movecolorization: showMoveColorization,
                variations: showNextMoves,
                siblings: showSiblings,
                fuzzy: fuzzyStonePlacement,
                animation: animatedStonePlacement
            })
        }, h('style', {}, `
                #goban {
                    font-size: ${fieldSize}px;
                    width: ${state.width}px;
                    height: ${state.height}px;
                    margin-left: ${state.marginLeft}px;
                    margin-top: ${state.marginTop}px;
                }
                #goban > div {
                    width: ${state.innerWidth}px;
                    height: ${state.innerHeight}px;
                    margin-left: ${state.innerMarginLeft}px;
                    margin-top: ${state.innerMarginTop}px;
                }
                #goban > div > ol > li {
                    width: ${fieldSize}px;
                    height: ${fieldSize}px;
                }
                #goban > div > ol:not(.coordy) {
                    height: ${fieldSize}px;
                    line-height: ${fieldSize}px;
                    margin-left: ${showCoordinates ? fieldSize : 0}px;
                }
                #goban > div > ol.coordy {
                    width: ${fieldSize}px;
                    top: ${fieldSize}px;
                    line-height: ${fieldSize}px;
                }
                #goban > div > ol.coordy:last-child {
                    left: ${fieldSize * (board.width + 1)}px;
                }
            `), h('div', {}, h(CoordY, { rangeY }), h(CoordX, { rangeX }), rangeY.map(y => h('ol', { class: 'row' }, rangeX.map(x => {
            let sign = board.get([x, y]);

            var _ref3 = board.markups[[x, y]] || [null, ''],
                _ref4 = _slicedToArray(_ref3, 2);

            let markupType = _ref4[0],
                label = _ref4[1];

            let equalsVertex = v => helper.vertexEquals(v, [x, y]);

            return h(GobanVertex, {
                position: [x, y],
                shift: this.state.shifts[y][x],
                random: this.state.randomizer[y][x],
                sign,
                heat: heatMap && heatMap[y] && heatMap[y][x],
                paint: paintMap && paintMap[y] && paintMap[y][x],
                dimmed: dimmedStones.some(equalsVertex),
                highlight: highlightVertices.some(equalsVertex),
                hoshi: this.state.hoshis.some(equalsVertex),
                animate: animatedVertices.some(equalsVertex),
                smalllabel: label.length >= 3,
                markupType,
                label,
                ghostTypes: board.ghosts[[x, y]] || [],

                onMouseUp: this.handleVertexMouseUp,
                onMouseDown: this.handleVertexMouseDown,
                onMouseMove: this.handleVertexMouseMove
            });
        }))), h(CoordX, { rangeX }), h(CoordY, { rangeY })),

        // Draw lines & arrows

        board.lines.map(([v1, v2, arrow]) => {
            if (drawTemporaryLine) {
                if (helper.equals([v1, v2], temporaryLine) || (!arrow || drawLineMode === 'line') && helper.equals([v2, v1], temporaryLine)) {
                    drawTemporaryLine = false;
                    return;
                }
            }

            return h(GobanLine, {
                v1, v2, showCoordinates, fieldSize,
                type: arrow ? 'arrow' : 'line'
            });
        }), drawTemporaryLine && h(GobanLine, {
            temporary: true,
            v1: temporaryLine[0], v2: temporaryLine[1],
            showCoordinates, fieldSize,
            type: drawLineMode
        }));
    }
}

module.exports = Goban;

/***/ }),

/***/ "./src/components/InfoOverlay.js":
/*!***************************************!*\
  !*** ./src/components/InfoOverlay.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.min.js");

const h = _require.h,
      Component = _require.Component;

const classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

class InfoOverlay extends Component {
    shouldComponentUpdate({ text, show }) {
        return text !== this.props.text || show !== this.props.show;
    }

    render({ text, show }) {
        return h('section', {
            id: 'info-overlay',
            class: classNames({ show })
        }, text);
    }
}

module.exports = InfoOverlay;

/***/ }),

/***/ "./src/components/InputBox.js":
/*!************************************!*\
  !*** ./src/components/InputBox.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.min.js");

const h = _require.h,
      Component = _require.Component;

const classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

const helper = __webpack_require__(/*! ../modules/helper */ "./src/modules/helper.js");

class InputBox extends Component {
    constructor() {
        super();

        this.state = { value: '' };

        this.handleInput = evt => this.setState({ value: evt.currentTarget.value });
        this.stopPropagation = evt => evt.stopPropagation();

        this.handleKeyUp = evt => {
            if (!this.props.show) return;

            if (evt.keyCode === 27) {
                // Escape

                evt.stopPropagation();
                this.cancel();
            } else if (evt.keyCode == 13) {
                // Enter

                evt.stopPropagation();
                sabaki.setState({ showInputBox: false });

                var _props$onSubmit = this.props.onSubmit;
                let onSubmit = _props$onSubmit === undefined ? helper.noop : _props$onSubmit;

                onSubmit(this.state);
            }
        };

        this.cancel = this.cancel.bind(this);
    }

    shouldComponentUpdate({ show, text, onSubmit, onCancel }) {
        return show !== this.props.show || text !== this.props.text || onSubmit !== this.props.onSubmit || onCancel !== this.props.onCancel;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.show && !this.props.show) {
            this.setState({ value: '' });
        }
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.show && this.props.show) {
            this.inputElement.focus();
        }
    }

    cancel() {
        if (!this.props.show) return;

        if (document.activeElement === this.inputElement) this.inputElement.blur();

        var _props$onCancel = this.props.onCancel;
        let onCancel = _props$onCancel === undefined ? helper.noop : _props$onCancel;

        sabaki.setState({ showInputBox: false });
        onCancel();
    }

    render({ show, text }, { value }) {
        return h('section', {
            id: 'input-box',
            class: classNames({ show }),

            onClick: this.cancel
        }, h('div', { class: 'inner', onClick: this.stopPropagation }, h('input', {
            ref: el => this.inputElement = el,
            type: 'text',
            name: 'input',
            value,
            placeholder: text,

            onInput: this.handleInput,
            onKeyUp: this.handleKeyUp,
            onBlur: this.cancel
        })));
    }
}

module.exports = InputBox;

/***/ }),

/***/ "./src/components/MainView.js":
/*!************************************!*\
  !*** ./src/components/MainView.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.min.js");

const h = _require.h,
      Component = _require.Component;


const Goban = __webpack_require__(/*! ./Goban */ "./src/components/Goban.js");
const PlayBar = __webpack_require__(/*! ./bars/PlayBar */ "./src/components/bars/PlayBar.js");
const EditBar = __webpack_require__(/*! ./bars/EditBar */ "./src/components/bars/EditBar.js");
const GuessBar = __webpack_require__(/*! ./bars/GuessBar */ "./src/modules/shims/noop.js");
const AutoplayBar = __webpack_require__(/*! ./bars/AutoplayBar */ "./src/modules/shims/noop.js");
const ScoringBar = __webpack_require__(/*! ./bars/ScoringBar */ "./src/components/bars/ScoringBar.js");
const FindBar = __webpack_require__(/*! ./bars/FindBar */ "./src/components/bars/FindBar.js");

const gametree = __webpack_require__(/*! ../modules/gametree */ "./src/modules/gametree.js");

class MainView extends Component {
    constructor() {
        super();

        this.handleTogglePlayer = () => sabaki.setPlayer(...this.props.treePosition, -this.props.currentPlayer);

        this.handleToolButtonClick = evt => {
            sabaki.setState({ selectedTool: evt.tool });
        };

        this.handleFindButtonClick = evt => sabaki.findMove(evt.step, {
            vertex: this.props.findVertex,
            text: this.props.findText
        });

        this.handleGobanResize = this.handleGobanResize.bind(this);
        this.handleGobanVertexClick = this.handleGobanVertexClick.bind(this);
        this.handleGobanLineDraw = this.handleGobanLineDraw.bind(this);
    }

    componentDidMount() {
        // Pressing Ctrl should show crosshair cursor on Goban in edit mode

        document.addEventListener('keydown', evt => {
            if (evt.keyCode !== 17) return;

            if (this.props.mode === 'edit') {
                this.setState({ gobanCrosshair: true });
            }
        });

        document.addEventListener('keyup', evt => {
            if (evt.keyCode !== 17) return;

            if (this.props.mode === 'edit') {
                this.setState({ gobanCrosshair: false });
            }
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.mode !== 'edit') {
            this.setState({ gobanCrosshair: false });
        }
    }

    handleGobanResize() {
        /*  Because of board rendering issues, we want the width
            and the height of `<main>` to be even */

        if (this.mainElement == null) return;

        this.mainElement.style.width = '';
        this.mainElement.style.height = '';

        var _window$getComputedSt = window.getComputedStyle(this.mainElement);

        let width = _window$getComputedSt.width,
            height = _window$getComputedSt.height;


        width = parseFloat(width);
        height = parseFloat(height);

        if (width % 2 !== 0) width++;
        if (height % 2 !== 0) height++;

        this.setState({ width, height });
    }

    handleGobanVertexClick(evt) {
        sabaki.clickVertex(evt.vertex, evt);
    }

    handleGobanLineDraw(evt) {
        var _evt$line = _slicedToArray(evt.line, 2);

        let v1 = _evt$line[0],
            v2 = _evt$line[1];

        sabaki.useTool(this.props.selectedTool, v1, v2);
        sabaki.editVertexData = null;
    }

    render({
        mode,
        treePosition,
        rootTree,
        currentPlayer,
        gameInfo,
        attachedEngines,

        deadStones,
        scoringMethod,
        scoreBoard,
        heatMap,
        areaMap,
        blockedGuesses,

        highlightVertices,
        showCoordinates,
        showMoveColorization,
        showNextMoves,
        showSiblings,
        fuzzyStonePlacement,
        animatedStonePlacement,
        animatedVertex,

        undoable,
        undoText,
        selectedTool,
        findText,
        findVertex,

        showLeftSidebar,
        showSidebar,
        sidebarWidth,
        leftSidebarWidth
    }, {
        width,
        height,
        gobanCrosshair
    }) {
        var _treePosition = _slicedToArray(treePosition, 2);

        let tree = _treePosition[0],
            index = _treePosition[1];

        let board = gametree.getBoard(tree, index);
        let node = tree.nodes[index];
        let komi = +gametree.getRootProperty(rootTree, 'KM', 0);
        let paintMap;

        if (['scoring', 'estimator'].includes(mode)) {
            paintMap = areaMap;
        } else if (mode === 'guess') {
            paintMap = [...Array(board.height)].map(_ => Array(board.width).fill(0));

            for (let _ref of blockedGuesses) {
                var _ref2 = _slicedToArray(_ref, 2);

                let x = _ref2[0];
                let y = _ref2[1];

                paintMap[y][x] = 1;
            }
        }

        return h('section', {
            id: 'main',
            style: {
                left: showLeftSidebar ? leftSidebarWidth : null,
                right: showSidebar ? sidebarWidth : null
            }
        }, h('main', {
            ref: el => this.mainElement = el,
            style: { width, height }
        }, h(Goban, {
            board,
            highlightVertices: findVertex && mode === 'find' ? [findVertex] : highlightVertices,
            heatMap,
            paintMap,
            dimmedStones: ['scoring', 'estimator'].includes(mode) ? deadStones : [],

            crosshair: gobanCrosshair,
            showCoordinates,
            showMoveColorization,
            showNextMoves: mode !== 'guess' && showNextMoves,
            showSiblings: mode !== 'guess' && showSiblings,
            fuzzyStonePlacement,
            animatedStonePlacement,
            animatedVertex,

            drawLineMode: mode === 'edit' && ['arrow', 'line'].includes(selectedTool) ? selectedTool : null,

            onBeforeResize: this.handleGobanResize,
            onVertexClick: this.handleGobanVertexClick,
            onLineDraw: this.handleGobanLineDraw
        })), h('section', { id: 'bar' }, h(PlayBar, {
            mode,
            attachedEngines,
            playerNames: gameInfo.playerNames,
            playerRanks: gameInfo.playerRanks,
            playerCaptures: board.captures,
            currentPlayer,
            showHotspot: 'HO' in node,
            undoable,
            undoText,
            onCurrentPlayerClick: this.handleTogglePlayer
        }), h(EditBar, {
            mode,
            selectedTool,
            onToolButtonClick: this.handleToolButtonClick
        }), h(GuessBar, {
            mode,
            treePosition
        }), h(AutoplayBar, {
            mode,
            treePosition
        }), h(ScoringBar, {
            type: 'scoring',
            mode,
            method: scoringMethod,
            scoreBoard,
            areaMap,
            komi
        }, 'Please select dead stones.'), h(ScoringBar, {
            type: 'estimator',
            mode,
            method: scoringMethod,
            scoreBoard,
            areaMap,
            komi
        }, 'Toggle group status.'), h(FindBar, {
            mode,
            findText,
            onButtonClick: this.handleFindButtonClick
        })));
    }
}

module.exports = MainView;

/***/ }),

/***/ "./src/components/MarkdownContentDisplay.js":
/*!**************************************************!*\
  !*** ./src/components/MarkdownContentDisplay.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.min.js");

const h = _require.h,
      Component = _require.Component;

const breaks = __webpack_require__(/*! remark-breaks */ "./node_modules/remark-breaks/index.js");
const helper = __webpack_require__(/*! ../modules/helper */ "./src/modules/helper.js");

const ReactMarkdown = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
const ContentDisplay = __webpack_require__(/*! ./ContentDisplay */ "./src/components/ContentDisplay.js");

function typographer(children) {
    if (!Array.isArray(children)) {
        return typographer([children])[0];
    }

    return children.map(child => {
        if (typeof child !== 'string') return child;
        return helper.typographer(child);
    });
}

function htmlify(children) {
    return children.map(child => {
        if (typeof child !== 'string') return child;

        return h(ContentDisplay, {
            tag: 'span',
            content: typographer(child)
        });
    });
}

const generateBasicComponent = tag => ({ children }) => h(tag, {}, htmlify(children));

const Emphasis = generateBasicComponent('em');
const Strong = generateBasicComponent('strong');
const Delete = generateBasicComponent('del');
const ListItem = generateBasicComponent('li');

function Paragraph({ children }) {
    return h('p', {}, htmlify(children));
}

function Link({ href, title, children }) {
    if (href.match(/^((ht|f)tps?:\/\/|mailto:)/) == null) return h('span', {}, typographer(children));

    return h(ContentDisplay, {}, h('a', { class: 'external', href, title }, typographer(children)));
}

function Image({ src, alt }) {
    return h(Link, { href: src }, typographer(alt));
}

function Heading({ level, children }) {
    return h(`h${level}`, {}, typographer(children));
}

function Html({ isBlock, value }) {
    return h(isBlock ? Paragraph : 'span', {}, value);
}

class MarkdownContentDisplay extends Component {
    render({ source }) {
        return h(ReactMarkdown, {
            source,
            plugins: [breaks],
            renderers: {
                paragraph: Paragraph,
                emphasis: Emphasis,
                strong: Strong,
                delete: Delete,
                link: Link,
                image: Image,
                linkReference: Link,
                imageReference: Image,
                table: null,
                listItem: ListItem,
                heading: Heading,
                code: Paragraph,
                html: Html
            }
        });
    }
}

module.exports = MarkdownContentDisplay;

/***/ }),

/***/ "./src/components/MiniGoban.js":
/*!*************************************!*\
  !*** ./src/components/MiniGoban.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.min.js");

const h = _require.h,
      Component = _require.Component;


const range = n => [...Array(n)].map((_, i) => i);

class MiniGoban extends Component {
    shouldComponentUpdate({ board, maxSize, visible }) {
        return visible !== this.props.visible || maxSize !== this.props.maxSize || board.getPositionHash() !== this.props.board.getPositionHash();
    }

    render({ board, maxSize, visible = true }) {
        let fieldSize = (maxSize - 1) / Math.max(board.width, board.height);
        let radius = fieldSize / 2;
        let rangeX = range(board.width);
        let rangeY = range(board.height);

        return h('svg', {
            width: fieldSize * board.width + 1,
            height: fieldSize * board.height + 1,
            style: { visibility: visible ? 'visible' : 'hidden' }
        },

        // Draw hoshi points

        board.getHandicapPlacement(9).map(([x, y]) => h('circle', {
            cx: x * fieldSize + radius + 1,
            cy: y * fieldSize + radius + 1,
            r: 2,
            fill: '#5E2E0C'
        })),

        // Draw shadows

        rangeX.map(x => rangeY.map(y => board.get([x, y]) !== 0 && h('circle', {
            cx: x * fieldSize + radius + 1,
            cy: y * fieldSize + radius + 2,
            r: radius,
            fill: 'rgba(0, 0, 0, .5)'
        }))),

        // Draw stones

        rangeX.map(x => rangeY.map(y => board.get([x, y]) !== 0 && h('circle', {
            cx: x * fieldSize + radius + 1,
            cy: y * fieldSize + radius + 1,
            r: radius,
            fill: board.get([x, y]) < 0 ? 'white' : 'black'
        }))));
    }
}

module.exports = MiniGoban;

/***/ }),

/***/ "./src/components/Sidebar.js":
/*!***********************************!*\
  !*** ./src/components/Sidebar.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _require = __webpack_require__(/*! electron */ "./src/modules/shims/electron.js");

const remote = _require.remote;

var _require2 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.min.js");

const h = _require2.h,
      Component = _require2.Component;


const gametree = __webpack_require__(/*! ../modules/gametree */ "./src/modules/gametree.js");
const helper = __webpack_require__(/*! ../modules/helper */ "./src/modules/helper.js");
const setting = remote.require('./setting');

const Slider = __webpack_require__(/*! ./Slider */ "./src/components/Slider.js");
const GameGraph = __webpack_require__(/*! ./GameGraph */ "./src/components/GameGraph.js");
const CommentBox = __webpack_require__(/*! ./CommentBox */ "./src/components/CommentBox.js");

let sidebarMinWidth = setting.get('view.sidebar_minwidth');
let sidebarMinSplit = setting.get('view.properties_minheight');

class Sidebar extends Component {
    constructor(props) {
        super();

        this.state = {
            sidebarSplit: setting.get('view.properties_height'),
            sidebarSplitTransition: true
        };

        this.handleGraphNodeClick = ({ button, treePosition, x, y }) => {
            if (button === 0) {
                sabaki.setCurrentTreePosition(...treePosition);
            } else {
                sabaki.openNodeMenu(...treePosition, { x, y });
            }
        };

        this.handleVerticalResizerMouseDown = ({ button, x, y }) => {
            if (button !== 0) return;

            this.oldSidebarWidth = this.props.sidebarWidth;
            this.oldMousePosition = [x, y];
            this.verticalResizerMouseDown = true;
        };

        this.handleHorizontalResizerMouseDown = ({ button }) => {
            if (button !== 0) return;
            this.horizontalResizerMouseDown = true;
        };

        this.handleSliderChange = ({ percent }) => {
            let moveNumber = Math.round((this.state.treeHeight - 1) * percent);
            sabaki.goToMoveNumber(moveNumber);
        };

        this.handleStartAutoscrolling = ({ step }) => {
            let minDelay = setting.get('autoscroll.min_interval');
            let diff = setting.get('autoscroll.diff');

            let scroll = (delay = null) => {
                sabaki.goStep(step);

                clearTimeout(this.autoscrollId);
                this.autoscrollId = setTimeout(() => scroll(Math.max(minDelay, delay - diff)), delay);
            };

            scroll(setting.get('autoscroll.max_interval'));
        };

        this.handleStopAutoscrolling = () => {
            clearTimeout(this.autoscrollId);
        };

        this.handleCommentInput = evt => {
            sabaki.setComment(...this.props.treePosition, evt);
        };

        this.componentWillReceiveProps(props);
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.showSidebar != this.props.showSidebar || nextProps.showSidebar;
    }

    componentWillReceiveProps({ treePosition, rootTree } = {}) {
        // Update tree height

        if (this.props && treePosition === this.props.treePosition) return;
        this.setState({ treeHeight: gametree.getHeight(rootTree) });
    }

    componentDidMount() {
        document.addEventListener('mouseup', () => {
            if (this.verticalResizerMouseDown || this.horizontalResizerMouseDown) {
                this.verticalResizerMouseDown = false;
                this.horizontalResizerMouseDown = false;

                setting.set('view.properties_height', this.state.sidebarSplit);
                setting.set('view.sidebar_width', this.props.sidebarWidth);
                this.setState({ sidebarSplitTransition: false });
                window.dispatchEvent(new Event('resize'));
            }
        });

        document.addEventListener('mousemove', evt => {
            if (this.verticalResizerMouseDown) {
                evt.preventDefault();

                let sidebarWidth = this.props.sidebarWidth;

                let diff = [evt.clientX, evt.clientY].map((x, i) => x - this.oldMousePosition[i]);

                sidebarWidth = Math.max(sidebarMinWidth, this.oldSidebarWidth - diff[0]);
                sabaki.setSidebarWidth(sidebarWidth);
            } else if (this.horizontalResizerMouseDown) {
                evt.preventDefault();

                let sidebarSplit = Math.min(100 - sidebarMinSplit, Math.max(sidebarMinSplit, 100 - evt.clientY * 100 / this.element.offsetHeight));

                this.setState({ sidebarSplit, sidebarSplitTransition: false });
            }
        });
    }

    render({
        mode,
        treePosition,
        rootTree,
        showGameGraph,
        showCommentBox,
        sidebarWidth,

        graphGridSize,
        graphNodeSize
    }, {
        treeHeight,
        sidebarSplit,
        sidebarSplitTransition
    }) {
        var _treePosition = _slicedToArray(treePosition, 2);

        let tree = _treePosition[0],
            index = _treePosition[1];

        let node = tree.nodes[index];
        let level = gametree.getLevel(tree, index);

        return h('section', {
            ref: el => this.element = el,
            id: 'sidebar',
            style: { width: sidebarWidth }
        }, h('div', {
            class: 'verticalresizer',
            onMouseDown: this.handleVerticalResizerMouseDown
        }), h(Slider, {
            showSlider: showGameGraph,
            text: level,
            percent: level / (treeHeight - 1) * 100,
            height: !showGameGraph ? 0 : !showCommentBox ? 100 : 100 - sidebarSplit,

            onChange: this.handleSliderChange,
            onStartAutoscrolling: this.handleStartAutoscrolling,
            onStopAutoscrolling: this.handleStopAutoscrolling
        }), h(GameGraph, {
            treePosition,
            showGameGraph,
            viewportWidth: sidebarWidth,
            height: !showGameGraph ? 0 : !showCommentBox ? 100 : 100 - sidebarSplit,
            gridSize: graphGridSize,
            nodeSize: graphNodeSize,

            onNodeClick: this.handleGraphNodeClick
        }), h(CommentBox, {
            mode,
            treePosition,
            showCommentBox,
            moveAnnotation: 'BM' in node ? [-1, node.BM[0]] : 'DO' in node ? [0, 1] : 'IT' in node ? [1, 1] : 'TE' in node ? [2, node.TE[0]] : [null, 1],
            positionAnnotation: 'UC' in node ? [-2, node.UC[0]] : 'GW' in node ? [-1, node.GW[0]] : 'DM' in node ? [0, node.DM[0]] : 'GB' in node ? [1, node.GB[0]] : [null, 1],
            title: 'N' in node ? node.N[0].trim() : '',
            comment: 'C' in node ? node.C[0] : '',
            height: !showCommentBox ? 0 : !showGameGraph ? 100 : sidebarSplit,
            sidebarSplitTransition,

            onResizerMouseDown: this.handleHorizontalResizerMouseDown,
            onCommentInput: this.handleCommentInput
        }));
    }
}

module.exports = Sidebar;

/***/ }),

/***/ "./src/components/Slider.js":
/*!**********************************!*\
  !*** ./src/components/Slider.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! electron */ "./src/modules/shims/electron.js");

const remote = _require.remote;

var _require2 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.min.js");

const h = _require2.h,
      Component = _require2.Component;


const helper = __webpack_require__(/*! ../modules/helper */ "./src/modules/helper.js");
const setting = remote.require('./setting');

class Slider extends Component {
    constructor() {
        super();

        this.handleSliderAreaMouseDown = evt => {
            if (evt.button !== 0) return;

            this.sliderAreaMouseDown = true;
            document.dispatchEvent(new MouseEvent('mousemove', evt));
        };

        this.handleButtonMouseDown = evt => {
            if (evt.button !== 0) return;

            let type = evt.currentTarget.className;
            var _props$onStartAutoscr = this.props.onStartAutoscrolling;
            let onStartAutoscrolling = _props$onStartAutoscr === undefined ? helper.noop : _props$onStartAutoscr;


            this.buttonMouseDown = type;
            onStartAutoscrolling({ step: type === 'prev' ? -1 : 1 });
        };
    }

    componentDidMount() {
        document.addEventListener('mouseup', () => {
            this.sliderAreaMouseDown = false;

            if (this.buttonMouseDown != null) {
                let type = this.buttonMouseDown;
                var _props$onStopAutoscro = this.props.onStopAutoscrolling;
                let onStopAutoscrolling = _props$onStopAutoscro === undefined ? helper.noop : _props$onStopAutoscro;


                this.buttonMouseDown = null;
                onStopAutoscrolling({ step: type === 'prev' ? -1 : 1 });
            }
        });

        document.addEventListener('mousemove', evt => {
            if (!this.sliderAreaMouseDown) return;

            var _props$onChange = this.props.onChange;
            let onChange = _props$onChange === undefined ? helper.noop : _props$onChange;
            var _slidingAreaElement = this.slidingAreaElement;
            let offsetTop = _slidingAreaElement.offsetTop,
                offsetHeight = _slidingAreaElement.offsetHeight;

            let percent = Math.min(1, Math.max(0, (evt.clientY - offsetTop) / offsetHeight));

            onChange({ percent });
        });
    }

    shouldComponentUpdate({ showSlider, height }) {
        return showSlider && (height !== this.props.height || this.sliderAreaMouseDown || this.buttonMouseDown || !this.dirty);
    }

    componentWillReceiveProps() {
        // Debounce rendering

        this.dirty = true;

        clearTimeout(this.renderId);
        this.renderId = setTimeout(() => {
            this.dirty = false;
            this.setState(this.state);
        }, setting.get('graph.delay'));
    }

    render({ height, text, percent }) {
        return h('section', { id: 'slider', style: { height: height + '%' } }, h('a', {
            href: '#',
            class: 'prev',
            onMouseDown: this.handleButtonMouseDown
        }, '▲'), h('a', {
            href: '#',
            class: 'next',
            onMouseDown: this.handleButtonMouseDown
        }, '▼'), h('div', {
            ref: el => this.slidingAreaElement = el,
            class: 'inner',
            onMouseDown: this.handleSliderAreaMouseDown
        }, h('span', { style: { top: percent + '%' } }, text)));
    }
}

module.exports = Slider;

/***/ }),

/***/ "./src/components/bars/Bar.js":
/*!************************************!*\
  !*** ./src/components/bars/Bar.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.min.js");

const h = _require.h,
      Component = _require.Component;

const classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

class Bar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hidecontent: props.type !== props.mode
        };

        this.componentWillReceiveProps(props);
        this.onCloseButtonClick = () => sabaki.setMode('play');
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.type === nextProps.mode) {
            clearTimeout(this.hidecontentId);

            if (this.state.hidecontent) this.setState({ hidecontent: false });
        } else {
            if (!this.state.hidecontent) this.hidecontentId = setTimeout(() => this.setState({ hidecontent: true }), 500);
        }
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.mode !== this.props.mode || nextProps.mode === nextProps.type;
    }

    render({ children, type, mode, class: c = '' }, { hidecontent }) {
        return h('section', {
            id: type,
            class: classNames(c, {
                bar: true,
                current: type === mode,
                hidecontent
            })
        }, children, h('a', { class: 'close', href: '#', onClick: this.onCloseButtonClick }));
    }
}

module.exports = Bar;

/***/ }),

/***/ "./src/components/bars/EditBar.js":
/*!****************************************!*\
  !*** ./src/components/bars/EditBar.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.min.js");

const h = _require.h,
      Component = _require.Component;

const classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

const Bar = __webpack_require__(/*! ./Bar */ "./src/components/bars/Bar.js");
const helper = __webpack_require__(/*! ../../modules/helper */ "./src/modules/helper.js");

class EditBar extends Component {
    constructor() {
        super();

        this.state = {
            stoneTool: 1
        };

        this.handleToolButtonClick = this.handleToolButtonClick.bind(this);
    }

    componentWillReceiveProps({ selectedTool }) {
        if (selectedTool === this.props.selectedTool) return;

        if (selectedTool.indexOf('stone') === 0) {
            this.setState({ stoneTool: +selectedTool.replace('stone_', '') });
        }
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.mode !== this.props.mode || nextProps.mode === 'edit';
    }

    handleToolButtonClick(evt) {
        var _props = this.props;
        let selectedTool = _props.selectedTool;
        var _props$onToolButtonCl = _props.onToolButtonClick;
        let onToolButtonClick = _props$onToolButtonCl === undefined ? helper.noop : _props$onToolButtonCl;


        evt.tool = evt.currentTarget.dataset.id;

        if (evt.tool.indexOf('stone') === 0 && selectedTool.indexOf('stone') === 0) {
            evt.tool = `stone_${-this.state.stoneTool}`;
            this.setState(({ stoneTool }) => ({ stoneTool: -stoneTool }));
        }

        onToolButtonClick(evt);
    }

    renderButton(title, toolId, selected = false) {
        return h('li', { class: classNames({ selected }) }, h('a', {
            title,
            href: '#',
            'data-id': toolId,
            onClick: this.handleToolButtonClick
        }, h('img', { src: `/static/game/img/edit/${toolId}.svg` })));
    }

    render({ selectedTool }, { stoneTool }) {
        let isSelected = ([, id]) => id.replace(/_-?1$/, '') === selectedTool.replace(/_-?1$/, '');

        return h(Bar, Object.assign({ type: 'edit' }, this.props), h('ul', {}, [['Stone Tool', `stone_${stoneTool}`], ['Cross Tool', 'cross'], ['Triangle Tool', 'triangle'], ['Square Tool', 'square'], ['Circle Tool', 'circle'], ['Line Tool', 'line'], ['Arrow Tool', 'arrow'], ['Label Tool', 'label'], ['Number Tool', 'number']].map(x => this.renderButton(...x, isSelected(x)))));
    }
}

module.exports = EditBar;

/***/ }),

/***/ "./src/components/bars/FindBar.js":
/*!****************************************!*\
  !*** ./src/components/bars/FindBar.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.min.js");

const h = _require.h,
      Component = _require.Component;

const Bar = __webpack_require__(/*! ./Bar */ "./src/components/bars/Bar.js");
const helper = __webpack_require__(/*! ../../modules/helper */ "./src/modules/helper.js");

class FindBar extends Component {
    constructor() {
        super();

        this.handleChange = evt => {
            sabaki.setState({ findText: evt.currentTarget.value });
        };

        this.handleButtonClick = evt => {
            evt.preventDefault();

            let step = evt.currentTarget.classList.contains('next') ? 1 : -1;
            var _props$onButtonClick = this.props.onButtonClick;
            let onButtonClick = _props$onButtonClick === undefined ? helper.noop : _props$onButtonClick;


            evt.step = step;
            onButtonClick(evt);
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.mode !== this.props.mode) {
            if (this.props.mode === 'find') {
                this.inputElement.focus();
            } else {
                this.inputElement.blur();
            }
        }
    }

    render({ findText }) {
        return h(Bar, Object.assign({ type: 'find' }, this.props), h('form', {}, h('input', {
            ref: el => this.inputElement = el,
            type: 'text',
            placeholder: 'Find',
            value: findText,
            onInput: this.handleChange
        }), h('button', { class: 'next', onClick: this.handleButtonClick }, h('img', { src: '/static/node_modules/octicons/build/svg/chevron-down.svg', height: 20, alt: 'Next' })), h('button', { class: 'prev', onClick: this.handleButtonClick }, h('img', { src: '/static/node_modules/octicons/build/svg/chevron-up.svg', height: 20, alt: 'Previous' }))));
    }
}

module.exports = FindBar;

/***/ }),

/***/ "./src/components/bars/PlayBar.js":
/*!****************************************!*\
  !*** ./src/components/bars/PlayBar.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! electron */ "./src/modules/shims/electron.js");

const shell = _require.shell,
      clipboard = _require.clipboard,
      remote = _require.remote;

const Menu = __webpack_require__(/*! electron */ "./src/modules/shims/electron.js").remote.Menu;

var _require2 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.min.js");

const h = _require2.h,
      Component = _require2.Component;

const classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

const helper = __webpack_require__(/*! ../../modules/helper */ "./src/modules/helper.js");
const setting = remote.require('./setting');

let toggleSetting = key => setting.set(key, !setting.get(key));

class PlayBar extends Component {
    constructor() {
        super();

        this.handleCurrentPlayerClick = () => this.props.onCurrentPlayerClick;
        this.handleUndoButtonClick = () => sabaki.undo();

        this.handleMenuClick = () => {
            let template = [{
                label: `About ${sabaki.appName}…`,
                click: () => shell.openExternal('http://sabaki.yichuanshen.de')
            }, { type: 'separator' }, {
                label: 'New File',
                click: () => sabaki.newFile({ playSound: true, showInfo: true })
            }, {
                label: 'Open File…',
                click: () => sabaki.loadFile()
            }, {
                label: 'Download SGF',
                click: () => sabaki.saveFile(sabaki.state.representedFilename)
            }, {
                label: 'Load SGF from Clipboard',
                click: () => {
                    let content = clipboard.readText();
                    if (content == null) return;
                    sabaki.loadContent(content, 'sgf', { ignoreEncoding: true });
                }
            }, {
                label: 'Copy SGF to Clipboard',
                click: () => clipboard.writeText(sabaki.getSGF())
            }, { type: 'separator' }, {
                label: 'Show &Coordinates',
                checked: setting.get('view.show_coordinates'),
                click: () => toggleSetting('view.show_coordinates')
            }, {
                label: 'Show Move Colori&zation',
                checked: setting.get('view.show_move_colorization'),
                click: () => toggleSetting('view.show_move_colorization')
            }, {
                label: 'Show &Next Moves',
                checked: setting.get('view.show_next_moves'),
                click: () => toggleSetting('view.show_next_moves')
            }, {
                label: 'Show &Sibling Variations',
                checked: setting.get('view.show_siblings'),
                click: () => toggleSetting('view.show_siblings')
            }, {
                label: '&Manage Games…',
                click: () => sabaki.openDrawer('gamechooser')
            }, { type: 'separator' }, {
                label: '&Pass',
                click: () => sabaki.makeMove([-1, -1], { sendToEngine: true })
            }, {
                label: '&Resign',
                click: () => sabaki.makeResign()
            }, { type: 'separator' }, {
                label: 'Es&timate',
                click: () => sabaki.setMode('estimator')
            }, {
                label: '&Score',
                click: () => sabaki.setMode('scoring')
            }, {
                label: '&Edit',
                click: () => sabaki.setMode('edit')
            }, {
                label: '&Find',
                click: () => sabaki.setMode('find')
            }, { type: 'separator' }, {
                label: '&Info',
                click: () => sabaki.openDrawer('info')
            }];

            var _menuButtonElement$ge = this.menuButtonElement.getBoundingClientRect();

            let left = _menuButtonElement$ge.left,
                top = _menuButtonElement$ge.top;

            helper.popupMenu(template, left, top);
        };
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.mode !== this.props.mode || nextProps.mode === 'play';
    }

    render({
        mode,
        attachedEngines,
        playerNames,
        playerRanks,
        playerCaptures,
        currentPlayer,
        showHotspot,
        undoable,
        undoText,

        onCurrentPlayerClick = helper.noop
    }) {
        let captureStyle = index => ({ opacity: playerCaptures[index] === 0 ? 0 : .7 });
        let isEngine = Array(attachedEngines.length).fill(false);

        attachedEngines.forEach((engine, i) => {
            if (engine == null) return;

            playerNames[i] = engine.name;
            playerRanks[i] = null;
            isEngine[i] = true;
        });

        return h('header', {
            class: classNames({
                undoable,
                hotspot: showHotspot,
                current: mode === 'play'
            })
        }, h('span', { id: 'player_1' }, h('span', { class: 'captures', style: captureStyle(0) }, playerCaptures[0]), ' ', playerRanks[0] && h('span', { class: 'rank' }, playerRanks[0]), ' ', h('span', {
            class: classNames('name', { engine: isEngine[0] }),
            title: isEngine[0] && 'Engine'
        }, playerNames[0] || 'Black')), h('span', { id: 'player_-1' }, h('span', {
            class: classNames('name', { engine: isEngine[1] }),
            title: isEngine[1] && 'Engine'
        }, playerNames[1] || 'White'), ' ', playerRanks[1] && h('span', { class: 'rank' }, playerRanks[1]), ' ', h('span', { class: 'captures', style: captureStyle(1) }, playerCaptures[1])), h('img', {
            src: `./img/ui/player_${currentPlayer}.svg`,
            class: 'current-player',
            height: 22,
            title: 'Change Player',
            onClick: onCurrentPlayerClick
        }), h('div', { class: 'hotspot', title: 'Hotspot' }), h('a', {
            class: 'undo',
            title: undoText,
            onClick: this.handleUndoButtonClick
        }, h('img', { src: '/static/node_modules/octicons/build/svg/reply.svg', height: 21 })), h('a', {
            ref: el => this.menuButtonElement = el,
            id: 'headermenu',
            onClick: this.handleMenuClick
        }, h('img', { src: '/static/node_modules/octicons/build/svg/three-bars.svg', height: 21 })));
    }
}

module.exports = PlayBar;

/***/ }),

/***/ "./src/components/bars/ScoringBar.js":
/*!*******************************************!*\
  !*** ./src/components/bars/ScoringBar.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.min.js");

const h = _require.h,
      Component = _require.Component;

const Bar = __webpack_require__(/*! ./Bar */ "./src/components/bars/Bar.js");
const helper = __webpack_require__(/*! ../../modules/helper */ "./src/modules/helper.js");

class ScoringBar extends Component {
    constructor() {
        super();

        this.handleButtonClick = () => sabaki.openDrawer('score');
    }

    render({ type, children, method, areaMap, scoreBoard, komi }) {
        let score = scoreBoard ? scoreBoard.getScore(areaMap) : { area: [], territory: [], captures: [] };
        let result = method === 'area' ? score.area[0] - score.area[1] - komi : score.territory[0] - score.territory[1] + score.captures[0] - score.captures[1] - komi;
        let resultString = !scoreBoard ? '' : result > 0 ? `B+${result}` : result < 0 ? `W+${-result}` : 'Draw';

        return h(Bar, Object.assign({ type }, this.props), h('div', { class: 'result' }, h('button', { onClick: this.handleButtonClick }, 'Details'), h('strong', {}, resultString)), ' ', children);
    }
}

module.exports = ScoringBar;

/***/ }),

/***/ "./src/components/drawers/Drawer.js":
/*!******************************************!*\
  !*** ./src/components/drawers/Drawer.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.min.js");

const h = _require.h,
      Component = _require.Component;

const classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

class Drawer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hidecontent: props.show
        };

        this.componentWillReceiveProps(props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.show) {
            clearTimeout(this.hidecontentId);

            if (this.state.hidecontent) this.setState({ hidecontent: false });
        } else {
            if (!this.state.hidecontent) this.hidecontentId = setTimeout(() => this.setState({ hidecontent: true }), 500);
        }
    }

    render({ type, show, children }, { hidecontent }) {
        return h('section', {
            id: type,
            class: classNames({
                drawer: true,
                hidecontent,
                show
            })
        }, children);
    }
}

module.exports = Drawer;

/***/ }),

/***/ "./src/components/drawers/GameChooserDrawer.js":
/*!*****************************************************!*\
  !*** ./src/components/drawers/GameChooserDrawer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _require = __webpack_require__(/*! electron */ "./src/modules/shims/electron.js");

const remote = _require.remote;

var _require2 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.min.js");

const h = _require2.h,
      Component = _require2.Component;

const classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
const sgf = __webpack_require__(/*! @sabaki/sgf */ "./node_modules/@sabaki/sgf/src/main.js");

const MiniGoban = __webpack_require__(/*! ../MiniGoban */ "./src/components/MiniGoban.js");
const Drawer = __webpack_require__(/*! ./Drawer */ "./src/components/drawers/Drawer.js");

const dialog = __webpack_require__(/*! ../../modules/dialog */ "./src/modules/dialog.js");
const fileformats = __webpack_require__(/*! ../../modules/fileformats */ "./src/modules/fileformats/index.js");
const gametree = __webpack_require__(/*! ../../modules/gametree */ "./src/modules/gametree.js");
const gamesort = __webpack_require__(/*! ../../modules/gamesort */ "./src/modules/gamesort.js");
const helper = __webpack_require__(/*! ../../modules/helper */ "./src/modules/helper.js");
const setting = remote.require('./setting');

let thumbnailSize = setting.get('gamechooser.thumbnail_size');
let itemMinWidth = thumbnailSize + 12 + 20;
let itemHeight = 253 + 10 + 20;

let getPreviewBoard = tree => {
    let tp = gametree.navigate(tree, 0, 30);
    if (!tp) tp = gametree.navigate(tree, 0, gametree.getCurrentHeight(tree) - 1);
    return gametree.getBoard(...tp);
};

class GameListItem extends Component {
    constructor() {
        super();

        let events = ['Click', 'ContextMenu', 'DragStart', 'DragOver'];

        for (let name of events) {
            this[`handle${name}`] = evt => {
                let callback = this.props[`on${name}`];
                evt.tree = this.props.tree;
                if (callback) callback(evt);
            };
        }
    }

    shouldComponentUpdate(nextProps) {
        for (let i in nextProps) if (nextProps[i] !== this.props[i]) return true;

        return false;
    }

    render({ tree, left, top, draggable, showThumbnail, insertBefore, insertAfter }) {
        let gameInfo = sabaki.getGameInfo(tree);
        let gameName = gameInfo.gameName,
            eventName = gameInfo.eventName,
            blackName = gameInfo.blackName,
            blackRank = gameInfo.blackRank,
            whiteName = gameInfo.whiteName,
            whiteRank = gameInfo.whiteRank;

        let name = gameName || eventName || '';

        return h('li', {
            ref: el => this.element = el,
            class: classNames({
                insertbefore: insertBefore,
                insertafter: insertAfter
            }),
            style: { left, top }
        }, h('div', {
            draggable,
            onClick: this.handleClick,
            onContextMenu: this.handleContextMenu,
            onDragStart: this.handleDragStart,
            onDragOver: this.handleDragOver
        }, h('span', { title: name }, name), h(MiniGoban, {
            board: getPreviewBoard(tree),
            maxSize: thumbnailSize,
            visible: showThumbnail
        }), h('span', { class: 'black', title: blackRank }, blackName || 'Black'), h('span', { class: 'white', title: whiteRank }, whiteName || 'White')));
    }
}

class GameChooserDrawer extends Component {
    constructor() {
        super();

        this.itemElements = {};

        this.state = {
            scrollTop: 0,
            insertBefore: -1,
            animation: false,
            filterText: ''
        };

        this.handleFilterTextChange = evt => this.setState({
            filterText: evt.currentTarget.value.trim()
        });

        this.handleCloseButtonClick = () => sabaki.closeDrawer();

        this.handleListScroll = evt => {
            this.setState({ scrollTop: evt.currentTarget.scrollTop });
        };

        this.handleItemContextMenu = evt => {
            let template = [{
                label: '&Remove Game',
                click: () => {
                    if (dialog.showMessageBox('Do you really want to remove this game permanently?', 'warning', ['Remove Game', 'Cancel'], 1) === 1) return;

                    var _props = this.props;
                    let gameTrees = _props.gameTrees;
                    var _props$onChange = _props.onChange;
                    let onChange = _props$onChange === undefined ? helper.noop : _props$onChange;

                    let index = gameTrees.indexOf(evt.tree);

                    onChange({ gameTrees: gameTrees.filter((_, i) => i !== index) });
                }
            }, {
                label: 'Remove &Other Games',
                click: () => {
                    if (dialog.showMessageBox('Do you really want to remove all other games permanently?', 'warning', ['Remove Games', 'Cancel'], 1) === 1) return;

                    var _props$onChange2 = this.props.onChange;
                    let onChange = _props$onChange2 === undefined ? helper.noop : _props$onChange2;

                    onChange({ gameTrees: [evt.tree] });
                }
            }];

            helper.popupMenu(template, evt.clientX, evt.clientY);
        };

        this.handleItemDragStart = evt => {
            this.dragData = this.props.gameTrees.indexOf(evt.tree);
        };

        this.handleItemDragOver = evt => {
            if (this.dragData == null) return;

            evt.preventDefault();

            let element = evt.currentTarget;
            let index = this.props.gameTrees.indexOf(evt.tree);

            let x = evt.clientX;

            var _element$getBoundingC = element.getBoundingClientRect();

            let left = _element$getBoundingC.left,
                width = _element$getBoundingC.width;

            let middle = left + width / 2;

            if (x <= middle - 10) {
                this.setState({ insertBefore: index });
            } else if (x >= middle + 10) {
                this.setState({ insertBefore: index + 1 });
            }
        };

        this.handleItemDrop = evt => {
            var _props2 = this.props;
            let gameTrees = _props2.gameTrees;
            var _props2$onChange = _props2.onChange;
            let onChange = _props2$onChange === undefined ? helper.noop : _props2$onChange;
            let insertBefore = this.state.insertBefore;

            let newGameTrees = gameTrees.slice();

            if (this.dragData == null || insertBefore < 0) return;
            if (insertBefore > this.dragData) insertBefore--;

            var _newGameTrees$splice = newGameTrees.splice(this.dragData, 1),
                _newGameTrees$splice2 = _slicedToArray(_newGameTrees$splice, 1);

            let tree = _newGameTrees$splice2[0];

            newGameTrees.splice(insertBefore, 0, tree);

            this.dragData = null;
            this.setState({ insertBefore: -1 });

            onChange({ gameTrees: newGameTrees });
        };

        this.handleCancelDrag = () => {
            this.dragData = null;
            this.setState({ insertBefore: -1 });
        };

        this.handleItemClick = evt => {
            let gameTrees = this.props.gameTrees;
            var _props$onItemClick = this.props.onItemClick;
            let onItemClick = _props$onItemClick === undefined ? helper.noop : _props$onItemClick;

            let index = gameTrees.indexOf(evt.tree);

            evt.selectedTree = evt.tree;
            evt.selectedIndex = index;

            onItemClick(evt);
        };

        this.handleAddButtonClick = evt => {
            let template = [{
                label: 'Add &New Game',
                click: () => {
                    let tree = sabaki.getEmptyGameTree();
                    var _props3 = this.props;
                    let gameTrees = _props3.gameTrees;
                    var _props3$onChange = _props3.onChange;
                    let onChange = _props3$onChange === undefined ? helper.noop : _props3$onChange;


                    onChange({ gameTrees: [...gameTrees, tree] });
                }
            }, {
                label: 'Add &Existing Files…',
                click: () => {
                    dialog.showOpenDialog({
                        properties: ['openFile', 'multiSelections'],
                        filters: [...fileformats.meta, { name: 'All Files', extensions: ['*'] }]
                    }, ({ result }) => {
                        var _props$onChange3 = this.props.onChange;
                        let onChange = _props$onChange3 === undefined ? helper.noop : _props$onChange3;


                        sabaki.setBusy(true);

                        if (result) {
                            try {
                                for (let file of result) {
                                    fileformats.parseFile(file, helper.noop, ({ trees }) => {
                                        onChange({ gameTrees: [...this.props.gameTrees, ...trees] });
                                    });
                                }
                            } catch (err) {
                                dialog.showMessageBox('Some files are unreadable.', 'warning');
                            }
                        }

                        sabaki.setBusy(false);
                    });
                }
            }];

            let element = evt.currentTarget;

            var _element$getBoundingC2 = element.getBoundingClientRect();

            let left = _element$getBoundingC2.left,
                bottom = _element$getBoundingC2.bottom;


            helper.popupMenu(template, left, bottom);
        };

        this.handleSortButtonClick = evt => {
            let sortWith = sorter => {
                return () => {
                    sabaki.setBusy(true);

                    var _props4 = this.props;
                    let gameTrees = _props4.gameTrees;
                    var _props4$onChange = _props4.onChange;
                    let onChange = _props4$onChange === undefined ? helper.noop : _props4$onChange;


                    gameTrees = sorter(gameTrees);

                    onChange({ gameTrees });
                    sabaki.setBusy(false);
                };
            };

            let template = [{ label: '&Black Player', click: sortWith(gamesort.byPlayerBlack) }, { label: '&White Player', click: sortWith(gamesort.byPlayerWhite) }, { label: 'Black R&ank', click: sortWith(gamesort.byBlackRank) }, { label: 'White Ran&k', click: sortWith(gamesort.byWhiteRank) }, { label: 'Game &Name', click: sortWith(gamesort.byGameName) }, { label: 'Game &Event', click: sortWith(gamesort.byEvent) }, { label: '&Date', click: sortWith(gamesort.byDate) }, { label: 'Number of &Moves', click: sortWith(gamesort.byNumberOfMoves) }, { type: 'separator' }, { label: '&Reverse', click: sortWith(gamesort.reverse) }];

            let element = evt.currentTarget;

            var _element$getBoundingC3 = element.getBoundingClientRect();

            let left = _element$getBoundingC3.left,
                bottom = _element$getBoundingC3.bottom;


            helper.popupMenu(template, left, bottom);
        };
    }

    componentDidMount() {
        window.addEventListener('resize', () => this.resize());

        this.resize();
        this.forceUpdate();
    }

    shouldComponentUpdate({ show }, { animation }) {
        return animation !== this.state.animation || show || show !== this.props.show;
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.scrollTop !== prevState.scrollTop && this.state.scrollTop !== this.gamesListElement.scrollTop) {
            // Update scroll top

            this.gamesListElement.scrollTop = this.state.scrollTop;
            this.setState({ scrollTop: this.gamesListElement.scrollTop });
        }

        if (this.props.show && prevProps.gameTrees.length !== this.props.gameTrees.length) {
            // Scroll down

            this.gamesListElement.scrollTop = this.gamesListElement.scrollHeight;
            this.setState({ scrollTop: this.gamesListElement.scrollTop });
        }

        if (!prevProps.show && this.props.show) {
            // Scroll current list element into view

            let index = this.shownGameTrees.findIndex(([, i]) => i === this.props.gameIndex);
            let scrollTop = 0;
            if (index >= 0) scrollTop = this.getRowFromIndex(index) * itemHeight;

            this.gamesListElement.scrollTop = scrollTop;
            this.setState({ scrollTop: this.gamesListElement.scrollTop });
        }

        if (prevProps.show !== this.props.show) {
            // Animate

            let gobanRect = document.getElementById('goban').getBoundingClientRect();
            let drawerRect = document.getElementById('gamechooser').getBoundingClientRect();

            let itemElement = this.itemElements[this.props.gameIndex];
            let svgElement = itemElement != null ? itemElement.querySelector('svg') : null;

            if (itemElement != null && svgElement != null) {
                var _itemElement$querySel = itemElement.querySelector('svg').getBoundingClientRect();

                let width = _itemElement$querySel.width,
                    height = _itemElement$querySel.height,
                    left = _itemElement$querySel.left,
                    top = _itemElement$querySel.top;


                let miniGobanRect = {
                    left: left - drawerRect.left,
                    top: top - drawerRect.top,
                    width,
                    height
                };

                let direction = this.props.show ? 'reverse' : 'normal';

                this.setState({ animation: [miniGobanRect, gobanRect, direction] });
                setTimeout(() => this.setState({ animation: null }), 600);
            }
        }
    }

    resize() {
        let innerWidth = this.gamesListElement.offsetWidth - 28;
        let height = this.gamesListElement.offsetHeight;
        let rowCount = Math.floor(innerWidth / itemMinWidth);

        this.setState({ innerWidth, height, rowCount });
    }

    getRowFromIndex(i) {
        return (i - i % this.state.rowCount) / this.state.rowCount;
    }

    render({
        show,
        gameTrees,
        gameIndex
    }, {
        filterText,
        animation,
        scrollTop,
        insertBefore,
        rowCount,
        innerWidth,
        height
    }) {
        let itemWidth = Math.floor(innerWidth / rowCount);

        this.shownGameTrees = gameTrees.map((tree, index) => {
            return [tree, index];
        }).filter(([tree]) => {
            let gameInfo = sabaki.getGameInfo(tree);
            let data = Object.keys(gameInfo).map(x => gameInfo[x]);

            return data.join(' ').toLowerCase().includes(filterText.toLowerCase());
        });

        return h('div', { onDrop: this.handleCancelDrag }, h('style', {}, `
                #gamechooser .games-list .placeholder {
                    height: ${(this.getRowFromIndex(this.shownGameTrees.length - 1) + 1) * itemHeight + 20}px;
                }

                #gamechooser .games-list li {
                    width: ${itemWidth - 20}px;
                }
            `, animation && `
                #gamechooser-animation {
                    animation: gamechooser-animation .5s ${animation[2]} forwards;
                }

                @keyframes gamechooser-animation {
                    from {
                        transform: translate(${animation[0].left}px, ${animation[0].top}px);
                        opacity: 1;
                    }
                    to {
                        transform: translate(${animation[1].left}px, ${animation[1].top}px)
                            scale(${animation[1].width / animation[0].width},
                            ${animation[1].height / animation[0].height});
                        opacity: 0;
                    }
                }
            `), h(Drawer, {
            type: 'gamechooser',
            show
        }, h('h2', {}, 'Manage Games'), h('input', {
            type: 'search',
            name: 'filter',
            placeholder: 'Filter',
            value: filterText,
            onInput: this.handleFilterTextChange
        }), h('div', {
            ref: el => this.gamesListElement = el,
            class: 'games-list',

            onScroll: this.handleListScroll,
            onDrop: this.handleItemDrop
        }, h('div', { class: 'placeholder' }), h('ol', {}, this.shownGameTrees.map(([tree, index], i) => {
            let row = this.getRowFromIndex(i);
            let itemTop = row * itemHeight + 10;
            let itemLeft = (i - row * rowCount) * itemWidth + 10;

            if (index !== gameIndex && (itemTop + itemHeight * 2 <= scrollTop || itemTop - itemHeight >= scrollTop + height)) return;

            return h(GameListItem, {
                ref: item => {
                    if (item != null) this.itemElements[index] = item.element;
                },
                key: tree.id,
                tree,
                top: itemTop,
                left: itemLeft,
                draggable: filterText === '',

                showThumbnail: index !== gameIndex || !animation,
                insertBefore: insertBefore === index,
                insertAfter: i === this.shownGameTrees.length - 1 && insertBefore === index + 1,

                onClick: this.handleItemClick,
                onContextMenu: this.handleItemContextMenu,
                onDragStart: this.handleItemDragStart,
                onDragOver: this.handleItemDragOver
            });
        }))), h('p', {}, h('button', {
            type: 'button',
            class: 'dropdown',
            onClick: this.handleAddButtonClick
        }, 'Add'), h('button', {
            type: 'button',
            class: 'dropdown',
            onClick: this.handleSortButtonClick
        }, 'Sort By'), h('button', {
            type: 'button',
            onClick: this.handleCloseButtonClick
        }, 'Close'))), h('div', {
            id: 'gamechooser-animation',
            style: !animation ? {
                opacity: 0,
                pointerEvents: 'none'
            } : {}
        }, h(MiniGoban, {
            board: getPreviewBoard(gameTrees[gameIndex]),
            maxSize: thumbnailSize
        })));
    }
}

module.exports = GameChooserDrawer;

/***/ }),

/***/ "./src/components/drawers/InfoDrawer.js":
/*!**********************************************!*\
  !*** ./src/components/drawers/InfoDrawer.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, setImmediate) {var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

Function.prototype.$asyncbind = function $asyncbind(self, catcher) {
    "use strict";

    if (!Function.prototype.$asyncbind) {
        Object.defineProperty(Function.prototype, "$asyncbind", {
            value: $asyncbind,
            enumerable: false,
            configurable: true,
            writable: true
        });
    }

    if (!$asyncbind.trampoline) {
        $asyncbind.trampoline = function trampoline(t, x, s, e, u) {
            return function b(q) {
                while (q) {
                    if (q.then) {
                        q = q.then(b, e);
                        return u ? undefined : q;
                    }

                    try {
                        if (q.pop) {
                            if (q.length) return q.pop() ? x.call(t) : q;
                            q = s;
                        } else q = q.call(t);
                    } catch (r) {
                        return e(r);
                    }
                }
            };
        };
    }

    if (!$asyncbind.LazyThenable) {
        $asyncbind.LazyThenable = function () {
            function isThenable(obj) {
                return obj && obj instanceof Object && typeof obj.then === "function";
            }

            function resolution(p, r, how) {
                try {
                    var x = how ? how(r) : r;
                    if (p === x) return p.reject(new TypeError("Promise resolution loop"));

                    if (isThenable(x)) {
                        x.then(function (y) {
                            resolution(p, y);
                        }, function (e) {
                            p.reject(e);
                        });
                    } else {
                        p.resolve(x);
                    }
                } catch (ex) {
                    p.reject(ex);
                }
            }

            function _unchained(v) {}

            function thenChain(res, rej) {
                this.resolve = res;
                this.reject = rej;
            }

            function Chained() {}

            ;
            Chained.prototype = {
                resolve: _unchained,
                reject: _unchained,
                then: thenChain
            };

            function then(res, rej) {
                var chain = new Chained();

                try {
                    this._resolver(function (value) {
                        return isThenable(value) ? value.then(res, rej) : resolution(chain, value, res);
                    }, function (ex) {
                        resolution(chain, ex, rej);
                    });
                } catch (ex) {
                    resolution(chain, ex, rej);
                }

                return chain;
            }

            function Thenable(resolver) {
                this._resolver = resolver;
                this.then = then;
            }

            ;

            Thenable.resolve = function (v) {
                return Thenable.isThenable(v) ? v : {
                    then: function then(resolve) {
                        return resolve(v);
                    }
                };
            };

            Thenable.isThenable = isThenable;
            return Thenable;
        }();

        $asyncbind.EagerThenable = $asyncbind.Thenable = ($asyncbind.EagerThenableFactory = function (tick) {
            tick = tick || typeof process === "object" && process.nextTick || typeof setImmediate === "function" && setImmediate || function (f) {
                setTimeout(f, 0);
            };

            var soon = function () {
                var fq = [],
                    fqStart = 0,
                    bufferSize = 1024;

                function callQueue() {
                    while (fq.length - fqStart) {
                        try {
                            fq[fqStart]();
                        } catch (ex) {}

                        fq[fqStart++] = undefined;

                        if (fqStart === bufferSize) {
                            fq.splice(0, bufferSize);
                            fqStart = 0;
                        }
                    }
                }

                return function (fn) {
                    fq.push(fn);
                    if (fq.length - fqStart === 1) tick(callQueue);
                };
            }();

            function Zousan(func) {
                if (func) {
                    var me = this;
                    func(function (arg) {
                        me.resolve(arg);
                    }, function (arg) {
                        me.reject(arg);
                    });
                }
            }

            Zousan.prototype = {
                resolve: function resolve(value) {
                    if (this.state !== undefined) return;
                    if (value === this) return this.reject(new TypeError("Attempt to resolve promise with self"));
                    var me = this;

                    if (value && (typeof value === "function" || typeof value === "object")) {
                        try {
                            var first = 0;
                            var then = value.then;

                            if (typeof then === "function") {
                                then.call(value, function (ra) {
                                    if (!first++) {
                                        me.resolve(ra);
                                    }
                                }, function (rr) {
                                    if (!first++) {
                                        me.reject(rr);
                                    }
                                });
                                return;
                            }
                        } catch (e) {
                            if (!first) this.reject(e);
                            return;
                        }
                    }

                    this.state = STATE_FULFILLED;
                    this.v = value;
                    if (me.c) soon(function () {
                        for (var n = 0, l = me.c.length; n < l; n++) STATE_FULFILLED(me.c[n], value);
                    });
                },
                reject: function reject(reason) {
                    if (this.state !== undefined) return;
                    this.state = STATE_REJECTED;
                    this.v = reason;
                    var clients = this.c;
                    if (clients) soon(function () {
                        for (var n = 0, l = clients.length; n < l; n++) STATE_REJECTED(clients[n], reason);
                    });
                },
                then: function then(onF, onR) {
                    var p = new Zousan();
                    var client = {
                        y: onF,
                        n: onR,
                        p: p
                    };

                    if (this.state === undefined) {
                        if (this.c) this.c.push(client);else this.c = [client];
                    } else {
                        var s = this.state,
                            a = this.v;
                        soon(function () {
                            s(client, a);
                        });
                    }

                    return p;
                }
            };

            function STATE_FULFILLED(c, arg) {
                if (typeof c.y === "function") {
                    try {
                        var yret = c.y.call(undefined, arg);
                        c.p.resolve(yret);
                    } catch (err) {
                        c.p.reject(err);
                    }
                } else c.p.resolve(arg);
            }

            function STATE_REJECTED(c, reason) {
                if (typeof c.n === "function") {
                    try {
                        var yret = c.n.call(undefined, reason);
                        c.p.resolve(yret);
                    } catch (err) {
                        c.p.reject(err);
                    }
                } else c.p.reject(reason);
            }

            Zousan.resolve = function (val) {
                if (val && val instanceof Zousan) return val;
                var z = new Zousan();
                z.resolve(val);
                return z;
            };

            Zousan.reject = function (err) {
                if (err && err instanceof Zousan) return err;
                var z = new Zousan();
                z.reject(err);
                return z;
            };

            Zousan.version = "2.3.3-nodent";
            return Zousan;
        })();
    }

    function boundThen() {
        return resolver.apply(self, arguments);
    }

    var resolver = this;

    switch (catcher) {
        case true:
            return new $asyncbind.Thenable(boundThen);

        case 0:
            return new $asyncbind.LazyThenable(boundThen);

        case undefined:
            boundThen.then = boundThen;
            return boundThen;

        default:
            return function () {
                try {
                    return resolver.apply(self, arguments);
                } catch (ex) {
                    return catcher(ex);
                }
            };
    }
};

var _require = __webpack_require__(/*! electron */ "./src/modules/shims/electron.js");

const remote = _require.remote;

var _require2 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.min.js");

const h = _require2.h,
      Component = _require2.Component;

const classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
const Pikaday = __webpack_require__(/*! pikaday */ "./node_modules/pikaday/pikaday.js");
const sgf = __webpack_require__(/*! @sabaki/sgf */ "./node_modules/@sabaki/sgf/src/main.js");

const Drawer = __webpack_require__(/*! ./Drawer */ "./src/components/drawers/Drawer.js");

const gametree = __webpack_require__(/*! ../../modules/gametree */ "./src/modules/gametree.js");
const helper = __webpack_require__(/*! ../../modules/helper */ "./src/modules/helper.js");
const setting = remote.require('./setting');

class InfoDrawerItem extends Component {
    render({ title, children }) {
        return h('li', {}, h('label', {}, h('span', {}, title + ':'), children[0]), children.slice(1));
    }
}

class InfoDrawer extends Component {
    constructor() {
        super();

        this.handleSubmitButtonClick = evt => new Promise(function ($return, $error) {
            var _props$treePosition;

            let tree, index, emptyTree, keys, data, i, startGame;

            evt.preventDefault();

            _props$treePosition = _slicedToArray(this.props.treePosition, 2);
            tree = _props$treePosition[0], index = _props$treePosition[1];

            emptyTree = !tree.parent && tree.nodes.length === 1 && tree.subtrees.length === 0;

            keys = ['blackName', 'blackRank', 'whiteName', 'whiteRank', 'gameName', 'eventName', 'date', 'result', 'komi'];

            data = keys.reduce((acc, key) => {
                acc[key] = Array.isArray(this.state[key]) && this.state[key].every(x => x == null) ? null : this.state[key];
                return acc;
            }, {});

            if (emptyTree) {
                data.handicap = this.state.handicap;
                data.size = this.state.size;
            }

            sabaki.setGameInfo(this.props.treePosition[0], data);
            sabaki.closeDrawer();
            sabaki.attachEngines(...this.state.engines);

            return sabaki.waitForRender().then(function ($await_3) {

                i = this.props.currentPlayer > 0 ? 0 : 1;
                startGame = setting.get('gtp.start_game_after_attach');

                if (startGame && sabaki.attachedEngineControllers[i] != null) {
                    sabaki.startGeneratingMoves();
                }
                return $return();
            }.$asyncbind(this, $error), $error);
        }.$asyncbind(this));

        this.handleCancelButtonClick = evt => {
            evt.preventDefault();
            sabaki.closeDrawer();
        };

        this.handleBoardWidthFocus = () => {
            this.combinedSizeFields = this.state.size[0] === this.state.size[1];
        };

        this.handleBoardWidthChange = evt => {
            let value = evt.currentTarget.value;

            if (value === '' || isNaN(value)) value = null;else value = +value;

            this.setState(({ size: [, height] }) => ({
                size: [value, this.combinedSizeFields ? value : height]
            }));
        };

        this.handleBoardHeightChange = evt => {
            let value = evt.currentTarget.value;

            if (value === '' || isNaN(value)) value = null;else value = +value;

            this.setState(({ size: [width] }) => ({ size: [width, value] }));
        };

        this.handleSizeSwapButtonClick = () => {
            this.setState(({ size }) => ({ size: size.reverse() }));
        };

        this.handleSwapPlayers = () => {
            this.setState(({ engines, blackName, blackRank, whiteName, whiteRank }) => ({
                engines: (engines || [null, null]).reverse(),
                blackName: whiteName,
                whiteName: blackName,
                blackRank: whiteRank,
                whiteRank: blackRank
            }));
        };

        this.handleDateInputChange = evt => {
            this.setState({ date: evt.currentTarget.value });
            this.markDates();
        };

        this.handleDateInputFocus = () => {
            this.pikaday.show();
        };

        this.handleDateInputBlur = () => {
            setTimeout(() => {
                if (!this.elementInPikaday(document.activeElement)) this.pikaday.hide();
            }, 50);
        };

        this.handleShowResultClick = () => {
            this.setState({ showResult: true });
        };

        this.handleInputChange = ['blackRank', 'blackName', 'whiteRank', 'whiteName', 'gameName', 'eventName', 'komi', 'result', 'handicap'].reduce((acc, key) => {
            acc[key] = ({ currentTarget }) => {
                this.setState({ [key]: currentTarget.value === '' ? null : currentTarget.value });
            };

            return acc;
        }, {});

        this.handleEngineMenuClick = [0, 1].map(index => evt => {
            let engines = setting.get('engines.list');
            let nameKey = ['blackName', 'whiteName'][index];
            let autoName = this.state.engines[index] == null ? this.state[nameKey] == null : this.state[nameKey] === this.state.engines[index].name.trim();

            let template = [{
                label: 'Manual',
                type: 'checkbox',
                checked: this.state.engines[index] == null,
                click: () => {
                    let engines = this.state.engines;

                    if (engines[index] == null) return;

                    engines[index] = null;

                    this.setState({
                        engines,
                        [nameKey]: autoName ? null : this.state[nameKey]
                    });
                }
            }, { type: 'separator' }, ...engines.map(engine => ({
                label: engine.name.trim() || '(Unnamed Engine)',
                type: 'checkbox',
                checked: engine === this.state.engines[index],
                click: () => {
                    let engines = this.state.engines;

                    engines[index] = engine;

                    this.setState({
                        engines,
                        [nameKey]: autoName ? engine.name.trim() : this.state[nameKey]
                    });
                }
            })), engines.length > 0 && { type: 'separator' }, {
                label: 'Manage Engines…',
                click: () => {
                    sabaki.setState({ preferencesTab: 'engines' });
                    sabaki.openDrawer('preferences');
                }
            }].filter(x => !!x);

            var _evt$currentTarget$ge = evt.currentTarget.getBoundingClientRect();

            let left = _evt$currentTarget$ge.left,
                bottom = _evt$currentTarget$ge.bottom;


            helper.popupMenu(template, left, bottom);
        });
    }

    componentWillReceiveProps({ gameInfo, engines, show }) {
        if (!this.props.show && show) {
            this.setState(Object.assign({}, gameInfo, {
                engines: [...engines],
                showResult: !gameInfo.result || gameInfo.result.trim() === '' || setting.get('app.always_show_result') === true
            }));
        }
    }

    componentDidMount() {
        this.preparePikaday();
    }

    shouldComponentUpdate({ show }) {
        return show !== this.props.show || show;
    }

    markDates() {
        let dates = (sgf.parseDates(this.state.date || '') || []).filter(x => x.length === 3);

        for (let el of this.pikaday.el.querySelectorAll('.pika-button')) {
            let year = +el.dataset.pikaYear;
            let month = +el.dataset.pikaMonth;
            let day = +el.dataset.pikaDay;

            el.parentElement.classList.toggle('is-multi-selected', dates.some(d => helper.shallowEquals(d, [year, month + 1, day])));
        }
    }

    adjustPikadayPosition() {
        var _dateInputElement$get = this.dateInputElement.getBoundingClientRect();

        let left = _dateInputElement$get.left,
            top = _dateInputElement$get.top;
        let el = this.pikaday.el;

        var _el$getBoundingClient = el.getBoundingClientRect();

        let height = _el$getBoundingClient.height;


        el.style.position = 'absolute';
        el.style.left = Math.round(left) + 'px';
        el.style.top = Math.round(top - height) + 'px';
    }

    elementInPikaday(element) {
        while (element.parentElement) {
            if (element === this.pikaday.el) return true;
            element = element.parentElement;
        }

        return false;
    }

    preparePikaday() {
        this.pikaday = new Pikaday({
            position: 'top left',
            firstDay: 1,
            yearRange: 6,
            keyboardInput: false,

            onOpen: () => {
                if (!this.pikaday) return;

                let dates = (sgf.parseDates(this.state.date || '') || []).filter(x => x.length === 3);

                if (dates.length > 0) {
                    this.pikaday.setDate(dates[0].join('-'), true);
                } else {
                    this.pikaday.gotoToday();
                }

                this.adjustPikadayPosition();
            },
            onDraw: () => {
                if (!this.pikaday || !this.pikaday.isVisible()) return;

                this.adjustPikadayPosition();
                this.markDates();

                this.dateInputElement.focus();
            },
            onSelect: date => {
                if (!this.pikaday) return;

                let dates = sgf.parseDates(this.state.date || '') || [];
                date = [date.getFullYear(), date.getMonth() + 1, date.getDate()];

                if (!dates.some(x => helper.shallowEquals(x, date))) {
                    dates.push(date);
                } else {
                    dates = dates.filter(x => !helper.shallowEquals(x, date));
                }

                this.setState({ date: sgf.stringifyDates(dates.sort(helper.lexicalCompare)) });
                this.markDates();
            }
        });

        // Hack for removing keyboard input support of Pikaday
        document.removeEventListener('keydown', this.pikaday._onKeyChange);

        this.pikaday.hide();

        document.body.appendChild(this.pikaday.el);
        document.body.addEventListener('click', evt => {
            if (this.pikaday.isVisible() && document.activeElement !== this.dateInputElement && evt.target !== this.dateInputElement && !this.elementInPikaday(evt.target)) this.pikaday.hide();
        });

        window.addEventListener('resize', () => this.adjustPikadayPosition());
    }

    render({
        treePosition,
        currentPlayer,
        show
    }, {
        showResult = false,
        engines = [null, null],
        blackName = null,
        blackRank = null,
        whiteName = null,
        whiteRank = null,
        gameName = null,
        eventName = null,
        date = null,
        result = null,
        komi = null,
        handicap = 0,
        size = [null, null]
    }) {
        var _treePosition = _slicedToArray(treePosition, 2);

        let tree = _treePosition[0],
            index = _treePosition[1];

        let emptyTree = !tree.parent && tree.nodes.length === 1 && tree.subtrees.length === 0;

        return h(Drawer, {
            type: 'info',
            show
        }, h('form', {}, h('section', {}, h('span', {}, false && h('img', {
            src: '/static/node_modules/octicons/build/svg/chevron-down.svg',
            width: 16,
            height: 16,
            class: classNames({ menu: true, active: engines[0] != null }),
            onClick: this.handleEngineMenuClick[0]
        }), ' ', h('input', {
            type: 'text',
            name: 'rank_1',
            placeholder: 'Rank',
            value: blackRank,
            onInput: this.handleInputChange.blackRank
        }), h('input', {
            type: 'text',
            name: 'name_1',
            placeholder: 'Black',
            value: blackName,
            onInput: this.handleInputChange.blackName
        })), h('img', {
            class: 'current-player',
            src: `/static/game/img/ui/player_${currentPlayer}.svg`,
            height: 31,
            title: 'Swap',
            onClick: this.handleSwapPlayers
        }), h('span', {}, h('input', {
            type: 'text',
            name: 'name_-1',
            placeholder: 'White',
            value: whiteName,
            onInput: this.handleInputChange.whiteName
        }), h('input', {
            type: 'text',
            name: 'rank_-1',
            placeholder: 'Rank',
            value: whiteRank,
            onInput: this.handleInputChange.whiteRank
        }), ' ', false && h('img', {
            src: '/static/node_modules/octicons/build/svg/chevron-down.svg',
            width: 16,
            height: 16,
            class: classNames({ menu: true, active: engines[1] != null }),
            onClick: this.handleEngineMenuClick[1]
        }))), h('ul', {}, h(InfoDrawerItem, { title: 'Name' }, h('input', {
            type: 'text',
            placeholder: '(Unnamed)',
            value: gameName,
            onInput: this.handleInputChange.gameName
        })), h(InfoDrawerItem, { title: 'Event' }, h('input', {
            type: 'text',
            placeholder: 'None',
            value: eventName,
            onInput: this.handleInputChange.eventName
        })), h(InfoDrawerItem, { title: 'Date' }, h('input', {
            ref: el => this.dateInputElement = el,
            type: 'text',
            placeholder: 'None',
            value: date,

            onFocus: this.handleDateInputFocus,
            onBlur: this.handleDateInputBlur,
            onInput: this.handleDateInputChange
        })), h(InfoDrawerItem, { title: 'Komi' }, h('input', {
            type: 'number',
            name: 'komi',
            step: 0.5,
            placeholder: 0,
            value: komi == null ? '' : komi,
            onInput: this.handleInputChange.komi
        })), h(InfoDrawerItem, { title: 'Result' }, showResult ? h('input', {
            type: 'text',
            placeholder: 'None',
            value: result,
            onInput: this.handleInputChange.result
        }) : h('button', {
            type: 'button',
            onClick: this.handleShowResultClick
        }, 'Show')), h(InfoDrawerItem, { title: 'Handicap' }, h('select', {
            selectedIndex: Math.max(0, handicap - 1),
            disabled: !emptyTree,
            onChange: this.handleInputChange.handicap
        }, h('option', { value: 0 }, 'No stones'), [...Array(8)].map((_, i) => h('option', { value: i + 2 }, i + 2 + ' stones')))), h(InfoDrawerItem, { title: 'Board Size' }, h('input', {
            type: 'number',
            name: 'size-width',
            placeholder: 19,
            max: 25,
            min: 2,
            value: size[0],
            disabled: !emptyTree,
            onFocus: this.handleBoardWidthFocus,
            onInput: this.handleBoardWidthChange
        }), ' ', h('span', {
            title: 'Swap',
            style: { cursor: emptyTree ? 'pointer' : 'default' },
            onClick: !emptyTree ? helper.noop : this.handleSizeSwapButtonClick
        }, '×'), ' ', h('input', {
            type: 'number',
            name: 'size-height',
            placeholder: 19,
            max: 25,
            min: 3,
            value: size[1],
            disabled: !emptyTree,
            onInput: this.handleBoardHeightChange
        }))), h('p', {}, h('button', { type: 'submit', onClick: this.handleSubmitButtonClick }, 'OK'), ' ', h('button', { type: 'reset', onClick: this.handleCancelButtonClick }, 'Cancel'))));
    }
}

module.exports = InfoDrawer;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../../node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./src/components/drawers/ScoreDrawer.js":
/*!***********************************************!*\
  !*** ./src/components/drawers/ScoreDrawer.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! electron */ "./src/modules/shims/electron.js");

const remote = _require.remote;

var _require2 = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.min.js");

const h = _require2.h,
      Component = _require2.Component;

const classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

const Drawer = __webpack_require__(/*! ./Drawer */ "./src/components/drawers/Drawer.js");

const helper = __webpack_require__(/*! ../../modules/helper */ "./src/modules/helper.js");
const setting = remote.require('./setting');

class ScoreRow extends Component {
    render({ method, score, komi, sign }) {
        let index = sign > 0 ? 0 : 1;

        let total = method === 'area' ? score.area[index] : score.territory[index] + score.captures[index];

        if (sign < 0) total += komi;

        return h('tr', {}, h('th', {}, h('img', {
            src: `/static/game/img/goban/stone_${sign}.png`,
            alt: sign > 0 ? 'Black' : 'White',
            width: 24,
            height: 24
        })), h('td', { class: classNames({ disabled: method === 'territory' }) }, score.area[index]), h('td', { class: classNames({ disabled: method === 'area' }) }, score.territory[index]), h('td', { class: classNames({ disabled: method === 'area' }) }, score.captures[index]), h('td', {}, sign < 0 ? komi : '-'), h('td', {}, total));
    }
}

class ScoreDrawer extends Component {
    constructor() {
        super();

        this.handleTerritoryButtonClick = () => setting.set('scoring.method', 'territory');
        this.handleAreaButtonClick = () => setting.set('scoring.method', 'area');
        this.handleCloseButtonClick = () => sabaki.closeDrawer();

        this.handleSubmitButtonClick = evt => {
            evt.preventDefault();

            var _props$onSubmitButton = this.props.onSubmitButtonClick;
            let onSubmitButtonClick = _props$onSubmitButton === undefined ? helper.noop : _props$onSubmitButton;

            evt.resultString = this.resultString;
            onSubmitButtonClick(evt);
        };
    }

    shouldComponentUpdate({ areaMap }) {
        return areaMap != null;
    }

    render({ show, estimating, method, areaMap, board, komi }) {
        if (isNaN(komi)) komi = 0;

        let score = board ? board.getScore(areaMap) : { area: [], territory: [], captures: [] };
        let result = method === 'area' ? score.area[0] - score.area[1] - komi : score.territory[0] - score.territory[1] + score.captures[0] - score.captures[1] - komi;

        this.resultString = result > 0 ? `B+${result}` : result < 0 ? `W+${-result}` : 'Draw';

        return h(Drawer, {
            type: 'score',
            show
        }, h('h2', {}, 'Score'), h('ul', { class: 'tabs' }, h('li', { class: classNames({ current: method === 'area' }) }, h('a', {
            href: '#',
            onClick: this.handleAreaButtonClick
        }, 'Area')), h('li', { class: classNames({ current: method === 'territory' }) }, h('a', {
            href: '#',
            onClick: this.handleTerritoryButtonClick
        }, 'Territory'))), h('table', {}, h('thead', {}, h('tr', {}, h('th'), h('th', { disabled: method === 'territory' }, 'Area'), h('th', { disabled: method === 'area' }, 'Territory'), h('th', { disabled: method === 'area' }, 'Captures'), h('th', {}, 'Komi'), h('th', {}, 'Total'))), h('tbody', {}, h(ScoreRow, { method, score, komi, sign: 1 }), h(ScoreRow, { method, score, komi, sign: -1 }))), h('form', {}, h('p', {}, 'Result: ', h('span', { class: 'result' }, this.resultString), ' ', !estimating && h('button', {
            type: 'submit',
            onClick: this.handleSubmitButtonClick
        }, 'Update Result'), ' ', h('button', {
            type: 'reset',
            onClick: this.handleCloseButtonClick
        }, 'Close'))));
    }
}

module.exports = ScoreDrawer;

/***/ }),

/***/ "./src/modules/board.js":
/*!******************************!*\
  !*** ./src/modules/board.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

const helper = __webpack_require__(/*! ./helper */ "./src/modules/helper.js");
const alpha = 'ABCDEFGHJKLMNOPQRSTUVWXYZ';

class Board {
    constructor(width = 19, height = 19, arrangement = [], captures = null) {
        this.width = width;
        this.height = height;
        this.captures = captures ? captures.slice() : [0, 0];
        this.arrangement = [];
        this.markups = {};
        this.ghosts = {};
        this.lines = [];

        // Initialize arrangement

        for (let y = 0; y < this.height; y++) {
            this.arrangement[y] = y in arrangement ? [...arrangement[y]] : Array(this.width).fill(0);
        }
    }

    get([x, y]) {
        return this.arrangement[y] ? this.arrangement[y][x] : undefined;
    }

    set([x, y], sign) {
        this.arrangement[y][x] = sign;
        return this;
    }

    clone() {
        return new Board(this.width, this.height, this.arrangement, this.captures);
    }

    diff(board) {
        if (board.width !== this.width || board.height !== this.height) {
            return null;
        }

        let result = [];

        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                let sign = board.get([x, y]);
                if (this.get([x, y]) === sign) continue;

                result.push([x, y]);
            }
        }

        return result;
    }

    hasVertex([x, y]) {
        return 0 <= x && x < this.width && 0 <= y && y < this.height;
    }

    clear() {
        this.arrangement = this.arrangement.map(_ => Array(this.width).fill(0));
    }

    isSquare() {
        return this.width === this.height;
    }

    getDistance(v, w) {
        return Math.abs(v[0] - w[0]) + Math.abs(v[1] - w[1]);
    }

    getDistanceToGround(vertex) {
        return this.getCanonicalVertex(vertex)[0];
    }

    getCanonicalVertex(vertex) {
        if (!this.hasVertex(vertex)) return [-1, -1];

        let boardSize = [this.width, this.height];

        return vertex.map((x, i) => Math.min(x, boardSize[i] - x - 1)).sort((x, y) => x - y);
    }

    getNeighbors(vertex, ignoreBoard = false) {
        if (!ignoreBoard && !this.hasVertex(vertex)) return [];

        var _vertex = _slicedToArray(vertex, 2);

        let x = _vertex[0],
            y = _vertex[1];

        let allNeighbors = [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]];

        return ignoreBoard ? allNeighbors : allNeighbors.filter(v => this.hasVertex(v));
    }

    getConnectedComponent(vertex, func, result = null) {
        if (func instanceof Array) {
            let signs = func;
            func = v => signs.includes(this.get(v));
        } else if (typeof func === 'number') {
            let sign = func;
            func = v => this.get(v) === sign;
        }

        if (!this.hasVertex(vertex)) return [];
        if (!result) result = [vertex];

        // Recursive depth-first search

        for (let v of this.getNeighbors(vertex)) {
            if (!func(v)) continue;
            if (result.some(w => helper.vertexEquals(v, w))) continue;

            result.push(v);
            this.getConnectedComponent(v, func, result);
        }

        return result;
    }

    getChain(vertex) {
        return this.getConnectedComponent(vertex, this.get(vertex));
    }

    hasLiberties(vertex, visited = {}) {
        let sign = this.get(vertex);
        if (!this.hasVertex(vertex) || sign === 0) return false;

        if (vertex in visited) return false;
        let neighbors = this.getNeighbors(vertex);

        if (neighbors.some(n => this.get(n) === 0)) return true;

        visited[vertex] = true;

        return neighbors.filter(n => this.get(n) === sign).some(n => this.hasLiberties(n, visited));
    }

    getLiberties(vertex) {
        if (!this.hasVertex(vertex) || this.get(vertex) === 0) return [];

        let chain = this.getChain(vertex);
        let liberties = [];
        let added = {};

        for (let c of chain) {
            let freeNeighbors = this.getNeighbors(c).filter(n => this.get(n) === 0);

            liberties.push(...freeNeighbors.filter(n => !(n in added)));
            freeNeighbors.forEach(n => added[n] = true);
        }

        return liberties;
    }

    getRelatedChains(vertex) {
        if (!this.hasVertex(vertex) || this.get(vertex) === 0) return [];

        let area = this.getConnectedComponent(vertex, [this.get(vertex), 0]);
        return area.filter(v => this.get(v) === this.get(vertex));
    }

    getScore(areaMap) {
        let score = {
            area: [0, 0],
            territory: [0, 0],
            captures: this.captures
        };

        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                let sign = areaMap[y][x];
                if (sign === 0) continue;

                let index = sign > 0 ? 0 : 1;

                score.area[index]++;
                if (this.get([x, y]) === 0) score.territory[index]++;
            }
        }

        return score;
    }

    vertex2coord(vertex) {
        if (!this.hasVertex(vertex)) return null;
        return alpha[vertex[0]] + (this.height - vertex[1]);
    }

    coord2vertex(coord) {
        let x = alpha.indexOf(coord[0].toUpperCase());
        let y = this.height - +coord.substr(1);
        return [x, y];
    }

    isValid() {
        let liberties = {};

        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                let vertex = [x, y];
                if (this.get(vertex) === 0 || vertex in liberties) continue;
                if (!this.hasLiberties(vertex)) return false;

                this.getChain(vertex).forEach(v => liberties[v] = true);
            }
        }

        return true;
    }

    makeMove(sign, vertex) {
        let move = this.clone();

        if (sign === 0 || !this.hasVertex(vertex)) return move;

        sign = sign > 0 ? 1 : -1;
        move.set(vertex, sign);

        // Remove captured stones

        let deadNeighbors = move.getNeighbors(vertex).filter(n => move.get(n) === -sign && !move.hasLiberties(n));

        for (let n of deadNeighbors) {
            if (move.get(n) === 0) continue;

            for (let c of move.getChain(n)) {
                move.set(c, 0);
                move.captures[(-sign + 1) / 2]++;
            }
        }

        move.set(vertex, sign);

        // Detect suicide

        if (deadNeighbors.length === 0 && !move.hasLiberties(vertex)) {
            for (let c of move.getChain(vertex)) {
                move.set(c, 0);
                move.captures[(sign + 1) / 2]++;
            }
        }

        return move;
    }

    getHandicapPlacement(count, tygemflag = false) {
        if (Math.min(this.width, this.height) < 6 || count < 2) return [];

        let nearX = this.width >= 13 ? 3 : 2;
        let nearY = this.height >= 13 ? 3 : 2;
        let farX = this.width - nearX - 1;
        let farY = this.height - nearY - 1;
        let middleX = (this.width - 1) / 2;
        let middleY = (this.height - 1) / 2;

        let result;

        if (!tygemflag) {
            result = [[nearX, farY], [farX, nearY], [farX, farY], [nearX, nearY]];
        } else {
            result = [[nearX, farY], [farX, nearY], [nearX, nearY], [farX, farY]];
        }

        if (this.width % 2 !== 0 && this.height % 2 !== 0) {
            if (count === 5) result.push([middleX, middleY]);
            result.push([nearX, middleY], [farX, middleY]);

            if (count === 7) result.push([middleX, middleY]);
            result.push([middleX, nearY], [middleX, farY], [middleX, middleY]);
        } else if (this.width % 2 !== 0) {
            result.push([middleX, nearY], [middleX, farY]);
        } else if (this.height % 2 !== 0) {
            result.push([nearX, middleY], [farX, middleY]);
        }

        return result.slice(0, count);
    }

    generateAscii() {
        let result = [];
        let lb = helper.linebreak;

        let getIndexFromVertex = ([x, y]) => {
            let rowLength = 4 + this.width * 2;
            return rowLength + rowLength * y + 1 + x * 2 + 1;
        };

        // Make empty board

        result.push('+');
        for (let x = 0; x < this.width; x++) result.push('-', '-');
        result.push('-', '+', lb);

        for (let y = 0; y < this.height; y++) {
            result.push('|');
            for (let x = 0; x < this.width; x++) result.push(' ', '.');
            result.push(' ', '|', lb);
        }

        result.push('+');
        for (let x = 0; x < this.width; x++) result.push('-', '-');
        result.push('-', '+', lb);

        this.getHandicapPlacement(9).forEach(v => result[getIndexFromVertex(v)] = ',');

        // Place markers & stones

        let data = {
            plain: ['O', null, 'X'],
            circle: ['W', 'C', 'B'],
            square: ['@', 'S', '#'],
            triangle: ['Q', 'T', 'Y'],
            cross: ['P', 'M', 'Z'],
            label: ['O', null, 'X']
        };

        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                let v = [x, y];
                let i = getIndexFromVertex(v);
                let s = this.get(v);

                if (!this.markups[v] || !(this.markups[v][0] in data)) {
                    if (s !== 0) result[i] = data.plain[s + 1];
                } else {
                    var _markups$v = _slicedToArray(this.markups[v], 2);

                    let type = _markups$v[0],
                        label = _markups$v[1];


                    if (type !== 'label' || s !== 0) {
                        result[i] = data[type][s + 1];
                    } else if (s === 0 && label.length === 1 && isNaN(parseFloat(label))) {
                        result[i] = label.toLowerCase();
                    }
                }
            }
        }

        result = result.join('');

        // Add lines & arrows

        for (let _ref of this.lines) {
            var _ref2 = _slicedToArray(_ref, 3);

            let start = _ref2[0];
            let end = _ref2[1];
            let arrow = _ref2[2];

            result += `{${arrow ? 'AR' : 'LN'} ${this.vertex2coord(start)} ${this.vertex2coord(end)}}${lb}`;
        }

        return (lb + result.trim()).split(lb).map(l => `$$ ${l}`).join(lb);
    }

    getPositionHash() {
        return helper.hash(JSON.stringify(this.arrangement));
    }

    getHash() {
        return helper.hash(JSON.stringify([this.getPositionHash(), this.captures, this.markups, this.ghosts, this.lines]));
    }
}

module.exports = Board;

/***/ }),

/***/ "./src/modules/boardmatcher.js":
/*!*************************************!*\
  !*** ./src/modules/boardmatcher.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

const sgf = __webpack_require__(/*! @sabaki/sgf */ "./node_modules/@sabaki/sgf/src/main.js");

let _shapes = null;
let equals = v => w => w[0] === v[0] && w[1] === v[1];

exports.getSymmetries = function ([x, y]) {
    let f = ([x, y]) => [[x, y], [-x, y], [x, -y], [-x, -y]];
    return [...f([x, y]), ...f([y, x])];
};

exports.getBoardSymmetries = function (board, vertex) {
    let mx = board.width - 1,
        my = board.height - 1;

    let mod = (x, m) => (x % m + m) % m;

    return exports.getSymmetries(vertex).map(([x, y]) => [mod(x, mx), mod(y, my)]);
};

exports.readShapes = function (content) {
    let tree = sgf.parse(content, { encoding: null })[0];
    let result = [];

    for (let i = 0; i < tree.subtrees.length; i++) {
        let node = tree.subtrees[i].nodes[0];
        let anchors = node.MA.map(x => [...sgf.parseVertex(x), node.AB.includes(x) ? 1 : -1]);
        let vertices = ['AW', 'CR', 'AB'].map((x, i) => (node[x] || []).map(y => [...sgf.parseVertex(y), i - 1])).reduce((acc, x) => [...acc, ...x], []);

        let data = {};

        if ('C' in node) {
            for (let _ref of node.C[0].trim().split(', ').map(x => x.split(': '))) {
                var _ref2 = _slicedToArray(_ref, 2);

                let key = _ref2[0];
                let value = _ref2[1];

                data[key] = value;
            }
        }

        result.push(Object.assign({
            name: node.N[0],
            anchors,
            vertices
        }, data));
    }

    return result;
};

exports.cornerMatch = function (vertices, board) {
    let hypotheses = Array(8).fill(true);
    let hypothesesInvert = Array(8).fill(true);

    for (let _ref3 of vertices) {
        var _ref4 = _slicedToArray(_ref3, 3);

        let x = _ref4[0];
        let y = _ref4[1];
        let sign = _ref4[2];

        let representatives = exports.getBoardSymmetries(board, [x, y]);

        for (let i = 0; i < hypotheses.length; i++) {
            if (hypotheses[i] && board.get(representatives[i]) !== sign) hypotheses[i] = false;
            if (hypothesesInvert[i] && board.get(representatives[i]) !== -sign) hypothesesInvert[i] = false;
        }

        if (!hypotheses.includes(true) && !hypothesesInvert.includes(true)) return null;
    }

    let i = [...hypotheses, ...hypothesesInvert].indexOf(true);
    return i < 8 ? [i, false] : [i - 8, true];
};

exports.shapeMatch = function (shape, board, vertex) {
    if (!board.hasVertex(vertex)) return null;

    let sign = board.get(vertex);
    if (sign === 0) return null;
    let equalsVertex = equals(vertex);

    for (let anchor of shape.anchors) {
        let hypotheses = Array(8).fill(true);
        let i = 0;

        if (shape.size != null && (board.width !== board.height || board.width !== +shape.size)) continue;

        if (shape.type === 'corner' && !exports.getBoardSymmetries(board, anchor.slice(0, 2)).some(equalsVertex)) continue;

        // Hypothesize vertex === anchor

        for (let _ref5 of shape.vertices) {
            var _ref6 = _slicedToArray(_ref5, 3);

            let x = _ref6[0];
            let y = _ref6[1];
            let s = _ref6[2];

            let diff = [x - anchor[0], y - anchor[1]];
            let symm = exports.getSymmetries(diff);

            for (let k = 0; k < symm.length; k++) {
                if (!hypotheses[k]) continue;
                let w = [vertex[0] + symm[k][0], vertex[1] + symm[k][1]];

                if (!board.hasVertex(w) || board.get(w) !== s * sign * anchor[2]) hypotheses[k] = false;
            }

            i = hypotheses.indexOf(true);
            if (i < 0) break;
        }

        if (i >= 0) return [i, sign !== anchor[2]];
    }

    return null;
};

exports.getMoveInterpretation = function (board, vertex, { shapes = null } = {}) {
    if (!board.hasVertex(vertex)) return 'Pass';

    let sign = board.get(vertex);
    let neighbors = board.getNeighbors(vertex);

    // Check atari

    if (neighbors.some(v => board.get(v) === -sign && board.getLiberties(v).length === 1)) return 'Atari';

    // Check connection

    let friendly = neighbors.filter(v => board.get(v) === sign);
    if (friendly.length === neighbors.length) return 'Fill';
    if (friendly.length >= 2) return 'Connect';

    // Load shape library if needed

    if (shapes == null) {
        if (_shapes == null) {
            _shapes = exports.readShapes(__webpack_require__(/*! ../../data/shapes.sgf */ "./data/shapes.sgf"));
        }

        shapes = _shapes;
    }

    // Match shape

    for (let shape of shapes) {
        if (exports.shapeMatch(shape, board, vertex)) return shape.name;
    }

    // Determine position to edges

    let equalsVertex = equals(vertex);

    if (equalsVertex([(board.width - 1) / 2, (board.height - 1) / 2])) return 'Tengen';

    let diff = board.getCanonicalVertex(vertex).map(x => x + 1);

    if (!equals(diff)([4, 4]) && board.getHandicapPlacement(9).some(equalsVertex)) return 'Hoshi';

    if (diff[1] <= 6) return diff.join('-') + ' point';

    return null;
};

/***/ }),

/***/ "./src/modules/dialog.js":
/*!*******************************!*\
  !*** ./src/modules/dialog.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.min.js");

const h = _require.h,
      render = _require.render;

const helper = __webpack_require__(/*! ./helper */ "./src/modules/helper.js");

let hiddenStyle = {
    opacity: 0,
    pointerEvents: 'none'
};

let fileInput = render(h('input', {
    type: 'file',
    style: hiddenStyle
}), document.body);

exports.showMessageBox = function (message, type = 'info', buttons = ['OK'], cancelId = 0) {
    if (buttons.length <= 1) {
        alert(message);
        return 0;
    } else {
        return confirm(message) ? 0 : cancelId;
    }
};

exports.showOpenDialog = function (options, callback) {
    let clone = fileInput.cloneNode();
    fileInput.parentNode.replaceChild(clone, fileInput);
    fileInput = clone;

    fileInput.multiple = options.properties.includes('multiSelections');
    fileInput.value = '';

    fileInput.addEventListener('change', evt => {
        callback({ result: evt.currentTarget.files });
    });

    fileInput.click();
};

exports.showSaveDialog = function (options, callback) {
    let type = options.type,
        name = options.name,
        content = options.content;

    let href = `data:${type};charset=utf-8,${encodeURIComponent(content)}`;

    let element = render(h('a', {
        href,
        style: hiddenStyle,
        download: name
    }), document.body);

    element.click();
    element.remove();
};

exports.showInputBox = function (message, onSubmit = helper.noop, onCancel = helper.noop) {
    sabaki.setState({
        inputBoxText: message,
        showInputBox: true,
        onInputBoxSubmit: onSubmit,
        onInputBoxCancel: onCancel
    });
};

exports.closeInputBox = function () {
    var _sabaki$state$onInput = sabaki.state.onInputBoxCancel;
    let onInputBoxCancel = _sabaki$state$onInput === undefined ? helper.noop : _sabaki$state$onInput;

    sabaki.setState({ showInputBox: false });
    onInputBoxCancel();
};

/***/ }),

/***/ "./src/modules/fileformats/gib.js":
/*!****************************************!*\
  !*** ./src/modules/fileformats/gib.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

const Buffer = __webpack_require__(/*! buffer */ "./src/modules/shims/buffer.js");
const fs = __webpack_require__(/*! fs */ "./src/modules/shims/fs.js");
const sgf = __webpack_require__(/*! @sabaki/sgf */ "./node_modules/@sabaki/sgf/src/main.js");
const gametree = __webpack_require__(/*! ../gametree */ "./src/modules/gametree.js");
const Board = __webpack_require__(/*! ../board */ "./src/modules/board.js");

exports.meta = {
    name: 'Tygem GIB',
    extensions: ['gib']
};

function makeResult(grlt, zipsu) {
    // Arguments are expected to be numbers
    // Given a game result type and a score, return a text result.

    // The GRLT tag contains the type of result:
    // 0: B+n   1: W+n   3: B+R   4: W+R   7: B+T   8: W+T

    let easycases = { '3': 'B+R', '4': 'W+R', '7': 'B+T', '8': 'W+T' };

    if (easycases[grlt] !== undefined) {
        return easycases[grlt];
    }

    // If there is a score, the ZIPSU tag contains it (multiplied by 10).

    if (grlt === 0 || grlt === 1) {
        let winner = grlt === 0 ? 'B' : 'W';
        let margin = (zipsu / 10).toString();
        return winner + '+' + margin;
    }

    // We couldn't work it out...

    return '';
}

function getResult(line, grltRegex, zipsuRegex) {
    // Takes a line and two regexes, the first finding the GRLT (game
    // result type, e.g. 3 == B+R) and the second finding the score.

    let result = '';
    let match = grltRegex.exec(line);

    if (match) {
        let grlt = parseFloat(match[1]);
        match = zipsuRegex.exec(line);
        if (match) {
            let zipsu = parseFloat(match[1]);
            result = makeResult(grlt, zipsu);
        }
    }

    return result;
}

function parsePlayerName(raw) {
    let name = '';
    let rank = '';

    // If there's exactly one opening bracket...

    let foo = raw.split('(');
    if (foo.length === 2) {
        // And if the closing bracket is right at the end...

        if (foo[1].indexOf(')') === foo[1].length - 1) {

            // Then extract the rank...

            name = foo[0].trim();
            rank = foo[1].slice(0, foo[1].length - 1);
        }
    }

    if (name === '') {
        return [raw, ''];
    } else {
        return [name, rank];
    }
}

exports.parse = function (content) {
    let lines = content.split('\n');
    let tree = gametree.new();
    let root = {};
    tree.nodes.push(root);

    root.CA = ['UTF-8'];
    root.FF = [4];
    root.GM = [1];
    root.SZ = [19];

    let node = root;

    let regex;
    let match;

    for (let n = 0; n < lines.length; n++) {
        let line = lines[n].trim();

        if (line.startsWith('\\[GAMEBLACKNAME=') && line.endsWith('\\]')) {

            let s = line.slice(16, -2);

            var _parsePlayerName = parsePlayerName(s),
                _parsePlayerName2 = _slicedToArray(_parsePlayerName, 2);

            let name = _parsePlayerName2[0],
                rank = _parsePlayerName2[1];

            if (name) {
                root.PB = [name];
            }
            if (rank) {
                root.BR = [rank];
            }
        } else if (line.startsWith('\\[GAMEWHITENAME=') && line.endsWith('\\]')) {
            let s = line.slice(16, -2);

            var _parsePlayerName3 = parsePlayerName(s),
                _parsePlayerName4 = _slicedToArray(_parsePlayerName3, 2);

            let name = _parsePlayerName4[0],
                rank = _parsePlayerName4[1];

            if (name) {
                root.PW = [name];
            }
            if (rank) {
                root.WR = [rank];
            }
        } else if (line.startsWith('\\[GAMEINFOMAIN=')) {

            if (root.RE === undefined) {
                let result = getResult(line, /GRLT:(\d+),/, /ZIPSU:(\d+),/);
                if (result !== '') {
                    root.RE = [result];
                }
            }

            if (root.KM === undefined) {
                regex = /GONGJE:(\d+),/;
                match = regex.exec(line);
                if (match) {
                    let komi = parseFloat(match[1]) / 10;
                    root.KM = [komi];
                }
            }
        } else if (line.startsWith('\\[GAMETAG=')) {
            if (root.DT === undefined) {
                regex = /C(\d\d\d\d):(\d\d):(\d\d)/;
                match = regex.exec(line);
                if (match) {
                    root.DT = [match[1] + '-' + match[2] + '-' + match[3]];
                }
            }

            if (root.RE === undefined) {
                let result = getResult(line, /,W(\d+),/, /,Z(\d+),/);
                if (result !== '') {
                    root.RE = [result];
                }
            }

            if (root.KM === undefined) {
                regex = /,G(\d+),/;
                match = regex.exec(line);
                if (match) {
                    let komi = parseFloat(match[1]) / 10;
                    root.KM = [komi];
                }
            }
        } else if (line.slice(0, 3) === 'INI') {
            let setup = line.split(' ');
            let handicap = 0;
            let p = Math.floor(parseFloat(setup[3]));

            if (Number.isNaN(p) === false) {
                handicap = p;
            }

            if (handicap >= 2 && handicap <= 9) {
                root.HA = [handicap];
                root.AB = [];

                let tmp = new Board(); // Created solely for .getHandicapPlacement()

                let points = tmp.getHandicapPlacement(handicap, true);

                for (let p of points) {
                    var _p = _slicedToArray(p, 2);

                    let x = _p[0],
                        y = _p[1];

                    let s = sgf.stringifyVertex([x, y]);
                    root.AB.push(s);
                }
            }
        } else if (line.slice(0, 3) === 'STO') {
            let elements = line.split(' ');

            if (elements.length < 6) {
                continue;
            }

            let key;

            if (elements[3] === '1') {
                key = 'B';
            } else {
                key = 'W';
            }

            let x = Math.floor(parseFloat(elements[4]));
            let y = Math.floor(parseFloat(elements[5]));

            if (Number.isNaN(x) || Number.isNaN(y)) {
                continue;
            }

            let val = sgf.stringifyVertex([x, y]);

            let node = {};
            tree.nodes.push(node);
            node[key] = [val];
        }
    }

    return [tree];
};

exports.parseFile = function (filename) {};

/***/ }),

/***/ "./src/modules/fileformats/index.js":
/*!******************************************!*\
  !*** ./src/modules/fileformats/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const fs = __webpack_require__(/*! fs */ "./src/modules/shims/fs.js");

var _require = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");

const extname = _require.extname;


let sgf = __webpack_require__(/*! ./sgf */ "./src/modules/fileformats/sgf.js");
let ngf = __webpack_require__(/*! ./ngf */ "./src/modules/fileformats/ngf.js");
let gib = __webpack_require__(/*! ./gib */ "./src/modules/fileformats/gib.js");

let modules = { sgf, ngf, gib };

exports = module.exports = modules;

let extensions = Object.keys(modules).map(key => modules[key].meta);
let combinedExtensions = extensions.map(x => x.extensions).reduce((acc, x) => [...acc, ...x], []);

exports.meta = [{ name: 'Game Records', extensions: combinedExtensions }, ...extensions];

exports.getModuleByExtension = function (extension) {
    return modules[Object.keys(modules).find(key => modules[key].meta.extensions.includes(extension.toLowerCase()))] || sgf;
};

exports.parseFile = function (file, onProgress, callback) {
    let extension = extname(file.name).slice(1);
    let m = exports.getModuleByExtension(extension);

    fs.readFile(file, (err, content) => {
        callback({ trees: m.parse(content, onProgress) });
    });
};

/***/ }),

/***/ "./src/modules/fileformats/ngf.js":
/*!****************************************!*\
  !*** ./src/modules/fileformats/ngf.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

const Buffer = __webpack_require__(/*! buffer */ "./src/modules/shims/buffer.js");
const fs = __webpack_require__(/*! fs */ "./src/modules/shims/fs.js");
const sgf = __webpack_require__(/*! @sabaki/sgf */ "./node_modules/@sabaki/sgf/src/main.js");
const gametree = __webpack_require__(/*! ../gametree */ "./src/modules/gametree.js");
const Board = __webpack_require__(/*! ../board */ "./src/modules/board.js");

exports.meta = {
    name: 'wBaduk NGF',
    extensions: ['ngf']
};

exports.parse = function (content) {
    let lines = content.split('\n');
    let tree = gametree.new();
    let root = {};
    tree.nodes.push(root);

    root.CA = ['UTF-8'];
    root.FF = [4];
    root.GM = [1];
    root.SZ = [19];

    // These array accesses might throw if out of range, that's fine.
    // The caller will deal with the exception.

    let boardsize = Math.floor(parseFloat(lines[1]));
    let handicap = Math.floor(parseFloat(lines[5]));
    let pw = lines[2].split(' ')[0];
    let pb = lines[3].split(' ')[0];
    let rawdate = lines[8].slice(0, 8);
    let komi = Math.floor(parseFloat(lines[7]));

    if (Number.isNaN(boardsize)) {
        boardsize = 19;
    }
    if (Number.isNaN(handicap)) {
        handicap = 0;
    }
    if (Number.isNaN(komi)) {
        komi = 0;
    }

    let line2 = lines[2].trim().split(' ');
    if (line2.length > 1) {
        let whiterank = line2[line2.length - 1];
        whiterank = whiterank.replace('DP', 'p').replace('K', 'k').replace('D', 'd');
        root.WR = [whiterank];
    }

    let line3 = lines[3].trim().split(' ');
    if (line3.length > 1) {
        let blackrank = line3[line3.length - 1];
        blackrank = blackrank.replace('DP', 'p').replace('K', 'k').replace('D', 'd');
        root.BR = [blackrank];
    }

    if (handicap === 0 && komi === Math.floor(komi)) {
        komi += 0.5;
    }

    let winner = '';
    let margin = '';

    if (lines[10].includes('resign')) {
        margin = 'R';
    }
    if (lines[10].includes('time')) {
        margin = 'T';
    }
    if (lines[10].includes('hite win') || lines[10].includes('lack lose')) {
        winner = 'W';
    }
    if (lines[10].includes('lack win') || lines[10].includes('hite lose')) {
        winner = 'B';
    }
    if (margin === '') {

        let score = null;
        let strings = lines[10].split(' ');

        // Try to find score by assuming any float found is the score.

        for (let s of strings) {
            let p = parseFloat(s);
            if (Number.isNaN(p) === false) {
                score = p;
            }
        }

        if (score !== null) {
            margin = score.toString();
        }
    }

    if (winner !== '') {
        root.RE = [winner + '+' + margin];
    }

    root.SZ = [boardsize];

    if (handicap >= 2) {
        root.HA = [handicap];
        root.AB = [];

        let tmp = new Board(boardsize, boardsize); // Created solely for .getHandicapPlacement()

        let points = tmp.getHandicapPlacement(handicap, true);

        for (let p of points) {
            var _p = _slicedToArray(p, 2);

            let x = _p[0],
                y = _p[1];

            let s = sgf.stringifyVertex([x, y]);
            root.AB.push(s);
        }
    }

    if (komi) {
        root.KM = [komi];
    }

    if (rawdate.length === 8) {
        let ok = true;
        for (let n = 0; n < 8; n++) {
            let tmp = parseFloat(rawdate.charAt(n));
            if (Number.isNaN(tmp)) {
                ok = false;
            }
        }
        if (ok) {
            let date = '';
            date += rawdate.slice(0, 4);
            date += '-' + rawdate.slice(4, 6);
            date += '-' + rawdate.slice(6, 8);
            root.DT = [date];
        }
    }

    root.PW = [pw];
    root.PB = [pb];

    // We currently search for moves in all lines. Current files start moves at line 12.
    // But some older files have less headers and start moves earlier.

    for (let n = 0; n < lines.length; n++) {
        let line = lines[n].trim();

        if (line.length >= 7) {

            if (line.slice(0, 2) === 'PM') {

                let key = line.charAt(4);

                if (key === 'B' || key === 'W') {

                    // Coordinates are letters but with 'B' as the lowest.

                    let x = line.charCodeAt(5) - 66;
                    let y = line.charCodeAt(6) - 66;

                    let val = sgf.stringifyVertex([x, y]);

                    let node = {};
                    tree.nodes.push(node);
                    node[key] = [val];
                }
            }
        }
    }

    return [tree];
};

exports.parseFile = function (filename) {};

/***/ }),

/***/ "./src/modules/fileformats/sgf.js":
/*!****************************************!*\
  !*** ./src/modules/fileformats/sgf.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const sgf = __webpack_require__(/*! @sabaki/sgf */ "./node_modules/@sabaki/sgf/src/main.js");

var _require = __webpack_require__(/*! ../helper */ "./src/modules/helper.js");

const getId = _require.getId;


exports.meta = {
    name: 'Smart Game Format',
    extensions: ['sgf']
};

exports.parse = function (content, onProgress = () => {}, ignoreEncoding = false) {
    let encoding = ignoreEncoding ? null : 'ISO-8859-1';
    return sgf.parse(content, { getId, onProgress, encoding });
};

exports.parseFile = function (filename, onProgress = () => {}) {
    return sgf.parseFile(filename, { getId, onProgress });
};

/***/ }),

/***/ "./src/modules/gamesort.js":
/*!*********************************!*\
  !*** ./src/modules/gamesort.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

const natsort = __webpack_require__(/*! natsort */ "./node_modules/natsort/index.js");
const sgf = __webpack_require__(/*! @sabaki/sgf */ "./node_modules/@sabaki/sgf/src/main.js");
const helper = __webpack_require__(/*! ./helper */ "./src/modules/helper.js");
const gametree = __webpack_require__(/*! ./gametree */ "./src/modules/gametree.js");

function extractProperty(gametree, property) {
    return property in gametree.nodes[0] ? gametree.nodes[0][property][0] : '';
}

// player : 'BR' | 'WR'
function sortRank(gameTrees, player) {
    return stableSort(gameTrees, (tr1, tr2) => {
        var _map = [tr1, tr2].map(tree => weightRank(extractProperty(tree, player))),
            _map2 = _slicedToArray(_map, 2);

        let weighted1 = _map2[0],
            weighted2 = _map2[1];

        return compareResult(weighted1, weighted2);
    });
}

// rank : string like '30k', '1d', '1p'
function weightRank(rank) {
    let rank_number = parseFloat(rank);
    if (isNaN(rank_number)) {
        return -Infinity;
    } else {
        let weight = rank.includes('k') ? -1 : rank.includes('p') ? 10 : 1;
        return weight * rank_number;
    }
}

// name : 'PB' | 'PW' | 'GN' | 'EV'
function sortName(gameTrees, name) {
    return stableSort(gameTrees, (tr1, tr2) => {
        var _map3 = [tr1, tr2].map(tree => extractProperty(tree, name)),
            _map4 = _slicedToArray(_map3, 2);

        let name1 = _map4[0],
            name2 = _map4[1];

        return natsort({ insensitive: true })(name1, name2);
    });
}

function compareResult(item1, item2) {
    return item1 < item2 ? -1 : +(item1 !== item2);
}

function stableSort(ary, fn) {
    return ary.map((element, index) => [element, index]).sort((pair1, pair2) => {
        let result = fn(pair1[0], pair2[0]);
        if (result === 0) {
            return pair1[1] - pair2[1];
        } else {
            return result;
        }
    }).map(pair => pair[0]);
}

exports.reverse = function (gameTrees) {
    return gameTrees.slice().reverse();
};

exports.byBlackRank = function (gameTrees) {
    return sortRank(gameTrees, 'BR');
};

exports.byWhiteRank = function (gameTrees) {
    return sortRank(gameTrees, 'WR');
};

exports.byPlayerBlack = function (gameTrees) {
    return sortName(gameTrees, 'PB');
};

exports.byPlayerWhite = function (gameTrees) {
    return sortName(gameTrees, 'PW');
};

exports.byGameName = function (gameTrees) {
    return sortName(gameTrees, 'GN');
};

exports.byEvent = function (gameTrees) {
    return sortName(gameTrees, 'EV');
};

exports.byDate = function (gameTrees) {
    return stableSort(gameTrees, (tr1, tr2) => {
        var _map$map$map = [tr1, tr2].map(tree => extractProperty(tree, 'DT')).map(x => sgf.parseDates(x)).map(x => x ? sgf.stringifyDates(x.sort(helper.lexicalCompare)) : ''),
            _map$map$map2 = _slicedToArray(_map$map$map, 2);

        let date1 = _map$map$map2[0],
            date2 = _map$map$map2[1];

        return compareResult(date1, date2);
    });
};

exports.byNumberOfMoves = function (gameTrees) {
    return stableSort(gameTrees, (tr1, tr2) => {
        return compareResult(gametree.getHeight(tr1), gametree.getHeight(tr2));
    });
};

/***/ }),

/***/ "./src/modules/gametree.js":
/*!*********************************!*\
  !*** ./src/modules/gametree.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

const sgf = __webpack_require__(/*! @sabaki/sgf */ "./node_modules/@sabaki/sgf/src/main.js");
const Board = __webpack_require__(/*! ./board */ "./src/modules/board.js");
const helper = __webpack_require__(/*! ./helper */ "./src/modules/helper.js");

const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

exports.new = function () {
    return {
        id: helper.getId(),
        nodes: [],
        subtrees: [],
        current: null,
        parent: null
    };
};

exports.clone = function (tree, parent = null) {
    let c = Object.assign(exports.new(), {
        current: tree.current,
        parent
    });

    for (let node of tree.nodes) {
        let cn = {};

        for (let key in node) {
            if (key === 'board') continue;

            if (Array.isArray(node[key])) {
                cn[key] = [...node[key]];
            } else {
                cn[key] = node[key];
            }
        }

        c.nodes.push(cn);
    }

    for (let subtree of tree.subtrees) {
        c.subtrees.push(exports.clone(subtree, c));
    }

    return c;
};

exports.getRoot = function (tree) {
    while (tree.parent !== null) tree = tree.parent;
    return tree;
};

exports.getRootProperty = function (tree, property, fallback = null) {
    let node = exports.getRoot(tree).nodes[0];
    if (!node) return fallback;

    let result = '';
    if (property in node) result = node[property][0];

    return result === '' ? fallback : result;
};

exports.getHeight = function (tree) {
    let height = 0;

    for (let subtree of tree.subtrees) {
        height = Math.max(exports.getHeight(subtree), height);
    }

    return height + tree.nodes.length;
};

exports.getCurrentHeight = function (tree) {
    let height = tree.nodes.length;

    if (tree.subtrees.length !== 0) height += exports.getCurrentHeight(tree.subtrees[tree.current]);

    return height;
};

exports.getTreesRecursive = function (tree) {
    let result = [tree];

    for (let subtree of tree.subtrees) {
        result.push(...exports.getTreesRecursive(subtree));
    }

    return result;
};

exports.getLevel = function (tree, index) {
    return index + (tree.parent ? exports.getLevel(tree.parent, tree.parent.nodes.length) : 0);
};

exports.getSection = function (tree, level) {
    if (level < 0) return [];
    if (level < tree.nodes.length) return [[tree, level]];

    let sections = [];

    for (let subtree of tree.subtrees) {
        sections.push(...exports.getSection(subtree, level - tree.nodes.length));
    }

    return sections;
};

exports.navigate = function (tree, index, step) {
    if (index + step >= 0 && index + step < tree.nodes.length) {
        return [tree, index + step];
    } else if (index + step < 0 && tree.parent != null) {
        let prev = tree.parent;
        let newstep = index + step + 1;

        return exports.navigate(prev, prev.nodes.length - 1, newstep);
    } else if (index + step >= tree.nodes.length && tree.subtrees.length !== 0) {
        let next = tree.subtrees[tree.current];
        let newstep = index + step - tree.nodes.length;

        return exports.navigate(next, 0, newstep);
    }

    return null;
};

exports.makeHorizontalNavigator = function (tree, index) {
    let root = exports.getRoot(tree);
    let level = exports.getLevel(tree, index, root);
    let sections = exports.getSection(root, level);
    let j = sections.map(x => x[0]).indexOf(tree);

    return {
        navigate(step) {
            if (j + step >= 0 && j + step < sections.length) {
                j = j + step;
            } else if (j + step >= sections.length) {
                step = j + step - sections.length;
                sections = exports.getSection(root, ++level);
                j = 0;
                if (sections.length != 0) this.navigate(step);
            } else if (j + step < 0) {
                step = j + step + 1;
                sections = exports.getSection(root, --level);
                j = sections.length - 1;
                if (sections.length != 0) this.navigate(step);
            }
        },
        value() {
            return j < sections.length && j >= 0 ? sections[j] : null;
        },
        next() {
            this.navigate(1);
            return this.value();
        },
        prev() {
            this.navigate(-1);
            return this.value();
        }
    };
};

exports.split = function (tree, index) {
    if (index < 0 || index >= tree.nodes.length - 1) return tree;

    let newnodes = tree.nodes.slice(0, index + 1);
    tree.nodes = tree.nodes.slice(index + 1);

    let newtree = exports.new();
    newtree.nodes = newnodes;
    newtree.subtrees = [tree];
    newtree.parent = tree.parent;
    newtree.current = 0;
    tree.parent = newtree;

    if (newtree.parent) {
        newtree.parent.subtrees[newtree.parent.subtrees.indexOf(tree)] = newtree;
    }

    return newtree;
};

exports.reduce = function (tree) {
    if (tree.subtrees.length != 1) return tree;

    tree.nodes.push(...tree.subtrees[0].nodes);
    tree.current = tree.subtrees[0].current;
    tree.subtrees = tree.subtrees[0].subtrees;

    for (let subtree of tree.subtrees) {
        subtree.parent = tree;
    }

    return tree;
};

exports.onCurrentTrack = function (tree) {
    return !tree.parent || tree.parent.subtrees[tree.parent.current] == tree && exports.onCurrentTrack(tree.parent);
};

exports.onMainTrack = function (tree) {
    return !tree.parent || tree.parent.subtrees[0] == tree && exports.onMainTrack(tree.parent);
};

exports.getMatrixDict = function (tree, matrix = null, dict = {}, xshift = 0, yshift = 0) {
    if (!matrix) matrix = [...Array(exports.getHeight(tree))].map(_ => []);

    let hasCollisions = true;
    while (hasCollisions) {
        hasCollisions = false;

        for (let y = 0; y < Math.min(tree.nodes.length + 1, matrix.length - yshift); y++) {
            if (xshift >= matrix[yshift + y].length - (y === tree.nodes.length)) continue;

            hasCollisions = true;
            xshift++;
            break;
        }
    }

    for (let y = 0; y < tree.nodes.length; y++) {
        matrix[yshift + y].length = xshift + 1;
        matrix[yshift + y][xshift] = [tree, y];
        dict[tree.id + '-' + y] = [xshift, yshift + y];
    }

    for (let k = 0; k < tree.subtrees.length; k++) {
        let subtree = tree.subtrees[k];
        exports.getMatrixDict(subtree, matrix, dict, xshift + k, yshift + tree.nodes.length);
    }

    return [matrix, dict];
};

exports.getMatrixWidth = function (y, matrix) {
    let keys = [...Array(10)].map((_, i) => i + y - 4).filter(i => i >= 0 && i < matrix.length);

    let padding = Math.min(...keys.map(i => {
        for (let j = 0; j < matrix[i].length; j++) if (matrix[i][j] != null) return j;
        return 0;
    }));

    let width = Math.max(...keys.map(i => matrix[i].length)) - padding;

    return [width, padding];
};

exports.getBoard = function (tree, index, baseboard = null) {
    if (index >= tree.nodes.length) return null;

    let node = tree.nodes[index];
    let vertex = null;
    let board = null;

    // Get base board

    if (!baseboard) {
        let prev = exports.navigate(tree, index, -1);

        if (!prev) {
            let size = [19, 19];

            if ('SZ' in node) {
                size = node.SZ[0].toString();

                if (size.includes(':')) size = size.split(':');else size = [size, size];

                size = size.map(x => +x);
            }

            baseboard = new Board(...size);
        } else {
            let prevNode = prev[0].nodes[prev[1]];
            baseboard = prevNode.board || exports.getBoard(...prev);
        }
    }

    // Make move

    let data = { B: 1, W: -1 };

    for (let prop in data) {
        if (!(prop in node)) continue;

        vertex = sgf.parseVertex(node[prop][0]);
        board = baseboard.makeMove(data[prop], vertex);
        break;
    }

    if (!board) board = baseboard.clone();

    // Add markup

    data = { AW: -1, AE: 0, AB: 1 };

    for (let prop in data) {
        if (!(prop in node)) continue;

        for (let value of node[prop]) {
            for (let vertex of sgf.parseCompressedVertices(value)) {
                if (!board.hasVertex(vertex)) continue;
                board.set(vertex, data[prop]);
            }
        }
    }

    if (vertex != null) {
        board.markups[vertex] = ['point', ''];
    }

    data = { CR: 'circle', MA: 'cross', SQ: 'square', TR: 'triangle' };

    for (let prop in data) {
        if (!(prop in node)) continue;

        for (let value of node[prop]) {
            for (let vertex of sgf.parseCompressedVertices(value)) {
                board.markups[vertex] = [data[prop], ''];
            }
        }
    }

    if ('LB' in node) {
        for (let composed of node.LB) {
            let sep = composed.indexOf(':');
            let point = composed.slice(0, sep);
            let label = composed.slice(sep + 1);

            board.markups[sgf.parseVertex(point)] = ['label', label];
        }
    }

    if ('L' in node) {
        for (let i = 0; i < node.L.length; i++) {
            let point = node.L[i];
            let label = alpha[i];
            if (label == null) return;

            board.markups[sgf.parseVertex(point)] = ['label', label];
        }
    }

    for (let type of ['AR', 'LN']) {
        if (!(type in node)) continue;

        for (let composed of node[type]) {
            let sep = composed.indexOf(':');

            var _map = [composed.slice(0, sep), composed.slice(sep + 1)].map(sgf.parseVertex),
                _map2 = _slicedToArray(_map, 2);

            let v1 = _map2[0],
                v2 = _map2[1];


            board.lines.push([v1, v2, type === 'AR']);
        }
    }

    // Add variation overlays

    let addOverlay = (node, type) => {
        let v, sign;

        if ('B' in node) {
            v = sgf.parseVertex(node.B[0]);
            sign = 1;
        } else if ('W' in node) {
            v = sgf.parseVertex(node.W[0]);
            sign = -1;
        } else {
            return;
        }

        if (!board.hasVertex(v) || v in board.ghosts) return;

        let types = [];

        if (type === 'child') {
            types.push(`ghost_${sign}`);

            if ('BM' in node) {
                types.push('badmove');
            } else if ('DO' in node) {
                types.push('doubtfulmove');
            } else if ('IT' in node) {
                types.push('interestingmove');
            } else if ('TE' in node) {
                types.push('goodmove');
            }
        } else if (type === 'sibling') {
            types.push(`siblingghost_${sign}`);
        }

        board.ghosts[v] = types;
    };

    if (index === tree.nodes.length - 1) {
        for (let subtree of tree.subtrees) {
            if (subtree.nodes.length === 0) continue;
            addOverlay(subtree.nodes[0], 'child');
        }
    } else if (index < tree.nodes.length - 1) {
        addOverlay(tree.nodes[index + 1], 'child');
    }

    if (index === 0 && tree.parent) {
        for (let subtree of tree.parent.subtrees) {
            if (subtree.nodes.length == 0) continue;
            addOverlay(subtree.nodes[0], 'sibling');
        }
    }

    node.board = board;
    return board;
};

exports.getJson = function (tree) {
    return JSON.stringify(tree, (name, val) => {
        let list = ['id', 'board', 'parent', 'current'];
        return list.includes(name) ? undefined : val;
    });
};

exports.fromJson = function (json) {
    let addInformation = tree => {
        tree.id = helper.getId();

        if (tree.subtrees.length > 0) tree.current = 0;

        for (let i = 0; i < tree.subtrees.length; i++) {
            tree.subtrees[i].parent = tree;
            addInformation(tree.subtrees[i]);
        }

        return tree;
    };

    let tree = JSON.parse(json);
    tree.parent = null;
    return addInformation(tree);
};

exports.getHash = function (tree) {
    return helper.hash(`${tree.nodes.map(exports.getJson).join('-')}-${tree.subtrees.map(exports.getHash).join('-')}`);
};

exports.getMatrixHash = function (tree) {
    return helper.hash(`${tree.id}-${tree.nodes.length}-${tree.subtrees.map(exports.getMatrixHash).join('-')}`);
};

/***/ }),

/***/ "./src/modules/helper.js":
/*!*******************************!*\
  !*** ./src/modules/helper.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {let id = 0;

exports.linebreak = process.platform === 'win32' ? '\r\n' : '\n';
exports.noop = () => {};

exports.getId = function () {
    return ++id;
};

exports.hash = function (str) {
    let hash = 0,
        chr;
    if (str.length == 0) return hash;

    for (let i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash = hash & hash;
    }

    return hash;
};

exports.floorEven = function (float) {
    let value = Math.floor(float);
    return value % 2 === 0 ? value : value - 1;
};

exports.equals = function (a, b) {
    if (a === b) return true;
    if (a == null || b == null) return a == b;

    let t = Object.prototype.toString.call(a);
    if (t !== Object.prototype.toString.call(b)) return false;

    let aa = t === '[object Array]';
    let ao = t === '[object Object]';

    if (aa) {
        if (a.length !== b.length) return false;
        for (let i = 0; i < a.length; i++) if (!exports.equals(a[i], b[i])) return false;
        return true;
    } else if (ao) {
        let kk = Object.keys(a);
        if (kk.length !== Object.keys(b).length) return false;
        for (let i = 0; i < kk.length; i++) {
            let k = kk[i];
            if (!(k in b)) return false;
            if (!exports.equals(a[k], b[k])) return false;
        }
        return true;
    }

    return false;
};

exports.shallowEquals = function (a, b) {
    return a == null || b == null ? a === b : a === b || a.length === b.length && a.every((x, i) => x == b[i]);
};

exports.vertexEquals = function ([a, b], [c, d]) {
    return a === c && b === d;
};

exports.lexicalCompare = function (a, b) {
    if (!a.length || !b.length) return a.length - b.length;
    return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : exports.lexicalCompare(a.slice(1), b.slice(1));
};

exports.typographer = function (input) {
    return input.replace(/\.{3}/g, '…').replace(/(\S)'/g, '$1’').replace(/(\S)"/g, '$1”').replace(/'(\S)/g, '‘$1').replace(/"(\S)/g, '“$1').replace(/(\s)-(\s)/g, '$1–$2');
};

exports.normalizeEndings = function (input) {
    return input.replace(/\r\n|\n\r|\r/g, '\n');
};

exports.popupMenu = function (template, x, y) {
    var _require = __webpack_require__(/*! electron */ "./src/modules/shims/electron.js");

    let remote = _require.remote;

    let setting = remote.require('./setting');
    let zoomFactor = +setting.get('app.zoom_factor');

    remote.Menu.buildFromTemplate(template).popup({
        x: Math.round(x * zoomFactor),
        y: Math.round(y * zoomFactor)
    });
};

exports.wait = function (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/modules/shims/Menu.js":
/*!***********************************!*\
  !*** ./src/modules/shims/Menu.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.min.js");

const h = _require.h,
      render = _require.render;

const classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

function hide() {
    document.getElementById('popupmenu-overlay').remove();
}

function show(velement, x, y) {
    let element = render(velement, document.body).childNodes[0];

    var _element$getBoundingC = element.getBoundingClientRect();

    let width = _element$getBoundingC.width,
        height = _element$getBoundingC.height;

    var _document$body$getBou = document.body.getBoundingClientRect();

    let bodyWidth = _document$body$getBou.width,
        bodyHeight = _document$body$getBou.height;


    element.style.left = (x + width <= bodyWidth ? x : Math.max(0, x - width)) + 'px';
    element.style.top = (y + height <= bodyHeight ? y : Math.max(0, y - height)) + 'px';
}

exports.buildFromTemplate = function (template) {
    return {
        popup: ({ x, y }) => show(h('section', {
            id: 'popupmenu-overlay',
            onClick: () => hide()
        }, h('ul', { class: 'popupmenu' }, template.map(item => h('li', {
            class: classNames({
                checked: item.checked,
                [item.type]: item.type
            }),
            onClick: () => item.click && item.click()
        }, item.label && item.label.replace(/&/g, ''))))), x, y)
    };
};

render(h('style', {}, `
    #popupmenu-overlay {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 1000;
    }

    .popupmenu {
            position: absolute;
            padding: 3px 0;
            max-height: calc(100% - 6px);
            max-width: 100%;
            overflow: auto;
            background: rgba(0, 0, 0, .9);
            box-shadow: 0 5px 10px rgba(0, 0, 0, .5);
            color: white;
            list-style: none;
        }
        .popupmenu li:not(.separator) {
            position: relative;
            display: block;
            height: 1em;
            padding: 7px 30px;
            line-height: 1em;
        }
        .popupmenu li.checked::before {
            content: '';
            position: absolute;
            width: 1em;
            height: 1em;
            left: 9px;
            top: 7px;
            background: url('/static/node_modules/octicons/build/svg/check.svg') left top/contain no-repeat;
            filter: invert(100%);
            -webkit-filter: invert(100%);
        }
        .popupmenu li.separator {
            height: 2px;
            margin: 3px 0;
            background: rgba(255, 255, 255, .3);
        }
        .popupmenu li:not(.separator):hover {
            background-color: #0050C0;
        }
        .popupmenu li:not(.separator):active {
            background-color: #0030A0;
    }
`), document.body);

/***/ }),

/***/ "./src/modules/shims/buffer.js":
/*!*************************************!*\
  !*** ./src/modules/shims/buffer.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
    from: x => x
};

/***/ }),

/***/ "./src/modules/shims/electron.js":
/*!***************************************!*\
  !*** ./src/modules/shims/electron.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const copy = __webpack_require__(/*! copy-text-to-clipboard */ "./node_modules/copy-text-to-clipboard/index.js");

var _require = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.min.js");

const h = _require.h,
      render = _require.render;

var _require2 = __webpack_require__(/*! ../helper */ "./src/modules/helper.js");

const noop = _require2.noop;


let hiddenStyle = { opacity: 0, pointerEvents: 'none' };

let app = {
    getName: () => 'Sabaki',
    getVersion: () => 'web',
    getPath: () => ''
};

module.exports = {
    app,
    ipcRenderer: { on: noop, send: noop },

    clipboard: {
        readText: () => prompt('Please paste contents here:'),

        writeText: content => {
            let element = render(h('a', {
                href: '#',
                style: hiddenStyle,

                onClick: evt => {
                    evt.preventDefault();
                    copy(content);
                }
            }), document.body);

            element.click();
            element.remove();
        }
    },

    shell: {
        openExternal: href => {
            let element = render(h('a', {
                href,
                target: '_blank',
                style: hiddenStyle
            }), document.body);

            element.click();
            element.remove();
        }
    },

    remote: {
        app,
        require: function (_require3) {
            function require(_x) {
                return _require3.apply(this, arguments);
            }

            require.toString = function () {
                return _require3.toString();
            };

            return require;
        }(x => x === './setting' ? __webpack_require__(/*! ../../setting */ "./src/setting.js") : {}),

        getCurrentWindow: () => ({
            show: noop,
            close: noop,
            on: noop,
            isMaximized: noop,
            isMinimized: noop,
            isFullScreen: noop,
            setFullScreen: noop,
            setMenuBarVisibility: noop,
            setAutoHideMenuBar: noop,
            setProgressBar: noop,
            setContentSize: noop,
            getContentSize: () => [0, 0],
            webContents: { setAudioMuted: noop }
        }),

        Menu: __webpack_require__(/*! ./Menu */ "./src/modules/shims/Menu.js")
    }
};

/***/ }),

/***/ "./src/modules/shims/empty.js":
/*!************************************!*\
  !*** ./src/modules/shims/empty.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [];

/***/ }),

/***/ "./src/modules/shims/fs.js":
/*!*********************************!*\
  !*** ./src/modules/shims/fs.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! ../helper */ "./src/modules/helper.js");

const noop = _require.noop;


module.exports = {
    readFile: (file, callback = noop) => {
        let reader = new FileReader();
        reader.onload = evt => callback(null, evt.target.result);
        reader.readAsText(file);
    },

    readFileSync: () => '',
    writeFileSync: noop,
    mkdirSync: noop,
    accessSync: noop
};

/***/ }),

/***/ "./src/modules/shims/iconv-lite.js":
/*!*****************************************!*\
  !*** ./src/modules/shims/iconv-lite.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
    encodingExists: () => false,
    decode: x => x
};

/***/ }),

/***/ "./src/modules/shims/jschardet.js":
/*!****************************************!*\
  !*** ./src/modules/shims/jschardet.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
    detect: () => ({
        confidence: 1,
        encoding: 'utf8'
    })
};

/***/ }),

/***/ "./src/modules/shims/noop.js":
/*!***********************************!*\
  !*** ./src/modules/shims/noop.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = () => {};

/***/ }),

/***/ "./src/modules/shims/prop-types.js":
/*!*****************************************!*\
  !*** ./src/modules/shims/prop-types.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! ../helper */ "./src/modules/helper.js");

const noop = _require.noop;


module.exports = {
    arrayOf: noop,
    oneOf: noop,
    oneOfType: noop
};

/***/ }),

/***/ "./src/modules/shims/util.js":
/*!***********************************!*\
  !*** ./src/modules/shims/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.TextDecoder = window.TextDecoder;

/***/ }),

/***/ "./src/modules/sound.js":
/*!******************************!*\
  !*** ./src/modules/sound.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const helper = __webpack_require__(/*! ./helper */ "./src/modules/helper.js");

let lastPachiIndex = -1;
let lastCaptureIndex = -1;

let captureSounds = [...Array(5)].map((_, i) => new Audio(`./data/capture${i}.mp3`));
let pachiSounds = [...Array(5)].map((_, i) => new Audio(`./data/${i}.mp3`));

let newGameSound = new Audio('./data/newgame.mp3');
let passSound = new Audio('./data/pass.mp3');

exports.playPachi = function (delay = 0) {
    let index = lastPachiIndex;

    while (index === lastPachiIndex) {
        index = Math.floor(Math.random() * pachiSounds.length);
    }

    lastPachiIndex = index;

    setTimeout(() => pachiSounds[index].play().catch(helper.noop), delay);
};

exports.playCapture = function (delay = 0) {
    let index = lastCaptureIndex;

    while (index === lastCaptureIndex) {
        index = Math.floor(Math.random() * captureSounds.length);
    }

    lastCaptureIndex = index;

    setTimeout(() => captureSounds[index].play().catch(helper.noop), delay);
};

exports.playPass = function (delay = 0) {
    setTimeout(() => passSound.play().catch(helper.noop), delay);
};

exports.playNewGame = function (delay = 0) {
    setTimeout(() => newGameSound.play().catch(helper.noop), delay);
};

/***/ }),

/***/ "./src/setting.js":
/*!************************!*\
  !*** ./src/setting.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js");
const fs = __webpack_require__(/*! fs */ "./src/modules/shims/fs.js");
const path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");

var _require = __webpack_require__(/*! electron */ "./src/modules/shims/electron.js");

const app = _require.app;


let settings = {};

let themesDict = null;

let defaults = {
    'app.always_show_result': false,
    'app.startup_check_updates': true,
    'app.startup_check_updates_delay': 3000,
    'app.loadgame_delay': 100,
    'app.enable_hardware_acceleration': true,
    'app.hide_busy_delay': 200,
    'app.zoom_factor': 1,
    'autoplay.sec_per_move': 1,
    'autoplay.max_sec_per_move': 99,
    'autoscroll.max_interval': 200,
    'autoscroll.min_interval': 50,
    'autoscroll.diff': 10,
    'cleanmarkup.cross': true,
    'cleanmarkup.triangle': true,
    'cleanmarkup.square': true,
    'cleanmarkup.circle': true,
    'cleanmarkup.line': true,
    'cleanmarkup.arrow': true,
    'cleanmarkup.label': true,
    'cleanmarkup.comments': false,
    'cleanmarkup.annotations': false,
    'cleanmarkup.hotspots': false,
    'comments.show_move_interpretation': true,
    'console.blocked_commands': ['boardsize', 'clear_board', 'play', 'genmove', 'undo', 'fixed_handicap', 'place_free_handicap', 'set_free_handicap', 'loadsgf', 'komi'],
    'console.max_history_count': 1000,
    'debug.dev_tools': false,
    'edit.click_currentvertex_to_remove': true,
    'edit.show_removenode_warning': true,
    'edit.show_removeothervariations_warning': true,
    'edit.undo_delay': 100,
    'engines.list': [],
    'file.show_reload_warning': true,
    'find.delay': 100,
    'game.default_board_size': 19,
    'game.default_komi': 6.5,
    'game.default_handicap': 0,
    'game.goto_end_after_loading': false,
    'game.navigation_sensitivity': 40,
    'game.show_ko_warning': true,
    'game.show_suicide_warning': true,
    'gamechooser.show_delay': 100,
    'gamechooser.thumbnail_size': 153,
    'graph.delay': 200,
    'graph.edge_color': '#eee',
    'graph.edge_inactive_color': '#777',
    'graph.edge_size': 2,
    'graph.edge_inactive_size': 1,
    'graph.grid_size': 26,
    'graph.node_active_color': '#f76047',
    'graph.node_bookmark_color': '#c678dd',
    'graph.node_color': '#eee',
    'graph.node_inactive_color': '#777',
    'graph.node_comment_color': '#6bb1ff',
    'graph.node_inactive_bookmark_color': '#643d6f',
    'graph.node_inactive_comment_color': '#365980',
    'graph.node_size': 6,
    'gtp.engine_quit_timeout': 3000,
    'gtp.move_delay': 300,
    'gtp.start_game_after_attach': true,
    'score.estimator_iterations': 100,
    'setting.overwrite.v0.16.0': ['console.blocked_commands', 'window.minheight'],
    'setting.overwrite.v0.17.1': ['graph.collapse_tokens_count'],
    'setting.overwrite.v0.19.0_1': ['window.minheight', 'graph.delay'],
    'setting.overwrite.v0.19.1': ['app.startup_check_updates_delay'],
    'setting.overwrite.v0.19.3': ['graph.grid_size', 'graph.node_size'],
    'setting.overwrite.v0.30.0-beta': ['graph.delay', 'window.minheight', 'window.minwidth'],
    'setting.overwrite.v0.33.0': ['console.max_history_count'],
    'setting.overwrite.v0.33.4': ['score.estimator_iterations'],
    'scoring.method': 'territory',
    'sgf.comment_properties': ['C', 'N', 'UC', 'GW', 'DM', 'GB', 'BM', 'TE', 'DO', 'IT'],
    'sound.capture_delay_max': 500,
    'sound.capture_delay_min': 300,
    'sound.enable': true,
    'theme.custom_whitestones': null,
    'theme.custom_blackstones': null,
    'theme.custom_background': null,
    'theme.current': null,
    'view.properties_height': 50,
    'view.properties_minheight': 20,
    'view.animated_stone_placement': true,
    'view.fuzzy_stone_placement': true,
    'view.show_menubar': true,
    'view.show_leftsidebar': false,
    'view.show_comments': true,
    'view.show_coordinates': false,
    'view.show_graph': true,
    'view.show_move_colorization': true,
    'view.show_next_moves': true,
    'view.show_siblings': true,
    'view.leftsidebar_width': 250,
    'view.leftsidebar_minwidth': 100,
    'view.sidebar_width': 280,
    'view.sidebar_minwidth': 100,
    'infooverlay.duration': 2000,
    'window.height': 604,
    'window.minheight': 440,
    'window.minwidth': 526,
    'window.width': 564
};

exports.events = new EventEmitter();
exports.events.setMaxListeners(100);

exports.load = function () {
    if (localStorage.settings != null) {
        settings = JSON.parse(localStorage.settings);
    } else {
        settings = {};
    }

    // Load default settings

    for (let key in defaults) {
        if (key in settings) continue;
        settings[key] = defaults[key];
    }

    // Overwrite settings

    for (let overwriteKey in settings) {
        if (overwriteKey.indexOf('setting.overwrite.') != 0) continue;

        let overwrites = settings[overwriteKey];
        if (!overwrites.length) continue;

        for (let i = 0; i < overwrites.length; i++) {
            settings[overwrites[i]] = defaults[overwrites[i]];
        }

        settings[overwriteKey] = [];
    }

    return exports.save();
};

exports.loadThemes = function () {
    return {};
};

exports.save = function () {
    localStorage.settings = JSON.stringify(settings);
    return exports;
};

exports.get = function (key) {
    if (key in settings) return settings[key];
    if (key in defaults) return defaults[key];
    return null;
};

exports.set = function (key, value) {
    settings[key] = value;
    exports.save();
    exports.events.emit('change', { key });
    return exports;
};

exports.getThemes = function () {
    if (themesDict == null) exports.loadThemes();
    return themesDict;
};

exports.load();

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map