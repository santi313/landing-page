// FORM SUBMIT
const scriptURL = "https://script.google.com/macros/s/AKfycbx7R8JYF7gxCGx8J_UbdlGl-EarvIUP_U0HAuPx-I_itZ_UE9JAenqKJ-BLIndse20J/exec";

const form = document.forms["dcc-contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // ketika submit di klik
  // tampilkan tombol loading, hilangkan tombol kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      // tampilkan alert
      myAlert.classList.toggle("d-none");
      // reset form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

// FORM FREE TRIAL HOME
function waTrialHome() {
  const namaAnak = document.getElementById("namaAnak").value;
  const usiaAnak = document.getElementById("usia").value;
  const namaOrtu = document.getElementById("namaOrtu").value;
  const noHp = document.getElementById("noHp").value;
  const email = document.getElementById("email").value;
  const checkbox = document.getElementById("setuju");

  let setuju = "";

  if (checkbox.checked) {
    setuju = "*Saya setuju untuk mengikuti kebijakan privasi*";
  }

  const waUrl = "https://wa.me/6283851744849/?text=" + "Halo DCC, saya ingin reservasi jadwal _Trial Class_ yaaa 😊. Berikut data diri saya," + "%0a%0aNama Anak : " + namaAnak + "%0aUsia Anak : " + usiaAnak + "%0aNama Orang Tua : " + namaOrtu + "%0aNo. HP Orang Tua : " + noHp + "%0aEmail Aktif : " + email + "%0a%0a" + setuju;

  window.open(waUrl, "_blank").focus();
  location.href = "index.html";
}
