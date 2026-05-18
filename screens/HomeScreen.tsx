import { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'

export default function HomeScreen({ navigation }) {
  const [proposals, setProposals] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/proposals')
      .then(res => res.json())
      .then(setProposals)
  }, [])

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>RapYard Proposals</Text>
      {proposals.map((p: any) => (
        <TouchableOpacity
          key={p.id}
          onPress={() => navigation.navigate('Proposal', { id: p.id })}
          style={{
            padding: 16,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 8,
            marginBottom: 12
          }}
        >
          <Text style={{ fontSize: 18 }}>{p.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}
