import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'simple';
  
  a:number = 0;
  b:number = 0;
  c:number = 0;

  r:number = 0;

  getpisagor() {
    let total = 0;

    total = (this.a*this.a) + (this.b*this.b );
    let result = Math.sqrt(total);

    return result;
  }
  
  equation() {
  
    let delta = (this.b*this.b) - 4* this.a*this.c;

    if(delta > 0) {
      console.log("Double root");
    }
    else if (delta == 0 ){
      console.log("One root.")
    }
    else {
      console.log("There is no reel root.")
    }
    
  }

  volume () {
  
    var pi = 3.14;
    
    var volume = 4/3 * pi*( this.r*this.r*this.r);

    return volume;
  }

    26.12.2023 Girilen Sayının Faktoriyelini Hesaplayan Program

  factorial() {
    let factorial = 1;

    if(this.r<0) {
      console.log("Pozitif Sayi Giriniz..")
    }
    else{
      for(let i=1;i<=this.value;i++){
        factorial *= i;
      }
    }
    console.log(factorial);
  }

  26.12.2023 Klavyeden Girilen 10 sayı içinde tekleri ve çiftleri ayrı toplayan program.

  findNumbers(){
    let evenTotal = 0, oddTotal = 0;
    for(let i=0;i<10;i++) {
      let value = Number(prompt("Bir sayi giriniz:"));
      if(value%2 == 0) {
        evenTotal += value;
      }
      if(value%2 == 1) {
        oddTotal += value;
      }
    }
    console.log("Even numbers total:",evenTotal);
    console.log("Odd numbers total:",oddTotal);
  }
  
  26.12.2023 Klavyeden girilen n değerine kadar 1 + 1/3 + 1/5 + .... Hesaplayan program

  diff(){ 
    let total = 0;
    for(let i=0;i<=this.value;i+2){
      total = total + 1/(i+1);
    }
    console.log(total);
  }

  27.12.2023 Klavyeden Girilen 10 Sayıdan Büyük Olanı Bulan Program

  bigOne() {
      let list = new Array(10);

      for(let i=0; i<list.length;i++){
        list.push(list[this.value]);
        if(list[this.value] > list[this.value-1]){
          var big = list[this.value];
      }
      console.log(big);
 
      }
    }

}
