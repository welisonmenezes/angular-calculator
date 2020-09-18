import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-botao-operador',
  templateUrl: './botao-operador.component.html',
  styleUrls: ['./botao-operador.component.css']
})
export class BotaoOperadorComponent implements OnInit {

  constructor() { }

  @Input() operador: string;

  ngOnInit(): void {
  }

}
