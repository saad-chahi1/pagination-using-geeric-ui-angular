import { Component, OnInit } from '@angular/core';
import { GuiColumn, GuiPaging, GuiPagingDisplay } from '@generic-ui/ngx-grid';

import { PagingExampleService } from 'src/app/service/paging-example.service';

@Component({
  selector: 'app-recherche-navire',
  templateUrl: './recherche-navire.component.html',
  providers: [PagingExampleService]
})
export class RechercheNavireComponent implements OnInit {

  columns: Array<GuiColumn> = [{
		header: 'Index',
		field: 'index',
		width: 60
	}, {
		header: 'Character',
		field: 'character'
	}, {
		header: 'Real name',
		field: 'name'
	}, {
		header: 'Abilities',
		field: 'abilities'
	}];

	source: any[] = [];

	paging: GuiPaging = {
		enabled: true,
		page: 1,
		pageSize: 5,
		pageSizes: [5, 15, 20],
		pagerTop: true,
		pagerBottom: true,
		display: GuiPagingDisplay.BASIC
	};

	constructor(private dcDataService: PagingExampleService) {
	}

  ngOnInit(){
    this.dcDataService.getHeroes()
			.subscribe(data => {console.log(data); this.source = data});
  }

}
