// Tab functionality
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and contents
        document.querySelectorAll('.tab, .tab-content').forEach(el => el.classList.remove('active'));
        // Add active class to clicked tab and corresponding content
        tab.classList.add('active');
        document.getElementById(tab.getAttribute('data-tab')).classList.add('active');
    });
});

// Quiz functionality
document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simple answer key (should be expanded with real answers)
    const answers = {
        q1: 'FERPA is a federal law designed to protect the privacy of student education records.',
        // Add more answers corresponding to the questions
        // 'q2': 'Answer 2',
        // ...
    };

    let score = 0;
    let total = Object.keys(answers).length;

    // Check answers
    for (let key in answers) {
        let userAnswer = this.elements[key].value.trim().toLowerCase();
        let correctAnswer = answers[key].trim().toLowerCase();
        if (userAnswer.includes(correctAnswer)) {
            score++;
        }
    }

    // Display results
    document.getElementById('quiz-results').innerText = `You scored ${score} out of ${total}.`;
});
// Tab functionality remains the same

// Tab functionality
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and contents
        document.querySelectorAll('.tab, .tab-content').forEach(el => el.classList.remove('active'));
        // Add active class to clicked tab and corresponding content
        tab.classList.add('active');
        document.getElementById(tab.getAttribute('data-tab')).classList.add('active');
    });
});

// Quiz functionality with feedback and animated popup for multiple-choice quiz
document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Answer key
    const answers = {
        q1: 'b',
        q2: 'd',
        q3: 'b',
        q4: 'c',
        q5: 'b',
        q6: 'c',
        q7: 'b',
        q8: 'a',
        q9: 'b',
        q10: 'b'
    };

    let score = 0;
    let total = Object.keys(answers).length;

    // Loop through each question
    Object.keys(answers).forEach(key => {
        let selectedOption = document.querySelector(`input[name="${key}"]:checked`);
        let questionDiv = document.querySelector(`div[data-question="${key}"]`);

        if (selectedOption) {
            if (selectedOption.value === answers[key]) {
                score++;

                // Show correct feedback
                showCorrectPopup();

                // Mark the question as correct
                questionDiv.classList.remove('incorrect');
                questionDiv.classList.add('correct');
            } else {
                // Mark the question as incorrect
                questionDiv.classList.remove('correct');
                questionDiv.classList.add('incorrect');
            }
        } else {
            // No option selected
            questionDiv.classList.remove('correct');
            questionDiv.classList.add('incorrect');
        }
    });

    // Display results
    document.getElementById('quiz-results').innerText = `You scored ${score} out of ${total}.`;
});

// Function to show animated popup
function showCorrectPopup() {
    const popup = document.getElementById('correct-popup');
    popup.style.display = 'block';

    // Restart animation
    popup.style.animation = 'none';
    popup.offsetHeight; // Trigger reflow
    popup.style.animation = null;

    // Hide popup after animation ends
    setTimeout(() => {
        popup.style.display = 'none';
    }, 2000); // Match the duration in CSS animation
}
