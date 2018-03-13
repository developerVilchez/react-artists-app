import React from 'react';
import ArtistListItem from './Artist-list-item';

 const ArtistList = ( {artistas} ) => (
  <ul className="col-md-4 list-group">
      {artistas.map(artista => 
         <ArtistListItem 
            key = {artista.name}
            {...artista}
         />
      )} 
  </ul>
  ) 

export default ArtistList