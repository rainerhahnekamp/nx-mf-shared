import {Component} from '@angular/core';
import {GridstackComponent, GridstackModule} from "gridstack/dist/angular";
import {GridStackOptions} from "gridstack";

@Component({
  selector: 'test-nx-mf-dashboard-entry',
  template: `
    <div><h1>This is the Remote</h1>
      <gridstack [options]="gridOptions"/>
    </div>`,
  standalone: true,
  imports: [GridstackModule]
})
export class RemoteEntryComponent {
  public gridOptions: GridStackOptions = {
    margin: 5,
    children: [ // or call load()/addWidget() with same data
      {x: 0, y: 0, minW: 2, content: 'Item 1'},
      {x: 1, y: 0, content: 'Item 2'},
      {x: 0, y: 1, content: 'Item 3'},
    ]
  }
}
