import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Menu } from './components/menu/menu';
import { Contatti } from './components/contatti/contatti';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'menu', component: Menu },
    { path: 'contatti', component: Contatti }, 
    { path: '**', redirectTo: '' }           

];
