//update
let updateData = "1 Mei 2024";
document.getElementById("updateData").innerHTML = updateData;
document.getElementById("updateDataMobile").innerHTML = updateData;

// produksi
const produksiHome = document.getElementById("produksiHome");

new Chart(produksiHome, {
  type: "bar",
  data: {
    labels: labelProduksi,
    datasets: [
      {
        label: "Produksi Air Minum (m3)",
        data: dataProduksi,
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

// koagulan
const koagulanHome = document.getElementById("koagulanHome");

new Chart(koagulanHome, {
  type: "bar",
  data: {
    labels: labelPac,
    datasets: [
      {
        label: "PAC (kg)",
        data: dataPac,
        borderColor: "#FFA500",
        backgroundColor: "rgba(255,165,0,0.5)",
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

// disinfektan
const disinfektanHome = document.getElementById("disinfektanHome");

new Chart(disinfektanHome, {
  type: "bar",
  data: {
    labels: labelKaporit,
    datasets: [
      {
        label: "Kaporit (kg)",
        data: dataKaporit,
        borderColor: "#E5E4E2",
        backgroundColor: "rgba(229,228,226,0.5)",
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
