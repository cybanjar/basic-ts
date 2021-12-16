class List<T> {
  private data:T[];

  constructor(...elements:T[]) {
    this.data =elements;
  }

  add(element: T):void {
    this.data.push(element);
  }

  addMultiple(...elements: T[]):void {
    this.data.push(...elements);
  }

  getAll(): T[] {
    return this.data;
  }
}

let numbers = new List<any>(1,2,3);
numbers.add(10)
numbers.addMultiple(100, 200)
console.log(numbers);

