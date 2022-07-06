function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Invalid Date')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {

            gênero = 'Homem';

            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'bebe M.jpeg');
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem m.webp');
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto M.jpg');
            } else {
                img.setAttribute('src', 'velho.jpg');
            }

        } else if (fsex[1].checked) {


            gênero = 'Mulher';

            if (idade >= 0 && idade <= 10) {
                gênero = 'um Bebe ' + gênero;
                img.setAttribute('src', 'bebe f.jpg');
            } else if (idade < 21) {
                gênero = 'uma Jovem ' + gênero;
                img.setAttribute('src', 'jovem f.webp');
            } else if (idade < 50) {
                gênero += ' Adulta';
                img.setAttribute('src', 'adulto f.webp');
            } else {
                gênero = 'uma Senhora';
                img.setAttribute('src', 'velha.jpeg');
            }

        }
        res.innerHTML = `Detectamos ${gênero} de ${idade} anos.`;

        res.appendChild(img)
    }
}