const data = [
    {
        firstName: 'Ashton',
        lastName: 'Kutcher',
        age: 40,
    },
    {
        firstName: 'Bradley',
        lastName: 'Pitt',
        age: 54,
    },
    {
        firstName: 'Hannah',
        lastName: 'Dakota',
        age: 24,
    },
];
let find=function(lastName){
   for (let i=0;i<=data.length-1;i++){
       if (data[i].lastName.toLowerCase()===lastName){
           return data[i];
       }
   }
    return 'No results found for your request';
};
let lower=function(lastName){
    return lastName.toLowerCase();
};
let lastName='dakota';
let result=find(lower(lastName));
console.log(result);

