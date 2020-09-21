import { AppService } from './../../services/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  public resultado = '0';

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.store$.subscribe(res => {
      this.resultado = res.resultado;
    });
  }

}
