// {{component}}.js
Component({
  options: {
    multipleSlots: true
  },

  /**
   * 组件的属性列表
   */
  properties: {
    // myTitle: String
    myTitle: {
      type: String,
      value: "标题默认值"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap() {
      this.triggerEvent('myevent', {
        name: 'xxx',
        age: 18
      })
    },
  }
})
