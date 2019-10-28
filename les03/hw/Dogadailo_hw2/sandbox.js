// const age = Number(prompt("Enter your age"));
// switch (true) {
//     case (age <= 2):
//         alert("child");
//         break;
//     case (age >= 12 && age <=18):
//         alert("Teenager");
//         break;
//     case (age >= 18 && age <=60):
//         alert("You are adult");
//         break;
//     case (age > 60):
//         alert ("you are old man");
//         break;
//     default:
//         alert ("Kto ti takoi????");

// }

let count = 0;
const answer1 = prompt('Назовите самую быстро-бегающую птицу: цапля, страус, гусь');
if (answer1 == "страус") {
    count += 2;
}

const answer2 = prompt("В каком виде спорта самый лёгкий мяч: футбол, теннис, волейбол");
if (answer2 == "теннис") {
    count += 2;
} 

const answer3 = prompt('то был первой женщиной-космонавтом?: Гагарина, Иванова, Терешкова');
if (answer3 == "Терешкова") {
    count += 2;
} 

alert(count);
