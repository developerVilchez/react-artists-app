import React from 'react';

const ArtistDetails = ({artista}) => (
  <div className="artist-detail col-md-8">
    <div className="details">
      <div>{artista.name}</div>
      <div>{artista.bio}</div>
      <div><img src={artista.url} alt={artista.name} /></div>
    </div>
  </div>
)

export default ArtistDetails