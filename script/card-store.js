const isCardStored = function(){
  if(_('.store-card').checked){
    let mail = document.createElement('INPUT');
    mail.classList.add('inputs');
    mail.classList.add('card-mail');
    mail.addEventListener('input', isTypingMail);
    _('.credit-card-form').insertBefore(mail, _('.card-submit'))
  } else {
    _('.credit-card-form').removeChild(_('.card-mail'))
  }
}
