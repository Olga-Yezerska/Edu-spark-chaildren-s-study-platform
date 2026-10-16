
let courses = [
    {id: "001", name: "Mathematics Fundamentals", author: "Olena Koval", teachers: ["Olena Koval"], type: ["Quizzes", "calculations"], users_1day: 145, user_2day: 172, duration: { hours: 2, minutes: 30 }},
    {id: "002", name: "English for Beginners", author: "Iryna Melnyk", teachers: ["Iryna Melnyk", "Anna Bondar"], type: ["Multiple-choice questions", "listening exercises"], users_1day: 210, user_2day: 198, duration: { hours: 3, minutes: 45 }},
    {id: "003", name: "Introduction to Computer Science", author: "Andrii Shevchenko", teachers: ["Andrii Shevchenko"], type: ["Practical exercises", "quizzes"], users_1day: 132, user_2day: 164, duration: { hours: 4, minutes: 0 }},
    {id: "004", name: "The World Around Us", author: "Mariia Tkachenko", teachers: ["Mariia Tkachenko"], type: ["Quizzes", "matching exercises"], users_1day: 98, user_2day: 121, duration: { hours: 1, minutes: 50 }},
    {id: "005", name: "Ukrainian Language Fundamentals", author: "Nataliia Boiko", teachers: ["Nataliia Boiko"], type: ["Fill-in-the-blanks", "quizzes"], users_1day: 176, user_2day: 183, duration: { hours: 3, minutes: 15 }},
    {id: "006", name: "Logic Puzzles for Kids", author: "Dmytro Savchuk", teachers: ["Dmytro Savchuk", "Olena Koval"], type: ["Logic problems", "puzzles"], users_1day: 87, user_2day: 116, duration: { hours: 2, minutes: 0 }},
    {id: "007", name: "Introduction to Programming", author: "Maksym Petrenko", teachers: ["Maksym Petrenko"], type: ["Coding tasks", "practical exercises"], users_1day: 115, user_2day: 143, duration: { hours: 6, minutes: 30 }},
    {id: "008", name: "Geometry Around Us", author: "Sofiia Romanenko", teachers: ["Sofiia Romanenko"], type: ["Geometric constructions", "quizzes"], users_1day: 76, user_2day: 69, duration: { hours: 4, minutes: 20 }},
    {id: "009", name: "Natural Sciences", author: "Kateryna Lysenko", teachers: ["Kateryna Lysenko", "Mariia Tkachenko"], type: ["Experiments", "quizzes"], users_1day: 154, user_2day: 189, duration: { hours: 5, minutes: 10 }},
    {id: "010", name: "Memory and Attention Development", author: "Viktoriia Moroz", teachers: ["Viktoriia Moroz"], type: ["Interactive exercises", "puzzles"], users_1day: 123, user_2day: 107, duration: { hours: 1, minutes: 40 }}
];


function sortAndAverageUsers(arr) {
    let sorted = arr.slice(); //копія масиву
    sorted.sort((a, b) => {
        if (a.duration.hours !== b.duration.hours) {
            return a.duration.hours - b.duration.hours;   //спочатку порівнюємо години
        }
        return a.duration.minutes - b.duration.minutes;   //години однакові - порівнюємо хвилини
    });
 
    console.log("Courses by duration: ");
    sorted.forEach(c => {
        console.log(c.duration.hours + " h " + c.duration.minutes + " min - " + c.name);
    });
 
    console.log("Average number of users for courses of the same duration: ");
    arr.forEach(c => {
        let same = arr.filter(x => x.duration.hours === c.duration.hours && x.duration.minutes === c.duration.minutes); //беремо всі курси з такою самою тривалістю, як у c
        let sum = 0;
        same.forEach(x => {
            sum = sum + (x.users_1day + x.user_2day) / 2;
        });
        console.log(c.duration.hours + " h " + c.duration.minutes + " min: " + sum / same.length);
    });
}

function findMinDay2(arr) {
    let minCourse = arr[0];
    arr.forEach(c => {
        if (c.user_2day < minCourse.user_2day) {
            minCourse = c;                        
        }
    });
    console.log("Minimum per day_2: " + minCourse.user_2day + ", id: " + minCourse.id);
}

function addCourse(arr, newCourse) {
    if (newCourse.id && newCourse.name && newCourse.author && newCourse.teachers && newCourse.type && newCourse.users_1day && newCourse.user_2day && newCourse.duration) { //чи заповнені всі поля
        arr.sort((a, b) => { //впорядковуємо список за автором і шукаємо місце
            if (a.author < b.author) {
                return -1;
            }
            if (a.author > b.author) {
                return 1;
            }
            return 0;
        });
        //index - перше місце, де автор стоїть після нового (якщо такого немає, буде -1)
        let index = arr.findIndex(c => c.author > newCourse.author);
        if (index === -1) {
            arr.push(newCourse);                  
        } else {
            arr.splice(index, 0, newCourse);      
        }
        console.log("All info: " + newCourse.name);
    } else {
        arr.unshift(newCourse);                  
        console.log("Not all info: " + newCourse.name);
    }
}

function studyTogether(arr) {
    let factor = 1;
    if (arr.length > 3) {
        factor = 1.5; //більше 3 курсів - тривалість х1.5
    }
    console.log("Courses at the same time: " + arr.length + ", coef: " + factor);
 
    arr.forEach(c => {
        let hours = c.duration.hours * factor;                           
        let minutes = c.duration.minutes * factor;                        
        minutes = minutes + (hours - Math.floor(hours)) * 60; //0.5 год = 30 хв, додаємо до хвилин
        hours = Math.floor(hours) + Math.floor(minutes / 60); //60 хв = 1 год, переносимо в години
        minutes = Math.round(minutes % 60); //решта хвилин
        console.log("  " + c.name + ": " + hours + " h " + minutes + " min");
    });
}

//тести
console.log("1.");
sortAndAverageUsers(courses);
 
console.log("2.");
findMinDay2(courses);
 
console.log("3.");
addCourse(courses, {id: "S011", name: "Drawing for Kids", author: "Lesia Kravets", teachers: ["Lesia Kravets"], type: ["Creative tasks"], users_1day: 90, user_2day: 101, duration: { hours: 2, minutes: 15 }});
addCourse(courses, {id: "S012", name: "Music Basics", author: "Taras Hrytsenko"});   //неповний
courses.forEach(c => {
    console.log("  " + c.name + " (" + c.author + ")");
});
 
console.log("4.");
studyTogether(courses.slice(1, 3)); //2 курси
studyTogether(courses.slice(1, 7)); //6 курсів
 