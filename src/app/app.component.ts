import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example';
  public componentSettings : Object = {autoCheck: true};
  public mode = "Custom";
  public selectedItemsTemplate = "${value.length} item(s) selected";
  public localData : Object[] = [
    { id: 1, name: 'Laura Callahan', eimg: 'E4', job: 'General Manager', subChild: true, expanded: true },
    { id: 2, pid: 1, name: 'Nancy Davolio', eimg: 'E7', job: 'Product Manager', subChild: true, expanded: true },
    { id: 3, pid: 2, name: 'Andrew Fuller', eimg: 'E1', job: 'Team Lead', subChild: true, expanded: true},
    { id: 4, pid: 3, name: 'Anne Dodsworth', eimg: 'E2', job: 'Developer'},
    { id: 5, pid: 2, name: 'Michael Suyama', eimg: 'E6', job: 'Team Lead', subChild: true, expanded: true},
    { id: 6, pid: 5, name: 'Robert King', eimg: 'E8', job: 'Developer' },
    { id: 7, pid: 5, name: 'Mary', eimg: 'E5', job: 'Developer' },
    { id: 8, pid: 1, name: 'Janet Leverling', eimg: 'E3', job: 'HR' }
  ];
  public datasourceFields :  Object = {
    dataSource: this.localData, 
    parentValue: 'pid', 
    value: 'id', 
    text: 'name', 
    hasChildren: 'subChild'
  };
}
