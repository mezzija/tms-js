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
                return 'No results found for your request';
            }
}
let lastName='Ku';
let result=find(lastName.toLowerCase())
console.log(result);

