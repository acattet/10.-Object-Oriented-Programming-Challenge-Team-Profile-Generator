const Employee = require("../lib/Employee.js");

test("new employee", () => {
    const employee = new Employee("Name", "1", "email");

    expect(employee.name).toBe("Name");
    expect(employee.id).toBe("1");
    expect(employee.email).toBe("email");
    expect(employee.getRole()).toBe("Employee");
});
