import listaChuvaMeteoros from '../data/chuva-de-meteoros.js'

function getData() { 
let data = new Date();
let dataPadrao = (data.getFullYear()+'-'+data.getMonth()+'-'+data.getDate())
return dataPadrao;
}

export {getData};