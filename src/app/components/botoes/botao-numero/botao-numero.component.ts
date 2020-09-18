import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-botao-numero',
  templateUrl: './botao-numero.component.html',
  styleUrls: ['./botao-numero.component.css']
})
export class BotaoNumeroComponent implements OnInit {

  constructor() { }

  @Input() numero: string;

  ngOnInit(): void {
  }

}
