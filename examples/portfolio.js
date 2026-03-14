import { getPortfolio } from "stx-portfolio-sdk"

const address = "SP000000000000000000002Q6VF78"

const portfolio = await getPortfolio(address)

console.log(portfolio)