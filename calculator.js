// calculator.js
document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const courseKey = params.get("course");
  if (!courseKey) {
    showError("No course specified");
    return;
  }

  const courseData = {
    FirstAid: { name: "First Aid", desc: "First aid awareness and basic life support", base: 1500 },
    Sewing: { name: "Sewing", desc: "Alterations & new garment tailoring", base: 1500 },
    Landscaping: { name: "Landscaping", desc: "Landscaping services for gardens", base: 1500 },
    LifeSkills: { name: "Life Skills", desc: "Skills to navigate life necessities", base: 1500 },
    ChildMinding: { name: "Child Minding", desc: "Basic child & baby care", base: 750 },
    Cooking: { name: "Cooking", desc: "Cooking nutritious family meals", base: 750 },
    GardenMaintenance: { name: "Garden Maintenance", desc: "Watering, pruning, planting", base: 750 }
  };

  const data = courseData[courseKey];
  if (!data) {
    showError("Course not found: " + courseKey);
    return;
  }

  // Populate page
  document.getElementById("page-title").textContent = data.name + " | Empowering the Nation";
  document.getElementById("course-name").textContent = data.name;
  document.getElementById("course-description").textContent = data.desc;
  document.getElementById("course-price").textContent = data.base;
  document.getElementById("meta-desc").setAttribute("content", data.desc);
  document.getElementById("meta-keys").setAttribute("content", data.name + ", course, training");

  // Fee calculator
  const btn = document.getElementById("calcBtn");
  btn.addEventListener("click", function () {
    const num = parseInt(document.getElementById("numStudents").value, 10);
    if (!num || num < 1) {
      showError("Please enter a valid number of students (at least 1).");
      return;
    }
    const fee = num * data.base;
    document.getElementById("feeResult").textContent = `Total Fee: R ${fee}`;
  });
});
// common.js
function showError(msg) {
  alert(msg);
  // Or render an error element on page if you prefer instead of alert
}

function goBack() {
  window.history.back();
}
