/*
 *  /MathJax/jax/output/HTML-CSS/autoload/mtable.js
 *
 *  Copyright (c) 2009-2015 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready", function () {
    var c = "2.5.0";
    var a = MathJax.ElementJax.mml, b = MathJax.OutputJax["HTML-CSS"];
    a.mtable.Augment({
        toHTML: function (r) {
            r = this.HTMLcreateSpan(r);
            if (this.data.length === 0) {
                return r
            }
            var I = this.getValues("columnalign", "rowalign", "columnspacing", "rowspacing", "columnwidth", "equalcolumns", "equalrows", "columnlines", "rowlines", "frame", "framespacing", "align", "useHeight", "width", "side", "minlabelspacing");
            var aK = I.width.match(/%$/);
            var ax = b.createStack(r);
            var aH = this.HTMLgetScale(), aA = this.HTMLgetMu(r), aB = -1;
            var ap = [], at = [], aj = [], av = [], au = [], ae, ad, ao = -1, ac, an, X, aF, Q, aC, aP = [], aU;
            var G = b.FONTDATA.lineH * aH * I.useHeight, N = b.FONTDATA.lineD * aH * I.useHeight;
            for (ae = 0, ac = this.data.length; ae < ac; ae++) {
                aF = this.data[ae];
                X = (aF.type === "mlabeledtr" ? aB : 0);
                av[ae] = [];
                ap[ae] = G;
                at[ae] = N;
                for (ad = X, an = aF.data.length + X; ad < an; ad++) {
                    if (aj[ad] == null) {
                        if (ad > ao) {
                            ao = ad
                        }
                        au[ad] = b.createStack(b.createBox(ax));
                        aj[ad] = -b.BIGDIMEN
                    }
                    av[ae][ad] = b.createBox(au[ad]);
                    aP.push(aF.data[ad - X].toHTML(av[ae][ad]))
                }
            }
            b.MeasureSpans(aP);
            for (ae = 0, ac = this.data.length; ae < ac; ae++) {
                aF = this.data[ae];
                X = (aF.type === "mlabeledtr" ? aB : 0);
                for (ad = X, an = aF.data.length + X; ad < an; ad++) {
                    Q = aF.data[ad - X];
                    if (Q.isMultiline) {
                        av[ae][ad].style.width = "100%"
                    }
                    if (Q.isEmbellished()) {
                        aC = Q.CoreMO();
                        var aT = aC.Get("minsize", true);
                        if (aT) {
                            var aM = aC.HTMLspanElement().bbox;
                            if (aC.HTMLcanStretch("Vertical")) {
                                aU = aM.h + aM.d;
                                if (aU) {
                                    aT = b.length2em(aT, aA, aU);
                                    if (aT * aM.h / aU > ap[ae]) {
                                        ap[ae] = aT * aM.h / aU
                                    }
                                    if (aT * aM.d / aU > at[ae]) {
                                        at[ae] = aT * aM.d / aU
                                    }
                                }
                            } else {
                                if (aC.HTMLcanStretch("Horizontal")) {
                                    aT = b.length2em(aT, aA, aM.w);
                                    if (aT > aj[ad]) {
                                        aj[ad] = aT
                                    }
                                }
                            }
                        }
                    }
                    if (av[ae][ad].bbox.h > ap[ae]) {
                        ap[ae] = av[ae][ad].bbox.h
                    }
                    if (av[ae][ad].bbox.d > at[ae]) {
                        at[ae] = av[ae][ad].bbox.d
                    }
                    if (av[ae][ad].bbox.w > aj[ad]) {
                        aj[ad] = av[ae][ad].bbox.w
                    }
                }
            }
            var aE = MathJax.Hub.SplitList;
            var az = aE(I.columnspacing), aR = aE(I.rowspacing), e = aE(I.columnalign), B = aE(I.rowalign), d = aE(I.columnlines), w = aE(I.rowlines), aN = aE(I.columnwidth), U = [];
            for (ae = 0, ac = az.length; ae < ac; ae++) {
                az[ae] = b.length2em(az[ae], aA)
            }
            for (ae = 0, ac = aR.length; ae < ac; ae++) {
                aR[ae] = b.length2em(aR[ae], aA)
            }
            while (az.length < ao) {
                az.push(az[az.length - 1])
            }
            while (e.length <= ao) {
                e.push(e[e.length - 1])
            }
            while (d.length < ao) {
                d.push(d[d.length - 1])
            }
            while (aN.length <= ao) {
                aN.push(aN[aN.length - 1])
            }
            while (aR.length < av.length) {
                aR.push(aR[aR.length - 1])
            }
            while (B.length <= av.length) {
                B.push(B[B.length - 1])
            }
            while (w.length < av.length) {
                w.push(w[w.length - 1])
            }
            if (au[aB]) {
                e[aB] = (I.side.substr(0, 1) === "l" ? "left" : "right");
                az[aB] = -aj[aB]
            }
            for (ae = 0, ac = av.length; ae < ac; ae++) {
                aF = this.data[ae];
                U[ae] = [];
                if (aF.rowalign) {
                    B[ae] = aF.rowalign
                }
                if (aF.columnalign) {
                    U[ae] = aE(aF.columnalign);
                    while (U[ae].length <= ao) {
                        U[ae].push(U[ae][U[ae].length - 1])
                    }
                }
            }
            if (I.equalrows) {
                var aD = Math.max.apply(Math, ap), V = Math.max.apply(Math, at);
                for (ae = 0, ac = av.length; ae < ac; ae++) {
                    X = ((aD + V) - (ap[ae] + at[ae])) / 2;
                    ap[ae] += X;
                    at[ae] += X
                }
            }
            aU = ap[0] + at[av.length - 1];
            for (ae = 0, ac = av.length - 1; ae < ac; ae++) {
                aU += Math.max(0, at[ae] + ap[ae + 1] + aR[ae])
            }
            var aJ = 0, aI = 0, aW, g = aU;
            if (I.frame !== "none" || (I.columnlines + I.rowlines).match(/solid|dashed/)) {
                var v = aE(I.framespacing);
                if (v.length != 2) {
                    v = aE(this.defaults.framespacing)
                }
                aJ = b.length2em(v[0], aA);
                aI = b.length2em(v[1], aA);
                g = aU + 2 * aI
            }
            var ai, aV, aa = "";
            if (typeof(I.align) !== "string") {
                I.align = String(I.align)
            }
            if (I.align.match(/(top|bottom|center|baseline|axis)( +(-?\d+))?/)) {
                aa = RegExp.$3 || "";
                I.align = RegExp.$1
            } else {
                I.align = this.defaults.align
            }
            if (aa !== "") {
                aa = parseInt(aa);
                if (aa < 0) {
                    aa = av.length + 1 + aa
                }
                if (aa < 1) {
                    aa = 1
                } else {
                    if (aa > av.length) {
                        aa = av.length
                    }
                }
                ai = 0;
                aV = -(aU + aI) + ap[0];
                for (ae = 0, ac = aa - 1; ae < ac; ae++) {
                    var L = Math.max(0, at[ae] + ap[ae + 1] + aR[ae]);
                    ai += L;
                    aV += L
                }
            } else {
                ai = ({
                    top: -(ap[0] + aI),
                    bottom: aU + aI - ap[0],
                    center: aU / 2 - ap[0],
                    baseline: aU / 2 - ap[0],
                    axis: aU / 2 + b.TeX.axis_height * aH - ap[0]
                })[I.align];
                aV = ({
                    top: -(aU + 2 * aI),
                    bottom: 0,
                    center: -(aU / 2 + aI),
                    baseline: -(aU / 2 + aI),
                    axis: b.TeX.axis_height * aH - aU / 2 - aI
                })[I.align]
            }
            var ab, af = 0, z = 0, K = 0, Z = 0, ag = 0, al = [], ar = [], R = 1;
            if (I.equalcolumns && I.width !== "auto") {
                if (aK) {
                    ab = (100 / (ao + 1)).toFixed(2).replace(/\.?0+$/, "") + "%";
                    for (ae = 0, ac = Math.min(ao + 1, aN.length); ae < ac; ae++) {
                        aN[ae] = ab
                    }
                    ab = 0;
                    af = 1;
                    ag = ao + 1;
                    for (ae = 0, ac = Math.min(ao + 1, az.length); ae < ac; ae++) {
                        ab += az[ae]
                    }
                } else {
                    ab = b.length2em(I.width, aA);
                    for (ae = 0, ac = Math.min(ao + 1, az.length); ae < ac; ae++) {
                        ab -= az[ae]
                    }
                    ab /= ao + 1;
                    for (ae = 0, ac = Math.min(ao + 1, aN.length); ae < ac; ae++) {
                        aj[ae] = ab
                    }
                }
            } else {
                for (ae = 0, ac = Math.min(ao + 1, aN.length); ae < ac; ae++) {
                    if (aN[ae] === "auto") {
                        z += aj[ae]
                    } else {
                        if (aN[ae] === "fit") {
                            ar[ag] = ae;
                            ag++;
                            z += aj[ae]
                        } else {
                            if (aN[ae].match(/%$/)) {
                                al[Z] = ae;
                                Z++;
                                K += aj[ae];
                                af += b.length2em(aN[ae], aA, 1)
                            } else {
                                aj[ae] = b.length2em(aN[ae], aA);
                                z += aj[ae]
                            }
                        }
                    }
                }
                if (aK) {
                    ab = 0;
                    for (ae = 0, ac = Math.min(ao, az.length); ae < ac; ae++) {
                        ab += az[ae]
                    }
                    if (af > 0.98) {
                        R = 0.98 / af;
                        af = 0.98
                    }
                } else {
                    if (I.width === "auto") {
                        if (af > 0.98) {
                            R = K / (z + K);
                            ab = z + K
                        } else {
                            ab = z / (1 - af)
                        }
                    } else {
                        ab = b.length2em(I.width, aA);
                        for (ae = 0, ac = Math.min(ao + 1, az.length); ae < ac; ae++) {
                            ab -= az[ae]
                        }
                    }
                    for (ae = 0, ac = al.length; ae < ac; ae++) {
                        aj[al[ae]] = b.length2em(aN[al[ae]], aA, ab * R);
                        z += aj[al[ae]]
                    }
                    if (Math.abs(ab - z) > 0.01) {
                        if (ag && ab > z) {
                            ab = (ab - z) / ag;
                            for (ae = 0, ac = ar.length; ae < ac; ae++) {
                                aj[ar[ae]] += ab
                            }
                        } else {
                            ab = ab / z;
                            for (ad = 0; ad <= ao; ad++) {
                                aj[ad] *= ab
                            }
                        }
                    }
                    if (I.equalcolumns) {
                        var O = Math.max.apply(Math, aj);
                        for (ad = 0; ad <= ao; ad++) {
                            aj[ad] = O
                        }
                    }
                }
            }
            var S = ai, o, q, aS;
            X = (au[aB] ? aB : 0);
            for (ad = X; ad <= ao; ad++) {
                for (ae = 0, ac = av.length; ae < ac; ae++) {
                    if (av[ae][ad]) {
                        X = (this.data[ae].type === "mlabeledtr" ? aB : 0);
                        Q = this.data[ae].data[ad - X];
                        if (Q.HTMLcanStretch("Horizontal")) {
                            av[ae][ad].bbox = Q.HTMLstretchH(au[ad], aj[ad]).bbox
                        } else {
                            if (Q.HTMLcanStretch("Vertical")) {
                                aC = Q.CoreMO();
                                var aL = aC.symmetric;
                                aC.symmetric = false;
                                av[ae][ad].bbox = Q.HTMLstretchV(au[ad], ap[ae], at[ae]).bbox;
                                av[ae][ad].HH = null;
                                if (av[ae][ad].bbox.h > ap[ae]) {
                                    av[ae][ad].bbox.H = av[ae][ad].bbox.h;
                                    av[ae][ad].bbox.h = ap[ae]
                                }
                                if (av[ae][ad].bbox.d > at[ae]) {
                                    av[ae][ad].bbox.D = av[ae][ad].bbox.d;
                                    av[ae][ad].bbox.d = at[ae]
                                }
                                aC.symmetric = aL
                            }
                        }
                        aS = Q.rowalign || this.data[ae].rowalign || B[ae];
                        o = ({
                                top: ap[ae] - av[ae][ad].bbox.h,
                                bottom: av[ae][ad].bbox.d - at[ae],
                                center: ((ap[ae] - at[ae]) - (av[ae][ad].bbox.h - av[ae][ad].bbox.d)) / 2,
                                baseline: 0,
                                axis: 0
                            })[aS] || 0;
                        aS = (Q.columnalign || U[ae][ad] || e[ad]);
                        b.alignBox(av[ae][ad], aS, S + o)
                    }
                    if (ae < av.length - 1) {
                        S -= Math.max(0, at[ae] + ap[ae + 1] + aR[ae])
                    }
                }
                S = ai
            }
            if (aK) {
                var E = b.createBox(ax);
                E.style.left = E.style.top = 0;
                E.style.right = b.Em(ab + 2 * aJ);
                E.style.display = "inline-block";
                E.style.height = "0px";
                if (b.msieRelativeWidthBug) {
                    E = b.createBox(E);
                    E.style.position = "relative";
                    E.style.height = "1em";
                    E.style.width = "100%";
                    E.bbox = ax.bbox
                }
                var aQ = 0, aX = aJ, k, l;
                if (ag) {
                    k = 100 * (1 - af) / ag, l = z / ag
                } else {
                    k = 100 * (1 - af) / (ao + 1);
                    l = z / (ao + 1)
                }
                for (ad = 0; ad <= ao; ad++) {
                    b.placeBox(au[ad].parentNode, 0, 0);
                    au[ad].style.position = "relative";
                    au[ad].style.left = b.Em(aX);
                    au[ad].style.width = "100%";
                    au[ad].parentNode.parentNode.removeChild(au[ad].parentNode);
                    var ak = b.createBox(E);
                    b.addBox(ak, au[ad]);
                    au[ad] = ak;
                    var h = ak.style;
                    h.display = "inline-block";
                    h.left = aQ + "%";
                    if (aN[ad].match(/%$/)) {
                        var t = parseFloat(aN[ad]) * R;
                        if (ag === 0) {
                            h.width = (k + t) + "%";
                            aQ += k + t;
                            ak = b.createBox(ak);
                            b.addBox(ak, au[ad].firstChild);
                            ak.style.left = 0;
                            ak.style.right = b.Em(l);
                            aX -= l
                        } else {
                            h.width = t + "%";
                            aQ += t
                        }
                    } else {
                        if (aN[ad] === "fit" || ag === 0) {
                            h.width = k + "%";
                            ak = b.createBox(ak);
                            b.addBox(ak, au[ad].firstChild);
                            ak.style.left = 0;
                            ak.style.right = b.Em(l - aj[ad]);
                            aX += aj[ad] - l;
                            aQ += k
                        } else {
                            h.width = b.Em(aj[ad]);
                            aX += aj[ad]
                        }
                    }
                    if (b.msieRelativeWidthBug) {
                        b.addText(ak.firstChild, b.NBSP);
                        ak.firstChild.style.position = "relative"
                    }
                    aX += az[ad];
                    if (d[ad] !== "none" && ad < ao && ad !== aB) {
                        q = b.createBox(E);
                        q.style.left = aQ + "%";
                        q = b.createRule(q, g, 0, 1.25 / b.em);
                        q.style.position = "absolute";
                        q.bbox = {h: g, d: 0, w: 0, rw: 1.25 / b.em, lw: 0};
                        q.parentNode.bbox = ax.bbox;
                        b.placeBox(q, aX - az[ad] / 2, aV, true);
                        q.style.borderStyle = d[ad]
                    }
                }
            } else {
                var T = aJ;
                for (ad = 0; ad <= ao; ad++) {
                    if (!au[ad].bbox.width) {
                        b.setStackWidth(au[ad], aj[ad])
                    }
                    if (aN[ad] !== "auto" && aN[ad] !== "fit") {
                        au[ad].bbox.width = aj[ad];
                        au[ad].bbox.isFixed = true
                    }
                    b.placeBox(au[ad].parentNode, T, 0);
                    T += aj[ad] + az[ad];
                    if (d[ad] !== "none" && ad < ao && ad !== aB) {
                        q = b.createRule(ax, g, 0, 1.25 / b.em);
                        b.addBox(ax, q);
                        q.bbox = {h: g, d: 0, w: 0, rw: 1.25 / b.em, lw: 0};
                        b.placeBox(q, T - az[ad] / 2, aV, true);
                        q.style.borderStyle = d[ad]
                    }
                }
            }
            ax.bbox.d = -aV;
            ax.bbox.h = g + aV;
            b.setStackWidth(ax, ax.bbox.w + aJ);
            aW = ax.bbox.w;
            var ah;
            if (I.frame !== "none") {
                ah = b.createFrame(ax, g, 0, aW, 1.25 / b.em, I.frame);
                b.addBox(ax, ah);
                b.placeBox(ah, 0, aV, true);
                if (aK) {
                    ah.style.width = "100%"
                }
            }
            S = ai;
            for (ae = 0, ac = av.length - 1; ae < ac; ae++) {
                o = Math.max(0, at[ae] + ap[ae + 1] + aR[ae]);
                if (w[ae] !== "none") {
                    q = b.createRule(ax, 1.25 / b.em, 0, aW);
                    b.addBox(ax, q);
                    q.bbox = {h: 1.25 / b.em, d: 0, w: aW, rw: aW, lw: 0};
                    b.placeBox(q, 0, S - at[ae] - (o - at[ae] - ap[ae + 1]) / 2, true);
                    if (w[ae] === "dashed" || aK) {
                        q.style.borderTop = q.style.height + " " + w[ae];
                        q.style.height = 0;
                        q.style.width = q.style.borderLeftWidth;
                        q.style.borderLeft = "";
                        if (aK) {
                            q.style.width = "100%"
                        }
                    }
                }
                S -= o
            }
            if (aK) {
                r.bbox.width = I.width;
                ax.style.width = "100%"
            }
            if (au[aB]) {
                var aw = ax.bbox.w;
                var aq = this.getValues("indentalignfirst", "indentshiftfirst", "indentalign", "indentshift");
                if (aq.indentalignfirst !== a.INDENTALIGN.INDENTALIGN) {
                    aq.indentalign = aq.indentalignfirst
                }
                if (aq.indentalign === a.INDENTALIGN.AUTO) {
                    aq.indentalign = this.displayAlign
                }
                if (aq.indentshiftfirst !== a.INDENTSHIFT.INDENTSHIFT) {
                    aq.indentshift = aq.indentshiftfirst
                }
                if (aq.indentshift === "auto") {
                    aq.indentshift = "0"
                }
                var am = b.length2em(aq.indentshift, aA, b.cwidth);
                var ay = b.length2em(I.minlabelspacing, aA, b.cwidth);
                if (this.displayIndent !== "0") {
                    var aG = b.length2em(this.displayIndent, aA, b.cwidth);
                    am += (aq.indentAlign === a.INDENTALIGN.RIGHT ? -aG : aG)
                }
                var aO = b.createStack(r, false, "100%");
                b.addBox(aO, ax);
                b.alignBox(ax, aq.indentalign, 0, am);
                au[aB].parentNode.parentNode.removeChild(au[aB].parentNode);
                b.addBox(aO, au[aB]);
                b.alignBox(au[aB], e[aB], 0);
                if (b.msieRelativeWidthBug) {
                    ax.style.top = au[aB].style.top = ""
                }
                if (aK) {
                    ax.style.width = I.width;
                    r.bbox.width = "100%"
                }
                au[aB].style.marginRight = au[aB].style.marginLeft = b.Em(ay);
                if (aq.indentalign === a.INDENTALIGN.CENTER) {
                    aw += 4 * ay + 2 * au[aB].bbox.w
                } else {
                    if (aq.indentalign !== e[aB]) {
                        aw += 2 * ay + au[aB].bbox.w
                    }
                }
                aw = Math.max(0, aw + am);
                r.bbox.tw = aw + 2 * ay;
                r.style.minWidth = r.bbox.minWidth = b.Em(aw);
                aO.style.minWidth = aO.bbox.minWidth = b.Em(aw / b.scale)
            }
            if (!aK) {
                this.HTMLhandleSpace(r)
            }
            var u = this.HTMLhandleColor(r);
            if (u && aK) {
                if (!ah) {
                    ah = b.createFrame(ax, g, 0, aW, 0, "none");
                    b.addBox(ax, ah);
                    b.placeBox(ah, 0, aV, true);
                    ah.style.width = "100%"
                }
                ah.style.backgroundColor = u.style.backgroundColor;
                ah.parentNode.insertBefore(ah, ah.parentNode.firstChild);
                u.parentNode.removeChild(u)
            }
            return r
        }, HTMLhandleSpace: function (d) {
            d.bbox.keepPadding = true;
            d.bbox.exact = true;
            if (!this.hasFrame && d.bbox.width == null) {
                d.style.paddingLeft = d.style.paddingRight = b.Em(1 / 6)
            }
            this.SUPER(arguments).HTMLhandleSpace.call(this, d)
        }
    });
    a.mtd.Augment({
        toHTML: function (e, d, g) {
            e = this.HTMLcreateSpan(e);
            if (this.data[0]) {
                var f = this.data[0].toHTML(e);
                if (g != null) {
                    f = this.data[0].HTMLstretchV(e, d, g)
                } else {
                    if (d != null) {
                        f = this.data[0].HTMLstretchH(e, d)
                    }
                }
                e.bbox = f.bbox
            }
            this.HTMLhandleSpace(e);
            this.HTMLhandleColor(e);
            return e
        }, HTMLstretchH: a.mbase.HTMLstretchH, HTMLstretchV: a.mbase.HTMLstretchV
    });
    MathJax.Hub.Startup.signal.Post("HTML-CSS mtable Ready");
    MathJax.Ajax.loadComplete(b.autoloadDir + "/mtable.js")
});
