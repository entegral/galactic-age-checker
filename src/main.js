import { User } from './user.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {

  $(".results").hide();

  $("#userForm").submit(function(event) {
    event.preventDefault();

    let params = {};
    let user;

    params.dob = $("#dob").val();
    params.gender = $("#gender").val();
    params.poorFamilyHealth = $("#poorFamilyHealth").val();
    params.married = $("#married").val();
    params.activeLifestyle = $("#activeLifestyle").val();

    user = new User(params);

    let planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter'];

    planets.forEach(function(planet){
      let ageSelector = '.' + planet + ' div .age';
      let lifeSelector = '.' + planet + ' div .life';
      $(lifeSelector).text(user.calculateSpecificLifeExpectancy(planet));
      $(ageSelector).text(user.calculateSpecificPlanetaryAge(planet));
    });

    $('.results').show();





  });
});
