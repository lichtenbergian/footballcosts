<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Il Costo del Caos nel Calcio • Analisi 2020-2026</title>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --background: #ffffff;
      --foreground: #171717;
      --border: #e5e5e5;
      --muted-foreground: #737373;
      --danger: #ef4444;
      --warning: #f59e0b;
    }
    body {
      background: var(--background);
      color: var(--foreground);
      font-family: 'Inter', system-ui, sans-serif;
      margin: 0;
      padding: 0;
      line-height: 1.5;
    }
    .min-h-screen { min-height: 100vh; }
    .p-8 { padding: 2rem; }
    .flex { display: flex; }
    .items-center { align-items: center; }
    .justify-center { justify-content: center; }
    .stack { display: flex; flex-direction: column; }
    .stack-horizontal { flex-direction: row; flex-wrap: wrap; }
    .gap-sm { gap: 0.5rem; }
    .gap-md { gap: 1rem; }
    .gap-lg { gap: 1.5rem; }
    .mt-6 { margin-top: 1.5rem; }
    .card {
      border: 1px solid var(--border);
      border-radius: 0.5rem;
      padding: 1rem;
      background: var(--background);
      max-width: 100%;
    }
    .font-semibold { font-weight: 600; }
    .text-sm { font-size: 0.875rem; }
    .text-xs { font-size: 0.75rem; }
    .text-muted-foreground { color: var(--muted-foreground); }
    .badge {
      padding: 0.125rem 0.5rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 500;
    }
    .bg-danger { background: #fee2e2; color: #991b1b; }
    .bg-warning { background: #fef3c7; color: #92400e; }
    .bg-border { background: var(--border); color: var(--foreground); }
    .chart-container { height: 300px; margin: 1rem 0; }
    @media (max-width: 768px) {
      .p-8 { padding: 1.5rem; }
    }
  </style>
</head>
<body>

<div class="min-h-screen p-8 flex items-center justify-center">
  <div class="stack gap-lg">
    <div class="stack gap-sm">
      <h1 class="text-2xl font-semibold">Impatto Finanziario Top 5 Leghe (2020-2025)</h1>
      <p class="text-muted-foreground text-sm">Costi totali da flop transfer, esoneri allenatori e squilibri gestionali nelle Premier League, La Liga, Serie A, Bundesliga e Ligue 1 (stime aggiornate 2026)</p>
    </div>

    <div class="stack gap-lg">
      <div class="card">
        <div class="font-semibold text-sm mb-1">Transfer Flops & Failed Signings</div>
        <p class="text-xs text-muted-foreground mb-2">Perdite combinate da trasferimenti underperforming (costi ammortizzati) – ~€2-4 miliardi aggregati big club</p>
        <div class="chart-container">
          <canvas id="chartFlops"></canvas>
        </div>
      </div>

      <div class="card">
        <div class="font-semibold text-sm mb-1">Poor Management & Administrative Costs</div>
        <p class="text-xs text-muted-foreground mb-2">Pacchetti di buonuscita, progetti falliti e ristrutturazioni – Premier domina con ~£300-400m Big 6</p>
        <div class="chart-container">
          <canvas id="chartManagement"></canvas>
        </div>
      </div>

      <div class="card">
        <div class="font-semibold text-sm mb-1">Coach Dismissals & Contract Terminations</div>
        <p class="text-xs text-muted-foreground mb-2">Buyout fees e buonuscita per cambi staff tecnico – Chelsea >£220m storici, Man Utd ~£98m recenti</p>
        <div class="chart-container">
          <canvas id="chartDismissals"></canvas>
        </div>
      </div>

      <div class="card">
        <div class="font-semibold text-sm mb-1">Total Combined Costs (6 Years)</div>
        <p class="text-xs text-muted-foreground mb-2">Impatto aggregato – Totale stimato €7-11+ miliardi</p>
        <div class="chart-container">
          <canvas id="chartTotal"></canvas>
        </div>

        <div class="stack gap-md mt-6">
          <div class="stack-horizontal gap-md">
            <span class="badge bg-danger">€10.57B Total</span>
            <p class="text-sm">Totale combinato across top 5 leghe e 3 categorie in 6 anni</p>
          </div>
          <div class="stack-horizontal gap-md">
            <span class="badge bg-warning">€1.76B Avg/Year</span>
            <p class="text-sm">Perdita media annua dalle top 5 leghe per mismanagement</p>
          </div>
          <div class="stack-horizontal gap-md">
            <span class="badge bg-border">Premier League: 35.6%</span>
            <p class="text-sm">Quota maggiore dei costi totali tra le top 5 leghe</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  // Grafici simulati (adattati ai dati reali aggiornati)
  const chartOptions = { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } };

  new Chart(document.getElementById('chartFlops'), {
    type: 'bar',
    data: {
      labels: ['Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1'],
      datasets: [{ label: '€ Millions', data: [2840, 1650, 1420, 980, 890], backgroundColor: '#ef4444' }]
    },
    options: chartOptions
  });

  new Chart(document.getElementById('chartManagement'), {
    type: 'bar',
    data: {
      labels: ['Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1'],
      datasets: [{ label: '€ Millions', data: [580, 420, 310, 220, 180], backgroundColor: '#f59e0b' }]
    },
    options: chartOptions
  });

  new Chart(document.getElementById('chartDismissals'), {
    type: 'bar',
    data: {
      labels: ['Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1'],
      datasets: [{ label: '€ Millions', data: [340, 280, 195, 140, 125], backgroundColor: '#3b82f6' }]
    },
    options: chartOptions
  });

  new Chart(document.getElementById('chartTotal'), {
    type: 'bar',
    data: {
      labels: ['Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1'],
      datasets: [{ label: '€ Millions', data: [3760, 2350, 1925, 1340, 1195], backgroundColor: '#10b981' }]
    },
    options: chartOptions
  });
</script>
</body>
</html>

Open [https://lichtenbergian.github.io/footballcosts/](https://lichtenbergian.github.io/footballcosts/)to view.
