function check(str, bracketsConfig) {
  if (str.length % 2 === 1) return false;

  let stack = [];
  let bracketsOpen = [];
  let bracketsClose = [];
  let bracketsSame = [];
  
  for (let i = 0; i < bracketsConfig.length; i++) {
    if (bracketsConfig[i][0] == bracketsConfig[i][1]){
      bracketsSame.push(bracketsConfig[i][0]);
    } else {
      bracketsOpen.push(bracketsConfig[i][0]);
      bracketsClose.push(bracketsConfig[i][1]);
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (bracketsOpen.indexOf(str[i]) > -1){
      stack.push(str[i]);
      // console.log('Stack pushed open bracket: ', stack);
    }
    if (bracketsClose.indexOf(str[i]) === bracketsOpen.indexOf(stack[stack.length-1]) 
      && bracketsOpen.indexOf(stack[stack.length-1]) > -1 
      && bracketsClose.indexOf(str[i]) > -1){
      stack.pop();
      // console.log('Stack popped close bracket:', stack);
    }
    if (bracketsSame.indexOf(str[i]) > -1){
      if(bracketsSame.indexOf(str[i]) === bracketsSame.indexOf(stack[stack.length-1])){
        stack.pop();
        // console.log('Stack popped same bracket:', stack);
      } else {
        stack.push(str[i]);
        // console.log('Stack pushed same bracket:', stack);
      }
    }
  }
  return stack.length === 0 ? true : false;
}
module.exports = check;

