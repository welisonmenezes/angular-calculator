import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { retornarResultadoGeral, posicionarScrollbar } from '../utils/Utils';

export class Store {
  numeros: string[];
  operadores: string[];
  digito: string;
  resultado: string;
  historico: string;

  constructor(numeros: string[], operadores: string[], digito: string, resutado: string, historico: string) {
    this.numeros = numeros;
    this.operadores = operadores;
    this.digito = digito;
    this.resultado = resutado;
    this.historico = historico;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private data: Store = new Store([], [], '0', '0', '');
  private readonly store = new BehaviorSubject<Store>(this.data);
  readonly store$ = this.store.asObservable();

  constructor() { }

  setNumeros(numero: string): void {
    this.data.numeros = [...this.data.numeros, numero];
    this.store.next(this.data);
    this.atualizaResultado();
  }

  clearNumeros(): void {
    this.data = { ...this.data, numeros: [] };
    this.store.next(this.data);
    this.atualizaResultado();
  }

  setOperadores(operador: string): void {
    this.data.operadores = [...this.data.operadores, operador];
    this.store.next(this.data);
    this.atualizaResultado();
  }

  clearOperadores(): void {
    this.data = { ...this.data, operadores: [] };
    this.store.next(this.data);
    this.atualizaResultado();
  }

  setDigito(digito: string): void {
    this.data = { ...this.data, digito };
    this.store.next(this.data);
    this.atualizaResultado();
  }

  setHistorico(historico: string): void {
    this.data = { ...this.data, historico };
    this.store.next(this.data);
  }

  setResultado(resultado: string): void {
    this.data = { ...this.data, resultado };
    this.store.next(this.data);
  }

  private atualizaResultado(): void {
    let numeroMostrado = '';

    this.data.numeros.forEach((numero, index) => {
      numeroMostrado += numero;

      if (this.data.operadores[index]) {
        numeroMostrado += this.data.operadores[index];
      }
    });

    this.setHistorico(numeroMostrado);

    const resultadoCalculado = retornarResultadoGeral(this.data.numeros, this.data.operadores);

    if (resultadoCalculado === undefined) {
      this.setResultado('0');
    } else {
      this.setResultado(resultadoCalculado);
    }

    setTimeout(() => {
      posicionarScrollbar();
    }, 1);
  }

}
