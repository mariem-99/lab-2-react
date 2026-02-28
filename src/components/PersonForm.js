import { useState } from "react";

function PersonForm() {
  const [firstName, setFirstName] = useState("Mariem");
  const [age, setAge] = useState(20);
  const [isStudent, setIsStudent] = useState(true);

  
  const incrementAge = () => {
    setAge(age + 1);
  };

  const toggleStudent = () => {
    setIsStudent(!isStudent);
  };

  const changeName = () => {
    const names = ["Mariem", "Lina", "Youssef", "Amir"];
    const currentIndex = names.indexOf(firstName);
    const nextIndex = (currentIndex + 1) % names.length;
    setFirstName(names[nextIndex]);
  };

  return (
    <div className="display">
      <h2>Name: {firstName}</h2>
      <h2>Age: {age}</h2>
      <h2>Student: {isStudent ? "Yes" : "No"}</h2>

      <button onClick={incrementAge}>Increment Age</button>
      <button onClick={toggleStudent}>Toggle Student</button>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default PersonForm;