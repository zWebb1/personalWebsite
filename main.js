

let j = 0;

const titleName = "Zachary Webb"

const txtSpeed = 100;

setTimeout(function run1() {
    document.getElementById("nameSpot").innerHTML;
    nameWriter();
}
,500)
function nameWriter() {
    if (j < titleName.length) {
        document.getElementById("nameSpot").innerHTML += titleName.charAt(j);
        j++;
        setTimeout(nameWriter, txtSpeed);
    }
}


