
var app = angular.module("BlenderApp", []);

app.controller("AppController", function($scope){

  $scope.status = false;
  var btn = document.getElementById('blender-btn-sound');
  var sound = document.getElementById('blender-sound');

  $scope.OnOff = function()
  {
    if($scope.status)
    {
      $scope.status = false;
      btn.play();
      sound.pause();
      sound.currentTime = 0;
    }
    else
    {
      $scope.status = true;
      btn.play();
      sound.play();
    }
  }

  $scope.startTime = function() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    //Add a zero in front of numbers<10
    hr = $scope.checkTime(hr);
    min = $scope.checkTime(min);
    sec = $scope.checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
    
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    
    var time = setTimeout(function(){ $scope.startTime() }, 500);
  }

  $scope.checkTime = function (i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
  }
  
  $scope.startTime();

});