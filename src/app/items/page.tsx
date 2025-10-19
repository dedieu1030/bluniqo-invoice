import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { IconPlus, IconSearch, IconFilter, IconPackage, IconEye, IconEdit, IconTrash, IconTag } from "@tabler/icons-react"

const items = [
  {
    id: "ITEM-001",
    name: "Consultation Web",
    description: "Consultation en développement web",
    category: "Services",
    price: 150.00,
    unit: "heure",
    status: "active",
    stock: null,
    sales: 45
  },
  {
    id: "ITEM-002",
    name: "Hébergement Premium",
    description: "Hébergement web haute performance",
    category: "Hébergement",
    price: 29.99,
    unit: "mois",
    status: "active",
    stock: null,
    sales: 12
  },
  {
    id: "ITEM-003",
    name: "Maintenance Site",
    description: "Maintenance mensuelle du site web",
    category: "Services",
    price: 200.00,
    unit: "mois",
    status: "active",
    stock: null,
    sales: 8
  },
  {
    id: "ITEM-004",
    name: "Formation WordPress",
    description: "Formation personnalisée WordPress",
    category: "Formation",
    price: 500.00,
    unit: "session",
    status: "inactive",
    stock: null,
    sales: 3
  }
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case "active":
      return <Badge variant="default" className="bg-green-100 text-green-800">Actif</Badge>
    case "inactive":
      return <Badge variant="outline">Inactif</Badge>
    default:
      return <Badge variant="outline">{status}</Badge>
  }
}

export default function ItemsPage() {
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
              {/* Header */}
              <div className="flex flex-col gap-4 px-4 lg:px-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight">Articles & Services</h1>
                    <p className="text-muted-foreground">Gérez votre catalogue d&apos;articles et services</p>
                  </div>
                  <Button className="gap-2">
                    <IconPlus className="h-4 w-4" />
                    Nouvel Article
                  </Button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Articles</CardTitle>
                      <IconPackage className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">127</div>
                      <p className="text-xs text-muted-foreground">+8% ce mois</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Actifs</CardTitle>
                      <IconPackage className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">98</div>
                      <p className="text-xs text-muted-foreground">77% du total</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Catégories</CardTitle>
                      <IconTag className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">12</div>
                      <p className="text-xs text-muted-foreground">Différentes catégories</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Ventes Totales</CardTitle>
                      <IconPackage className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">1,247</div>
                      <p className="text-xs text-muted-foreground">Ce mois</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Filters */}
                <div className="flex flex-col gap-4 md:flex-row md:items-center">
                  <div className="flex-1">
                    <div className="relative">
                      <IconSearch className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Rechercher un article..." className="pl-8" />
                    </div>
                  </div>
                  <Button variant="outline" className="gap-2">
                    <IconFilter className="h-4 w-4" />
                    Filtres
                  </Button>
                </div>

                {/* Items Table */}
                <Card>
                  <CardHeader>
                    <CardTitle>Liste des Articles</CardTitle>
                    <CardDescription>Gérez votre catalogue d&apos;articles et services</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Article</TableHead>
                          <TableHead>Catégorie</TableHead>
                          <TableHead>Prix</TableHead>
                          <TableHead>Unité</TableHead>
                          <TableHead>Statut</TableHead>
                          <TableHead>Ventes</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {items.map((item) => (
                          <TableRow key={item.id}>
                            <TableCell>
                              <div>
                                <div className="font-medium">{item.name}</div>
                                <div className="text-sm text-muted-foreground">{item.description}</div>
                                <div className="text-xs text-muted-foreground">ID: {item.id}</div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline">{item.category}</Badge>
                            </TableCell>
                            <TableCell className="font-medium">${item.price.toFixed(2)}</TableCell>
                            <TableCell className="text-muted-foreground">{item.unit}</TableCell>
                            <TableCell>{getStatusBadge(item.status)}</TableCell>
                            <TableCell>{item.sales}</TableCell>
                            <TableCell className="text-right">
                              <div className="flex items-center justify-end gap-2">
                                <Button variant="ghost" size="sm">
                                  <IconEye className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <IconEdit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <IconTrash className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
