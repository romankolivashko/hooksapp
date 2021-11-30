import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'hotel California', id: 1},
    { title: 'hey girl', id: 2},
    { title: 'hey boy', id: 3}
  ]);
  const addSong = (title) => {
    setSongs([...songs, {title, id: uuidv4() }])
  }
  return ( 
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return ( <li key={song.id}>{song.title}</li>);
        })}
      </ul>
      {/* <button onClick={addSong}>Add Song</button> */}
      <NewSongForm addSong={addSong} />
    </div>
   );
}
 
export default SongList;