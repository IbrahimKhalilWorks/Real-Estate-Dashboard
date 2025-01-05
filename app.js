document.addEventListener("DOMContentLoaded", function () {
  
  const ctx = document.getElementById("revenueChart").getContext("2d"); 
  const initialData = [
    { month: "April", income: 0, expense: 0 },
    { month: "May", income: 0, expense: 0 },
    { month: "June", income: 0, expense: 0 },
    { month: "July", income: 0, expense: 0 },
    { month: "August", income: 0, expense: 0 },
    { month: "Sept", income: 0, expense: 0 },
    { month: "Oct", income: 0, expense: 0 },
  ];

  const finalData = [
    { month: "April", income: 5000, expense: 10000 },
    { month: "May", income: 3000, expense: 15000 },
    { month: "June", income: 8000, expense: 30000 },
    { month: "July", income: 4000, expense: 35000 },
    { month: "August", income: 18000, expense: 12000 },
    { month: "Sept", income: 6000, expense: 28000 },
    { month: "Oct", income: 7000, expense: 25000 },
  ];

  const chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: initialData.map((d) => d.month),
      datasets: [
        {
          label: "Income",
          data: initialData.map((d) => d.income),
          backgroundColor: "#6e07f3",
        },
        {
          label: "Expense",
          data: initialData.map((d) => d.expense),
          backgroundColor: "#2c2c9f",
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      animation: {
        duration: 2000,
        easing: "easeInOutQuad",
      },
      plugins: {
        tooltip: {
          backgroundColor: "#333", // Tooltip background color
          titleColor: "#ffffff", // Tooltip title color
          bodyColor: "#cccccc", // Tooltip body text color
          borderColor: "#6e07f3", // Tooltip border color
          borderWidth: 1, // Tooltip border width
          cornerRadius: 5, // Rounded corners
          caretSize: 8, // Arrow size
          padding: 10, // Padding inside the tooltip
          displayColors: false, // Hide the colored boxes
        },
      },
    },
  });

  setTimeout(() => {
    chart.data.datasets[0].data = finalData.map((d) => d.income);
    chart.data.datasets[1].data = finalData.map((d) => d.expense);
    chart.update();
  }, 100);
});
const ctx = document.getElementById("expiringLeasesChart").getContext("2d");
const expiringLeasesChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Expiring Soon", "Long-term"],
    datasets: [
      {
        label: "Expiring Leases",
        data: [30, 70],
        backgroundColor: ["#6e07f3", "#2c2c9f"],
        hoverBackgroundColor: ["#5c06d1", "#1f1f7d"],
      },
    ],
  },
  options: {
    responsive: false, // Disable responsiveness
    cutoutPercentage: 60, // Adjust the donut hole size
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}%`,
        },
      },
    },
  },
});

document
  .getElementById("hamburger-icon")
  .addEventListener("click", function () {
    const navbarLinks = document.getElementById("navbar-links");
    navbarLinks.classList.toggle("active");
  });



  
  document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.getElementById("toggle-btn");
    const mainContent = document.querySelector(".main-content");

    toggleBtn.addEventListener("click", function () {
      sidebar.classList.toggle("collapsed");
      sidebar.classList.toggle("active");
      mainContent.classList.toggle("expanded");
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener("click", function (event) {
      const isClickInsideSidebar = sidebar.contains(event.target);
      const isClickInsideToggleBtn = toggleBtn.contains(event.target);

      if (
        !isClickInsideSidebar &&
        !isClickInsideToggleBtn &&
        window.innerWidth <= 768
      ) {
        sidebar.classList.remove("active");
      }
    });

    // Handle window resize
    window.addEventListener("resize", function () {
      if (window.innerWidth > 768) {
        sidebar.classList.remove("active");
      }
    });
  });
