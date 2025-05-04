import { Component } from '@angular/core';
import { EventoService, Evento } from '../../services/evento.service';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  imports: [
    NgIf,
    NgForOf
  ],
  styleUrl: './listar.component.scss'
})
export class ListarComponent {
  eventos: Evento[] = [];

  constructor(private eventoService: EventoService) {}

  ngOnInit() {
    this.eventos = this.eventoService.listarEventos();
  }
}
