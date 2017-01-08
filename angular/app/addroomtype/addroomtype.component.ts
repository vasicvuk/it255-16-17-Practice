import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({
  selector: 'AddRoomTypeComponent',
  templateUrl: 'app/addroomtype/addroomtype.html',
})

export class AddRoomTypeComponent {

  http: Http;
  router: Router;
  postResponse: Response;
  addRoomTypeForm = new FormGroup({
    name: new FormControl()
  });
  constructor(http: Http, router: Router) {
    this.http = http;
    this.router = router;

  }
  onAddRoomType(): void {
    var data = "name="+this.addRoomTypeForm.value.name;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append("token",localStorage.getItem("token"));
    this.http.post('http://localhost/it255/addroomtypeservice.php',data, {headers:headers})
      .map(res => res)
      .subscribe( data => this.postResponse = data,
        err => alert(JSON.stringify(err)),
        () => {
          if(this.postResponse["_body"].indexOf("error") === -1){
            this.router.navigate(['./allroomtypes']);
          }else{
            alert("Neuspesno dodavanje tipa sobe");
          }
        }
      );

  }
}
