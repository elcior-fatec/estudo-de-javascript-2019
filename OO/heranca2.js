// Prototype chain
Object.prototype.attr0 = '0'  // NAO EH UMA BOA PRATICA! Add propriedades ao prototype de Object
const avo = { attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3: '3'}
const filho = {__proto__: pai, attr3: 'C', attr4: '4'}  // sobreamento (ou mascara) das propriedades mais distante na cadeia de prototipo

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)
console.log(pai.attr3, pai.attr1, pai.attr4)


const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            return this.velAtual += delta
        } else {
            return this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual} Km/h de ${this.velMax} Km/h`
    },
}

const ferrari = {
    modelo: 'F40',
    velMax: 324,  // sombreamento
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`  // palavra super evoca as propriedades do objeto pai
    }
}

Object.setPrototypeOf(ferrari, carro)  // Estabelecendo a relacao de prototipacao: carro <- ferrari
Object.setPrototypeOf(volvo, carro)

// O metodo toString() apenas imprime as propriedades do objeto,
// porem o objeto pode acessar as propriedades dos prototipos
console.log(ferrari)
console.log(volvo)

// Acesso os prototypes
volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())
