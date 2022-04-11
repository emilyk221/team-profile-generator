
function generateEngineers(engArray) {
  if (!engArray) {
    return "";
  }
  return `
  <section>
    ${engArray
    .map(({ engName, engId, engEmail, engGithub }) => {
      return `
      <div>
        <h3>${engName}</h3>
        <div><i class="fa fa-desktop" aria-hidden="true"></i>Engineer</div>
      </div>
      <div>
        <div>ID: ${engId}</div>
        <div>Email: <a>${engEmail}</a></div>
        <div>Office number: ${engGithub}</div>
      </div>
      `;
    })
    .join("")}
  </section>
  `;
}

function generateInterns(intArray) {
  if (!intArray) {
    return "";
  }
  return `
  <section>
    ${intArray
    .map(({ internName, internId, internEmail, internSchool }) => {
      return `
      <div>
        <h3>${internName}</h3>
        <div><i class="fa fa-graduation-cap" aria-hidden="true"></i>Intern</div>
      </div>
      <div>
        <div>ID: ${internId}</div>
        <div>Email: <a>${internEmail}</a></div>
        <div>Office number: ${internSchool}</div>
      </div>
      `;
    })
    .join("")}
  </section>
  `;
}

function generateHTML(data) {
  return `
  <!DOCTYPE html>
  <html lang="en>

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
    <header>
      <h1>My Team</h1>
    </header>
    <main>
      <section>
        <div>
          <h3>${data.managerName}</h3>
          <div><i class="fa fa-briefcase" aria-hidden="true"></i>Manager</div>
        </div>
        <div>
          <div>ID: ${data.managerId}</div>
          <div>Email: <a>${data.managerEmail}</a></div>
          <div>Office number: ${data.managerOfficeNum}</div>
        </div>
      </section>
      ${generateEngineers(data.engineers)}
      ${generateInterns(data.interns)}
    </main>
  </body>
  </html>
  `;
}

module.exports = generateHTML;