export interface CalcularEmprestimoInput {
  tituloLivro: string;
  diasPadrao: number;
  ehEstudante: boolean;
  diasAtrasoAnterior: number;
}

export class GestorEmprestimos {
  calcularPrazoDevolucao({
    tituloLivro,
    diasPadrao,
    ehEstudante,
    diasAtrasoAnterior
  }: CalcularEmprestimoInput): string {
    let diasTotais = diasPadrao;

    if (ehEstudante) {
      diasTotais += 7;
    }

    let valorMulta = 0;

    if (diasAtrasoAnterior > 0) {
      valorMulta = diasAtrasoAnterior * 2;
    }

    return `[BIBLIOTECA] Livro: "${tituloLivro}" | Prazo Total: ${diasTotais} dias | Pendência Multa: R$ ${valorMulta.toFixed(
      2
    )}`;
  }
}