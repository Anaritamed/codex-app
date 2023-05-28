export class Usuario {
  public id: number;
  public nome: string | undefined;
  public genero: string | undefined;
  public idade: number | undefined;
  public email: string | undefined;
  public telefone: string | undefined;

  constructor(id: number, nome: string, genero: string, idade: number, email: string, telefone: string) {
    this.id = id;
    this.nome = nome;
    this.genero = genero;
    this.idade = idade;
    this.email = email;
    this.telefone = telefone;
  }
}