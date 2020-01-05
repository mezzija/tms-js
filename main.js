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
for(let i=0;i<2;i++){
    data[i].lastName.toLowerCase();
}
function find(lastName){
    if(lastName==='kutcher'){
        console.log(data[0]);
    }else
        if(lastName==='pitt'){
            console.log(data[1]);
        }
        else
            if(lastName==='dakota'){
                console.log(data[2]);
            }
            else {
                console.log('No results found for your request')
            }
}
let lastName='dakota';

find(lastName.toLowerCase());


