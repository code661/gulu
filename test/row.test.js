const expect = chai.expect;
import Vue from "vue";
import Col from "../src/col";
import Row from "../src/row";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Row 组件", () => {
  it("存在.", () => {
    expect(Row).is.exist;
  });
  it("可以传入 gutter", done => {
    Vue.component("g-row", Row);
    Vue.component("g-col", Col);
    let div = document.createElement("div");
    div.innerHTML = `
      <g-row :gutter="10">
        <g-col></g-col>
      </g-row>
    `;
    document.body.appendChild(div);
    const vm = new Vue({
      el: div
    });
    setTimeout(() => {
      let row = document.querySelector(".row");
      expect(getComputedStyle(row).marginLeft).to.eq("-5px");
      let col = row.querySelector(".col");
      expect(getComputedStyle(col).paddingLeft).to.eq("5px");
      expect(getComputedStyle(col).paddingRight).to.eq("5px");
      done();
      vm.$el.remove();
      vm.$destroy();
    }, 0);
  });
  it("可以传入 align", () => {
    let div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Row);
    const row = new Constructor({
      propsData: {
        align: "center"
      }
    });
    row.$mount(div);
    expect(getComputedStyle(row.$el).justifyContent).to.eq("center");
  });
});
