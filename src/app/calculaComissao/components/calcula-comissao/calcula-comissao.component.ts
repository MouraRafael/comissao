import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcula-comissao',
  templateUrl: './calcula-comissao.component.html',
  styleUrls: ['./calcula-comissao.reset.css','./calcula-comissao.component.css']
})
export class CalculaComissaoComponent implements OnInit {
  data={
    salario:0,
    comissaoVenda:0,
    qtdCarrosVendidos:0,
    comissaoTotal: 0
  }
  constructor() { }

  ngOnInit(): void {
  }

  atualizaSalario(sal:string){
    let num = parseFloat(sal);
    this.data.salario = num;
  }
  atualizaComissao(comi:string){
    let num = parseFloat(comi)
    this.data.comissaoVenda = num;
  }
  
  
  atualizaCarros(qtd:string){
    let num = parseInt(qtd)
    this.data.qtdCarrosVendidos = num;
  }

  calcula(){
    this.data.comissaoTotal = this.data.salario+(this.data.comissaoVenda*this.data.qtdCarrosVendidos);
  }

}
