import { Component } from '@angular/core';
import { DemoService } from '../../../services/driveService/drive.service';

@Component({
  selector: 'profile-root',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent {
  constructor(
    private _demoService: DemoService
  ) {}
  title = 'profile';
  email = 'bhimeshchauhan@gmail.com';
  public connect(event) {
    // this._demoService.getFoods().subscribe(val => console.log(val));
    this._demoService.initialize();
  }
}
