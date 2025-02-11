let sum_Prices_Surveyed = 0;
let lowest_Price_Surveyed = Infinity;
let postoCount = 1;

document.getElementById("button_Result").onclick = function() {
    const distance_Traveled = parseFloat(document.getElementById("percurso").value);
    const avarege_Consuption = parseFloat(document.getElementById("consumo").value);
    const number_Gas_Station_Surveyed = parseInt(document.getElementById("numero_de_postos").value);

    if (isNaN(distance_Traveled) || isNaN(avarege_Consuption) || isNaN(number_Gas_Station_Surveyed) || distance_Traveled <= 0 || avarege_Consuption <= 0 || number_Gas_Station_Surveyed <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    let consumption_Necessary_Liters = distance_Traveled / avarege_Consuption;
    let liter = consumption_Necessary_Liters <= 1 ? consumption_Necessary_Liters.toFixed(2) + " litro" : consumption_Necessary_Liters.toFixed(2) + " litros";
};

document.getElementById("button_Add").onclick = function() {
    
    const number_Gas_Station_Surveyed = parseInt(document.getElementById("numero_de_postos").value);

    if (isNaN(number_Gas_Station_Surveyed) || number_Gas_Station_Surveyed <= 0) {
        alert("Por favor, insira um preço válido.");
        return;
    }

    const price = parseFloat(document.getElementById("preco_do_posto").value);

    if (isNaN(price) || price <= 0) {
        alert("Por favor, insira um preço válido.");
        return;
    }

    if (price < lowest_Price_Surveyed) {
        lowest_Price_Surveyed = price;
    }

    if (postoCount < number_Gas_Station_Surveyed) {
        document.getElementById("preco_do_posto_texto").textContent = `Qual o valor no posto ${postoCount + 1}? (em R$)`;
    }

    
    if (postoCount >= number_Gas_Station_Surveyed) {
        const media = sum_Prices_Surveyed / number_Gas_Station_Surveyed;
      
        document.getElementById("button_Add").style.display = "none";

        document.getElementById("button_Result").onclick = function() {
            const distance_Traveled = parseFloat(document.getElementById("percurso").value);
            const avarege_Consuption = parseFloat(document.getElementById("consumo").value);
            const number_Gas_Station_Surveyed = parseInt(document.getElementById("numero_de_postos").value);
        

            if (isNaN(distance_Traveled) || isNaN(avarege_Consuption) || isNaN(number_Gas_Station_Surveyed) || distance_Traveled <= 0 || avarege_Consuption <= 0 || number_Gas_Station_Surveyed <= 0) {
                alert("Por favor, insira valores válidos.");
                return;
            }
        
            const media = sum_Prices_Surveyed / number_Gas_Station_Surveyed;
            let consumption_Necessary_Liters = distance_Traveled / avarege_Consuption;
            let liter = consumption_Necessary_Liters <= 1 ? consumption_Necessary_Liters.toFixed(2) + " litro" : consumption_Necessary_Liters.toFixed(2) + " litros";
            let gasto_Diario = 2 * (consumption_Necessary_Liters * lowest_Price_Surveyed);
            
            console.log(`Soma ${sum_Prices_Surveyed}`)
            console.log(`media ${media}`)
            console.log(`menor ${lowest_Price_Surveyed}`)
            console.log(`consumo ${consumption_Necessary_Liters}`)

            let contador = 0;
            const intervalId = setInterval(function() {
                contador++;
    
                if (contador === 1) {
                    document.getElementById("resposta_texto").textContent = "Consumo:";
                    document.getElementById("resposta_valor").textContent = liter;
                } else if (contador === 2) {
                    document.getElementById("resposta_texto").textContent = "Menor preço pesquisado:";
                    document.querySelector(".resposta_valor").textContent = `R$ ${lowest_Price_Surveyed.toFixed(2)}`;
                } else if (contador === 3) {
                    document.getElementById("resposta_texto").textContent = "Média dos valores pesquisados:";
                    document.querySelector(".resposta_valor").textContent = `R$ ${media.toFixed(2)}`;
                } else if (contador === 4) {
                    document.getElementById("resposta_texto").textContent = "Gasto Diário:";
                    document.getElementById('resposta_valor').textContent = `R$ ${gasto_Diario.toFixed(2)}`;
                    contador = 0;
                } 
                
            }, 4000);
            
        };
    }

    document.getElementById("preco_do_posto").value = "";

    sum_Prices_Surveyed += price;
    postoCount++;  
};


