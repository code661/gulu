import Toast from "./Toast";

export default {
  install(Vue, options) {
    Vue.prototype.$toast = (message, { autoClose, autoCloseDelay, closeButton }) => {
      let Constructor = Vue.extend(Toast);
      let toast = new Constructor({
        propsData: {
          autoClose,
          autoCloseDelay,
          closeButton
        }
      });
      toast.$slots.default = [message];
      toast.$mount();
      document.body.appendChild(toast.$el);
    };
  }
};
