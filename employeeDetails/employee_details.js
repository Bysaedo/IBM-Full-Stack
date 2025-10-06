const employees = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    department: "IT",
    salary: 50000,
    specialization: "JavaScript",
  },
  {
    id: 2,
    name: "Alice Smith",
    age: 28,
    department: "HR",
    salary: 45000,
    specialization: "Python",
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 35,
    department: "Finance",
    salary: 60000,
    specialization: "Java",
  },
];

function displayEmployees() {
  const totalEmployees = employees
    .map(
      (employee) =>
        `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary} </p>`
    )
    .join("");
  document.getElementById("employeesDetails").innerHTML = totalEmployees;
}
/*
The map method iterates through each employee in the employees array. For each employee, it constructs a string template literal <p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>, encapsulated within <p> tags, to represent employee details.

The resulting array of constructed strings is joined into a single string using join(''). This concatenation merges all the HTML-formatted employee details into one continuous string without separators.

The map method stores employees' details in the variable totalEmployees, which shows details in the <div> element (with the help of an ID) displays employee information on the webpage.
*/
function calculateTotalSalaries() {
  const totalSalaries = employees.reduce(
    (acc, employee) => acc + employee.salary,
    0
  );
  alert(`Total Salaries: $${totalSalaries}`);
}

/*
The reduce method iterates through each employee and accumulates their salaries to calculate the total. The initial value of the accumulator (acc) is 0.

The reduce method continuously accumulates these salaries by adding each employee's salary to the previous total.

Each employee's salary (employee.salary) is added to the accumulator (acc). After calculating the total sum of salaries, an alert dialog box is triggered using alert(). It showcases the total calculated salaries with the message "Total Salaries: $" followed by the computed totalSalaries variable value. This alert displays the overall sum of all employee salaries.
*/

function displayHREmployees() {
  const hrEmployees = employees.filter(
    (employee) => employee.department === "HR"
  );
  const hrEmployeesDisplay = hrEmployees
    .map(
      (employee, index) =>
        `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    )
    .join("");
  document.getElementById("employeesDetails").innerHTML = hrEmployeesDisplay;
}
/*
The above code filters the employees array using the filter array method, isolating and collecting employees whose department property matches 'HR' into a new array named hrEmployees.

It then displays the matched details on the front page as shown in displayEmployees function using map method within <div> using its ID employeesDetails.
*/

function findEmployeeById(employeeId) {
  const foundEmployee = employees.find(
    (employee) => employee.id === employeeId
  );
  if (foundEmployee) {
    document.getElementById(
      "employeesDetails"
    ).innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
  } else {
    document.getElementById("employeesDetails").innerHTML =
      "No employee has been found with this ID";
  }
}
/*
This code uses the find method to locate an employee in the employees array whose ID matches the provided employee ID, storing the found employee object in the foundEmployee variable.

An if statement is employed to see whether the details for that particular ID are found and display details accordingly.
 */
function findBySpecialization(employeeSpecialization) {
  const foundEmployee = employees.find(
    (employee) => employee.specialization === employeeSpecialization
  );
  if (foundEmployee) {
    document.getElementById(
      "employeesDetails"
    ).innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - ${foundEmployee.specialization}</p>`;
  } else {
    document.getElementById("employeesDetails").innerHTML =
      "No employee has been found with this Specialization";
  }
}
