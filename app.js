const monthNames = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni",
  "juuli", "august", "september", "oktoober", "november", "detsember"
];

const currentDate = new Date();
let month = monthNames[currentDate.getMonth()];
let day = currentDate.getUTCDate();
let date = document.getElementById("currentDate");
date.textContent = day.toString() + ". " + month;

function openNav() {
    document.getElementById("mySidebar").style.width = "280px";
}

function closeNav() {
   document.getElementById("mySidebar").style.width = "0";
}

document.querySelector('.visible').addEventListener('click', function() {
    console.log("works");
    document.querySelector('.visible').classList.toggle('expand');
});

document.querySelector('.date').addEventListener('click', function() {
    document.querySelector('.date').classList.toggle('expand');
});

function visible() {
    /*
    document.getElementById("room").style.display = "none";
    document.getElementById("teacher").style.display = "none";
    document.getElementById("subject").style.display = "none";*/
}