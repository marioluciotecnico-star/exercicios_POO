export interface AplicarDescontoInput {
  precoOriginal: number;
  porcentagemDesconto: number;
}

export interface CalcularFreteInput {
  distanciaKm: number;
}

export interface GerarResumoPedidoInput {
  nomeProduto: string;
  preco: number;
  desconto: number;
  distancia: number;
}

export class CalculadoraPreco {
  aplicarDesconto({
    precoOriginal,
    porcentagemDesconto
  }: AplicarDescontoInput): number {
    const valorDesconto =
      precoOriginal * (porcentagemDesconto / 100);

    return precoOriginal - valorDesconto;
  }

  calcularFrete({
    distanciaKm
  }: CalcularFreteInput): number {
    return distanciaKm * 2.5;
  }

  gerarResumoPedido({
    nomeProduto,
    preco,
    desconto,
    distancia
  }: GerarResumoPedidoInput): string {
    const precoFinal = this.aplicarDesconto({
      precoOriginal: preco,
      porcentagemDesconto: desconto
    });

    const valorFrete = this.calcularFrete({
      distanciaKm: distancia
    });

    const totalGeral = precoFinal + valorFrete;

    return `[PEDIDO] ${nomeProduto} | Preço: R$ ${precoFinal.toFixed(
      2
    )} | Frete: R$ ${valorFrete.toFixed(
      2
    )} | Total: R$ ${totalGeral.toFixed(2)}`;
  }
}