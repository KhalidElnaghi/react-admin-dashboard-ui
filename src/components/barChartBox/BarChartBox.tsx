import Style from "./barchartbox.module.scss";
import { BarChart, Bar, ResponsiveContainer, Tooltip } from "recharts";
type Props = {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
};
export default function BarChartBox(props: Props) {
  return (
    <div className={Style.barChartBox}>
      <h2>{props.title}</h2>
      <div className={Style.chart}>
        <ResponsiveContainer width="99%" height={150}>
          <BarChart width={150} height={40} data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
