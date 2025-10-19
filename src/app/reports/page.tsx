import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { IconDownload, IconFileText, IconCalendar, IconTrendingUp } from "@tabler/icons-react"

const reports = [
  {
    id: 1,
    name: "Rapport de Revenus Mensuel",
    description: "Analyse détaillée des revenus du mois de janvier 2024",
    type: "Revenus",
    period: "Janvier 2024",
    status: "Généré",
    size: "2.3 MB",
    date: "2024-01-31"
  },
  {
    id: 2,
    name: "Analyse des Clients",
    description: "Rapport complet sur la base clients et leur évolution",
    type: "Clients",
    period: "Q4 2023",
    status: "En cours",
    size: "1.8 MB",
    date: "2024-01-15"
  },
  {
    id: 3,
    name: "Factures en Retard",
    description: "Liste des factures non payées et actions de relance",
    type: "Facturation",
    period: "Janvier 2024",
    status: "Généré",
    size: "856 KB",
    date: "2024-01-30"
  },
  {
    id: 4,
    name: "Performance des Produits",
    description: "Analyse des ventes par produit et service",
    type: "Produits",
    period: "2023",
    status: "Généré",
    size: "3.1 MB",
    date: "2024-01-01"
  }
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Généré":
      return <Badge variant="default" className="bg-green-100 text-green-800">Généré</Badge>
    case "En cours":
      return <Badge variant="outline">En cours</Badge>
    case "Échec":
      return <Badge variant="destructive">Échec</Badge>
    default:
      return <Badge variant="outline">{status}</Badge>
  }
}

export default function ReportsPage() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <div className="flex flex-col gap-4 px-4 lg:px-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight">Rapports</h1>
                    <p className="text-muted-foreground">Générez et gérez vos rapports de facturation</p>
                  </div>
                  <Button className="gap-2">
                    <IconFileText className="h-4 w-4" />
                    Nouveau Rapport
                  </Button>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Rapports Générés</CardTitle>
                      <IconFileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">24</div>
                      <p className="text-xs text-muted-foreground">Ce mois</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Taille Totale</CardTitle>
                      <IconFileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">156 MB</div>
                      <p className="text-xs text-muted-foreground">Stockage utilisé</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">En Cours</CardTitle>
                      <IconFileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">3</div>
                      <p className="text-xs text-muted-foreground">Génération</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Templates</CardTitle>
                      <IconFileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">8</div>
                      <p className="text-xs text-muted-foreground">Disponibles</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {reports.map((report) => (
                    <Card key={report.id} className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <CardTitle className="text-lg">{report.name}</CardTitle>
                            <CardDescription>{report.description}</CardDescription>
                          </div>
                          {getStatusBadge(report.status)}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Type:</span>
                            <span className="font-medium">{report.type}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Période:</span>
                            <span className="font-medium">{report.period}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Taille:</span>
                            <span className="font-medium">{report.size}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Date:</span>
                            <span className="font-medium">{report.date}</span>
                          </div>
                        </div>
                        <div className="flex gap-2 mt-4">
                          <Button variant="outline" size="sm" className="flex-1">
                            <IconDownload className="h-4 w-4 mr-2" />
                            Télécharger
                          </Button>
                          <Button variant="ghost" size="sm">
                            <IconTrendingUp className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
