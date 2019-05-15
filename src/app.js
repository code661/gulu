import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import buttonGroup from './button-group';
import Input from './input';
import Col from './col';
import Row from './row';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Sider from './sider';
import Toast from './toast';
import toastPlugin from './toast-plugin';
import Tabs from './tabs';
import TabsHead from './tabs-head';
import TabsItem from './tabs-item';
import TabsBody from './tabs-body';
import TabsPane from './tabs-pane';
import Popover from './popover';
import Collapse from './collapse';
import CollapseItem from './collapse-item';
import Toggle from './toggle';

Vue.use(toastPlugin);
Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', buttonGroup);
Vue.component('g-input', Input);
Vue.component('g-row', Row);
Vue.component('g-col', Col);
Vue.component('g-layout', Layout);
Vue.component('g-header', Header);
Vue.component('g-sider', Sider);
Vue.component('g-content', Content);
Vue.component('g-footer', Footer);
Vue.component('g-toast', Toast);
Vue.component('g-tabs-head', Tabs);
Vue.component('g-tabs', Tabs);
Vue.component('g-tabs-head', TabsHead);
Vue.component('g-tabs-body', TabsBody);
Vue.component('g-tabs-item', TabsItem);
Vue.component('g-tabs-pane', TabsPane);
Vue.component('g-popover', Popover);
Vue.component('g-collapse', Collapse);
Vue.component('g-collapse-item', CollapseItem);
Vue.component('g-toggle', Toggle);

new Vue({
  el: '#app',
  data: {
    loading1: true,
    loading2: false,
    defaultOpen: [ '2', '3' ]
  },
  methods: {
    showMessage () {
      this.$toast('hello')
    }
  }
});
