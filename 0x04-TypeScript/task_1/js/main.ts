// Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // allows extra properties
}

// Director interface extending Teacher
interface Director extends Teacher {
    numberOfReports: number;
}

// Interface for printTeacher function
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Function declaration (required by the test)

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName[0]}. ${lastName}`;
}

console.log(printTeacher({ firstName: "John", lastName: "Doe" })); // J. Doe

// Teacher instances
const teacher1: Teacher = {
    firstName: "Uncle Science",
    lastName: "Faisal",
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    location: "Maraba"
};

const teacher2: Teacher = {
    firstName: "Uncle Simon",
    lastName: "Umaru",
    fullTimeEmployee: false,
    location: "Maraba",
    contract: true
};

const teacher3: Teacher = {
    firstName: "Uncle Bilal",
    lastName: "Faisal",
    fullTimeEmployee: false,
    location: "Maraba",
    contract: false
};

// Director instance
const director1: Director = {
    firstName: "Lawal",
    lastName: "Ahmad",
    location: "Ganye",
    fullTimeEmployee: true,
    numberOfReports: 17
};

// Modify some properties
teacher3.fullTimeEmployee = true;
teacher3.yearsOfExperience = 2;
teacher3.contract = true;

// Console output
console.log('teacher1', teacher1);
console.log('teacher2', teacher2);
console.log('teacher3', teacher3);
console.log('director1', director1);
console.log('printTeacher("John", "Doe"):', printTeacher("John", "Doe"));

// DOM output
const output = document.getElementById('output');
if (output) {
    const pre = document.createElement('pre');
    pre.textContent =
        'teacher1: ' + JSON.stringify(teacher1, null, 2) + '\n\n' +
        'teacher2: ' + JSON.stringify(teacher2, null, 2) + '\n\n' +
        'teacher3: ' + JSON.stringify(teacher3, null, 2) + '\n\n' +
        'director1: ' + JSON.stringify(director1, null, 2) + '\n\n' +
        'printTeacher("John", "Doe"): ' + printTeacher("John", "Doe");
    output.appendChild(pre);
}
