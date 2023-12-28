function validarSenha() {
    let senha = document.getElementById('senha').value;

    if (senha !== 'ctrlplay123') {
        alert('Senha incorreta. Acesso negado.');
        return false;
    }
    
    return true;
}

function entrar() {
    if (validarSenha()) {
      window.location.href = 'principal.html';
    }
  }