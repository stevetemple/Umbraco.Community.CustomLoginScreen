import { UmbEntryPointOnInit, UmbEntryPointOnUnload } from '@umbraco-cms/backoffice/extension-api';

// load up the manifests here
export const onInit: UmbEntryPointOnInit = (_host, _extensionRegistry) => {

  var count = 0;
  var closed = false;
  var sad = false;

  var images = ["/App_Plugins/CustomLoginScreen/sophie-eyes-closed.jpg", "/App_Plugins/CustomLoginScreen/sophie-sad.jpg", "/App_Plugins/CustomLoginScreen/sophie-angry.jpg", "/App_Plugins/CustomLoginScreen/sophie-eyes-closed-sad.jpg"];

  for (var i = 0; i < images.length; i++) {
    var link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = images[i];
    document.head.appendChild(link);
  }
  
  setTimeout(() => {
    console.log("Waited");
    console.log(document.querySelector("umb-auth")?.querySelector("form")?.querySelector("#password-input"));
    document.querySelector("umb-auth")?.querySelector("form")?.querySelector("#password-input")?.addEventListener("focus", () => {
      console.log("focus");
      closed = true;
      if (sad) {
        document.querySelector("umb-auth")?.setAttribute("background-image", "/App_Plugins/CustomLoginScreen/sophie-eyes-closed-sad.jpg");
      } else {
        document.querySelector("umb-auth")?.setAttribute("background-image", "/App_Plugins/CustomLoginScreen/sophie-eyes-closed.jpg");
      }
      count = 0;
    });;

    document.querySelector("umb-auth")?.querySelector("form")?.querySelector("#password-input")?.addEventListener("blur", () => {
      console.log("blur");
      closed = false;
      if (sad) {
        document.querySelector("umb-auth")?.setAttribute("background-image", "/App_Plugins/CustomLoginScreen/sophie-sad.jpg");
      } else {
        document.querySelector("umb-auth")?.setAttribute("background-image", "/umbraco/management/api/v1/security/back-office/graphics/login-background");
      }
      count = 0;
    });  
  }, 1000);
    

  setInterval(() => {

    if (document.querySelector("umb-auth")?.shadowRoot?.querySelector("umb-login-page")?.shadowRoot?.querySelector(".text-error")) {
      sad = true;
      if (closed) {
        document.querySelector("umb-auth")?.setAttribute("background-image", "/App_Plugins/CustomLoginScreen/sophie-eyes-closed-sad.jpg");
      } else {
        if (count > 25) {
          document.querySelector("umb-auth")?.setAttribute("background-image", "/App_Plugins/CustomLoginScreen/sophie-angry.jpg");
        } else {
          document.querySelector("umb-auth")?.setAttribute("background-image", "/App_Plugins/CustomLoginScreen/sophie-sad.jpg");
          count++;
        }
      }
    } 
  }, 250);
  
};

export const onUnload: UmbEntryPointOnUnload = (_host, _extensionRegistry) => {
  console.log('Goodbye from my extension 👋');
};
