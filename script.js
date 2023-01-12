Exo 1 : Le Traducteur Du Monde 

Recuperation de la Language choisi
    let current_language = prompt(« Quelle est la langue que vous parle »)
Créez quelques conditions :
commutateur(current_language){
    Cas « English »:
        alert(« Bonjour »)
        casser

    Case « anglais »:
        alert(« Bonjour »)
        casser

    Cas « hébreu »:
        alert(« Shalom »)
        casser

    Valeur par défaut :
        alert('01110011 01101111 01110010 01110010 01111001')
}

 Exo 2 : L'assignateur De Notes

Recuperation de la saisie
let current_note = prompt(« Prière d’entrer une note: »)


if(current_note > 90){
    console. log(« A »)
}else if(current_note>80 && current_note  <=90){
    console. log(« B »)
}else if(current_note>=70 && current_note<=80){
    console. log(« C »)
}autre{
    console. log(« D »)
}

 Ex0 3 : Verbe

Recuperation de la saisie de l’utilisateur
let verbe = prompt(« Donner un verbe »)
if(verbe. longueur >= 3 && ! Verbe. endsWith(« ing »)) {
        console. log(verbe + « ing »);
    }sinon si (verbe. longueur >= 3 && verbe. endsWith(« ing »)) {
            Verbe de retour  + « ly »; 
}sinon si (verbe. longueur < 3) {
    console. log(verbe);
}
