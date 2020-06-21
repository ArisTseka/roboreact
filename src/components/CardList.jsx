import React from 'react';
import Card from './Card.jsx';

const CardList = ({robots}) => {
  // if(true){
  //   // Throw Errow to test ErrorBoundry
  //   throw new Error("Noooo");
  // }
  return (
    <div>

      {/* // With .map we can loop through an Array 1st arg = the current objest 2nd the index {i}
       // If we dont Have the deleted prop then !!ON DELETE!! we don't know what to change
       // so react load all page again from Virtual DOM */}

      {
        robots.map((user,i) => {
          return (<Card key={i} id={robots[i].id}
                   name={robots[i].name} email={robots[i].email} />);
        })
      }
    </div>
  );
}

export default CardList;
