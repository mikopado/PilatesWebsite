import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAppConfig } from '../models/app-config.model';
import { AppConfigService } from '../core/app-config.service';
import { IApiResponse } from '../shared/interfaces';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {  

}
