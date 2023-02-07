import {Component, OnInit} from '@angular/core';
import {Caculator} from '../../model/caculator';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  fistNumber: number;
  lastNumber: number;
  result: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  caculator(math: string) {
    switch (math) {
      case '+':
        this.result = +this.fistNumber + +this.lastNumber;
        break;

      case '-':
        this.result = this.fistNumber - this.lastNumber;
        break;

      case '*':
        this.result = this.fistNumber * this.lastNumber;
        break;

      case '/':
        this.result = this.fistNumber / this.lastNumber;
    }
  }
}
