import { UmbEntryPointOnInit, UmbEntryPointOnUnload } from '@umbraco-cms/backoffice/extension-api';



// load up the manifests here
export const onInit: UmbEntryPointOnInit = (_host, _extensionRegistry) => {

  var count = 0;
  var closed = false;
  var sad = false;

  var image = new Image();
  image.src = "/App_Plugins/CustomLoginScreen/sophie-eyes-closed.jpg";
  image.src = "/App_Plugins/CustomLoginScreen/sophie-sad.jpg";
  image.src = "/App_Plugins/CustomLoginScreen/sophie-angry.jpg"
  image.src = "/App_Plugins/CustomLoginScreen/sophie-eyes-closed-sad.jpg";

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

  setInterval(() => {

    if (document.querySelector("umb-auth")?.shadowRoot?.querySelector("umb-login-page")?.shadowRoot?.querySelector(".text-error")) {
      sad = true;
      if (closed) {
        document.querySelector("umb-auth")?.setAttribute("background-image", "/App_Plugins/CustomLoginScreen/sophie-eyes-closed-sad.jpg");
      } else {
        if (count > 10) {
          document.querySelector("umb-auth")?.setAttribute("background-image", "/App_Plugins/CustomLoginScreen/sophie-angry.jpg");
        } else {
          document.querySelector("umb-auth")?.setAttribute("background-image", "/App_Plugins/CustomLoginScreen/sophie-sad.jpg");
          count++;
        }
      }
    } 
  }, 1000);
  
};



export const onUnload: UmbEntryPointOnUnload = (_host, _extensionRegistry) => {
  console.log('Goodbye from my extension 👋');
};
