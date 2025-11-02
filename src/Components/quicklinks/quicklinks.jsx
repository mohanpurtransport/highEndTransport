import { Fragment } from "react";

import Cards from "../cards/cards";

import {QuickLinksHeading,
        QuickLinksContainer
        } from './quicklinks.styles'

const QuickLinks = () => {
    return (
        <Fragment>
            <QuickLinksContainer>
                <QuickLinksHeading>
                    come onboard with us
                </QuickLinksHeading>
                <Cards />
            </QuickLinksContainer>
        </Fragment>
    )
}

export default QuickLinks;