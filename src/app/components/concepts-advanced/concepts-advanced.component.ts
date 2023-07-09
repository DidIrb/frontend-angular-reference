import { Component } from '@angular/core';

@Component({
  selector: 'app-concepts-advanced',
  templateUrl: './concepts-advanced.component.html',
  styleUrls: ['./concepts-advanced.component.scss'],
})
export class ConceptsAdvancedComponent {
  exampleArray = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 30 },
  ];
  availability: boolean | undefined;
  searchName: any;

  checkPropertyInArrays(arr: any, prop: string, val: any) {
    this.availability = this.checkPropertyInArray(arr, prop, val);
    console.log(this.availability);
  }

  // Method to check if an value is available in array
  checkPropertyInArray(array: any, property: string, value: any) {
    // Loop through the array elements
    for (let element of array) {
      // If the element has the property and it matches the value, return true
      if (element[property] === value) {
        return true;
      }
    }
    // If no match is found, return false
    return false;
  }

  onTypeValue(typedValue: any) {
    this.searchName = typedValue.target.value;
  }

  // Checking if 2 properties are available
  userData = [
    { username: 'AliceKimono', password: '12345' },
    { username: 'BobMarley', password: '1234uue5' },
    { username: 'CharlieChaplin', password: 'Password1' },
  ];

  availability2: boolean | undefined;
  searchName2: any;
  username: string  = '';
  password: string= '';

  // Call the function with different property and value combinations
  check2PropertyInArray(
    array:any,
    property: any,
    value: string,
    property2: any,
    value2: string
  ) {
    for (let element of array) {
      if (element[property] === value && element[property2] === value2) {
        return true;
      }
    }
    return false;
  }

  checkAvailability() {
    this.availability2 = this.check2PropertyInArray(this.userData, 'username', this.username, 'password', this.password);
    console.log(this.availability2);
  }

  // Taking the input and passing the value
  onKeyUp(typedValue: any, point: number) {
    switch (point) {
      case 0:
        this.username = typedValue.target.value;
        break;
      case 1:
        this.password = typedValue.target.value;
        break;
      default:
      // code block
    }
  }

}

// Filter functions
function checkValueInArray(array: number[], value: number) {
// Loop through the array elements
for (let element of array) {
// If the element matches the value, return true
if (element === value) {
return true;
}
}
// If no match is found, return false
return false;
}

// Define an example array
let exampleArray = [1, 2, 3, 4, 5];

// Call the function with different values
console.log(checkValueInArray(exampleArray, 3)); // true
console.log(checkValueInArray(exampleArray, 6)); // false