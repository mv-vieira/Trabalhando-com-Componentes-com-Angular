import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  labelString: string;
  buttonText: string = 'ACESSAR';

  getAlert(numero: number){
    alert(numero)
  }
}