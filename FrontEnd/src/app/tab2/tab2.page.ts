import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page{
  constructor() {}
}

interface Tarefa {
  id: number;
  nome: string;
}

@Injectable()
export class TarefaService {
  tarefas: Tarefa[] = [
    { id: 1, nome: 'Tarefa 1' },
    { id: 2, nome: 'Tarefa 2' },
    // ... outras tarefas
  ];

  excluirTarefa(id: number): void {
    this.tarefas = this.tarefas.filter((tarefa) => tarefa.id !== id);
  }

  private apiUrl = 'https://exemplo.com/api/tarefas';

  constructor(private http: Array<string>) {}

  atualizarTituloTarefa(id: number, novoTitulo: string) {
    const url = `${this.apiUrl}/${id}`;
    const body = { nome: novoTitulo };
    return this.http.splice(url.toString(), body);
  }
}