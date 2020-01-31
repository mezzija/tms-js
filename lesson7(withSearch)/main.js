(async function () {
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
    let contents={...products};
    console.log(contents);

    const exchanger= ()=>{

        return  fetch('http://www.nbrb.by/api/exrates/rates/840?parammode=1')
            .then(response=>response.json())
            .then(data=>data)
            .catch(error=>console.log('error'));


    };
    const data= await exchanger();
    console.log(data.Cur_OfficialRate);


    let regDelimiter=new RegExp(/\B(?=(\d{3})+(?!\d))/g );

    const amount=document.getElementById('amount');
    const counter=document.getElementById('counter');
    const section=document.getElementById('content');
    const sort=document.getElementById('sort');
    const input=document.getElementById('input');
    const changeValue=document.getElementById('changeValue');
//
    if(localStorage.getItem('productsId')===null){
        localStorage.setItem('productsId','[]');
    }
    let stateBasket=JSON.parse(localStorage.getItem('productsId')) ;
    amount.textContent=products.reduce((acc,item)=>stateBasket.includes(item.id)?acc+=item.price.value:acc,0).toFixed(2).replace(regDelimiter,',');
    counter.textContent=stateBasket.length;
// fun sort
    const ascDesc=(arr,sort)=>{
        if(sort==='Desc'){
            arr.sort((a,b)=>{
                if(a.price.value<b.price.value) return 1;
                if(a.price.value>b.price.value) return -1;
                else return 0;
            });
        }else if(sort==='Asc'){
            arr.sort((a,b)=>{
                if(a.price.value<b.price.value) return -1;
                if(a.price.value>b.price.value) return 1;
                else return 0;
            });
        }
    };
// event add to basket
    const addToBasket=(id)=>event=>{
        event.preventDefault();
        const product=products.find(item=>item.id===id);
        event.target.classList.toggle('active');
        if(event.target.classList.contains('active')){
            event.target.textContent= 'Remove from Basket';
            let localBasket=JSON.parse(localStorage.getItem('productsId'));
            localBasket.push(id);
            localStorage.setItem('productsId',JSON.stringify(localBasket));
            amount.textContent=products.reduce((acc,item)=>localBasket.includes(item.id)?acc+=item.price.value:acc,0).toFixed(2).replace(regDelimiter,',');
            counter.textContent=localBasket.length;
        }else{
            event.target.textContent= 'Add to Basket';
            let localBasket=JSON.parse(localStorage.getItem('productsId'));
            localBasket.splice(localBasket.indexOf(id),1);
            localStorage.setItem('productsId',JSON.stringify(localBasket));
            amount.textContent=products.reduce((acc,item)=>localBasket.includes(item.id)?acc+=item.price.value:acc,0 ).toFixed(2).replace(regDelimiter,',');
            counter.textContent=localBasket.length;
        }
    };
// drawing content
    let currency;
    const content=(products)=>{
        section.innerHTML='';
        for(let i=0;i<products.length;i++){
            let newDiv=document.createElement('div');
            newDiv.classList.add('content');
            newDiv.classList.add('row');

            if(products[i].price.currency==='USD'){
                currency='$';
            }else if(products[i].price.currency==='BYN'){
                currency='BYN';
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
      <p >${currency} ${products[i].price.value.toFixed(2).replace(regDelimiter,',')}</p>
      <a class="button" href="#">Add to Basket</a>
    </div>
    
    `;
            let a=newDiv.querySelector('.button');

            let interval=localStorage.getItem('productsId');
            if(interval.includes(products[i].id)){
                a.classList.add('active');
                a.textContent='Remove from Basket';
            }
            a.addEventListener('click',addToBasket(products[i].id));
            section.appendChild(newDiv);

        }
    };
// event sort
    let flag=0;
    sort.addEventListener('click',(event)=>{
        if(flag===0){
            sort.textContent='Asc';
            ascDesc(contents,'Asc');
            content(contents);
            flag++;
        }else{
            sort.textContent='Desc';
            ascDesc(contents,'Desc');
            content(contents);
            flag=0;
        }
    });

// event search
    input.addEventListener('input',(event)=>{
        let search=[];
        for(let i=0;i<products.length;i++){
            const reg=new RegExp(`${event.target.value}`,'gi');
            if(reg.test(products[i].title)){
                search.unshift(products[i]);
                contents=search;
                if(flag>0){
                    ascDesc(contents,'Asc');
                    content(contents);
                }
                else{
                    ascDesc(contents,'Desc');
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
    changeValue.addEventListener("click", (event)=>{
        event.preventDefault();
        console.log(products);
        if(changeValue.textContent==='USD'){
            changeValue.textContent='BYN';
            for(let i=0;i<products.length;i++){
                contents[i].price.value*=data.Cur_OfficialRate;
                contents[i].price.currency='BYN';

            }
            content(contents);
        }else if(changeValue.textContent==='BYN'){
            changeValue.textContent='USD';
            for(let i=0;i<products.length;i++){
                contents[i].price.value=products[i].price.value;
                contents[i].price.currency='USD';
            }
            content(contents);
        }

    });
    ascDesc(products,'Desc');
    content(contents);
}());