"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

export const description = "An interactive area chart"

const chartData = [
  { date: "2024-04-01", revenus: 12500, factures: 8 },
  { date: "2024-04-02", revenus: 8500, factures: 5 },
  { date: "2024-04-03", revenus: 15200, factures: 12 },
  { date: "2024-04-04", revenus: 9800, factures: 7 },
  { date: "2024-04-05", revenus: 18700, factures: 15 },
  { date: "2024-04-06", revenus: 22100, factures: 18 },
  { date: "2024-04-07", revenus: 14300, factures: 11 },
  { date: "2024-04-08", revenus: 25600, factures: 20 },
  { date: "2024-04-09", revenus: 7200, factures: 6 },
  { date: "2024-04-10", revenus: 16800, factures: 13 },
  { date: "2024-04-11", revenus: 19400, factures: 16 },
  { date: "2024-04-12", revenus: 17600, factures: 14 },
  { date: "2024-04-13", revenus: 20300, factures: 17 },
  { date: "2024-04-14", revenus: 11200, factures: 9 },
  { date: "2024-04-15", revenus: 9800, factures: 8 },
  { date: "2024-04-16", revenus: 13400, factures: 10 },
  { date: "2024-04-17", revenus: 26800, factures: 22 },
  { date: "2024-04-18", revenus: 21900, factures: 18 },
  { date: "2024-04-19", revenus: 14600, factures: 12 },
  { date: "2024-04-20", revenus: 8900, factures: 7 },
  { date: "2024-04-21", revenus: 13200, factures: 10 },
  { date: "2024-04-22", revenus: 16800, factures: 13 },
  { date: "2024-04-23", revenus: 13400, factures: 11 },
  { date: "2024-04-24", revenus: 23200, factures: 19 },
  { date: "2024-04-25", revenus: 15600, factures: 12 },
  { date: "2024-04-26", revenus: 7200, factures: 6 },
  { date: "2024-04-27", revenus: 23000, factures: 19 },
  { date: "2024-04-28", revenus: 9800, factures: 8 },
  { date: "2024-04-29", revenus: 18900, factures: 15 },
  { date: "2024-04-30", revenus: 27200, factures: 23 },
  { date: "2024-05-01", revenus: 13200, factures: 10 },
  { date: "2024-05-02", revenus: 17600, factures: 14 },
  { date: "2024-05-03", revenus: 14800, factures: 12 },
  { date: "2024-05-04", revenus: 23100, factures: 19 },
  { date: "2024-05-05", revenus: 28900, factures: 24 },
  { date: "2024-05-06", revenus: 29900, factures: 25 },
  { date: "2024-05-07", revenus: 23300, factures: 19 },
  { date: "2024-05-08", revenus: 11200, factures: 9 },
  { date: "2024-05-09", revenus: 15600, factures: 12 },
  { date: "2024-05-10", revenus: 17600, factures: 14 },
  { date: "2024-05-11", revenus: 20100, factures: 16 },
  { date: "2024-05-12", revenus: 13400, factures: 11 },
  { date: "2024-05-13", revenus: 13400, factures: 11 },
  { date: "2024-05-14", revenus: 26900, factures: 22 },
  { date: "2024-05-15", revenus: 28400, factures: 23 },
  { date: "2024-05-16", revenus: 20300, factures: 17 },
  { date: "2024-05-17", revenus: 29900, factures: 25 },
  { date: "2024-05-18", revenus: 18900, factures: 15 },
  { date: "2024-05-19", revenus: 14100, factures: 11 },
  { date: "2024-05-20", revenus: 13200, factures: 10 },
  { date: "2024-05-21", revenus: 7200, factures: 6 },
  { date: "2024-05-22", revenus: 7200, factures: 6 },
  { date: "2024-05-23", revenus: 17600, factures: 14 },
  { date: "2024-05-24", revenus: 18900, factures: 15 },
  { date: "2024-05-25", revenus: 15600, factures: 12 },
  { date: "2024-05-26", revenus: 16800, factures: 13 },
  { date: "2024-05-27", revenus: 25200, factures: 21 },
  { date: "2024-05-28", revenus: 16800, factures: 13 },
  { date: "2024-05-29", revenus: 7200, factures: 6 },
  { date: "2024-05-30", revenus: 20400, factures: 17 },
  { date: "2024-05-31", revenus: 13200, factures: 10 },
  { date: "2024-06-01", revenus: 13200, factures: 10 },
  { date: "2024-06-02", revenus: 28200, factures: 23 },
  { date: "2024-06-03", revenus: 7200, factures: 6 },
  { date: "2024-06-04", revenus: 26300, factures: 22 },
  { date: "2024-06-05", revenus: 7200, factures: 6 },
  { date: "2024-06-06", revenus: 17600, factures: 14 },
  { date: "2024-06-07", revenus: 19400, factures: 16 },
  { date: "2024-06-08", revenus: 23100, factures: 19 },
  { date: "2024-06-09", revenus: 26300, factures: 22 },
  { date: "2024-06-10", revenus: 11200, factures: 9 },
  { date: "2024-06-11", revenus: 7200, factures: 6 },
  { date: "2024-06-12", revenus: 29500, factures: 24 },
  { date: "2024-06-13", revenus: 7200, factures: 6 },
  { date: "2024-06-14", revenus: 25600, factures: 21 },
  { date: "2024-06-15", revenus: 18400, factures: 15 },
  { date: "2024-06-16", revenus: 22200, factures: 18 },
  { date: "2024-06-17", revenus: 28500, factures: 24 },
  { date: "2024-06-18", revenus: 7200, factures: 6 },
  { date: "2024-06-19", revenus: 20400, factures: 17 },
  { date: "2024-06-20", revenus: 24500, factures: 20 },
  { date: "2024-06-21", revenus: 11200, factures: 9 },
  { date: "2024-06-22", revenus: 19000, factures: 16 },
  { date: "2024-06-23", revenus: 28800, factures: 24 },
  { date: "2024-06-24", revenus: 9800, factures: 8 },
  { date: "2024-06-25", revenus: 11200, factures: 9 },
  { date: "2024-06-26", revenus: 26000, factures: 22 },
  { date: "2024-06-27", revenus: 26900, factures: 23 },
  { date: "2024-06-28", revenus: 11200, factures: 9 },
  { date: "2024-06-29", revenus: 7200, factures: 6 },
  { date: "2024-06-30", revenus: 26800, factures: 22 },
]

const chartConfig = {
  revenus: {
    label: "Revenus",
    color: "var(--primary)",
  },
  factures: {
    label: "Factures",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const isMobile = useIsMobile()
  const [timeRange, setTimeRange] = React.useState("90d")

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d")
    }
  }, [isMobile])

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Revenus & Factures</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Évolution des revenus et factures sur 3 mois
          </span>
          <span className="@[540px]/card:hidden">3 derniers mois</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem value="90d">3 derniers mois</ToggleGroupItem>
            <ToggleGroupItem value="30d">30 derniers jours</ToggleGroupItem>
            <ToggleGroupItem value="7d">7 derniers jours</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="3 derniers mois" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                3 derniers mois
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                30 derniers jours
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                7 derniers jours
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillRevenus" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-revenus)"
                  stopOpacity={1.0}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-revenus)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillFactures" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-factures)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-factures)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="factures"
              type="natural"
              fill="url(#fillFactures)"
              stroke="var(--color-factures)"
              stackId="a"
            />
            <Area
              dataKey="revenus"
              type="natural"
              fill="url(#fillRevenus)"
              stroke="var(--color-revenus)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
