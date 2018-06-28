import { Component,OnInit,NgZone } from '@angular/core';
import { ElectronService } from "ngx-electron";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'Tour of Heroes';

  constructor(
    private _router: Router,
    private _electronService:ElectronService,
    private _ngZone:NgZone){ }

  ngOnInit() {
    this._electronService.ipcRenderer.on('navigateTo', (event, arg) => {
      this._ngZone.run(() =>{
        this.navigateTo(event,arg)
      });
    });  
  }

  private navigateTo(event,arg):void{
    console.log(arg);

    this._router.navigate([''+arg+'']);
  }
}
