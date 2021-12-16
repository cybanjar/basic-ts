import IVehicle from './IVehicle';
import * as Transmision from './Transmision';
import { automatic } from './Transmision';

class BaseVehicle<T> implements IVehicle<T> {
  name: string;
  wheel: number;
  model: T;
  
  constructor(name:string, wheel:number, modelVehicle:T) {
    this.name = name;
    this.wheel = wheel;
    this.model = modelVehicle;
  }

  manual() {
    console.log(Transmision.manual());
  }

  automatic() {
    console.log(automatic());
    
  }
}

export default BaseVehicle;