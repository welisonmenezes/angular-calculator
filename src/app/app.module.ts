import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayComponent } from './components/display/display.component';
import { HistoricoComponent } from './components/historico/historico.component';
import { BotoesComponent } from './components/botoes/botoes.component';
import { BotaoLimparComponent } from './components/botoes/botao-limpar/botao-limpar.component';
import { BotaoLimparTudoComponent } from './components/botoes/botao-limpar-tudo/botao-limpar-tudo.component';
import { BotaoNumeroComponent } from './components/botoes/botao-numero/botao-numero.component';
import { BotaoOperadorComponent } from './components/botoes/botao-operador/botao-operador.component';
import { BotaoResultadoComponent } from './components/botoes/botao-resultado/botao-resultado.component';
import { BotaoTrocarSinalComponent } from './components/botoes/botao-trocar-sinal/botao-trocar-sinal.component';
import { BotaoVoltarComponent } from './components/botoes/botao-voltar/botao-voltar.component';
import { HeaderComponent } from './components/header/header.component';
import { ForkmeComponent } from './components/forkme/forkme.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    HistoricoComponent,
    BotoesComponent,
    BotaoLimparComponent,
    BotaoLimparTudoComponent,
    BotaoNumeroComponent,
    BotaoOperadorComponent,
    BotaoResultadoComponent,
    BotaoTrocarSinalComponent,
    BotaoVoltarComponent,
    HeaderComponent,
    ForkmeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
