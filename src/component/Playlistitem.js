

const Playlistitem = ({photo, title, duration , numberofSong}) => {

    return(
        <>
  <div class="playlist-item">
                           
                           <img src={photo} alt="" class="albumArt"/>
                           <div class="title">
                               <h4>{title}</h4>
                               <p>{numberofSong} - {duration}</p>
                           </div>
                           <div class="play-icon-type2">
                               <button><img src="./icon/play-solid(1).svg" /></button> 
                            </div>
                       </div>

        </>


    )

}

export default Playlistitem;