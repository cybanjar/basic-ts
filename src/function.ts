function getProfile(): string {
  let name:string = 'Syamsul';
  return name
}

function getRank(): number {
  return 12
}

function printBranch(): void {
  console.log('void tidak boleh return');
}
printBranch()

// function kali(val1:number, val2:number): number {
//   return val1 * val2;
// }
// const result = kali(2, 5);

// function as type
type Tambah = (val1: number, val2: number) => number;
const add:Tambah = (val1: number, val2: number): number => {
  return val1+val2;
}
const result = add(4,10);

// default parameter
const fullName = (firstname: string, lastname:string = "Amin"):string => {
  return firstname + " " + lastname;
}
console.log(fullName("Syamsul"));

// optional parameter
const getFullname = (val1:string, val2:string, val3?:string):string => {
  return val1 + val2 + val3;
}
console.log(getFullname("Syamsul ", "Amin ", "Ahmad"))



