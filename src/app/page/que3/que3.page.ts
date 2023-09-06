import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-que3',
  templateUrl: './que3.page.html',
  styleUrls: ['./que3.page.scss'],
})
export class Que3Page implements OnInit {
  constructor(private router:Router,public alertController: AlertController) { }
  public Email: any;
  public password: any;
  public data = [
   { email:'aryan' ,
    Password:'1234'
    }];
  Login()
  {
    let ne=this.Email;
    let np=this.password;
    let ie=this.data[0].email;
    let ip=this.data[0].Password;
    if(ie.localeCompare(ne)==0&&ip.localeCompare(np)==0)
    {
      console.log("correct email and password");
      this.router.navigate(['/', 'login']);
    }
    else
    {
      console.log("incorrect email or password");
      this.alertController.create({
        header: 'Caution',
        subHeader: 'error',
        message: 'Please check email and password',
        buttons: ['OK']
      }).then(res => {
  
        res.present();
  
      });
}
    }
  ngOnInit() {
  }

}
