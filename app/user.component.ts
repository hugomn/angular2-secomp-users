import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';
import { UserService } from './user.service';

@Component({
    moduleId: module.id,
    selector: 'my-users',
    templateUrl: 'user.component.html',
    styleUrls: ['user.component.css'],
    providers: [UserService]
})
export class UserComponent {
    constructor(
        private router: Router,
        private userService: UserService) {};
    selectedUser: User;
    users: User[];

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.userService.create(name)
            .then(user => {
                this.users.push(user);
            });
    }

    delete(user: User): void {
        this.userService
        .delete(user.id)
        .then(() => {
            this.users = this.users.filter(u => u !== user);
        });
    }

    onSelect(user: User): void {
        this.router.navigate(['/detail', user.id]);
    }

    getUsers(): void {
        this.userService.getUsers().then(users => this.users = users);
    }
    
    ngOnInit(): void {
        this.getUsers();
    }
}
