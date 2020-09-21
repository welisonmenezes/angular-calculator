import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { operadoresValidos } from '../../../utils/Utils';

@Component({
  selector: 'app-botao-voltar',
  templateUrl: './botao-voltar.component.html',
  styleUrls: ['./botao-voltar.component.css']
})
export class BotaoVoltarComponent implements OnInit {

  public digito = '0';

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.store$.subscribe(res => {
      this.digito = res.digito;
    });
  }

  voltarDigito(): void {
    let tempDigito = this.digito;

    // se resultado já foi requerido, faça nada
    if (tempDigito === '=') {
      return;
    }

    // se dígito atual não for um operador
    if (!operadoresValidos.includes(tempDigito)) {
      tempDigito = tempDigito.slice(0, -1);

      if (tempDigito.length < 1) {
        tempDigito = '0';
      }

      this.appService.setDigito(tempDigito);
      this.appService.setResultado(tempDigito);
    }
  }

}
