var _ = function(className){
    return document.querySelector(className);
}

_('.card-cvv').maxLength = 3;
_('.card-number').maxLength = 19;

const letterValidation = function(ev){
    var code = (ev.which) ? ev.which : ev.keyCode;
    if (code > 31 && (code < 37 || code > 57)) return false;
    return true;
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
