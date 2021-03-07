import './card.styles.css'

export const Card = props => {
  return (
   <div className='card-container'>
      <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="monster default profile"/>
      <h2>{ props.monster.name }</h2>
      <h3>{ props.monster.username }</h3>
      <p>{ props.monster.email }</p>
    </div>
  )
}