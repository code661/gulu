const expect = chai.expect;
import Vue from "vue";
import Input from "../src/input";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Input 组件", () => {
  it("input 存在.", () => {});
  describe("props", () => {
    const Constructor = Vue.extend(Input);
    let input;
    afterEach(() => {
      input.$destroy();
    });
    it("可以传入 value", () => {
      input = new Constructor({
        propsData: {
          value: "hello"
        }
      });
      input.$mount();
      let inputElement = input.$el.querySelector("input");
      expect(inputElement.value).to.equal("hello");
    });
    it("可以传入 disabled", () => {
      input = new Constructor({
        propsData: {
          disabled: true
        }
      });
      input.$mount();
      let inputElement = input.$el.querySelector("input");
      expect(inputElement.disabled).to.equal(true);
    });
    it("可以传入 readonly", () => {
      input = new Constructor({
        propsData: {
          readonly: true
        }
      });
      input.$mount();
      let inputElement = input.$el.querySelector("input");
      expect(inputElement.readOnly).to.equal(true);
    });
    it("可以传入 error", () => {
      input = new Constructor({
        propsData: {
          error: "msg"
        }
      });
      input.$mount();
      let useElement = input.$el.querySelector("use");
      let spanElement = input.$el.querySelector("span");
      let href = useElement.getAttribute("xlink:href");
      expect(href).to.equal("#i-bell");
      expect(spanElement.innerText).to.equal("msg");
    });
  });
  describe("支持change/blur/input/focus事件", () => {
    ["change", "blur", "input", "focus"].map(eventName => {
      if (eventName === "input") {
        it(eventName, () => {
          const Constructor = Vue.extend(Input);
          const input = new Constructor({
            propsData: {
              value: "hello"
            }
          });
          input.$mount();
          const spy = sinon.fake();
          input.$on(eventName, spy);
          let event = new Event(eventName);
          let inputElement = input.$el.querySelector("input");
          inputElement.dispatchEvent(event);
          expect(spy).have.been.calledWith("hello");
        });
      } else {
        it(eventName, () => {
          const Constructor = Vue.extend(Input);
          const input = new Constructor({
            propsData: {
              value: "hello"
            }
          });
          input.$mount();
          const spy = sinon.fake();
          input.$on(eventName, spy);
          let event = new Event(eventName);
          let inputElement = input.$el.querySelector("input");
          inputElement.dispatchEvent(event);
          expect(spy).have.been.calledWith(event);
        });
      }
    });
  });
});
