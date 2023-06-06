const { Numeros } = require('./numeros'); 

describe('Verificar lista', () => {
    entrada = [0,1,2,3,5,6,8,10,11,12,15,16,18]
    saida = ["[0-3]","[5-6]","[8]","[10-12]","[15-16]","[18]"]

    it('Deve verificar se a lista está vazia ou existe ', () => {
        const numeros = new Numeros();
        numeros.verificarLista(null)
        expect(numeros.display).toEqual('Lista vazia')
    })
    
    
});

describe('Validar organizacao', () => {
    it('Deve verificar se a lista foi devidamente organizada', () =>{
        const numeros = new Numeros()
        numeros.organizar(entrada)
        expect(numeros.lista).toEqual(this.saida)

    })
})