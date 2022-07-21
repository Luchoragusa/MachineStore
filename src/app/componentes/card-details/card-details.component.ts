import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent {

  id = '';

  constructor(
    private _activatedRoute: ActivatedRoute
    // private _gamesService: GamesService
  ) {
    if (this._activatedRoute.snapshot.params['cardId']) {
      this._activatedRoute.params.subscribe((params: Params) => {
        if (params['cardId']) {
          this.id = params['cardId'];
        }
      });
    }
      
    }
}
