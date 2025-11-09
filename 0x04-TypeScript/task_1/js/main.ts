interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // allow any extra attribute
}

// Director extends Teacher
interface Directors extends Teacher {
    numberOfReports: number; // mandatory
}

const teacher1: Teacher = {
    firstName: "Uncle Science",
    lastName: "Faisal",
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    location: "Maraba"
}

const teacher2: Teacher = {
    firstName: "Uncle Simon",
    lastName: "Umaru",
    fullTimeEmployee: false,
    location: "Maraba",
    contract: true
}

const teacher3: Teacher = {
    firstName: "Uncle Bilal",
    lastName: "Faisal",
    fullTimeEmployee: false,
    location: "Maraba",
    contract: false
}

const director1: Directors = {
    firstName: "Lawal",
    lastName: "Ahmad",
    location: "Ganye",
    fullTimeEmployee: true,
    numberOfReports: 17
}

// Modifying dynamic attributes
teacher3.fullTimeEmployee = true;
teacher3.yearsOfExperience = 2;
teacher3.contract = true;

console.log('teacher1', teacher1);
console.log('teacher2', teacher2);
console.log('teacher3', teacher3);
console.log('director1', director1);

const output = document.getElementById('output');
if (output) {
    const pre = document.createElement('pre');
    pre.textContent =
        'teacher1: ' + JSON.stringify(teacher1, null, 2) + '\n\n' +
        'teacher2: ' + JSON.stringify(teacher2, null, 2) + '\n\n' +
        'teacher3: ' + JSON.stringify(teacher3, null, 2) + '\n\n' +
        'director1: ' + JSON.stringify(director1, null, 2);
    output.appendChild(pre);
}
