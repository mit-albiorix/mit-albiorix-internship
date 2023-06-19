// localStorage.clear();

showdata();

//retrive data of form and set into localstorage
function setdata(){
  let users;
  let userdata ={};
  userdata['username'] = document.getElementById("username").value;
  console.log(userdata['username']);
  userdata['email'] = document.getElementById("email").value;
  console.log(userdata['email']);
  userdata['password'] = document.getElementById("password").value;
  console.log(userdata['password']);  

  
  let localstorageusers = localStorage.getItem('users');
  // console.log(localstorageusers==null);

  if( localstorageusers == null){
       users = [];
  }
  else{
    users = JSON.parse(localstorageusers);
    // console.log(users);
  }


  // push objects into array

if(users.length >=1 ){
  let matchedemail = users.filter(function checkemail(user){
    return user['email'] == userdata['email'];
  })
  console.log('matchedemail',matchedemail);
  console.log(matchedemail.length);

  if(userdata['email'] && matchedemail.length){
     alert("please enter a unique email id");
  }else{
    if(userdata.email && userdata.username && userdata.password){
      users.push(userdata) 
      localStorage.setItem(`users`,JSON.stringify(users));
      alert('successfully added!')
      window.location.href = "./users.html";
      showdata();
    }
  
  }
}else{
  users.push(userdata) 
  localStorage.setItem(`users`,JSON.stringify(users));
  alert('successfully added!');
  window.location.href = "./users.html";
  redirect(e);
  showdata();
}
 }
 
 
//  function for show data into table 
function showdata(){
  let showusers = JSON.parse(localStorage.getItem('users'));
   console.log(showusers);
   let response ="";

  if(showusers){
    // for(let user of showusers){
    //   response += `
    //    <tr>
    //        <td>${user.username}</td>
    //        <td>${user.email}</td>
    //        <td>${user.password}</td>
    //        <td><button type="button" class="btn btn-danger">Delete</button>
    //        </td>
    //        <td><button type="button" class="btn btn-primary">Edit</button>
    //        </td>

    //    </tr>      
    //   `   
    // }

    showusers.forEach((user,index) => {
      response += `
         <tr>
             <td>${user.username}</td>
             <td>${user.email}</td>
          
             <td type="password"><input type="password" id="tablepass" value="${user.password}" disabled/></td>

             <td><button id="${index}" onclick="deleteUser(this.id)" type="button" class="btn btn-danger">Delete</button>
             <button id="${index}" onclick="editUser(this.id)" type="button" class="btn btn-primary">Edit</button>
             </td>
            
  
         </tr>      
        `   
    });


    console.log(response);
    let tbody = document.getElementById('tbody');
    console.log(tbody);

    if(!tbody) return;

    tbody.innerHTML = response;
  
  }
}


//function for delete users
function deleteUser(index){
  console.log("i am deleting",index);
  let showusers = JSON.parse(localStorage.getItem('users'));
  showusers.splice(index,1);
  localStorage.setItem(`users`,JSON.stringify(showusers));
  console.log(showusers);
  confirm("are you sure want to delete?")
  showdata();
}


//function for edit users
function editUser(index){
  console.log("im editing user",index);
  window.location.href = `./editUser.html?index=${index}`;
}

//function for visibility of password
function showPassword(){
  let pass = document.getElementById('password');
  if(pass.type == 'password'){
    pass.type = 'text';
  }
  else{
    pass.type = 'password';
  }
}
