import Single from "../../components/single/Single";
import { singleUser } from "../../data";
import Style from "./user.module.scss";

export default function User() {
  return (
    <div className={Style.user}>
      <Single {...singleUser} />
    </div>
  );
}
