import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { LinguagensComponent } from './pages/linguagens/linguagens.component';
import { HaskellComponent } from './pages/haskell/haskell.component';
import { VantagensDesvantagensComponent } from './pages/vantagens-desvantagens/vantagens-desvantagens.component';
import { UsosComponent } from './pages/usos/usos.component';
import { RefsComponent } from './pages/refs/refs.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'sobre', component: SobreComponent, pathMatch: 'full' },
    { path: 'linguagens', component: LinguagensComponent, pathMatch: 'full' },
    { path: 'haskell', component: HaskellComponent, pathMatch: 'full' },
    { path: 'vantagens&desvantagens', component: VantagensDesvantagensComponent, pathMatch: 'full' },
    { path: 'usos', component: UsosComponent, pathMatch: 'full' },
    { path: 'refs', component: RefsComponent, pathMatch: 'full' },
    { path: '**', redirectTo: '' }
];
