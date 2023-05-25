import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  TodoList = [{
    itemName: 'Codigo',
    itemDueDate: '10-13-23',
    itemPriority: 'high',
    itemCategory: 'Trabalho'
  },
  {
    itemName: 'Design',
    itemDueDate: '28-10-23',
    itemPriority: 'low',
    itemCategory: 'Trabalho'
  },
  {
    itemName: 'Casa',
    itemDueDate: '30-10-23',
    itemPriority: 'middle',
    itemCategory: 'Pessoal'
  },
  ]

  today : number = Date.now();
  constructor() {}
}