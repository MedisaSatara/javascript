var data = [
  {
    "ime": "Častimir",
    "godine": 62,
    "spol": "m"
  },
  {
    "ime": "Đuro",
    "godine": 48,
    "spol": "m"
  },
  {
    "ime": "Stanislav",
    "godine": 26,
    "spol": "m"
  },
  {
    "ime": "Šima",
    "godine": 81,
    "spol": "z"
  },
  {
    "ime": "domagoj",
    "godine": 71,
    "spol": "m"
  },
  {
    "ime": "mara",
    "godine": 19,
    "spol": "z"
  },
  {
    "ime": "marko",
    "godine": 16,
    "spol": "m"
  },
  {
    "ime": "stipe",
    "godine": 4,
    "spol": "m"
  },
  {
    "ime": "željko",
    "godine": 21,
    "spol": "m"
  },
  {
    "ime": "kata",
    "godine": 11,
    "spol": "z"
  },
  {
    "ime": "ante",
    "godine": 26,
    "spol": "m"
  },
  {
    "ime": "šima",
    "godine": 25,
    "spol": "z"
  },
  {
    "ime": "trpimir",
    "godine": 14,
    "spol": "m"
  },
  {
    "ime": "Boro",
    "godine": 38,
    "spol": "m"
  },
  {
    "ime": "šimun",
    "godine": 62,
    "spol": "m"
  },
  {
    "ime": "luca",
    "godine": 44,
    "spol": "z"
  }
];


var xmlhttp = new XMLHttpRequest();
var url = "data.json";

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    myFunction(myArr);
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
  var out = "";
  var outt="";
  var i;

  for(i = 0; i < arr.length; i++) {
    arr.sort(GetSortOrder("ime"));
    
    if(arr[i].spol==="m"){
    //arr.sort(GetSortOrder("ime"));
    out += '<td>' + arr[i].ime + '</td></br>' + '<td>'+ arr[i].spol + '</td></br>' + '<td>' + arr[i].godine + '</td><br><hr>';
    
  }
    else if(arr[i].spol==="z") {
    arr.sort(GetSortNumber("godine"));
    outt += '<td>' + arr[i].ime + '</td></br>' +'<td>'+ arr[i].spol + '</td></br>' +'<td>'+ arr[i].godine + '</td><br><hr>';
    
    }
    
  }

  document.getElementById("muski").innerHTML = out;
  document.getElementById("zenski").innerHTML = outt;

}



function GetSortOrder(prop) {    
  return function(a, b) { 
   
      if (a[prop].toLowerCase() > b[prop].toLowerCase()) {    
          return 1;    
      } else if (a[prop].toLowerCase() < b[prop].toLowerCase()) {    
          return -1;    
      }    
      return 0;    
  }    
} 
function GetSortNumber(prop){
  return function(a,b){
    return a[prop]-b[prop];
  }
}
function sortfunction(data){
data.sort(GetSortOrder("ime")); //Pass the attribute to be sorted on    
data.sort(GetSortNumber("godine"));
//data.sort(GetSortOrder("godine"));
document.write("Sorted Employee Names : ");    
for (var item in data) {    
    document.write("<br>" + data[item].ime.toLowerCase() + "<br>"+ data[item].godine);  
} 
}


