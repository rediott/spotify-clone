

const Mostplayeditem = ({photo, title, artist,index}) => {

    return(
        <>
                    <div class="mostplayed-song">
                            <h3>{index}</h3>
                            <img src={photo} alt=""/>
                            <div class="title">
                                <h4>{title}</h4>
                                <p>{artist}</p>
                            </div>
                            <img src="./icon/play-solid(1).svg" class="play-icon"></img>
                        </div>

        </>


    )

}

export default Mostplayeditem;