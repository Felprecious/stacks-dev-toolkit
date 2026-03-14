import { getPortfolio } from "stx-portfolio-sdk"

async function main() {
  const address = "SP000000000000000000002Q6VF78"
  const portfolio = await getPortfolio(address)

  console.log("Portfolio:", portfolio)
}

main()