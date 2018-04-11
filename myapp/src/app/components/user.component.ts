import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: `user.component.html`,
    providers: [PostsService]
})
export class UserComponent  { 
  name: string;
  email: string;
  address: IAddress;
  hobbies: string[];
  showHobbies: boolean;
  posts: IPost[];

  constructor(private postsService: PostsService){
      this.name = 'Amiya Aloke';
      this.email = 'aaloke@slb.com';
      this.address = {
        street: '1000 Main st.',
        city: 'Houston',
        state: 'TX',
        zipcode: 77001
      };

      this.hobbies = ['Programming', 'Music', 'Sports'];
      this.showHobbies = false;
      this.postsService.getPosts().subscribe(posts => {
          this.posts = posts;
      })
  }

  toggleHobbies(){
      this.showHobbies = !this.showHobbies;
  }
 
  deleteHobby(i:number){
      this.hobbies.splice(i,1);
  }

  addHobby(hobby:string){
      this.hobbies.push(hobby);
      hobby=''
  }
 }

 interface IAddress{
    street: string;
    city: string;
    state: string;
    zipcode: number
}

interface IPost{
    id: number;
    title: string;
    body: string;
}