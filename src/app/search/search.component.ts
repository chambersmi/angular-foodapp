import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  searchTerm:String = "";

  constructor(private route:ActivatedRoute, private router:Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params["searchTerm"]) {
        this.searchTerm = params["searchTerm"];
      }
    })
  }

  search():void {
    // check if the term is valid, then route to the /search/ link and include the term
    if(this.searchTerm) {
      this.router.navigateByUrl('/search/' + this.searchTerm)
    }
  }
}
