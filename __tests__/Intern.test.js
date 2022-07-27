const Employee = require("../lib/Employee.js");
const Intern = require("../lib/Intern.js");

test("new intern", () => {
    const intern = new Intern("Name", "2", "email", "School");

    expect(intern.name).toBe("Name");
    expect(intern.id).toBe("2");
    expect(intern.email).toBe("email");
    expect(intern.school).toBe("School");
    expect(intern.getRole()).toBe("Intern");
});