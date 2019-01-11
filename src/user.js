export class User {
  constructor(dob){
    this.dob = new Date(dob);
  }

  earthAge(){
    let currentTime = new Date();
    let yearDifference = currentTime.getFullYear() - this.dob.getFullYear();

    if ((currentTime.getMonth() >= this.dob.getMonth()) && (currentTime.getDate() >= this.dob.getDate())){
      return yearDifference;
    } else {
      return yearDifference - 1;
    }
  }

  mercurialAge(){
    
  }

}
