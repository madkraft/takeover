import {Component, Input} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

const ANIMATION_TIMINGS = '400ms cubic-bezier(0.25, 0.8, 0.25, 1)';

@Component({
  selector: 'app-takeover',
  templateUrl: './takeover.component.html',
  styleUrls: ['./takeover.component.css'],
  animations: [
    trigger('slideContent', [
      state('void', style({ transform: 'translate3d(0, 50%, 0)', opacity: 0 })),
      state('enter', style({ transform: 'none', opacity: 1 })),
      state('leave', style({ transform: 'translate3d(0, 50%, 0)', opacity: 0 })),
      transition('* => *', animate(ANIMATION_TIMINGS)),
    ])
  ]
})
export class TakeoverComponent {
  @Input() trigger;
  @Input() isOpen;
  animationState: 'void' | 'enter' | 'leave' = 'enter';

}
