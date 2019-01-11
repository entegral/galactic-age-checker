export class User {
  constructor(dob){
    this.dob = new Date(dob);
    this.earthAge = this.calculateEarthAge();
    this.mercurialAge = this.earthAge / 0.24;
    this.venusianAge = this.earthAge / 0.62;
    this.martianAge = this.earthAge / 1.88;
    this.jupitorianAge = this.earthAge / 11.86;

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


}
