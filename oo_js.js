function Veiculo(marca, modelo, ano, cor) {
    let _marca = marca;
    let _modelo = modelo;
    let _ano = ano;
    let _cor = cor;

    this.getMarca = function () {
        return _marca;
    }
    this.setMarca = function (marca) {
        if (typeof marca === 'string') {
            _marca = marca;
        }
    }

    this.getModelo = function () {
        return _modelo;
    }
    this.setModelo = function (modelo) {
        if (typeof modelo === 'string') {
            _modelo = modelo;
        }
    }

    this.getAno = function () {
        return _ano;
    }
    this.setAno = function (ano) {
        if (typeof ano === 'number') {
            _ano = ano;
        }
    }

    this.getCor = function () {
        return _cor;
    }
    this.setCor = function (cor) {
        if (typeof cor === 'string') {
            _cor = cor;
        }
    }
}

function Carro(marca, modelo, ano, cor, qtPortas) {
    let _qtPortas = qtPortas;

    this.getQtPortas = function () {
        return _qtPortas;
    }
    this.setQtPortas = function (qtPortas) {
        if (typeof qtPortas === 'number' && qtPortas >= 2 && qtPortas <= 6) {
            _qtPortas = qtPortas;
        }
    }

    Veiculo.call(this, marca, modelo, ano, cor);

    this.descricao = function () {
        return `Marca: ${this.getMarca()}
        Modelo: ${this.getModelo()}
        Ano: ${this.getAno()}
        Cor: ${this.getCor()}
        Quantidade de Portas: ${this.getQtPortas()}`
    }
}

function Moto(marca, modelo, ano, cor, qtCilindros) {
    let _qtCilindros = qtCilindros;

    this.getQtCilindros = function () {
        return _qtCilindros;
    }
    this.setQtCilindros = function (qtCilindros) {
        if (typeof qtCilindros === 'number' && qtCilindros >= 1 && qtCilindros <= 8) {
            _qtCilindros = qtCilindros;
        }
    }

    Veiculo.call(this, marca, modelo, ano, cor);

    this.descricao = function () {
        return `Marca: ${this.getMarca()}
        Modelo: ${this.getModelo()}
        Ano: ${this.getAno()}
        Cor: ${this.getCor()}
        Quantidade de Cilindros: ${this.getQtCilindros()}`
    }
}

function Corsa() {
    Carro.call(this, 'Chevrolet', 'Corsa', 2009, 'Preto', 2);
}

function Azera() {
    Carro.call(this, 'Hyundai', 'Azera', 2015, 'Prata', 4);
}

function Ninja400() {
    Moto.call(this, 'Kawasaki', 'Ninja 400', 2024, 'Verde', 2);
}

function Z1000() {
    Moto.call(this, 'Kawasaki', 'Z1000', 2022, 'Laranja', 4);
}

const veiculo1 = new Corsa();
const veiculo2 = new Azera();
const veiculo3 = new Ninja400();
const veiculo4 = new Z1000();

console.log(veiculo1.descricao());
console.log(veiculo2.descricao());
console.log(veiculo3.descricao());
console.log(veiculo4.descricao());