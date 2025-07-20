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
  FileText,
  Eye,
  Download,
  Calendar,
  DollarSign
} from 'lucide-react';

const invoicesData = [
  {
    id: 1,
    number: "INV-2024-001",
    customer: "أحمد محمد السيد",
    date: "2024-01-15",
    dueDate: "2024-02-15",
    amount: "125,000 د.ج",
    paid: "100,000 د.ج",
    remaining: "25,000 د.ج",
    status: "مدفوعة جزئياً",
    type: "بيع"
  },
  {
    id: 2,
    number: "INV-2024-002",
    customer: "فاطمة أحمد علي",
    date: "2024-01-14",
    dueDate: "2024-02-14",
    amount: "85,500 د.ج",
    paid: "85,500 د.ج",
    remaining: "0 د.ج",
    status: "مدفوعة",
    type: "بيع"
  },
  {
    id: 3,
    number: "INV-2024-003",
    customer: "محمد عبد الله",
    date: "2024-01-13",
    dueDate: "2024-02-13",
    amount: "210,000 د.ج",
    paid: "0 د.ج",
    remaining: "210,000 د.ج",
    status: "معلقة",
    type: "بيع"
  }
];

const Invoices = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'مدفوعة': return 'default';
      case 'مدفوعة جزئياً': return 'secondary';
      case 'معلقة': return 'destructive';
      case 'ملغاة': return 'outline';
      default: return 'default';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6 space-y-6">
          {/* Page Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">الفواتير والمبيعات</h1>
              <p className="text-muted-foreground mt-1">إدارة وتتبع جميع فواتير المبيعات</p>
            </div>
            <Button className="sales-button-primary gap-2">
              <Plus className="h-4 w-4" />
              إنشاء فاتورة جديدة
            </Button>
          </div>

          {/* Search and Filters */}
          <Card className="dashboard-stat-card">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="البحث برقم الفاتورة أو اسم العميل..."
                    className="pr-10"
                  />
                </div>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  تصفية حسب التاريخ
                </Button>
                <Button variant="outline" className="gap-2">
                  <Calendar className="h-4 w-4" />
                  الفترة المحددة
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="dashboard-stat-card">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="text-center flex-1">
                    <div className="text-2xl font-bold text-primary">1,234</div>
                    <div className="text-sm text-muted-foreground">إجمالي الفواتير</div>
                  </div>
                  <FileText className="h-8 w-8 text-primary/60" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="dashboard-stat-card">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="text-center flex-1">
                    <div className="text-2xl font-bold text-success">850</div>
                    <div className="text-sm text-muted-foreground">مدفوعة</div>
                  </div>
                  <DollarSign className="h-8 w-8 text-success/60" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="dashboard-stat-card">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="text-center flex-1">
                    <div className="text-2xl font-bold text-warning">234</div>
                    <div className="text-sm text-muted-foreground">مدفوعة جزئياً</div>
                  </div>
                  <FileText className="h-8 w-8 text-warning/60" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="dashboard-stat-card">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="text-center flex-1">
                    <div className="text-2xl font-bold text-destructive">150</div>
                    <div className="text-sm text-muted-foreground">معلقة</div>
                  </div>
                  <FileText className="h-8 w-8 text-destructive/60" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Invoices Table */}
          <Card className="dashboard-stat-card">
            <CardHeader>
              <CardTitle className="text-right">قائمة الفواتير</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {invoicesData.map((invoice) => (
                  <div key={invoice.id} className="border border-border rounded-lg p-4 hover-lift">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                        <Badge variant={getStatusColor(invoice.status) as any}>
                          {invoice.status}
                        </Badge>
                      </div>
                      
                      <div className="flex-1 grid grid-cols-1 md:grid-cols-6 gap-4 text-right">
                        <div>
                          <div className="font-semibold text-foreground">{invoice.number}</div>
                          <div className="text-sm text-muted-foreground">{invoice.type}</div>
                        </div>
                        
                        <div>
                          <div className="font-medium">{invoice.customer}</div>
                          <div className="text-sm text-muted-foreground">العميل</div>
                        </div>
                        
                        <div>
                          <div className="text-sm">
                            <span className="text-muted-foreground">التاريخ: </span>
                            <span className="font-medium">{invoice.date}</span>
                          </div>
                          <div className="text-sm">
                            <span className="text-muted-foreground">الاستحقاق: </span>
                            <span className="font-medium">{invoice.dueDate}</span>
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-sm">
                            <span className="text-muted-foreground">المبلغ: </span>
                            <span className="font-bold text-primary">{invoice.amount}</span>
                          </div>
                          <div className="text-sm">
                            <span className="text-muted-foreground">المدفوع: </span>
                            <span className="font-medium text-success">{invoice.paid}</span>
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-sm">
                            <span className="text-muted-foreground">المتبقي: </span>
                            <span className={`font-bold ${
                              invoice.remaining === "0 د.ج" ? 'text-success' : 'text-destructive'
                            }`}>
                              {invoice.remaining}
                            </span>
                          </div>
                        </div>

                        <div className="flex gap-2 justify-end">
                          <Button size="sm" variant="outline">
                            <Eye className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="h-3 w-3" />
                          </Button>
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

export default Invoices;