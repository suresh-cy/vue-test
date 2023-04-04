function ref(){
  location.reload()
}


function check(){

var n1=document.getElementById("n1").value;
var n2=document.getElementById("n2").value;
var m=n1.split('');
var n=n2.split('');
var count=0;
for(k=0;k<m.length;k++){
   if(m[k] == "") continue;
  for(l=0;l<n.length;l++){
    if(n[l] == "") continue;
    if(m[k] == n[l]){
      m.splice(k,1);
      n.splice(l,1);
      l=n.length;
      k-=1 }}}
var strlen= m.length+n.length; 
alert("Number of unmatched Letters " + strlen);
 flames(strlen)
}
var count=0;
  function flames(pop,newarr){
  count++;
  var a;
  if(count>1)
   {
     a=newarr; 
   }
   else
   { 
     a=["Friends","Love","Affectionate","Marriage","Enemy","Sister"];
   }
    var a1=pop;
    var a2=a1-1;
    var a3=a.length-1;
    var y;
    var x;
    var arr;
   for(i=0;i<a1;i++){
    
  if(i==a2 &&a.length>a2  )
  {
        arr=a;
        arr.splice(i,1);
        var len=arr.length;
        x= arr.slice(i,len);
        arr.splice(i,a3-i);
        y=x.concat(arr);
        var ylen=y.length;
  }
 if(y==undefined && i>a.length-1)
 {
       if(i==a2)
   {
       if(a[i]==undefined){
            var oo=i+1;
            var r=oo%a.length;
       if(r==0)  i=a.length-1;
       else      i=r-1;
            a.splice(i,1);
            x=a.slice(i,a.length);
            a.splice(i,a3-i);
            y=x.concat(a);
        }
      else
       {
           a.splice(i,1)
           x=a.slice(i,a.length);
           a.splice(i,a3-i);
           y=x.concat(a);
       }
           i=i+a.length+1;
        }        }           }
          check2(a1,y)
          }
  
function check2(df,ary)
  {
    var name1=document.getElementById("n1").value;
    var name2=document.getElementById("n2").value;
    
        var cd=df;
        var bc=ary;
        var show;
    if(bc.length==1){
    var val=ary[0];
       document.getElementById("show").innerHTML=" You got " + val;
      fetch('https://node-test-6745.onrender.com/?name1='+name1+'&name2='+name2+'&result='+val).then(data => console.log(data)).catch(error => console.error(error));

       }
   else  flames(cd,bc)      }

