function check(){
  document.getElementById("after_submit").style.visibility = "visible";
  var q1 = document.quiz.q1.value;
  var q2 = document.quiz.q2.value;
  var q3 = document.quiz.q3.value;
  var correct = 0;
  if(q1=="Dublin") correct++;
  if(q2=="Hyper Text Markup Language") correct++;
  if(q3=="Let the car decelerate")correct++;

  var custom = ["Nice job","Meh","Jeez thats dissapointing"];
  var pic = ["tenor.GIF","meh.jpg","fail.GIF"];
  var res;
  if (correct==0) res=2;
  if (correct==1) res=2;
  if (correct==2) res=1;
  if (correct==3) res=0;
  document.getElementById("customres").innerHTML = custom[res];
  document.getElementById("pics").src = pic[res];
  document.getElementById("amount_correct").innerHTML = correct+" Correct answers";
}
