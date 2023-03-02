let i = 0;
const cmd = "C:\\Zachary\\Webb>";
const introTxt = " Hi!";
const aboutTxt = " I am Zach. I am currently a senior in computer science at the University of South Carolina \
            and expect to graduate in May of 2023.Born and raised in Charlotte, North Carolina, I am passionate about \
            computers, spending time with family and hanging out with friends. Some of my hobbies are snowboarding, \
            fishing, and weight lifting. I love getting to know people and hope we have the chance to connect soon!";
const txtSpeed = 50;
const introspeed = 100;




document.getElementById("intro").innerHTML += cmd;
function aboutWriter2() {
    if (i < introTxt.length) {
        document.getElementById("intro").innerHTML += introTxt.charAt(i);
        i++;
        setTimeout(aboutWriter2, introspeed);
    }
}
aboutWriter2();
i = 0;



document.getElementById("about").innerHTML += cmd;

function aboutWriter1() {
    if (i < aboutTxt.length) {
        document.getElementById("about").innerHTML += aboutTxt.charAt(i);
        i++;
        setTimeout(aboutWriter1, txtSpeed);
    }
}
aboutWriter1();
i = 0;