import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const data = [
  { date: '23/07', revenue: 8800 },
  { date: '24/07', revenue: 3200 },
  { date: '25/07', revenue: 1800 },
  { date: '26/07', revenue: 5500 },
  { date: '27/07', revenue: 11800 },
  { date: '28/07', revenue: 7000 },
]

export function RevenueChart() {
  return (
    <Card className="col-span-8 p-2">
      <CardHeader>
        <CardTitle>Revenue Chart</CardTitle>
        <CardDescription>Check the monthly revenue out.</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <CartesianGrid vertical={false} className="stroke-muted" />
            <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
              width={80}
            />
            <Tooltip />
            <Line
              type="linear"
              strokeWidth="2"
              dataKey="revenue"
              stroke={colors.violet['500']}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
