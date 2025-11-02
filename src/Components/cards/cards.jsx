import { Fragment } from "react";

import Card from "../card/card";
import quickLinksData from '../../data/quicklinkCards.json'

import {CardsContainer} from './cards.styles'

const Cards = () => {
    return (
        <Fragment>
            <CardsContainer>
            {
                quickLinksData.map(data => {
                    return (
                        <Card key={data.key} cardHeading={data.cardHeadings} ogimage={data.pictureSrc} altimage={data.hoverPictureSrc} cardpath={data.path}/>
                    )
                })
            }
            </CardsContainer>
        </Fragment>
    )
}

export default Cards;