// Login

const loginForm = document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit", function(e){

        e.preventDefault();

        const username = document.getElementById("username").value;

        const password = document.getElementById("password").value;

        if(username === "admin" && password === "admin123"){

            alert("Login Successful");

            window.location.href = "dashboard.html";

        }else{

            alert("Invalid Login Details");

        }

    });

}


// Employee Management

const employeeForm = document.getElementById("employeeForm");

if(employeeForm){

    employeeForm.addEventListener("submit", function(e){

        e.preventDefault();

        const name = document.getElementById("name").value;

        const department = document.getElementById("department").value;

        const email = document.getElementById("email").value;

        const table = document.getElementById("employeeTable");

        const row = `
            <tr>
                <td>${name}</td>
                <td>${department}</td>
                <td>${email}</td>
            </tr>
        `;

        table.innerHTML += row;

        employeeForm.reset();

    });

}