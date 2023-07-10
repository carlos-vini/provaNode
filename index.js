const http = require('http');
const os = require('os');
const url = require('url');
const path = require('path');
const fs = require('fs');

const PORT = 3000;

/////////// Atividade 01

// let objeto = {
//     sistema: os.type(),
//     memoria: os.freemem(),
//     diretorio: os.homedir(),
// };

// const server = http.createServer((req, res) => {
//     if(req.url === '/info'){
//         res.writeHead(200, {'Content-Type':'application/json'});

//         const json = JSON.stringify(objeto);
//         res.write(json);
//         res.end();
//     };
// });

// server.listen(PORT, () => {
//     console.log(`O servidor foi aberto na porta ${PORT}`);
// });

/////////// Atividade 02

// const link = 'https://al.senai.br/cursos/tecnico-em-informatica-para-internet/planodecurso.pdf';
// const dir = path.dirname(link);
// const ext = path.extname(link);

// console.log(`O diretório é: ${dir}`);
// console.log(`A extensão é: ${ext}`);

// console.log(path.relative(path.basename(link), link));

// console.log(path.parse(link));


/////////// Atividade 03

// const myURL = new URL('https://nodejs.org/api/url.html#url_new_url_input_base');
// let Url = {
//     protocol: myURL.protocol,
//     slashes: myURL.slashes,
//     auth: myURL.auth,
//     host: myURL.host,
//     port: myURL.port,
//     hostname: myURL.hostname,
//     hash: myURL.hash,
//     search: myURL.search,
//     query: myURL.query,
//     pathname: myURL.pathname,
//     path: myURL.path,
//     href: myURL.href,
// };

// console.log(Url);

/////////// Atividade 04    

// fs.rename('arquivo.txt', 'novoArquivo.txt', (err) =>{
//     if(!err){
//         console.log('Renamed')
//     }
// });

/////////// Atividade 05

// console.log(os.cpus());