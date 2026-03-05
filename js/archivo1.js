
//REGISTRO
let formRegistro = document.getElementById("form-Registro");//esto sirve para guardar  un elemento llamandolo por su ID
//el if (formRegistro) ejecuta el codigo si la pagina existe 
if (formRegistro){
    formRegistro.addEventListener("submit", function(e) {

        e.preventDefault();

        let usuario = document.getElementById("usuario").value.trim();
        let telefono = document.getElementById("telefono").value.trim();
        let correo = document.getElementById("correo").value.trim();
        let password = document.getElementById("password").value.trim();

        let regexUsuario = /^[a-zA-Z0-9_]{4,20}$/;
        let regexTelefono = /^[0-9]{8}$/;
        let regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

        if (!regexUsuario.test(usuario)) {
            alert("Usuario inválido");
            return;
        }

        if (!regexTelefono.test(telefono)) {
            alert("Teléfono inválido");
            return;
        }

        if (!regexCorreo.test(correo)) {
            alert("Correo inválido");
            return;
        }

        if (!regexPassword.test(password)) {
            alert("Contraseña inválida");
            return;
        }

        alert("Registro exitoso");
        window.location.href = "inicioSesion.html";
    });
}


//INICIO DE SESION

let formLogin = document.getElementById("form-Login");

if (formLogin) {
    formLogin.addEventListener("submit", function(e) {

        e.preventDefault();

        let correo = document.getElementById("correo").value.trim();
        let password = document.getElementById("password").value.trim();

        let regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regexCorreo.test(correo)) {
            alert("Correo inválido");
            return;
        }

        if (password.length < 8) {
            alert("Contraseña inválida");
            return;
        }

        alert("Inicio de sesión exitoso");
        window.location.href = "dashboard.html";
    });
}