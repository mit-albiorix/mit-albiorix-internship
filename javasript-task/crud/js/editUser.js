const queryParams = new URLSearchParams(window.location.search);
const index = queryParams.get('index');


let showusers = JSON.parse(localStorage.getItem('users'));
console.log("showusers",showusers);

if(index){
let edituser_username = showusers[index].username;
let edituser_email = showusers[index].email ; 
let edituser_password = showusers[index].password;

console.log("editable details",edituser_username,edituser_email,edituser_password);


document.getElementById("editusername").value= edituser_username;
document.getElementById("editemail").value= edituser_email;
document.getElementById("editpassword").value = edituser_password;
// console.log(document.getElementById("editusername").text);
}
else{
    window.location.href = "users.html"

}


//update the data 
function updatedata(){
    showusers[index].username  = document.getElementById("editusername").value;
    console.log(showusers[index].username);

    showusers[index].email  = document.getElementById("editemail").value;
    console.log(showusers[index].email);

    showusers[index].password  = document.getElementById("editpassword").value;
    console.log(showusers[index].password);

    console.log(showusers);

    localStorage.setItem(`users`,JSON.stringify(showusers));
    alert("updated succesfully!");

 }

 function showPassword(){
    let pass = document.getElementById('editpassword');
    if(pass.type == 'password'){
      pass.type = 'text';
    }
    else{
      pass.type = 'password';
    }
  }