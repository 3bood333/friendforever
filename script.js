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

    const defaultMessage = `Hello my friend, or moon, as I promised you, this is the site that will always hold our memories. My friend, truly, these words come from my heart, sincerely to you. I've read everything we wrote during the past three months. I know you don't like being close to anyone, and I remember the day you said your lover needed a year of trying and that you didn't like being close to any friend. I understand your distance and your fear, and I understand how much your heart has hurt. I apologize for everything life has done to you. Honestly, you are a different person. You don't know how much of a sister you are to me, even though my mother didn't give birth to you. You are the best person I've ever met online. I remember our words, our crazy moments, your words when you stopped me from hurting myself, and your promises that you would always be by my side. I remember them all. You are truly the most wonderful friend I've ever known. I really want to thank you and ask you to be proud of yourself and believe in yourself, because in that case, you create yourself. You are a wonderful, great, and creative person. I haven't found anyone like you anywhere. You have the most beautiful heart in the world. I don't know how to thank you or prove to you that we can be close friends, but please think about it. I promise I will be your biggest supporter. Thank you always, my friend, for everything. I don't know what to say; honestly, I have so much gratitude in my heart, but I can't express it. Thank you, my friend with the pure heart.`;

    document.getElementById("messageBox").value =
        localStorage.getItem("saved_msg") || defaultMessage;
};
