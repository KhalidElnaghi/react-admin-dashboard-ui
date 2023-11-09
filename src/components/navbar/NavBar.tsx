import Style from "./navbar.module.scss";

const NavBar = () => {
  return (
    <div className={Style.navbar}>
      <div className={Style.logo}>
        <img src="./logo.svg" alt="website logo" />
        <span>KhalidElnaghi</span>
      </div>
      <div className={Style.icons}>
        <img src="./search.svg" alt="" className={Style.icon} />
        <img src="./app.svg" alt="" className={Style.icon} />
        <img src="./expand.svg" alt="" className={Style.icon} />
        <div className={Style.notifications}>
          <img src="./notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className={Style.user}>
          <img
            src="./user.jpg"
            alt=""
          />
          khalid
        </div>
        <img src="./settings.svg" alt="" className={Style.icon} />
      </div>
    </div>
  );
};

export default NavBar;
