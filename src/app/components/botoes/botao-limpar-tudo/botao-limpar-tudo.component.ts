import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-botao-limpar-tudo',
  templateUrl: './botao-limpar-tudo.component.html',
  styleUrls: ['./botao-limpar-tudo.component.css']
})
export class BotaoLimparTudoComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  limparTudo(): void {
    this.appService.clearNumeros();
    this.appService.clearOperadores();
    this.appService.setDigito('0');
    this.appService.setResultado('0');
  }

}
