const expect = chai.expect;
import Vue from "vue";
import Input from "../src/Input";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Button", () => {
  it("input 存在.", () => {
    expect(Input).is.exist;
  });
  it("测试 props", () => {
    it("传 disable", () => {
      const Constructor = Vue.extend(Input);
      const input = new Constructor({
        propsData: {
          disable: true
        }
      });
      input.$mount();
      let inputElement = input.$el.querySelector("input");
      console.log(inputElement);
      input.$destroy();
    });
  });
});
