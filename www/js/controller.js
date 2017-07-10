//fyp
app.controller('fypCtrl', function($scope,moment,$timeout,$state){
	$scope.name = 'Umrah';
	
   	$scope.tickInterval = 1000 //ms

   	var tick = function() {
        // $scope.clock = Date.now() // get the current time
        $scope.exampleDate = moment().format('h:mm:ss a'); // May 23rd 2017, 10:06:07 pm 
   		$scope.date = moment().format('Do MMMM YYYY');
        $timeout(tick, $scope.tickInterval); // reset the timer
    }

   	// var test = this;
   	// test.time = new Date();



   	$scope.month = moment().format('iM');
   	if($scope.month==='1'){
   		$scope.month = 'Muharram'}

   	else if ($scope.month==='2'){
   		$scope.month = 'Safar'}
   	else if ($scope.month==='3'){
   		$scope.month = 'Rabiulawal'
   	}
   	else if ($scope.month==='4'){
   		$scope.month = 'Rabiulakhir'
   	}
   	   	else if ($scope.month==='5'){
   		$scope.month = 'Jamadilawal'
   	}
   	   	else if ($scope.month==='6'){
   		$scope.month = 'Jamadilakhir'
   	}
   	   	else if ($scope.month==='7'){
   		$scope.month = 'Rejab'
   	}
   	   	else if ($scope.month==='8'){
   		$scope.month = 'Syaaban'
   	}	
   	   	else if ($scope.month==='9'){
   		$scope.month = 'Ramadhan'
   	}
   	   	else if ($scope.month==='10'){
   		$scope.month = 'Syawal'
   	}
   	   	else if ($scope.month==='11'){
   		$scope.month = 'Zulkaedah'
   	}
   	   	else if ($scope.month==='12'){
   		$scope.month = 'Zulhijah'
   	}


   	
   	$scope.hijri = moment().format('iDD') + " " + $scope.month + " " + moment().format('iYYYY');

   	$timeout(tick, $scope.tickInterval);

   	$scope.goToMenu = function(){
   		// alert("bvn");
   		$state.go('menu');
   	}
      $scope.goToMenu7 = function(){
      $state.go('ihram2');
    }
      $scope.goToMenu8 = function(){
      // alert("bvn");
      $state.go('tawaf2');
    }
     $scope.goToMenu9 = function(){
      // alert("bvn");
      $state.go('saie2');
    }
      $scope.goToMenu10 = function(){
      // alert("bvn");
      $state.go('cukur2');
    }



})

app.controller('menuCtrl', function($scope,moment,$timeout,$state){
	$scope.tickInterval = 1000 //ms

   	var tick = function() {
        // $scope.clock = Date.now() // get the current time
        $scope.exampleDate = moment().format('h:mm:ss a'); // May 23rd 2017, 10:06:07 pm 
   		$scope.date = moment().format('Do MMMM YYYY');
        $timeout(tick, $scope.tickInterval); // reset the timer
    }

   	$scope.month = moment().format('iM');
   	if($scope.month==='1'){
   		$scope.month = 'Muharram'}

   	else if ($scope.month==='2'){
   		$scope.month = 'Safar'}
   	else if ($scope.month==='3'){
   		$scope.month = 'Rabiulawal'
   	}
   	else if ($scope.month==='4'){
   		$scope.month = 'Rabiulakhir'
   	}
   	   	else if ($scope.month==='5'){
   		$scope.month = 'Jamadilawal'
   	}
   	   	else if ($scope.month==='6'){
   		$scope.month = 'Jamadilakhir'
   	}
   	   	else if ($scope.month==='7'){
   		$scope.month = 'Rejab'
   	}
   	   	else if ($scope.month==='8'){
   		$scope.month = 'Syaaban'
   	}	
   	   	else if ($scope.month==='9'){
   		$scope.month = 'Ramadhan'
   	}
   	   	else if ($scope.month==='10'){
   		$scope.month = 'Syawal'
   	}
   	   	else if ($scope.month==='11'){
   		$scope.month = 'Zulkaedah'
   	}
   	   	else if ($scope.month==='12'){
   		$scope.month = 'Zulhijah'
   	}
  	
   	$scope.hijri = moment().format('iDD') + " " + $scope.month + " " + moment().format('iYYYY');

   	$timeout(tick, $scope.tickInterval);

   $scope.goToMenu2 = function(){
		// alert("bvn");
	$state.go('praUmrah');
   	}
   	 $scope.goToMenu3 = function(){
	$state.go('ihram');
	}
	 $scope.goToMenu4 = function(){
	$state.go('tawaf');
	}
	 $scope.goToMenu5 = function(){
	$state.go('saie');
	}
	$scope.goToMenu6 = function(){
	$state.go('post');
	}



})

app.controller('praUmrahCtrl', function($scope,moment,$timeout,$state){
	$scope.tickInterval = 1000; //ms

   	var tick = function() {
        // $scope.clock = Date.now() // get the current time
        $scope.exampleDate = moment().format('h:mm:ss a'); // May 23rd 2017, 10:06:07 pm 
   		$scope.date = moment().format('Do MMMM YYYY');
        $timeout(tick, $scope.tickInterval); // reset the timer
    }




   	$scope.month = moment().format('iM');
   	if($scope.month==='1'){
   		$scope.month = 'Muharram'}

   	else if ($scope.month==='2'){
   		$scope.month = 'Safar'}
   	else if ($scope.month==='3'){
   		$scope.month = 'Rabiulawal'
   	}
   	else if ($scope.month==='4'){
   		$scope.month = 'Rabiulakhir'
   	}
   	   	else if ($scope.month==='5'){
   		$scope.month = 'Jamadilawal'
   	}
   	   	else if ($scope.month==='6'){
   		$scope.month = 'Jamadilakhir'
   	}
   	   	else if ($scope.month==='7'){
   		$scope.month = 'Rejab'
   	}
   	   	else if ($scope.month==='8'){
   		$scope.month = 'Syaaban'
   	}	
   	   	else if ($scope.month==='9'){
   		$scope.month = 'Ramadhan'
   	}
   	   	else if ($scope.month==='10'){
   		$scope.month = 'Syawal'
   	}
   	   	else if ($scope.month==='11'){
   		$scope.month = 'Zulkaedah'
   	}
   	   	else if ($scope.month==='12'){
   		$scope.month = 'Zulhijah'
   	}

   	
   	$scope.hijri = moment().format('iDD') + " " + $scope.month + " " + moment().format('iYYYY');

   	$timeout(tick, $scope.tickInterval);



})


app.controller('ihramCtrl', function($scope,moment,$timeout,$state){
	$scope.tickInterval = 1000 //ms

   	var tick = function() {
        // $scope.clock = Date.now() // get the current time
        $scope.exampleDate = moment().format('h:mm:ss a'); // May 23rd 2017, 10:06:07 pm 
   		$scope.date = moment().format('Do MMMM YYYY');
        $timeout(tick, $scope.tickInterval); // reset the timer
    }

   	$scope.month = moment().format('iM');
   	if($scope.month==='1'){
   		$scope.month = 'Muharram'}

   	else if ($scope.month==='2'){
   		$scope.month = 'Safar'}
   	else if ($scope.month==='3'){
   		$scope.month = 'Rabiulawal'
   	}
   	else if ($scope.month==='4'){
   		$scope.month = 'Rabiulakhir'
   	}
   	   	else if ($scope.month==='5'){
   		$scope.month = 'Jamadilawal'
   	}
   	   	else if ($scope.month==='6'){
   		$scope.month = 'Jamadilakhir'
   	}
   	   	else if ($scope.month==='7'){
   		$scope.month = 'Rejab'
   	}
   	   	else if ($scope.month==='8'){
   		$scope.month = 'Syaaban'
   	}	
   	   	else if ($scope.month==='9'){
   		$scope.month = 'Ramadhan'
   	}
   	   	else if ($scope.month==='10'){
   		$scope.month = 'Syawal'
   	}
   	   	else if ($scope.month==='11'){
   		$scope.month = 'Zulkaedah'
   	}
   	   	else if ($scope.month==='12'){
   		$scope.month = 'Zulhijah'
   	}
  	
   	$scope.hijri = moment().format('iDD') + " " + $scope.month + " " + moment().format('iYYYY');

   	$timeout(tick, $scope.tickInterval);



})

app.controller('tawafCtrl', function($scope,moment,$timeout,$state){
	$scope.tickInterval = 1000 //ms

   	var tick = function() {
        // $scope.clock = Date.now() // get the current time
        $scope.exampleDate = moment().format('h:mm:ss a'); // May 23rd 2017, 10:06:07 pm 
   		$scope.date = moment().format('Do MMMM YYYY');
        $timeout(tick, $scope.tickInterval); // reset the timer
    }

   	$scope.month = moment().format('iM');
   	if($scope.month==='1'){
   		$scope.month = 'Muharram'}

   	else if ($scope.month==='2'){
   		$scope.month = 'Safar'}
   	else if ($scope.month==='3'){
   		$scope.month = 'Rabiulawal'
   	}
   	else if ($scope.month==='4'){
   		$scope.month = 'Rabiulakhir'
   	}
   	   	else if ($scope.month==='5'){
   		$scope.month = 'Jamadilawal'
   	}
   	   	else if ($scope.month==='6'){
   		$scope.month = 'Jamadilakhir'
   	}
   	   	else if ($scope.month==='7'){
   		$scope.month = 'Rejab'
   	}
   	   	else if ($scope.month==='8'){
   		$scope.month = 'Syaaban'
   	}	
   	   	else if ($scope.month==='9'){
   		$scope.month = 'Ramadhan'
   	}
   	   	else if ($scope.month==='10'){
   		$scope.month = 'Syawal'
   	}
   	   	else if ($scope.month==='11'){
   		$scope.month = 'Zulkaedah'
   	}
   	   	else if ($scope.month==='12'){
   		$scope.month = 'Zulhijah'
   	}
  	
   	$scope.hijri = moment().format('iDD') + " " + $scope.month + " " + moment().format('iYYYY');

   	$timeout(tick, $scope.tickInterval);



})

app.controller('saieCtrl', function($scope,moment,$timeout,$state){
	$scope.tickInterval = 1000 //ms

   	var tick = function() {
        // $scope.clock = Date.now() // get the current time
        $scope.exampleDate = moment().format('h:mm:ss a'); // May 23rd 2017, 10:06:07 pm 
   		$scope.date = moment().format('Do MMMM YYYY');
        $timeout(tick, $scope.tickInterval); // reset the timer
    }

   	$scope.month = moment().format('iM');
   	if($scope.month==='1'){
   		$scope.month = 'Muharram'}

   	else if ($scope.month==='2'){
   		$scope.month = 'Safar'}
   	else if ($scope.month==='3'){
   		$scope.month = 'Rabiulawal'
   	}
   	else if ($scope.month==='4'){
   		$scope.month = 'Rabiulakhir'
   	}
   	   	else if ($scope.month==='5'){
   		$scope.month = 'Jamadilawal'
   	}
   	   	else if ($scope.month==='6'){
   		$scope.month = 'Jamadilakhir'
   	}
   	   	else if ($scope.month==='7'){
   		$scope.month = 'Rejab'
   	}
   	   	else if ($scope.month==='8'){
   		$scope.month = 'Syaaban'
   	}	
   	   	else if ($scope.month==='9'){
   		$scope.month = 'Ramadhan'
   	}
   	   	else if ($scope.month==='10'){
   		$scope.month = 'Syawal'
   	}
   	   	else if ($scope.month==='11'){
   		$scope.month = 'Zulkaedah'
   	}
   	   	else if ($scope.month==='12'){
   		$scope.month = 'Zulhijah'
   	}
  	
   	$scope.hijri = moment().format('iDD') + " " + $scope.month + " " + moment().format('iYYYY');

   	$timeout(tick, $scope.tickInterval);



})

app.controller('postCtrl', function($scope,moment,$timeout,$state){
	$scope.tickInterval = 1000 //ms

   	var tick = function() {
        // $scope.clock = Date.now() // get the current time
        $scope.exampleDate = moment().format('h:mm:ss a'); // May 23rd 2017, 10:06:07 pm 
   		$scope.date = moment().format('Do MMMM YYYY');
        $timeout(tick, $scope.tickInterval); // reset the timer
    }

   	$scope.month = moment().format('iM');
   	if($scope.month==='1'){
   		$scope.month = 'Muharram'}

   	else if ($scope.month==='2'){
   		$scope.month = 'Safar'}
   	else if ($scope.month==='3'){
   		$scope.month = 'Rabiulawal'
   	}
   	else if ($scope.month==='4'){
   		$scope.month = 'Rabiulakhir'
   	}
   	   	else if ($scope.month==='5'){
   		$scope.month = 'Jamadilawal'
   	}
   	   	else if ($scope.month==='6'){
   		$scope.month = 'Jamadilakhir'
   	}
   	   	else if ($scope.month==='7'){
   		$scope.month = 'Rejab'
   	}
   	   	else if ($scope.month==='8'){
   		$scope.month = 'Syaaban'
   	}	
   	   	else if ($scope.month==='9'){
   		$scope.month = 'Ramadhan'
   	}
   	   	else if ($scope.month==='10'){
   		$scope.month = 'Syawal'
   	}
   	   	else if ($scope.month==='11'){
   		$scope.month = 'Zulkaedah'
   	}
   	   	else if ($scope.month==='12'){
   		$scope.month = 'Zulhijah'
   	}
  	
   	$scope.hijri = moment().format('iDD') + " " + $scope.month + " " + moment().format('iYYYY');

   	$timeout(tick, $scope.tickInterval);

})
app.controller('ihram2Ctrl', function($scope,moment,$timeout,$state){
  $scope.tickInterval = 1000 //ms

    var tick = function() {
        // $scope.clock = Date.now() // get the current time
        $scope.exampleDate = moment().format('h:mm:ss a'); // May 23rd 2017, 10:06:07 pm 
      $scope.date = moment().format('Do MMMM YYYY');
        $timeout(tick, $scope.tickInterval); // reset the timer
    }

    $scope.month = moment().format('iM');
    if($scope.month==='1'){
      $scope.month = 'Muharram'}

    else if ($scope.month==='2'){
      $scope.month = 'Safar'}
    else if ($scope.month==='3'){
      $scope.month = 'Rabiulawal'
    }
    else if ($scope.month==='4'){
      $scope.month = 'Rabiulakhir'
    }
        else if ($scope.month==='5'){
      $scope.month = 'Jamadilawal'
    }
        else if ($scope.month==='6'){
      $scope.month = 'Jamadilakhir'
    }
        else if ($scope.month==='7'){
      $scope.month = 'Rejab'
    }
        else if ($scope.month==='8'){
      $scope.month = 'Syaaban'
    } 
        else if ($scope.month==='9'){
      $scope.month = 'Ramadhan'
    }
        else if ($scope.month==='10'){
      $scope.month = 'Syawal'
    }
        else if ($scope.month==='11'){
      $scope.month = 'Zulkaedah'
    }
        else if ($scope.month==='12'){
      $scope.month = 'Zulhijah'
    }
    
    $scope.hijri = moment().format('iDD') + " " + $scope.month + " " + moment().format('iYYYY');

    $timeout(tick, $scope.tickInterval);

})
app.controller('tawaf2Ctrl', function($scope,moment,$timeout,$state){
  $scope.tickInterval = 1000 //ms

    var tick = function() {
        // $scope.clock = Date.now() // get the current time
        $scope.exampleDate = moment().format('h:mm:ss a'); // May 23rd 2017, 10:06:07 pm 
      $scope.date = moment().format('Do MMMM YYYY');
        $timeout(tick, $scope.tickInterval); // reset the timer
    }

    $scope.month = moment().format('iM');
    if($scope.month==='1'){
      $scope.month = 'Muharram'}

    else if ($scope.month==='2'){
      $scope.month = 'Safar'}
    else if ($scope.month==='3'){
      $scope.month = 'Rabiulawal'
    }
    else if ($scope.month==='4'){
      $scope.month = 'Rabiulakhir'
    }
        else if ($scope.month==='5'){
      $scope.month = 'Jamadilawal'
    }
        else if ($scope.month==='6'){
      $scope.month = 'Jamadilakhir'
    }
        else if ($scope.month==='7'){
      $scope.month = 'Rejab'
    }
        else if ($scope.month==='8'){
      $scope.month = 'Syaaban'
    } 
        else if ($scope.month==='9'){
      $scope.month = 'Ramadhan'
    }
        else if ($scope.month==='10'){
      $scope.month = 'Syawal'
    }
        else if ($scope.month==='11'){
      $scope.month = 'Zulkaedah'
    }
        else if ($scope.month==='12'){
      $scope.month = 'Zulhijah'
    }
    
    $scope.hijri = moment().format('iDD') + " " + $scope.month + " " + moment().format('iYYYY');

    $timeout(tick, $scope.tickInterval);

})
app.controller('saie2Ctrl', function($scope,moment,$timeout,$state){
  $scope.tickInterval = 1000 //ms

    var tick = function() {
        // $scope.clock = Date.now() // get the current time
        $scope.exampleDate = moment().format('h:mm:ss a'); // May 23rd 2017, 10:06:07 pm 
      $scope.date = moment().format('Do MMMM YYYY');
        $timeout(tick, $scope.tickInterval); // reset the timer
    }

    $scope.month = moment().format('iM');
    if($scope.month==='1'){
      $scope.month = 'Muharram'}

    else if ($scope.month==='2'){
      $scope.month = 'Safar'}
    else if ($scope.month==='3'){
      $scope.month = 'Rabiulawal'
    }
    else if ($scope.month==='4'){
      $scope.month = 'Rabiulakhir'
    }
        else if ($scope.month==='5'){
      $scope.month = 'Jamadilawal'
    }
        else if ($scope.month==='6'){
      $scope.month = 'Jamadilakhir'
    }
        else if ($scope.month==='7'){
      $scope.month = 'Rejab'
    }
        else if ($scope.month==='8'){
      $scope.month = 'Syaaban'
    } 
        else if ($scope.month==='9'){
      $scope.month = 'Ramadhan'
    }
        else if ($scope.month==='10'){
      $scope.month = 'Syawal'
    }
        else if ($scope.month==='11'){
      $scope.month = 'Zulkaedah'
    }
        else if ($scope.month==='12'){
      $scope.month = 'Zulhijah'
    }
    
    $scope.hijri = moment().format('iDD') + " " + $scope.month + " " + moment().format('iYYYY');

    $timeout(tick, $scope.tickInterval);

})
app.controller('cukur2Ctrl', function($scope,moment,$timeout,$state){
  $scope.tickInterval = 1000 //ms

    var tick = function() {
        // $scope.clock = Date.now() // get the current time
        $scope.exampleDate = moment().format('h:mm:ss a'); // May 23rd 2017, 10:06:07 pm 
      $scope.date = moment().format('Do MMMM YYYY');
        $timeout(tick, $scope.tickInterval); // reset the timer
    }

    $scope.month = moment().format('iM');
    if($scope.month==='1'){
      $scope.month = 'Muharram'}

    else if ($scope.month==='2'){
      $scope.month = 'Safar'}
    else if ($scope.month==='3'){
      $scope.month = 'Rabiulawal'
    }
    else if ($scope.month==='4'){
      $scope.month = 'Rabiulakhir'
    }
        else if ($scope.month==='5'){
      $scope.month = 'Jamadilawal'
    }
        else if ($scope.month==='6'){
      $scope.month = 'Jamadilakhir'
    }
        else if ($scope.month==='7'){
      $scope.month = 'Rejab'
    }
        else if ($scope.month==='8'){
      $scope.month = 'Syaaban'
    } 
        else if ($scope.month==='9'){
      $scope.month = 'Ramadhan'
    }
        else if ($scope.month==='10'){
      $scope.month = 'Syawal'
    }
        else if ($scope.month==='11'){
      $scope.month = 'Zulkaedah'
    }
        else if ($scope.month==='12'){
      $scope.month = 'Zulhijah'
    }
    
    $scope.hijri = moment().format('iDD') + " " + $scope.month + " " + moment().format('iYYYY');

    $timeout(tick, $scope.tickInterval);

})

app.controller('damCtrl', function($scope,moment,$timeout,$state,$stateParams){
	$scope.tickInterval = 1000 //ms

   	var tick = function() {
        // $scope.clock = Date.now() // get the current time
        $scope.exampleDate = moment().format('h:mm:ss a'); // May 23rd 2017, 10:06:07 pm 
   		$scope.date = moment().format('Do MMMM YYYY');
        $timeout(tick, $scope.tickInterval); // reset the timer
    }

   	$scope.month = moment().format('iM');
   	if($scope.month==='1'){
   		$scope.month = 'Muharram'}

   	else if ($scope.month==='2'){
   		$scope.month = 'Safar'}
   	else if ($scope.month==='3'){
   		$scope.month = 'Rabiulawal'
   	}
   	else if ($scope.month==='4'){
   		$scope.month = 'Rabiulakhir'
   	}
   	   	else if ($scope.month==='5'){
   		$scope.month = 'Jamadilawal'
   	}
   	   	else if ($scope.month==='6'){
   		$scope.month = 'Jamadilakhir'
   	}
   	   	else if ($scope.month==='7'){
   		$scope.month = 'Rejab'
   	}
   	   	else if ($scope.month==='8'){
   		$scope.month = 'Syaaban'
   	}	
   	   	else if ($scope.month==='9'){
   		$scope.month = 'Ramadhan'
   	}
   	   	else if ($scope.month==='10'){
   		$scope.month = 'Syawal'
   	}
   	   	else if ($scope.month==='11'){
   		$scope.month = 'Zulkaedah'
   	}
   	   	else if ($scope.month==='12'){
   		$scope.month = 'Zulhijah'
   	}
  	
   	$scope.hijri = moment().format('iDD') + " " + $scope.month + " " + moment().format('iYYYY');

   	$timeout(tick, $scope.tickInterval);

   	dam = ['TAKHYIR & TAKDIR','TAKHIR & TA\'DIL','TERTIB & TAKDIR','TERTIB & TA\'DIL']
   	damDesc = ['Sembelih seekor Kambing atau Sedekah 2 cupak beras kepada 6 fakir Miskin atau Puasa 3 hari',
   	'Sembelih binatang sama nilai dengan buruan tadi atau beli makanan dengan nilai buruan tadi atau berpuasa dengan nilai cupak makanan buruan tadi',
   	'Sembelih seekor kambing, Jika tidak mampu: Berpuasa 10 hari',
   	'Sembelih seekor unta, Jika tidak mampu: Seekor Lembu']

	$scope.checked = $stateParams.checked;
  $scope.damChecked = [];

	$scope.result = [];

    for (var i = 1; i < 12; i++) {
      if(i<7){
        $scope.checked.indexOf(i) > -1 ? $scope.result.push(dam[0],damDesc[0]):'';
        i=7;
      }
      else if(i<9){
        $scope.checked.indexOf(i) > -1 ? $scope.result.push(dam[1],damDesc[1]):'';
        i=9;
      }
      else if(i<11){
        $scope.checked.indexOf(i) > -1 ? $scope.result.push(dam[2],damDesc[2]):'';
        i=11;
      }
    }
    $scope.checked.indexOf(11) > -1 ? $scope.result.push(dam[3],damDesc[3]):'';

})



angular.module("DemoApp", ["checklist-model"])
app.controller('Demo1Ctrl', function($scope, $cordovaLocalNotification) {
$scope.roles = [
    {id: 1, text: 'Menunaikan Solat Sunat Taubat'},
    {id: 2, text: 'Memohon maaf dan keredaan dari ibu bapa(jika masih ada)'},
    {id: 3, text: 'Menyelesaikan hutang tertunggak'},
    {id: 4, text: 'Memastikan niat kerana Allah sahaja'},
    {id: 5, text: 'Memahami pelaksanaan umrah dengan cukup lengkap'},
    {id: 6, text: 'Membawa kelengkapan, pakaian dan ubat-ubatan'},

  ];
  $scope.user = {
    roles: []
  };
  $scope.checkAll = function() {
    $scope.user.roles = $scope.roles.map(function(item) { return item.id; });
  };
  $scope.checked = function() {
    return $scope.user.roles.length!==6;
  };
  $scope.mula = function(){
    // var id_selected = $scope.tempat_stop;

  	// notiService.notification("Testing tajuk", "Testing message", $scope);
    var time = new Date();

    // if(id_selected == 1) {
      time.setSeconds(time.getSeconds() + 10);   

    // } else if(id_selected==2) {
    //   time.setSeconds(time.getSeconds() + 15); 
    // } else if(id_selected==3) {
    //   time.setSeconds(time.getSeconds() + 20); 
    // } else if(id_selected==4) {
    //   time.setSeconds(time.getSeconds() + 5); 
    // };

    $cordovaLocalNotification.add({
        id: 10,
        title: "Easy Umrah",
        message: "Anda bersedia untuk berihram ?",
        date: time,
        data: "1"
    });

  };

  $scope.uncheckAll = function() {
    $scope.user.roles = [];
  };
  $scope.checkFirst = function() {
    $scope.user.roles.splice(0, $scope.user.roles.length); 
    $scope.user.roles.push(1);
  };

  // if($scope.user.roles == 1 && $scope.user.roles == 2 && $scope.user.roles == 3 && $scope.user.roles == 4){
  // 	$scope.allIsChecked = true;
  // }

});
angular.module("DemoApp", ["checklist-model"])
app.controller('Demo2Ctrl', function($scope, $cordovaLocalNotification) {
$scope.roles = [
    {id: 1, text: 'Mengerat kuku, menanggalkan bulu ketiak, ari-ari, mengandam rambut,misai dan janggut'},
    {id: 2, text: 'Mandi sunat ihram'},
    {id: 3, text: 'Memakai kain ihram berwarna putih'},
    {id: 4, text: 'Tidak menutup kepala bagi lelaki'},
    {id: 5, text: 'Tidak menutup muka bagi perempuan'},
    {id: 6, text: 'Menanggalkan segala pakaian berjahit atau bersarung dari tubuh badan bagi lelaki'},
    {id: 7, text: 'Tidak memakai sebarang wangi-wangian'},
    {id: 8, text: 'Tidak memakai sebarang minyak di rambut atau janggut'},
    {id: 9, text: 'Tidak menanggalkan sebarang rambut atau bulu di badan'},
    {id: 10, text: 'Bersedia untuk memasang niat umrah'},

  ];
  $scope.user = {
    roles: []
  };
  $scope.checkAll = function() {
    $scope.user.roles = $scope.roles.map(function(item) { return item.id; });
  };
      $scope.checked = function() {
    return $scope.user.roles.length!==10};
      $scope.mula = function(){
    var id_selected = $scope.tempat_stop;

    // notiService.notification("Testing tajuk", "Testing message", $scope);
    var time = new Date();

    if(id_selected == 1) {
      time.setSeconds(time.getSeconds() + 10);   

    } else if(id_selected==2) {
      time.setSeconds(time.getSeconds() + 15); 
    } else if(id_selected==3) {
      time.setSeconds(time.getSeconds() + 20); 
    } else if(id_selected==4) {
      time.setSeconds(time.getSeconds() + 5); 
    } else if(id_selected==5) {
      time.setSeconds(time.getSeconds() + 10); 
    }

    $cordovaLocalNotification.add({
        id: 10,
        title: "Easy Umrah",
        message: "Anda bersedia untuk tawaf ?",
        date: time,
        data: "1"
    });

  };

  $scope.uncheckAll = function() {
    $scope.user.roles = [];
  };
  $scope.checkFirst = function() {
    $scope.user.roles.splice(0, $scope.user.roles.length); 
    $scope.user.roles.push(1);
  };

});

angular.module("DemoApp", ["checklist-model"])
app.controller('Demo3Ctrl', function($scope, $cordovaLocalNotification) {
$scope.roles = [
    {id: 1, text: 'Memastikan suci daripada hadas kecil dan besar'},
    {id: 2, text: 'Memastikan badan, pakaian dan tempat tawaf suci dari najis'},
    {id: 3, text: 'Menutup Aurat'},
    {id: 4, text: 'Bermula tawaf dari sudut Hajar Al-Aswad'},
    {id: 5, text: 'Sentiasa menjadikan Kaabah di sebelah kiri dan berjalan ke hadapan'},
    {id: 6, text: 'Berjalan dengan tujuan tawaf dan tidak tujuan lain'},
    {id: 7, text: 'Cukup 7 pusingan tawaf dengan yakin'},
    {id: 8, text: 'Dilakukan di dalam Masjidil Haram dan diluar Hijr Ismail'},
  
  ];
  $scope.user = {
    roles: []
  };
  $scope.checkAll = function() {
    $scope.user.roles = $scope.roles.map(function(item) { return item.id; });
  };
     $scope.checked = function() {
    return $scope.user.roles.length!==8};
    $scope.mula = function(){
    // var id_selected = $scope.tempat_stop;

    // notiService.notification("Testing tajuk", "Testing message", $scope);
    var time = new Date();

    // if(id_selected == 1) {
      time.setSeconds(time.getSeconds() + 10);   

    // } else if(id_selected==2) {
    //   time.setSeconds(time.getSeconds() + 15); 
    // } else if(id_selected==3) {
    //   time.setSeconds(time.getSeconds() + 20); 
    // } else if(id_selected==4) {
    //   time.setSeconds(time.getSeconds() + 5); 
    // }

    $cordovaLocalNotification.add({
        id: 10,
        title: "Easy Umrah",
        message: "Anda bersedia untuk saie ?",
        date: time,
        data: "1"
    });

  };
  $scope.uncheckAll = function() {
    $scope.user.roles = [];
  };
});

angular.module("DemoApp", ["checklist-model"])
app.controller('Demo4Ctrl', function($scope, $cordovaLocalNotification) {
$scope.roles = [
    {id: 1, text: 'Hendaklah pastikan tawaf sudah diselesaikan'},
    {id: 2, text: 'Hendahklah dimulakan saie di Safa dan diakhiri di Marwah'},
    {id: 3, text: 'Memastikan 7 kali saie dengan sempurna'},
    {id: 4, text: 'Saie kerana ibadah dan tidak kerana tujuan lain'},

  ];
  $scope.user = {
    roles: []
  };
  $scope.checkAll = function() {
    $scope.user.roles = $scope.roles.map(function(item) { return item.id; });
  };
    $scope.mula = function(){
    // var id_selected = $scope.tempat_stop;

    // notiService.notification("Testing tajuk", "Testing message", $scope);
    var time = new Date();

    // if(id_selected == 1) {
      time.setSeconds(time.getSeconds() + 10);   

    // } else if(id_selected==2) {
    //   time.setSeconds(time.getSeconds() + 15); 
    // } else if(id_selected==3) {
    //   time.setSeconds(time.getSeconds() + 20); 
    // } else if(id_selected==4) {
    //   time.setSeconds(time.getSeconds() + 5); 
    // }

    $cordovaLocalNotification.add({
        id: 10,
        title: "Easy Umrah",
        message: "Anda sudah menyelesaikan saie ? Bersedia untuk bergunting",
        date: time,
        data: "1"
    });

  };
  $scope.uncheckAll = function() {
    $scope.user.roles = [];
  };
  $scope.checkFirst = function() {
    $scope.user.roles.splice(0, $scope.user.roles.length); 
    $scope.user.roles.push(1);
  };
    $scope.checked = function() {
    return $scope.user.roles.length!==4
  };
});

angular.module("DemoApp", ["checklist-model"])
app.controller('checkCtrl', function($scope, $state) {
	$scope.roles = [
	    {id: 1, text: 'Menanggalkan bulu dan rambut di badan '}, //1
	    {id: 2, text: 'Memakai pakaian yang dilarang didalam ihram '}, //1
	    {id: 3, text: 'Mengerat atau Menanggalkan kuku'}, //1
	    {id: 4, text: 'Memakai wangi-wangian '}, //1
	    {id: 5, text: 'Memakai minyak di kepala, janggut atau bulu di muka'}, //1
	    {id: 6, text: 'Melakukan permulaan persetubuhan'}, //1
	    {id: 7, text: 'Memotong & Mencabut tumbuhan di Tanah Haram'},//3
	    {id: 8, text: 'Berburu binatang sama ada di Tanah Haram atau Halal'}, //2
	    {id: 9, text: 'Gagal untuk berniat & berihram sebelum miqat'}, //2
	    {id: 10, text: 'Tidak menunaikan tawaf wida'}, //2
	    {id: 11, text: 'Bersetubuh'}, //4
	    // {id: 5, text: 'Solat sunat ihram'}, //5
	];

	
  $scope.user = {
    roles: []
  };
  $scope.checkAll = function() {
    $scope.user.roles = $scope.roles.map(function(item) { return item.id; });
  };
  $scope.uncheckAll = function() {
    $scope.user.roles = [];
  };

    $scope.checked = function() {
    return !$scope.user.roles.length>0;

  };

  $scope.ticked = function() {
  	$state.go('dam',{'checked':$scope.user.roles});
  };
});

app.controller("damListCtrl", ["$scope", "$stateParams", "$state", function($scope, $stateParams, $state) {
	// alert("Ticked: ");
}]);



