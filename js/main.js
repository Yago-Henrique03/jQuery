const register = $("#form-register");
const login = $("#form-login");
const main = $("main");
const users = [];

// escondendo conteudo.
login.hide();
main.hide();

let submitRegister = $("#submit-register");

submitRegister.on("click", function(ev) {
    ev.preventDefault();
    let name = $("#register-name")
    let email = $("#register-email")
    let password = $("#register-pass")
    let confirmPassword = $("#register-pass2")

    if(name.val() === ''){
        return alert("INSIRA O SEU NOME ")
    }
    if(email.val() === ''){
        return alert("INSIRA O SEU E-MAIL")
    }
    if(password.val() === ''){
        return alert("INSIRA UMA SENHA")
    }
    if(confirmPassword.val() === ''){
        return alert("INSIRA A MESMA SENHA")
    }
    if(password.val() !== confirmPassword.val()){
        return alert("INSIRA CORRETAMENTE A MESMA SENHA")
    }


    users.push({nome: name.val(), email: email.val(), senha: password.val(), senha2: confirmPassword.val() })
    name.val('');
    email.val('');
    password.val('');
    confirmPassword.val('');
    register.hide(); 
    login.show();
    alert("CONTA CRIADA COM SUCESSO, FAÇA O LOGIN")
})

let submitLogin = $("#submit-login");

submitLogin.on("click", function(ev) {
    ev.preventDefault();
    let loginEmail = $("#login-email");
    let loginPass = $("#login-pass");
    let indice
    function validaLogin(arr, email, senha) {
        arr.forEach((el) => {
            if(el.email === email){
                indice = arr.indexOf(el)
            } else {
                return alert("O EMAIL INSERIDO NÃO EXISTE")	
            }
        })

        if(users[indice].senha !== loginPass.val()){
            return alert("SENHA INCORRETA");
        } else {
            login.hide(); 
            main.show();
        }
    }

    validaLogin(users, loginEmail.val(), loginPass.val())
})
