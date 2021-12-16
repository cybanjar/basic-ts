function getName(value:any) {
  return value;
}

console.log(getName('Syamsul').length)
console.log(getName(200).length)

// generic return dynamic
function mydata<T>(value: T){
  return value;
}

console.log(mydata("Ahmad").length);
console.log(mydata(99.4).toFixed());

