let text1=document.getElementById('text1');
let text2=document.getElementById('text2');
let text3=document.getElementById('text3');

const changeStyle=id=>event=>{
    event.target.style.color=colors.next(id).value;
};
text1.addEventListener('click',changeStyle(Symbol()));
text2.addEventListener('click',changeStyle(Symbol()));
text3.addEventListener('click',changeStyle(Symbol()));

const colors = {
    data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
    [Symbol.iterator]() {
        return this;
    },
    next(id){
        if( this[id]===undefined){
            this[id]=0;
        }
        if(this[id]<this.data.length){
            return {
                done:false,
                value: this.data[this[id]++],
            }
        }else {
            this[id]=0;
            return {
                dane:true,
            }
        }
    },
};
let bubbleSort=(arr)=>{
    for( let i=0;i<arr.length-1;i++){
        let flag=0;
        for( let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let a=arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=a;
                flag++;
            }
        }
        if(flag===0) break;
    }
    return arr;
};
const randomArr=(length)=>{
    let arr=new Array(length);
    for (let i=0;i<arr.length;i++){
        arr[i]=Math.ceil(Math.random()*100);
    }
    return arr;
};
let arr=randomArr(10);
console.log(arr);
console.log(bubbleSort(arr));