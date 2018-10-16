const expect = chai.expect;
import Vue from "vue";
import TabsItem from "../src/tabs-item";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Tabs-item", () => {
  it("存在.", () => {
    expect(TabsItem).is.exist;
  });
  it("接收 name", () => {
    const Constructor = Vue.extend(TabsItem);
    const tabsItem = new Constructor({
      propsData: {
        name: "hi"
      }
    });
    tabsItem.$mount();
    expect(tabsItem.$el.getAttribute("data-name")).to.eq("hi");
  });
  it("接收 disabled", () => {
    const Constructor = Vue.extend(TabsItem);
    const tabsItem = new Constructor({
      propsData: {
        name: "hi",
        disabled: true
      }
    });
    tabsItem.$mount();
    const spy = sinon.fake();
    tabsItem.$on("click", spy);
    tabsItem.$el.click();
    expect(spy).to.have.not.been.called;
  });
});
