// in a array if any value is repeated print then return true else false
let arr = [2,2,3,2];
let k  = new Set(arr);// set will remove dublicate vlues and alos length of set is count by {size};
console.log(k.size,arr.length,k);
console.log(k.size != arr.length? true : false);
 

//  find a stirng whihc can be anagram of another string ex: A = "ram",B = "maarr" and anagrams can be formed without repeating characters.//

let str1 = 'rama';
let str2 = 'amral';
let sort1 = str1.split('').sort().join('');
let sort2 = str2.split('').sort().join('');
console.log(str2,str2);
console.log(str1==str2 ? true:false);
// another way by map
// const fruits = new Map([
//     ["r", 1],
//     ["a", 2],
//     ["m", 1]
//   ]);

const map = new Map();// creating a map object 
for(const key of str1)// iterate str1 based on key {r,a,m,a}
{
    if(map.has(key))/// it cheak key is present in map or not
    map.set(key,map.get(key)+1) // if key is present in map then increment the value by 1
    else map.set(key,1) // if key is not present in map then set the value as 1
}
console.log(map);


for(const key of str2)
    {  
        if(!map.has(key)) return false ;  // If the specified {r,a,m,a} key is not present in the map, the code will exit the current function or loop by returning false
        map.set(key,map.get(key)-1);   // if key is present in map then decrement the value by 1  #map.set(key,value)
        if(map.get(key)===0) map.delete(key) ; // returns the value associated with the key, undefined if the key doesn't exist in the map.
    }output


// (map.has) returns true if the key exists in the set, otherwise false.
// (map.set) Stored the value for the key, retums the map itself.

console.log(map,"hello");


// Q give a array num = [2,7,11,15] target = 9 return index number whose sum is equal ot target;


let numarr = [2,7,11,15];
let target = 9;

for(let i = 0 ;i<=numarr.length;i++)
{
    if(target - numarr[i])
    {

    }
}


