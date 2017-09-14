var axios = require('axios');
var jsonfile = require('jsonfile');

var resultJsonPath = './result.json';

function getHomeworkCount(homeworkNumber){


}
var homeworkNumber = 1;
var homeworkBaseUrl = 'https://js.xinshengdaxue.com/api/v1/learnJS/course/1/homework/';
axios.get(homeworkBaseUrl + homeworkNumber)
.then(function (response) {
  console.log(response.data);
  
  var count = response.data.homeworks.length;
  console.log("homework " + homeworkNumber + " has " + count);
  var homewordJson = {homeworkNumber,count};

  var tmp = [];
  try{
    tmp = jsonfile.readFileSync(resultJsonPath);  
  } catch (error) {
    
  }
  tmp.push(homewordJson);
  jsonfile.writeFileSync(resultJsonPath,tmp,{spaces:2});

})
.then(function (){
    console.log('test then().then().');
})
.then(function (){
    console.log('test then().then().then().');
})
.catch(function (error) {
  console.log(error);
});


