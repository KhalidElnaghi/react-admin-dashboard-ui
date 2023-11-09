import BarChartBox from "../../components/barChartBox/BarChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import ChartBox from "../../components/chartBox/ChartBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";
import TopBox from "../../components/topBox/TopBox";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data";
import Style from "./Home.module.scss";

const Home = () => {
  return (
    <div className={Style.home}>
      <div className={`${Style.box} ${Style.box1}`}>
        <TopBox />
      </div>
      <div className={`${Style.box} ${Style.box2}`}>
        <ChartBox {...chartBoxUser} />
      </div>
      <div className={`${Style.box} ${Style.box3}`}>
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className={`${Style.box} ${Style.box4}`}>
        <PieChartBox />
      </div>
      <div className={`${Style.box} ${Style.box5}`}>
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className={`${Style.box} ${Style.box6}`}>
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className={`${Style.box} ${Style.box7}`}>
        <BigChartBox />
      </div>
      <div className={`${Style.box} ${Style.box8}`}>
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className={`${Style.box} ${Style.box9}`}>
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
};

export default Home;
