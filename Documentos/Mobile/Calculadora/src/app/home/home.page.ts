import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  primeiroNumero: string = ''; // Inicializa a variável para o campo de entrada
  segundoNumero: string = '';

  selecionarOpcao(event: any) {
    const opcaoSelecionada = event.detail.value;
    console.log('Opção selecionada:', opcaoSelecionada);
  }

  calcular() {
    console.log('Operação:', this.selecionarOpcao);
    console.log('Texto digitado:', this.primeiroNumero);
    console.log('Texto digitado:', this.segundoNumero);
    
  }
}
