import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariableService {
    user: User;
  
    constructor() {
        this.user = {
            name: 'Luis Augusto',
            email: 'luis@email.com',
            funcao: 'lider-tecnico',
            password: 'senha123'
        }
    }
}