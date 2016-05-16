/**
 * Created by ravindernath on 15/05/16.
 */
marketApp.controller('LiveStockCtrl', function ($scope,$http,$ionicLoading) {

  var favirate=[];
  if(localStorage.getItem('Favirates')==null){
    window.localStorage.setItem('Favirates',JSON.stringify(favirate));
  }

  $scope.show = function() {
    $ionicLoading.show({     template: '<p>Loading...</p><ion-spinner class="spinner-energized" icon="spiral"></ion-spinner>'   });
  };
  $scope.hide = function(){
    $ionicLoading.hide(); };

  $scope.show($ionicLoading);

  url='http://finance.yahoo.com/webservice/v1/symbols/GSK,AAPL,YHOO, GOOG, MSFT,CVGW,ANGO,CAMP,LNDC,MOS,NEOG ,SONC/quote?format=json&view=‌​detail';
  var config={timeout:3000}
  console.time('test')
  $http.get(url,config).then(function(results){
    $scope.hide($ionicLoading)
    console.log(results.data.list.resources);
    $scope.resources=results.data.list.resources
  }).catch(function (error) {
    $scope.hide($ionicLoading)
    console.log('error',error);
  }).finally(function () {
    $scope.hide($ionicLoading)
  })
  console.timeEnd('test')

  var client = new WindowsAzure.MobileServiceClient(
    "https://marketusera.azure-mobile.net/",
    "hKaPIZofLxdfhaEPmryAYNvcRlHGOy29"
  );

  var item = { text: "Awesome item2" };
 // client.getTable("Item").insert(item);
  //console.log(client.getTable("Item").insert(item))

$scope.searchcounter=function(value){
  var url
  if(value.length>0){
    url='http://finance.yahoo.com/webservice/v1/symbols/'+value+'/quote?format=json&view=‌​detail';
  } else{
    url='http://finance.yahoo.com/webservice/v1/symbols/GSK,AAPL,YHOO, GOOG, MSFT,CVGW,ANGO,CAMP,LNDC,MOS,NEOG ,SONC/quote?format=json&view=‌​detail';
  }

  $http.get(url).then(function (results) {
    $scope.hide($ionicLoading)
    console.log(results.data.list.resources);
    $scope.resources=results.data.list.resources

  }).catch(function (error) {
    $scope.hide($ionicLoading)
    console.log('error',error);
  }).finally(function () {
    $scope.hide($ionicLoading)
  })
}

  $scope.addtoFavirate= function (resource) {

    var temArry=JSON.parse(localStorage.getItem('Favirates'));

      temArry.push(resource.resource.fields.symbol);

    window.localStorage.setItem('Favirates',JSON.stringify(temArry));



  }

})
