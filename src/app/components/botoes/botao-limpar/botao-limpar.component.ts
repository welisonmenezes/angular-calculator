import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-botao-limpar',
  templateUrl: './botao-limpar.component.html',
  styleUrls: ['./botao-limpar.component.css']
})
export class BotaoLimparComponent implements OnInit {

  public digito = '0';

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.store$.subscribe(res => {
      this.digito = res.digito;
    });
  }

  limparDigitoAtual(): void {

    // se resultado já foi requerido, limpar tudo
    if (this.digito === '=') {
      this.appService.clearNumeros();
      this.appService.clearOperadores();
      this.appService.setDigito('0');
      this.appService.setResultado('0');
    } else {
      this.appService.setDigito('0');
      this.appService.setResultado('0');
    }
  }

}
