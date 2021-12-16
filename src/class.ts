// var yg ada didalam class wajib constructor
export class User {
  public name:string;

  constructor(name: string, public age:number, public noHp?: number) {
    this.name = name;
  }

  setName(value:string): void {
    this.name = value;
  }

  getName = () => {
    return this.name;
  }
}

// inheritance :
// public = bisa di akses di semua class/ luar class
// protected = hanya bisa di akses dalam class tersebut, dan class turunannya
// private = hanya dalam class tsb

class Admin extends User {
  read:boolean = true;
  write:boolean = true;
  hoby:string;
  private _email:string = ""; // must set & get
  static getRoleName:string = "Admin"; // static property

  constructor(hoby:string, name:string, age:number) {
    super(name, age); // override admin add hoby
    this.hoby = hoby;
  }

  static getRole():string { //static: tanpa perlu instance object new
    return "hi doraemon"
  }

  getRole(): { read:boolean, write:boolean} {
    return {
      read: this.read,
      write: this.write
    }
  }

  set email(value:string) { //validator
    if(value.length < 5) {
      this._email = 'email salah';
    } else {
      this._email = value;
    }
  }

  get email():string {
    return this._email;
  }
}

// let admin = new Admin("Badminton", "Ahmad", 20);
// admin.getName();
// admin.setName("Syamsul");
// admin.getRole();

// admin.email = 'ah@g';
// console.log(admin.email);

let admin = Admin.getRole() // print static method
console.log(admin);



 