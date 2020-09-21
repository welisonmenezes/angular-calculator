import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-botao-trocar-sinal',
  templateUrl: './botao-trocar-sinal.component.html',
  styleUrls: ['./botao-trocar-sinal.component.css']
})
export class BotaoTrocarSinalComponent implements OnInit {

  public digito = '0';

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.store$.subscribe(res => {
      this.digito = res.digito;
    });
  }

  trocarSinal(): void {
    const naoNumeros = ['+', '-', '×', '÷', '.', '=', 'C', 'CE', '=/-'];
    let tempDigito = this.digito;

    // se resultado já foi requerido, limpar tudo
    if (tempDigito === '=') {
      this.appService.clearNumeros();
      this.appService.clearOperadores();
      this.appService.setDigito('0');
      this.appService.setResultado('0');
    }

    // se dígito atual é numero válido e maior que zero
    if (!naoNumeros.includes(tempDigito) && parseFloat(tempDigito) * 1 !== 0) {
      const primeiroCaracter = tempDigito.charAt(0);

      if (primeiroCaracter === '-') {
        tempDigito = tempDigito.substring(1);

      } else {
        tempDigito = '-' + tempDigito;
      }

      this.appService.setDigito(tempDigito);
      this.appService.setResultado(tempDigito);
    }
  }

}
