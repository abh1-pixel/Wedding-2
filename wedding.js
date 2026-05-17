document.addEventListener("DOMContentLoaded", () => {

  const openBtn = document.getElementById("openBtn");
  const envelope = document.getElementById("envelope");
  const invitation = document.getElementById("invitation");

  console.log("JS Loaded"); // debug

  if (!openBtn) {
    console.error("Button NOT found");
    return;
  }

  openBtn.addEventListener("click", () => {
    console.log("Clicked!");

    envelope.style.display = "none";
    invitation.classList.remove("hidden");
  });

});
// COUNTDOWN

const targetDate = new Date('August 23, 2026 00:00:00').getTime();

setInterval(() => {

  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) /
    (1000 * 60)
  );

  const seconds = Math.floor(
    (distance % (1000 * 60)) /
    1000
  );

  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;

}, 1000);
// SCRATCH EFFECT

const canvases = document.querySelectorAll('.scratch');

canvases.forEach((canvas) => {

  const ctx = canvas.getContext('2d');

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  ctx.fillStyle = '#b7d7a8';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  let scratching = false;

  function scratch(e) {

    if (!scratching) return;

    const rect = canvas.getBoundingClientRect();

    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;

    ctx.globalCompositeOperation = 'destination-out';

    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();

  }
  canvas.addEventListener('mousedown', () => scratching = true);
  canvas.addEventListener('mouseup', () => scratching = false);
  canvas.addEventListener('mousemove', scratch);

  canvas.addEventListener('touchstart', () => scratching = true);
  canvas.addEventListener('touchend', () => scratching = false);
  canvas.addEventListener('touchmove', scratch);

});
function shareWhatsApp() {

    const inviteLink = "https://ajesh-and-athira.vercel.app/";

    const message = `💍 Wedding Invitation 💍

With love, we invite you to celebrate our special day ❤️

${inviteLink}`;

    const url =
    "https://wa.me/?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}
window.addEventListener("scroll", function () {

    const instaBtn =
        document.getElementById("instaBtn");

    const scrollTop =
        window.scrollY;

    const windowHeight =
        window.innerHeight;

    const fullHeight =
        document.body.scrollHeight;

    // show button near bottom
    if (scrollTop + windowHeight >= fullHeight - 200) {

        instaBtn.classList.add("show");

    } else {

        instaBtn.classList.remove("show");
    }
});
