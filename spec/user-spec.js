import { User } from '../src/user.js'

describe ('DateChecker', function() {

  let user1;
  let user2;

  beforeEach(function() {
    user1 = new User("1988-01-29");
    user2 = new User("1988-01-09");
  });

  it('should calculate a persons current Earth age based on their given earth DOB and today\'s earth date', function (){
    expect(user1.earthAge()).toEqual(30);
    expect(user2.earthAge()).toEqual(31);
  });

  



});
