import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChartComponent } from "./_components/bar-chart";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BarChartBetter } from "./_components/bar-chart-better";
import TodoList from "@/components/todo-list";

export default async function Dashboard() {
  return (
    <div className="flex flex-col justify-center items-start flex-wrap ">
      <TodoList />
    </div>
  );
}
