import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"

export default function AnalyticsPage() {
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
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
                  <p className="text-muted-foreground">Analysez les performances de votre facturation</p>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Revenus Mensuels</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$45,250</div>
                      <p className="text-xs text-muted-foreground">+18.2% vs mois dernier</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Taux de Conversion</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">87%</div>
                      <p className="text-xs text-muted-foreground">+5.2% vs mois dernier</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Panier Moyen</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$356</div>
                      <p className="text-xs text-muted-foreground">+12.1% vs mois dernier</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Clients Récurrents</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">68%</div>
                      <p className="text-xs text-muted-foreground">+3.4% vs mois dernier</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  <ChartAreaInteractive />
                  <Card>
                    <CardHeader>
                      <CardTitle>Top Clients</CardTitle>
                      <CardDescription>Clients les plus rentables</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm font-medium">Acme Corporation</span>
                          </div>
                          <span className="text-sm font-bold">$12,500</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-chart-2 rounded-full"></div>
                            <span className="text-sm font-medium">Tech Solutions</span>
                          </div>
                          <span className="text-sm font-bold">$8,500</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-chart-3 rounded-full"></div>
                            <span className="text-sm font-medium">Global Industries</span>
                          </div>
                          <span className="text-sm font-bold">$6,200</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-chart-4 rounded-full"></div>
                            <span className="text-sm font-medium">Startup Inc</span>
                          </div>
                          <span className="text-sm font-bold">$4,800</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
