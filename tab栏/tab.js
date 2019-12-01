class Tab{
    constructor(obj){
       let options = {
           itemClass : '.item',
           eventType : 'mouseover',
           contents : '.content',
           showClass : 'show',
           activeClass : 'active'
       }
       Object.assign(this,options);
       this.itemClass = document.querySelectorAll(this.itemClass);
       this.contents = document.querySelectorAll(this.contents);
       this.event()
    }
  
    // 注册事件
    event(){
       this.itemClass.forEach((e,i)=>{
           e.addEventListener(this.eventType,(e)=>{
                let target = e.target;
                // 调用切换分类
                this.changeItems(target);

              // 调用切换内容
              this.changeContent(i);
           })
       })
    }

    // 切换分类
    changeItems(current){
       this.itemClass.forEach(e=>{
           e.classList.remove(this.activeClass);
       })
       current.classList.add(this.activeClass);
    }

    //切换内容
    changeContent(index){
      this.contents.forEach(e=>{
          e.classList.remove(this.showClass);
      })
     this.contents[index].classList.add(this.showClass);
    }
}