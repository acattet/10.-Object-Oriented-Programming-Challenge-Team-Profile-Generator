const Employee = require("../lib/Employee.js");
const Engineer = require("../lib/Engineer.js");

test("new engineer", () => {
    const engineer = new Engineer("Name", "2", "email", "Github");

    expect(engineer.name).toBe("Name");
    expect(engineer.id).toBe("2");
    expect(engineer.email).toBe("email");
    expect(engineer.github).toBe("Github");
    expect(engineer.getRole()).toBe("Engineer");
});

