var _ = function(className){
    return document.querySelector(className);
}

_('.card-cvv').maxLength = 3;
_('.card-number').maxLength = 19;

const refreshPage = function(ev){
  ev.preventDefault();
  _('.store-card').checked = false;
  _('.card-cvv').value = '';
  _('.card-number').value = '';
  _('.expire-month').children[0].selected = true;
  _('.expire-year').children[0].selected = true;
  if(_('.mail')) _('.credit-card-form').removeChild(_('.mail'));
  if(_('.cvv')) _('.credit-card-form').removeChild(_('.cvv'))
  if(_('.exp-yy')) _('.credit-card-form').removeChild(_('.exp-yy'))
  if(_('.exp-mm')) _('.credit-card-form').removeChild(_('.exp-mm'))
  if(_('.card-mail')) _('.credit-card-form').removeChild(_('.card-mail'));
  if(_('.card')) _('.credit-card-form').removeChild(_('.card'));
}

const letterValidation = function(ev){
    var code = (ev.which) ? ev.which : ev.keyCode;
    if (code > 31 && (code < 37 || code > 57)) return false;
    return true;
}

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

const fullValidation = function(ev){
  ev.preventDefault();
  if(_('.card-number').value.length < 19) {
    if(!_('.card')){
      let error = document.createElement('P');
      error.classList.add('error-msg');
      error.classList.add('card');
      error.innerHTML = 'minimum 16 numbers'
      _('.credit-card-form').insertBefore(error, _('.card-number'))
    }
  }
  if(_('.card-cvv').value.length < 2) {
    if(!_('.cvv')){
      let error = document.createElement('P');
      error.classList.add('error-msg');
      error.classList.add('cvv');
      error.innerHTML = 'minimum 2 numbers'
      _('.credit-card-form').insertBefore(error, _('.card-cvv'))
    }
  }
  if(_('.expire-year')[0].selected === true){
    if(!_('.exp-yy')){
      let error = document.createElement('P');
      error.classList.add('error-msg');
      error.classList.add('exp-yy');
      error.innerHTML = 'select a year'
      _('.credit-card-form').insertBefore(error, _('.expire-year'))
    }
  }
  if(_('.expire-month')[0].selected === true){
    if(!_('.exp-mm')){
      let error = document.createElement('P');
      error.classList.add('error-msg');
      error.classList.add('exp-mm');
      error.innerHTML = 'select a month'
      _('.credit-card-form').insertBefore(error, _('.expire-month'))
    }
  }
  if(_('.card-mail')){
    if(!_('.card-mail').value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
      if(!_('.mail')){
        let error = document.createElement('P');
        error.classList.add('error-msg');
        error.classList.add('mail');
        error.innerHTML = 'wrong mail';
         _('.credit-card-form').insertBefore(error, _('.card-mail'))
       }
    }
  }
  if(document.querySelectorAll('.error-msg').length < 1){
    _('.root').innerHTML = '';
    let loader = document.createElement('h1');
    loader.innerHTML = 'loading...'
    loader.classList.add('loader');
    _('.root').appendChild(loader);
    setTimeout(()=>loader.innerHTML = 'Thank you for purchase', 2000)
  }
}

const isTypingNumber = function(ev){
  if(_('.card')) _('.credit-card-form').removeChild(_('.card'))
  let numbers = ev.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
  let matches = numbers.match(/\d{4,16}/g);
  let match = matches && matches[0] || '';
  let parts = [];

  for(let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i+4))
  }

  if (parts.length) {
      return ev.target.value = parts.join(' ')
  } else {
      return ev.target.value
  }
}

const isSelectingYear = function(){
  if(_('.exp-yy')) _('.credit-card-form').removeChild(_('.exp-yy'))
}

const isSelectingMonth = function(){
  if(_('.exp-mm')) _('.credit-card-form').removeChild(_('.exp-mm'))
}

const isTypingCVV = function(){
  if(_('.cvv')) _('.credit-card-form').removeChild(_('.cvv'))
}

const isTypingMail = function(){
  if(_('.mail')) _('.credit-card-form').removeChild(_('.mail'))
}

const isChecked = function(){
  if(_('.mail')) _('.credit-card-form').removeChild(_('.mail'))
}

window.addEventListener('load', refreshPage);
_('.refresh').addEventListener('click', refreshPage);
_('.store-card').addEventListener('change', isChecked);
_('.card-number').addEventListener('input', isTypingNumber);
_('.card-cvv').addEventListener('input', isTypingCVV);
_('.expire-year').addEventListener('change', isSelectingYear);
_('.expire-month').addEventListener('change', isSelectingMonth);
_('.card-submit').addEventListener('click', fullValidation);
_('.store-card').addEventListener('click', isCardStored);
