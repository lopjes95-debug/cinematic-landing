async function getProposals() {
  const res = await fetch('http://localhost:4000/proposals')
  return res.json()
}

export default async function ProposalsPage() {
  const proposals = await getProposals()

  return (
    <div>
      <h2>All Proposals</h2>
      <ul>
        {proposals.map((p: any) => (
          <li key={p.id}>
            <a href={'/proposals/' + p.id}>{p.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
