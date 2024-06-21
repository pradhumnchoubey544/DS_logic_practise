// case 1
let string = '1,2,3,4,5,6,7,8,9';
let k = string.split(",");
let new1 = (a) => {
    if (a.length % 2 !== 0) {
        a.push(0);
    }
    let newarr = [];
    for (let i = 0; i < a.length; i=i+2) {
         newarr.push([a[i],a[i+1]]);
    }
    return newarr;
}
console.log(new1(k));


// case:2 For which value of x the results of the following statements are not the same?
if( null <= 100 ){console.log("hello")}
if(!(undefined > 100)){console.log("hello")}






