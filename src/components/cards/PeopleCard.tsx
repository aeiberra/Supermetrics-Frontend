const PeopleCard = ({ content }: { content: Object }): JSX.Element => {
  const cards: any = []
  Object.entries(content).forEach(([key, value], index) => {
    cards.push(
      <div className='card card-container dashboard' key={key}>
        <img src={`https://i.pravatar.cc/150?u=${key}`} alt={`User: ${key}`} className='profile-img-card' />
        <div>
          <h4><b>{value.name}</b></h4>
          <p><b>ID:</b> {value.id}</p>
          <p><b>Posts:</b> {value.posts}</p>
          <p><b>Total Characters:</b> {value.characters}</p>
          <p><b>Characters Average:</b> {value.charactersAverage}</p>
          <p><b>Posts Per Month:</b></p> <ul>{renderMonth(value.postsPerMonth)}</ul>
          <p><b>Longest Post:</b></p><p>{value.longestPost}</p>
        </div>
      </div>
    )
  })
  return cards
}

const renderMonth = (data: number[]): JSX.Element[] => {
  const month: JSX.Element[] = []
  data?.forEach((value, index) => {
    if (value !== 0) {
      month.push(<li key={index}><b>{monthNames[index]}</b> {value}</li>)
    }
  })
  return month
}

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
] as const

export default PeopleCard
