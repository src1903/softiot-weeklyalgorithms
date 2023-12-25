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

}
