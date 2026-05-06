import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [[CommonModule]],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
categorie = [
    {
      nome: 'Antipasti della Terra',
      piatti: [
        { nome: 'Essenza di Basilico', prezzo: 12, desc: 'Crema di pane, pomodorino confit, spuma di burrata e olio al basilico.' },
        { nome: 'Carciofo Croccante', prezzo: 10, desc: 'Carciofo fritto su vellutata di pecorino dolce e mentuccia.' },
        { nome: 'Tagliere del Giardino', prezzo: 18, desc: 'Selezione di salumi locali, formaggi di masseria e confetture artigianali.' },
        { nome: 'Fiori di Zucca in Tempura', prezzo: 11, desc: 'Ripieni di ricotta vaccina e alici del Mediterraneo.' },
        { nome: 'Battuta di Podolica', prezzo: 15, desc: 'Carne di manzo locale, capperi croccanti e senape antica.' }
      ]
    },
    {
      nome: 'I Primi del Giardino',
      piatti: [
        { nome: 'Orecchiette in Verde', prezzo: 14, desc: 'Pesto leggero di basilico, mandorle tostate e scorza di limone.' },
        { nome: 'Troccolo al Ragù Bianco', prezzo: 16, desc: 'Pasta fresca con ragù di vitello, funghi cardoncelli e timo.' },
        { nome: 'Ravioli di Borragine', prezzo: 15, desc: 'Pasta ripiena alle erbe spontanee con burro nocciola e salvia.' },
        { nome: 'Risotto alle Erbe', prezzo: 17, desc: 'Carnaroli mantecato al finocchietto selvatico e polvere di liquirizia.' },
        { nome: 'Cavatelli della Murgia', prezzo: 14, desc: 'Con pomodorino ciliegino, rucola selvatica e cacioricotta.' }
      ]
    },
    {
      nome: 'I Secondi in Ombra',
      piatti: [
        { nome: 'Tagliata Podolica', prezzo: 22, desc: 'Rucola selvatica, grana e riduzione al mosto cotto.' },
        { nome: 'Filetto al Basilico', prezzo: 24, desc: 'Filetto di manzo bardato al lardo con infusione di basilico fresco.' },
        { nome: 'Agnello alle Erbe', prezzo: 20, desc: 'Costolette d’agnello in crosta di pistacchio e rosmarino.' },
        { nome: 'Guancia di Vitello', prezzo: 19, desc: 'Stracotto al Nero di Troia su purè di patate di Margherita.' },
        { nome: 'Grigliata dell’Orto', prezzo: 16, desc: 'Selezione di verdure di stagione con tomino alla piastra.' }
      ]
    },
    {
      nome: 'I Nostri Dessert',
      piatti: [
        { nome: 'Mousse al Basilico', prezzo: 7, desc: 'Mousse leggera al basilico, cuore di fragola e terra di cioccolato.' },
        { nome: 'Tiramisù della Casa', prezzo: 6, desc: 'La ricetta tradizionale con mascarpone fresco e caffè d’arabica.' },
        { nome: 'Semifreddo al Mandorlato', prezzo: 8, desc: 'Con mandorle di Toritto caramellate e salsa al caramello salato.' },
        { nome: 'Crostata Scomposta', prezzo: 7, desc: 'Frolla burrosa, crema pasticcera e frutti di bosco freschi.' },
        { nome: 'Sorbetto Limone e Salvia', prezzo: 5, desc: 'Artigianale, rinfrescante e perfetto per chiudere il pasto.' }
      ]
    }
  ];
}