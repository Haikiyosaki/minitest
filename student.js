let btnCreate = document.getElementById("btnCreate");
        btnCreate.addEventListener("click", function () {
            alert("bao click")
            let studentId = document.getElementById("studentID").value;
            let listStudent = JSON.parse(localStorage.getItem("listStudent"));
            let exist = false;
            if (listStudent != null) {
                for (const Student of listStudent) {
                    if (Student.StudentId == studentId) {
                        exist = true;
                        break;
                    }
                }
            }
            if (exist) {
                editStudent();
            } else {
                createStudent();
            }
        });
        function createStudent() {
            let listStudent = JSON.parse(localStorage.getItem("listStudent"));
            if (listStudent == null) {
                listStudent = [];
            }
            let StudentId = document.getElementById("StudentId").value;
            let StudentName = document.getElementById("name").value;
            let StudentEmail = document.getElementById("email").value;
            let StudentPhone = document.getElementById("sdt").value;
            let StudentAddress = document.getElementById("address").value;
            let Studentsex = document.getElementsById("sex").value;
            let StudentNew = { "StudentId": StudentId, "StudentName": StudentName, "StudentEmail": StudentEmail,"StudentPhone": StudentPhone,
                            "StudentAddress": StudentAddress, "StudentSex":Studentsex };
            listStudent.push(StudentNew);
            localStorage.setItem("listStudent", JSON.stringify(listStudent));
            readListStudent();
        }
        function readListStudent(){
            let listStudent = JSON.parse(localStorage.getItem("listStudent"));
            if (listStudent == null) {
                listStudent = [];
            }
            let tableBody = document.getElementById("tableBody");
            tableBody.innerHTML = '';
            listProduct.forEach((Student, index) => {
                tableBody.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${Student.StudentName}</td>
                    <td>${Student.StudentEmail}</td>
                    <td>${Student.StudentPhone}</td>
                    <td>${Student.StudentAddress}</td>
                    <td>
                        <button onclick="updateStudent('${Student.StudentId}')">Edit</button>
                        <button onclick="deleteStudent('${Student.StudentId}')">Delete</button>
                    </td>
                </tr>`
            });
        }
        readListStudent();
        function updateStudent(StudentId) {
            let listStudent = JSON.parse(localStorage.getItem("listStudent"));
            let StudentUpdate = listStudent.filter(Student => {
                if (Student.StudentId == StudentId) {
                    return Student;
                }
            })
            document.getElementById("studentID").value = StudentUpdate[0].StudentId;
            document.getElementById("name").value = StudentUpdate[0].StudentName;
            document.getElementById("email").value = StudentUpdate[0].StudentEmail;
            document.getElementById("sdt").value = StudentUpdate[0].StudentPhone
            document.getElementById("address").value = StudentUpdate[0].StudentAddress;
            document.getElementById("sex").value = StudentUpdate[0].StudentSex;
        }
        function editStudent() {
            let listStudent = JSON.parse(localStorage.getItem("listStudent"));
            document.getElementById("studentID").value = StudentUpdate[0].StudentId;
            document.getElementById("name").value = StudentUpdate[0].StudentName;
            document.getElementById("email").value = StudentUpdate[0].StudentEmail;
            document.getElementById("sdt").value = StudentUpdate[0].StudentPhone
            document.getElementById("address").value = StudentUpdate[0].StudentAddress;
            document.getElementById("sex").value = StudentUpdate[0].StudentSex;
            let listStudentUpdate = listStudent.map(Student => {
                if (Student.StudentId == StudentId) {
                    Student.StudentName = StudentName;
                    Student.price = price;
                }
                return Student;
            });
            localStorage.setItem("listStudent", JSON.stringify(listStudentUpdate));
            readListStudent();
        }

        function deleteStudent(StudentId) {
            let listStudent = JSON.parse(localStorage.getItem("listStudent"));
            for (let i = 0; i < listStudent.length; i++) {
                if (listStudent[i].StudentId == StudentId) {
                    listStudent.splice(i, 1);
                    break;
                }
            }
            localStorage.setItem("listStudent", JSON.stringify(listStudent));
            readListStudent();
        }