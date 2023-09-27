import NepaliDate from 'nepali-date-converter'

//give my data a nepali date
export function date() {
    let date1 = new NepaliDate();
    let ans = date1.format('MM/DD');
    return (ans);
}

//add the price from the array
export function add(array) {
    let total = 0;
    array.map((i) => {
        total = total + Number(i.price);
    })
    return Number(total);
}