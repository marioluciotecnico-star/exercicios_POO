export interface ProcessarCobrancaPixInput {
  nomeEmpresa: string;
  valorTransacao: number;
  tipoChave: string;
  ehClientePremium: boolean;
}

export class ProcessadorPix {
  processarCobranca({
    nomeEmpresa,
    valorTransacao,
    tipoChave,
    ehClientePremium
  }: ProcessarCobrancaPixInput): string {
    let porcentagemTaxa = 0.015;

    if (ehClientePremium) {
      porcentagemTaxa = 0.005;
    }

    const valorTaxa = valorTransacao * porcentagemTaxa;

    const valorLiquido = valorTransacao - valorTaxa;

    return `[PIX GATEWAY] Empresa: ${nomeEmpresa} | Bruto: R$ ${valorTransacao.toFixed(
      2
    )} | Taxa: R$ ${valorTaxa.toFixed(
      2
    )} | Líquido Repassado: R$ ${valorLiquido.toFixed(2)}`;
  }
}