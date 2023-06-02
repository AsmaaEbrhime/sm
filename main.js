
let postspan=document.getElementById('post-span')
let imge=document.querySelector('.imge')
let postcontent=document.querySelector('.post-content')
let loginbtn=document.getElementById('login-btn')
let close=document.querySelector('.close')
 let logout=document.querySelector('.logout')
 let logoutbtn=document.getElementById('logout-btn')
let popregister=document.getElementById('pop-register')







console.log()

    
    


 //<===============================LOGIN========================================>
loginbtn.addEventListener('click',function(){
  let poppop=document.querySelector('.poppop')
  poppop.style.display='block'
})

function clickbtnlogin(){
let textinput=document.getElementById('text-input').value
let passwordinput=document.getElementById('password-input').value

let params={
  username:textinput,
  password: passwordinput
}

axios.post('https://tarmeezacademy.com/api/v1/login',params)
.then(res=>{
  console.log(res)
  localStorage.setItem('token',res.data.token)
  localStorage.setItem('user', JSON.stringify(res.data.user))
 document.querySelector('.poppop').style.display='none'
 setui()
 showsuccesaleart('you scucces login','success')
})

}

function showlogout(){
localStorage.removeItem('token')
setui()
showsuccesaleart('you scusses logout',"success")
}
//<===============================/LOGIN/========================================>



//<===============================REGISTER==========================================>
function openmodelregister(){
 let popregister=document.querySelector('.poppop-2')
 popregister.style.display="block"
}

function registerlogedclick(){
let registername=document.getElementById('register-name').value
let registerusername=document.getElementById('register-username').value
let registerpassword=document.getElementById('register-password').value
let image=document.getElementById('register-image').files[0]

 
let parma=new FormData()
parma.append('name',registername)
parma.append('username',registerusername)
parma.append('password',registerpassword)
parma.append('image',image)

let header={
  "content-Type":"multipart/form-data"
}


axios.post('https://tarmeezacademy.com/api/v1/register',parma,{
  headers:header
}).then(res=>{

  localStorage.setItem('token',res.data.token)

  localStorage.setItem('user',JSON.stringify(res.data.user))

  showsuccesaleart('you scusses the register','success')
  document.querySelector('.poppop-2').style.display='none'


})
.then(res=>{
  let parse=localStorage.getItem('user')
  let user=JSON.parse(parse)
  document.getElementById('image').src=user.profile_image
})

.catch(err=>{
  error=err.response.data.message
  showsuccesaleart(error,'danger')
})

}


// function registerimage(){
//   let parse=localStorage.getItem('user')
//   let user=JSON.parse(parse)
//   document.getElementById('image').src=user.profile_image
// }
// registerimage()

//<===============================/REGISTER/========================================>


// //<===============================ALEART========================================>
function showsuccesaleart(message,type){
  const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}
    appendAlert(message,type)
  

}
//<===============================/ALEART/========================================>














