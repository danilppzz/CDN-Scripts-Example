function generarCodigo(lengthID) {
    var caracteres = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var codigo = '';
    for (var i = 0; i < lengthID; i++) {
      var indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      codigo += caracteres.charAt(indiceAleatorio);
    }
    return codigo;
}
var codigoAleatorio = `${generarCodigo(16)}`;
console.log(codigoAleatorio);