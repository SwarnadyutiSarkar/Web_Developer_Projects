document.addEventListener('DOMContentLoaded', () => {
    loadSurveyForm();
});

function loadSurveyForm() {
    const surveyForm = document.getElementById('surveyForm');

    // Sample survey questions
    const questions = [
        { question: 'What is your favorite color?', options: ['Red', 'Blue', 'Green', 'Yellow'] },
        { question: 'What is your favorite animal?', options: ['Dog', 'Cat', 'Bird', 'Fish'] },
        { question: 'What is your favorite food?', options: ['Pizza', 'Burger', 'Salad', 'Pasta'] },
    ];

    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.className = 'question';

        const questionTitle = document.createElement('h3');
        questionTitle.textContent = question.question;
        questionElement.appendChild(questionTitle);

        const optionsList = document.createElement('ul');
        question.options.forEach(option => {
            const optionItem = document.createElement('li');
            const optionInput = document.createElement('input');
            optionInput.type = 'radio';
            optionInput.name = `question${index}`;
            optionInput.value = option;
            optionInput.id = `question${index}-${option}`;
            const optionLabel = document.createElement('label');
            optionLabel.htmlFor = `question${index}-${option}`;
            optionLabel.textContent = option;

            optionItem.appendChild(optionInput);
            optionItem.appendChild(optionLabel);
            optionsList.appendChild(optionItem);
        });

        questionElement.appendChild(optionsList);
        surveyForm.appendChild(questionElement);
    });
}

function submitSurvey() {
    const answers = [];

    // Collect answers from the form
    const questions = document.querySelectorAll('.question');
    questions.forEach((question, index) => {
        const selectedOption = question.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            answers.push(selectedOption.value);
        }
    });

    // Send answers to the server
    fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answers }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Survey submitted successfully!');
        } else {
            alert('Error submitting survey. Please try again.');
        }
    })
    .catch(error => console.log(error));
}
// Load the survey questions from the server