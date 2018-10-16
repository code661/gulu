const expect = chai.expect;
import Vue from "vue";
import Toast from "../src/toast";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Toast 组件", () => {
  it("存在.", () => {
    expect(Toast).to.be.ok;
  });
  it("接收 autoClose 参数", done => {
    let div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Toast);
    const toast = new Constructor({
      propsData: {
        autoClose: 1
      }
    });
    toast.$mount(div);
    setTimeout(() => {
      expect(document.body.contains(toast.$el)).to.be.false;
      done();
    }, 1800);
  });
  it("接收 closeButton 参数", () => {
    const Constructor = Vue.extend(Toast);
    const spy = sinon.fake();
    const toast = new Constructor({
      propsData: {
        closeButton: {
          text: "hi",
          callBack: spy
        }
      }
    });
    toast.$mount();
    const closeBtnElem = toast.$el.querySelector(".close-tip");
    expect(closeBtnElem.innerText).to.eq("hi");
    closeBtnElem.click();
    expect(spy).to.have.been.called;
  });
  it("接收 enableHtml 参数", () => {
    const Constructor = Vue.extend(Toast);
    const toast = new Constructor({
      propsData: {
        enableHtml: true
      }
    });
    toast.$slots.default = ['<strong id="hi">Strong text</strong>'];
    toast.$mount();
    expect(toast.$el.querySelector("#hi")).is.exist;
  });
  it("接收 position 参数", () => {
    const Constructor = Vue.extend(Toast);
    const toast = new Constructor({
      propsData: {
        toastPosition: "bottom"
      }
    });
    toast.$mount();
    expect(toast.$el.classList.contains("position-bottom")).is.true
  });
});
