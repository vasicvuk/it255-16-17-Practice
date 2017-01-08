import { Component, Directive } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Component({
  selector: 'HomePage',
  templateUrl: 'app/home/home.html'
})

export class HomePageComponent {
	private korisnici = 'korisnici.json';
	data: Object[];
  name: String = "";
	constructor (private http: Http){
		this.http.get(this.korisnici).subscribe(
			data => {
				this.data =  JSON.parse(data["_body"]);
			},
			err => console.log(err.text()),
				() => {
				}
		);
	}
}
