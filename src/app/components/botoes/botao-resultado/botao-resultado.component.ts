import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { naoNumeros } from '../../../utils/Utils';

@Component({
  selector: 'app-botao-resultado',
  templateUrl: './botao-resultado.component.html',
  styleUrls: ['./botao-resultado.component.css']
})
export class BotaoResultadoComponent implements OnInit {

  public digito = '0';

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.store$.subscribe(res => {
      this.digito = res.digito;
    });
  }

  mostrarResultado(event: any): void {
    // se resultado ainda não foi requerido
    if (this.digito !== '=') {

      // se é número válido, atualizar array de números
      if (!naoNumeros.includes(this.digito)) {
        this.appService.setNumeros(this.digito);
      }

      this.appService.setDigito(event.target.innerHTML);
    }
  }

}
