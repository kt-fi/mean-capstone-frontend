import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
    
  }

}
