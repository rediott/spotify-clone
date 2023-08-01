

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
                                <img src="./icon/play-solid(1).svg" />
                            </div>
                       </div>

        </>


    )

}

export default Playlistitem;