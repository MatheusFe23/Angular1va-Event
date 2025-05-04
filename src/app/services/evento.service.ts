import { Injectable } from '@angular/core';

export interface Evento {
  nome: string;
  descricao: string;
  dataInicio: string;
  dataFim: string;
  gratuito: boolean;
  local: string;
}

@Injectable({
  providedIn: 'root',
})
export class EventoService {
  private eventos: Evento[] = [];

  adicionarEvento(evento: Evento) {
    this.eventos.push(evento);
  }

  listarEventos(): Evento[] {
    return this.eventos;
  }

  buscarPorNome(nome: string): Evento[] {
    return this.eventos.filter(evento =>
      evento.nome.toLowerCase().includes(nome.toLowerCase())
    );
  }
}
