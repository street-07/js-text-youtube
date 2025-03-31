// 3 varible -> const,let,var

const accountId = 1443234 /*const mean value can't be chane*/
let accountEmail ="ujjj@google.com"  //2nd letter is in caps start
var accountPassword="12345"
accounrCity="jaipur"
let accountState;  // no value given the js consider as undefined

// accountId=2;  //not allowed  const change value here

accountEmail="hvj@.com";
acoountPassword="123";
accountCity="benh";

console.log(accountId);
/*

preferr not to use varr
because of issue in block scope and functional scope
*/


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])   //we  use this table keyword to write all in one time

 