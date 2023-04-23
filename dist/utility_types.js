"use strict";
const PartialFeature = {
    a: "",
};
const Faill = {
    a: "",
    b: 1 // Needs declare all data of type
};
const myCar = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
};
const nameAgeMap = {
    'Alice': 21,
    'Bob': 25
};
const bob = {
    name: 'Bob'
    // `Omit` has removed age and location from the type and they can't be defined here
};
const Billy = {
    name: 'Bob'
    // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};
//# sourceMappingURL=utility_types.js.map