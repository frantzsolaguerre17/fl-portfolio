
const hireForm = document.getElementById("hireForm");
const sendButton = document.getElementById("sendButton");
const spinner = document.getElementById("spinner");
const errorDiv = document.getElementById("error");

hireForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Vérifier si l'utilisateur est en ligne
    if (!navigator.onLine) {
        errorDiv.classList.remove("hidden");
        return;
    } else {
        errorDiv.classList.add("hidden");
    }

    // Désactiver le bouton et afficher le spinner
    sendButton.disabled = true;
    spinner.classList.remove("hidden");

    // Récupérer les données du formulaire
    const templateParams = {
        fullName: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        projectType: document.getElementById("projectType").value,
        budget: document.getElementById("budget").value,
        aboutProject: document.getElementById("aboutProject").value,
    };

    // Envoyer les données via EmailJS
    emailjs
        .send("service_yjb53d6", "template_1q9lctn", templateParams)
        .then(() => {
            alert("Message sent successfully!");
            hireForm.reset();
            spinner.classList.remove("hidden");

        })
        .catch((error) => {
            console.error("Error sending message:", error);
            alert("Failed to send the message. Please try again later.");
        })
        .finally(() => {
            // Réactiver le bouton et masquer le spinner
            sendButton.disabled = false;
            spinner.classList.add("hidden");
        });
});