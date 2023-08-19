import { Injectable } from '@angular/core';
import { FirestoreDbService } from './firestore-db.service';
import { User } from '../models/user.model';
import { UtilitiesService } from './utilities.service';

@Injectable({
  providedIn: 'root'
})
export class UsersUtilService {

  users!: User[];

  constructor(private db: FirestoreDbService) {
    // this.addUser('ali', 'ali@gmail.com', '123');
    this.login('admin', '@dm!n#123')
    // this.login('ali@gmail.com', '123')
    this.addUser('ali', 'ali2@gmail.com', '123');
   }

  async getUsers() {
    this.users =  await this.db.loadCollection('users') as User[];
    return this.users;
  }

  checkExistingUser(userName: string) {
    return this.users.findIndex(user => user.userName === userName) !== -1
  }

  async addUser(name: string, email: string, password: string) {
    try {
      !this.users?.length && await this.getUsers();
      if (this.checkExistingUser(email)) {
        alert('existing user')
        return;
      }
      const pass = await UtilitiesService.hash(password) as string;
      const user: User = {
        id: (this.users.length + 1).toString(),
        userName: email,
        name,
        pass,
        token: UtilitiesService.generateToken(),
        creator: this.db.getAuthCredentials()?.token || ''
      }
      this.db.addToCollection('users', user, email);
      
    } catch (error) {
      console.log('Error in add user', error)
    }
  }

  async login(userName: string, password: string) {
    try {
      const pass = await UtilitiesService.hash(password);
      this.db.validateUser(userName, pass as string)
        .then((info: any) => {
          if (info && info.length) {
            const userInfo = { id: info[0]['id'], name: info[0]['name'] };
            sessionStorage.setItem('user', JSON.stringify(userInfo));
            sessionStorage.setItem('token', info[0]['token']);
          } else {
            alert("Invalid Credentials");
          }
        });
    } catch (error) {
      console.log('Error in login', error)
    }
  }
}
