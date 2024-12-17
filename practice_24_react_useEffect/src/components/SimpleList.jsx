import { useEffect } from "react"

export default function SimpleList( {listHeaderText, listSource} ) {

  useEffect( () => {
    console.log('List is mounted!');

    return () => {
      console.log('List is unmounted!');
    }
  }, []);

  useEffect( () => {
    console.log('ListSource is changed!')
  }, [listSource]);

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