import { Component } from '@angular/core';
import { InfoComponent } from '../../components/info/info.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [InfoComponent, ButtonComponent],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent {

}
