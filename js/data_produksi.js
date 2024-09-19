const labelProduksi = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus"];
const jumlahHari = [31, 29, 31, 30, 31, 30, 31, 31];
const dataProduksi = [139606, 141034, 144271, 126536, 135645, 120959, 131959, 134125];
const waktuOperasi = [677, 654, 653, 614, 683, 636, 679, 699];

// // rata-rata jumlah produksi
// const sumProduksi = dataProduksi.reduce((acc, val) => acc + val, 0);
// const rataProduksi = sumProduksi / dataProduksi.length;

// // kapasitas dimanfaatkan
// const sumJumlahHari = jumlahHari.reduce((acc, val) => acc + val, 0);
// const kapasitasDimanfaatkan = sumProduksi / sumJumlahHari / 24 / 3.6;

// // waktu operasi
// const sumWaktuOperasi = waktuOperasi.reduce((acc, val) => acc + val, 0);
// const rataWaktuOperasi = sumWaktuOperasi / sumJumlahHari;

// document.getElementById("kapasitasDimanfaatkan").innerHTML =
//   kapasitasDimanfaatkan.toFixed(2);
// document.getElementById("rataWaktuOperasi").innerHTML =
//   rataWaktuOperasi.toFixed(2);
// document.getElementById("sumProduksi").innerHTML = sumProduksi;
// document.getElementById("rataProduksi").innerHTML = rataProduksi.toFixed(2);
