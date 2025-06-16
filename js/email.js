(function() {
  emailjs.init("bCDvmtHSwlYuiibiF"); // Tu public key
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const estado = document.getElementById("estado-envio");
  estado.innerText = "Enviando mensaje...";

  emailjs.send("service_a23ffsd", "template_xde07ep", {
    nombre: this.nombre.value,
    email: this.email.value,
    mensaje: this.mensaje.value
  })
  .then(function() {
    estado.innerText = "¡Mensaje enviado exitosamente!";
    document.getElementById("contact-form").reset();
  }, function(error) {
    estado.innerText = "Error al enviar. Intenta de nuevo.";
    console.error(error);
  });
});