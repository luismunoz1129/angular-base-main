import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
   

  @Input()
  public characterList:Character[] = [];

  @Output()
  onDeleteId:EventEmitter<string> = new EventEmitter();

  // public onDeleteCharacte( index:number):void{
  //   this.onDeleteId.emit(index);
  // }

  public deleteCharacteByIde( character:Character):void{
    this.onDeleteId.emit(character.id);
  }

}
