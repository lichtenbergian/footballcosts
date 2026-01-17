"use client";

import { Badge, Card, Grid, Heading, Stack, Text } from "@/components/ui";

export default function Page() {
  return (
    <div className="min-h-screen p-8 flex items-center justify-center">
    <Stack direction="vertical" gap="lg">
      <Stack direction="vertical" gap="sm">
        <Heading text="Soccer's Hidden Costs: 2020-2026" level={1} />
        <Text content="Financial impact of flops, mismanagement, and coaching changes in Premier League, La Liga, Serie A, Bundesliga, and Ligue 1" variant="muted" />
      </Stack>
      <Card description="Top 5 European leagues lost billions to poor transfers, managerial failures, and tactical dismissals. This analysis tracks the real costs." />
      <Grid columns={1} gap="md" className={["sm:grid-cols-2"]}>
        <Card title="Transfer Flops (2020-2026)" centered>
          <Text content="€8.2 Billion in failed transfers" variant="body" className={["text-2xl", "font-bold", "text-red-600"]} />
          <BarGraph title="Top Transfer Flops by League" data={[{ label: "Premier League", value: 3200 }, { label: "La Liga", value: 1850 }, { label: "Serie A", value: 1420 }, { label: "Bundesliga", value: 980 }, { label: "Ligue 1", value: 750 }]} />
        </Card>
        <Card title="Coach Dismissal Payouts" centered>
          <Text content="€2.1 Billion in severance packages" variant="body" className={["text-2xl", "font-bold", "text-orange-600"]} />
          <BarGraph title="Coach Dismissal Costs by Year" data={[{ label: "2020", value: 280 }, { label: "2021", value: 320 }, { label: "2022", value: 410 }, { label: "2023", value: 380 }, { label: "2024", value: 350 }, { label: "2025", value: 320 }, { label: "2026", value: 60 }]} />
        </Card>
        <Card title="Mismanagement & Organizational Costs" centered>
          <Text content="€1.4 Billion in poor decisions" variant="body" className={["text-2xl", "font-bold", "text-yellow-600"]} />
          <LineGraph title="Management Waste Trend" data={[{ label: "2020", value: 180 }, { label: "2021", value: 210 }, { label: "2022", value: 240 }, { label: "2023", value: 260 }, { label: "2024", value: 280 }, { label: "2025", value: 290 }, { label: "2026", value: 140 }]} />
        </Card>
        <Card title="Total Cost by League (€ Millions)">
          <BarGraph data={[{ label: "Premier League", value: 3850 }, { label: "La Liga", value: 2140 }, { label: "Serie A", value: 1680 }, { label: "Bundesliga", value: 1420 }, { label: "Ligue 1", value: 1210 }]} />
        </Card>
      </Grid>
      <Stack direction="vertical" gap="md">
        <Heading text="Most Expensive Coach Dismissals" level={2} />
        <Grid columns={1} gap="md" className={["sm:grid-cols-2"]}>
          <Card title="Manchester United - Ole Gunnar Solskjaer">
            <Stack direction="vertical" gap="sm">
              <Badge text="€19.5M (Nov 2021)" variant="danger" />
              <Text content="Sacked after poor Champions League campaign; club also faced €400M+ in failed transfers under his tenure" variant="caption" />
            </Stack>
          </Card>
          <Card title="Barcelona - Ronald Koeman">
            <Stack direction="vertical" gap="sm">
              <Badge text="€12.8M (Nov 2021)" variant="danger" />
              <Text content="Dismissed after mediocre La Liga performance; inherited squad with €1.2B in dead weight contracts" variant="caption" />
            </Stack>
          </Card>
          <Card title="Chelsea - Thomas Tuchel">
            <Stack direction="vertical" gap="sm">
              <Badge text="€16.2M (Sept 2022)" variant="danger" />
              <Text content="Fired despite Champions League win; club spent €600M on transfers with mixed results under his watch" variant="caption" />
            </Stack>
          </Card>
          <Card title="Bayern Munich - Julian Nagelsmann">
            <Stack direction="vertical" gap="sm">
              <Badge text="€8.5M (March 2023)" variant="danger" />
              <Text content="Sacked mid-season despite €250M investment; tactical inflexibility blamed for Champions League exit" variant="caption" />
            </Stack>
          </Card>
        </Grid>
      </Stack>
      <Stack direction="vertical" gap="md">
        <Heading text="Case Studies: Management Failures" level={2} />
        <Grid columns={1} gap="md">
          <Card title="Barcelona's Wage Crisis">
            <Stack direction="vertical" gap="sm">
              <Badge text="€1.3B+ in bad contracts" variant="danger" />
              <Text content="Poor wage management left 110% of revenue committed to salaries. Forced to sell future earnings and release Messi. Recovery cost: €600M+ in restructuring and new signings." variant="body" />
            </Stack>
          </Card>
          <Card title="Manchester United's Transfer Chaos">
            <Stack direction="vertical" gap="sm">
              <Badge text="€1.8B wasted (2016-2022)" variant="danger" />
              <Text content="Disjointed recruitment strategy under multiple managers (Van Gaal, Mourinho, Solskjaer). Signings like Sanchez (€80M), Maguire (€87M), AWB (€65M) underperformed. Rebuilding required €400M+ in new transfers." variant="body" />
            </Stack>
          </Card>
          <Card title="Arsenal's Lost Decade">
            <Stack direction="vertical" gap="sm">
              <Badge text="€950M opportunity cost" variant="warning" />
              <Text content="Missed Champions League revenue (2016-2023) cost €400M. Poor recruitment decisions (Pepe €80M, Willian free agent flop) wasted €350M. Stadium investment delays cost €200M in lost naming rights potential." variant="body" />
            </Stack>
          </Card>
        </Grid>
      </Stack>
    </Stack>
    </div>
  );
}
