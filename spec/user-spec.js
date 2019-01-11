import { User } from '../src/user.js';

describe ('DateChecker', function() {

  let user1;
  let user2;

  beforeEach(function() {
    user1 = new User("1988-01-29");
    user2 = new User("1988-01-09");
  });

  it('should calculate a persons current Earth age based on their given earth DOB and today\'s earth date', function (){
    expect(user1.calculateEarthAge()).toEqual(30);
    expect(user2.calculateEarthAge()).toEqual(31);
  });

  it('should calculate a persons age in mercury years (1 mercury year = 0.24 earth years)', function(){
    expect(user1.mercurialAge).toEqual(30/0.24);
    expect(user2.mercurialAge).toEqual(31/0.24);
  });

  it('should calculate a persons age in venusian years (1 venus year = 0.62 earth years)', function(){
    expect(user1.venusianAge).toEqual(30/0.62);
    expect(user2.venusianAge).toEqual(31/0.62);
  });

  it('should calculate a persons age in martian years (1 mars year = 1.88 earth years)', function(){
    expect(user1.martianAge).toEqual(30/1.88);
    expect(user2.martianAge).toEqual(31/1.88);
  });

  it('should calculate a persons age in jupitorian years (1 mars year = 11.86 earth years)', function(){
    expect(user1.jupitorianAge).toEqual(30/11.86);
    expect(user2.jupitorianAge).toEqual(31/11.86);
  });

  it('should calculate a persons current Earth age based on their given earth DOB and assign that value to an earthAge property', function (){
    expect(user1.earthAge).toEqual(30);
    expect(user2.earthAge).toEqual(31);
  });

});
