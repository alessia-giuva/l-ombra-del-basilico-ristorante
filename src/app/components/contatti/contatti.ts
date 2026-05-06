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

  // Assicurati che il nome sia esattamente questo:
  inviaMessaggio() {
    console.log('Messaggio inviato!');
    this.inviato = true;
    
    // Opzionale: nasconde il messaggio di successo dopo 5 secondi
    setTimeout(() => {
      this.inviato = false;
    }, 5000);
  }
}

