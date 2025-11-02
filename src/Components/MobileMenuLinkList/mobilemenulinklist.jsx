import { Fragment} from "react"
import CaretDown from '/asset/IconsSVG/caret-down.svg'


import { Link } from "react-router-dom";

import {
    MobileMenuLinkListContainer,
    MobileMenuLink,
    OpenedMenuListContainer,
    OpenedMenuLink
        } from './mobilemenulinklist.styles'

const MobileMenuList = ({menuItem, handleMobileNavIndex, activeIndex, handleCurrentMenuName, prevMenuName, handleImageClick}) => {
    const {index, menuName, moreRoutes, path, subRoutes} = menuItem;

    const onMobileMenuLinkClicked = () => {
        handleCurrentMenuName(menuName);
        if (prevMenuName=== null){
            handleMobileNavIndex(index);
        } else if (menuName === prevMenuName){
            handleCurrentMenuName(null);
            handleMobileNavIndex(-1);
        } else {
            handleMobileNavIndex(index);
        }
    }

    return (
        <Fragment>
            {
                moreRoutes ?

                (
                    <Fragment>
                        <MobileMenuLink onClick={onMobileMenuLinkClicked}>
                            {menuName}
                            {!activeIndex && <div/>}
                        </MobileMenuLink>

                        <OpenedMenuListContainer>
                            {activeIndex && 
                                <div>
                                {
                                subRoutes.map(item => (
                                    (

                                            <OpenedMenuLink key={item.index} to={item.path} onClick={handleImageClick}>{item.menuName}</OpenedMenuLink>    

                                    )
                                ))
                            }
                            </div>
                        }
                        </OpenedMenuListContainer>
                    </Fragment>
                )

                 :
                 <MobileMenuLink as={Link} to={path} onClick={handleImageClick}>
                    {menuName}
                </MobileMenuLink>
            }
        </Fragment>
    )
}

export default MobileMenuList;

// {
//     isOpen && <OpenedMenuListContainer>{
//         subRoutes.map(item => (
//             (<OpenedMenuLink key={item.menuName}>{item.menuName}</OpenedMenuLink>)
//         ))
//     }
//     </OpenedMenuListContainer>
// }