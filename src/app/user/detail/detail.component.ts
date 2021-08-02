import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  user: any;

  constructor(private userService: UserService,
    private router: ActivatedRoute) {

     }

  ngOnInit(): void {
    const userId = this.router.snapshot.params.id;
    this.userService.loadUser(userId).subscribe(user =>{
    this.user = user;
    });
  }

}
