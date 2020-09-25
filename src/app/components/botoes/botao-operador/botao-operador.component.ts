import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { operadoresValidos } from '../../../utils/Utils';

@Component({
  selector: 'app-botao-operador',
  templateUrl: './botao-operador.component.html',
  styleUrls: ['./botao-operador.component.css']
})
export class BotaoOperadorComponent implements OnInit {

  public digito = '0';
  public numeros = [];
  public operadores = [];

  constructor(private appService: AppService) { }

  @Input() operador: string;

  ngOnInit(): void {
    this.appService.store$.subscribe(res => {
      this.digito = res.digito;
      this.numeros = res.numeros;
      this.operadores = res.operadores;
    });
  }

  digitarOperador(event: any): void {
    let tempDigito = this.digito;

    // se dígito atual ainda não existe ou já é operador, operador não é necessário
    if (tempDigito === '' || operadoresValidos.includes(tempDigito)) {

      // Se digito atual for operador, permitir trocar último operador
      if (this.operadores.length === this.numeros.length) {
        const novoOperadores = [...this.operadores];
        novoOperadores[novoOperadores.length - 1] = event.target.innerHTML;
        this.appService.trocarOperadores(novoOperadores);
      }

      return;
    }

    // se resultado ainda não foi requerido, formatar/adicionar dígito atual ao array de números
    if (tempDigito !== '=') {
      // formata corretamente números fracionais digitados
      if (parseFloat(tempDigito) * 1 === 0 || (tempDigito.length === 1 && tempDigito === '.')) {
        tempDigito = '0';
      } else if (tempDigito[tempDigito.length - 1] === '.') {
        tempDigito += '0';
      }

      // adiciona número ao array de numeros
      this.appService.setNumeros(tempDigito);
    }

    // atualiza o dígito atual
    tempDigito = event.target.innerHTML;

    // adicionar dígito atual atualiado ao array de operadores
    this.appService.setOperadores(tempDigito);
    this.appService.setDigito(tempDigito);
  }

}
