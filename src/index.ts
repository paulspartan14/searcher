/* 
Busqueda lineal
Busqueda binaria
Searcher

Tres clases, una llamada busqueda lineal y otra busqueda
binaria, en el constructor deben recibir un arreglo de tipo
entero. la tercera clase debe llamarse searcher
y se encargará de realizar la busqueda haciendo uso
de alguno de los algoritmos.

El algoritmo de busqueda binaria debe ordenar
el arreglo que se le paso antes.
*/


interface interfaceSearcher {
  search(number: number): number
}

class linealSearch implements interfaceSearcher {

  constructor(private numbers: number[]){}

  search(number): number {
    for(let [i, num] of this.numbers.entries()){
      if (num === number){
        return i;
      }else{
        return -1
      }
    }
  }

}

class linealBinary implements interfaceSearcher {
  
  constructor(private numbers: number[]){
    this.numbers = this.numbers.sort((a, b) => a - b)
  }

  search(number): number{
    let baja = 0,
    alta = this.numbers.length - 1,
    media: number

    while(baja<=alta){
      media = Math.floor((baja + alta) / 2)
      if (this.numbers[media] < number){
        baja = media + 1
      }else if (this.numbers[media] < number) {
        baja = media + 1
      }else{
        alta = media - 1
      }
      return -1
    }
  }
}

class Searcher {
  constructor(private Searcher: interfaceSearcher){}

  search(number: number): string {
    return `el index de ${number}: ${this.Searcher.search(number)} `
  }
}


const array = [2,3,8,1,7]
const searcher = new linealBinary(array)
console.log(new Searcher(searcher).search(8))





