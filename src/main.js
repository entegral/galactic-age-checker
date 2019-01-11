import { User } from './user.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {

  $("#result").hide();

  $("#userAgeForm").submit(function(event) {
    event.preventDefault();

    let params = {};
    let user;

    params.dob = $("#dob").val();
    params.gender = $("#gender").val();
    params.poorFamilyHealth = $("#poorFamilyHealth").val();
    params.married = $("#married").val();
    params.activeLifestyle = $("#activeLifestyle").val();

    user = new User(params);







  });
});
