import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User} from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];  
  selectedUser: User = { id : null , name: null, email: null, password: null};
  constructor(private userService: UsersService) {
    this.userService.readUsers().subscribe((users: User[])=>{
      this.users = users;
    })
  }
  userCreate(form:any){
    this.userService.createUser(form.value).subscribe((user: User[])=>{console.log("User created ", user);
  })
  }

  ngOnInit(): void {
  }

}
