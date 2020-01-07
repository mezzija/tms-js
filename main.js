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
function find(lastName){
    if(lastName==='kutcher'){
        return data[0];
    }else
        if(lastName==='pitt'){
            return data[1];
        }
        else
            if(lastName==='dakota'){
                return data[2];
            }
            else {
                console.log('No results found for your request')
            }
}
let lastName='KuTCHer';

//find(lastName.toLowerCase());
console.log(find(lastName.toLowerCase()));

