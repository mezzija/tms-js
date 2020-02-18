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




products.sort(function (a,b) {
   if(a.price.value>b.price.value){
       return -1
   }else
    if(a.price.value<b.price.value){
        return 1
    }
    return 0;
});
let cost=document.getElementById('cost');
let counter=document.getElementById('counter');
const basketIds = [];

basket = {
    count: 0,
    amount: 0,
    products: [],
};

const changeStyle=(id)=>event=>{
    event.preventDefault();
    let product=products.find(item=>item.id===id);
    if(event.target.textContent==='Add to Basket'){

        event.target.textContent='Remove from Basket';
        event.target.style.backgroundColor='grey';
        cost.textContent=Number(cost.textContent)+product.price.value;
        counter.textContent++;
    }else{

        event.target.textContent='Add to Basket';
        event.target.style.backgroundColor='#ff8b38';
        cost.textContent=Number(cost.textContent)-product.price.value;
        counter.textContent--;
    }

};


for(let i=0;i<products.length;i++){
    let newDiv=document.createElement('div');
    const section=document.getElementById('content');
    newDiv.classList.add('content');
    newDiv.classList.add('row');
    let price;
    if(products[i].price.currency==='USD'){
        price='$'
    }
    newDiv.innerHTML=`
       <div class="img">
        <img  src="${products[i].imageLink}">
        </div>
     <div class="contentInformation textColor">
                <p>${products[i].title}</p>
                <p class="pContentSize">${products[i].description}</p>
            </div>
            <div class="contentPrice">
                <p class="textColor">${price}${(products[i].price.value.toFixed(2))}</p>
                <a  class="button" href="#">Add to Basket</a>
            </div>
 `;
    section.appendChild(newDiv);
    let a=newDiv.querySelector('.button');
    a.addEventListener('click',changeStyle(products[i].id));

}


