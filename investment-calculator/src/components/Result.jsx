import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";

export default function Result({userInput}){
    console.log(userInput);
    const resultData = calculateInvestmentResults(userInput);
    console.log(resultData);
    return(
        <>
       <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Interest Earned</th>
                <th>Annual Investment</th>
                <th>Value End of Year</th> 
                <th>Total Interest Earned</th>
            </tr>
        </thead>
        <tbody>
            {resultData.map((data) => ( 
                <tr key={data.year}>
                    <td>{data.year}</td>
                    <td>{formatter.format(data.interest)}</td>
                    <td>{formatter.format(data.annualInvestment)}</td>
                    <td>{formatter.format(data.valueEndOfYear)}</td>
                    <td>{formatter.format(data.interest * data.year)}</td>
                </tr>
            ))}
        </tbody>
       </table>
        </>
    )
}