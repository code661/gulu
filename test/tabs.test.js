const expect = chai.expect;
import Vue from "vue";
import Tabs from "../src/tabs";
import TabsHead from "../src/tabs-head";
import TabsItem from "../src/tabs-item";
import TabsPane from "../src/tabs-pane";
import TabsBody from "../src/tabs-body";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Tabs", () => {
  it("存在.", () => {
    expect(Tabs).is.exist;
  });
  it("接收 selected", done => {
    Vue.component("g-tabs", Tabs);
    Vue.component("g-tabs-body", TabsBody);
    Vue.component("g-tabs-head", TabsHead);
    Vue.component("g-tabs-item", TabsItem);
    Vue.component("g-tabs-pane", TabsPane);
    let div = document.createElement("div");
    div.innerHTML = `
      <g-tabs selected="foo">
        <g-tabs-head>
          <g-tabs-item name="foo">bar</g-tabs-item>
          <g-tabs-item name="bar">bar</g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane name="foo"></g-tabs-pane>
          <g-tabs-pane name="bar"></g-tabs-pane>
        </g-tabs-body>
      </g-tabs>
    `;
    document.body.appendChild(div);
    const vm = new Vue({
      el: div
    });
    vm.$nextTick(() => {
      let foo = vm.$el.querySelector(".tabs-item[data-name='foo']");
      expect(foo.classList.contains("active")).to.be.true;
      done();
    });
  });
  it("接收 direction", () => {
    let div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Tabs);
    const tabs = new Constructor({
      propsData: {
        selected: "",
        direction: "vertical"
      }
    });
    tabs.$mount(div);
    expect(window.getComputedStyle(tabs.$el).flexDirection).to.equal("row");
  });
});
