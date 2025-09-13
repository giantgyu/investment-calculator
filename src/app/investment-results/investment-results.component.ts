import { Component } from "@angular/core";

@Component({
  selector: "app-investment-results",
  standalone: true,
  imports: [],
  templateUrl: "./investment-results.component.html",
  styleUrl: "./investment-results.component.css",
})
export class InvestmentResultsComponent {
  isCalculatePressed = true;
  initialInvestment = 0;
  duration = 0;
  expectedReturn = 0;
  annualInvestment = 0;

  calculateInvestmentResults() {
    const annualData = [];
    let investmentValue = this.initialInvestment;

    for (let i = 0; i < this.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (this.expectedReturn / 100);
      investmentValue += interestEarnedInYear + this.annualInvestment;
      const totalInterest =
        investmentValue - this.annualInvestment * year - this.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: this.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested:
          this.initialInvestment + this.annualInvestment * year,
      });
    }

    return annualData;
  }
}
