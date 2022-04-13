
function generateEngineers(engArray) {
  if (!engArray) {
    return "";
  }
  return `
    ${engArray
    .map(({ engName, engId, engEmail, engGithub }) => {
      return `
      <section class="card">
        <div class="title">
          <h3>${engName}</h3>
          <div class="role"><i class="fa fa-desktop" aria-hidden="true"></i> Engineer</div>
        </div>
        <div class="body">
          <div class="item">ID: ${engId}</div>
          <div class="item">Email: <a href="mailto:${engEmail}">${engEmail}</a></div>
          <div class="item">GitHub: <a href="https://github.com/${engGithub}">${engGithub}</a></div>
        </div>
      </section>
      `;
    })
    .join("")}
  `;
}

function generateInterns(intArray) {
  if (!intArray) {
    return "";
  }
  return `
    ${intArray
    .map(({ internName, internId, internEmail, internSchool }) => {
      return `
      <section class="card">
        <div class="title">
          <h3>${internName}</h3>
          <div class="role"><i class="fa fa-graduation-cap" aria-hidden="true"></i> Intern</div>
        </div>
        <div class="body">
          <div class="item">ID: ${internId}</div>
          <div class="item">Email: <a href="mailto:${internEmail}">${internEmail}</a></div>
          <div class="item">School: ${internSchool}</div>
        </div>
      </section>
      `;
    })
    .join("")}
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
    <header id="header">
      <h1>My Team</h1>
    </header>
    <main class="container">
      <section class="card">
        <div class="title">
          <h3>${data.managerName}</h3>
          <div class="role"><i class="fa fa-briefcase" aria-hidden="true"></i> Manager</div>
        </div>
        <div class="body">
          <div class="item">ID: ${data.managerId}</div>
          <div class="item">Email: <a href="mailto:${data.managerEmail}">${data.managerEmail}</a></div>
          <div class="item">Office number: ${data.managerOfficeNum}</div>
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