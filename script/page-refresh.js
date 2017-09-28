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
