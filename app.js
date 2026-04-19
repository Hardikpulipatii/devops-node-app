const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.write(`
    <html>
      <head>
        <title>DevOps Internship Project</title>
        <style>
          body {
            font-family: Arial;
            background: #0f172a;
            color: white;
            text-align: center;
            padding-top: 80px;
          }
          .card {
            background: #1e293b;
            padding: 30px;
            border-radius: 12px;
            display: inline-block;
            max-width: 650px;
          }
          h1 {
            color: #38bdf8;
          }
          .tag {
            background: #334155;
            padding: 6px 10px;
            border-radius: 6px;
            display: inline-block;
            margin: 5px;
            font-size: 14px;
          }
          hr {
            border: 0;
            border-top: 1px solid #334155;
            margin: 20px 0;
          }
        </style>
      </head>

      <body>
        <div class="card">
          <h1>DevOps Internship Project</h1>

          <p><b>Status:</b> Production Ready </p>
          <p><b>Environment:</b> Azure Virtual Machine</p>

          <hr>

          <p><b>Team Members (Interns):</b></p>
          <p><b>Intern 1:</b> Hardik</p>
          <p><b>Intern 2:</b> Ricky</p>

          <hr>

          <p><b>Cloud Components Used:</b></p>
          <span class="tag">Azure VM</span>
          <span class="tag">Virtual Network</span>
          <span class="tag">Subnet Configuration</span>
          <span class="tag">Inbound Rule (8080)</span>

          <hr>

          <p><b>Application Status:</b></p>
          <p>Node.js application is running successfully on port 8080</p>

          <hr>

          <p>
            This project demonstrates a basic DevOps workflow:
            Infrastructure setup, deployment, and application hosting on cloud.
          </p>
        </div>
      </body>
    </html>
  `);

  res.end();
});

server.listen(8080, () => {
  console.log("DevOps Internship App running on port 8080");
});
