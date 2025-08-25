(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [177], {
        347: () => {},
        1453: () => {},
        2183: (t, e, i) => {
            Promise.resolve().then(i.t.bind(i, 9412, 23)), Promise.resolve().then(i.t.bind(i, 5700, 23)), Promise.resolve().then(i.t.bind(i, 5110, 23)), Promise.resolve().then(i.t.bind(i, 7636, 23)), Promise.resolve().then(i.t.bind(i, 6196, 23)), Promise.resolve().then(i.t.bind(i, 1453, 23)), Promise.resolve().then(i.t.bind(i, 347, 23)), Promise.resolve().then(i.bind(i, 8815))
        },
        5110: t => {
            t.exports = {
                style: {
                    fontFamily: "'montreal', 'montreal Fallback'",
                    fontStyle: "normal"
                },
                className: "__className_a8863e",
                variable: "__variable_a8863e"
            }
        },
        5700: t => {
            t.exports = {
                style: {
                    fontFamily: "'GeistMono', ui-monospace, SFMono-Regular, Roboto Mono, Menlo, Monaco, Liberation Mono, DejaVu Sans Mono, Courier New, monospace"
                },
                className: "__className_f910ec",
                variable: "__variable_f910ec"
            }
        },
        6196: t => {
            t.exports = {
                style: {
                    fontFamily: "'Inter', 'Inter Fallback'",
                    fontStyle: "normal"
                },
                className: "__className_e8ce0c",
                variable: "__variable_e8ce0c"
            }
        },
        7095: (t, e, i) => {
            "use strict";
            i.d(e, {
                v: () => o,
                x: () => n
            });
            var s = i(2115);
            let o = (0, s.createContext)(null),
                n = () => (0, s.useContext)(o)
        },
        7636: t => {
            t.exports = {
                style: {
                    fontFamily: "'montrealMono', 'montrealMono Fallback'"
                },
                className: "__className_c4ef81",
                variable: "__variable_c4ef81"
            }
        },
        8815: (t, e, i) => {
            "use strict";
            i.d(e, {
                default: () => m
            });
            var s = i(5155),
                o = i(2115);

            function n(t, e, i) {
                return Math.max(t, Math.min(e, i))
            }
            var r = class {
                    isRunning = !1;
                    value = 0;
                    from = 0;
                    to = 0;
                    currentTime = 0;
                    lerp;
                    duration;
                    easing;
                    onUpdate;
                    advance(t) {
                        if (!this.isRunning) return;
                        let e = !1;
                        if (this.duration && this.easing) {
                            this.currentTime += t;
                            let i = n(0, this.currentTime / this.duration, 1),
                                s = (e = i >= 1) ? 1 : this.easing(i);
                            this.value = this.from + (this.to - this.from) * s
                        } else if (this.lerp) {
                            var i, s, o, r;
                            this.value = (i = this.value, s = this.to, o = 60 * this.lerp, (1 - (r = 1 - Math.exp(-o * t))) * i + r * s), Math.round(this.value) === this.to && (this.value = this.to, e = !0)
                        } else this.value = this.to, e = !0;
                        e && this.stop(), this.onUpdate ? .(this.value, e)
                    }
                    stop() {
                        this.isRunning = !1
                    }
                    fromTo(t, e, {
                        lerp: i,
                        duration: s,
                        easing: o,
                        onStart: n,
                        onUpdate: r
                    }) {
                        this.from = this.value = t, this.to = e, this.lerp = i, this.duration = s, this.easing = o, this.currentTime = 0, this.isRunning = !0, n ? .(), this.onUpdate = r
                    }
                },
                l = class {
                    constructor(t, e, {
                        autoResize: i = !0,
                        debounce: s = 250
                    } = {}) {
                        this.wrapper = t, this.content = e, i && (this.debouncedResize = function(t, e) {
                            let i;
                            return function(...s) {
                                let o = this;
                                clearTimeout(i), i = setTimeout(() => {
                                    i = void 0, t.apply(o, s)
                                }, e)
                            }
                        }(this.resize, s), this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize()
                    }
                    width = 0;
                    height = 0;
                    scrollHeight = 0;
                    scrollWidth = 0;
                    debouncedResize;
                    wrapperResizeObserver;
                    contentResizeObserver;
                    destroy() {
                        this.wrapperResizeObserver ? .disconnect(), this.contentResizeObserver ? .disconnect(), this.wrapper === window && this.debouncedResize && window.removeEventListener("resize", this.debouncedResize, !1)
                    }
                    resize = () => {
                        this.onWrapperResize(), this.onContentResize()
                    };
                    onWrapperResize = () => {
                        this.wrapper instanceof Window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight)
                    };
                    onContentResize = () => {
                        this.wrapper instanceof Window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth)
                    };
                    get limit() {
                        return {
                            x: this.scrollWidth - this.width,
                            y: this.scrollHeight - this.height
                        }
                    }
                },
                h = class {
                    events = {};
                    emit(t, ...e) {
                        let i = this.events[t] || [];
                        for (let t = 0, s = i.length; t < s; t++) i[t] ? .(...e)
                    }
                    on(t, e) {
                        return this.events[t] ? .push(e) || (this.events[t] = [e]), () => {
                            this.events[t] = this.events[t] ? .filter(t => e !== t)
                        }
                    }
                    off(t, e) {
                        this.events[t] = this.events[t] ? .filter(t => e !== t)
                    }
                    destroy() {
                        this.events = {}
                    }
                },
                a = 100 / 6,
                c = {
                    passive: !1
                },
                p = class {
                    constructor(t, e = {
                        wheelMultiplier: 1,
                        touchMultiplier: 1
                    }) {
                        this.element = t, this.options = e, window.addEventListener("resize", this.onWindowResize, !1), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, c), this.element.addEventListener("touchstart", this.onTouchStart, c), this.element.addEventListener("touchmove", this.onTouchMove, c), this.element.addEventListener("touchend", this.onTouchEnd, c)
                    }
                    touchStart = {
                        x: 0,
                        y: 0
                    };
                    lastDelta = {
                        x: 0,
                        y: 0
                    };
                    window = {
                        width: 0,
                        height: 0
                    };
                    emitter = new h;
                    on(t, e) {
                        return this.emitter.on(t, e)
                    }
                    destroy() {
                        this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize, !1), this.element.removeEventListener("wheel", this.onWheel, c), this.element.removeEventListener("touchstart", this.onTouchStart, c), this.element.removeEventListener("touchmove", this.onTouchMove, c), this.element.removeEventListener("touchend", this.onTouchEnd, c)
                    }
                    onTouchStart = t => {
                        let {
                            clientX: e,
                            clientY: i
                        } = t.targetTouches ? t.targetTouches[0] : t;
                        this.touchStart.x = e, this.touchStart.y = i, this.lastDelta = {
                            x: 0,
                            y: 0
                        }, this.emitter.emit("scroll", {
                            deltaX: 0,
                            deltaY: 0,
                            event: t
                        })
                    };
                    onTouchMove = t => {
                        let {
                            clientX: e,
                            clientY: i
                        } = t.targetTouches ? t.targetTouches[0] : t, s = -(e - this.touchStart.x) * this.options.touchMultiplier, o = -(i - this.touchStart.y) * this.options.touchMultiplier;
                        this.touchStart.x = e, this.touchStart.y = i, this.lastDelta = {
                            x: s,
                            y: o
                        }, this.emitter.emit("scroll", {
                            deltaX: s,
                            deltaY: o,
                            event: t
                        })
                    };
                    onTouchEnd = t => {
                        this.emitter.emit("scroll", {
                            deltaX: this.lastDelta.x,
                            deltaY: this.lastDelta.y,
                            event: t
                        })
                    };
                    onWheel = t => {
                        let {
                            deltaX: e,
                            deltaY: i,
                            deltaMode: s
                        } = t, o = 1 === s ? a : 2 === s ? this.window.width : 1, n = 1 === s ? a : 2 === s ? this.window.height : 1;
                        e *= o, i *= n, e *= this.options.wheelMultiplier, i *= this.options.wheelMultiplier, this.emitter.emit("scroll", {
                            deltaX: e,
                            deltaY: i,
                            event: t
                        })
                    };
                    onWindowResize = () => {
                        this.window = {
                            width: window.innerWidth,
                            height: window.innerHeight
                        }
                    }
                },
                d = class {
                    _isScrolling = !1;
                    _isStopped = !1;
                    _isLocked = !1;
                    _preventNextNativeScrollEvent = !1;
                    _resetVelocityTimeout = null;
                    __rafID = null;
                    isTouching;
                    time = 0;
                    userData = {};
                    lastVelocity = 0;
                    velocity = 0;
                    direction = 0;
                    options;
                    targetScroll;
                    animatedScroll;
                    animate = new r;
                    emitter = new h;
                    dimensions;
                    virtualScroll;
                    constructor({
                        wrapper: t = window,
                        content: e = document.documentElement,
                        eventsTarget: i = t,
                        smoothWheel: s = !0,
                        syncTouch: o = !1,
                        syncTouchLerp: n = .075,
                        touchInertiaMultiplier: r = 35,
                        duration: h,
                        easing: a = t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                        lerp: c = .1,
                        infinite: d = !1,
                        orientation: u = "vertical",
                        gestureOrientation: m = "vertical",
                        touchMultiplier: v = 1,
                        wheelMultiplier: S = 1,
                        autoResize: w = !0,
                        prevent: f,
                        virtualScroll: g,
                        overscroll: y = !0,
                        autoRaf: _ = !1,
                        anchors: b = !1,
                        autoToggle: E = !1,
                        allowNestedScroll: N = !1,
                        __experimental__naiveDimensions: T = !1
                    } = {}) {
                        window.lenisVersion = "1.3.1", t && t !== document.documentElement || (t = window), this.options = {
                            wrapper: t,
                            content: e,
                            eventsTarget: i,
                            smoothWheel: s,
                            syncTouch: o,
                            syncTouchLerp: n,
                            touchInertiaMultiplier: r,
                            duration: h,
                            easing: a,
                            lerp: c,
                            infinite: d,
                            gestureOrientation: m,
                            orientation: u,
                            touchMultiplier: v,
                            wheelMultiplier: S,
                            autoResize: w,
                            prevent: f,
                            virtualScroll: g,
                            overscroll: y,
                            autoRaf: _,
                            anchors: b,
                            autoToggle: E,
                            allowNestedScroll: N,
                            __experimental__naiveDimensions: T
                        }, this.dimensions = new l(t, e, {
                            autoResize: w
                        }), this.updateClassName(), this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1), this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
                            capture: !0
                        }), this.options.anchors && this.options.wrapper === window && this.options.wrapper.addEventListener("click", this.onClick, !1), this.options.wrapper.addEventListener("pointerdown", this.onPointerDown, !1), this.virtualScroll = new p(i, {
                            touchMultiplier: v,
                            wheelMultiplier: S
                        }), this.virtualScroll.on("scroll", this.onVirtualScroll), this.options.autoToggle && this.rootElement.addEventListener("transitionend", this.onTransitionEnd, {
                            passive: !0
                        }), this.options.autoRaf && (this.__rafID = requestAnimationFrame(this.raf))
                    }
                    destroy() {
                        this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1), this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, {
                            capture: !0
                        }), this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown, !1), this.options.anchors && this.options.wrapper === window && this.options.wrapper.removeEventListener("click", this.onClick, !1), this.virtualScroll.destroy(), this.dimensions.destroy(), this.cleanUpClassName(), this.__rafID && cancelAnimationFrame(this.__rafID)
                    }
                    on(t, e) {
                        return this.emitter.on(t, e)
                    }
                    off(t, e) {
                        return this.emitter.off(t, e)
                    }
                    onScrollEnd = t => {
                        t instanceof CustomEvent || "smooth" !== this.isScrolling && !1 !== this.isScrolling || t.stopPropagation()
                    };
                    dispatchScrollendEvent = () => {
                        this.options.wrapper.dispatchEvent(new CustomEvent("scrollend", {
                            bubbles: this.options.wrapper === window,
                            detail: {
                                lenisScrollEnd: !0
                            }
                        }))
                    };
                    onTransitionEnd = t => {
                        if (t.propertyName.includes("overflow")) {
                            let t = this.isHorizontal ? "overflow-x" : "overflow-y";
                            ["hidden", "clip"].includes(getComputedStyle(this.rootElement)[t]) ? this.stop() : this.start()
                        }
                    };
                    setScroll(t) {
                        this.isHorizontal ? this.options.wrapper.scrollTo({
                            left: t,
                            behavior: "instant"
                        }) : this.options.wrapper.scrollTo({
                            top: t,
                            behavior: "instant"
                        })
                    }
                    onClick = t => {
                        let e = t.composedPath().find(t => t instanceof HTMLAnchorElement && (t.getAttribute("href") ? .startsWith("#") || t.getAttribute("href") ? .startsWith("/#") || t.getAttribute("href") ? .startsWith("./#")));
                        if (e) {
                            let t = e.getAttribute("href");
                            if (t) {
                                let e = "object" == typeof this.options.anchors && this.options.anchors ? this.options.anchors : void 0,
                                    i = `#${t.split("#")[1]}`;
                                ["#", "/#", "./#", "#top", "/#top", "./#top"].includes(t) && (i = 0), this.scrollTo(i, e)
                            }
                        }
                    };
                    onPointerDown = t => {
                        1 === t.button && this.reset()
                    };
                    onVirtualScroll = t => {
                        if ("function" == typeof this.options.virtualScroll && !1 === this.options.virtualScroll(t)) return;
                        let {
                            deltaX: e,
                            deltaY: i,
                            event: s
                        } = t;
                        if (this.emitter.emit("virtual-scroll", {
                                deltaX: e,
                                deltaY: i,
                                event: s
                            }), s.ctrlKey || s.lenisStopPropagation) return;
                        let o = s.type.includes("touch"),
                            n = s.type.includes("wheel");
                        this.isTouching = "touchstart" === s.type || "touchmove" === s.type;
                        let r = 0 === e && 0 === i;
                        if (this.options.syncTouch && o && "touchstart" === s.type && r && !this.isStopped && !this.isLocked) return void this.reset();
                        let l = "vertical" === this.options.gestureOrientation && 0 === i || "horizontal" === this.options.gestureOrientation && 0 === e;
                        if (r || l) return;
                        let h = s.composedPath();
                        h = h.slice(0, h.indexOf(this.rootElement));
                        let a = this.options.prevent;
                        if (h.find(t => t instanceof HTMLElement && ("function" == typeof a && a ? .(t) || t.hasAttribute ? .("data-lenis-prevent") || o && t.hasAttribute ? .("data-lenis-prevent-touch") || n && t.hasAttribute ? .("data-lenis-prevent-wheel") || this.options.allowNestedScroll && this.checkNestedScroll(t, {
                                deltaX: e,
                                deltaY: i
                            })))) return;
                        if (this.isStopped || this.isLocked) return void s.preventDefault();
                        if (!(this.options.syncTouch && o || this.options.smoothWheel && n)) {
                            this.isScrolling = "native", this.animate.stop(), s.lenisStopPropagation = !0;
                            return
                        }
                        let c = i;
                        "both" === this.options.gestureOrientation ? c = Math.abs(i) > Math.abs(e) ? i : e : "horizontal" === this.options.gestureOrientation && (c = e), (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && (this.animatedScroll > 0 && this.animatedScroll < this.limit || 0 === this.animatedScroll && i > 0 || this.animatedScroll === this.limit && i < 0)) && (s.lenisStopPropagation = !0), s.preventDefault();
                        let p = o && this.options.syncTouch,
                            d = o && "touchend" === s.type && Math.abs(c) > 5;
                        d && (c = this.velocity * this.options.touchInertiaMultiplier), this.scrollTo(this.targetScroll + c, {
                            programmatic: !1,
                            ...p ? {
                                lerp: d ? this.options.syncTouchLerp : 1
                            } : {
                                lerp: this.options.lerp,
                                duration: this.options.duration,
                                easing: this.options.easing
                            }
                        })
                    };
                    resize() {
                        this.dimensions.resize(), this.animatedScroll = this.targetScroll = this.actualScroll, this.emit()
                    }
                    emit() {
                        this.emitter.emit("scroll", this)
                    }
                    onNativeScroll = () => {
                        if (null !== this._resetVelocityTimeout && (clearTimeout(this._resetVelocityTimeout), this._resetVelocityTimeout = null), this._preventNextNativeScrollEvent) {
                            this._preventNextNativeScrollEvent = !1;
                            return
                        }
                        if (!1 === this.isScrolling || "native" === this.isScrolling) {
                            let t = this.animatedScroll;
                            this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity, this.velocity = this.animatedScroll - t, this.direction = Math.sign(this.animatedScroll - t), this.isStopped || (this.isScrolling = "native"), this.emit(), 0 !== this.velocity && (this._resetVelocityTimeout = setTimeout(() => {
                                this.lastVelocity = this.velocity, this.velocity = 0, this.isScrolling = !1, this.emit()
                            }, 400))
                        }
                    };
                    reset() {
                        this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity = 0, this.animate.stop()
                    }
                    start() {
                        this.isStopped && (this.reset(), this.isStopped = !1)
                    }
                    stop() {
                        this.isStopped || (this.reset(), this.isStopped = !0)
                    }
                    raf = t => {
                        let e = t - (this.time || t);
                        this.time = t, this.animate.advance(.001 * e), this.options.autoRaf && (this.__rafID = requestAnimationFrame(this.raf))
                    };
                    scrollTo(t, {
                        offset: e = 0,
                        immediate: i = !1,
                        lock: s = !1,
                        duration: o = this.options.duration,
                        easing: r = this.options.easing,
                        lerp: l = this.options.lerp,
                        onStart: h,
                        onComplete: a,
                        force: c = !1,
                        programmatic: p = !0,
                        userData: d
                    } = {}) {
                        if (!this.isStopped && !this.isLocked || c) {
                            if ("string" == typeof t && ["top", "left", "start"].includes(t)) t = 0;
                            else if ("string" == typeof t && ["bottom", "right", "end"].includes(t)) t = this.limit;
                            else {
                                let i;
                                if ("string" == typeof t ? i = document.querySelector(t) : t instanceof HTMLElement && t ? .nodeType && (i = t), i) {
                                    if (this.options.wrapper !== window) {
                                        let t = this.rootElement.getBoundingClientRect();
                                        e -= this.isHorizontal ? t.left : t.top
                                    }
                                    let s = i.getBoundingClientRect();
                                    t = (this.isHorizontal ? s.left : s.top) + this.animatedScroll
                                }
                            }
                            if ("number" == typeof t) {
                                if (t += e, t = Math.round(t), this.options.infinite) {
                                    if (p) {
                                        this.targetScroll = this.animatedScroll = this.scroll;
                                        let e = t - this.animatedScroll;
                                        e > this.limit / 2 ? t -= this.limit : e < -this.limit / 2 && (t += this.limit)
                                    }
                                } else t = n(0, t, this.limit);
                                if (t === this.targetScroll) {
                                    h ? .(this), a ? .(this);
                                    return
                                }
                                if (this.userData = d ? ? {}, i) {
                                    this.animatedScroll = this.targetScroll = t, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), a ? .(this), this.userData = {}, requestAnimationFrame(() => {
                                        this.dispatchScrollendEvent()
                                    });
                                    return
                                }
                                p || (this.targetScroll = t), this.animate.fromTo(this.animatedScroll, t, {
                                    duration: o,
                                    easing: r,
                                    lerp: l,
                                    onStart: () => {
                                        s && (this.isLocked = !0), this.isScrolling = "smooth", h ? .(this)
                                    },
                                    onUpdate: (t, e) => {
                                        this.isScrolling = "smooth", this.lastVelocity = this.velocity, this.velocity = t - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = t, this.setScroll(this.scroll), p && (this.targetScroll = t), e || this.emit(), e && (this.reset(), this.emit(), a ? .(this), this.userData = {}, requestAnimationFrame(() => {
                                            this.dispatchScrollendEvent()
                                        }), this.preventNextNativeScrollEvent())
                                    }
                                })
                            }
                        }
                    }
                    preventNextNativeScrollEvent() {
                        this._preventNextNativeScrollEvent = !0, requestAnimationFrame(() => {
                            this._preventNextNativeScrollEvent = !1
                        })
                    }
                    checkNestedScroll(t, {
                        deltaX: e,
                        deltaY: i
                    }) {
                        let s, o, n, r, l, h, a, c, p, d, u, m, v, S, w = Date.now(),
                            f = t._lenis ? ? = {},
                            g = this.options.gestureOrientation;
                        if (w - (f.time ? ? 0) > 2e3) {
                            f.time = Date.now();
                            let e = window.getComputedStyle(t);
                            f.computedStyle = e;
                            let i = e.overflowX,
                                p = e.overflowY;
                            if (s = ["auto", "overlay", "scroll"].includes(i), o = ["auto", "overlay", "scroll"].includes(p), f.hasOverflowX = s, f.hasOverflowY = o, !s && !o || "vertical" === g && !o || "horizontal" === g && !s) return !1;
                            l = t.scrollWidth, h = t.scrollHeight, a = t.clientWidth, c = t.clientHeight, n = l > a, r = h > c, f.isScrollableX = n, f.isScrollableY = r, f.scrollWidth = l, f.scrollHeight = h, f.clientWidth = a, f.clientHeight = c
                        } else n = f.isScrollableX, r = f.isScrollableY, s = f.hasOverflowX, o = f.hasOverflowY, l = f.scrollWidth, h = f.scrollHeight, a = f.clientWidth, c = f.clientHeight;
                        if (!s && !o || !n && !r || "vertical" === g && (!o || !r) || "horizontal" === g && (!s || !n) || ("horizontal" === g ? p = "x" : "vertical" === g ? p = "y" : (0 !== e && s && n && (p = "x"), 0 !== i && o && r && (p = "y")), !p)) return !1;
                        if ("x" === p) d = t.scrollLeft, u = l - a, m = e, v = s, S = n;
                        else {
                            if ("y" !== p) return !1;
                            d = t.scrollTop, u = h - c, m = i, v = o, S = r
                        }
                        return (m > 0 ? d < u : d > 0) && v && S
                    }
                    get rootElement() {
                        return this.options.wrapper === window ? document.documentElement : this.options.wrapper
                    }
                    get limit() {
                        return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"]
                    }
                    get isHorizontal() {
                        return "horizontal" === this.options.orientation
                    }
                    get actualScroll() {
                        let t = this.options.wrapper;
                        return this.isHorizontal ? t.scrollX ? ? t.scrollLeft : t.scrollY ? ? t.scrollTop
                    }
                    get scroll() {
                        var t;
                        return this.options.infinite ? (this.animatedScroll % (t = this.limit) + t) % t : this.animatedScroll
                    }
                    get progress() {
                        return 0 === this.limit ? 1 : this.scroll / this.limit
                    }
                    get isScrolling() {
                        return this._isScrolling
                    }
                    set isScrolling(t) {
                        this._isScrolling !== t && (this._isScrolling = t, this.updateClassName())
                    }
                    get isStopped() {
                        return this._isStopped
                    }
                    set isStopped(t) {
                        this._isStopped !== t && (this._isStopped = t, this.updateClassName())
                    }
                    get isLocked() {
                        return this._isLocked
                    }
                    set isLocked(t) {
                        this._isLocked !== t && (this._isLocked = t, this.updateClassName())
                    }
                    get isSmooth() {
                        return "smooth" === this.isScrolling
                    }
                    get className() {
                        let t = "lenis";
                        return this.options.autoToggle && (t += " lenis-autoToggle"), this.isStopped && (t += " lenis-stopped"), this.isLocked && (t += " lenis-locked"), this.isScrolling && (t += " lenis-scrolling"), "smooth" === this.isScrolling && (t += " lenis-smooth"), t
                    }
                    updateClassName() {
                        this.cleanUpClassName(), this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim()
                    }
                    cleanUpClassName() {
                        this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim()
                    }
                },
                u = i(7095);

            function m(t) {
                let {
                    children: e
                } = t, [i, n] = (0, o.useState)(null);
                return (0, o.useEffect)(() => {
                    let t = new d;
                    n(t);
                    let e = requestAnimationFrame(function e(i) {
                        t.raf(i), requestAnimationFrame(e)
                    });
                    return () => {
                        cancelAnimationFrame(e), t.destroy()
                    }
                }, []), (0, s.jsx)(u.v.Provider, {
                    value: i,
                    children: e
                })
            }
        },
        9412: t => {
            t.exports = {
                style: {
                    fontFamily: "'GeistSans', 'GeistSans Fallback'"
                },
                className: "__className_fb8f2c",
                variable: "__variable_fb8f2c"
            }
        }
    },
    t => {
        var e = e => t(t.s = e);
        t.O(0, [709, 441, 684, 358], () => e(2183)), _N_E = t.O()
    }
]);