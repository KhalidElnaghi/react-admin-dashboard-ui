import { Link } from "react-router-dom";
import Style from "./menu.module.scss";
import { menu } from "../../data";

const Menu = () => {
  return (
    <div className={Style.menu}>
      {menu.map((item) => {
        return (
          <div className={Style.item} key={item.id}>
            <span className={Style.title}>{item.title.toUpperCase()}</span>

            {item.listItems.map((listItem) => {
              return (
                <Link key={listItem.id} className={Style.listItem} to={listItem.url}>
                  <img src={`./${listItem.icon}`} alt="" />
                  <span className={Style.listItemTitle}>{listItem.title}</span>
                </Link>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
