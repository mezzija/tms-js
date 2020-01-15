const sum=(a)=>(y)=>a+y;
let result=sum(5)(2);
console.log(result);

let text1=document.getElementById('text1');
let text2=document.getElementById('text2');
let text3=document.getElementById('text3');
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const changeStyle=()=>{
    let i=0;
    return event=>{
        event.target.style.color=colors[i];
        i++;
        if(i===colors.length) i=0;
        return i;
    }
};
text1.addEventListener('click',changeStyle());
text2.addEventListener('click',changeStyle());
text3.addEventListener('click',changeStyle());