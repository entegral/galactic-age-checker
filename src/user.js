export class User {
  constructor(formInput){
    if (formInput.length > 4) {
      this.dob = new Date(formInput);
    } else {
      let newDate = new Date();
      let birthYear = newDate.getFullYear() - formInput;
      this.dob = newDate.setFullYear(birthYear);
    }

    this.earthAge = this.calculateEarthAge();
    this.mercurialAge = this.earthAge / 0.24;
    this.venusianAge = this.earthAge / 0.62;
    this.martianAge = this.earthAge / 1.88;
    this.jupitorianAge = this.earthAge / 11.86;

    // this.earthYearLifeExpectancy = this.calculateEarthanLifeExpetancy();
  }

  calculateEarthAge(){
    let currentTime = new Date();
    let yearDifference = currentTime.getFullYear() - this.dob.getFullYear();

    if ((currentTime.getMonth() >= this.dob.getMonth()) && (currentTime.getDate() >= this.dob.getDate())){
      return yearDifference;
    } else {
      return yearDifference - 1;
    }
  }

  // calculateEarthanLifeExpetancy(){
  //
  // }

}
