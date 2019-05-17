
import {  OnInit,
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef
} from '@angular/core';
import {  MaterialModule } from '../material/material.module';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  edit = false;
  user = {  };
  maxDate = new Date();
  constructor() { }

  ngOnInit() {
  }

  
}

export class DatepickerMinMaxExample {
  
}