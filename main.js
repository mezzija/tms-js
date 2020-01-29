/*let min=function(a,b){
  if(a<b) return a;
  else return b;
};
let max=function(a,y){
  if(a>y) return a;
  else return y;
};
let minTernary =(a,b)=> a<b?a:b;
let maxTernary =(a,y)=> a>y?a:y;

let palindrome=function(word){
    let arr=word.split('');
    arr.reverse();
    let reverse=arr.join('');
    if(word===reverse){
        return `Это слово является полиндромом: ${word.toUpperCase()}`
    }
    return `Это слово не является полиндромом: ${word.toUpperCase()}`
};
let toZero=function(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%10===0){
            arr[i]=arr[i]+'';
            let arr0=arr[i].split('');
            for(let j=0;j<arr0.length;j++){
                if(arr0[j]==='0'){
                    arr0[j]='zero';
                }
            }
            arr[i]=arr0.join('');
        }
    }
    return arr;
};
let newArrRand=function(arr){
    arr=new Array(10);
    for(let i=0;i<arr.length;i++){
        arr[i]=Math.floor(Math.random()*100);
    }
    return arr;
};

console.log(palindrome('шабаш'));
let arr;
let randArr=newArrRand(arr);
console.log(randArr);
console.log(toZero(randArr));*/


const products = [
    {
        id: '7df3f04b-0ee0-4a8a-bda8-e2931e68860d',
        title: 'MacBook Pro 16-inch',
        description: '2.3GHz 8-Core Processor<br>1TB Storage<br>AMD Radeon Pro 5500M',
        price: {
            value: 2799.00,
            currency: 'USD',
        },
        imageLink: 'https://www.apple.com/v/mac/home/am/images/overview/hero/macbook_pro_16__ni9nkbyq2dm6_large.jpg'
    },
    {
        id: '69d8b82e-1bc6-45a7-bcb0-ba205c91b8bd',
        title: 'MacBook Pro 13-inch',
        description: '2.4GHz Quad-Core Processor with Turbo Boost up to 4.1GHz<br>256GB Storage<br>Touch Bar and Touch ID',
        price: {
            value: 1799.00,
            currency: 'USD',
        },
        imageLink: 'https://www.apple.com/v/mac/home/am/images/overview/hero/macbook_pro_16__ni9nkbyq2dm6_large.jpg'
    },
    {
        id: '9c56a489-5581-4552-802a-6e56249b0056',
        title: 'Mac Pro',
        description: '3.5GHz 8‑core Intel Xeon W processor, Turbo Boost up to 4.0GHz<br>256GB Storage<br>Radeon Pro 580X with 8GB of GDDR5 memory',
        price: {
            value: 5999.00,
            currency: 'USD',
        },
        imageLink: 'https://www.apple.com/v/mac/home/am/images/overview/hero/mac_pro__bn92faz71k6a_large.jpg'
    },
    {
        id: 'e325ae53-ba9b-4b9e-b443-20db05f95c2e',
        title: 'MacBook Air',
        description: '2-core Intel Core i5 processor<br>1TB storage<br>12 hours battery life',
        price: {
            value: 1099.00,
            currency: 'USD',
        },
        imageLink: 'https://www.apple.com/v/mac/home/am/images/overview/compare/macbook_air__csdfieli984m_large.jpg'
    },
    {
        id: '4f50005d-b422-4adf-b1f6-3b6551862500',
        title: 'iPhone 11 Pro Max',
        description: 'Midnight Green<br>521GB Storage<br>20 hours of video playback',
        price: {
            value: 1449.00,
            currency: 'USD',
        },
        imageLink: 'https://www.apple.com/v/iphone/home/af/images/overview/compare/compare_iphone_11_pro__fvqwhr4dkhiu_large.jpg'
    }
];
const arr=[];
for(let i=0;i<products.length;i++){
    arr[i]=products[i].id;
}



let mas=products.reduce((acc,item)=>arr.includes(item.id)?acc+=item.price.value:acc,0);
console.log(mas);



