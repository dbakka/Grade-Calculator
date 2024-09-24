function calculateGrade(mark) {
    if (mark < 0 || mark > 100 || isNaN(mark)) {
        return "Invalid Input";
    }
    
    const gradeRanges = [
        { min: 81, grade: "A+" },
        { min: 61, grade: "A" },
        { min: 51, grade: "B" },
        { min: 41, grade: "C" },
        { min: 31, grade: "D" },
        { min: 0,  grade: "E" }
    ];

    for (let range of gradeRanges) {
        if (mark >= range.min) {
            return range.grade;
        }
    }
}

function updateResult() {
    const markInput = document.getElementById('markInput');
    const resultDiv = document.getElementById('result');
    const feedbackDiv = document.getElementById('feedback');
    const mark = parseFloat(markInput.value);
    const grade = calculateGrade(mark);
    
    resultDiv.textContent = `Grade: ${grade}`;
    resultDiv.className = `result grade-${grade.replace('+', '-plus')}`;
    
    let feedback = "";
    if (grade === "Invalid Input") {
        feedback = "Please enter a valid mark between 0 and 100.";
    } else if (grade === "A+" || grade === "A") {
        feedback = "Excellent work! Keep it up!";
    } else if (grade === "B") {
        feedback = "Good job! You're doing well.";
    } else if (grade === "C") {
        feedback = "You're on the right track. Keep studying!";
    } else if (grade === "D") {
        feedback = "You need to work harder. Don't give up!";
    } else {
        feedback = "You really need to improve. Seek help if needed.";
    }
    
    feedbackDiv.textContent = feedback;
}

document.getElementById('markInput').addEventListener('input', updateResult);