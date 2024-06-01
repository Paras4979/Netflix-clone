import React from 'react'
import Card from './Card';

export default function CardSlider({data,title}) {
  return (
    <div>

{data.map((movie,index)=>{
  return <Card moviedata={movie} index={index } key={movie.id}/>;
})}
    </div>
  )
}
