$(function(){
    let arr = kits1.loadData('cartData');
   // 获取跳转过来的id 
   let id = location.search.substring(4);
//    console.log(id);
// 在数据数组中找到对的数据
 let target = phoneData.find(e=>{
      return e.pID == id;
  })
 // 渲染到页面
 $('.sku-name').text(target.name);
$('.preview-img > img').attr('src',target.imgSrc);
$('.summary-price  em').text(`￥${target.price}`)

 // 当点击加入购物车时 注册点击事件
  $('.addshopcar').on('click',function(){
     let nums = $('.choose-number').val();
     //判断输入框里面的数字是否合理
     if(nums.trim().length == 0 || isNaN(nums) || parseInt(nums) <=0){
         alert('商品数量不合理');
         return;
     }
     nums = parseInt(nums);
     // 获取本地数据，判断当前数据存在本地
    let obj = arr.find(e=>{
        return e.pID == id;
    })
    if(obj){
        e.number += nums;
    }   
     else {
         let obj = {
             pID : id,
             name : target.name,
             price : target.price,
             number : nums,
             imgSrc : target.imgSrc,
            isChecked : true,
         }
         arr.push(obj);
         kits1.saveData('cartData',arr);
     }
     location.href = './cart.html';
 }) 
})