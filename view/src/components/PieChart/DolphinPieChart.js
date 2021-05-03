import { PieChart, Pie, Label, Tooltip, Legend, Cell, ResponsiveContainer } from 'recharts';

export default function DolphinPieChart(props) {
  const data = props.dolphinCount;
  let sum = 0;
  for (const num of data) {
    sum += num.count;
  };

  const COLORS = ['#005266','#006680'];

  return (
    <ResponsiveContainer className="piechart-container">
      <PieChart >
        <Pie data={data} dataKey="count" nameKey="name" cx="50%" cy="50%" outerRadius={80} innerRadius={60} paddingAngle={5} minAngle={1}>
          {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
          <Label value={sum} position="center" fontSize={25} fontWeight="bold" fill={'#808080'} />
        </Pie>
        <Tooltip />
        <Legend height="10%" width="100%" fontSize={15} />
      </PieChart>
    </ResponsiveContainer>
  );
}

