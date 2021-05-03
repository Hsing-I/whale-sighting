import { PieChart, Pie, Label, Tooltip, Legend, Cell, ResponsiveContainer } from 'recharts';

export default function MarineMammalsPieChart(props) {
  const totalCount = props.totalCount.count;
  const whaleCount = props.whaleCount;
  const dolphinCount = props.dolphinCount;
  const sealCount = props.sealCount;
  const sealionCount = props.sealionCount;
  const seaotterAndOtherCount = props.seaotterAndOtherCount;

  const sum = (arr) => {
    let total = 0;
    for (const ele of arr) {
      total += ele.count;
    }
    return total;
  };

  const whaleSum = sum(whaleCount);
  const dolphinSum = sum(dolphinCount);
  const sealSum = sum(sealCount);
  const sealionSum = sum(sealionCount);
  const seaotterAndOtherSum = sum(seaotterAndOtherCount);

  const name = ['whale', 'dolphin', 'seal', 'sea lion', 'sea otter and other'];
  const count = [whaleSum, dolphinSum, sealSum, sealionSum, seaotterAndOtherSum];
  
  const data = [];
  name.map((element, index) => {
    let obj = {};
    const num = count[index];
    obj['name'] = element;
    obj['count'] = num;
    data.push(obj);
    return data;
  });

  const COLORS = ['#005266', '#006680', '#007a99', '#008fb3', '#00b8e6'];

  return (
    <ResponsiveContainer className="piechart-container">
      <PieChart>
        <Pie data={data} dataKey="count" nameKey="name" cx="50%" cy="50%" outerRadius={80} innerRadius={60} paddingAngle={10} minAngle={1}>
          { data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />) }
          <Label value={totalCount} position="center" fontSize={24} fontWeight="bold" fill="#808080" />
        </Pie>
      <Tooltip />
      <Legend height="10%" width="100%" fontSize={15} />
      </PieChart>
    </ResponsiveContainer >
  );
}