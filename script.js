function calculateScore() {
    // Les réponses correctes
    const answers = {
        q1: "HTML",
        q2: "//",
        q3: "CSS",
        q4: "JavaScript",
        q5: ".js",
        q6: "href",
        q7: "<a>",
        q8: "SQL",
        q9: "id",
        q10: "PHP"
    };

    // Initialiser le score
    let score = 0;

    // Parcourir chaque question et vérifier la réponse
    for (const questionId in answers) {
        // Récupérer tous les inputs radio pour cette question
        const options = document.getElementsByName(questionId);

        // Vérifier quelle option est sélectionnée
        for (let i = 0; i < options.length; i++) {
            if (options[i].checked && options[i].value === answers[questionId]) {
                score++;
            }
        }
    }

    // Afficher le score dans une popup
    alert(`Votre score est de ${score} / 10`);
}
