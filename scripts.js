// Mock Data for Dashboard
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("issues-count").textContent = "1,247";
  document.getElementById("active-users").textContent = "8,432";
  document.getElementById("aqi").textContent = "45 (Good)";
  document.getElementById("co2-saved").textContent = "2.3T";

  const activityFeed = document.getElementById("activity-feed");
  activityFeed.innerHTML = `
    <li class="bg-white p-4 rounded shadow">Pothole reported on Main Street - 2 hours ago</li>
    <li class="bg-white p-4 rounded shadow">New bike lane opened on Oak Avenue - 1 day ago</li>
    <li class="bg-white p-4 rounded shadow">Sarah K. reached 500 impact points! - 3 days ago</li>
  `;
});

// Handle Report Form Submission
const reportForm = document.getElementById("reportForm");
if (reportForm) {
  reportForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Ideally, save data to Firebase or localStorage here
    // For now, just show success message
    document.getElementById("successMessage").classList.remove("hidden");
    reportForm.reset();
  });
}

