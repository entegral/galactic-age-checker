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

    this.gender = formInput.gender;
    this.poorFamilyHealth = formInput.poorFamilyHealth;
    this.married = formInput.married;
    this.activeLifestyle = formInput.activeLifestyle;

    this.earthAge = this.calculateEarthAge();
    this.earthanLifeExpectancy = this.calculateEarthanLifeExpectancy();

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

  calculateSpecificPlanetaryAge(planet){
    let planetModifiers = {mercury: 0.24, venus: 0.62, earth: 1, mars: 1.88, jupiter: 11.86};

    return this.earthAge / planetModifiers[planet];
  }

  calculateEarthanLifeExpectancy(){
    let lifeExpectancy = 76;

    this.gender == "male" ? null : lifeExpectancy += 5;
    this.poorFamilyHealth == "true" ? lifeExpectancy *= 0.75 : null;
    this.married == "true" ? lifeExpectancy *= 1.1 : null;
    this.activeLifestyle == "true" ? lifeExpectancy *= 1.1 : lifeExpectancy *= 0.75;

    return lifeExpectancy;
  }

  calculateSpecificLifeExpectancy(planet){
    let planetModifiers = {mercury: 0.24, venus: 0.62, earth: 1, mars: 1.88, jupiter: 11.86};

    return this.earthanLifeExpectancy / planetModifiers[planet];
  }

}
