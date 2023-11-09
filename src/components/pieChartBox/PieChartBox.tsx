import Style from "./piechartbox.module.scss";
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip } from "recharts";
import { piechartdata } from "../../data";
export default function PieChartBox() {
  const data = piechartdata;
  return (
    <div className={Style.pieChartBox}>
      <h2>Leads by Source</h2>
      <div className={Style.chart}>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Tooltip contentStyle={{ background: "white", borderRadius: "5px" }} />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className={Style.options}>
        {data.map((item) => (
          <div className={Style.option} key={item.name}>
            <div className={Style.title}>
              <div className={Style.dot} style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
