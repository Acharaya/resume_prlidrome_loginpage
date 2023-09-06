import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-que2',
  templateUrl: './que2.page.html',
  styleUrls: ['./que2.page.scss'],
})
export class Que2Page implements OnInit {
  constructor() { }
    value : '';
public temporary=[
  {temp:[],output:""}
]
  submit(){

 let i,j;
 console.log(i);
console.log(this.temporary[0].temp);
    for(i=this.value.length,j=0;i<=this.value.length&&j<=this.value.length;i--,j++){   
           console.log(this.temporary[0].temp[j]);
           this.temporary[0].temp[j] =this.value[i];
         }
    let convert="";
    let nc ="";
    for(j=1;j<=this.value.length;j++){
  
       convert=this.temporary[0].temp[j];
       nc=nc.concat(convert);
       console.log("this is string",nc);   
    }
   if(nc.localeCompare(this.value)==0)
    {
      console.log("The input value is palindrome");
      this.temporary[0].output="The input value is palindrome";
    }else
    {
      console.log("The input value is not palindrome");
      this.temporary[0].output="The input value is not palindrome";
    }
  }
  ngOnInit(): void {
        }
}
