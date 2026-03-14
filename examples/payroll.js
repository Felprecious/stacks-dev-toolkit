import { createInvoice } from "stacks-pay-sdk"

const invoice = await createInvoice({
  amount: 10,
  token: "STX"
})

console.log(invoice)