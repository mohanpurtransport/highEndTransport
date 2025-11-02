
import { Fragment, useState } from "react"

import {
        MenuLinkListContainer,
        MenuLink,
        HoveredMenuContainer,
        HoveredMenuLink
        } from './menulinklist.styles'

const MenuLinkList = ({menuItem}) => {
    const {menuName, moreRoutes, path, subRoutes} = menuItem;
    const [isShown, setIsShown] = useState(false);


    return (
        <Fragment>
        <MenuLinkListContainer>

       { moreRoutes ?
        <div>
                <MenuLink 
                    to={path} 
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                    hovered={isShown ? 1 : 0}
                >
                {menuName}
                </MenuLink>
                { isShown && 
                    <HoveredMenuContainer                    
                        onMouseEnter={() => setIsShown(true)}
                        onMouseLeave={() => setIsShown(false)}
                    >
                        {
                            subRoutes.map(item => (
                             (<HoveredMenuLink to={item.path} key={item.menuName}>{item.menuName}</HoveredMenuLink>)
                            ))
                        }
                    </HoveredMenuContainer>
                } 
            </div> : (<MenuLink to={path}>{menuName}</MenuLink>)
       }
            </MenuLinkListContainer>
        </Fragment>
    )
}

export default MenuLinkList;