const dictionary = {
    en: { hT: "Our Eternal Bond", hD: "A sanctuary for our memories.", cT: "Time Together", d: "Days", h: "Hours", m: "Min", s: "Sec", mT: "Heart Scroll", sB: "Seal Memory", gT: "Memories Gallery" },
    it: { hT: "Nostro Legame Eterno", hD: "Un santuario per i nostri ricordi.", cT: "Tempo Insieme", d: "Giorni", h: "Ore", m: "Min", s: "Sec", mT: "Pergamena del Cuore", sB: "Sigilla Memoria", gT: "Galleria dei Ricordi" }
};

function setLang(l) {
    const t = dictionary[l];
    document.getElementById("h-title").innerText = t.hT;
    document.getElementById("h-desc").innerText = t.hD;
    document.getElementById("c-title").innerText = t.cT;
    document.getElementById("l-days").innerText = t.d;
    document.getElementById("l-hours").innerText = t.h;
    document.getElementById("l-min").innerText = t.m;
    document.getElementById("l-sec").innerText = t.s;
    document.getElementById("m-title").innerText = t.mT;
    document.getElementById("s-btn").innerText = t.sB;
    document.getElementById("g-title").innerText = t.gT;

    document.querySelectorAll(".lang-toggle button").forEach(b => b.classList.remove("active"));
    document.getElementById(`${l}-btn`).classList.add("active");
    localStorage.setItem("selectedLang", l);
}

// العداد
const startPoint = new Date();
startPoint.setMonth(startPoint.getMonth() - 3); startPoint.setDate(startPoint.getDate() + 5);

function updateTimer() {
    const diff = new Date() - startPoint;
    document.getElementById("days").innerText = Math.floor(diff / 86400000);
    document.getElementById("hours").innerText = Math.floor((diff / 3600000) % 24);
    document.getElementById("minutes").innerText = Math.floor((diff / 60000) % 60);
    document.getElementById("seconds").innerText = Math.floor((diff / 1000) % 60);
}
setInterval(updateTimer, 1000);

function saveMessage() {
    localStorage.setItem("saved_msg", document.getElementById("messageBox").value);
    alert("Memory Locked! 🔐");
}

window.onload = () => {
    setLang(localStorage.getItem("selectedLang") || 'en');
    document.getElementById("messageBox").value = localStorage.getItem("saved_msg") || "";
};