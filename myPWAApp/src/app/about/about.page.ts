import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [IonicModule, RouterModule],
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss']
})
export class AboutPage {}