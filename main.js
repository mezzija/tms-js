const sum=(a)=>(y)=>a+y;
let result=sum(5)(2);
console.log(result);

let text1=document.getElementById('text1');
let text2=document.getElementById('text2');
let text3=document.getElementById('text3');
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
let changeStyle=(value)=>{
    let i=0;
    if(value==='text1'){
        return ()=>{
            text1.style.color=colors[i];
            i++;
            if(i>=colors.length) i=0;
            return i;
        }
    }else if(value==='text2'){
        return ()=>{
            text2.style.color=colors[i];
            i++;
            if(i>=colors.length) i=0;
            return i;
        }
    }else if (value==='text3'){
        return ()=>{
            text3.style.color=colors[i];
            i++;
            if(i>=colors.length) i=0;
            return i;
        }

    }
};
text1.addEventListener('click',changeStyle('text1'));
text2.addEventListener('click',changeStyle('text2'));
text3.addEventListener('click',changeStyle('text3'));