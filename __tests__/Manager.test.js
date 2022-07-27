const Employee = require("../lib/Employee.js");
const Manager = require("../lib/Manager.js");

test("new manager", () => {
    const manager = new Manager("Name", "4", "email", "10");

    expect(manager.name).toBe("Name");
    expect(manager.id).toBe("4");
    expect(manager.email).toBe("email");
    expect(manager.officeNumber).toBe("10");
    expect(manager.getRole()).toBe("Manager");
});