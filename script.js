// produksi
const produksiHome = document.getElementById("produksiHome");

new Chart(produksiHome, {
  type: "bar",
  data: {
    labels: ["Januari", "Februari"],
    datasets: [
      {
        label: "Produksi Air Minum (m3)",
        data: [139606, 141034],
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
    labels: ["Januari", "Februari"],
    datasets: [
      {
        label: "PAC (kg)",
        data: [2950, 3900],
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
    labels: ["Januari", "Februari"],
    datasets: [
      {
        label: "Kaporit (kg)",
        data: [420, 405],
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
