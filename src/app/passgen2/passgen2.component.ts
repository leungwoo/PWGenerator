import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passgen2',
  templateUrl: './passgen2.component.html',
  styleUrls: ['./passgen2.component.css'],
})
export class Passgen2Component implements OnInit {
  public length = 0;
  public includeNumbers = false;
  public includeLetters = false;
  public includeSymbols = false;
  public password = '';
  constructor() {}

  ngOnInit(): void {}
  onChangeLength(target: EventTarget) {
    const value = (<HTMLInputElement>target).value;
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';
    let validChars = '';

    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }
    let generatedPassword = '';
    for (let i = 0; i < this.length; ++i) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
      this.password = generatedPassword;
    }
  }
}
