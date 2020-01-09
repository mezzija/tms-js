let min=function(a,b){
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
console.log(toZero(randArr));

