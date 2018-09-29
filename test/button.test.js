const expect = chai.expect;
import Vue from "vue";
import Button from "../src/button";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Button", () => {
  it("存在.", () => {
    expect(Button).to.be.ok;
  });
  it("可以设置icon", () => {
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
      propsData: {
        icon: "settings"
      }
    });
    button.$mount();
    let useElement = button.$el.querySelector("use");
    let href = useElement.getAttribute("xlink:href");
    expect(href).to.equal("#i-settings");
    button.$destroy();
  });
  it("可以设置 loading.", () => {
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
      propsData: {
        loading: true,
        icon: "settings"
      }
    });
    button.$mount();
    let useElement = button.$el.querySelector("use");
    let href = useElement.getAttribute("xlink:href");
    expect(href).to.equal("#i-loading");
    button.$destroy();
  });
  it("设置 orientation 可以改变 order", () => {
    let div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
      propsData: {
        icon: "settings",
        orientation: "right"
      }
    });
    button.$mount(div);
    let svg = button.$el.querySelector("svg");
    let order = window.getComputedStyle(svg).order;
    expect(order).to.equal("2");
    button.$el.remove();
    button.$destroy();
  });
  it("点击 button 触发 click 事件",() => {
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
      propsData: {
        icon: "settings",
        orientation: "right"
      }
    });
    button.$mount();
    const spy = sinon.fake();
    button.$on("click", spy);
    button.$el.click();
    expect(spy).to.have.been.called
  });
});
