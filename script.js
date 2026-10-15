const form = document.getElementById("form-parkir");
const platInput = document.getElementById("plat");
const jenisInput = document.getElementById("jenis");
const hint = document.getElementById("hint-plat");
const platTeks = document.getElementById("plat-teks");
const platMasa = document.getElementById("plat-masa");
const status = document.getElementById("status");

// Pratinjau plat nomor secara langsung saat mengetik
platInput.addEventListener("input", () => {
  platInput.value = platInput.value.toUpperCase();
  platTeks.textContent = platInput.value.trim() || "B 1234 XYZ";
  platInput.classList.remove("error");
  hint.classList.remove("error");
  hint.textContent = "Wajib diisi";
});

form.addEventListener("submit", (e) => {
  e.preventDefault(); // cegah halaman reload
  status.hidden = true;

  const plat = platInput.value.trim();
  const jenis = jenisInput.value;

  // 1) Validasi: nomor polisi kosong -> tolak submit + alert()
  if (plat === "") {
    platInput.classList.add("error");
    hint.classList.add("error");
    hint.textContent = "Nomor polisi tidak boleh kosong";
    alert("Nomor Polisi wajib diisi sebelum mendaftar!");
    platInput.focus();
    return;
  }

  // 2) Saat submit: konfirmasi dengan confirm()
  const setuju = confirm(`Daftarkan plat ${plat} sebagai ${jenis}?`);
  if (!setuju) return;

  status.textContent = `Berhasil! ${plat} (${jenis}) terdaftar untuk akses parkir kampus.`;
  status.hidden = false;
  form.reset();
  platTeks.textContent = "B 1234 XYZ";
});
