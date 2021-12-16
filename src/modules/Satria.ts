import Vehicle from './BaseVehicle';

class Satria<T> extends Vehicle<T> {
  constructor(name:string, wheel:number, model:T){
    super(name, wheel, model);
  }
}

export default Satria;