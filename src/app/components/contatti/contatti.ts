import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contatti',
  imports: [[CommonModule, FormsModule],],
  templateUrl: './contatti.html',
  styleUrl: './contatti.css',
})
export class Contatti {
inviato = false;


  inviaMessaggio() {
    console.log('Messaggio inviato!');
    this.inviato = true;
    
  
    setTimeout(() => {
      this.inviato = false;
    }, 5000);
  }
}

