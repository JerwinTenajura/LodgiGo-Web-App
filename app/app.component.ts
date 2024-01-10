import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'LodgiGo';
  items$: any[];

  constructor(private db: AngularFireDatabase) {
    // Access the 'items' node in your Firebase Realtime Database
    this.items$ = [];
  }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper-container', {});
  }
}
