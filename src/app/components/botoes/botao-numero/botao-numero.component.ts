import { AppService } from './../../../services/app.service';
import { Component, OnInit, Input } from '@angular/core';
import { operadoresValidos } from '../../../utils/Utils';

@Component({
  selector: 'app-botao-numero',
  templateUrl: './botao-numero.component.html',
  styleUrls: ['./botao-numero.component.css']
})
export class BotaoNumeroComponent implements OnInit {

  public numeros: string[];
  public digito = '0';

  constructor(private appService: AppService) { }

  @Input() numero: string;

  ngOnInit(): void {
    this.appService.store$.subscribe(res => {
      this.digito = res.digito;
    });
  }

  digitarNumero(event: any): void {

    let tempDigito = this.digito;

    // permitir apenas um ponto (.) no dígito atual
    if (tempDigito.includes('.') && event.target.innerHTML === '.') { return; }

    if (tempDigito === '=') {
      // se o resultado já foi requerido, limpar tudo
      this.appService.clearNumeros();
      this.appService.clearOperadores();
      tempDigito = event.target.innerHTML;

    } else {
      // se dígito atual é operador, seta-o como zero
      if (operadoresValidos.includes(tempDigito)) {
        tempDigito = '0';
      }

      // atualiza o dígito atual, se zero, atribui, senão, concatena
      if (tempDigito === '0') {
        tempDigito = event.target.innerHTML;
      } else {
        tempDigito += event.target.innerHTML;
      }
    }

    if (event.target.innerHTML === '.' && (tempDigito === '0' || tempDigito === '.')) {
      tempDigito = '0' + event.target.innerHTML;
    }

    this.appService.setDigito(tempDigito);
    this.appService.setResultado(tempDigito);
  }



}
