/** 
 * Event listener for Submit button
 * Get item/set item to store info to local storage
 * Define variable for empty array
 * Update display - console log
*/
const submitButton = document.querySelector("#submit");
const studentName = document.querySelector("#student-name");
const students = [];

function storeName () {
    // console.log("storeName", studentName.value.trim());
    localStorage.setItem("students", JSON.stringify(students));
}

function readForm (event) {
    event.preventDefault ();
    // console.log("storeName", studentName.value.trim());
    const name = studentName.value;
    if (name) {
        students.push(name);
        storeName();
    }
    else {
        alert("Must include name, dummie.");
    }

    studentName.value = "";
}





// Get item/set item to store info to local storage
// Get items from local storage - push to empty array

submitButton.addEventListener("click", readForm);