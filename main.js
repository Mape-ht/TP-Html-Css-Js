//declarer comme variable les inputs 
var clientclient = document.getElementById('clientclient');
var agenceField = document.getElementById('regAgence');

//validation si tous les champs clt physique ne sont pas vides
var cltForm = document.getElementById('cltForm')
    cltForm.addEventListener('submit',validate);
        function validate(e) {
        e.preventDefault();
        
        if (clientclient.value <= "0" || agenceField.value <= "0") {
            alert('Veuillez choisir vos options');
        } else {
            alert ('Formulaire bien enregistré');
                }
               
        }

        
   
//var cltForm = document.getElementById('cltForm')
//function myFunction() { 
//    document.getElementById("cltForm").reset();
//    }  alert('Formulaire reinitialisé !');
    