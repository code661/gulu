import Toast from "./toast";
let currentToast = null;
export default {
  install(Vue, options) {
    Vue.prototype.$toast = (message, toastOptions) => {
      currentToast && currentToast.close()
      currentToast = createToast(Vue, message, toastOptions);
    };
  }
};
let createToast = (Vue, message, toastOptions) => {
  let Constructor = Vue.extend(Toast);
  let toast = new Constructor({ propsData: toastOptions });
  toast.$slots.default = [message];
  toast.$on("close", () => {
    currentToast = null;
  });
  toast.$mount();
  document.body.appendChild(toast.$el);
  return toast;
};
