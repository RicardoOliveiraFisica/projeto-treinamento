import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-treinamento';
  nomePai = "Ricardo";
  nomes: string[] = ["Ana",
                      "João",
                      "Maria",
                      "Pedro",
                      "Ativo"
                    ];

  buttonDisabled(): boolean {
    return this.nomePai !== "Ativo";
  }
}
