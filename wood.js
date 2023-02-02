/*
fixed: per item wood requirements
1. chair --> 3 cft
2. table --> 10 cft
3. bed --> 50 cft

vary: quantity
*/

function woodCalculate(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const BedWood = bedQuantity * perBedWood;

    const totalWood = chairWood + tableWood + BedWood;
    return totalWood;

    console.log(chairQuantity, tableQuantity, bedQuantity);
}

const totalWood = woodCalculate(1,1,1);
console.log('total wood required: ', totalWood);