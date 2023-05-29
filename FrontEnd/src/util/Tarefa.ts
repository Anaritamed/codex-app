// Classe que representa uma Tarefa
export class Tarefa {
  public id: number;
  public titulo: string | undefined;
  public data: string | undefined;
  public concluida: boolean;

  constructor(id: number, titulo: string, data: string) {
    this.id = id;
    this.titulo = titulo;
    this.data = data;
    this.concluida = false;
  }
}