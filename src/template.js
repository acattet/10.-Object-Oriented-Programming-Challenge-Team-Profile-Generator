const thirdEye = employee => {
    switch(employee.role) {
        case "Manager":
        return `Office number: ${employee.officeNumber}`;
        case "Engineer":
        return `Github: <a href="https://github.com/${employee.github}">${employee.github}</a>`;
        case "Intern":
        return `School: ${employee.school}`;
    }
};

const generateMembers = employeeArray => {
    sectionHTML = ``;

    for(i = 0; i < employeeArray.length; i++) {
        sectionHTML += `<article>
        <section>
        <h2>${employeeArray[i].name}</h2>
        <h3>${employeeArray[i].role}</h3>
        </section>
        <div class="content">
        <p>ID: ${employeeArray[i].id}</p>
        <p>Email: <a href="mailto:${employeeArray[i].email}">${employeeArray[i].email}</a></p>
        <p>` + thirdEye(employeeArray[i]) + `</p>
        </div>
        </article>`;
    }

    return sectionHTML;
};

module.exports = templateData => {
    return `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>My Team</header>
        <main>
            ${generateMembers(templateData)}
        </main>
    </body>
</html>`;
};