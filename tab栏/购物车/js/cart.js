$(function(){
   let arr = kits1.loadData('cartData');
  //  console.log(arr);
  let html = '';
  arr.forEach(e=>{
      html += `<div class="item" data-id="${e.pID}">
      <div class="row">
        <div class="cell col-1 row">
          <div class="cell col-1">
            <input type="checkbox" class="item-ck" ${e.isChecked ? "checked" : ''}>
          </div>
          <div class="cell col-4">
            <img src=${e.imgSrc} alt="">
          </div>
        </div>
        <div class="cell col-4 row">
          <div class="item-name">${e.name}</div>
        </div>
        <div class="cell col-1 tc lh70">
          <span>￥</span>
          <em class="price">${e.price}</em>
        </div>
        <div class="cell col-1 tc lh70">
          <div class="item-count">
            <a href="javascript:void(0);" class="reduce fl ">-</a>
            <input autocomplete="off" type="text" class="number fl" value="${e.number}">
            <a href="javascript:void(0);" class="add fl">+</a>
          </div>
        </div>
        <div class="cell col-1 tc lh70">
          <span>￥</span>
          <em class="computed">${e.number * e.price}</em>
        </div>
        <div class="cell col-1">
          <a href="javascript:void(0);" class="item-del">从购物车中移除</a>
        </div>
      </div>
    </div>`
  });
  $('.item-list').append(html);
  let noCha = arr.find(e=>{
     return e.isChecked == false;
  })
  $('.pick-all').prop('checked',!noCha);
  if(arr.length !== 0){
    $('.empty-tip').hide();
    $('.cart-header').show();
    $('.total-of').show();
  }

  // 注册点选和全选事件
  $('.pick-all').on('click',function(){
      let status = $(this).prop('checked');
      $('.item-ck').prop('checked',status);
      // 更新本地数据
      arr.forEach(e=>{
        e.isChecked = status;
      })
      kits1.saveData('cartList',arr);
      cala()
  })
  // 单选按钮用委托注册
   $('.item-list').on('click','.item-ck',function(){
       let dxs = $('.item-ck').length === $('.item-ck:checked').length;
       $('.pick-all').prop('checked',dxs);
       // 获取点击按钮的状态和行的id
       let zt = $(this).prop('checked');
       let id = $(this).parents('.item').attr('data-id');
      // 修改本地数据 并更新
       arr.forEach(e=>{
          if(e.pID == id){
            e.isChecked = zt;
          }
       })
       kits1.saveData('cartList',arr);
       cala()
       
   })

   function cala(){
     let number = 0;
     let price = 0;
     arr.forEach(e=>{
       number += e.number;
       price += e.number * e.price;
     })
     $('.selected').text(number);
     $('.total-money').text(price);
   }
   cala();
})