import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss']
})
export class InitComponent implements OnInit {

  constructor(private rout: Router) { 
    setTimeout(f=>{
      this.rout.navigate(['/u/#']);
    },3000);
  }

  ngOnInit() {
  }

}
