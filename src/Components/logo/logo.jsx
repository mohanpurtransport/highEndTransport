import { Fragment, useContext } from "react"
import { useViewportWidth } from "../../utils/getViewport";
import { ThemeContext } from "styled-components";

import {    LogoDivContainer,
            LogoText
        } from './logo.styles'
import { Link } from "react-router-dom";

const Logo = ({onClick}) => {
    const width = useViewportWidth();
    const theme = useContext(ThemeContext);
    
    return (
        <Fragment>

                <LogoDivContainer>
                    {width > theme.bp.tablets ? (
                    <img src="/asset/images/HetLogo.png" alt="High End Transport logo" />
                    ) : null}
                    <Link to='/' >
                        <LogoText onClick={onClick}>
                            High End<span>Transport</span>
                        </LogoText> 
                    </Link>     
                    </LogoDivContainer>

        </Fragment>
    )
}

export default Logo;
