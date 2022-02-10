function formComponent (el){
    const newFormEl = document.createElement("div");
    newFormEl.innerHTML = `
    <h3 class="form__title">Contact Us</h3>
    <form action="" method="" class="form__conteiner">
        <label for="name" class="form-container__label">
            <div class="form-container__title">Name</div>
            <input id="inputName" type="text" name="Nombre" class="form-container__input" placeholder="Name">
        </label>
        <label for="email" class="form-container__label">
            <div class="form-container__title">Email</div>
            <input id="input-email" type="text" name="Email" class="form-container__input" placeholder="Email">
        </label>
        <label for="message" class="form-container__label-messege">
            <div class="form-container__title">Message</div>
            <textarea class=".form-container__input form-container__message" name="Mensaje" id="Mensaje" cols="30" rows="10"
                placeholder="Write your message here"></textarea>
        </label>
        <button class="form-container__button">Enviar</button>
    </form>`
    el.appendChild(newFormEl);
    newFormEl.classList.add("newDivForm");

    const formEl = document.querySelector(".form")
    const inputs = newFormEl.querySelectorAll(".form-container__input")
    enviarInfo(formEl, inputs);

}

function enviarInfo(formEl, inputs){
    formEl.addEventListener("submit", (e)=>{
        e.preventDefault()
        const formData = new FormData(e.target);
        const objectForm = Object.fromEntries(formData.entries());
        
        const message = `
        Nombre del usuario: ${objectForm.Nombre} 
        Mail: ${objectForm.Email} 
        Mensaje: ${objectForm.Mensaje}
      `;

      fetch("https://apx-api.vercel.app/api/utils/dwf", {
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			method: "POST",

			body: JSON.stringify({
				to: "m.comotti@hotmail.com",

				message: message,
			}),
		})
			.then(() => {
				alert(
					"Mensaje enviado. Gracias, " + objectForm.Nombre + " por comunicarte!"
				);

				inputs.forEach((input) => {
					input.value = "";
				});
			})
			.catch(() => {
				alert(
					"Ha ocurrido un error, revise haber completado los campos correctamente"
				);
			});
	});

  
}