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
import { IconPlus, IconSearch, IconFilter, IconWallet, IconEye, IconEdit, IconTrash, IconCreditCard, IconCashBanknote } from "@tabler/icons-react"

const payments = [
  {
    id: "PAY-001",
    invoiceId: "INV-001",
    client: "Acme Corp",
    amount: 1250.00,
    method: "credit_card",
    status: "completed",
    date: "2024-01-15",
    reference: "TXN-123456789"
  },
  {
    id: "PAY-002",
    invoiceId: "INV-002",
    client: "Tech Solutions",
    amount: 850.50,
    method: "bank_transfer",
    status: "pending",
    date: "2024-01-20",
    reference: "TXN-987654321"
  },
  {
    id: "PAY-003",
    invoiceId: "INV-003",
    client: "Global Industries",
    amount: 2100.00,
    method: "paypal",
    status: "failed",
    date: "2024-01-10",
    reference: "TXN-456789123"
  },
  {
    id: "PAY-004",
    invoiceId: "INV-004",
    client: "Startup Inc",
    amount: 450.75,
    method: "credit_card",
    status: "completed",
    date: "2024-01-25",
    reference: "TXN-789123456"
  }
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case "completed":
      return <Badge variant="default" className="bg-green-100 text-green-800">Complété</Badge>
    case "pending":
      return <Badge variant="default" className="bg-yellow-100 text-yellow-800">En attente</Badge>
    case "failed":
      return <Badge variant="destructive">Échoué</Badge>
    case "refunded":
      return <Badge variant="outline">Remboursé</Badge>
    default:
      return <Badge variant="outline">{status}</Badge>
  }
}

const getMethodIcon = (method: string) => {
  switch (method) {
    case "credit_card":
      return <IconCreditCard className="h-4 w-4" />
    case "bank_transfer":
      return <IconCashBanknote className="h-4 w-4" />
    case "paypal":
      return <IconWallet className="h-4 w-4" />
    default:
      return <IconWallet className="h-4 w-4" />
  }
}

const getMethodName = (method: string) => {
  switch (method) {
    case "credit_card":
      return "Carte de crédit"
    case "bank_transfer":
      return "Virement bancaire"
    case "paypal":
      return "PayPal"
    default:
      return method
  }
}

export default function PaymentsPage() {
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
                    <h1 className="text-3xl font-bold tracking-tight">Paiements</h1>
                    <p className="text-muted-foreground">Suivez et gérez tous les paiements</p>
                  </div>
                  <Button className="gap-2">
                    <IconPlus className="h-4 w-4" />
                    Nouveau Paiement
                  </Button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Paiements</CardTitle>
                      <IconWallet className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">127</div>
                      <p className="text-xs text-muted-foreground">+15% ce mois</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Montant Reçu</CardTitle>
                      <IconWallet className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$42,150</div>
                      <p className="text-xs text-muted-foreground">Ce mois</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">En Attente</CardTitle>
                      <IconWallet className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">8</div>
                      <p className="text-xs text-muted-foreground">Paiements</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Taux de Succès</CardTitle>
                      <IconWallet className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">94%</div>
                      <p className="text-xs text-muted-foreground">Paiements réussis</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Filters */}
                <div className="flex flex-col gap-4 md:flex-row md:items-center">
                  <div className="flex-1">
                    <div className="relative">
                      <IconSearch className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Rechercher un paiement..." className="pl-8" />
                    </div>
                  </div>
                  <Button variant="outline" className="gap-2">
                    <IconFilter className="h-4 w-4" />
                    Filtres
                  </Button>
                </div>

                {/* Payments Table */}
                <Card>
                  <CardHeader>
                    <CardTitle>Liste des Paiements</CardTitle>
                    <CardDescription>Suivez tous les paiements reçus</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>ID Paiement</TableHead>
                          <TableHead>Facture</TableHead>
                          <TableHead>Client</TableHead>
                          <TableHead>Montant</TableHead>
                          <TableHead>Méthode</TableHead>
                          <TableHead>Statut</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {payments.map((payment) => (
                          <TableRow key={payment.id}>
                            <TableCell className="font-medium">{payment.id}</TableCell>
                            <TableCell>{payment.invoiceId}</TableCell>
                            <TableCell>{payment.client}</TableCell>
                            <TableCell>${payment.amount.toFixed(2)}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                {getMethodIcon(payment.method)}
                                {getMethodName(payment.method)}
                              </div>
                            </TableCell>
                            <TableCell>{getStatusBadge(payment.status)}</TableCell>
                            <TableCell>{payment.date}</TableCell>
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
