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
let contents=products;

let regDelimiter=new RegExp(/\B(?=(\d{3})+(?!\d))/g );

const sortDesc=(arr)=>{
    arr.sort((a,b)=>{
        if(a.price.value<b.price.value) return 1;
        if(a.price.value>b.price.value) return -1;
        else return 0;
    });
};
const sortAsc=(arr)=>{
    arr.sort((a,b)=>{
        if(a.price.value<b.price.value) return -1;
        if(a.price.value>b.price.value) return 1;
        else return 0;
    });
};

sortDesc(products);

basket = {
    count: 0,
    amount: 0,
    products: [],
};


let amount=document.getElementById('amount');
let counter=document.getElementById('counter');

const addToBasket=(id)=>event=>{
    event.preventDefault();
    const product=products.find(item=>item.id===id);
    event.target.classList.toggle('active');
    if(event.target.classList.contains('active')){
        event.target.textContent= 'Remove from Basket';
        basket.count++;
        basket.amount+=product.price.value;
        basket.products.unshift(id);
        amount.textContent=basket.amount.toFixed(2).replace(regDelimiter,',');
        counter.textContent=basket.count;


    }else{
        event.target.textContent= 'Add to Basket';
        basket.count--;
        basket.amount-=product.price.value;
        basket.products.splice(basket.products.indexOf(id),1);
        amount.textContent=basket.amount.toFixed(2).replace(regDelimiter,',');
        counter.textContent=basket.count;
    }
};

const section=document.getElementById('content');

const content=(products)=>{
    section.innerHTML='';
    for(let i=0;i<products.length;i++){
        let newDiv=document.createElement('div');
        newDiv.classList.add('content');
        newDiv.classList.add('row');
        let currency;
        if(products[i].price.currency==='USD'){
            currency='$';
        }
        newDiv.innerHTML=`
    <div class="img">
      <img src=${products[i].imageLink}>
    </div>
    <div class="textWidth">
      <p>${products[i].title}</p>
      <p class="characteristic">${products[i].description}</p>
    </div>
    <div class="contentPrice">
      <p >${currency}${products[i].price.value.toFixed(2).replace(regDelimiter,',')}</p>
      <a class="button" href="#">Add to Basket</a>
    </div>
    
    `;
        section.appendChild(newDiv);
        let a=newDiv.querySelector('.button');
        a.addEventListener('click',addToBasket(products[i].id));
    }
};


content(contents);


let sort=document.getElementById('sort');

let flag=0;
sort.addEventListener('click',(event)=>{

    if(flag===0){
        sort.textContent='Asc';
        sortAsc(contents);
        content(contents);
        flag++;
    }else{
        sort.textContent='Desc';
        sortDesc(contents);
        content(contents);
        flag=0;
    }
});


const input=document.getElementById('input');
input.addEventListener('input',(event)=>{
    let search=[];
    for(let i=0;i<products.length;i++){
        const reg=new RegExp(`${event.target.value}`,'gi');
        if(reg.test(products[i].title)){
            search.unshift(products[i]);
            contents=search;
           if(flag>0){
               sortAsc(contents);
               content(contents);

           }
           else{
               sortDesc(contents);
               content(contents);
           }
        }
    }
    if(search.length===0){
        section.innerHTML=`
                 <p class="NoResult">No results found for your request</p>
            `;
    }


});

