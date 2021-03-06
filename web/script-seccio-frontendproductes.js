
class ObjSeccioFrontendProductes {

    constructor () {
    }

    async iniciaSeccio () {
        let refLoading = document.getElementById('productesLoading'),
            refContinguts = document.getElementById('productesContinguts'),
            objRebut = null,
            valor = null,
            codiHTML = '',
            cntProducte = 0

        // Amaguem els continguts actuals i mostrem la càrrega
        refContinguts.style.display = 'none'
        refLoading.style.display = 'flex'

        // Demanem el llistat de productes al servidor
        objRebut = await promiseCallServer('POST', '/call/llistatProductes', {})
        console.log(objRebut)
        // Transformem l'objecte rebut en codi HTML
        if (objRebut.resultat === 'ok') {
            for (cntProducte = 0; cntProducte < objRebut.missatge.length; cntProducte = cntProducte + 1) {
                valor = objRebut.missatge[cntProducte]
                codiHTML = codiHTML + '<div class="detall" onclick=\'navegacio.canviaSeccio("frontendProducte&' + valor.id + '")\'>'
                codiHTML = codiHTML + '<img class="imagenproducto"src="' + valor.imatge + '" width="150" />'
                codiHTML = codiHTML + '<h3 class="letraproductos">' + valor.nom +'</h3>'
                codiHTML = codiHTML + '<div class="letraproductos">' + valor.descripcio +'</div>'
                codiHTML = codiHTML + '<div class="letraproductos">' + valor.preu +' €</div>'
                codiHTML = codiHTML + '<hr/>'
            }
        }

        // Amaguem la càrrega i mostrem el llistat de productes
        refContinguts.innerHTML = codiHTML
        refContinguts.style.display = 'flex'
        refLoading.style.display = 'none'
    }
}