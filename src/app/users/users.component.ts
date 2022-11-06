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
    this.userService.createUser(form.value).subscribe((user: User)=>{console.log("User created ", user);
    this.userService.readUsers().subscribe((users: User[])=>{
      this.users = users;
    })
  })
  }
  userUpdate(form:any){
    form.value.id = this.selectedUser.id;
    this.userService.updateUser(form.value).subscribe((user: User)=>{console.log("User updated ", user);
    this.userService.readUsers().subscribe((users: User[])=>{
      this.users = users;
    })
  })
  }
  selectUser(user: User){
    this.selectedUser = user;
  }
  deleteUser(id:any){
    this.userService.deleteUser(id).subscribe((user: User)=>{console.log("User Deleted ", user);
    this.userService.readUsers().subscribe((users: User[])=>{
      this.users = users;
    })
  })
  }
  ngOnInit(): void {
  }

}
