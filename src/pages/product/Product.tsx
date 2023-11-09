import Single from "../../components/single/Single";
import { singleProduct } from "../../data";
import Style from "./product.module.scss";

export default function Product() {
  return (
    <div className={Style.product}>
      <Single {...singleProduct} />
    </div>
  );
}
