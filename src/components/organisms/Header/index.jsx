import React from 'react';
import { FaBell, FaEllipsisV, FaSearch } from 'react-icons/fa';

import { HeaderDiv, UserActions, ProfileImage, Search } from './styles';

const Header = () => (
    <HeaderDiv>
        <Search>
            <label htmlFor="">
                <FaSearch /> 
            </label>
            <input type="text" placeholder="Buscar" />
        </Search>
        <UserActions>
            <button>
                <FaBell />
            </button>
            <ProfileImage>   
                <img src="https://avatars0.githubusercontent.com/u/20009195?s=460&u=ab47eda7b9cc311eae995373af99a922ad9d475f&v=4" alt=""/>
            </ProfileImage>
            <button>
                <FaEllipsisV />
            </button>
        </UserActions>
    </HeaderDiv>
);

export default Header;
