export interface CalcularTaxaInput {
  distanciaKm: number;
  valorPedido: number;
  estaChovendo: boolean;
}

export class CalculadoraDelivery {
  calcularEntrega({
    distanciaKm,
    valorPedido,
    estaChovendo
  }: CalcularTaxaInput): string {
    let taxa = 0;

    if (valorPedido >= 150) {
      taxa = 0;
    } else {
      taxa = distanciaKm * 3;

      if (estaChovendo) {
        taxa += 5;
      }
    }

    let tempoMinutos = distanciaKm * 3;

    if (estaChovendo) {
      tempoMinutos += 15;
    }

    return `[DELIVERY] Taxa: R$ ${taxa.toFixed(
      2
    )} | Tempo Estimado: ${tempoMinutos} min`;
  }
}