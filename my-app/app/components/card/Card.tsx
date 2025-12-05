export default function Card( user: { initials: string, name: string, description: string, source: string} ) {
  return (
    <div className="card">
      <div className="card-description">
        <p>{user.description}</p>
      </div>
      <div className="card-divider"></div>
      <div className="card-user-container">
        <div className="card-user-name-container df-ac-jc">
          <div className="card-user-image-container">
            {user.initials}
          </div>
          <p>{user.name}</p>
        </div>
        <img src={`/${user.source}.svg`} alt="Source icon"/>
      </div>
    </div>
  )
}