(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [974], {
        1966: (e, a, t) => {
            "use strict";
            t.d(a, {
                default: () => i
            });
            var s = t(5155),
                l = t(2115),
                r = t(6896),
                n = t(6707);

            function c(e) {
                let {
                    onAnimationComplete: a
                } = e, t = (0, r.s)();
                return (0, l.useEffect)(() => {
                    t.start({
                        y: ["0vh", "-100vh"],
                        transition: {
                            duration: 2,
                            ease: [.2, .38, .09, .91]
                        }
                    })
                }, [t]), (0, s.jsx)(n.P.div, {
                    className: "fixed top-0 left-0 z-[15] flex h-screen w-screen bg-secondary-400 ",
                    initial: {
                        y: "0vh"
                    },
                    animate: t,
                    onAnimationComplete: a,
                    children: (0, s.jsx)("svg", {
                        className: "absolute top-0 w-full h-full",
                        viewBox: "0 0 926 1000",
                        preserveAspectRatio: "none",
                        style: {
                            height: "calc(100% + 300px)"
                        },
                        children: (0, s.jsx)(n.P.path, {
                            className: "fill-secondary-400",
                            d: "M0 0 L926 0 L926 1000 Q463 730 0 1000 L0 0",
                            animate: {
                                d: ["M0 0 L926 0 L926 1000 Q463 730 0 1000 L0 0", "M0 0 L926 0 L926 0 Q463 0 0 0 L0 0"]
                            },
                            transition: {
                                duration: 4,
                                ease: "easeOut"
                            }
                        })
                    })
                })
            }

            function i() {
                let [e, a] = (0, l.useState)(!0);
                return ((0, l.useEffect)(() => {
                    let e = setTimeout(() => {
                        let e = setTimeout(() => a(!1), 2500);
                        return () => clearTimeout(e)
                    }, 100);
                    return () => clearTimeout(e)
                }, []), e) ? (0, s.jsx)(c, {
                    onAnimationComplete: () => a(!1)
                }) : null
            }
        },
        6929: (e, a, t) => {
            "use strict";
            t.d(a, {
                default: () => r
            });
            var s = t(5155),
                l = t(2115);
            let r = e => {
                let {
                    children: a,
                    delay: t = 600,
                    className: r = ""
                } = e, [n, c] = (0, l.useState)(!1);
                return (0, l.useEffect)(() => {
                    let e = setTimeout(() => c(!0), t);
                    return () => clearTimeout(e)
                }, [t]), (0, s.jsx)("div", {
                    className: "transition-all duration-500 ease-in transform ".concat(n ? "opacity-100" : "opacity-0", " ").concat(r),
                    children: a
                })
            }
        },
        7095: (e, a, t) => {
            "use strict";
            t.d(a, {
                v: () => l,
                x: () => r
            });
            var s = t(2115);
            let l = (0, s.createContext)(null),
                r = () => (0, s.useContext)(l)
        },
        7746: (e, a, t) => {
            Promise.resolve().then(t.t.bind(t, 6874, 23)), Promise.resolve().then(t.bind(t, 6929)), Promise.resolve().then(t.bind(t, 9605)), Promise.resolve().then(t.bind(t, 8922)), Promise.resolve().then(t.bind(t, 1966))
        },
        8922: (e, a, t) => {
            "use strict";
            t.d(a, {
                default: () => T
            });
            var s = t(5155),
                l = t(2115),
                r = t(6707);
            let n = e => {
                let {
                    className: a,
                    fillColor: t = "currentColor",
                    delayPerChar: l = .05
                } = e, n = ["M1268.51 160V0.669983H1294.05L1352.58 132.428H1345.58L1404.11 0.669983H1429.42V160H1402.98V41.802H1411.12L1357.55 160H1340.15L1286.59 41.802H1294.95V160H1268.51Z", "M1215.36 160V0.669983H1244.51V160H1215.36Z", "M1100.2 160V0.669983H1129.35V135.366H1204.38V160H1100.2Z", "M924.369 160L996.463 0.669983H1020.87L1093.87 160H1064.26L1044.83 115.252L1056.58 123.162H960.981L973.185 115.252L953.749 160H924.369ZM1008.44 31.858L976.575 107.342L970.699 100.336H1046.63L1041.89 107.342L1009.34 31.858H1008.44Z", "M766.169 160L838.263 0.669983H862.671L935.669 160H906.063L886.627 115.252L898.379 123.162H802.781L814.985 115.252L795.549 160H766.169ZM850.241 31.858L818.375 107.342L812.499 100.336H888.435L883.689 107.342L851.145 31.858H850.241Z", "M572.231 160V0.669983H630.087C648.317 0.669983 663.685 3.83398 676.191 10.162C688.847 16.3393 698.414 25.3793 704.893 37.282C711.371 49.034 714.611 63.3473 714.611 80.222C714.611 96.946 711.371 111.259 704.893 123.162C698.414 135.065 688.847 144.18 676.191 150.508C663.685 156.836 648.317 160 630.087 160H572.231ZM601.385 135.818H628.279C647.564 135.818 661.877 131.223 671.219 122.032C680.56 112.841 685.231 98.9047 685.231 80.222C685.231 61.3887 680.56 47.452 671.219 38.412C661.877 29.2213 647.564 24.626 628.279 24.626H601.385V135.818Z", "M449.123 160V0.669983H556.473V23.496H477.147V67.566H551.275V90.618H477.147V136.948H556.473V160H449.123Z", "M289.819 160V0.669983H311.741L404.175 120.224H398.299V0.669983H425.419V160H403.497L311.289 40.446H316.939V160H289.819Z", "M200.27 162.26C177.519 162.26 160.569 156.61 149.42 145.31C138.421 133.859 132.922 116.985 132.922 94.686V0.669983H162.076V94.46C162.076 108.623 165.089 119.32 171.116 126.552C177.293 133.784 187.011 137.4 200.27 137.4C212.926 137.4 222.418 133.784 228.746 126.552C235.225 119.32 238.464 108.623 238.464 94.46V0.669983H267.166V94.686C267.166 116.985 261.516 133.859 250.216 145.31C239.067 156.61 222.418 162.26 200.27 162.26Z", "M0.169983 160V138.53L89.44 15.586V24.852H0.169983V0.669983H117.238V21.914L27.742 144.858V135.818H120.176V160H0.169983Z"].reverse();
                return (0, s.jsx)(r.P.svg, {
                    width: "1430",
                    height: "163",
                    viewBox: "0 0 1430 163",
                    className: a,
                    xmlns: "http://www.w3.org/2000/svg",
                    initial: "hidden",
                    animate: "visible",
                    variants: {
                        hidden: {
                            opacity: 0
                        },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: l
                            }
                        }
                    },
                    children: n.map((e, a) => (0, s.jsx)(r.P.path, {
                        d: e,
                        fill: t,
                        initial: {
                            y: 163
                        },
                        animate: {
                            y: 0
                        },
                        transition: {
                            ease: "easeOut",
                            duration: .4,
                            delay: 1.1 + a * l
                        }
                    }, a))
                })
            };
            var c = t(6604);
            let i = e => {
                    let {
                        text: a,
                        className: t = "",
                        once: n = !0,
                        delay: i = 0,
                        delayperwords: o = 0
                    } = e, d = (0, l.useRef)(null), x = (0, c.W)(d, {
                        once: n
                    }), m = a.split(" ");
                    return (0, s.jsx)("div", {
                        ref: d,
                        className: "overflow-hidden",
                        children: (0, s.jsx)(r.P.span, {
                            className: "".concat(t),
                            initial: "hidden",
                            animate: x ? "visible" : "hidden",
                            variants: {
                                hidden: {},
                                visible: {}
                            },
                            children: m.map((e, a) => (0, s.jsx)(r.P.span, {
                                className: "inline-block pr-2",
                                initial: "hidden",
                                animate: x ? "visible" : "hidden",
                                variants: {
                                    hidden: {
                                        y: "100%",
                                        opacity: 0
                                    },
                                    visible: {
                                        y: 0,
                                        opacity: 1,
                                        transition: {
                                            ease: "easeOut",
                                            duration: .4,
                                            delay: i + a * o
                                        }
                                    }
                                },
                                children: e
                            }, a))
                        })
                    })
                },
                o = e => {
                    let {
                        text: a,
                        className: t = "",
                        delayPerChar: n = .05,
                        once: i = !0,
                        delay: o = 0
                    } = e, d = (0, l.useRef)(null), x = (0, c.W)(d, {
                        once: i
                    }), m = a.split("");
                    return (0, s.jsx)("div", {
                        ref: d,
                        className: "overflow-hidden",
                        children: (0, s.jsx)(r.P.span, {
                            className: "".concat(t),
                            initial: "hidden",
                            animate: x ? "visible" : "hidden",
                            variants: {
                                hidden: {
                                    opacity: 0
                                },
                                visible: {
                                    opacity: 1
                                }
                            },
                            children: m.map((e, a) => (0, s.jsx)(r.P.span, {
                                className: "inline-block",
                                initial: "hidden",
                                animate: x ? "visible" : "hidden",
                                variants: {
                                    hidden: {
                                        y: "100%",
                                        opacity: 0
                                    },
                                    visible: {
                                        y: 0,
                                        opacity: 1,
                                        transition: {
                                            ease: "easeOut",
                                            duration: .4,
                                            delay: o + a * n
                                        }
                                    }
                                },
                                children: " " === e ? "\xa0" : e
                            }, a))
                        })
                    })
                };
            var d = t(802),
                x = t(9088),
                m = t(6766),
                p = t(6874),
                h = t.n(p),
                u = t(9178);
            let v = () => ((0, l.useEffect)(() => {
                    let e = document.createElement("div");
                    e.className = "custom-cursor fixed top-0 left-0 z-[99] h-20 w-20 rounded-full border-2 border-white bg-white/80 text-black text-xs font-bold flex items-center justify-center mix-blend-difference pointer-events-none ";
                    let a = document.createElement("span");
                    a.textContent = "View", a.className = "cursor-text pointer-events-none", a.className = "pointer-events-none text-[10px] sm:text-xs md:text-[length:var(--text-skill)] font-semibold", e.appendChild(a), document.body.appendChild(e);
                    let t = document.querySelectorAll(".custom-cursor-area"),
                        s = 0,
                        l = 0,
                        r = 0,
                        n = 0,
                        c = e => {
                            s = e.clientX, l = e.clientY
                        },
                        i = () => {
                            r += (s - r) * .12, n += (l - n) * .12, e.style.transform = "translate3d(".concat(r, "px, ").concat(n, "px, 0)");
                            let a = !1;
                            t.forEach(e => {
                                let t = e.getBoundingClientRect();
                                s >= t.left && s <= t.right && l >= t.top && l <= t.bottom && (a = !0)
                            }), e.style.display = a ? "flex" : "none", requestAnimationFrame(i)
                        };
                    return window.addEventListener("mousemove", c), requestAnimationFrame(i), () => {
                        window.removeEventListener("mousemove", c), document.body.removeChild(e)
                    }
                }, []), null),
                f = ["Home", "Services", "Works", "About", "Contact"];

            function g(e) {
                let {
                    isOpen: a,
                    setIsOpen: t
                } = e, r = (0, l.useRef)(null);
                return (0, l.useEffect)(() => {
                    let e = r.current;
                    e && (d.Ay.killTweensOf(e), a ? (e.style.display = "flex", d.Ay.fromTo(e, {
                        x: "100%"
                    }, {
                        x: "0%",
                        duration: 1.3,
                        ease: "power3.out"
                    })) : d.Ay.to(e, {
                        x: "100%",
                        duration: 1,
                        ease: "power3.out",
                        onComplete: () => {
                            e && (e.style.display = "none")
                        }
                    }))
                }, [a]), (0, s.jsxs)("div", {
                    ref: r,
                    className: "fixed top-0  right-0 z-[99999999] h-screen w-screen justify-end backdrop-blur-xl text-[var(--color-accent-200)]",
                    style: {
                        display: "none"
                    },
                    children: [!a && (0, s.jsx)(v, {}), (0, s.jsxs)("div", {
                        className: " w-full relative z-20 flex max-w-2xl flex-col justify-end overflow-hidden rounded-md xl:max-w-3xl 3xl:max-w-4xl ",
                        children: [(0, s.jsx)("div", {
                            className: "absolute right-0 top-0 opacity-40",
                            style: {
                                opacity: .25
                            },
                            children: (0, s.jsx)(m.default, {
                                src: "/menu.svg",
                                alt: "",
                                width: 245,
                                height: 327,
                                className: "2xl:w-72 3xl:w-96",
                                loading: "lazy"
                            })
                        }), (0, s.jsx)("nav", {
                            className: "relative h-full px-[var(--space-md)] text-[length:var(--text-menu)] font-[700] uppercase leading-[100%] sm:px-[var(--space-xl)]",
                            children: (0, s.jsx)("ul", {
                                className: "flex h-full flex-col justify-center gap-y-[var(--space-3xs)]",
                                children: f.map(e => (0, s.jsx)("li", {
                                    className: "relative flex w-fit cursor-pointer items-center",
                                    children: (0, s.jsx)(h(), {
                                        onClick: () => t(!1),
                                        href: "#".concat(e),
                                        className: "relative inline-block text-[length:var(--text-menu)] text-[var(--color-accent-200)] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[var(--color-accent-200)] after:transition-all after:duration-500 hover:after:w-full",
                                        children: e
                                    })
                                }, e))
                            })
                        }), (0, s.jsxs)("div", {
                            className: "flex flex-col items-start justify-start gap-y-[var(--space-md)] px-[var(--space-md)] pb-[var(--space-md)] sm:px-[var(--space-xl)] sm:pb-[var(--space-xl)]",
                            children: [(0, s.jsxs)("div", {
                                className: "flex flex-col",
                                children: [(0, s.jsx)("span", {
                                    className: "text-left text-[length:var(--text-base-small)] font-bold text-[--color-secondary-50] 2xl:text-[length:var(--text-base-small)]",
                                    children: "EMAIL ADDRESS"
                                }), (0, s.jsxs)("a", {
                                    href: "mailto:contact@zunedaalim.com",
                                    onClick: () => t(!1),
                                    className: "link-text relative block h-fit overflow-hidden font-mono font-medium",
                                    children: [" ", (0, s.jsx)(u.A, {
                                        children: "contact@zunedaalim.com"
                                    })]
                                })]
                            }), (0, s.jsxs)("ul", {
                                className: "flex flex-nowrap justify-start gap-x-[var(--space-2xs)]",
                                children: [(0, s.jsx)(h(), {
                                    target: "_blank",
                                    href: "https://www.linkedin.com/in/zunedaalim/",
                                    children: "LinkedIn"
                                }), (0, s.jsx)(h(), {
                                    target: "_blank",
                                    href: "https://github.com/zunedaalim",
                                    children: "Github"
                                }), (0, s.jsx)(h(), {
                                    target: "_blank",
                                    href: "https://leetcode.com/u/zunedaalim1/",
                                    children: "Leetcode"
                                })]
                            })]
                        })]
                    })]
                })
            }
            var y = t(7095);

            function b(e) {
                let {
                    show: a
                } = e, [t, n] = (0, l.useState)(!1), c = (0, y.x)();
                (0, l.useEffect)(() => {
                    c && (t ? c.stop() : c.start())
                }, [t, c]);
                let i = {
                    stroke: "black",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    transition: {
                        duration: .3
                    },
                    style: {
                        transformOrigin: "".concat(17.5, "px ").concat(17.5, "px")
                    }
                };
                return (0, s.jsxs)("div", {
                    className: "relative",
                    children: [a && (0, s.jsx)(g, {
                        isOpen: t,
                        setIsOpen: n
                    }), (0, s.jsx)(r.P.button, {
                        initial: {
                            opacity: 0,
                            scale: 0
                        },
                        animate: a ? {
                            opacity: 1,
                            scale: 1
                        } : {
                            opacity: 0,
                            scale: 0,
                            pointerEvents: "none"
                        },
                        transition: {
                            duration: .3
                        },
                        className: "fixed top-9 right-8 z-[99999999] p-3 bg-[var(--color-accent-400)] rounded-full shadow-lg",
                        onClick: () => n(!t),
                        style: {
                            cursor: "pointer"
                        },
                        children: (0, s.jsxs)("svg", {
                            width: 35,
                            height: 35,
                            viewBox: "0 0 ".concat(35, " ").concat(35),
                            children: [(0, s.jsx)(r.P.line, {
                                x1: 2,
                                y1: 13.5,
                                x2: 33,
                                y2: 13.5,
                                ...i,
                                animate: {
                                    translateY: 4 * !!t,
                                    rotate: 45 * !!t
                                }
                            }), (0, s.jsx)(r.P.line, {
                                x1: 2,
                                y1: 21.5,
                                x2: 33,
                                y2: 21.5,
                                ...i,
                                animate: {
                                    translateY: t ? -4 : 0,
                                    rotate: t ? -45 : 0
                                }
                            })]
                        })
                    })]
                })
            }

            function j() {
                let [e, a] = (0, l.useState)(!1);
                return (0, l.useEffect)(() => {
                    let e = x.A.create({
                        trigger: "#Services",
                        start: "top -20%",
                        onEnter: () => a(!0),
                        onLeaveBack: () => a(!1)
                    });
                    return () => {
                        e.kill()
                    }
                }, []), (0, s.jsxs)("section", {
                    id: "Services",
                    children: [(0, s.jsx)(b, {
                        show: e
                    }), (0, s.jsx)("div", {
                        className: "relative z-20 min-h-screen w-full overflow-x-clip",
                        children: (0, s.jsxs)("section", {
                            className: "section-padding rounded-t-3xl bg-[var(--color-secondary-400)] text-[var(--color-text-bg)]",
                            children: [(0, s.jsxs)("div", {
                                className: "relative flex w-full flex-col gap-y-[var(--space-lg)] md:gap-y-[var(--space-2xl)]",
                                children: [(0, s.jsx)("h1", {
                                    className: "cs2:text-[length:var(--text-h1)] section-heading col-span-6 max-w-[18ch] text-accent-400",
                                    children: (0, s.jsx)(o, {
                                        text: "What I Do /",
                                        delayPerChar: .03
                                    })
                                }), (0, s.jsx)("div", {
                                    className: "flex grid-cols-12 gap-x-[var(--gap-fluid)] md:grid",
                                    children: (0, s.jsxs)("div", {
                                        className: "col-span-7 flex flex-col gap-x-[var(--space-xl)] gap-y-[var(--space-2xs)] sm:flex-row md:col-start-6",
                                        children: [(0, s.jsx)("span", {
                                            className: "flex h-full font-medium uppercase text-nowrap text-[var(--color-secondary-75)] text-[16px]",
                                            children: "(Services)"
                                        }), (0, s.jsx)("div", {
                                            className: "w-full max-w-[35ch] text-balance text-[length:var(--text-base-large)] font-medium leading-base text-[var(--color-secondary-50)]",
                                            children: (0, s.jsx)(i, {
                                                delay: .3,
                                                delayperwords: 0,
                                                text: "I specialize in building full-stack web applications that are fast, reliable, and user-friendly. With a solid foundation in both frontend and backend technologies, I help bring ideas to life whether it's for a business, a startup, or a product team."
                                            })
                                        })]
                                    })
                                })]
                            }), (0, s.jsx)("div", {
                                className: "w-full pt-[var(--space-lg)]",
                                children: (0, s.jsxs)("div", {
                                    className: "mt-12 gap-y-16 flex flex-col justify-between bg-[var(--color-secondary-400)]",
                                    children: [(0, s.jsxs)("div", {
                                        className: "sticky border-t border-t-[var(--color-secondary-300)] bg-[var(--color-secondary-400)] mb-[21.5em] c324:mb-[23em] c343:mb-[23.5em] c358:mb-[25em] c360:mb-[23em] c370:mb-[21em] cs3:mb-[19em]  c387:mb-[19.2em] cs5:mb-[18.2em] cs4:mb-[18em] sm:mb-[19em] md:mb-[19em]  cs1:mb-[18.5em] lg:mb-[20.1em]",
                                        style: {
                                            top: "20vh"
                                        },
                                        children: [(0, s.jsxs)("div", {
                                            className: "flex grid-cols-12 items-center justify-start gap-x-[var(--space-xs)] text-left text-[length:var(--text-heading-2)] font-semibold text-[var(--color-accent-400)] md:grid md:justify-between md:gap-x-[var(--gap-fluid)]",
                                            children: [(0, s.jsx)("span", {
                                                className: "col-span-2",
                                                children: "(01)"
                                            }), (0, s.jsxs)("h3", {
                                                className: "col-span-8 col-start-6 py-[var(--space-md)] 2xl:py-[var(--space-sm)]",
                                                children: ["Full-Stack Development", " "]
                                            })]
                                        }), (0, s.jsx)("div", {
                                            className: "grid-gap relative flex min-h-[30vh] flex-col place-items-start pt-[var(--space-3xs)] md:grid md:min-h-[40vh] md:grid-cols-12",
                                            children: (0, s.jsxs)("div", {
                                                className: "col-span-7 col-start-6 flex w-full flex-col gap-y-[var(--space-sm)] pt-[var(--space-sm)] text-[length:var(--text-heading-4)]",
                                                children: [(0, s.jsxs)("p", {
                                                    className: "max-w-[40ch] text-balance text-[length:var(--text-base)] font-medium text-[var(--color-secondary-50)]",
                                                    children: ["From frontend interactions to backend APIs, I build complete web solutions. I work with modern stacks to deliver apps that are scalable, maintainable, and ready for real-world users.", " "]
                                                }), (0, s.jsxs)("div", {
                                                    className: "flex flex-col divide-y divide-[var(--color-secondary-200)]",
                                                    children: [(0, s.jsxs)("span", {
                                                        className: " flex items-start gap-x-[var(--space-sm)] py-[var(--space-3xs)] font-bold text-[var(--color-accent-500)] xl:gap-x-[var(--space-md)] xl:py-[var(--space-2xs)] text-[length:var(--text-heading-4)]",
                                                        children: [(0, s.jsxs)("span", {
                                                            className: "font-mono text-[length:var(--text-base)] font-medium leading-[200%] text-[var(--color-secondary-75)]",
                                                            children: ["0", "1"]
                                                        }), "React, Node.js, Express.js", " "]
                                                    }), (0, s.jsxs)("span", {
                                                        className: "flex items-start gap-x-[var(--space-sm)] py-[var(--space-3xs)] font-bold text-[var(--color-accent-500)] xl:gap-x-[var(--space-md)] xl:py-[var(--space-2xs)]",
                                                        children: [(0, s.jsxs)("span", {
                                                            className: "font-mono text-[length:var(--text-base)] font-medium leading-[200%] text-[var(--color-secondary-75)]",
                                                            children: ["0", "2"]
                                                        }), "REST APIs, Firebase, Docker"]
                                                    }), (0, s.jsxs)("span", {
                                                        className: "flex items-start gap-x-[var(--space-sm)] py-[var(--space-3xs)] font-bold text-[var(--color-accent-500)] xl:gap-x-[var(--space-md)] xl:py-[var(--space-2xs)]",
                                                        children: [(0, s.jsxs)("span", {
                                                            className: "font-mono text-[length:var(--text-base)] font-medium leading-[200%] text-[var(--color-secondary-75)]",
                                                            children: ["0", "3"]
                                                        }), "Git, GitHub, Postman"]
                                                    })]
                                                })]
                                            })
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "sticky border-t border-t-[var(--color-secondary-300)]  bg-[var(--color-secondary-400)] mb-[15.5em] c343:mb-[17.5em] c358:mb-[16.5em] c360:mb-[15em] c370:mb-[16em] cs3:mb-[13.1em] c387:mb-[13em] cs5:mb-[13em]  cs4:mb-[13em] cs2:mb-[13.2em] sm:mb-[13em] md:mb-[13.5em] cs1:mb-[13em]  lg:mb-[14em] top-[calc(20vh+7em)] cs2:top-[calc(20vh+7em)] sm:top-[calc(20vh+6em)] md:top-[calc(20vh+8em)] cs1:top-[calc(20vh+6em)] lg:top-[calc(20vh+6em)]",
                                        children: [(0, s.jsxs)("div", {
                                            className: "flex grid-cols-12 items-center justify-start gap-x-[var(--space-xs)] text-left text-[length:var(--text-heading-2)] font-semibold text-[var(--color-accent-400)] md:grid md:justify-between md:gap-x-[var(--gap-fluid)]",
                                            children: [(0, s.jsx)("span", {
                                                className: "col-span-2",
                                                children: "(02)"
                                            }), (0, s.jsx)("h3", {
                                                className: "col-span-8 col-start-6 py-[var(--space-md)] 2xl:py-[var(--space-sm)]",
                                                children: "UI/UX & Frontend"
                                            })]
                                        }), (0, s.jsx)("div", {
                                            className: "grid-gap relative flex min-h-[30vh] flex-col place-items-start pt-[var(--space-3xs)] md:grid md:min-h-[40vh] md:grid-cols-12",
                                            children: (0, s.jsxs)("div", {
                                                className: "col-span-7 col-start-6 flex w-full flex-col gap-y-[var(--space-sm)] pt-[var(--space-sm)] text-[length:var(--text-heading-4)]",
                                                children: [(0, s.jsx)("p", {
                                                    className: "max-w-[40ch] text-balance text-[length:var(--text-base)] font-medium text-[var(--color-secondary-50)]",
                                                    children: "Design is more than looks — it’s about clarity and connection. I design and develop clean, responsive interfaces that feel intuitive across devices. My focus is on clarity, accessibility, and seamless user experiences."
                                                }), (0, s.jsxs)("div", {
                                                    className: "flex flex-col divide-y divide-[var(--color-secondary-200)]",
                                                    children: [(0, s.jsxs)("span", {
                                                        className: " flex items-start gap-x-[var(--space-sm)] py-[var(--space-3xs)] font-bold text-[var(--color-accent-500)] xl:gap-x-[var(--space-md)] xl:py-[var(--space-2xs)] text-[length:var(--text-heading-4)]",
                                                        children: [(0, s.jsxs)("span", {
                                                            className: "font-mono text-[length:var(--text-base)] font-medium leading-[200%] text-[var(--color-secondary-75)]",
                                                            children: ["0", "1"]
                                                        }), "NextJs, TailwindCSS, GSAP"]
                                                    }), (0, s.jsxs)("span", {
                                                        className: "flex items-start gap-x-[var(--space-sm)] py-[var(--space-3xs)] font-bold text-[var(--color-accent-500)] xl:gap-x-[var(--space-md)] xl:py-[var(--space-2xs)]",
                                                        children: [(0, s.jsxs)("span", {
                                                            className: "font-mono text-[length:var(--text-base)] font-medium leading-[200%] text-[var(--color-secondary-75)]",
                                                            children: ["0", "2"]
                                                        }), "Figma to Code"]
                                                    }), (0, s.jsxs)("span", {
                                                        className: "flex items-start gap-x-[var(--space-sm)] py-[var(--space-3xs)] font-bold text-[var(--color-accent-500)] xl:gap-x-[var(--space-md)] xl:py-[var(--space-2xs)]",
                                                        children: [(0, s.jsxs)("span", {
                                                            className: "font-mono text-[length:var(--text-base)] font-medium leading-[200%] text-[var(--color-secondary-75)]",
                                                            children: ["0", "3"]
                                                        }), "HTML, CSS, JavaScript"]
                                                    })]
                                                })]
                                            })
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "sticky border-t border-t-[var(--color-secondary-300)] bg-[var(--color-secondary-400)] mb-[7.5em] cs1:mb-[7em] lg:mb-[8em] top:calc(20vh + 16em)",
                                        children: [(0, s.jsxs)("div", {
                                            className: "flex grid-cols-12 items-center justify-start gap-x-[var(--space-xs)] text-left text-[length:var(--text-heading-2)] font-semibold text-[var(--color-accent-400)] md:grid md:justify-between md:gap-x-[var(--gap-fluid)]",
                                            children: [(0, s.jsx)("span", {
                                                className: "col-span-2",
                                                children: "(03)"
                                            }), (0, s.jsx)("h3", {
                                                className: "col-span-8 col-start-6 py-[var(--space-md)] 2xl:py-[var(--space-sm)]",
                                                children: "Optimization"
                                            })]
                                        }), (0, s.jsx)("div", {
                                            className: "grid-gap relative flex min-h-[30vh] flex-col place-items-start pt-[var(--space-3xs)] md:grid md:min-h-[40vh] md:grid-cols-12",
                                            children: (0, s.jsxs)("div", {
                                                className: "col-span-7 col-start-6 flex w-full flex-col gap-y-[var(--space-sm)] pt-[var(--space-sm)] text-[length:var(--text-heading-4)]",
                                                children: [(0, s.jsxs)("p", {
                                                    className: "max-w-[40ch] text-balance text-[length:var(--text-base)] font-medium text-[var(--color-secondary-50)]",
                                                    children: ["Beyond handling data, I’m driven by the challenge of turning complex raw inputs into reliable, usable systems. I enjoy designing pipelines that power insights and apply core CS principles to build for scale, speed, and stability.", " "]
                                                }), (0, s.jsxs)("div", {
                                                    className: "flex flex-col divide-y divide-[var(--color-secondary-200)]",
                                                    children: [(0, s.jsxs)("span", {
                                                        className: " flex items-start gap-x-[var(--space-sm)] py-[var(--space-3xs)] font-bold text-[var(--color-accent-500)] xl:gap-x-[var(--space-md)] xl:py-[var(--space-2xs)] text-[length:var(--text-heading-4)]",
                                                        children: [(0, s.jsxs)("span", {
                                                            className: "font-mono text-[length:var(--text-base)] font-medium leading-[200%] text-[var(--color-secondary-75)]",
                                                            children: ["0", "1"]
                                                        }), "Data Structures & Algorithms"]
                                                    }), (0, s.jsxs)("span", {
                                                        className: "flex items-start gap-x-[var(--space-sm)] py-[var(--space-3xs)] font-bold text-[var(--color-accent-500)] xl:gap-x-[var(--space-md)] xl:py-[var(--space-2xs)]",
                                                        children: [(0, s.jsxs)("span", {
                                                            className: "font-mono text-[length:var(--text-base)] font-medium leading-[200%] text-[var(--color-secondary-75)]",
                                                            children: ["0", "2"]
                                                        }), "DBMS, OOP, OS Fundamentals"]
                                                    }), (0, s.jsxs)("span", {
                                                        className: "flex items-start gap-x-[var(--space-sm)] py-[var(--space-3xs)] font-bold text-[var(--color-accent-500)] xl:gap-x-[var(--space-md)] xl:py-[var(--space-2xs)]",
                                                        children: [(0, s.jsxs)("span", {
                                                            className: "font-mono text-[length:var(--text-base)] font-medium leading-[200%] text-[var(--color-secondary-75)]",
                                                            children: ["0", "3"]
                                                        }), "Data Pipelines, ETL, and Scalability"]
                                                    })]
                                                })]
                                            })
                                        })]
                                    })]
                                })
                            })]
                        })
                    })]
                })
            }
            d.Ay.registerPlugin(x.A);
            var w = t(6755);

            function N(e) {
                let {
                    src: a,
                    alt: t,
                    className: r,
                    blurDataUrl: n
                } = e, {
                    ref: c,
                    isNear: i
                } = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "1100px",
                        a = (0, l.useRef)(null),
                        [t, s] = (0, l.useState)(!1);
                    return (0, l.useEffect)(() => {
                        let t = new IntersectionObserver(e => {
                            let [a] = e;
                            a.isIntersecting && s(!0)
                        }, {
                            rootMargin: e
                        });
                        return a.current && t.observe(a.current), () => t.disconnect()
                    }, [e]), {
                        ref: a,
                        isNear: t
                    }
                }("1200px");
                return (0, s.jsx)("div", {
                    ref: c,
                    children: (0, s.jsx)("div", {
                        style: {
                            width: "100%",
                            height: "100%"
                        },
                        children: i && (0, s.jsx)(w.dp, {
                            src: a,
                            placeholder: "blur",
                            blurDataURL: n,
                            alt: t,
                            crop: "fill",
                            gravity: "auto",
                            loading: "lazy",
                            fill: !0,
                            className: "h-full absolute w-full object-cover object-center transition-opacity duration-700 ease-in-out ".concat(r),
                            style: {
                                color: "transparent"
                            }
                        })
                    })
                })
            }
            let k = e => {
                let {
                    text: a,
                    className: t = "",
                    delay: r = 0,
                    duration: n = 1e3
                } = e, i = (0, l.useRef)(null), o = (0, l.useRef)(null), d = (0, c.W)(o, {
                    once: !0
                }), [x, m] = (0, l.useState)(!1);
                return (0, l.useEffect)(() => {
                    let e;
                    if (!d || x || !i.current) return;
                    let t = i.current,
                        s = 0,
                        l = n / (3 * a.length),
                        c = setTimeout(() => {
                            e = setInterval(() => {
                                t.innerText = a.split("").map((e, t) => t < s ? a[t] : "ABCDEFGHIJKLMNOPQRSTUVWXYZ" [Math.floor(26 * Math.random())]).join(""), s >= a.length && (clearInterval(e), m(!0)), s += 1 / 3
                            }, l)
                        }, r);
                    return () => {
                        clearTimeout(c), clearInterval(e)
                    }
                }, [d, r, n, a, x]), (0, s.jsx)("h1", {
                    ref: e => {
                        i.current = e, o.current = e
                    },
                    className: "font-mono cursor-default ".concat(t),
                    children: a
                })
            };
            var S = t(5028),
                L = t(3096);
            let C = (0, S.default)(() => Promise.all([t.e(910), t.e(640), t.e(806)]).then(t.bind(t, 2806)), {
                loadableGenerated: {
                    webpack: () => [2806]
                },
                ssr: !1
            });

            function A(e) {
                let {
                    playbackId: a
                } = e, {
                    ref: t,
                    inView: l
                } = (0, L.Wx)({
                    triggerOnce: !0,
                    rootMargin: "200px"
                });
                return (0, s.jsx)("div", {
                    ref: t,
                    className: "aspect-[4/3] w-full rounded-lg bg-gray-100 overflow-hidden",
                    children: l && (0, s.jsx)(C, {
                        playbackId: a
                    })
                })
            }
            let H = l.forwardRef((e, a) => {
                let {
                    index: t,
                    source: l,
                    muxid: r,
                    type: n,
                    name: c,
                    link: i,
                    blurDataUrl: o
                } = e;
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)("div", {
                        ref: a,
                        className: "@container ",
                        "data-index": t,
                        children: (0, s.jsxs)("a", {
                            href: i,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: [(0, s.jsxs)("div", {
                                className: "custom-cursor-area relative mt-5 flex aspect-square items-center justify-center overflow-clip rounded-md bg-[var(--color-secondary-300)] p-[var(--space-md)] sm:p-[var(--space-lg)] xl:p-[var(--space-2xl)]",
                                children: [(0, s.jsx)(N, {
                                    src: l,
                                    alt: "background",
                                    blurDataUrl: o
                                }), (0, s.jsx)("div", {
                                    className: "z-10 aspect-[4/3] w-full overflow-clip rounded-lg",
                                    children: (0, s.jsx)(A, {
                                        playbackId: r
                                    })
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "flex flex-col justify-between gap-y-[var(--space-sm)] pt-[var(--space-xs)] lg:flex-row",
                                children: [(0, s.jsxs)("div", {
                                    className: "flex flex-col gap-y-[var(--space-3xs)]",
                                    children: [(0, s.jsx)("span", {
                                        className: "font-mono text-var(--text-base-small) font-medium text-[var(--color-secondary-50)]",
                                        children: (0, s.jsx)(k, {
                                            text: n,
                                            delay: 200,
                                            duration: 600
                                        })
                                    }), (0, s.jsx)("div", {
                                        className: "w-fit text-[length:var(--text-heading-3)] font-semibold text-[var(--color-accent-400)]",
                                        children: (0, s.jsx)(k, {
                                            text: c,
                                            delay: 200,
                                            duration: 600
                                        })
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "flex items-end gap-x-[var(--space-3xs)] tracking-base text-[var(--color-secondary-50)]",
                                    children: [(0, s.jsx)("span", {
                                        className: "tag",
                                        children: "Development"
                                    }), (0, s.jsx)("span", {
                                        className: "tag border-[var(--color-secondary-50)] bg-[var(--color-secondary-50)] text-[var(--color-secondary-400)]",
                                        children: "2025"
                                    })]
                                })]
                            })]
                        })
                    })
                })
            });

            function E() {
                let [e, a] = (0, l.useState)(0), t = (0, l.useRef)([]);
                t.current = [];
                let r = e => {
                        e && !t.current.includes(e) && t.current.push(e)
                    },
                    n = [{
                        src: "6_jugckf",
                        muxid: "QpLBMxnNQMQHXri9nqPfg1nZLyJn5kg01vXlmX1auvEc",
                        type: "Modern Marketing Website",
                        name: "NURA",
                        link: "https://nurabyzuned.netlify.app/",
                        blurDataUrl: "https://res.cloudinary.com/dnocsf5bq/image/upload/w_10,q_1/v1748325061/6_jugckf.webp"
                    }, {
                        src: "3_nzf5vb",
                        muxid: "ZV01irv5jPmaRLo6XEcm5o4QHrEd9g6Rr5GyqdMd1R6g",
                        type: "Full-Stack Recruitment Platform",
                        name: "Job Portal",
                        link: "https://zunedjobs.netlify.app/",
                        blurDataUrl: "https://res.cloudinary.com/dnocsf5bq/image/upload/w_10,q_1/v1748325070/3_nzf5vb.jpg"
                    }, {
                        src: "2_frjjt5",
                        muxid: "viGHALwiNN7x4lw9K5ieeljgwL3z02KfplK56WNafF9k",
                        type: "SAAS Platform",
                        name: "Productivity SAAS",
                        link: "https://productivity-saas-zuned.netlify.app/",
                        blurDataUrl: "https://res.cloudinary.com/dnocsf5bq/image/upload/w_10,q_1/v1748325060/2_frjjt5.webp"
                    }, {
                        src: "7_lfufd9",
                        muxid: "6XNHwd01zOc87HAEvIL44GrSDL5vNQv9WSo00o02aNEeRg",
                        type: "ML Recommendation Engine",
                        name: "CineRec",
                        link: "https://movierecommendation-sbjn.onrender.com/",
                        blurDataUrl: "https://res.cloudinary.com/dnocsf5bq/image/upload/w_10,q_1/v1748325062/7_lfufd9.webp"
                    }, {
                        src: "1_phf5ng",
                        muxid: "KgB1H01cuYG14gDffVE1MPflRm4vG7z2YgTcsZN6Bplg",
                        type: "Code-to-Image Tool",
                        name: "Code2Img",
                        link: "https://code2img-zuned.netlify.app/",
                        blurDataUrl: "https://res.cloudinary.com/dnocsf5bq/image/upload/w_10,q_1/v1748325060/1_phf5ng.webp"
                    }];
                return (0, l.useEffect)(() => {
                    if (t.current.length !== n.length) return;
                    let e = t.current.map((e, t) => x.u.create({
                        trigger: e,
                        start: "top +=20%",
                        end: "bottom top+=33%",
                        onEnter: () => {
                            a(t)
                        },
                        onEnterBack: () => {
                            a(t)
                        }
                    }));
                    return () => {
                        e.forEach(e => e.kill()), x.u.refresh()
                    }
                }, [n.length, t.current.length]), (0, s.jsx)("section", {
                    id: "Works",
                    children: (0, s.jsxs)("div", {
                        className: "section-padding bg-[var(--color-secondary-400)]",
                        children: [(0, s.jsxs)("div", {
                            className: "flex flex-col gap-y-[var(--space-lg)] md:gap-y-[var(--space-2xl)]",
                            children: [(0, s.jsx)("h1", {
                                className: "section-heading relative text-[var(--color-accent-400)]",
                                children: (0, s.jsx)(o, {
                                    text: "SELECTED WORKS /",
                                    delayPerChar: .03
                                })
                            }), (0, s.jsx)("div", {
                                className: "grid-gap flex grid-cols-12 sm:justify-end lg:grid",
                                children: (0, s.jsxs)("div", {
                                    className: "col-span-7 col-start-1 flex flex-col gap-x-[var(--space-xl)] gap-y-[var(--space-2xs)] sm:col-start-6 sm:flex-row",
                                    children: [(0, s.jsx)("span", {
                                        className: "flex h-full font-medium uppercase text-nowrap text-[var(--color-secondary-75)]",
                                        children: "(PROJECTS)"
                                    }), (0, s.jsx)("div", {
                                        className: "w-full max-w-[25ch] text-balance font-medium leading-base text-[var(--color-secondary-50)] text-[length:var(--text-base-large)]",
                                        children: (0, s.jsx)(i, {
                                            delay: .7,
                                            delayperwords: .01,
                                            text: "Thoughtfully crafted digital experiences that blend utility and aesthetics into something functional, memorable, and refined."
                                        })
                                    })]
                                })
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "grid-gap grid grid-cols-12 pt-[var(--space-lg)]",
                            children: [(0, s.jsxs)("div", {
                                className: "sticky top-12 col-span-5 hidden h-fit w-full overflow-hidden text-[22vw] font-normal leading-[0.8] text-[var(--color-secondary-50)] md:flex",
                                children: [(0, s.jsx)("span", {
                                    className: "relative",
                                    children: "0"
                                }), (0, s.jsx)("div", {
                                    className: "relative ",
                                    children: (0, s.jsx)("div", {
                                        className: "absolute flex h-full w-fit flex-col transition-all duration-1000 ease-in-out",
                                        style: {
                                            transform: "translateY(".concat(-(100 * e), "%)")
                                        },
                                        children: n.map((e, a) => (0, s.jsx)("span", {
                                            className: "inline-block",
                                            children: a + 1
                                        }, a))
                                    })
                                })]
                            }), (0, s.jsx)("aside", {
                                className: "relative col-span-12 flex flex-col gap-y-[var(--space-xl)] md:col-span-7 md:gap-y-[var(--space-2xl)]",
                                children: n.map((e, a) => (0, s.jsx)(H, {
                                    ref: r,
                                    index: a,
                                    source: e.src,
                                    muxid: e.muxid,
                                    type: e.type,
                                    name: e.name,
                                    link: e.link,
                                    blurDataUrl: e.blurDataUrl
                                }, a))
                            })]
                        })]
                    })
                })
            }
            H.displayName = "Box", d.os.registerPlugin(x.u);
            let P = {
                "Languages & Tools": ["Python", "SQL", "C++", "Java", "Typescript", "JavaScript", "Git", "Postman", "Docker", "Firebase"],
                "Frameworks & Libraries": ["React", "Node.js", "Express.js", "Flask", "Bootstrap", "jQuery", "TailwindCSS", "Framer Motion", "GSAP"],
                "Core CS Concepts": ["DSA", "DBMS", "OOP", "Operating Systems", "System Design"]
            };

            function z() {
                return (0, s.jsx)("section", {
                    className: "self-start md:px-6 py-5 c370:px-3 px-0 bg-[var(--color-secondary-400)] text-[var(--color-accent-400)] w-full",
                    children: (0, s.jsxs)("div", {
                        className: "max-w-6xl mx-auto",
                        children: [(0, s.jsx)("h2", {
                            className: "md:text-[length:var(--text-h1-alt)] text-[length:var(--text-menu)] font-bold mb-8 text-center",
                            children: "Skills"
                        }), (0, s.jsx)("div", {
                            className: "grid grid-cols-3 md:grid-cols-3 c343:gap-1 gap-0 md:gap-5 md:p-5 c370:p-1 p-0",
                            children: Object.entries(P).map(e => {
                                let [a, t] = e;
                                return (0, s.jsxs)("div", {
                                    className: " c370:p-2 p-0  rounded-2xl shadow-md  hover:shadow-lg transition self-start",
                                    children: [(0, s.jsx)("h3", {
                                        className: "hidden md:flex text-xl font-semibold mb-4",
                                        children: a
                                    }), (0, s.jsx)("ul", {
                                        className: "space-y-3  md:text-base",
                                        children: t.map(e => (0, s.jsx)("div", {
                                            className: "flex relative items-start gap-2  text-[var(--color-secondary-50)] c343:text-[length:var(--text-base)] text-[length:var(--text-skill)]",
                                            children: (0, s.jsxs)(u.A, {
                                                children: [" ", (0, s.jsx)(k, {
                                                    text: e,
                                                    delay: 400
                                                })]
                                            })
                                        }, e))
                                    })]
                                }, a)
                            })
                        })]
                    })
                })
            }

            function D() {
                let e = (0, l.useRef)(null),
                    a = (0, l.useRef)(null);
                return (0, l.useLayoutEffect)(() => {
                    let t = d.Ay.context(() => {
                        d.Ay.to(a.current, {
                            scale: .95,
                            y: -100,
                            ease: "none",
                            scrollTrigger: {
                                trigger: a.current,
                                start: "top -10%",
                                end: "bottom 30%",
                                scrub: !0
                            }
                        })
                    }, e);
                    return () => {
                        t.revert()
                    }
                }, []), (0, s.jsx)("section", {
                    id: "About",
                    className: "mt-[-2vh]",
                    children: (0, s.jsx)("div", {
                        ref: e,
                        className: "z-[999999] relative",
                        children: (0, s.jsxs)("div", {
                            ref: a,
                            className: "section-padding sm:pb-[10em] pb-[5em] flex flex-col gap-y-[var(--space-lg)] rounded-b-3xl bg-[var(--color-secondary-400)] lg:gap-y-[var(--space-2xl)] md:pt-[15vh]",
                            children: [(0, s.jsxs)("div", {
                                className: "custom-grid",
                                children: [(0, s.jsxs)("h2", {
                                    className: "section-heading cs5:text-[length:var(--text-h1-display)] text-[length:var(--text-menu)] relative z-30 flex w-full flex-col col-span-full leading-none text-[var(--color-accent-400)] mix-blend-exclusion lg:col-span-8 lg:col-end-7 mt-[1em] mb-[1em] order-2 md:order-1",
                                    children: [(0, s.jsx)("span", {
                                        children: (0, s.jsx)(o, {
                                            text: "DEVELOPER",
                                            delay: 0
                                        })
                                    }), (0, s.jsx)("span", {
                                        children: (0, s.jsx)(o, {
                                            text: "DESIGNER",
                                            delay: .3
                                        })
                                    }), (0, s.jsx)("span", {
                                        children: (0, s.jsx)(o, {
                                            text: "CREATOR/",
                                            delay: .6
                                        })
                                    })]
                                }), (0, s.jsx)("div", {
                                    className: "relative z-0 lg:col-span-6 col-span-full flex  w-full items-center overflow-clip rounded-md  md:items-end order-1 md:order-2",
                                    children: (0, s.jsx)(z, {})
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "custom-grid col-span-full gap-y-[var(--space-lg)] lg:gap-y-[var(--space-2xl)]",
                                children: [(0, s.jsx)("div", {
                                    className: "pointer-events-none max-h-[30rem] relative z-0 col-span-3 flex aspect-square w-full items-center overflow-clip rounded-md sm:aspect-auto md:items-end",
                                    children: (0, s.jsx)(m.default, {
                                        src: "/1.webp",
                                        priority: !0,
                                        alt: "Just an Image.",
                                        width: 1536,
                                        height: 2040,
                                        className: "h-full w-full object-cover object-center"
                                    })
                                }), (0, s.jsxs)("div", {
                                    className: "col-span-7 col-start-6 flex flex-col gap-y-[var(--space-xl)] lg:gap-y-[var(--space-2xl)]",
                                    children: [(0, s.jsx)("div", {
                                        className: "relative w-full max-w-[39ch] text-balance text-[length:var(--text-heading-4)] font-medium leading-snug text-[var(--color-accent-400)]",
                                        children: (0, s.jsx)(i, {
                                            delayperwords: 0,
                                            delay: .5,
                                            text: "I'm a software engineer driven by a passion for turning ideas into clean, intuitive digital experiences."
                                        })
                                    }), (0, s.jsxs)("div", {
                                        className: "flex flex-col gap-x-[var(--space-xl)] gap-y-[var(--space-sm)] lg:flex-row",
                                        children: [(0, s.jsx)("span", {
                                            className: "flex h-fit overflow-clip font-mono tracking-[var(--tracking-mono)]",
                                            children: (0, s.jsx)("span", {
                                                className: "flex h-full font-medium uppercase text-nowrap text-[var(--color-secondary-50)]",
                                                children: (0, s.jsx)(o, {
                                                    delayPerChar: 0,
                                                    text: "(About Me)"
                                                })
                                            })
                                        }), (0, s.jsxs)("div", {
                                            className: "flex w-full gap-y-4 max-w-[38ch] flex-col text-balance text-[length:var(--text-base)] font-medium leading-base text-[var(--color-secondary-50)]",
                                            children: [(0, s.jsx)(i, {
                                                text: "I am a passionate Software Engineer with a knack for building full-stack web applications using modern technologies like Next.js and Tailwind CSS. My journey in tech began with a curiosity for solving real-world problems through innovative solutions, which evolved into a love for crafting user-centric digital experiences. ",
                                                delayperwords: 0,
                                                delay: .5
                                            }), (0, s.jsx)(i, {
                                                text: "Beyond coding, I thrive in collaborative environments and enjoy tackling challenging problems with creative solutions. I aim to contribute to impactful projects that make a difference in\xa0users'\xa0lives.",
                                                delayperwords: 0,
                                                delay: .5
                                            })]
                                        })]
                                    })]
                                })]
                            })]
                        })
                    })
                })
            }

            function M() {
                let [e, a] = (0, l.useState)({
                    name: "",
                    email: "",
                    message: ""
                }), [t, r] = (0, l.useState)({}), [n, c] = (0, l.useState)(""), i = () => {
                    let a = {};
                    return e.email.trim() && !/^\S+@\S+\.\S+$/.test(e.email) && (a.email = "Please enter a valid email."), e.message.trim() || (a.message = "Please enter your message."), a
                }, o = s => {
                    a({ ...e,
                        [s.target.name]: s.target.value
                    }), r({ ...t,
                        [s.target.name]: ""
                    })
                }, d = async t => {
                    var s;
                    if (t.preventDefault(), null == (s = t.target.elements.namedItem("hp")) ? void 0 : s.value) return;
                    let l = i();
                    if (Object.keys(l).length > 0) return void r(l);
                    c("loading");
                    let n = new FormData;
                    n.append("name", e.name), n.append("email", e.email), n.append("message", e.message);
                    try {
                        if ((await fetch("https://script.google.com/macros/s/AKfycbxtM8evccgPBCDvwmAN25_qP1t1Qc2veZ6eWngXP8OkYBZTQayF5N2cv8oxYVfnsvMk/exec", {
                                method: "POST",
                                body: n
                            })).ok) c("success"), a({
                            name: "",
                            email: "",
                            message: ""
                        });
                        else throw Error("Failed to submit")
                    } catch (e) {
                        c("error")
                    }
                };
                return (0, s.jsxs)("section", {
                    id: "Contact",
                    className: "sm:w-[36rem] w-[100%]  mx-auto my-10 px-6 sm:px-10 xl:px-14 py-12 rounded-2xl backdrop-blur-xl bg-[rgba(209,209,199,0.05)] border border-[rgba(255,255,255,0.1)] shadow-[0_4px_30px_rgba(0,0,0,0.1)]",
                    children: [(0, s.jsxs)("h2", {
                        className: "text-center text-[length:var(--text-h4)] font-medium mb-8 text-[var(--color-accent-200)] tracking-tight",
                        children: ["Say Hello", " "]
                    }), (0, s.jsxs)("form", {
                        noValidate: !0,
                        className: "space-y-4 gform",
                        method: "POST",
                        onSubmit: d,
                        onKeyDown: e => {
                            "Enter" === e.key && e.preventDefault()
                        },
                        children: [(0, s.jsx)("input", {
                            type: "text",
                            name: "hp",
                            style: {
                                display: "none"
                            },
                            tabIndex: -1,
                            autoComplete: "off"
                        }), (0, s.jsxs)("div", {
                            children: [(0, s.jsx)("input", {
                                type: "text",
                                name: "name",
                                placeholder: "Drop a name",
                                onKeyDown: a => {
                                    if ("Enter" === a.key) {
                                        a.preventDefault();
                                        let t = {};
                                        e.name.trim() || (t.name = "Please enter your name."), r(e => ({ ...e,
                                            ...t
                                        }))
                                    }
                                },
                                value: e.name,
                                onChange: o,
                                className: "w-full placeholder:font-[400] font-normal text-[length:var(--text-base)] rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-[var(--color-text-bg)] placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition"
                            }), (0, s.jsx)("p", {
                                className: "text-red-400 text-sm mt-1 h-5 transition-all duration-300 ".concat(t.name ? "opacity-100 visible" : "opacity-0 invisible"),
                                children: t.name || ""
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "relative",
                            children: [(0, s.jsx)("input", {
                                onKeyDown: a => {
                                    if ("Enter" === a.key) {
                                        a.preventDefault();
                                        let t = {};
                                        e.email.trim() ? e.email.trim() && !/^\S+@\S+\.\S+$/.test(e.email) && (t.email = "Please enter a valid email.") : t.email = "Please enter your email.", r(e => ({ ...e,
                                            ...t
                                        }))
                                    }
                                },
                                type: "email",
                                name: "email",
                                placeholder: "Wanna hear back? Add your email",
                                value: e.email,
                                onChange: o,
                                className: "w-full placeholder:font-[400]  text-[length:var(--text-base)] font-normal rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-[var(--color-text-bg)] placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition"
                            }), (0, s.jsx)("p", {
                                className: "text-red-400 text-sm mt-1 transition-all duration-300 ".concat(t.email ? "opacity-100 visible" : "opacity-0 invisible"),
                                children: t.email || "Placeholder"
                            })]
                        }), (0, s.jsxs)("div", {
                            children: [(0, s.jsx)("textarea", {
                                name: "message",
                                placeholder: "Say hello or drop a note...",
                                rows: 5,
                                value: e.message,
                                onChange: o,
                                onKeyDown: a => {
                                    if ("Enter" === a.key) {
                                        a.preventDefault();
                                        let t = {};
                                        e.message.trim() || (t.message = "Please enter a message."), r(e => ({ ...e,
                                            ...t
                                        }))
                                    }
                                },
                                required: !0,
                                className: "w-full placeholder:font-[400] font-normal rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-[var(--color-text-bg)] placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition resize-none"
                            }), (0, s.jsx)("p", {
                                className: "text-red-400 text-sm mt-1 h-5 transition-all duration-300 ".concat(t.message ? "opacity-100 visible" : "opacity-0 invisible"),
                                children: t.message || ""
                            })]
                        }), (0, s.jsx)("button", {
                            type: "submit",
                            disabled: "loading" === n,
                            className: "\n    w-full\n    px-6 py-3 rounded-xl font-semibold tracking-wide text-[length:var(--text--small)]\n    transition-all duration-100\n\n    ".concat("loading" === n ? "bg-[var(--color-accent-200)] text-black cursor-not-allowed animate-pulse-subtle" : "bg-[var(--color-accent-200)] text-black hover:bg-white active:scale-[0.98] active:shadow-inner", "\n  "),
                            children: "loading" === n ? "Just a moment..." : "Send Message"
                        }), "success" === n && (0, s.jsx)("p", {
                            className: "text-[--color-accent-400] text-center",
                            children: "Thank you! I'll get back to you shortly!"
                        })]
                    })]
                })
            }

            function I() {
                let e = (0, l.useRef)(null);
                return (0, l.useLayoutEffect)(() => {
                    let a = d.Ay.context(() => {
                        d.Ay.to(e.current, {
                            y: -100,
                            ease: "power1.out",
                            scrollTrigger: {
                                trigger: e.current,
                                start: "top 100%",
                                end: "top -60%",
                                scrub: !0
                            }
                        })
                    });
                    return () => {
                        a.revert()
                    }
                }, []), (0, s.jsx)("div", {
                    ref: e,
                    className: " section-padding-x translate-y-[-20vh] sm:translate-y-[-80vh] py-[var(--space-lg)] ",
                    children: (0, s.jsxs)("div", {
                        className: "relative flex h-full w-full flex-col items-center justify-between rounded-md bg-[linear-gradient(0deg,_#393632,_#080807)] bg-cover  border border-white/10 shadow-lg backdrop-blur-xl p-[var(--space-md)]",
                        children: [(0, s.jsx)("h2", {
                            className: "max-w-[10ch] text-center text-[length:var(--text-heading-1)] font-semibold uppercase text-[var(--color-accent-400)]",
                            children: (0, s.jsx)(i, {
                                delay: .3,
                                delayperwords: .1,
                                text: "Let's   Make  It  Happen "
                            })
                        }), (0, s.jsx)(M, {})]
                    })
                })
            }
            d.Ay.registerPlugin(x.u);
            var R = t(9960);

            function T() {
                let e = (0, l.useRef)(null),
                    a = (0, l.useRef)(null),
                    t = (0, l.useRef)(null),
                    r = (0, l.useRef)(null),
                    c = (0, l.useRef)(null);
                return (0, l.useLayoutEffect)(() => {
                    let t = d.Ay.context(() => {
                        d.Ay.to(a.current, {
                            scale: .95,
                            y: 42,
                            opacity: 0,
                            ease: "none",
                            scrollTrigger: {
                                trigger: e.current,
                                start: "top 100%",
                                end: "top 40%",
                                scrub: !0
                            }
                        })
                    }, e);
                    return () => t.revert()
                }, []), (0, l.useEffect)(() => {
                    d.Ay.to(t.current, {
                        clipPath: "inset(0% 0% 0% 0%)",
                        scale: 1,
                        opacity: 1,
                        duration: 1.8,
                        delay: 1.2,
                        ease: "power3.out"
                    }), d.Ay.to(r.current, {
                        opacity: 1,
                        duration: 2,
                        delay: 1.1,
                        ease: "power3.out"
                    }), d.Ay.to(c.current, {
                        opacity: 1,
                        duration: 1.2,
                        translateY: 0,
                        delay: 1.3,
                        ease: "power3.out"
                    })
                }, []), (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)("section", {
                        className: "mb-[-100svh] py-0 ",
                        children: [(0, s.jsx)("div", {
                            className: "section-padding-equal sticky top-0 flex h-svh items-end",
                            ref: a,
                            children: (0, s.jsxs)("div", {
                                className: "relative flex w-full flex-col md:gap-y-[var(--space-lg)] ",
                                children: [(0, s.jsxs)("h1", {
                                    className: "text-[length:var(--text-h1)] overflow-clip",
                                    children: [(0, s.jsx)(n, {
                                        className: "hidden h-full w-full md:block"
                                    }), (0, s.jsxs)("span", {
                                        className: "flex flex-col text-[length:var(--text-heading-display)] font-semibold uppercase leading-[80%] tracking-[var(--tracking-heading)] text-[var(--color-secondary-400)] md:hidden",
                                        children: [(0, s.jsx)(o, {
                                            text: "ZUNED",
                                            delay: 0
                                        }), (0, s.jsx)(o, {
                                            text: "AALIM",
                                            delay: .3
                                        })]
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "relative grid w-full grid-cols-12 justify-between gap-x-[var(--gap-fluid)] gap-y-[var(--space-md)]",
                                    children: [(0, s.jsx)("div", {
                                        className: "col-span-12 flex flex-col justify-between gap-y-[var(--space-2xl)] pt-[var(--space-sm)] md:col-span-4 md:gap-y-[var(--space-md)]",
                                        children: (0, s.jsxs)("div", {
                                            className: "grid-gap flex flex-col gap-[var(--space-md)] md:gap-y-[var(--space-xl)]",
                                            children: [(0, s.jsx)("div", {
                                                className: "hidden overflow-clip md:block",
                                                children: (0, s.jsx)("span", {
                                                    className: "block",
                                                    ref: r,
                                                    style: {
                                                        opacity: 0
                                                    },
                                                    children: (0, s.jsxs)("svg", {
                                                        stroke: "currentColor",
                                                        fill: "none",
                                                        strokeWidth: 1.25,
                                                        viewBox: "6 6 12 12",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        className: "m-0 size-4 p-0 md:size-6",
                                                        style: {
                                                            color: "#8C8C73"
                                                        },
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: [(0, s.jsx)("line", {
                                                            x1: "7",
                                                            y1: "7",
                                                            x2: "17",
                                                            y2: "17"
                                                        }), (0, s.jsx)("polyline", {
                                                            points: "17 7 17 17 7 17"
                                                        })]
                                                    })
                                                })
                                            }), (0, s.jsxs)("div", {
                                                className: "flex flex-col gap-y-[var(--space-sm)] md:gap-y-[var(--space-md)]",
                                                children: [(0, s.jsx)("div", {
                                                    className: "w-full max-w-[32ch] text-balance text-[length:var(--text-base)] font-medium leading-snug text-[var(--color-secondary-100)] xl:text-[length:var(--text-base-large)] 3xl:text-[length:var(--text-heading-body)]",
                                                    children: (0, s.jsx)(i, {
                                                        className: "break-words",
                                                        text: "Open to job opportunities worldwide. Passionate about building polished, intuitive, and thoughtful digital experiences that leave a mark.",
                                                        delayperwords: 0,
                                                        delay: 1.3
                                                    })
                                                }), (0, s.jsx)("div", {
                                                    className: "overflow-clip",
                                                    children: (0, s.jsx)("div", {
                                                        className: "",
                                                        ref: c,
                                                        style: {
                                                            opacity: 0,
                                                            transform: "translateY(100px)"
                                                        },
                                                        children: (0, s.jsx)(h(), {
                                                            href: "#Contact",
                                                            children: (0, s.jsx)(R.default, {
                                                                text: "CONTACT ↗"
                                                            })
                                                        })
                                                    })
                                                })]
                                            })]
                                        })
                                    }), (0, s.jsx)("div", {
                                        className: "col-span-4 flex flex-col items-start md:items-center",
                                        children: (0, s.jsx)("div", {
                                            className: "flex h-fit w-fit flex-col items-center justify-center gap-y-[var(--space-2xs)] overflow-hidden rounded-md",
                                            children: (0, s.jsx)("div", {
                                                className: "pointer-events-none h-[15vh] max-w-lg rounded-lg md:h-[50vh]",
                                                ref: t,
                                                style: {
                                                    clipPath: "inset(0 0 100% 0)",
                                                    opacity: 0,
                                                    scale: 1.3
                                                },
                                                children: (0, s.jsx)(m.default, {
                                                    src: "/1.webp",
                                                    alt: "Just an Image.",
                                                    width: 1536,
                                                    height: 2040,
                                                    priority: !0,
                                                    className: "h-full w-full object-cover object-center grayscale"
                                                })
                                            })
                                        })
                                    }), (0, s.jsxs)("div", {
                                        className: "end-1 col-span-8 flex w-full flex-col items-end justify-end md:col-span-4",
                                        children: [(0, s.jsx)("div", {
                                            className: "overflow-clip",
                                            children: (0, s.jsx)("span", {
                                                className: "block max-w-[15ch] text-right font-mono text-[length:var(--text-base-small)] font-medium uppercase leading-snug tracking-[var(--tracking-mono)] text-[--color-secondary-100] md:max-w-max 3xl:text-[length:var(--text-base)]",
                                                children: (0, s.jsx)(i, {
                                                    text: "Available for work",
                                                    delay: 1.3,
                                                    delayperwords: .01
                                                })
                                            })
                                        }), (0, s.jsx)("div", {
                                            className: "overflow-clip",
                                            children: (0, s.jsx)("span", {
                                                className: "block text-[length:var(--text-heading-2)] font-semibold uppercase leading-none tracking-[var(--tracking-heading)] text-[var(--color-secondary-300)] sm:text-[length:var(--text-heading-1--alt)] 3xl:text-[length:var(--text-heading-1)]",
                                                children: (0, s.jsx)(i, {
                                                    text: "Jun'25 ",
                                                    delay: 1.3,
                                                    delayperwords: .01
                                                })
                                            })
                                        })]
                                    })]
                                })]
                            })
                        }), (0, s.jsx)("div", {
                            className: "h-svh"
                        })]
                    }), (0, s.jsxs)("div", {
                        className: "relative z-[10] min-h-screen w-full overflow-x-clip",
                        ref: e,
                        children: [(0, s.jsx)(j, {}), (0, s.jsx)(E, {}), (0, s.jsx)(D, {}), (0, s.jsx)(I, {})]
                    })]
                })
            }
            d.Ay.registerPlugin(x.u)
        },
        9178: (e, a, t) => {
            "use strict";
            t.d(a, {
                A: () => c
            });
            var s = t(5155),
                l = t(6874),
                r = t.n(l);
            t(2115);
            var n = t(2596);
            let c = e => {
                let {
                    href: a,
                    children: t,
                    className: l,
                    ...c
                } = e, i = (0, n.A)("group relative block h-fit   overflow-hidden font-medium select-none", l);
                a && (i = (0, n.A)("group relative block h-fit  overflow-hidden font-medium cursor-pointer select-none", l));
                let o = (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)("span", {
                        className: "block w-full transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-0 group-hover:-translate-y-full",
                        children: t
                    }), (0, s.jsx)("span", {
                        "aria-hidden": "true",
                        className: "absolute top-0 left-0 w-full block transition-transform duration-[0.4s] ease-[cubic-bezier(.51,.92,.24,1.15)] translate-y-full group-hover:translate-y-0",
                        children: t
                    })]
                });
                return a ? (0, s.jsx)(r(), {
                    href: a,
                    className: i,
                    ...c,
                    children: o
                }) : (0, s.jsx)("span", {
                    className: i,
                    ...c,
                    children: o
                })
            }
        },
        9605: (e, a, t) => {
            "use strict";
            t.d(a, {
                default: () => o
            });
            var s = t(5155),
                l = t(6766),
                r = t(9178),
                n = t(2115);
            let c = e => {
                    let {
                        timezone: a,
                        shortName: t
                    } = e, [l, r] = (0, n.useState)("");
                    return ((0, n.useEffect)(() => {
                        let e = () => {
                            let e = new Date,
                                s = {
                                    hour: "numeric",
                                    minute: "2-digit",
                                    second: "2-digit",
                                    hour12: !0
                                };
                            a && (s.timeZone = a);
                            let l = e.toLocaleTimeString("en-US", s);
                            t && (l = l.replace(/\s([A-Z]{3,5}|GMT[+-]\d{1,2}(:\d{2})?)$/i, "")), r(l)
                        };
                        e();
                        let s = setInterval(e, 1e3);
                        return () => clearInterval(s)
                    }, [a, t]), l) ? (0, s.jsxs)(s.Fragment, {
                        children: [l, t && ", ".concat(t)]
                    }) : (0, s.jsx)("span", {
                        className: "font-mono font-medium uppercase tracking-[var(--tracking-mono)] text-[var(--color-secondary-100)]",
                        children: "Loading..."
                    })
                },
                i = {
                    src: "/_next/static/media/arrow.d4e31afc.svg",
                    height: 28,
                    width: 26,
                    blurWidth: 0,
                    blurHeight: 0
                };

            function o() {
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)("div", {
                        className: "section-padding-equal relative flex flex-col items-center justify-center gap-y-[var(--space-xl)] py-[var(--space-lg)]",
                        children: [(0, s.jsxs)("div", {
                            className: "grid-gap grid w-full grid-cols-2 gap-y-[var(--space-md)] text-[length:var(--text-base)] md:grid-cols-12",
                            children: [(0, s.jsxs)("div", {
                                className: "flex flex-col md:col-span-6",
                                children: [(0, s.jsx)("h3", {
                                    className: "mb-[var(--space-xs)] flex border-b-[1.5px] border-[var(--color-accent-500)] pb-[var(--space-2xs)] font-bold tracking-base text-[var(--color-secondary-300)]",
                                    children: "Menu"
                                }), (0, s.jsx)("ul", {
                                    className: "flex flex-col gap-y-[var(--space-3xs)]",
                                    children: [{
                                        text: "Home",
                                        href: "/"
                                    }, {
                                        text: "Services",
                                        href: "#Services"
                                    }, {
                                        text: "Works",
                                        href: "#Works"
                                    }, {
                                        text: "About",
                                        href: "#About"
                                    }, {
                                        text: "Contact",
                                        href: "#Contact"
                                    }].map(e => (0, s.jsxs)("li", {
                                        children: [" ", (0, s.jsx)(r.A, {
                                            href: e.href,
                                            className: "flex w-fit leading-base text-[var(--color-secondary-100)] sm:leading-snug",
                                            children: e.text
                                        })]
                                    }, e.href))
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "flex flex-col md:col-span-3",
                                children: [(0, s.jsx)("h3", {
                                    className: "mb-[var(--space-xs)] flex border-b-[1.5px] border-[var(--color-accent-500)] pb-[var(--space-2xs)] font-bold tracking-base text-[var(--color-secondary-300)]",
                                    children: "Socials"
                                }), (0, s.jsx)("ul", {
                                    className: "flex flex-col gap-y-[var(--space-3xs)]",
                                    children: [{
                                        text: "Linkedin",
                                        href: "https://www.linkedin.com/in/zunedaalim/"
                                    }, {
                                        text: "Instagram",
                                        href: "https://www.instagram.com/zuned_aalim/"
                                    }, {
                                        text: "Github",
                                        href: "https://github.com/zunedaalim"
                                    }].map(e => (0, s.jsxs)("li", {
                                        children: [" ", (0, s.jsx)(r.A, {
                                            href: e.href,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "flex w-fit leading-base text-[var(--color-secondary-100)] sm:leading-snug",
                                            children: e.text
                                        })]
                                    }, e.href))
                                })]
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "grid-gap flex w-full items-end justify-between md:grid md:grid-cols-12",
                            children: [(0, s.jsx)("span", {
                                className: "flex  font-[500] flex-col text-[length:var(--text-heading-3)]  leading-tight tracking-[var(--tracking-heading)] text-[var(--color-secondary-300)] sm:order-first sm:text-[length:var(--text-heading-3)] md:col-span-6"
                            }), (0, s.jsxs)("div", {
                                className: "flex flex-col text-[length:var(--text-base-small)] md:col-span-3",
                                children: [(0, s.jsx)("span", {
                                    className: "font-bold uppercase text-[var(--color-secondary-300)]",
                                    children: "Local time"
                                }), (0, s.jsx)("span", {
                                    className: "font-mono font-medium uppercase tracking-[var(--tracking-mono)] text-[var(--color-secondary-100)]",
                                    children: (0, s.jsx)(c, {
                                        timezone: "Asia/Kolkata",
                                        shortName: "IST"
                                    })
                                })]
                            }), (0, s.jsx)("div", {
                                className: "hidden h-fit w-full justify-end md:col-span-3 md:flex",
                                children: (0, s.jsxs)("div", {
                                    className: "w-fit",
                                    style: {
                                        transform: "none"
                                    },
                                    children: [" ", (0, s.jsxs)("button", {
                                        "aria-label": "Scroll to top",
                                        className: "group relative hidden w-fit flex-col items-center justify-center overflow-hidden rounded-full bg-[var(--color-accent-500)] p-[var(--space-lg)] duration-1000 ease-expo hover:scale-90 md:flex",
                                        onClick: () => window.scrollTo({
                                            top: 0,
                                            behavior: "smooth"
                                        }),
                                        children: [(0, s.jsx)("span", {
                                            className: "absolute flex transition-all duration-500 ease-in-out-cubic group-hover:-translate-y-20",
                                            children: (0, s.jsx)(l.default, {
                                                alt: "Scroll to top arrow",
                                                loading: "lazy",
                                                width: 26,
                                                height: 28,
                                                decoding: "async",
                                                src: i
                                            })
                                        }), (0, s.jsx)("span", {
                                            className: "absolute flex translate-y-20 transition-all duration-500 ease-in-out-cubic group-hover:translate-y-0",
                                            children: (0, s.jsx)(l.default, {
                                                alt: "Scroll to top arrow",
                                                loading: "lazy",
                                                width: 26,
                                                height: 28,
                                                decoding: "async",
                                                src: i
                                            })
                                        })]
                                    })]
                                })
                            })]
                        })]
                    })
                })
            }
        },
        9960: (e, a, t) => {
            "use strict";
            t.d(a, {
                default: () => l
            });
            var s = t(5155);
            t(2115);
            let l = e => {
                let {
                    text: a
                } = e;
                return (0, s.jsxs)("button", {
                    className: "group pointer-events-auto relative flex h-fit w-fit items-center justify-center overflow-hidden rounded-full bg-[var(--color-secondary-300)] px-[var(--space-md)] sm:py-[var(--space-sm)] py-[var(--space-xs)] font-bold uppercase tracking-wide text-[#f1f0ed] sm:text-[length:var(--text-base)] text-[length:var(--text-base-small)]",
                    children: [(0, s.jsx)("span", {
                        className: "absolute inset-0 z-10 block overflow-hidden",
                        children: (0, s.jsx)("span", {
                            className: "block h-full w-full translate-y-full rounded-t-[15rem] bg-[var(--color-accent-600)] transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] sm:group-hover:translate-y-0 sm:group-hover:rounded-none"
                        })
                    }), (0, s.jsx)("span", {
                        className: "relative z-20 block overflow-hidden transition-all",
                        children: (0, s.jsx)("span", {
                            className: "block after:absolute after:left-0 after:block after:translate-y-0 after:transition-all after:duration-500 after:ease-[cubic-bezier(0.77,0,0.175,1)] after:content-[attr(data-after)] sm:group-hover:after:-translate-y-full",
                            "data-after": a,
                            children: (0, s.jsx)("span", {
                                className: "flex transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] sm:group-hover:-translate-y-full",
                                children: a
                            })
                        })
                    })]
                })
            }
        }
    },
    e => {
        var a = a => e(e.s = a);
        e.O(0, [592, 874, 6, 441, 684, 358], () => a(7746)), _N_E = e.O()
    }
]);