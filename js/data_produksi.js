const labelProduksi = ["Januari", "Februari", "Maret", "April"];
const jumlahHari = [31, 29, 31, 30];
const dataProduksi = [139606, 141034, 144271, 124996];
const waktuOperasi = [677, 654, 653, 614];

// rata-rata jumlah produksi
const sumProduksi = dataProduksi.reduce((acc, val) => acc + val, 0);
const rataProduksi = sumProduksi / dataProduksi.length;

// kapasitas dimanfaatkan
const sumJumlahHari = jumlahHari.reduce((acc, val) => acc + val, 0);
const kapasitasDimanfaatkan = sumProduksi / sumJumlahHari / 24 / 3.6;

// waktu operasi
const sumWaktuOperasi = waktuOperasi.reduce((acc, val) => acc + val, 0);
const rataWaktuOperasi = sumWaktuOperasi / sumJumlahHari;

document.getElementById("kapasitasDimanfaatkan").innerHTML = (
  (kapasitasDimanfaatkan * 100) /
  100
).toFixed(2);
document.getElementById("rataWaktuOperasi").innerHTML = (
  (rataWaktuOperasi * 100) /
  100
).toFixed(2);
document.getElementById("sumProduksi").innerHTML = sumProduksi;
document.getElementById("rataProduksi").innerHTML = rataProduksi;
