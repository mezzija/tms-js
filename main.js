/*const sum=(a)=>(y)=>a+y;
let result=sum(5)(2);
console.log(result);*/
/*let text1=document.getElementById('text1');
let text2=document.getElementById('text2');
let text3=document.getElementById('text3');
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
let i=0;
let j=0;
let k=0;
const changeStyle1=()=>{
    text1.style.color=colors[i];
    i++;
    if(i>=colors.length) i=0;
};
const changeStyle2=()=>{
    text2.style.color=colors[j];
    j++;
    if(j>=colors.length) j=0;
};
const changeStyle3=()=>{
    text3.style.color=colors[k];
    k++;
    if(k>=colors.length) k=0;
};
text1.addEventListener('click',changeStyle1);
text2.addEventListener('click',changeStyle2);
text3.addEventListener('click',changeStyle3);*/
let text1=document.getElementById('text1');
let text2=document.getElementById('text2');
let text3=document.getElementById('text3');
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
let changeStyle1=()=>{
    let i=0;
    return ()=>{
        text1.style.color=colors[i];
        i++;
        if(i>=colors.length) i=0;
        return i;
    }
};
let changeStyle2=()=>{
    let i=0;
    return ()=>{
        text2.style.color=colors[i];
        i++;
        if(i>=colors.length) i=0;
        return i;
    }
};
let changeStyle3=()=>{
    let i=0;
    return ()=>{
        text3.style.color=colors[i];
        i++;
        if(i>=colors.length) i=0;
        return i;
    }
};
text1.addEventListener('click',changeStyle1());
text2.addEventListener('click',changeStyle2());
text3.addEventListener('click',changeStyle3());