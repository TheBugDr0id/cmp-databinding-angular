import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit {
  @Input() element: { type: string; name: string; content: string }; //element's type is JS Pbject

  constructor() {}

  ngOnInit(): void {}
}