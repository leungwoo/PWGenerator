import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public length = 0;
  public includeSymbols: boolean = false;
  public includeNumbers: boolean = false;
  public includeLetters: boolean = false;
  public password = '';
  title = 'pwgenerator';

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
    //generation random password with properties given below:
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';
    let validChars = '';
    //if letters are entered add the letters to the end of the string
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }
    // generated a for loop starting at 0 all the way to the inputed length property value.
    //then select a character at random out of the validChars array to form the password
    let generatedPassword = '';
    for (let i = 0; i < this.length; ++i) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }
}
