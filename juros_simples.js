class JurosSimples {
  constructor(
    valorPresente = null,
    prazo = null,
    valorTotal = null,
    taxa = null,
    valorJuros = null,
  ) {
    this.valorPresente = valorPresente;
    this.prazo = prazo;
    this.valorTotal = valorTotal;
    this.taxa = taxa;
    this.valorJuros = valorJuros;
  }

  calcTaxa() {
    if (!this.valorPresente || !this.prazo || !this.valorTotal) throw Error('Atributos insuficientes!');

    this.taxa = ((this.valorTotal - this.valorPresente) / (this.prazo * this.valorPresente)) * 100
  }

  calcJuros() {
    if (!this.valorPresente || !this.prazo || !this.taxa) throw Error('Atributos insuficientes!');

    this.valorJuros = this.valorPresente * this.prazo * (this.taxa / 100);
  }

  calcValorTotal() {
    if (!this.valorPresente || !this.valorJuros) throw Error('Atributos insuficientes!');

    this.valorTotal = this.valorPresente + this.valorJuros;
  }

  calcValorPresente() {
    this.valorPresente = this.valorTotal / (this.prazo * (this.taxa / 100) + 1);
  }

  calc() {
    if (!this.taxa) this.calcTaxa();
    if (!this.valorPresente) this.calcValorPresente();
    if (!this.valorJuros) this.calcJuros();
    if (!this.valorTotal) this.calcValorTotal();

    const result = {
      valorPresente: this.valorPresente.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
      prazo: `${this.prazo} mês(es)`,
      valorTotal: this.valorTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
      taxa: `${this.taxa.toFixed(2)}%`,
      valorJuros: this.valorJuros.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
    }

    console.log(
      result
    )

    return result;
  }
}

// const continha = new JurosSimples()

// continha.valorPresente = 1055500-266500;
// continha.prazo = 3;
// continha.valorTotal = 980000;
// continha.taxa = 5;

// continha.calc();
