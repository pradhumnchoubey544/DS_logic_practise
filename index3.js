// # find common value from this array = [[1,0],[3,4,7],[1,9],[0,4,6]];
// let givenarr = [[1,0],[3,4,7],[1,9],[0,4,6]];
// givenarr = givenarr.flat()  // it will flatten a nested array into a single-dimensional array.
// let map = new Map();
// let newarr=[];
// for(let i = 0;i<=givenarr.length-1;i++)
//     {
//        if(map.has(givenarr[i]))                // if key is present in map then
//         {   let value = map.get(givenarr[i]);  // it give value based on key(key is always unique)
//             map.set(givenarr[i],value+1);      // based on key it will increase value
//             newarr.push(givenarr[i]);
//         }else{ map.set(givenarr[i],1);}        // else insert key with value 1
//     }
// console.log(newarr);
    // set(key, value): Adds a new key-value pair to the map. If the key already exists, the value associated with that key is updated with the new value.
    // get(key): Returns the value associated with the given key. If the key doesn't exist, it might return undefined, null, or throw an error (depending on the implementation).
    // has(key): Checks if the map contains a specific key. Returns true if the key exists, false otherwise.
    // delete(key): Removes the key-value pair associated with the given key from the map. Returns true if the key was deleted successfully, false if the key was not found.
    // clear(): Removes all key-value pairs from the map.



// insert interval

let  interval =[[1,3],[6,9]];
let  addinterval = [2,5];
let result = [];

for(let i = 0 ;i<= interval.length-1;i++)
{
    for(let j = 0 ;j<= interval[i].length-1;j++)
        {
            //  console.log(interval[0][0]);
            if(interval[i][1]<addinterval[0]){i++}
            else if(interval[0][i]>addinterval[1]){ result.push(addinterval)}
            else{result[0]= Math.min(addinterval[0],interval[i][0]);
                result[1]= Math.max(addinterval[1],interval[i][1]);
            }
        }
}
console.log(result);
