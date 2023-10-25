"use client";
import { Card } from "@radix-ui/themes";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface Props {
  open: number;
  closed: number;
  inProgress: number;
}

const IssueChart = ({ open, closed, inProgress }: Props) => {
  const data = [
    { label: "Open", value: open, fill: "#F87171" },
    { label: "Closed", value: closed, fill: "#34D399" },
    { label: "In Progress", value: inProgress, fill: "#60A5FA" },
  ];

  return (
    <Card>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="fill" barSize={80} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default IssueChart;
