
import './App.css';
import Songitem from './component/Songitem';
import Mostplayeditem from './component/Mostplayeditem';
import Playlistitem from './component/Playlistitem';

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


  const mostplay = [
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
      name:"Fireflies",
      artist : "Owl city",
      pic :"./img/oc.jpg"
    }

  ]


  const playlist = [
    {
      name:"Warnet Nostalgia",
      duration : "3 Hour",
      pic :"./img/oc.jpg",
      numberofSong: "23 Song"
    },

    {
      name:"Rock Banget",
      duration : "2 Hour",
      pic :"./img/ATS.jpg",
      numberofSong: "15 Song"
    },

    {
      name:"EDM Nich",
      duration : "1,5 Hour",
      pic :"./img/madeon.jpg",
      numberofSong: "12 Song"
    }
  
  
  ]

  const renderSong = songs.map((song)=> {
    return(
      <Songitem photo = {song.pic} title = {song.name} artist = {song.artist} />
    )
   })

   const renderMostplayed = mostplay.map((song,index)=> {
    return(
      <Mostplayeditem  photo = {song.pic} title = {song.name} artist = {song.artist} index= {index+1} />
    )
   })

   const renderPlaylist = playlist.map((song)=> {
    return(
      <Playlistitem  photo = {song.pic} title = {song.name} duration = {song.duration} numberofSong= {song.numberofSong} />
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
                  {renderMostplayed}
             </div>
          </div>
        </div>

        <div className="playlist-container">
          <div className="playlist-content">
          <h2>Your Playlist</h2>
              <div className="playlist-list">
                {renderPlaylist}

              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
