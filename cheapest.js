const phones = [
    {name: 'Samsung', camera: 12, storage: '32gb', price: 36000, color: 'silver'},
    {name: 'Walton', camera: 12, storage: '32gb', price: 22000, color: 'gold'},
    {name: 'iphone', camera: 12, storage: '32gb', price: 82000, color: 'black'},
    {name: 'xaomi', camera: 12, storage: '32gb', price: 52000, color: 'white'},
    {name: 'Oppo', camera: 12, storage: '32gb', price: 20000, color: 'silver'},
    {name: 'Nokia', camera: 12, storage: '32gb', price: 62000, color: 'blue'},
];

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i=0; i<phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);