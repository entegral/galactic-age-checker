import { User } from './user.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {

  $("#result").hide();

  $("#userAgeForm").submit(function(event) {
    event.preventDefault();
    let dob = $("#dob").val();

    let user = new User(dob);




  });
});
