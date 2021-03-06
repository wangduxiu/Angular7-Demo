import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.css']
})
export class TransitionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showAside() {
    //获取Dom节点
    let asideDom: any = document.getElementById("aside");
    asideDom.style.transform = "translate(0,0)";
  }

  hideAside() {
    //获取Dom节点
    let asideDom: any = document.getElementById("aside");
    asideDom.style.transform = "translate(100%,0)";
  }
}
