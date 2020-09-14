// Creation des fonctions isEmpty et createError
function isEmpty(str) {
  return (!str || 0 === str.length);
}
function createError(textError, whereTo){
  let error_element = document.createElement('p')
  error_element.classList.add('contact-erreur')
  error_element.innerHTML = textError
  whereTo.appendChild(error_element)
}

// Récupération du form et du boutton submit
let form = document.getElementById('contact-form')
let btn_submit = document.querySelector('.contact-submit')

// Récupération des inputs a vérifier
let contact_prenom = document.getElementById('contact-prenom')
let contact_nom = document.getElementById('contact-nom')
let contact_mail = document.getElementById('contact-mail')
let contact_message = document.getElementById('contact-message')

// Récupération des zone erreur
let error_zone = document.querySelectorAll('.error-zone')

form.onsubmit = function(e){
    let contact_error = document.querySelectorAll('.contact-erreur')
    e.preventDefault()
    // Reset les erreur
    let reset = new Promise((resolve,reject) => {
      let resetDone = true
      for (var i = 0; i < error_zone.length; i++) {
        error_zone[i].innerHTML = ""
      }
      if (resetDone === true) {
        resolve()
      }else {
        reject()
      }
    }).then(() => {
      // Récupération des donnés du formulaire entier
      const formData = new FormData(this)
      // Récupération des valeur input
      let prenom_value = contact_prenom.value
      let nom_value = contact_nom.value
      let mail_value = contact_mail.value
      let message_value = contact_message.value
      let array_check = []
      // Vérification si les Champs sont rempli
      if (isEmpty(prenom_value)) {
        let text_error = "Champ vide"
        let where_to = error_zone[0]
        createError(text_error, where_to)
      }
      if (isEmpty(nom_value)) {
        let text_error = "Champ vide"
        let where_to = error_zone[1]
        createError(text_error, where_to)
      }
      if (isEmpty(mail_value)) {
        let text_error = "Champ vide"
        let where_to = error_zone[2]
        createError(text_error, where_to)
      }
      if (isEmpty(message_value)) {
        let text_error = "Champ vide"
        let where_to = error_zone[3]
        createError(text_error, where_to)
      }
      //Vérification des champ avec des regex
      let regex_name = /^[a-zA-Z-' ]*$/
      let regex_mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      let regex_message = /^[a-zA-Z0-9?$@#()'!,+\-=_:.&€£*%\s]+$/
      function testRegex(inputCheck, regex_rule, nb){
        var pass_regex = regex_rule.exec(inputCheck);
        if (!pass_regex){
          let text_error = "Interdit"
          let where_to = error_zone[nb]
          createError(text_error, where_to)
          array_check.push(false)
        }else{
          array_check.push(true)
        }
      }

      if (!isEmpty(prenom_value)) {
        testRegex(prenom_value, regex_name, 0)
      }
      if (!isEmpty(nom_value)) {
        testRegex(nom_value, regex_name, 1)
      }
      if (!isEmpty(mail_value)) {
        testRegex(mail_value, regex_mail, 2)
      }
      if (!isEmpty(message_value)) {
        testRegex(message_value, regex_message, 3)
      }

      // SI les Verife sont ok on lance l'ajax
      if (array_check[0] == true && array_check[1] == true  && array_check[2] == true && array_check[3] == true) {
        fetch('mail.php',{
          method: 'post',
          body: formData
        }).then(function (result){
          if (result.ok) {
            return result.json()
          }
        }).then(json =>{
          let final_response = document.getElementById('final-response')
          let message_success = document.createElement('p')
          final_response.appendChild(message_success)
          if (json.success === true) {
            message_success.innerHTML = "Message Envoyé"
            form.reset()
          } else {
            message_success.innerHTML = "Erreur d'envoie"
            form.reset()
          }
        }).catch(function (error){
          console.log('error');
        })
      }
    })


}

//Fonction Pour Serialize les donnés du formulaire
// var serialize = function (form) {
  // 	var field,
  // 		l,
  // 		s = [];
  //
  // 	if (typeof form == 'object' && form.nodeName == "FORM") {
    // 		var len = form.elements.length;
    //
    // 		for (var i = 0; i < len; i++) {
      // 			field = form.elements[i];
      // 			if (field.name && !field.disabled && field.type != 'button' && field.type != 'file' && field.type != 'hidden' && field.type != 'reset' && field.type != 'submit') {
        // 				if (field.type == 'select-multiple') {
          // 					l = form.elements[i].options.length;
          //
          // 					for (var j = 0; j < l; j++) {
            // 						if (field.options[j].selected) {
              // 							s[s.length] = encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[j].value);
              // 						}
              // 					}
              // 				}
              // 				else if ((field.type != 'checkbox' && field.type != 'radio') || field.checked) {
                // 					s[s.length] = encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value);
                // 				}
                // 			}
                // 		}
                // 	}
                // 	return s.join('&').replace(/%20/g, '+');
                // };
                // var data = serialize(form);
