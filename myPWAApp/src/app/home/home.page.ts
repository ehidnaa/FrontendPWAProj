import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Device } from '@capacitor/device';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, RouterModule, FormsModule, CommonModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  name: string = '';
  tasks: any[] = [];
  deviceInfo: any = {};

  constructor(private http: HttpClient) {}

  loadTasks() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .subscribe(data => {
        this.tasks = data;
      });
  }

  async getDeviceInfo() {
    this.deviceInfo = await Device.getInfo();
  }
}