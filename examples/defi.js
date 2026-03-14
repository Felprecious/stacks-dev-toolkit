import { getDefiActivity } from "stx-defi-activity-sdk"

const address = "SP000000000000000000002Q6VF78"

const activity = await getDefiActivity(address)

console.log(activity)