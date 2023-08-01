

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
                            <div class="play-icon-type2">
                            <button><img src="./icon/play-solid(1).svg" /></button> 
                            </div>
                   
                        </div>

        </>


    )

}

export default Mostplayeditem;