/* Código simplório, apenas para fornecer o serviço para a aplicação */

var api = require('../api');

module.exports  = function(app) {

    app.route('/negociacoes/todas')
    .get(api.listaTodas);

    app.route('/negociacoes/semana')
        .get(api.listaSemana);
        
    app.route('/negociacoes/anterior')
        .get(api.listaAnterior);
        
    app.route('/negociacoes/retrasada')
        .get(api.listaRetrasada);  
        
    app.route('/negociacoes')
        .post(api.cadastraNegociacao);          
};