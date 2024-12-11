const titleElement = document.getElementById("animated-title");
const finalText = "loup (@loupgraou)";  // Le texte final
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const animationSpeed = 40;  // Vitesse d'animation en millisecondes
let revealedText = "";      // Texte progressivement révélé
let randomText = finalText.split("").map(() => "");  // Texte aléatoire en cours d'affichage

function animateTitle() {
    let completed = true;

    // Parcourt chaque caractère du titre final
    for (let i = 0; i < finalText.length; i++) {
        if (revealedText.length > i) {
            // Si ce caractère est déjà révélé, continue avec la lettre finale
            randomText[i] = finalText[i];
        } else {
            // Si le caractère n'est pas encore révélé, montre des caractères aléatoires
            randomText[i] = characters[Math.floor(Math.random() * characters.length)];
            completed = false;
        }
    }

    // Affiche le texte aléatoire actuel
    titleElement.textContent = randomText.join("");

    // Révèle progressivement chaque caractère
    if (revealedText.length < finalText.length) {
        revealedText += finalText[revealedText.length];
    }

    // Arrête l'animation lorsque le texte est complètement révélé
    if (completed) {
        clearInterval(animationInterval);
        titleElement.textContent = finalText; // Affiche le texte final
    }
}

// Démarre l'animation avec un intervalle
const animationInterval = setInterval(animateTitle, animationSpeed);


