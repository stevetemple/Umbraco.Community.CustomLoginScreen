const S = (y, h) => {
  for (var i = 0, l = !1, m = !1, d = ["/App_Plugins/CustomLoginScreen/sophie-eyes-closed.jpg", "/App_Plugins/CustomLoginScreen/sophie-sad.jpg", "/App_Plugins/CustomLoginScreen/sophie-angry.jpg", "/App_Plugins/CustomLoginScreen/sophie-eyes-closed-sad.jpg"], p = 0; p < d.length; p++) {
    var g = document.createElement("link");
    g.rel = "preload", g.as = "image", g.href = d[p], document.head.appendChild(g);
  }
  setTimeout(() => {
    var e, o, t, u, r, s, n, b;
    console.log("Waited"), console.log((o = (e = document.querySelector("umb-auth")) == null ? void 0 : e.querySelector("form")) == null ? void 0 : o.querySelector("#password-input")), (r = (u = (t = document.querySelector("umb-auth")) == null ? void 0 : t.querySelector("form")) == null ? void 0 : u.querySelector("#password-input")) == null || r.addEventListener("focus", () => {
      var c, a;
      console.log("focus"), l = !0, m ? (c = document.querySelector("umb-auth")) == null || c.setAttribute("background-image", "/App_Plugins/CustomLoginScreen/sophie-eyes-closed-sad.jpg") : (a = document.querySelector("umb-auth")) == null || a.setAttribute("background-image", "/App_Plugins/CustomLoginScreen/sophie-eyes-closed.jpg"), i = 0;
    }), (b = (n = (s = document.querySelector("umb-auth")) == null ? void 0 : s.querySelector("form")) == null ? void 0 : n.querySelector("#password-input")) == null || b.addEventListener("blur", () => {
      var c, a;
      console.log("blur"), l = !1, m ? (c = document.querySelector("umb-auth")) == null || c.setAttribute("background-image", "/App_Plugins/CustomLoginScreen/sophie-sad.jpg") : (a = document.querySelector("umb-auth")) == null || a.setAttribute("background-image", "/umbraco/management/api/v1/security/back-office/graphics/login-background"), i = 0;
    });
  }, 1e3), setInterval(() => {
    var e, o, t, u, r, s, n;
    (u = (t = (o = (e = document.querySelector("umb-auth")) == null ? void 0 : e.shadowRoot) == null ? void 0 : o.querySelector("umb-login-page")) == null ? void 0 : t.shadowRoot) != null && u.querySelector(".text-error") && (m = !0, l ? (r = document.querySelector("umb-auth")) == null || r.setAttribute("background-image", "/App_Plugins/CustomLoginScreen/sophie-eyes-closed-sad.jpg") : i > 10 ? (s = document.querySelector("umb-auth")) == null || s.setAttribute("background-image", "/App_Plugins/CustomLoginScreen/sophie-angry.jpg") : ((n = document.querySelector("umb-auth")) == null || n.setAttribute("background-image", "/App_Plugins/CustomLoginScreen/sophie-sad.jpg"), i++));
  }, 250);
}, q = (y, h) => {
  console.log("Goodbye from my extension 👋");
};
export {
  S as onInit,
  q as onUnload
};
//# sourceMappingURL=entrypoint-DHPCsDtF.js.map
