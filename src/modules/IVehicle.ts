export default interface IVehicle<T> {
  name: string;
  wheel: number;
  model: T;
}