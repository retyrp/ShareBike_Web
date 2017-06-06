﻿/*!
 Responsive 1.0.4
 2014 SpryMedia Ltd - datatables.net/license
*/
(function (o, q) {
    var p = function (c, k) {
        var h = function (e, a) { if (!k.versionCheck || !k.versionCheck("1.10.1")) throw "DataTables Responsive requires DataTables 1.10.1 or newer"; this.s = { dt: new k.Api(e), columns: [] }; this.s.dt.settings()[0].responsive || (a && "string" === typeof a.details && (a.details = { type: a.details }), this.c = c.extend(!0, {}, h.defaults, k.defaults.responsive, a), e.responsive = this, this._constructor()) }; h.prototype = {
            _constructor: function () {
                var e = this, a = this.s.dt; a.settings()[0]._responsive = this; c(o).on("resize.dtr orientationchange.dtr",
                    a.settings()[0].oApi._fnThrottle(function () { e._resize() })); a.on("destroy.dtr", function () { c(o).off("resize.dtr orientationchange.dtr draw.dtr") }); this.c.breakpoints.sort(function (a, f) { return a.width < f.width ? 1 : a.width > f.width ? -1 : 0 }); this._classLogic(); this._resizeAuto(); this._resize(); var d = this.c.details; d.type && (e._detailsInit(), this._detailsVis(), a.on("column-visibility.dtr", function () { e._detailsVis() }), a.on("draw.dtr", function () {
                        a.rows().iterator("row", function (b, f) {
                            var d = a.row(f); if (d.child.isShown()) {
                                var l =
                                    e.c.details.renderer(a, f); d.child(l, "child").show()
                            }
                        })
                    }), c(a.table().node()).addClass("dtr-" + d.type))
            }, _columnsVisiblity: function (e) {
                var a = this.s.dt, d = this.s.columns, b, f, g = c.map(d, function (a) { return a.auto && null === a.minWidth ? !1 : !0 === a.auto ? "-" : -1 !== c.inArray(e, a.includeIn) }), l = 0; b = 0; for (f = g.length; b < f; b++)!0 === g[b] && (l += d[b].minWidth); a = a.table().container().offsetWidth - l; b = 0; for (f = g.length; b < f; b++)d[b].control && (a -= d[b].minWidth); b = 0; for (f = g.length; b < f; b++)"-" === g[b] && !d[b].control && (g[b] = 0 > a - d[b].minWidth ?
                    !1 : !0, a -= d[b].minWidth); a = !1; b = 0; for (f = d.length; b < f; b++)if (!d[b].control && !d[b].never && !g[b]) { a = !0; break } b = 0; for (f = d.length; b < f; b++)d[b].control && (g[b] = a); -1 === c.inArray(!0, g) && (g[0] = !0); return g
            }, _classLogic: function () {
                var e = this, a = this.c.breakpoints, d = this.s.dt.columns().eq(0).map(function (a) { a = this.column(a).header().className; return { className: a, includeIn: [], auto: !1, control: !1, never: a.match(/\bnever\b/) ? !0 : !1 } }), b = function (a, b) { var f = d[a].includeIn; -1 === c.inArray(b, f) && f.push(b) }, f = function (f,
                    c, j, i) { if (j) if ("max-" === j) { i = e._find(c).width; c = 0; for (j = a.length; c < j; c++)a[c].width <= i && b(f, a[c].name) } else if ("min-" === j) { i = e._find(c).width; c = 0; for (j = a.length; c < j; c++)a[c].width >= i && b(f, a[c].name) } else { if ("not-" === j) { c = 0; for (j = a.length; c < j; c++)-1 === a[c].name.indexOf(i) && b(f, a[c].name) } } else d[f].includeIn.push(c) }; d.each(function (b, d) {
                        for (var e = b.className.split(" "), i = !1, h = 0, k = e.length; h < k; h++) {
                            var m = c.trim(e[h]); if ("all" === m) { i = !0; b.includeIn = c.map(a, function (a) { return a.name }); return } if ("none" ===
                                m || "never" === m) { i = !0; return } if ("control" === m) { i = !0; b.control = !0; return } c.each(a, function (a, b) { var c = b.name.split("-"), e = m.match(RegExp("(min\\-|max\\-|not\\-)?(" + c[0] + ")(\\-[_a-zA-Z0-9])?")); e && (i = !0, e[2] === c[0] && e[3] === "-" + c[1] ? f(d, b.name, e[1], e[2] + e[3]) : e[2] === c[0] && !e[3] && f(d, b.name, e[1], e[2])) })
                        } i || (b.auto = !0)
                    }); this.s.columns = d
            }, _detailsInit: function () {
                var e = this, a = this.s.dt, d = this.c.details; "inline" === d.type && (d.target = "td:first-child"); var b = d.target; c(a.table().body()).on("click", "string" ===
                    typeof b ? b : "td", function () { if (c(a.table().node()).hasClass("collapsed") && a.row(c(this).closest("tr")).length) { if (typeof b === "number") { var f = b < 0 ? a.columns().eq(0).length + b : b; if (a.cell(this).index().column !== f) return } f = a.row(c(this).closest("tr")); if (f.child.isShown()) { f.child(false); c(f.node()).removeClass("parent") } else { var d = e.c.details.renderer(a, f[0]); f.child(d, "child").show(); c(f.node()).addClass("parent") } } })
            }, _detailsVis: function () {
                var e = this, a = this.s.dt, d = a.columns().indexes().filter(function (b) {
                    var e =
                        a.column(b); return e.visible() ? null : c(e.header()).hasClass("never") ? null : b
                }), b = !0; if (0 === d.length || 1 === d.length && this.s.columns[d[0]].control) b = !1; b ? (c(a.table().node()).addClass("collapsed"), a.rows().eq(0).each(function (b) { b = a.row(b); if (b.child()) { var c = e.c.details.renderer(a, b[0]); !1 === c ? b.child.hide() : b.child(c, "child").show() } })) : (c(a.table().node()).removeClass("collapsed"), a.rows().eq(0).each(function (b) { a.row(b).child.hide() }))
            }, _find: function (e) {
                for (var a = this.c.breakpoints, c = 0, b = a.length; c <
                    b; c++)if (a[c].name === e) return a[c]
            }, _resize: function () { for (var e = this.s.dt, a = c(o).width(), d = this.c.breakpoints, b = d[0].name, f = d.length - 1; 0 <= f; f--)if (a <= d[f].width) { b = d[f].name; break } var g = this._columnsVisiblity(b); e.columns().eq(0).each(function (a, b) { e.column(a).visible(g[b]) }) }, _resizeAuto: function () {
                var e = this.s.dt, a = this.s.columns; if (this.c.auto && -1 !== c.inArray(!0, c.map(a, function (a) { return a.auto }))) {
                    e.table().node(); var d = e.table().node().cloneNode(!1), b = c(e.table().header().cloneNode(!1)).appendTo(d),
                        f = c(e.table().body().cloneNode(!1)).appendTo(d); e.rows({ page: "current" }).indexes().flatten().each(function (a) { var b = e.row(a).node().cloneNode(!0); e.columns(":hidden").flatten().length && c(b).append(e.cells(a, ":hidden").nodes().to$().clone()); c(b).appendTo(f) }); var g = e.columns().header().to$().clone(!1); c("<tr/>").append(g).appendTo(b); d = c("<div/>").css({ width: 1, height: 1, overflow: "hidden" }).append(d).insertBefore(e.table().node()); e.columns().eq(0).each(function (b) { a[b].minWidth = g[b].offsetWidth || 0 });
                    d.remove()
                }
            }
        }; h.breakpoints = [{ name: "desktop", width: Infinity }, { name: "tablet-l", width: 1024 }, { name: "tablet-p", width: 768 }, { name: "mobile-l", width: 480 }, { name: "mobile-p", width: 320 }]; h.defaults = {
            breakpoints: h.breakpoints, auto: !0, details: {
                renderer: function (e, a) {
                    var d = e.cells(a, ":hidden").eq(0).map(function (a) {
                        var d = c(e.column(a.column).header()), a = e.cell(a).index(); if (d.hasClass("control") || d.hasClass("never")) return ""; var g = e.settings()[0], g = g.oApi._fnGetCellData(g, a.row, a.column, "display"); (d = d.text()) &&
                            (d += ":"); return '<li data-dtr-index="' + a.column + '"><span class="dtr-title">' + d + '</span> <span class="dtr-data">' + g + "</span></li>"
                    }).toArray().join(""); return d ? c('<ul data-dtr-index="' + a + '"/>').append(d) : !1
                }, target: 0, type: "inline"
            }
        }; var n = c.fn.dataTable.Api; n.register("responsive()", function () { return this }); n.register("responsive.index()", function (e) { e = c(e); return { column: e.data("dtr-index"), row: e.parent().data("dtr-index") } }); n.register("responsive.rebuild()", function () {
            return this.iterator("table",
                function (c) { c._responsive && c._responsive._classLogic() })
        }); n.register("responsive.recalc()", function () { return this.iterator("table", function (c) { c._responsive && (c._responsive._resizeAuto(), c._responsive._resize()) }) }); h.version = "1.0.4"; c.fn.dataTable.Responsive = h; c.fn.DataTable.Responsive = h; c(q).on("init.dt.dtr", function (e, a) {
            if (c(a.nTable).hasClass("responsive") || c(a.nTable).hasClass("dt-responsive") || a.oInit.responsive || k.defaults.responsive) {
                var d = a.oInit.responsive; !1 !== d && new h(a, c.isPlainObject(d) ?
                    d : {})
            }
        }); return h
    }; "function" === typeof define && define.amd ? define(["jquery", "datatables"], p) : "object" === typeof exports ? p(require("jquery"), require("datatables")) : jQuery && !jQuery.fn.dataTable.Responsive && p(jQuery, jQuery.fn.dataTable)
})(window, document);