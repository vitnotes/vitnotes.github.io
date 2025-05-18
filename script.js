// Function to Generate Table from Courses Array
document.addEventListener("DOMContentLoaded", function() {
    let tableBody = document.getElementById("tableBody");
    let departmentMap = {
        "FOC": "NPTEL",
        "ESP": "Foreign Languages (FLE)",
        "FRE": "Foreign Languages (FLE)",
        "GER": "Foreign Languages (FLE)",
        "JAP": "Foreign Languages (FLE)"
    };
    let lastDepartment = "";

    courses.sort((a, b) => a.code.localeCompare(b.code)); // Sort Alphabetically

    courses.forEach(course => {
        let deptCode = course.code.substring(1, 4); // Extract ECE / CSE
        let department = departmentMap[deptCode] || deptCode;

        // Add Department Header if New 
        if (department !== lastDepartment) {
            let tr = document.createElement("tr");
            tr.innerHTML = `<td colspan="3" class="subheading">${department}</td>`;
            tableBody.appendChild(tr);
            lastDepartment = department;
        }

        // Add Course Row
        let tr = document.createElement("tr");
        let link = `https://github.com/vitnotes/${course.code}`; // Auto-generate Link

        tr.innerHTML = `
            <td>${course.code}</td>
            <td>${course.title}</td>
            <td><a href="${link}" target="_blank">Link</a></td>
        `;
        tableBody.appendChild(tr);
    });
});

// Function to Search Courses
function searchTable() {
    let input = document.getElementById("searchInput").value.toUpperCase();
    let rows = document.querySelectorAll("#courseTable tbody tr");

    rows.forEach(row => {
        let text = row.innerText.toUpperCase();
        let isSubheading = row.classList.contains("subheading");
        
        if (text.includes(input) && !isSubheading) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }