import { User } from '../src/user.js';

describe ('DateChecker', function() {

  let user1;
  let parameters1 = {dob:"1988-01-29", gender: "male", poorFamilyHealth: "true", married: "false", activeLifestyle: "false"};
  let user2;
  let parameters2 = {dob:"1988-01-09", gender: "female", poorFamilyHealth: "false", married: "true", activeLifestyle: "true"};



  beforeEach(function() {
    user1 = new User(parameters1);
    user2 = new User(parameters2);
  });

  it('should calculate a persons current Earth age based on their given earth DOB and today\'s earth date', function (){
    expect(user1.calculateSpecificPlanetaryAge("earth")).toEqual(30);
    expect(user2.calculateSpecificPlanetaryAge("earth")).toEqual(31);
  });

  it('should calculate a persons age in mercury years (1 mercury year = 0.24 earth years)', function(){
    expect(user1.calculateSpecificPlanetaryAge("mercury")).toEqual(30/0.24);
    expect(user2.calculateSpecificPlanetaryAge("mercury")).toEqual(31/0.24);
  });

  it('should calculate a persons age in venusian years (1 venus year = 0.62 earth years)', function(){
    expect(user1.calculateSpecificPlanetaryAge("venus")).toEqual(30/0.62);
    expect(user2.calculateSpecificPlanetaryAge("venus")).toEqual(31/0.62);
  });

  it('should calculate a persons age in martian years (1 mars year = 1.88 earth years)', function(){
    expect(user1.calculateSpecificPlanetaryAge("mars")).toEqual(30/1.88);
    expect(user2.calculateSpecificPlanetaryAge("mars")).toEqual(31/1.88);
  });

  it('should calculate a persons age in jupitorian years (1 mars year = 11.86 earth years)', function(){
    expect(user1.calculateSpecificPlanetaryAge("jupiter")).toEqual(30/11.86);
    expect(user2.calculateSpecificPlanetaryAge("jupiter")).toEqual(31/11.86);
  });

  it('should calculate a persons current Earth age based on their given earth DOB and assign that value to an earthAge property', function (){
    expect(user1.earthAge).toEqual(30);
    expect(user2.earthAge).toEqual(31);
  });

  it('should calculate a persons current Earthan-years life expectancy based upon specific factors', function (){
    expect(user1.earthanLifeExpectancy).toEqual(76*0.75*0.75);
    expect(user2.earthanLifeExpectancy).toEqual((76+5)*1.1*1.1);
  });

  it('should calculate a person\'s life expectancy in mercurial years', function (){
    let planetaryYearModifier = 0.24;
    expect(user1.calculateSpecificLifeExpectancy("mercury").toEqual(76*0.75*0.75/planetaryYearModifier);
    expect(user2.calculateSpecificLifeExpectancy("mercury").toEqual((76+5)*1.1*1.1/planetaryYearModifier);
  });

  it('should calculate a person\'s life expectancy in venusian years', function (){
    let planetaryYearModifier = 0.62;
    expect(user1.calculateSpecificLifeExpectancy("venus")).toEqual(76*0.75*0.75/planetaryYearModifier);
    expect(user2.calculateSpecificLifeExpectancy("venus")).toEqual((76+5)*1.1*1.1/planetaryYearModifier);
  });

  it('should calculate a person\'s life expectancy in martian years', function (){
    let planetaryYearModifier = 1.88;
    expect(user1.calculateSpecificLifeExpectancy("mars")).toEqual(76*0.75*0.75/planetaryYearModifier);
    expect(user2.calculateSpecificLifeExpectancy("mars")).toEqual((76+5)*1.1*1.1/planetaryYearModifier);
  });

  it('should calculate a person\'s life expectancy in jupitorian years', function (){
    let planetaryYearModifier = 11.86;
    expect(user1.calculateSpecificLifeExpectancy("jupiter")).toEqual(76*0.75*0.75/planetaryYearModifier);
    expect(user2.calculateSpecificLifeExpectancy("jupiter")).toEqual((76+5)*1.1*1.1/planetaryYearModifier);
  });





});
