class Child {
    constructor(surname, name, age, email, purpose, date, time) {
        this.surname = surname;     
        this.name = name;           
        this.age = age;             
        this.email = email;         
        this.purpose = purpose;     
        this.date = date;           
        this.time = time;           
    }

    getNameSurname() {
        console.log(this.name + " " + this.surname)
    }
}

let childrenList = [
    new Child("Koval", "Maksym", 2, "koval.maksym@mail.com", "Complaint", new Date(2026, 2, 5), "09:30"),
    new Child("Melnyk", "Sofiia", 4, "melnyk.sofiia@mail.com", "Suggestion", new Date(2026, 2, 12), "14:15"),
    new Child("Bondar", "Artem", 6, "bondar.artem@mail.com", "Question", new Date(2026, 2, 20), "19:40"),
    new Child("Shevchenko", "Anna", 8, "shevchenko.anna@mail.com", "Suggestion", new Date(2026, 3, 3), "11:00"),
    new Child("Tkachenko", "Danylo", 3, "tkachenko.danylo@mail.com", "Complaint", new Date(2026, 3, 18), "16:25"),
    new Child("Boiko", "Marta", 7, "boiko.marta@mail.com", "Question", new Date(2026, 4, 7), "10:10"),
    new Child("Savchuk", "Yehor", 5, "savchuk.yehor@mail.com", "Suggestion", new Date(2026, 4, 22), "13:50"),
    new Child("Petrenko", "Polina", 9, "petrenko.polina@mail.com", "Complaint", new Date(2026, 2, 28), "17:05"),
    new Child("Romanenko", "Ivan", 1, "romanenko.ivan@mail.com", "Question", new Date(2026, 5, 9), "08:45"),
    new Child("Lysenko", "Zlata", 10, "lysenko.zlata@mail.com", "Suggestion", new Date(2026, 5, 15), "12:20")
];

function showByMonthAndTime(list, month, timeFrom, timeTo) {
    console.log("Addressing in months " + month + " between " + timeFrom + " and " + timeTo + ":");
    let found = 0;
    list.forEach(c => {
        //getMonth() повертає місяць від 0 до 11, тому додаємо 1
        if (c.date.getMonth() + 1 === month && c.time >= timeFrom && c.time <= timeTo) {
            console.log("  " + c.surname + " " + c.name + ", " + c.date.getDate() + "." + (c.date.getMonth() + 1) + "." + c.date.getFullYear() + " " + c.time);
            found = found + 1;
        }
    });
    if (found === 0) {
        console.log("No one");
    }
}

function showYoungest(list) {
    let youngest = list[0];
    list.forEach(c => {
        if (c.age < youngest.age) {
            youngest = c;
        }
    });
    console.log("The youngest: " + youngest.surname + " " + youngest.name + ", age " + youngest.age + ", E-mail: " + youngest.email + ", date: " + youngest.date.getDate() + "." + (youngest.date.getMonth() + 1) + "." + youngest.date.getFullYear());
}

function countByAgeClass(list) {
    let early = 0;       
    let middle = 0;      
    let preschool = 0;   
    let school = 0;      

    list.forEach(c => {
        if (c.age <= 3) {
            early = early + 1;
        } else if (c.age <= 5) {
            middle = middle + 1;
        } else if (c.age <= 7) {
            preschool = preschool + 1;
        } else {
            school = school + 1;
        }
    });

    console.log("Number of children by age groups: ");
    console.log("  up tp 3: " + early);
    console.log("  4 - 5: " + middle);
    console.log("  6 - 7: " + preschool);
    console.log("  7+: " + school);
}

function sortByEmail(list) {
    let sorted = list.slice();   
    sorted.sort((a, b) => {
        if (a.email < b.email) {
            return -1;
        }
        if (a.email > b.email) {
            return 1;
        }
        return 0;
    });
    console.log("Kids by E-mail: ");
    sorted.forEach(c => {
        console.log("  " + c.email + " - purpose: " + c.purpose);
    });
}

//тести
console.log("==================================")
console.log("Children: 1.");
showByMonthAndTime(childrenList, 3, "09:00", "18:00");   

console.log("Children: 2.");
showYoungest(childrenList);

console.log("Children: 3.");
countByAgeClass(childrenList);

console.log("Children: 4.");
sortByEmail(childrenList);

console.log(num)
let num = 5