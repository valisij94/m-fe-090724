export default function SimpleList( {listHeaderText, listSource} ) {

  return (
    <>
      { listHeaderText && <h4>{listHeaderText}</h4> }
      {
        listSource && listSource.length > 0 ? (
          <ul>
            {
              listSource.map(el => <li key={el}>{el}</li>)
            }
          </ul>
        ) :
        <p>Empty Data Source!</p>
      }
    </>
  )
}