document.addEventListener("DOMContentLoaded", function () {
    const courseForm = document.getElementById("courseForm");
    const enrollmentForm = document.getElementById("enrollmentForm");
    const courseList = document.getElementById("courseList");
    const enrollmentList = document.getElementById("enrollmentList");
    const dashboardList = document.getElementById("dashboardList");
    const courseSelect = document.getElementById("courseSelect");

    const courses = [];
    const enrollments = [];

    courseForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const courseName = document.getElementById("courseName").value;
        const course = { id: courses.length + 1, name: courseName };
        courses.push(course);
        updateCourseList();
        updateCourseSelect();
        courseForm.reset();
    });

    enrollmentForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const studentName = document.getElementById("studentName").value;
        const courseId = parseInt(document.getElementById("courseSelect").value);
        const enrollment = { studentName, courseId };
        enrollments.push(enrollment);
        updateEnrollmentList();
        updateDashboard();
        enrollmentForm.reset();
    });

    function updateCourseList() {
        courseList.innerHTML = "";
        courses.forEach(course => {
            const li = document.createElement("li");
            li.textContent = course.name;
            courseList.appendChild(li);
        });
    }

    function updateCourseSelect() {
        courseSelect.innerHTML = "";
        courses.forEach(course => {
            const option = document.createElement("option");
            option.value = course.id;
            option.textContent = course.name;
            courseSelect.appendChild(option);
        });
    }

    function updateEnrollmentList() {
        enrollmentList.innerHTML = "";
        enrollments.forEach(enrollment => {
            const course = courses.find(c => c.id === enrollment.courseId);
            const li = document.createElement("li");
            li.textContent = `${enrollment.studentName} enrolled in ${course.name}`;
            enrollmentList.appendChild(li);
        });
    }

    function updateDashboard() {
        dashboardList.innerHTML = "";
        courses.forEach(course => {
            const li = document.createElement("li");
            const courseEnrollments = enrollments.filter(e => e.courseId === course.id);
            li.textContent = `${course.name} - ${courseEnrollments.length} students enrolled`;
            dashboardList.appendChild(li);
        });
    }
});
