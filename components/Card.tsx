import { View } from 'react-native'

export function Card({ children }) {
  return (
    <View style={{
      padding: 16,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
      marginBottom: 16
    }}>
      {children}
    </View>
  )
}
