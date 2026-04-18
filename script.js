function toggleMenu() {
  const menu = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  if (menu.style.right === "0px") {
    menu.style.right = "-100%";
    overlay.classList.remove("active");
  } else {
    menu.style.right = "0px";
    overlay.classList.add("active");
  }
}

function goToPage(page) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(page).classList.add("active");

  document.getElementById("sidebar").style.right = "-100%";
  document.getElementById("overlay").classList.remove("active");
}

/* 🔥 WHATSAPP PRO (DIRECT + BACKUP) */
function daftarWA() {
  const app = "whatsapp://send?phone=601111676335&text=Hi%20bos%2C%20saya%20nak%20joint%20HTM125";
  const web = "https://wa.me/601111676335?text=Hi%20bos%2C%20saya%20nak%20joint%20HTM125";

  // coba buka app
  window.location.href = app;

  // fallback ke web kalau gagal
  setTimeout(() => {
    window.location.href = web;
  }, 1200);
}

/* AUTO LOAD */

// SLOT
for (let i = 1; i <= 17; i++) {
  document.getElementById("slotContainer").innerHTML += `
    <div class="card">
      <img src="img/slot${i}.jpg">
      <button onclick="daftarWA()">Daftar Sekarang</button>
    </div>
  `;
}

// LIVE
for (let i = 1; i <= 9; i++) {
  document.getElementById("liveContainer").innerHTML += `
    <div class="card">
      <img src="img/live${i}.jpg">
      <button onclick="daftarWA()">Daftar Sekarang</button>
    </div>
  `;
}

// SPORT
for (let i = 1; i <= 3; i++) {
  document.getElementById("sportContainer").innerHTML += `
    <div class="card">
      <img src="img/sport${i}.jpg">
      <button onclick="daftarWA()">Daftar Sekarang</button>
    </div>
  `;
}

// PROMO
for (let i = 1; i <= 6; i++) {
  document.getElementById("promoContainer").innerHTML += `
    <div class="card">
      <img src="img/promo${i}.jpg">
      <button onclick="daftarWA()">Daftar Sekarang</button>
    </div>
  `;
}