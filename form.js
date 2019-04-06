{
  // 控制价格输入指令
  price:{
    inserted:(el,binding,node,oldNode)=>{
      this.cb=binding.value.cb;
      this.value = ''
      el.oninput = ()=>{

        el.value = el.value.replace(/[^\d|.]/ig,"");

        el.value = /(^[1-9]\d*(\.\d{0,2})?$)|(^0(\.\d{0,2})?$)/.test(el.value)||el.value===""?el.value:this.value;
        this.value = el.value;
        this.cb(this.value)
      };
      el.onblur = ()=>{
        el.value = this.value.split('.')&&this.value.split('.')[1]===''?parseInt(el.value):el.value; 
        this.value = el.value;
        this.cb(this.value)

      };
    }
  }
}