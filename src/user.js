export class User {
  constructor(formInput){
    if (formInput["dob"]) {
      this.dob = new Date(formInput.dob);
    }
    else {
      let newDate = new Date();
      let birthYear = newDate.getFullYear() - formInput.age;
      this.dob = newDate.setFullYear(birthYear);
    }

    this.earthAge = this.calculateEarthAge();
    this.mercurialAge = this.earthAge / 0.24;
    this.venusianAge = this.earthAge / 0.62;
    this.martianAge = this.earthAge / 1.88;
    this.jupitorianAge = this.earthAge / 11.86;

    this.gender = formInput.gender;
    this.poorFamilyHealth = formInput.poorFamilyHealth;
    this.married = formInput.married;
    this.activeLifestyle = formInput.activeLifestyle;

    this.earthanLifeExpectancy = this.calculateEarthanLifeExpectancy();
    // this.mercuriallifeExpectancy = this.earthanLifeExpectancy / 0.24;
    // this.venusianlifeExpectancy = this.earthanLifeExpectancy / 0.62;
    // this.martianlifeExpectancy = this.earthanLifeExpectancy / 1.88;
    // this.jupitorianlifeExpectancy = this.earthanLifeExpectancy / 11.86;

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

  calculateEarthanLifeExpectancy(){
    // let lifeExpectancy = 76;
    //
    // this.gender == "male" ? null : lifeExpectancy += 5;
    // this.poorFamilyHealth == true ? lifeExpectancy *= 0.75 : null;
    // this.married == true ? lifeExpectancy *= 1.1 : null;
    // this.activeLifestyle == true ? lifeExpectancy *= 1.1 : lifeExpectancy *= 0.75;
    //
    // return lifeExpectancy;

  }

}
