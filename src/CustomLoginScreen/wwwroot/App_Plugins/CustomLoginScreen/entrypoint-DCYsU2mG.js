const f = (q, A) => {
  var n, c, i, a, g, l, m, p;
  var t = 0, r = !1, s = !1, u = new Image();
  u.src = "/App_Plugins/CustomLoginScreen/sophie-eyes-closed.jpg", u.src = "/App_Plugins/CustomLoginScreen/sophie-sad.jpg", u.src = "/App_Plugins/CustomLoginScreen/sophie-angry.jpg", u.src = "/App_Plugins/CustomLoginScreen/sophie-eyes-closed-sad.jpg", console.log((c = (n = document.querySelector("umb-auth")) == null ? void 0 : n.querySelector("form")) == null ? void 0 : c.querySelector("#password-input")), (g = (a = (i = document.querySelector("umb-auth")) == null ? void 0 : i.querySelector("form")) == null ? void 0 : a.querySelector("#password-input")) == null || g.addEventListener("focus", () => {
    var e, o;
    console.log("focus"), r = !0, s ? (e = document.querySelector("umb-auth")) == null || e.setAttribute("background-image", "/App_Plugins/CustomLoginScreen/sophie-eyes-closed-sad.jpg") : (o = document.querySelector("umb-auth")) == null || o.setAttribute("background-image", "/App_Plugins/CustomLoginScreen/sophie-eyes-closed.jpg"), t = 0;
  }), (p = (m = (l = document.querySelector("umb-auth")) == null ? void 0 : l.querySelector("form")) == null ? void 0 : m.querySelector("#password-input")) == null || p.addEventListener("blur", () => {
    var e, o;
    console.log("blur"), r = !1, s ? (e = document.querySelector("umb-auth")) == null || e.setAttribute("background-image", "/App_Plugins/CustomLoginScreen/sophie-sad.jpg") : (o = document.querySelector("umb-auth")) == null || o.setAttribute("background-image", "/umbraco/management/api/v1/security/back-office/graphics/login-background"), t = 0;
  }), setInterval(() => {
    var e, o, d, b, y, S, h;
    (b = (d = (o = (e = document.querySelector("umb-auth")) == null ? void 0 : e.shadowRoot) == null ? void 0 : o.querySelector("umb-login-page")) == null ? void 0 : d.shadowRoot) != null && b.querySelector(".text-error") && (s = !0, r ? (y = document.querySelector("umb-auth")) == null || y.setAttribute("background-image", "/App_Plugins/CustomLoginScreen/sophie-eyes-closed-sad.jpg") : t > 10 ? (S = document.querySelector("umb-auth")) == null || S.setAttribute("background-image", "/App_Plugins/CustomLoginScreen/sophie-angry.jpg") : ((h = document.querySelector("umb-auth")) == null || h.setAttribute("background-image", "/App_Plugins/CustomLoginScreen/sophie-sad.jpg"), t++));
  }, 1e3);
}, _ = (q, A) => {
  console.log("Goodbye from my extension 👋");
};
export {
  f as onInit,
  _ as onUnload
};
//# sourceMappingURL=entrypoint-DCYsU2mG.js.map
