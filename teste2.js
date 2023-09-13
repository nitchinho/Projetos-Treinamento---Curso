// // Armazene na variável 'jogosRecentes' apenas os jogos que foram lançados depois de 2000. Imprima os jogos recentes utilizando a função imprimirJogo.

// const jogos = [
//   { id: 1, nome: 'Galaxian', anoLancamento: 1979, plataforma: 'Fliperama' },
//   { id: 2, nome: 'Donkey Kong', anoLancamento: 1981, plataforma: 'Fliperama' },
//   { id: 3, nome: 'Ms. Pac-Man', anoLancamento: 1981, plataforma: 'Fliperama' },
//   { id: 4, nome: 'Payday 2 ', anoLancamento: 2011, plataforma: 'Xbox 360' },
//   { id: 5, nome: 'God of War 4', anoLancamento: 2020, plataforma: 'PS4' },
//   { id: 6, nome: 'Spider-Man: Miles Morales', anoLancamento: 2020, plataforma: 'PS4' },
// ];

// const verificaJogoRecente = (jogo) => jogo.anoLancamento > 2000;

// const imprimirJogo = (jogo) => {
//   const textoJogo = jogo.nome + ' - ' + jogo.plataforma;
//   console.log(textoJogo);
// };

// const jogosRecentes = jogos.filter(verificaJogoRecente);
// jogosRecentes.map(imprimirJogo);

// Carros do ano
// Crie um código para armazenar apenas os carros do ano. a variável "hoje" recebe a data atual do sistema. Armazene o ano atual na variável "anoAtual"

// const carros = [
//   { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
//   { marca: 'GM', modelo: 'Onix', anoFabricacao: 2018 },
//   { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
//   { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2023 },
// ];

// const hoje = new Date();
// const anoAtual = hoje.getFullYear();

// const carrosDoAno = carros.filter( carro => carro.anoFabricacao == anoAtual);
// console.log(carrosDoAno);

// Removendo elementos
// Remova "HTML" e "CSS" do array tecnologias e depois imprima cada elemento do array no terminal.

// const tecnologias = [
//   "JavaScript",
//   "HTML",
//   "CSS",
//   "React",
//   "Angular"
// ];


// tecnologias.splice(1,2);
//  tecnologias.map( (tecnologia) => {
//   console.log(tecnologia)
// });

// Inserindo uma notícia
// Qual alternativa completa o código abaixo para inserir 'novaNoticia' na primeira posição do array?

// const noticias = [
//   'Cyberpunk 2077: Ray Tracing será exclusivo Nvidia no lançamento ',
//   'Elon Musk planeja criar uma colônia de humanos em Marte até 2050 ',
// ];
// const novaNoticia = 'Among Us ganhará tradução em português do Brasil ';

// noticias[0] = novaNoticia;

// for (const noticia of noticias) {
//   console.log(noticia);
// }

// Média dos alunos
// Percorra o array 'alunos' e verifique baseado nas suas médias quem está aprovado, reprovado ou que precisa fazer a av4.

// const alunos = [
//   { nome: "José", av1: 10, av2: 5, av3: 7 },
//   { nome: "Ana", av1: 1, av2: 10, av3: 10 },
//   { nome: "Fernando", av1: 0, av2: 5, av3: 7 },
//   { nome: "Diego", av1: 10, av2: 2, av3: 8 },
// ];

// alunos.forEach(aluno => {
//   const media = (aluno.av1 + aluno.av2 + aluno.av3) / 3;

//   if ( media >= 7 ) {
//     console.log(aluno.nome + ' Aprovado!');
//   }else if ( media >= 6 ) {
//     console.log(aluno.nome + ' Fazer av4');
//   }else{
//     console.log(aluno.nome + ' Reprovado"');
//   }
// });

// Questão #6401
// Instrumentos de sopro
// Qual alternativa completa o código abaixo para imprimir a média de valor dos instrumentos de sopro?

// const instrumentos = [
//   { nome: 'Flauta Transversa', tipo: 'Sopro', valor: 900 },
//   { nome: 'Guitarra flying v', tipo: 'Corda', valor: 2500 },
//   { nome: 'Baixo', tipo: 'Corda', valor: 3000 },
//   { nome: 'Bateria', tipo: 'Percursão', valor: 2800 },
//   { nome: 'Clarinete', tipo: 'Sopro', valor: 1000},
// ];

// const sopro = instrumentos.filter( instrumento => instrumento.tipo == 'Sopro');
// const qntSopro = sopro.length;

// let mediaSopro = sopro.reduce( (total, instrumento) => {
//   return total + instrumento.valor;
// }, 0 );

// mediaSopro = mediaSopro / qntSopro;

// console.log(mediaSopro);

// Questão #6416
// Definindo uma data
// Crie a variável 'hoje' que possui a data atual do sistema. Depois altere a data para 20 de Fevereiro de 1998.

// const hoje = new Date();

// hoje.setFullYear(1998);
// hoje.setMonth(1);
// hoje.setDate(20);

// console.log( hoje );

// Questão #6391
// Percorrendo um array
// Qual alternativa executa sem gerar erro?

// const tecnologias = [
//   { nome: "C#", tipo: "Linguagem" },
//   { nome: ".NET Core", tipo: "Framework" },
//   { nome: "Spring", tipo: "Framework" },
// ];

// for ( let i = 0 ; i < tecnologias.length ;i++ ) {
//   console.log(tecnologias[i].tipo + ' ' + tecnologias[i].nome);
// }

// tecnologias.forEach(tec => {
//   console.log(tec.tipo + ' ' + tec.nome);
// });

// for (const tec of tecnologias) {
//   console.log(tec.tipo + ' ' + tec.nome);
// }

// const filmes = [
//   { nome: 'O Poderoso Chefão', anoLancamento: 1972, gênero: 'Policial' },
//   { nome: 'A Lista de Schindler', anoLancamento: 2019, gênero: 'Guerra' },
//   { nome: 'Um Sonho de Liberdade', anoLancamento: 1995, gênero: 'Drama' },
//   { nome: 'O Senhor dos Anéis - O Retorno do Rei', anoLancamento: 2003, gênero: 'Aventura' },
//   { nome: 'Vingadores: Ultimato', anoLancamento: 2019, gênero: 'Aventura' },
// ];

// const novoFilme = {
//   nome: 'IT - CAPÍTULO 2',
//   anoLancamento: 2019,
//   gênero: 'Terror'
// };

// filmes.push(novoFilme);
// filmes.sh

// const meses = [
//   "Janeiro", "Fevereiro", "Março", "Abril",
//   "Maio", "Junho", "Julho", "Agosto",
//   "Setembro", "Outubro", "Novembro", "Dezembro"
// ];

// function abreviar (mes) {
//   return mes.substr(0,3)
// };

// const mesesAbreviados = abreviar(meses);

// meses.filter( mes => {
//   console.log(mesesAbreviados);
// });

// Questão #5458
// Completando a estrutura de repetição
// Preencha as lacunas abaixo de modo que todos os elementos de "numeros" sejam impressos.

// const numeros = [ 10, 11, 22, 23, 34, 45, 66, 17, 28, 93, 101 ]

// for (const numero of numeros) {
//  console.log(numero);
// }

// let texto = "PHP é uma linguagem muito poderosa! O PHP é uma das linguagens mais usadas na programação.";
// let resultado = texto.replace("PHP", "JavaScript");

// console.log(resultado);

// const linguagem = "JavaScript";
// linguagem = "JS";
// console.log(linguagem);

// Questão #5420
// Arquivo main.js
// Complete o código abaixo de modo que o arquivo main.js esteja totalmente correto:

// OBS.: O primeiro parâmetro da função são os dados dos signos e o segundo é a data informada.

 import colecao_signos  from './dados/dados.js';
 import retorna_signo  from './funcoes/funcoes.js';

let data_app = new Date();

const nome_signo = retorna_signo(colecao_signos(data_app));

console.log("O signo de hoje é: " + nome_signo);