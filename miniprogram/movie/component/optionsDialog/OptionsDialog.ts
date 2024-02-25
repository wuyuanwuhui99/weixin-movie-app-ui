// movie/component/optionsDialog/OptionsDialog.ts
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    options:{
        type: Array<string>,
        value:[]
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
    useCheck(e:ClickEvent):void{
        this.triggerEvent('check',e.currentTarget.dataset.item)
        this.triggerEvent('close')
    },

    useCloseDialog(){
        this.triggerEvent('close')
    }
  }
})