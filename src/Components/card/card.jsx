import { Fragment } from "react";

import {CardContainer,
        ImageDiv,
        CardHeading,
        CardButtonDiv,
        CardButton
        } from './card.styles'
import { Link } from "react-router-dom";

const Card = ({cardHeading, altimage, ogimage, cardpath}) => {
    return (
        <Fragment>
            <CardContainer as={Link} to={cardpath}>
                <ImageDiv altimage = {altimage} ogimage = {ogimage} />
                <CardHeading>
                    {cardHeading}
                </CardHeading>
                <CardButtonDiv as="div">
                    <CardButton>
                        Learn more
                    </CardButton>
                </CardButtonDiv>

            </CardContainer>
        </Fragment>
    )
}

export default Card;