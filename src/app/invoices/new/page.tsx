import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { IconPlus, IconTrash, IconSave, IconSend } from "@tabler/icons-react"

export default function NewInvoicePage() {
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
                    <h1 className="text-3xl font-bold tracking-tight">Nouvelle Facture</h1>
                    <p className="text-muted-foreground">Créez une nouvelle facture pour votre client</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline">
                      <IconSave className="h-4 w-4 mr-2" />
                      Sauvegarder
                    </Button>
                    <Button>
                      <IconSend className="h-4 w-4 mr-2" />
                      Envoyer
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                  <div className="lg:col-span-2 space-y-6">
                    {/* Informations Client */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Informations Client</CardTitle>
                        <CardDescription>Sélectionnez ou ajoutez un nouveau client</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="client">Client</Label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Sélectionner un client" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="acme">Acme Corporation</SelectItem>
                                <SelectItem value="tech">Tech Solutions</SelectItem>
                                <SelectItem value="global">Global Industries</SelectItem>
                                <SelectItem value="startup">Startup Inc</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" placeholder="client@example.com" />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="address">Adresse</Label>
                            <Textarea id="address" placeholder="Adresse complète du client" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Téléphone</Label>
                            <Input id="phone" placeholder="+1 (555) 123-4567" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Articles */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Articles & Services</CardTitle>
                        <CardDescription>Ajoutez les articles à facturer</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Description</TableHead>
                              <TableHead>Quantité</TableHead>
                              <TableHead>Prix unitaire</TableHead>
                              <TableHead>Total</TableHead>
                              <TableHead></TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            <TableRow>
                              <TableCell>
                                <Input placeholder="Description de l'article" />
                              </TableCell>
                              <TableCell>
                                <Input type="number" placeholder="1" className="w-20" />
                              </TableCell>
                              <TableCell>
                                <Input type="number" placeholder="0.00" className="w-24" />
                              </TableCell>
                              <TableCell>$0.00</TableCell>
                              <TableCell>
                                <Button variant="ghost" size="sm">
                                  <IconTrash className="h-4 w-4" />
                                </Button>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                        <Button variant="outline" className="w-full mt-4">
                          <IconPlus className="h-4 w-4 mr-2" />
                          Ajouter un article
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Notes */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Notes & Instructions</CardTitle>
                        <CardDescription>Ajoutez des notes ou instructions de paiement</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Textarea 
                          placeholder="Instructions de paiement, conditions particulières, etc."
                          className="min-h-[100px]"
                        />
                      </CardContent>
                    </Card>
                  </div>

                  {/* Résumé */}
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Résumé de la Facture</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="invoice-number">N° Facture</Label>
                          <Input id="invoice-number" value="INV-001" readOnly />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="date">Date</Label>
                          <Input id="date" type="date" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="due-date">Échéance</Label>
                          <Input id="due-date" type="date" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="payment-terms">Conditions de paiement</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionner" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="net30">Net 30 jours</SelectItem>
                              <SelectItem value="net15">Net 15 jours</SelectItem>
                              <SelectItem value="due-on-receipt">À réception</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Totaux</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex justify-between">
                          <span>Sous-total:</span>
                          <span>$0.00</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Taxes (15%):</span>
                          <span>$0.00</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg">
                          <span>Total:</span>
                          <span>$0.00</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
