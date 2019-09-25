import React from 'react';
import './App.css';
import Card from './components/Card/Card';

const data = [
  {name:"Matrix",image:"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,665,1000_AL_.jpg",anio:"2000"},
  {name:"Spiderman",image:"https://images-na.ssl-images-amazon.com/images/I/61IKcuuL9WL._SL1327_.jpg",anio:"2012"},
  {name:"Toy Story",image:"https://img.chilango.com/2019/05/trailer-final-toy-story-4.jpg",anio:"2015"}
]

class App extends React.Component {
  render() {
    return (
      <div>
        {data.map((data,i)=>{
          return(
            <Card name={data.name} poster={data.image} estreno={data.anio} key={i} />
            )
          })}
      </div>
    )
  }
}

export default App;