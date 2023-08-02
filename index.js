function handlesubmit(callback){
   var id=document.getElementById('username').value; 
   var pass=document.getElementById('pwd').value;
   console.log(id);
   console.log(pass);
   if(id === "admin"&& pass=== "12345"){
    callback()
   }else{
    alert("invalid");
   }

}
function validate(){
    window.location.href="todo.html"
}
