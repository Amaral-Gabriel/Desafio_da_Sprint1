let sum_Prices_Surveyed = 0;
let lowest_Price_Surveyed = Infinity;
let postoCount = 1;

document.getElementById("button_Result").onclick = function() {
    const distance_Traveled = parseFloat(document.getElementById("percurso").value);
    const avarege_Consuption = parseFloat(document.getElementById("consumo").value);
    const number_Gas_Station_Surveyed = parseInt(document.getElementById("numero_de_postos").value);


    // Validação dos dados de entrada
    if (isNaN(distance_Traveled) || isNaN(avarege_Consuption) || isNaN(number_Gas_Station_Surveyed) || distance_Traveled <= 0 || avarege_Consuption <= 0 || number_Gas_Station_Surveyed <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }


    let consumption_Necessary_Liters = distance_Traveled / avarege_Consuption;
    let liter = consumption_Necessary_Liters <= 1 ? consumption_Necessary_Liters.toFixed(2) + " litro" : consumption_Necessary_Liters.toFixed(2) + " litros";
    document.querySelector(".consumption_Necessary_Liters").textContent = liter;
};


document.getElementById("button_Add").onclick = function() {
    
    
    

    const number_Gas_Station_Surveyed = parseInt(document.getElementById("numero_de_postos").value);
    console.log(sum_Prices_Surveyed)
    const price = parseFloat(document.getElementById("preco_do_posto").value);

    if (isNaN(price) || price <= 0) {
        alert("Por favor, insira um preço válido.");
        return;
    }

    if (price < lowest_Price_Surveyed) {
        lowest_Price_Surveyed = price;
    }

    postoCount++;

    if (postoCount <= number_Gas_Station_Surveyed) {
        document.getElementById("preco_do_posto").placeholder = `Qual o valor no posto ${postoCount}? (em R$)`;
    }

    // Se todos os postos foram preenchidos, calcular a média e ocultar o botão "Adicionar"
    if (postoCount > number_Gas_Station_Surveyed) {
        const media = sum_Prices_Surveyed / number_Gas_Station_Surveyed;
        document.querySelector(".media").textContent = `Média dos preços pesquisados: R$ ${media.toFixed(2)}`;
        document.querySelector(".lowest_Price_Surveyed").textContent = `Menor valor pesquisado: R$ ${lowest_Price_Surveyed.toFixed(2)}`;

        // Remover o botão "Adicionar"
        document.getElementById("button_Add").style.display = "none";
    }

    // Limpar o campo de preço após adicionar
    document.getElementById("preco_do_posto").value = "";

    sum_Prices_Surveyed += price;


};
