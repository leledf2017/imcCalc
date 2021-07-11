const imc = () => {
    
    let getName = document.getElementById('clientName').value;
    let getWeight = document.getElementById('clientWeight').value;
    let getReight = document.getElementById('clientReight').value;
    
    let makeCalc = getWeight / (getReight * getReight)

    let result = document.getElementById('imcResult').innerHTML = Math.round(makeCalc);

    let lowWeight = ', você foi clássificado na categoria "Baixo Peso", portanto, o ideal é aumentar o aporte calórico na sua dieta. Procure se alimentar 6 vezes ao dia, inclua carboidratos e gorduras de boa qualidade, além das fibras alimentares para um melhor aporte energético/dia';

    let normalWeight = ', você foi clássificado na categoria "Peso Normal", portanto, o ideal é manter a manutenção do peso, procure se alimentar de 5 a 6 vezes por dia, inclua sempre vegetais e legumes nas grandes refeições, evite as gorduras hidrogenadas (trans) e os carboidratos simples, como doces, e massas refinadas';

    let overWeight = ', você foi clássificado na categoria "Sobrepeso", isso significa dizer que há uma proximidade muito grande da Obesidade, dessa forma, o ideal agora é mudar o estilo de vida, principlamente em relação a alimentação. Evite trocar as grandes refeições como almoço e jantar por lanches rápidos, faça ao menos de 4 a 5 refeições ao dia, consuma alimentos integrais, verduras e legumes diariamente, não se esquecendo das frutas que são muito importantes. Evite o consumo de carboidratos refinados, como arroz branco, pão branco e etc. ';

    let obesity = ', você foi clássificado na categoria "Obesidade", isso significa dizer que você precisa buscar um tratamento para a perda de peso e de reeducação alimentar. No que se refere aos hábitos alimentares, o ideal é fazer a retirada imediata de alimentos ultra processados, ou seja, evitar ao máximo o consumo de alimentos industrializados. Prefira sempre alimentos integrais, e nas refeições faça um prato colorido, com vegetais e legumes, alémm do arroz ou macarrão integral. Prefira preparações sempre cozidas, refogadas ou assadas, evite os carboidratos refinados.';

    if(result < 18.5){
        let title = document.getElementById('titleResult').innerHTML = 'Baixo Peso';
        let diag = document.getElementById('diagResult').innerHTML = getName + lowWeight;
    }
    else if(result >= 18.5 && result < 25){
        let title = document.getElementById('titleResult').innerHTML = 'Peso Normal';
        let diag = document.getElementById('diagResult').innerHTML = getName + normalWeight;
    }
    else if(result >= 25 && result < 30){
        let title = document.getElementById('titleResult').innerHTML = 'Sobrepeso';
        let diag = document.getElementById('diagResult').innerHTML = getName + overWeight;
    }
    else if(result >= 30){
        let title = document.getElementById('titleResult').innerHTML = 'Obesidade';
        let diag = document.getElementById('diagResult').innerHTML = getName + obesity;
    }

}

document.getElementById('clientCalc').addEventListener('click',imc);