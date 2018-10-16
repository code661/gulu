const expect = chai.expect;
import Vue from "vue";
import Col from "../src/col";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Col 组件", () => {
  it("存在.", () => {
    expect(Col).is.exist;
  });
  describe("props", () => {
    let Constructor = Vue.extend(Col);
    let col;
    afterEach(() => {
      col.$destroy();
    });
    it("可以传入 span", () => {
      let div = document.createElement("div");
      document.body.appendChild(div);
      col = new Constructor({
        propsData: {
          span: 2
        }
      });
      col.$mount(div);
      expect(col.$el.classList.contains("col-2")).to.eq(true);
    });
    it("可以传入 offset", () => {
      let div = document.createElement("div");
      document.body.appendChild(div);
      col = new Constructor({
        propsData: {
          offset: 2
        }
      });
      col.$mount(div);
      expect(col.$el.classList.contains("offset-2")).to.eq(true);
    });
    it("可以传入 pad", () => {
      let div = document.createElement("div");
      document.body.appendChild(div);
      col = new Constructor({
        propsData: {
          pad: {
            span: 2,
            offset: 2
          }
        }
      });
      col.$mount(div);
      expect(col.$el.classList.contains("pad-col-2")).to.eq(true);
      expect(col.$el.classList.contains("pad-offset-2")).to.eq(true);
    });
    it("可以传入 narrowPc", () => {
      let div = document.createElement("div");
      document.body.appendChild(div);
      col = new Constructor({
        propsData: {
          narrowPc: {
            span: 2,
            offset: 2
          }
        }
      });
      col.$mount(div);
      expect(col.$el.classList.contains("narrowPc-col-2")).to.eq(true);
      expect(col.$el.classList.contains("narrowPc-offset-2")).to.eq(true);
    });
    it("可以传入 pc", () => {
      let div = document.createElement("div");
      document.body.appendChild(div);
      col = new Constructor({
        propsData: {
          pc: {
            span: 2,
            offset: 2
          }
        }
      });
      col.$mount(div);
      expect(col.$el.classList.contains("pc-col-2")).to.eq(true);
      expect(col.$el.classList.contains("pc-offset-2")).to.eq(true);
    });
    it("可以传入 widePc", () => {
      let div = document.createElement("div");
      document.body.appendChild(div);
      col = new Constructor({
        propsData: {
          widePc: {
            span: 2,
            offset: 2
          }
        }
      });
      col.$mount(div);
      expect(col.$el.classList.contains("widePc-col-2")).to.eq(true);
      expect(col.$el.classList.contains("widePc-offset-2")).to.eq(true);
    });
    it("可以传入 ultraWidePc", () => {
      let div = document.createElement("div");
      document.body.appendChild(div);
      col = new Constructor({
        propsData: {
          ultraWidePc: {
            span: 2,
            offset: 2
          }
        }
      });
      col.$mount(div);
      expect(col.$el.classList.contains("ultraWidePc-col-2")).to.eq(true);
      expect(col.$el.classList.contains("ultraWidePc-offset-2")).to.eq(true);
    });
  });
});
