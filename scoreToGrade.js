function convertScoreToGradeWithPlusAndMinus(score) {
  var letterGrade = ""
  if (score <= 100 && score >= 90) letterGrade = "A";
  else if (score <= 89 && score >= 80) letterGrade = "B";
  else if (score <= 79 && score >= 70) letterGrade = "C";
  else if (score <= 69 && score >= 60) letterGrade = "D";
  else if (score <= 59 && score >= 0) letterGrade = "F";
  else return "INVALID SCORE";
  
  if (score%10 >= 0 && score%10 <=2) {
    letterGrade += "-"
  }
  
  if (score%10 >= 8 && score%10 <=9) {
    letterGrade += "+"
  }
  
  if (score === 100) return "A+";
  if (score <= 59) return "F";
  return letterGrade;
}

convertScoreToGradeWithPlusAndMinus(69)