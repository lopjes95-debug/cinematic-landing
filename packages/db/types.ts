export type User = {
  id: string
  email: string
  name: string | null
}

export type Proposal = {
  id: string
  title: string
  body: string | null
  author: string
}

export type Vote = {
  id: string
  proposal: string
  voter: string
  vote: 'yes' | 'no' | 'abstain'
}
