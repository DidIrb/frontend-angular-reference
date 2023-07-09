import { Component } from '@angular/core';

// Declaring interface that will help us enforce types
export interface localContent {
  contentName: string;
  valueName: string;
  description: string;
} // not interface need to be above the @component decorator

// @ DECORATOR
@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.scss'],
})
export class ConceptsComponent {
  // Defining a variable and stating its type
  message =
    'This is a message that was place here and can be manipulated dynamically';
  counter: number = 3;
  // Boolean
  booleanValue: boolean = false;

  // Arrays
  stringArray: string[] = ['item1', 'item2'];
  numberArray: number[] = [1, 2, 3];

  // Enforcing type using Interface
  objectArray: localContent[] = [
    {
      contentName: 'name',
      valueName: 'value',
      description: 'description as stated - 1',
    },
    {
      contentName: 'name -1',
      valueName: 'value -2',
      description: 'description as stated - 2',
    },
  ];

  // Objects
  counter2: number = 0;

  // Manipulating data
  edit: boolean = false;
  index: number | undefined;

  // Manipulating data using methods
  // STRING
  updateString() {
    this.booleanValue = !this.booleanValue;
    if (this.booleanValue) {
      this.message = 'This is the new Message!!!';
    } else {
      this.message =
        'This is a message that was place here and can be manipulated dynamically';
    }
  }

  // ARRAYS
  addToArray(param: string) {
    // Add Counter
    // adding to stringArray
    if (param == 'end') {
      this.counter++;
      let valueToPass = `item ${this.counter}`;
      this.stringArray.push(valueToPass);
    } else if (param == 'removeEnd') {
      this.stringArray.pop();
      this.counter--;
    } else if (param == 'removeStart') {
      this.stringArray.shift();
      this.counter2--;
    } else if (param == 'start') {
      this.counter2++;
      this.stringArray.unshift(`itemNew - ${this.counter2}`);
    }
  }

  // Using constructors to create objects

  // Manipulating an array of objects
  addItem() {
    this.counter2++;

    // Building the object directly
    const newValue = {
      contentName: `New item - ${this.counter2}`,
      valueName: `New value - ${this.counter2}`,
      description: `New description as stated - ${this.counter2}`,
    };

    // pushing the object into the objectsArray variable
    this.objectArray.push(newValue);
  }

  deleteItem(idx: number) {
    // Using the index to delete an item from an array
    this.objectArray.splice(idx, 1);
  }
  // Build object first
  object: localContent = {
    contentName: '',
    valueName: '',
    description: '',
  };

  // Using the keyup event
  onKeyUp(typedValue: any, point: number) {
    switch (point) {
      case 0:
        this.message = typedValue.target.value;
        break;
      case 1:
        this.object.contentName = typedValue.target.value;
        break;
      case 2:
        this.object.valueName = typedValue.target.value;
        break;
      case 3:
        this.object.description = typedValue.target.value;
        break;
      default:
      // code block
    }

    // console.log(this.object); // testing shows the data being passed into array
  }

  passFromInputCreate() {
    // Add item into array
    if(this.object.contentName !== '' && this.object.valueName !== '' && this.object.description !== '') {
      this.objectArray.push(this.object);
    }
    // Clear the object
    this.clearObject();

    // Clear form, another method
    // var allInputs = document.querySelectorAll('input');
    // allInputs.forEach(singleInput => singleInput.value = '');
  }

  clearObject() {
    // Resetting the objects values to empty
    this.object = {
      contentName: '',
      valueName: '',
      description: '',
    };
  }

  // Editing the content in array
  editEvent(itemPassed: localContent, idx: number) {
    this.edit = true;
    this.index = idx;
    this.object = {
      contentName: itemPassed.contentName,
      valueName: itemPassed.valueName,
      description: itemPassed.description,
    };

    console.log(itemPassed);

  }

  passFromInputEdit(idx: any, obj: localContent) {

    this.objectArray[idx] = {
      contentName: obj.contentName,
      valueName: obj.valueName,
      description: obj.description,
    }

    // Clear the object
    this.clearObject();
    this.edit = false;
  }


}
