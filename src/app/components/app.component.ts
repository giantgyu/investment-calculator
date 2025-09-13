import { Component } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { AnnualInvestmentResult } from "../models/annual-investment-results.model";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
})
export class AppComponent {
  isTableVisible = false;
  annualData!: AnnualInvestmentResult[];

  onCalculateClick(annualData: AnnualInvestmentResult[]) {
    this.isTableVisible = true;
    this.annualData = annualData;
  }
}
