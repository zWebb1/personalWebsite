/* let i = 0;
const cmd = "C:\\Zachary\\Webb>";
const intro = " Hi!";
const aboutTxt = " I am Zach. I am currently a senior in computer science at the University of South Carolina \
            and expect to graduate in May of 2023.Born and raised in Charlotte, North Carolina, I am passionate about \
            computers, spending time with family and hanging out with friends. Some of my hobbies are snowboarding, \
            fishing, and weight lifting. I love getting to know people and hope we have the chance toconnect soon!";
const txtSpeed = 50;

document.getElementById("intro").innerHTML += cmd + intro;
document.getElementById("about").innerHTML += cmd;
function Writer() {
    if (i < aboutTxt.length) {
        document.getElementById("about").innerHTML += aboutTxt.charAt(i);
        i++;
        setTimeout(Writer, txtSpeed);
    }
}
Writer(); */