$(document).ready(function() {
  $("#output").click(function() {
    let students = $('#students').val();
    students = JSON.parse(students)["studentsArr"];
    // console.log(students);
    for(var i = 0; i < students.length; i++){
      let student = students[i];
      console.log(`Name: ${student.name} Top Note: ${Math.max(...student.notes)}`);
    }
  });
});
