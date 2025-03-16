export default {
  install(app, options) {
    const person = {
      name: 'rowana',
      sayHello() {
        alert('hi!')
      },
    }
    app.config.globalProperties.$person = person // create 단계에서만 접근 가능함
    app.provide('person', person) // setup단계에서부터 접근 가능함
  },
}
