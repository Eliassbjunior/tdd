const { array } = require("yargs")

class Numeros {
    error = ""
    display
    valor1
    valor2
    constructor(){}



    verificarLista(value){
        if(value != null || value != undefined){
            this.lista = value
            
        }else{
            this.display = "Lista vazia"
        }
    }

    organizar(value){

        value.sort(function(a,b){
            return a > b
        })

        this.valor1 = value[0];
        this.valor2 = value[0];
        var lista = []


        for(let i = 1; i < value.length+1; i++){
            if(value[i] - this.valor2 != 1){
                
                if(this.valor1 == this.valor2){
                    lista.push("[" + this.valor2 + "]")
                    this.valor1 = value[i]
                    this.valor2= value[i]
                }else{
                    lista.push("[" + this.valor1 +  "-" + this.valor2 + "]")
                    this.valor1 = value[i]
                    this.valor2= value[i]
                }
                
            }else{
                this.valor2 = value[i];
            }
        }
    }




}

module.exports = { Numeros };
