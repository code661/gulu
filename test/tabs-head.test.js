const expect = chai.expect;
import Vue from "vue";
import TabsHead from "../src/tabs-head";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Tabs-head", () => {
  it("存在.", () => {
    expect(TabsHead).is.exist;
  });
});
