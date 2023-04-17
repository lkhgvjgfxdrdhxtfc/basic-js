const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(Array) {
  /*throw new NotImplementedError('Not implemented');*/
  
  const newArr=Array.toString().replace(/ /g,"").split(",");
  
  const arr1 = newArr.sort();
 

for (let i=0; i < arr1.length; i++) {
let arr2=[];
  if ((typeof arr1[i] !== "string")||(arr1.length===0)) {
  return false;
   
} else {
  arr2.push(arr1[i]);
}

const str = arr2.map((a) => a[0]).join('');
const str1 = str.toUpperCase();
return str1;
}

}
module.exports = {
  createDreamTeam
};
