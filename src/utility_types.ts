type A  = {
    a: string,
    b: number
}
const PartialFeature:Partial <A> = { // Partial means you don't need use total object
    a: "",

}
const Faill: A = {
    a: "",
    b: 1 // Needs declare all data of type
}

interface Car {
    make: string;
    model: string;
    mileage?: number;
  }
  
  const myCar: Required<Car> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
  };

  const nameAgeMap: Record<string, number> = { // Record is a shortcut to defining an object type with a specific key type and value type.
  'Alice': 21,
  'Bob': 25
};

interface Person {
  name: string;
  age: number;
  location?: string;
}

const bob: Omit<Person, 'age' | 'location'> = {
  name: 'Bob'
  // `Omit` has removed age and location from the type and they can't be defined here
};

interface Person {
  name: string;
  age: number;
  location?: string;
}

const Billy: Pick<Person, 'name'> = {
  name: 'Bob'
  // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};