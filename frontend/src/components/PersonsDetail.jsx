import React from 'react'


const PersonsDetail = ({array}) => {
  return (
    <div className='person-title'>
      <h1 className='text-center ubuntu my-4'>Rick ands <span className='text-primary'>Morty </span></h1>
      {array.map((charPerson) =>{
        return(
          <></>
          // <div>
          //   <h2>{charPerson.name}</h2>
          //   <h5>{charPerson.species}</h5>
          //   <p>{charPerson.status}</p>
          //   <img src={charPerson?.image} alt="" />
          // </div>
      //   )
      )})
      }</div>
  )
}

export default PersonsDetail