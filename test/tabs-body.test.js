const expect = chai.expect;
import Vue from "vue";
import TabsBody from "../src/Tabs-body";

Vue.config.productionTip = false;
Vue.config.devtools = false;

describe("Tabs-head", () => {
  it("存在.", () => {
    expect(TabsBody).is.exist;
  });
});
