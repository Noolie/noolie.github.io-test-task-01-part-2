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
