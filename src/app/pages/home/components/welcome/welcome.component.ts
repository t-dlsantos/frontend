import { Component } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent {
  users: User[] = [];
  roleList = [
    'lider-tecnico',
    'engenheiro-be',
    'engenheiro-fe',
    'analista-de-dados',
  ];

  getUsersByRole(role: string): User[] {
    return this.users.filter(user => user.funcao === role.toLowerCase().replace(' ', '-'));
  }

  getLenOfUsers(): number {
    return this.users.length;
  }

  constructor() {
    this.users = [
      {name: 'Romeu', email: 'cledison@email.com', funcao: 'lider-tecnico'},
      {name: 'André', email: 'matheus@email', funcao: 'engenheiro-be'},
      {name: 'Gabriel', email: 'vinicius@email.com', funcao: 'engenheiro-fe'},
      {name: 'Ronaldo', email: 'luan@email.com', funcao: 'analista-de-dados'},
    ]
  }
}
