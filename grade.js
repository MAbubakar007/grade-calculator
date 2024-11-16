function calculateGrade() {
    const marks = document.getElementById("marks").value;
    let grade;

    if (marks >= 900) {
      grade = "A+";
    } else if (marks >= 800) {
      grade = "A";
    } else if (marks >= 700) {
      grade = "B";
    } else if (marks >= 600) {
      grade = "C";
    } else if (marks >= 500) {
      grade = "D";
    } else {
      grade = "F";
    }

    document.getElementById("result").innerHTML = "Your Grade: " + grade;
  }
