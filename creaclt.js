//declarer comme variable les inputs 
var cltPhyField = document.getElementById('cltPhy');
var typeMoralField = document.getElementById('typeMoral');
var nomsCltField = document.getElementById('nomsClt');
var prenomCltField = document.getElementById('prenoms');
var adresseCltField = document.getElementById('adresse');
var emailCltField = document.getElementById('email');
var phoneCltField = document.getElementById('phone');
var salaireCltField = document.getElementById('salaire');
var nomsEmployeurField = document.getElementById('nomsEmployeur');
var numIdTravailField = document.getElementById('numIdTravail');
var raisonSoField = document.getElementById('raisonSo');
var nomsEmployeurField = document.getElementById('nomsEmployeur');
var adresseEmploiField = document.getElementById('adresseEmploi');
var nineaField = document.getElementById('numIdEmployeur');


/*//validation effectué en html car validation JS si tous les champs contenant du texte sont remplis uniquement de caractère alphabétique (pause probleme pour les cas de salaire mis en text)
function allLetter(inputtxt){ 
    var letters = /^[A-Za-z]+$/;
    if(inputtxt.value.match(letters))
    { alert('Champs texte bien remplis');
    return true;
    } else
    { alert('Caractères alphabetiques uniquement');
    return false;
    }
    }*/


//hide and show des inputs et fieldset
function showHideMoral() {
    if (document.getElementById('cltPhy').checked == true ) {
        (document.getElementById('creacltPhy').style.display='block') && (document.getElementById('creacltMoral').style.display='none'); 

    }else {

        (document.getElementById('creacltPhy').style.display='none') && (document.getElementById('creacltMoral').style.display='block')  ;
    }
}



function showHideSalaire() {
    if (document.getElementById('nonsalarie').checked == true ) {
       document.getElementById('cltsalarie').style.display='none'; 

    }else {

        document.getElementById('cltsalarie').style.display='block';
    }
}

//validation si tous les champs clt physique n'ont ni blanc ni simple space
var creacltForm = document.getElementById('creacltForm')
creacltForm.addEventListener('submit',cltvalidate);
    function cltvalidate(e) {
        e.preventDefault(); //equivalent return false 
        
        if (nomsCltField.value.trim() === "" || prenomCltField.value.trim() ==="" || adresseCltField.value.trim() ==="" || emailCltField.value.trim() ==="" || phoneCltField.value.trim() ==="" || salaireCltField.value.trim() ==="" || nomsEmployeurField.value.trim() ==="" || numIdTravailField.value.trim() ==="" || raisonSoField.value.trim() ==="" || nomsEmployeurField.value.trim() ==="" || adresseEmploiField.value.trim() ==="" || nineaField.value.trim() ==="") 
         {
            alert('Veuillez remplir tous les champs');
        } else {
            alert('Formulaire bien enregistré');
                }
         
        }
    

