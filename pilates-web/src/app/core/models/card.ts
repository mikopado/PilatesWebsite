export interface Card {
  title: string,
  imageUrl: string,
  description: string
}

export interface MembershipCard extends Card {
  id: string
}

  