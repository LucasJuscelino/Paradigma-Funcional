import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-refs',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './refs.component.html',
  styleUrl: './refs.component.css'
})
export class RefsComponent {

}
