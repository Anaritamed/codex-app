import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { TarefaService } from './tab2.page';
import { ActivatedRoute } from '@angular/router';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}

export class Tab2 {
  constructor(private tarefaService: TarefaService, private route: ActivatedRoute) {}

  excluirTarefa(id: number): void {
    this.tarefaService.excluirTarefa(id);
  }

  idTarefa: number;
  novoTitulo: string;

  editarTarefa() {
    this.tarefaService
      .atualizarTituloTarefa(this.idTarefa, this.novoTitulo);
  }
}