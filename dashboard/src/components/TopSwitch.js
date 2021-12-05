import React from 'react';

import { Link } from "react-router-dom";

function TopSwitch(){
    return(
        <React.Fragment>
            <div className="conteiner-top">
                <div className="subconteiner-top border border-radius background">
                    <div className="card-switch">
                        <Link to="/" className="link">
                            <div className="azul-oscuro title-top">Estadisticas</div>
                        </Link>
                    </div>                  
                    <div className="line background-celeste"></div>
                    <div className="card-switch">
                        <Link to="/manage" className="link">
                            <div className="azul-oscuro title-top">Administrar</div>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default TopSwitch;