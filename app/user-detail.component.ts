import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { User } from './user';
import { UserService } from './user.service';

@Component({
    moduleId: module.id,
    selector: 'user-detail',
    templateUrl: 'user-detail.component.html',
    styleUrls: ['user-detail.component.css'],
    providers: [UserService]
})
export class UserDetailComponent implements OnInit {
    @Input()
    user: User;

    constructor(
        private userService: UserService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.userService.getUser(id)
                .then(user => this.user = user);
        });
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.userService.update(this.user)
            .then(() => this.goBack());
    }
}
