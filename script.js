function navigate(page) {
  window.location.href = page;
}
function submitQuiz(event) {
  event.preventDefault();
  const answer = document.querySelector('input[name="q1"]:checked');
  const result = document.getElementById("quiz-result");

  if (!answer) {
    result.textContent = "❗ Please select an answer.";
    result.style.color = "#dc3545";
  } else if (answer.value === "thinking") {
    result.textContent = "✅ Correct! AI refers to machines that mimic human intelligence.";
    result.style.color = "#28a745";
  } else {
    result.textContent = "❌ Oops! That's not the correct answer.";
    result.style.color = "#dc3545";
  }
}
