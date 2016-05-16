/**
 * Created by ravindernath on 15/05/16.
 */


marketApp.controller('MainCtrl', function ($scope,$state) {

/* var tovalue=JSON.parse(localStorage.getItem('Favirates'));
  if(tovalue.length>0){
    $state.go('main.favirate');
  } else{
    $state.go('main.livestock');
  }*/

  $scope.fivarateList=function(){

    $state.go('main.favirate',null,{reload:true})
  }


})
