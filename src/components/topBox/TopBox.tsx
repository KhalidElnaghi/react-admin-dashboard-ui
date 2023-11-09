import Style from "./topbox.module.scss";
import { topDealUsers } from "../../data";

export default function TopBox() {
  return (
    <div className={Style.topBox}>
      <h2>Top Deals</h2>
      <div className={Style.list}>
        {topDealUsers.map((user) => (
          <div className={Style.listItem} key={user.id}>
            <div className={Style.user}>
              <img src={user.img} alt={`${user.username} image`} />
              <div className={Style.userInfo}>
                <span className={Style.userName}>{user.username}</span>
                <span className={Style.email}>{user.email}</span>
              </div>
            </div>
            <div className={Style.amount}>${user.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
