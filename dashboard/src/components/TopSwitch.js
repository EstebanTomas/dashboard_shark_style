import React from 'react';

import { Link } from "react-router-dom";

function TopSwitch(){
    return(
        <React.Fragment>
            <div className="conteiner-top">
                <div className="subconteiner-top">
                    <div className="card-switch">
                        <Link to="/" className="link">
                            <div className="name-top">Estadisticas</div>
                        </Link>
                    </div>                  
                    <div className="line"></div>
                    <div className="card-switch">
                        <Link to="/manage" className="link">
                            <div className="name-top">Administrar</div>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default TopSwitch;