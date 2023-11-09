import {
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
  YAxis,
  XAxis,
  Tooltip,
} from "recharts";
import Style from "./single.module.scss";



type Props = {
  id: number;
  img?: string;
  title: string;
  info: object;
  chart: {
    dataKeys: { name: string; color: string }[];
    data: object[];
  };
  activities?: { time: string; text: string }[];
};
export default function Single(props: Props) {
  return (
    <div className={Style.single}>
      <div className={Style.view}>
        <div className={Style.info}>
          <div className={Style.topInfo}>
            {props.img && <img src={props.img} alt={`${props.title} image`} />}
            <h2>{props.title}</h2>
            <button>Update</button>
          </div>
          <div className={Style.details}>
            {props.info &&
              Object.entries(props.info).map((item, index) => {
                return (
                  <div className={Style.item} key={index}>
                    <span className={Style.itemTitle}>{item[0]} :</span>
                    <span className={Style.itemValue}>{item[1]}</span>
                  </div>
                );
              })}
          </div>
        </div>
        <hr />
        {props.chart && (
          <div className={Style.chart}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={props.chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {props.chart.dataKeys.map((dataKey) => {
                  return (
                    <Line
                      type="monotone"
                      dataKey={dataKey.name}
                      stroke={dataKey.color}
                      activeDot={{ r: 8 }}
                    />
                  );
                })}
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
      <div className={Style.activities}>
        <h2>Latest Activities</h2>
        <ul>
          {props.activities &&
            props.activities.map((activitiy) => {
              return (
                <li>
                  <div>
                    <p>{activitiy.text}</p>
                    <time>{activitiy.time}</time>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
