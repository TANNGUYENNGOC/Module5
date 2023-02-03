import {Component, OnInit} from '@angular/core';
import {Caculator} from '../../model/caculator';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
    number1:number;
    number2:number;
    result:number;

  constructor() {
  }

  ngOnInit(): void {
  }

  caculator(dau: string) {
    switch (dau) {
      case '+':
        this.result = +this.number1 + +this.number2;
        break;

      case '-':
        this.result = this.number1 - this.number2;
        break;

      case '*':
        this.result = this.number1 * this.number2;
        break;

      case '/':
        this.result = this.number1 / this.number2;
        break;

    }
  }
}
