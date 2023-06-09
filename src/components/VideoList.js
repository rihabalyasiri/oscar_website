import React from "react";

const VidoList = () => {
    return <div className="video_list">
        <div className="video_container">
            <div>
                <iframe controls src="https://www.youtube.com/embed/IGXWoW6_Kd4" frameborder="0" allowfullscreen title="Sarasate Introduction and Tarantella">

                </iframe>
                <h6>Sarasate Introduction and Tarantella | Oscar Pineiro</h6>
            </div>
            <div>
                <iframe controls src="https://www.youtube.com/embed/EBw3TysLbAA" title="Oscar Pineiro | Tienes Talento | Vivaldi">

                </iframe>
                <h6>Oscar Pineiro | Tienes Talento | Vivaldi</h6>
            </div>
            <div>
                <iframe controls src="https://www.youtube.com/embed/8xZDJK1COA0" title="Prelude Nº9 Mompou, Music Catalonia">

                </iframe>
                <h6>Prelude Nº9 Mompou, Music Catalonia</h6>

            </div>
            <div>
                <iframe src="https://www.youtube.com/embed/ZmzYrTlKhkQ" controls title="Rapsodia Sinfónica para piano y orquesta, Joaquin Turina"/>
                <h6>Rapsodia Sinfónica para piano y orquesta, Joaquin Turina</h6>


            </div>
        </div>
    </div>
}

export default VidoList;