
let student = {
    name: "Marie",
    age: 20,
    courses: []
  };

  student.age = 21;  
  student.grade = "A";  
  
  
  student.courses.push("Math", "Physics", "Chemistry");  
  
  
  let physicsIndex = student.courses.indexOf("Physics");
  

  let firstTwoCourses = student.courses.slice(0, 2);
  

  console.log("L'objet student modifié :", student);
  console.log("Index de 'Physics' :", physicsIndex);
  console.log("Nouveau tableau avec les deux premiers cours :", firstTwoCourses);