export const db = {
  users: {
    list: async () => [{ id: '1', email: 'jesse@rapyard.dev', name: 'Jesse' }]
  },
  proposals: {
    list: async () => [{ id: '1', title: 'Genesis Proposal', body: '...', author: '1' }]
  },
  votes: {
    list: async () => []
  }
}
