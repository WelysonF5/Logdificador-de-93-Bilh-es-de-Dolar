// Definindo as listas
const A = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const B = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const C = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const D = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const E = [14, 15, 16, 17, 18, 19];
const F = [15, 16, 17, 18, 19, 20, 21];
const G = [16, 17, 18, 19, 20, 21, 22];
const H = [17, 18, 19, 20, 21, 22, 23];
const I = [18, 19, 20, 21, 22, 23, 24];
const J = [19, 20, 21, 22, 23, 24, 25];

// Função para gerar arranjos e verificar a soma
function encontrarArranjos(valorUsuario) {
    const resultados = [];
    for (let a of A) {
        for (let b of B) {
            for (let c of C) {
                for (let d of D) {
                    for (let e of E) {
                        for (let f of F) {
                            for (let g of G) {
                                for (let h of H) {
                                    for (let i of I) {
                                        for (let j of J) {
                                            const soma = a + b + c + d + e + f + g + h + i + j;
                                            if (soma === valorUsuario) {
                                            resultados.push([a, b, c, d, e, f, g, h, i, j]);
                                            }
                                        }
                                    }    
                                }        
                            }                
                        }                
                    }
                }
            }
        }
    }
    return resultados;
}

// Função para lidar com o clique do botão
document.getElementById('calcular').addEventListener('click', function() {
    const valorUsuario = parseInt(document.getElementById('valorUsuario').value);
    const arranjos = encontrarArranjos(valorUsuario);
    const resultadosList = document.getElementById('resultados');
    resultadosList.innerHTML = ''; // Limpar resultados anteriores

    if (arranjos.length > 0) {
        arranjos.forEach(arranjo => {
            const listItem = document.createElement('li');
            listItem.textContent = `Arranjo: ${arranjo.join(', ')}`;
            resultadosList.appendChild(listItem);
        });
    } else {
        const listItem = document.createElement('li');
        listItem.textContent = "Nenhum arranjo resulta na soma desejada.";
        resultadosList.appendChild(listItem);
    }
});
