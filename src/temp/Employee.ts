import Person from "./Person";

export default class Employee extends Person {

  setAge(age: number){
    if(age < 18) {
      throw new Error("The age's person should be greater than 18");
    }
    super.setAge(age);
  }
}