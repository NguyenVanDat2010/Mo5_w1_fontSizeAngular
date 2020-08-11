import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  output: number;
  first: number;
  second: number;
  operator = '+';

  onFirstChange(value){
    // this.first = Number(value);
    this.first = parseFloat(value);
  }

  onSecondChange(value){
    // this.second = Number(value);
    this.second = parseFloat(value);

  }

  onOperatorChange(value){
    this.operator = value;
  }

  calculator(){
    switch(this.operator){
      case '+':
        this.output = this.first + this.second;
        break;
      case '-':
        this.output = this.first - this.second;
        break;
      case '*':
        this.output = this.first * this.second;
        break;
      case '/':
        this.output = this.first / this.second;
        break;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
