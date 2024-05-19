import { Component } from '@angular/core';
import { User } from '../../models/user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  userList: User[] = []

  constructor() {
    this.userList = [
      {name: 'Thiago de Lima', email: 'thiago@email.com', funcao: 'designer'},
      {name: 'Luis Augusto', email: 'luiz@email.com', funcao: 'desenvolvedor-back-end'},
      {name: 'João Vitor Wenceslau', email: 'joao@email.com', funcao: 'desenvolvedor-front-end'},
    ]
  }

  removeUser(index: number): void {
    this.userList.splice(index, 1);
}
}
