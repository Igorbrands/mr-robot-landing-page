let emailList;
let emailOutput;

function formatDate(date) {
  const time = new Date(date);
  return `${time.getDate()}/${time.getMonth()}/${time.getFullYear()}`;
}

function saveDate() {
  localStorage.setItem('emails', JSON.stringify(emailList));
}


function onSubmit(e) {
  const data = {};
  const successMessage = 'Seu email foi cadastrado com sucesso ✅'

  data.id = emailList.length;
  data.email = e.target[0].value;
  data.date = new Date();
  

  emailList.push(data);
  saveDate(alert(successMessage));
  
  e.preventDefault();
}


window.addEventListener('load', () => {

  emailOutput = document.getElementById('emails__output');
  if (localStorage.getItem('emails')) {
    emailList = JSON.parse(localStorage.getItem('emails'));
  } else {
    emailList = [];
  }

  document
    .getElementById('form__email')
    .addEventListener('submit', onSubmit);
  
    emailOutput.addEventListener('click', clickList);
});
