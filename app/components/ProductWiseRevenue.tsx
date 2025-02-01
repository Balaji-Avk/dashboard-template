"use client"

import React from "react"

import { DonutChart, TooltipProps } from "./chatUtils"

interface DataItem {
  name: string
  amount: number
}

const data: DataItem[] = [
  {
    name: "Charts Genie",
    amount: 450000,
  },
  {
    name: "RoomGenie",
    amount: 250000,
  },
  {
    name: "NewsGenie",
    amount: 200000,
  },
  {
    name: "PresentationGenie",
    amount: 150129,
  },
];


export default function ProductWiseRevenue() {
  const [datas, setDatas] = React.useState<TooltipProps | null>(null)

  const sumNumericArray = (arr: number[]): number =>
    arr.reduce((sum, num) => sum + num, 0)

  const currencyFormatter = (number: number) =>
    `$${Intl.NumberFormat("us").format(number)}`

  const payload = datas?.payload?.[0]
  const value = payload?.value ?? 0

  const formattedValue = payload
    ? currencyFormatter(value)
    : currencyFormatter(
        sumNumericArray(data.map((dataPoint) => dataPoint.amount)),
      )

  return (
    <div>
      <p className="text-center text-lg text-gray-700 dark:text-gray-300">
        Product Wise Revenue
      </p>
      <p className="mt-2 w-full text-center text-xl font-semibold text-gray-900 dark:text-gray-50">
        {formattedValue}
      </p>
      <DonutChart
        data={data}
        category="name"
        value="amount"
        className="mx-auto mt-8"
        colors={["blue", "violet", "cyan", "emerald"]}
        tooltipCallback={(props) => {
          if (props.active) {
            setDatas((prev) => {
              if (prev?.payload[0].category === props.payload[0].category)
                return prev
              return props
            })
          } else {
            setDatas(null)
          }
          return null
        }}
      />
    </div>
  )
}