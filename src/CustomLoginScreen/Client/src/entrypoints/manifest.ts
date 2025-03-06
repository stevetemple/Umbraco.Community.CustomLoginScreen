export const manifests: Array<UmbExtensionManifest> = [
  {
    name: "Custom Login Screen Entrypoint",
    alias: "CustomLoginScreen.Entrypoint",
    type: "appEntryPoint",
    js: () => import("./entrypoint"),
  }
];
