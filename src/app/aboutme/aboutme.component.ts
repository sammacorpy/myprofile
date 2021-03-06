import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss'],
  animations: [
    trigger('bounceup', [
      state('void', style({
        opacity: 1,
        transform: 'translateY(-100%)',


      })),
      transition("void<=>*", [animate("600ms ease-in", keyframes(
        [style({
          transform: 'translateY(20%)', offset: 0.5
        }),
        style({
          transform: 'translateY(0%)', offset: 1

        }),



        ]))])
    ])
  ]
})
export class AboutmeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
