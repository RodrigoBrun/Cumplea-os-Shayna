// ✅ Código para la invitación Shayna - Cumpleaños 22 + Estreno Musical

// Esperar a que cargue el DOM
document.addEventListener("DOMContentLoaded", () => {
    iniciarControlMusica();
    iniciarContadorRegresivo();
    configurarModalConfirmacion();
  });
  
  // 🔊 Música de fondo con botón
  function iniciarControlMusica() {
    const musica = document.getElementById("musicaFondo");
    const boton = document.getElementById("toggleMusica");
    const icono = boton?.querySelector("i");
  
    if (!musica || !boton || !icono) return;
  
    musica.volume = 0.5;
  
    document.body.addEventListener(
      "click",
      () => {
        if (musica.paused) {
          musica.play().catch(() => {
            console.log("El navegador bloqueó la reproducción automática.");
          });
        }
      },
      { once: true }
    );
  
    boton.addEventListener("click", () => {
      if (musica.paused) {
        musica.play();
        icono.classList.remove("fa-play");
        icono.classList.add("fa-music");
      } else {
        musica.pause();
        icono.classList.remove("fa-music");
        icono.classList.add("fa-play");
      }
    });
  }
  
  // ⏳ Contador regresivo al 15 de junio de 2025, 17:00
  function iniciarContadorRegresivo() {
    const fechaEvento = new Date("may 22, 2025 20:00:00").getTime();
  
    function actualizarCuenta() {
      const ahora = new Date().getTime();
      const diferencia = fechaEvento - ahora;
  
      const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
  
      document.getElementById("dias").textContent = dias.toString().padStart(2, "0");
      document.getElementById("horas").textContent = horas.toString().padStart(2, "0");
      document.getElementById("minutos").textContent = minutos.toString().padStart(2, "0");
      document.getElementById("segundos").textContent = segundos.toString().padStart(2, "0");
    }
  
    actualizarCuenta();
    setInterval(actualizarCuenta, 1000);
  }
  
  // 💌 Modal personalizado con mensaje WhatsApp
  function configurarModalConfirmacion() {
    const modal = document.getElementById("modalConfirmacion");
    const secciones = document.querySelectorAll("section, header, footer");
  
    // Mostrar modal al hacer clic en cualquier botón "Confirmar"
    document.querySelectorAll(".boton-confirmar").forEach((boton) => {
      boton.addEventListener("click", (e) => {
        e.preventDefault();
        secciones.forEach((sec) => (sec.style.display = "none"));
        modal.style.display = "flex";
      });
    });
  
    // Cerrar modal
    document.querySelector(".cerrar-modal")?.addEventListener("click", () => {
      modal.style.display = "none";
      secciones.forEach((sec) => (sec.style.display = ""));
    });
  
    // Confirmar y abrir WhatsApp con mensaje
    const form = document.getElementById("formAsistencia");
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const nombre = form.nombre.value.trim();
      const extra = form.extra.value.trim();
      const asiste = form.asiste.value;
  
      let mensaje = `Hola Shayna 🌟 Soy ${nombre}. `;

      if (asiste === "sí") {
        mensaje += "✨ Confirmo con mucha alegría mi asistencia al cumple 🎂 y al estreno de tu canción 🎶.";
      } else {
        mensaje += "💌 Lamento no poder asistir, pero te deseo una hermosa celebración y mucho éxito con la canción 🎵.";
      }
      
      if (extra) {
        mensaje += ` (📝 ${extra})`;
      }
      
  
      // Reemplazá con tu número real de WhatsApp si es necesario
      const numero = "59892992182";
      const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
      window.open(url, "_blank");
  
      // Ocultar modal y mostrar contenido nuevamente
      modal.style.display = "none";
      secciones.forEach((sec) => (sec.style.display = ""));
    });
  }
  
  // Ejecutar cuando cargue el DOM
  document.addEventListener("DOMContentLoaded", configurarModalConfirmacion);
  
  
  // Scroll suave hacia una sección
  function irASeccion(id) {
    const seccion = document.getElementById(id);
    if (seccion) {
      seccion.scrollIntoView({ behavior: "smooth" });
    }
  }
  
  function abrirModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.style.display = 'flex';
    }
    document.querySelectorAll('section, header, footer').forEach(e => e.style.display = 'none');
  }
  
  function cerrarModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.style.display = 'none';
    }
    document.querySelectorAll('section, header, footer').forEach(e => e.style.display = '');
  }
  