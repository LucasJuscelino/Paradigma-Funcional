import { Component } from '@angular/core';
import { InfoComponent } from '../../components/info/info.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-haskell',
  standalone: true,
  imports: [InfoComponent, ButtonComponent],
  templateUrl: './haskell.component.html',
  styleUrl: './haskell.component.css'
})
export class HaskellComponent {

}
