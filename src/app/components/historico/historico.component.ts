import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  public historico = '';

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.store$.subscribe(res => {
      this.historico = res.historico;
    });
  }

}
