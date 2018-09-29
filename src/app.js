import Vue from "vue";
import Button from './button'
import Icon from "./Icon"
import buttonGroup from "./buttonGroup"
import chai from "chai"
let expect = chai.expect

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
  window.test = button.$el
  let svg = button.$el.querySelector('svg')
  let order = window.getComputedStyle(svg).order
  expect(order).to.equal("2")
  button.$el.remove()
  button.$destroy()
}