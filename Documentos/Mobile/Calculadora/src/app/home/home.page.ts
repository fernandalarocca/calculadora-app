import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertController: AlertController) {
    this.primeiroNumero = 0;
    this.segundoNumero = 0;
  }

  primeiroNumero: number;
  segundoNumero: number;
  operacaoSelecionada: string = '';

  calcular() {
    const num1 = parseFloat(this.primeiroNumero.toString()); // Converter para número
    const num2 = parseFloat(this.segundoNumero.toString()); // Converter para número

    if (this.operacaoSelecionada === 'opcao1') {
      return this.soma(num1, num2);
    } else if (this.operacaoSelecionada === 'opcao2') {
      return this.subtracao(num1, num2);
    } else if (this.operacaoSelecionada === 'opcao3') {
      return this.multiplicacao(num1, num2);
    } else if (this.operacaoSelecionada === 'opcao4') {
      return this.divisao(num1, num2);
    } else {
      console.log('Nenhuma operação selecionada.');
      return ''; // Retornar uma string vazia caso nenhuma operação seja selecionada
    }
  }

  soma(num1: number, num2: number) {
    console.log('Ação 1 executada.');
    const resultadoSoma: number = num1 + num2;
    return resultadoSoma.toString(); // Converter o resultado para string
  }

  subtracao(num1: number, num2: number){
    console.log('Ação 2 executada.');
    const resultadoSubtracao: number = num1 - num2;
    return resultadoSubtracao.toString();
  }

  multiplicacao(num1: number, num2: number){
    console.log('Ação 3 executada.');
    const resultadoMultiplicacao: number = num1 * num2;
    return resultadoMultiplicacao.toString();
  }

  divisao(num1: number, num2: number){
    console.log('Ação 4 executada.');
    const resultadoDivisao: number = num1 / num2;
    return resultadoDivisao.toString();
  }

  async exibirAlerta() {
    const resultado = this.calcular();
    const alert = await this.alertController.create({
      header: 'Calculado!',
      message: resultado,
      buttons: ['OK']
    });

    await alert.present();
  }
}
