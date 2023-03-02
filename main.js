

let j = 0;
let i = 0;
const cmd = "C:\\Zachary\\Webb>";
const introTxt = " Hi!";
const aboutTxt = " I am Zach. I am currently a senior in computer science at the University of South Carolina \
            and expect to graduate in May of 2023.Born and raised in Charlotte, North Carolina, I am passionate about \
            computers, spending time with family and hanging out with friends. Some of my hobbies are snowboarding, \
            fishing, and weight lifting. I love getting to know people and hope we have the chance to connect soon!";

const txtSpeed = 50;
const introspeed = 100;

setTimeout(function run1() {
    document.getElementById("intro").innerHTML += cmd;
    aboutWriter2();
}
    , 500);
setTimeout(function run2() {
    document.getElementById("about").innerHTML += cmd;
    aboutWriter1();
},
    2000);



function aboutWriter2() {
    if (i < introTxt.length) {
        document.getElementById("intro").innerHTML += introTxt.charAt(i);
        i++;
        setTimeout(aboutWriter2, introspeed);
        console.log(i);
    }
}



function aboutWriter1() {
    if (j < aboutTxt.length) {
        document.getElementById("about").innerHTML += aboutTxt.charAt(j);
        j++;
        setTimeout(aboutWriter1, txtSpeed);
    }
}

const projectTxt1 = "C:\Zachary\Webb\StudyVerse> StudiVerse is a mobile app designed to assist college students in locating groups\
                    and tutors for subjects in which they require assistance. The app strives to get users/students into the app\
                    as quickly as possible, and upon signing up, our matchmaking system promptly connects them with potential\
                    tutors and fellow students interested in forming study groups to support one another. StudiVerse enables\
                    users to communicate with each other via an in-house messaging system."

