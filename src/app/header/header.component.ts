import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  exibeMenu: boolean = true;
  estilo = {};
  hamburguer = {};
  labelAdicional: string = "teste";

  toggle(){
    if (this.exibeMenu === true){
      this.exibeMenu = false;
      this.ativo();
    }else{
      this.exibeMenu = true;
      this.inativo();
    }
  }

  ativo(){

    this.hamburguer = {
      "transform" : "rotate(45deg)",
      "transition" : ".6s"
    }

    this.estilo = {
      "display" : "flex",
      "height" : "calc(100vh - 60px)",
      "width" : "100vw"
    }
  }

  inativo(){
    this.estilo = {
      "display" : "none",
    }

    this.hamburguer = {
      "transform" : "rotate(0deg)",
      "transition" : ".6s"
    }
  }

}
