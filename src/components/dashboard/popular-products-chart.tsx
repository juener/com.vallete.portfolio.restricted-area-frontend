import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'

const COLORS = [
  colors.sky[500],
  colors.violet[500],
  colors.amber[500],
  colors.red[500],
  colors.green[500],
]

const data = [
  { product: 'Marguerita', amount: 20 },
  { product: 'Calabresa', amount: 55 },
  { product: 'Frango com Catupiry', amount: 57 },
  { product: 'Parma', amount: 37 },
  { product: 'À Moda', amount: 42 },
]

export function PopularProductsChart() {
  return (
    <Card className="col-span-4 p-2">
      <CardHeader>
        <CardTitle>Popular Products</CardTitle>
        <CardDescription>The best sellers.</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart style={{ fontSize: 12 }}>
            <Pie
              data={data}
              dataKey="amount"
              name="date"
              cx="50%"
              cy="50%"
              outerRadius={86}
              innerRadius={64}
              strokeWidth={8}
            >
              {data.map((_, index) => {
                return (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index]}
                    className="stroke-background"
                  />
                )
              })}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
