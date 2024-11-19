import { Component } from '@angular/core';
import { InfoComponent } from '../../components/info/info.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-linguagens',
  standalone: true,
  imports: [InfoComponent, ButtonComponent],
  templateUrl: './linguagens.component.html',
  styleUrl: './linguagens.component.css'
})
export class LinguagensComponent {

}
