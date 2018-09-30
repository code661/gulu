import Vue from "vue";
import Button from "./button";
import Icon from "./Icon";
import buttonGroup from "./buttonGroup";
import Input from "./Input"

Vue.component("g-button", Button);
Vue.component("g-icon", Icon);
Vue.component("g-button-group", buttonGroup);
Vue.component("g-input", Input);

new Vue({
  el: "#app",
  data: {
    loading1: true,
    loading2: false
  }
});
