let products = [
    { id: 1, name: 'Milk', count: 100 },
    { id: 2, name: 'Orange', count: 100 },
    { id: 3, name: 'Butter', count: 100 },
  ];
let newProduct ={
    id: 4, name: 'Cheese', count: 100 ,
}
products.push(newProduct);
console.log(products);
for(i in products){
    if (products[i].id===2){
        products.splice(i,1);
    }
}
console.log(products);
for(i in products){
    if(products[i].id===3){
        products[i].count=0;
    }
}
console.log(products);
let checkOut;
for(i in products){
    if(products[i].name==='Butter'){
        checkOut=products[i]
        break;
    }
}
if(checkOut){
    console.log(checkOut);
}
else{
    console.log('Không có dữ liệu bạn tìm kiếm');
    
}