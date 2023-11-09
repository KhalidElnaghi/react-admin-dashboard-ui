import { Link } from "react-router-dom";
import Style from "./chartbox.module.scss";
import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

export default function ChartBox(props: Props) {
  return (
    <div className={Style.chartBox}>
      <div className={Style.boxInfo}>
        <div className={Style.title}>
          <img src={`./${props.icon}`} alt="" />
          <span>{props.title}</span>
        </div>
        <h2>{props.number}</h2>
        <Link to={"/"} style={{ color: props.color }}>
          View All
        </Link>
      </div>
      <div className={Style.chartInfo}>
        <div className={Style.chart}>
          <ResponsiveContainer>
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{
                  background: "transparent",
                  border: "none",
                  fontSize: "14px",
                }}
                labelStyle={{ display: "none" }}
                position={{ x: 0, y: 60 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className={Style.text}>
          <span
            className={Style.percentage}
            style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
          >
            {props.percentage}%
          </span>
          <span className={Style.duration}>this month</span>
        </div>
      </div>
    </div>
  );
}
