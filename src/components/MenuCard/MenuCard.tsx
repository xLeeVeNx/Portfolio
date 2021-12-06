import React from "react";

import { Link } from "react-scroll";

interface IMenuCard {
  img: string;
  title: string;
  to: string;
}

const MenuCard: React.FC<IMenuCard> = ({ img, title, to }) => {
  return (
    <Link className="menu__card" to={to} spy={true} smooth={true}>
      <div className="menu__link">
        <img src={img} alt={title} className="menu__image" />
        <p className="menu__text">{title}</p>
      </div>
    </Link>
  );
};

export default MenuCard;
