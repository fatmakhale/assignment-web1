function textTyping(){
  document.getElementById('username').style.borderColor = 'gray';
  document.getElementById('Email').style.borderColor = 'gray';
  document.getElementById('password').style.borderColor = 'gray';
  document.getElementById('confirm-password').style.borderColor = 'gray';

}

function validateForm() 
{var username = document.getElementById('username').value;
 var email = document.getElementById('Email').value;
 var password = document.getElementById('password').value;
 var confirmPassword = document.getElementById('confirm-password').value;


//checking the text boxes if filled 
if(document.getElementById('username-error').style.display==='none'&&document.getElementById('password-error').style.display==='none'&&document.getElementById('confirm-password-error').style.display==='none'&document.getElementById('email-error').style.display==='none'){
   window.alert('ALL fields are valid');
   form.submit();
}else{
  window.alert("Please fill all fields and  correctly");

}

if (username === ''||username.length < 3 || username.length > 25) {
    document.getElementById('username-error').textContent = 'Please enter a username between 3 & 25 characters.';
    document.getElementById('username').style.borderColor = 'red';
   

    } else {
    document.getElementById('username-error').style.display = 'none';
    document.getElementById('username').style.borderColor = 'green';
    
    }
 
 
    //email restrictions
    if (email === ''||email.indexOf('@')===-1||email.indexOf('.')===-1) {
      document.getElementById('email-error').textContent = 'please enter a vaild email address .';
      document.getElementById('Email').style.borderColor = 'red';
  
    }else {
      document.getElementById('email-error').style.display = 'none';
      document.getElementById('Email').style.borderColor = 'green';
    }
 
 
 
 
    //password restrictions
 
    if (password === ''||password.length < 8||!/[a-z]/.test(password)||!/[A-Z]/.test(password)||!/[@#$%_!&*]/.test(password)) {
        document.getElementById('password-error').textContent = 'Password must be at least 8 characters that include at least one lowercase letter, at least one uppercase letter and at least one special character (@#$%_!&*)';
        document.getElementById('password').style.borderColor = 'red';
    } else {
      document.getElementById('password-error').style.display = 'none';
      document.getElementById('password').style.borderColor = 'green';
 
    }
 
 
   //confirmation restrictions
    
    if (confirmPassword===''||password!= confirmPassword) {
      document.getElementById('confirm-password-error').textContent = 'confirmation not happened';
      document.getElementById('confirm-password').style.borderColor = 'red';
    }
  else {
      document.getElementById('confirm-password-error').style.display = 'none';
      document.getElementById('confirm-password').style.borderColor = 'green';
    }
 
    


}

confirmPassword === ''


document.getElementById('username').style.borderColor = 'gray';
document.getElementById('Email').style.borderColor = 'gray';
document.getElementById('password').style.borderColor = 'gray';
document.getElementById('confirm-password').style.borderColor = 'gray';