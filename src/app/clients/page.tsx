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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { IconPlus, IconSearch, IconFilter, IconUsers, IconEye, IconEdit, IconTrash, IconMail, IconPhone } from "@tabler/icons-react"

const clients = [
  {
    id: 1,
    name: "Acme Corporation",
    email: "contact@acme.com",
    phone: "+1 (555) 123-4567",
    status: "active",
    totalInvoices: 15,
    totalAmount: 12500.00,
    lastInvoice: "2024-01-15",
    avatar: "/avatars/acme.jpg"
  },
  {
    id: 2,
    name: "Tech Solutions Inc",
    email: "info@techsolutions.com",
    phone: "+1 (555) 987-6543",
    status: "active",
    totalInvoices: 8,
    totalAmount: 8500.00,
    lastInvoice: "2024-01-20",
    avatar: "/avatars/tech.jpg"
  },
  {
    id: 3,
    name: "Global Industries",
    email: "sales@global.com",
    phone: "+1 (555) 456-7890",
    status: "inactive",
    totalInvoices: 3,
    totalAmount: 2100.00,
    lastInvoice: "2023-12-10",
    avatar: "/avatars/global.jpg"
  },
  {
    id: 4,
    name: "Startup Inc",
    email: "hello@startup.com",
    phone: "+1 (555) 321-0987",
    status: "active",
    totalInvoices: 5,
    totalAmount: 2250.00,
    lastInvoice: "2024-01-25",
    avatar: "/avatars/startup.jpg"
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

export default function ClientsPage() {
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
                    <h1 className="text-3xl font-bold tracking-tight">Clients</h1>
                    <p className="text-muted-foreground">Gérez votre base de données clients</p>
                  </div>
                  <Button className="gap-2">
                    <IconPlus className="h-4 w-4" />
                    Nouveau Client
                  </Button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Clients</CardTitle>
                      <IconUsers className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">342</div>
                      <p className="text-xs text-muted-foreground">+12% ce mois</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Clients Actifs</CardTitle>
                      <IconUsers className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">298</div>
                      <p className="text-xs text-muted-foreground">87% du total</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Nouveaux</CardTitle>
                      <IconUsers className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">24</div>
                      <p className="text-xs text-muted-foreground">Ce mois</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Valeur Totale</CardTitle>
                      <IconUsers className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$125K</div>
                      <p className="text-xs text-muted-foreground">Portefeuille clients</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Filters */}
                <div className="flex flex-col gap-4 md:flex-row md:items-center">
                  <div className="flex-1">
                    <div className="relative">
                      <IconSearch className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Rechercher un client..." className="pl-8" />
                    </div>
                  </div>
                  <Button variant="outline" className="gap-2">
                    <IconFilter className="h-4 w-4" />
                    Filtres
                  </Button>
                </div>

                {/* Clients Table */}
                <Card>
                  <CardHeader>
                    <CardTitle>Liste des Clients</CardTitle>
                    <CardDescription>Gérez votre base de données clients</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Client</TableHead>
                          <TableHead>Contact</TableHead>
                          <TableHead>Statut</TableHead>
                          <TableHead>Factures</TableHead>
                          <TableHead>Montant Total</TableHead>
                          <TableHead>Dernière Facture</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {clients.map((client) => (
                          <TableRow key={client.id}>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarImage src={client.avatar} />
                                  <AvatarFallback>{client.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="font-medium">{client.name}</div>
                                  <div className="text-sm text-muted-foreground">ID: {client.id}</div>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="space-y-1">
                                <div className="flex items-center gap-2 text-sm">
                                  <IconMail className="h-3 w-3" />
                                  {client.email}
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <IconPhone className="h-3 w-3" />
                                  {client.phone}
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>{getStatusBadge(client.status)}</TableCell>
                            <TableCell>{client.totalInvoices}</TableCell>
                            <TableCell>${client.totalAmount.toFixed(2)}</TableCell>
                            <TableCell>{client.lastInvoice}</TableCell>
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
