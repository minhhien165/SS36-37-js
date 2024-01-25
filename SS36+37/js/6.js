function createStudent() {
    let studentId = document.getElementById('studentId').value;
    let studentName = document.getElementById('studentName').value;
    let age = parseInt(document.getElementById('age').value);
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;

    let isValid = validateStudentData(studentId, studentName, age, phone, email);

    if (isValid) {
        displayStudentInfo(studentId, studentName, age, phone, email);
    }
}

function validateStudentData(studentId, studentName, age, phone, email) {
    if (studentId.length !== 6) {
        alert('Student ID must be 6 characters.');
        return false;
    }

    if (studentName.trim() === '') {
        alert('Student Name cannot be empty.');
        return false;
    }

    if (age < 18) {
        alert('Age must be 18 or older.');
        return false;
    }

    let phoneRegex = /^\d{10}$/;
    if (!phone.match(phoneRegex)) {
        alert('Phone must be a valid Vietnamese phone number.');
        return false;
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
        alert('Email must be a valid email address.');
        return false;
    }

    return true;
}

function displayStudentInfo(studentId, studentName, age, phone, email) {
    let studentInfoDiv = document.getElementById('studentInfo');
    studentInfoDiv.innerHTML = '<h2>Student Information</h2>' +
        '<p><strong>Student ID:</strong> ' + studentId + '</p>' +
        '<p><strong>Student Name:</strong> ' + studentName + '</p>' +
        '<p><strong>Age:</strong> ' + age + '</p>' +
        '<p><strong>Phone:</strong> ' + phone + '</p>' +
        '<p><strong>Email:</strong> ' + email + '</p>';
}