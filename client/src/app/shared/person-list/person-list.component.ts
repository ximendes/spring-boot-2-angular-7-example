import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  people: Array<any>;

  constructor(private personService:PersonService) { }

  ngOnInit() {
    this.personService.getAll().subscribe(data =>{
      this.people = data;
    });
  }
}
