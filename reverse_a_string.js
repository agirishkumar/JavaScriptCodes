function reverse(str){
  if ( !str || str.length < 2 || typeof str !== 'string') {
    return 'thats not good'; 
  }

const backwards = [];
const totalitems = str.length-1;
for(let i = totalitems; i>=0;i--){
  backwards.push(str[i]);
}
console.log(backwards);
return backwards.join('');
}
console.log(reverse('I am Girish'));

function reverse2(str){
  return str.split('').reverse().join('');
}

console.log(reverse2('I am Girish'));

const reverse3 = str => str.split('').reverse().join('');
console.log(reverse3('I am Girish'));
