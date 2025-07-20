import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Plus, 
  Filter, 
  MoreHorizontal,
  Phone,
  Mail,
  MapPin,
  CreditCard
} from 'lucide-react';

const customersData = [
  {
    id: 1,
    name: "أحمد محمد السيد",
    email: "ahmed@example.com",
    phone: "0555-123-456",
    city: "الرياض",
    creditLimit: "50,000 د.ج",
    balance: "12,500 د.ج",
    status: "نشط",
    lastOrder: "2024-01-15"
  },
  {
    id: 2,
    name: "فاطمة أحمد علي",
    email: "fatima@example.com",
    phone: "0555-789-012",
    city: "الجزائر",
    creditLimit: "75,000 د.ج",
    balance: "8,200 د.ج",
    status: "نشط",
    lastOrder: "2024-01-12"
  },
  {
    id: 3,
    name: "محمد عبد الله",
    email: "mohamed@example.com",
    phone: "0555-345-678",
    city: "وهران",
    creditLimit: "30,000 د.ج",
    balance: "0 د.ج",
    status: "غير نشط",
    lastOrder: "2023-12-20"
  }
];

const Customers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6 space-y-6">
          {/* Page Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">إدارة العملاء</h1>
              <p className="text-muted-foreground mt-1">إدارة وتتبع جميع عملائك</p>
            </div>
            <Button className="sales-button-primary gap-2">
              <Plus className="h-4 w-4" />
              إضافة عميل جديد
            </Button>
          </div>

          {/* Search and Filters */}
          <Card className="dashboard-stat-card">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="البحث عن عميل..."
                    className="pr-10"
                  />
                </div>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  تصفية
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="dashboard-stat-card">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1,247</div>
                  <div className="text-sm text-muted-foreground">إجمالي العملاء</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="dashboard-stat-card">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">1,180</div>
                  <div className="text-sm text-muted-foreground">عملاء نشطون</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="dashboard-stat-card">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-warning">67</div>
                  <div className="text-sm text-muted-foreground">عملاء غير نشطين</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="dashboard-stat-card">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-destructive">247,500 د.ج</div>
                  <div className="text-sm text-muted-foreground">المديونيات</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Customers Table */}
          <Card className="dashboard-stat-card">
            <CardHeader>
              <CardTitle className="text-right">قائمة العملاء</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {customersData.map((customer) => (
                  <div key={customer.id} className="border border-border rounded-lg p-4 hover-lift">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                        <Badge variant={customer.status === 'نشط' ? 'default' : 'secondary'}>
                          {customer.status}
                        </Badge>
                      </div>
                      
                      <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4 text-right">
                        <div>
                          <div className="font-semibold text-foreground">{customer.name}</div>
                          <div className="text-sm text-muted-foreground flex items-center gap-1 justify-end">
                            <span>{customer.email}</span>
                            <Mail className="h-3 w-3" />
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-sm text-muted-foreground flex items-center gap-1 justify-end">
                            <span>{customer.phone}</span>
                            <Phone className="h-3 w-3" />
                          </div>
                          <div className="text-sm text-muted-foreground flex items-center gap-1 justify-end">
                            <span>{customer.city}</span>
                            <MapPin className="h-3 w-3" />
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-sm">
                            <span className="text-muted-foreground">الحد الائتماني: </span>
                            <span className="font-medium">{customer.creditLimit}</span>
                          </div>
                          <div className="text-sm flex items-center gap-1 justify-end">
                            <span className="font-medium text-primary">{customer.balance}</span>
                            <span className="text-muted-foreground">الرصيد:</span>
                            <CreditCard className="h-3 w-3" />
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-sm">
                            <span className="text-muted-foreground">آخر طلب: </span>
                            <span className="font-medium">{customer.lastOrder}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Customers;