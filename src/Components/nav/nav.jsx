import { Fragment, useContext, useEffect, useState } from "react";
import { useViewportWidth } from "../../utils/getViewport";
import { ThemeContext } from "styled-components";
import { Outlet } from "react-router-dom";

import Logo from "../logo/logo";
import MenuSVG from '/asset/IconsSVG/menu.svg'
import CloseSVG from '/asset/IconsSVG/close.svg'
import Quote from "../quote/quote";

import MenuList from '../../data/menuList.json'
import MenuLinkList from "../MenuLinkList/menulinklist";
import MobileMenuList from "../MobileMenuLinkList/mobilemenulinklist";

import { NavDiv,
         NavDivContainer,
         ContentLink,
         MobileDivContainer,
         HamburgerMenu,
         HamburgerMenuIcon,
         SpecialBannerDiv,
         SpecialBanner,
         SubContentLink
        } from "./nav.styles";

const dropdown = [false, false, false];
const Nav = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const [quoteOpen, setQuoteOpen] = useState(false);
    const [openMobileNavIndex, setOpenMobileNavIndex] = useState(-1);
    const [prevMenuName, setPrevMenuName] = useState(null);
    const [currentMenuName, setCurrentMenuName] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(dropdown);
    const width = useViewportWidth();
    const theme = useContext(ThemeContext);

    const handleMobileNavIndex = (index) => {
        setOpenMobileNavIndex(index);
    }

    const handleCurrentMenuName = (str) => {
        setCurrentMenuName(str);
    }

    const handleImageClick = () => {
        setHamburgerOpen(false);
        handleMobileNavIndex(-1);
        setCurrentMenuName(null);
    }

    useEffect(() => {
            let newArr = [...dropdown];
            newArr[openMobileNavIndex] = true;
            setIsDropdownOpen(newArr);
            setPrevMenuName(currentMenuName);
        }
    , [openMobileNavIndex])


    const specialBannerList = [
        "416-627-9128",
        "GET A QUOTE"
    ]

    // const onHamburgerClick = () => setHamburgerOpen(!hamburgerOpen);
    const onQuoteClick = () => setQuoteOpen(!quoteOpen);

    const onLogoClick = () => setHamburgerOpen(false);

    return(
        <Fragment> 
            <NavDiv>
                    <Logo onClick={onLogoClick}/>

                    <SpecialBannerDiv>
                        <SpecialBanner href="tel:4166279128">{specialBannerList[0]}</SpecialBanner>
                        <SpecialBanner onClick={onQuoteClick}>{specialBannerList[1]}</SpecialBanner>
                    </SpecialBannerDiv>

                       { quoteOpen && <Quote onQuoteClick= {onQuoteClick} quoteOpen={quoteOpen}/>}

                {   (width > theme.bp.tablets) 
                    ?  (   
                        <NavDivContainer>
                            <div>
                            {
                                MenuList.map(menuItem => (
                                        <MenuLinkList menuItem={menuItem} key={menuItem.menuName}/>
                                ))
                            }
                            </div>
                        </NavDivContainer>
                        ) :
                        (
                        <MobileDivContainer >

                                { hamburgerOpen ? (
                                    <div>
                                        <HamburgerMenuIcon >
                                            <img src={CloseSVG} alt="Close Menu" className="closeSVG" onClick={handleImageClick}/>
                                        </HamburgerMenuIcon>   
                                        <HamburgerMenu>
                                        {
                                            MenuList.map(menuItem => (
                                                
                                                <MobileMenuList key={menuItem.index} menuItem={menuItem} handleMobileNavIndex={handleMobileNavIndex} activeIndex={isDropdownOpen[menuItem.index]} handleCurrentMenuName={handleCurrentMenuName} prevMenuName={prevMenuName} handleImageClick={handleImageClick}/>
                                            ))
                                        }
                                        </HamburgerMenu>

                                    </div>
                                    ) 
                                    : 
                                    <HamburgerMenuIcon >
                                        <img src={MenuSVG} alt="Menu Hamburger" onClick={() => setHamburgerOpen(true)}/>
                                    </HamburgerMenuIcon> }

                        </MobileDivContainer>
                    )
                }
            </NavDiv>
            <Outlet />
        </Fragment>
    )
}

export default Nav;

// <ContentLink key={menuItem.menuName} to={menuItem.path}>
// {menuItem.menuName}
// </ContentLink>