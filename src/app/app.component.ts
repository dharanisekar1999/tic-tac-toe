import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tic-Tac-Toe';
  constructor(private toastr: ToastrService){}
  win:string|undefined='';
  isCross=false;
  itemArray:string[]=new Array(9).fill('empty');
  start=false
  player1:any;
  player2:any;
  notfilled:any
  c:any=0;
  noWin:any
  StartGame()
  {

    this.start=true;
    return this.toastr.success("Game Started")
  }
  handleClick(itemNumber:number):any
  {
    if(this.win)
    {
      return this.toastr.success("Game Over");
    }
    if(this.itemArray[itemNumber]==='empty')
    {
      this.itemArray[itemNumber]=this.isCross?"cross":"circle";
      this.isCross=!this.isCross;
    }
    else
    {
      if(this.itemArray[itemNumber]==='cross')
      return this.toastr.warning("Already filled by "+this.player2.toUpperCase())
      else if(this.itemArray[itemNumber]=='circle')
      return this.toastr.warning("filled by "+this.player1.toUpperCase())
    }
    this.c=this.c+1;
    this.isWinner();
    
  }

  
  isWinner()
  {
    this.notfilled=this.itemArray.includes('empty')
    if(this.c===9 && this.win=='')
    {
      this.noWin="yes";
      
    }
    if(this.itemArray[0]===this.itemArray[1] && this.itemArray[1]===this.itemArray[2] && this.itemArray[0]!=='empty')
    {
      this.win=this.itemArray[0]+" won";
    }
    else if(this.itemArray[3]===this.itemArray[4] && this.itemArray[4]===this.itemArray[5] && this.itemArray[5]===this.itemArray[3] && this.itemArray[3]!='empty')
    {  
            this.win=this.itemArray[3]+" won";
    }
    else if(this.itemArray[6]===this.itemArray[7] && this.itemArray[7]===this.itemArray[8] && this.itemArray[8]===this.itemArray[6] && this.itemArray[6]!='empty')
    {
              this.win=this.itemArray[6]+" won";
    }
    else if(this.itemArray[0]===this.itemArray[3] && this.itemArray[3]===this.itemArray[6] && this.itemArray[6]===this.itemArray[0] && this.itemArray[0]!='empty')
    {
              this.win=this.itemArray[0]+" won";
    }
    else if(this.itemArray[1]===this.itemArray[4] && this.itemArray[4]===this.itemArray[7] && this.itemArray[7]===this.itemArray[1] && this.itemArray[1]!='empty')
    {
            this.win=this.itemArray[1]+" won";
    }
    else if(this.itemArray[2]===this.itemArray[5] && this.itemArray[5]===this.itemArray[8] && this.itemArray[8]===this.itemArray[2] && this.itemArray[2]!='empty')
    {
            this.win=this.itemArray[2]+" won";
    }
    else if(this.itemArray[0]===this.itemArray[4] && this.itemArray[4]===this.itemArray[8] && this.itemArray[8]===this.itemArray[0] && this.itemArray[0]!='empty')
    {
            this.win=this.itemArray[0]+" won";
    }
    else if(this.itemArray[2]===this.itemArray[4] && this.itemArray[4]===this.itemArray[6] && this.itemArray[6]===this.itemArray[2] && this.itemArray[2]!='empty')
    {
              this.win=this.itemArray[2]+" won";
    }
    if(this.win==='cross won')
    {
      this.win=this.player2+" won"
    }
    else if(this.win==='circle won')
    {
      this.win=this.player1+" won"
    }
    this.win=this.win?.toUpperCase();
  }
 
  Reload()
  {
    this.win='';
    this.isCross=false;
    this. itemArray=new Array(9).fill('empty');
    this.c=0;
    this.noWin='';
  }
 
}
