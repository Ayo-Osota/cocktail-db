import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({id, name, image, info, glass}) => {
  return (
    <div className='cocktail'>
        <img src={image} alt={name} />
      <footer className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn">details</Link>
      </footer>
    </div>
  )
}

export default Cocktail
