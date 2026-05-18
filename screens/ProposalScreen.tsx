import { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'

export default function ProposalScreen({ route }) {
  const { id } = route.params
  const [proposal, setProposal] = useState(null)

  useEffect(() => {
    fetch('http://localhost:4000/proposals')
      .then(res => res.json())
      .then(all => setProposal(all.find((p: any) => p.id === id)))
  }, [])

  if (!proposal) return <Text>Loading...</Text>

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>{proposal.title}</Text>
      <Text style={{ fontSize: 16, marginBottom: 20 }}>
        {proposal.body || 'No description'}
      </Text>
      <Text style={{ fontWeight: 'bold' }}>Author: {proposal.author}</Text>
    </ScrollView>
  )
}
