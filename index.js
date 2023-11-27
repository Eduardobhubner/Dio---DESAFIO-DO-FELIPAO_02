// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

let posicao = '';

const vitorias = 50
const derrotas = 2

const result_ranking = calculaRanking(vitorias, derrotas)

const ranking = {
    'Ferro': { start: 0, end: 9 },
    'Bronze': { start: 10, end: 20 },
    'Prata': { start: 21, end: 50 },
    'Ouro': { start: 51, end: 80 },
    'Diamante': { start: 81, end: 90 },
    'Lendário': { start: 91, end: 100 },
    'Imortal': { start: 101, end: 999999999 },
};


function calculaRanking(vitorias, derrotas) {
    var calculo = vitorias - derrotas
    return calculo;
}


const tipos_ranking = Object.keys(ranking);

const size_obj = tipos_ranking.length;

for (let i = 0; i < size_obj; i++) {

    let start = ranking[tipos_ranking[i]].start;
    let end = ranking[tipos_ranking[i]].end;

    if (result_ranking >= start && result_ranking <= end) {
        posicao = tipos_ranking[i];
        break;
    }
}

console.log(`O Herói tem de saldo de ${result_ranking} está no nível de ${posicao}"`);
