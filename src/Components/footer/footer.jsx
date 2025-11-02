import { Fragment } from "react"
import Logo from "../logo/logo"

import iconData from '../../data/footerLinks.json'
import MenuList from '../../data/menuList.json'

import {
            FooterContainer,
            SocialATag,
            FirstRowDiv,
            FooterLogoDiv,
            SecondRowDiv,
            FooterLink,
            FooterSubRoute,
            FooterSubRouteLink,
            ThirdRowDiv
        } from './footer.styles'


const Footer = () => {

    return(
        <Fragment>
            <FooterContainer>
                <FirstRowDiv>
                    <SocialATag ogicon={iconData[0].iconSource} alticon={iconData[0].hoverIconSource} href="tel:4166279128" />
                    <FooterLogoDiv>
                        <Logo />
                    </FooterLogoDiv>
                    <SocialATag ogicon={iconData[1].iconSource} alticon={iconData[1].hoverIconSource} href="mailto:highendtransprt@gmail.com?subject=High End Transportation Query- redirect from website"/>
                </FirstRowDiv>
                <SecondRowDiv>
                {
                    MenuList.map(menuItem => (
                        <div key={menuItem.index}>
                            <FooterLink  to={menuItem.path}>
                                {menuItem.menuName}
                            </FooterLink>
                            {
                                menuItem.moreRoutes && (
                                    <FooterSubRoute>
                                        {
                                            menuItem.subRoutes.map(subItem => (
                                                <FooterSubRouteLink key={subItem.index} to={subItem.path}>
                                                    {subItem.menuName}
                                                </FooterSubRouteLink>
                                            ))
                                        }
                                    </FooterSubRoute>
                                )
                            }
                        </div>
                    ))
                }
                </SecondRowDiv>
                <ThirdRowDiv>
                <span>
                    &copy; High End Transport 2025
                </span>
                </ThirdRowDiv>
            </FooterContainer>
        </Fragment>
    )
}

export default Footer;