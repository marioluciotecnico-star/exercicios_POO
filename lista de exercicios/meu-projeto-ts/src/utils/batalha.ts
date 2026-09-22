export interface ProcessarTurnoInput {
  nomeAtacante: string;
  nomeDefensor: string;
  danoAtaque: number;
  defesaDefensor: number;
  ehGolpeCritico: boolean;
}

export class GerenciadorBatalha {
  processarTurno({
    nomeAtacante,
    nomeDefensor,
    danoAtaque,
    defesaDefensor,
    ehGolpeCritico
  }: ProcessarTurnoInput): string {
    let dano = danoAtaque;

    if (ehGolpeCritico) {
      dano = danoAtaque * 2;
    }

    let danoAplicado = dano - defesaDefensor;

    if (danoAplicado < 0) {
      danoAplicado = 0;
    }

    const tipoAtaque = ehGolpeCritico
      ? "🔥 CRÍTICO!"
      : "⚔️ Ataque Normal";

    return `[BATALHA] ${nomeAtacante} atacou ${nomeDefensor} (${tipoAtaque}) -> Dano: ${danoAplicado} HP`;
  }
}