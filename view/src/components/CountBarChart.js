import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function CountBarChart(props) {
  const result = props.result;
  const data = result && result.slice(1).sort((a, b) => {
    return b.count - a.count;
  });

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        barSize={100}
        barGap={2}
        margin={{
          top: 10,
          right: 10,
          left: 10,
          bottom: 10
        }}
      >
        <CartesianGrid strokeDasharray="4 4" />
        <XAxis dataKey="name" height={45} interval={0} padding={{ top: 10, right: 10, left: 10, bottom: 10 }} angle={-10} tick={{ textAnchor: 'end', fontSize: 13, fontWeight:'bold' }} />
        <YAxis dataKey="count" type="number" padding={{ top: 10, right: 10, left: 10, bottom: 10 }} domain={['dataMin', 'dataMax']} tick={{ textAnchor: 'end', fontSize: 13 }} />
        <Tooltip />
        <Legend verticalAlign="top" height={35} />
        <Bar dataKey="count" fill="#002366" label={{ fill: "silver", fontSize: 12 }} />
      </BarChart>
    </ResponsiveContainer>);
}

