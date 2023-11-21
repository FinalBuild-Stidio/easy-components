import type { PropsWithChildren } from 'react'
import Card from './components/Card'
import Divider from './components/Divider'
import TabPane from './components/TabPane'
import type { CardProps, CardType } from './typing'

export type ProCardProps = CardProps

export type ProCardType = CardType & {
  isProCard: boolean
  Divider: typeof Divider
  TabPane: typeof TabPane
  Group: typeof Group
}

const Group = (props: PropsWithChildren<CardProps>) => (
  <Card bodyStyle={{ padding: 0 }} {...props} />
)

// 當前不對底層 Card 做封裝，僅掛載子組件，直接導出
// @ts-ignore
const ProCard: ProCardType = Card

ProCard.isProCard = true
ProCard.Divider = Divider
ProCard.TabPane = TabPane
ProCard.Group = Group

export default ProCard
