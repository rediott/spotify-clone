
import './App.css';
import Songitem from './component/Songitem';

function App() {
  // const song = {
  //   name:"Tip of The IceBerg",
  //   artist : "Owl city",
  //   pic :"./img/oc.jpg"
  // }

  const songs = [
    {
      name:"Tip of The IceBerg",
      artist : "Owl city",
      pic :"./img/oc.jpg"
    },
    {
      name:"Waiting for the end",
      artist : "Linkin Park",
      pic :"./img/ATS.jpg"
    },
    {
      name:"Star Treatment",
      artist : "Arctic Monkeys",
      pic :"./img/tbhc.png"
    },
    {
      name:"Miracle",
      artist : "Madeon",
      pic :"./img/madeon.jpg"
    },
    
    {
      name:"Ultracheese",
      artist : "Arctic Monkeys",
      pic :"./img/tbhc.png"
    },
    {
      name:"The Catalyst",
      artist : "Linkin Park",
      pic :"./img/ATS.jpg"
    },
    {
      name:"Borealis",
      artist : "Madeon",
      pic :"./img/madeon.jpg"
    },
    {
      name:"Fireflies",
      artist : "Owl city",
      pic :"./img/oc.jpg"
    },
    {
      name:"Vanilla Twilight",
      artist : "Owl city",
      pic :"./img/oc.jpg"
    }

  ]

  const renderSong = songs.map((song)=> {
    return(
      <Songitem photo = {song.pic} title = {song.name} artist = {song.artist} />
    )
   })

              
  return (
    <div className="container">
      <h1 className="head-title">Spotify Clone</h1>
      <div className="main-container">

        <div className="song-container">
          <div className='song-content'>
              <h2>Explore Your Daily Music</h2>
              <div className='song-grid'>
                {renderSong}
              </div>
          </div>
        </div>

        <div className="mostplayed-container">
          <div className="mostplayed-content">
            <h2>On Repeat</h2>
             <div className="mostplayed-list">

             </div>
          </div>
        </div>

        <div className="playlist-container"></div>
      </div>
    </div>
  );
}

export default App;
