interface Laptop {
  name:string;
  on():void;
  off():void;
}

class Asus implements Laptop {
  name:string;
  isGaming:boolean;
  constructor(name:string, isGaming:boolean){
    this.name = name;
    this.isGaming = isGaming
  }
  on() { // type void tidak mengambalikan return value
    return console.log('Nyala');
  }
  off(): void {
    console.log('Mati');
  }
}
let asus = new Asus('Asus', true);
console.log(asus);

class MacBook implements Laptop {
  name:string;
  isRetina:boolean;
  constructor(name:string, isRetina:boolean){
    this.name = name;
    this.isRetina = isRetina;
  }
  on():void { // type void tidak mengambalikan return value
    console.log('Nyala');
  }
  off(): void {
    console.log('Mati');
  }
}
let mac = new MacBook('Mac Pro', true);
console.log(mac);