function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET", file, true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status == "200" ){
      callback(xhr.responseText);
    }
  };
  xhr.send();
}
getfile("data.json", function(text){
  let data=JSON.parse(text);
  console.log(data);
  basicinfo(data.basics);
  eduinfo(data.education);
  skills(data.skills);
  achieveinfo(data.achievements);
});
var main=document.querySelector('.flex-parent');//to get an element that has class

function basicinfo(basic){
  var profile=document.getElementById("basics");
  var name=document.createElement("h2");
  name.innerHTML=basic.name;
  profile.appendChild(name);
  var phone=document.createElement("h3");
  phone.innerHTML=basic.phone;
  profile.appendChild(phone);
  var email=document.createElement("h4");
  email.innerHTML=basic.email;
  profile.appendChild(email);
  var photo=document.createElement("img");
  photo.src=basic.photo;
  profile.appendChild(photo);
  var name2=document.createElement("h2");
  name2.innerHTML=basic.name2;
  profile.appendChild(name2);
}
var right=document.createElement("div");
right.classList.add("content-child");
//append right to main
main.appendChild(right);
//education div
var e1=document.createElement("div");
e1.classList.add("edu");
//append e1 to right
right.appendChild(e1);
var h1=document.createElement("h1");
h1.setAttribute("id","heading");
h1.textContent=("Educational Details");
h1.appendChild(document.createElement("hr"));
//append h1 to e1
e1.appendChild(h1);
function eduinfo(education){
  for(i in education){
    //course creation
    var h2=document.createElement("h2");
    h2.classList.add("edu1");
    h2.textContent=education[i].course;
//append h2 to h1
    h1.appendChild(h2);
    //college creation
    var h3=document.createElement("h3");
    h3.classList.add("edu2");
    h3.textContent=education[i].college;
//append h3 to h2
     h2.appendChild(h3);
    //to get data
      var ul=document.createElement("ul");
      ul.classList.add("edu3");//append ul to h3
      h2.appendChild(ul);
      //for(j in education.data){
        var li=document.createElement("li");
        li.textContent=education[i].data;
    //}
    //append li to ul
    ul.appendChild(li);
  }
}

var h1tag=document.createElement("h1");
h1tag.setAttribute("id","heading");
h1tag.textContent=("skills Details");
h1tag.appendChild(document.createElement("hr"));
function skills(food){
  var table=document.createElement("table");
  var row="";
  for(var k=0;k<food.length;k++){
    row+="<tr><td><strong>"+food[k].name+"</strong></td><td>"+food[k].info+"</td></tr>";
  }
  table.innerHTML=row;
  right.appendChild(h1tag);
  h1tag.appendChild(table);
}


var h1tag2=document.createElement("h1");
h1tag2.setAttribute("id","heading");
h1tag2.textContent=("Achievements ");
h1tag2.appendChild(document.createElement("hr"));
 function achieveinfo(gow){
  for(i in gow){
    var h2tag=document.createElement("h2");
    h2tag.classList.add("abc");
    h2tag.textContent=gow[i].achievs;
    h2tag.appendChild(document.createElement("BR"));
  }
  right.appendChild(h1tag2);
  h1tag2.appendChild(h2tag);
}
