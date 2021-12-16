import Mercy from './Mercy';
import Satria from './Satria'

let mercy = new Mercy("Mercedes Benz", 4, 200);
console.log(mercy);

let satria = new Satria("F150", 2, "Manual");
console.log(satria);

satria.manual();
satria.automatic();