import Vue from "vue";
import Button from './button'
import Icon from "./Icon"
import buttonGroup from "./buttonGroup"
import chai from "chai"
import spies from "chai-spies"


Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group',buttonGroup)

new Vue({
  el: '#app',
  data:{
    loading1: true,
    loading2: false
  },
})

let expect = chai.expect
chai.use(spies)

{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData:{
      icon: "settings"
    }
  })
  button.$mount()
  let useElement = button.$el.querySelector('use')
  let href = useElement.getAttribute("xlink:href")
  expect(href).to.equal("#i-settings")
  button.$destroy()
}

{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData:{
      loading: true,
      icon: "settings"
    }
  })
  button.$mount()
  let useElement = button.$el.querySelector('use')
  let href = useElement.getAttribute("xlink:href")
  expect(href).to.equal("#i-loading")
  button.$destroy()
}

{
  let div = document.createElement("div")
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData:{
      icon: "settings",
      orientation: "right"
    }
  })
  button.$mount(div)
  let svg = button.$el.querySelector('svg')
  let order = window.getComputedStyle(svg).order
  expect(order).to.equal("2")
  button.$el.remove()
  button.$destroy()
}

{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData:{
      icon: "settings",
      orientation: "right"
    }
  })
  button.$mount()
  const spy = chai.spy(()=>{})
  button.$on("click",spy)
  button.$el.click()
  expect(spy).to.have.not.been.called()
}