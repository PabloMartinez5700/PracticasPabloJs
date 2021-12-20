function getNextId(array) {
    let idMax = Math.max(...array.map((attribute) => attribute.id), 0);
    return idMax + 1;
  }
  
  function getNextIdAlumnos(array) {
    let idMax = Math.max(...array.map((attribute) => attribute.id), 0);
    return idMax + 1;
  }

  function resetFormInput() {
    document.getElementById("code").value = '';
    document.getElementById("name").value = '';
    document.getElementsByName('grade').forEach((input) => input.checked = false);
    document.getElementById("family").value = '';
  }

  
function renderErrorMessage(text) {
    let div = document.createElement('div');
    div.setAttribute('class', 'alert-danger')
  
    let span = document.createElement('span');
    let button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'cloase');
    button.setAttribute('aria-label', 'Close');
    button.setAttribute('onclick', 'this.parentElement.remove()')
  
  
    let spanInButton = document.createElement('span');
    spanInButton.setAttribute('aria-hidden', true);
    spanInButton.appendChild(document.createTextNode('&times;'))
  
    button.appendChild(spanInButton);
  
    span.appendChild(document.createTextNode(text));
    div.appendChild(span);
    div.appendChild(button);
  
    let divGoal = document.getElementById('messages');
    divGoal.appendChild(div);
  
  }
  