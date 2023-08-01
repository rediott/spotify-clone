

const Songitem = ({photo, title, artist}) => {

    return(
        <>
            <div class="song-item">
                            <div class="song-pic">
                            <img src={photo} alt="" class="album-pic"/>
                            
                            <button><img src="./icon/play-solid(1).svg" class="play-icon"></img></button> 
                            </div>
                            <div class="song-detail">
                                <div class="title-artist">
                                    <h4>{title}</h4>
                                    <p>{artist}</p>
                                </div>
                            </div>
                        </div>

        </>


    )

}

export default Songitem;