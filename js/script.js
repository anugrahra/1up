// Update
document.getElementById("updateData").innerHTML = updateData;
document.getElementById("updateDataMobile").innerHTML = updateData;
document.getElementById("labelAtas").innerHTML = "Tahun " + currentYear;

 // Inisialisasi chart
 let produksiChart = null;
 let koagulanChart = null;
 let disinfektanChart = null;

 // Fungsi untuk menghancurkan chart jika ada
 function destroyChartsIfExist() {
     if (produksiChart) {
         produksiChart.destroy();
         produksiChart = null;
     }
     if (koagulanChart) {
         koagulanChart.destroy();
         koagulanChart = null;
     }
     if (disinfektanChart) {
         disinfektanChart.destroy();
         disinfektanChart = null;
     }
 }

 // Fungsi untuk membuat chart
 function createChart(elementId, labels, data, label, borderColor, backgroundColor) {
     const ctx = document.getElementById(elementId).getContext("2d");
     return new Chart(ctx, {
         type: "bar",
         data: {
             labels: labels,
             datasets: [
                 {
                     label: label,
                     data: data,
                     borderColor: borderColor,
                     backgroundColor: backgroundColor,
                     borderWidth: 3,
                 },
             ],
         },
         options: {
             scales: {
                 y: {
                     beginAtZero: true,
                 },
             },
         },
     });
 }

 // Inisialisasi chart pertama kali
 produksiChart = createChart(
     "produksiHome",
     dataProduksiTahun[currentYear].labelProduksi,
     dataProduksiTahun[currentYear].dataProduksi,
     `Produksi Air Minum (${currentYear})`,
     undefined,
     undefined
 );

 koagulanChart = createChart(
     "koagulanHome",
     dataPacTahun[currentYear].labelPac,
     dataPacTahun[currentYear].dataPac,
     "PAC (kg)",
     "#FFA500",
     "rgba(255,165,0,0.5)"
 );

 disinfektanChart = createChart(
     "disinfektanHome",
     dataKaporitTahun[currentYear].labelKaporit,
     dataKaporitTahun[currentYear].dataKaporit,
     "Kaporit (kg)",
     "#E5E4E2",
     "rgba(229,228,226,0.5)"
 );

 // Fungsi untuk memperbarui chart berdasarkan rentang yang dipilih
 document.getElementById("submitButton").addEventListener("click", function() {
     const dariBulan = parseInt(document.getElementById("daribulan").value) - 1;  // Indeks awal
     const sampaiBulan = parseInt(document.getElementById("sampaibulan").value) - 1;  // Indeks akhir
     const tahun = document.getElementById("tahun").value;  // Ambil tahun yang dipilih

     // ganti tahun current
     currentYear = tahun;
     console.log(currentYear);

     // Validasi input
     if (isNaN(dariBulan) || isNaN(sampaiBulan) || dariBulan < 0 || sampaiBulan < 0 || dariBulan > sampaiBulan) {
         myPopup.show();
         return;
     }

     // Potong data dan label berdasarkan rentang yang dipilih
     const newLabels = dataProduksiTahun[currentYear].labelProduksi.slice(dariBulan, sampaiBulan + 1).map(label => label + " " + tahun);
     const newDataProduksi = dataProduksiTahun[currentYear].dataProduksi.slice(dariBulan, sampaiBulan + 1);
     const newDataPac = dataPacTahun[currentYear].dataPac.slice(dariBulan, sampaiBulan + 1);
     const newDataKaporit = dataKaporitTahun[currentYear].dataKaporit.slice(dariBulan, sampaiBulan + 1);

     // update label di atas
     function getBulan(nomorBulan) {

      nomorBulan += 1;

      let namaBulan;

      if (nomorBulan === 1) {
        namaBulan = "Januari";
      } else if (nomorBulan === 2) {
        namaBulan = "Februari";
      } else if (nomorBulan === 3) {
        namaBulan = "Maret";
      } else if (nomorBulan === 4) {
        namaBulan = "April";
      } else if (nomorBulan === 5) {
        namaBulan = "Mei";
      } else if (nomorBulan === 6) {
        namaBulan = "Juni";
      } else if (nomorBulan === 7) {
        namaBulan = "Juli";
      } else if (nomorBulan === 8) {
        namaBulan = "Agustus";
      } else if (nomorBulan === 9) {
        namaBulan = "September";
      } else if (nomorBulan === 10) {
        namaBulan = "Oktober";
      } else if (nomorBulan === 11) {
        namaBulan = "November";
      } else if (nomorBulan === 12) {
        namaBulan = "Desember";
      } else {
        namaBulan = "Bulan tidak valid";
      }

      return namaBulan;
    }

    let fromBulan = getBulan(dariBulan);
    let toBulan = getBulan(sampaiBulan);
    
     document.getElementById("labelAtas").innerHTML = fromBulan + ' - ' + toBulan + ' ' + tahun;

     // Hancurkan chart lama jika ada
     destroyChartsIfExist();

     // Buat ulang chart dengan data baru
     produksiChart = createChart(
         "produksiHome",
         newLabels,
         newDataProduksi,
         "Produksi Air Minum (m3) " + tahun,
         undefined,
         undefined
     );

     koagulanChart = createChart(
         "koagulanHome",
         newLabels,
         newDataPac,
         "PAC (kg) " + tahun,
         "#FFA500",
         "rgba(255,165,0,0.5)"
     );

     disinfektanChart = createChart(
         "disinfektanHome",
         newLabels,
         newDataKaporit,
         "Kaporit (kg) " + tahun,
         "#E5E4E2",
         "rgba(229,228,226,0.5)"
     );

     // Hitung total dan rata-rata untuk data yang telah difilter
     const sumProduksi = newDataProduksi.reduce((acc, val) => acc + val, 0);
     const rataProduksi = sumProduksi / newDataProduksi.length;
     const sumJumlahHari = dataProduksiTahun[currentYear].jumlahHari.slice(dariBulan, sampaiBulan + 1).reduce((acc, val) => acc + val, 0);
     const kapasitasDimanfaatkan = sumProduksi / sumJumlahHari / 24 / 3.6;
     const sumWaktuOperasi = dataProduksiTahun[currentYear].waktuOperasi.slice(dariBulan, sampaiBulan + 1).reduce((acc, val) => acc + val, 0);
     const rataWaktuOperasi = sumWaktuOperasi / sumJumlahHari;
     const produksiPerHari = sumProduksi / sumJumlahHari;

     const sumPac = newDataPac.reduce((acc, val) => acc + val, 0);
     const rataPac = sumPac / newDataPac.length;
     const pacPerHari = sumPac / sumJumlahHari;
     const dosisPac = (sumPac * 1000000) / (sumProduksi * 1000);

     const sumKaporit = newDataKaporit.reduce((acc, val) => acc + val, 0);
     const rataKaporit = sumKaporit / newDataKaporit.length;
     const kaporitPerHari = sumKaporit / sumJumlahHari;
     const dosisKaporit = (sumKaporit * 1000000) / (sumProduksi * 1000);

     // Perbarui elemen HTML dengan hasil perhitungan terbaru
    const elementIds = [
      "kapasitasDimanfaatkan",
      "rataWaktuOperasi",
      "sumProduksi",
      "rataProduksi",
      "produksiPerHari",
      "sumPac",
      "pacPerHari",
      "rataPac",
      "dosisPac",
      "sumKaporit",
      "kaporitPerHari",
      "rataKaporit",
      "dosisKaporit"
    ];

    // Daftar nilai yang ingin diformat
    const values = [
      kapasitasDimanfaatkan,
      rataWaktuOperasi,
      sumProduksi,
      rataProduksi,
      produksiPerHari,
      sumPac,
      pacPerHari,
      rataPac,
      dosisPac,
      sumKaporit,
      kaporitPerHari,
      rataKaporit,
      dosisKaporit
    ];

    // Memperbarui konten setiap elemen dengan nilai yang sudah diformat
    elementIds.forEach((id, index) => {
      document.getElementById(id).innerHTML = formatNumber(values[index]);
    });
 });