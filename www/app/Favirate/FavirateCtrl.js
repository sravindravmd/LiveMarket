/**
 * Created by ravindernath on 15/05/16.
 */

marketApp.controller('FavirateCtrl', function ($scope,$http,$ionicLoading) {


  $scope.show = function() {
    $ionicLoading.show({     template: '<p>Loading...</p><ion-spinner class="spinner-energized" icon="spiral"></ion-spinner>'   });
  };
  $scope.hide = function(){
    $ionicLoading.hide(); };

  $scope.show($ionicLoading);

  var tovalue=[];
  tovalue=JSON.parse(localStorage.getItem('Favirates'));
  var master=tovalue.join();
  url='http://finance.yahoo.com/webservice/v1/symbols/'+master+'/quote?format=json&view=‌​detail';
  var config={timeout:3000}

  $http.get(url,config).then(function(results){
    $scope.hide($ionicLoading)

    $scope.resources=results.data.list.resources
  }).catch(function (error) {
    $scope.hide($ionicLoading)

  }).finally(function () {
    $scope.hide($ionicLoading)
  })


   $scope.removeFromFavirate= function (resource) {
     var temArry=JSON.parse(localStorage.getItem('Favirates'));

     temArry.pop(resource.resource.fields.symbol);

     window.localStorage.setItem('Favirates',JSON.stringify(temArry));

     tovalue=JSON.parse(localStorage.getItem('Favirates'));

     if(tovalue.length>0){
     var master=tovalue.join();
     url='http://finance.yahoo.com/webservice/v1/symbols/'+master+'/quote?format=json&view=‌​detail';
     var config={timeout:3000}

     $http.get(url,config).then(function(results){
       $scope.hide($ionicLoading)

       $scope.resources=results.data.list.resources
     })} else{
       $scope.resources={};
     }


   }

  var client = new WindowsAzure.MobileServiceClient(
    "https://marketusera.azure-mobile.net/",
    "hKaPIZofLxdfhaEPmryAYNvcRlHGOy29"
  );




  var item = { text: "Awesome item2" };
  // client.getTable("Item").insert(item);
  //console.log(client.getTable("Item").insert(item))





})
