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
