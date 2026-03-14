import {
  getBalances,
  getDeFiPositions,
  getNFTs,
  getPortfolioValue
} from "stx-portfolio-sdk"

async function main() {
  const address = "SP000000000000000000002Q6VF78"

  const balances = await getBalances(address)
  const defi = await getDeFiPositions(address)
  const nfts = await getNFTs(address)
  const value = await getPortfolioValue(address)

  console.log("Balances:", balances)
  console.log("DeFi:", defi)
  console.log("NFTs:", nfts)
  console.log("Portfolio Value:", value)
}

main()