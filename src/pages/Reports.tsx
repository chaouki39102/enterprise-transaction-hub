import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3,
  PieChart,
  TrendingUp,
  Download,
  Calendar,
  Filter,
  Users,
  Package,
  DollarSign,
  ShoppingCart
} from 'lucide-react';

const Reports = () => {
  const salesData = [
    { month: 'يناير', sales: 850000, orders: 145, customers: 89 },
    { month: 'فبراير', sales: 920000, orders: 167, customers: 102 },
    { month: 'مارس', sales: 1100000, orders: 189, customers: 124 },
    { month: 'أبريل', sales: 980000, orders: 156, customers: 98 },
    { month: 'مايو', sales: 1250000, orders: 203, customers: 145 },
    { month: 'يونيو', sales: 1150000, orders: 178, customers: 128 }
  ];

  const topProducts = [
    { name: 'لابتوب ديل انسبايرون 15', sales: '450,000 د.ج', quantity: 15 },
    { name: 'طابعة HP LaserJet Pro', sales: '385,000 د.ج', quantity: 22 },
    { name: 'شاشة سامسونج 27 بوصة', sales: '290,000 د.ج', quantity: 18 },
    { name: 'كيبورد لوجيتك لاسلكي', sales: '185,000 د.ج', quantity: 45 }
  ];

  const topCustomers = [
    { name: 'أحمد محمد السيد', sales: '850,000 د.ج', orders: 12 },
    { name: 'فاطمة أحمد علي', sales: '620,000 د.ج', orders: 8 },
    { name: 'محمد عبد الله', sales: '485,000 د.ج', orders: 6 },
    { name: 'سارة عبد الرحمن', sales: '425,000 د.ج', orders: 9 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6 space-y-6">
          {/* Page Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">التقارير والإحصائيات</h1>
              <p className="text-muted-foreground mt-1">تحليل شامل لأداء المبيعات والعمليات</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2">
                <Calendar className="h-4 w-4" />
                تحديد الفترة
              </Button>
              <Button className="sales-button-primary gap-2">
                <Download className="h-4 w-4" />
                تصدير التقرير
              </Button>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="dashboard-stat-card">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="text-center flex-1">
                    <div className="text-2xl font-bold text-primary">6,250,000 د.ج</div>
                    <div className="text-sm text-muted-foreground">إجمالي المبيعات</div>
                    <div className="text-xs text-success mt-1 flex items-center justify-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      +15.3%
                    </div>
                  </div>
                  <DollarSign className="h-8 w-8 text-primary/60" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="dashboard-stat-card">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="text-center flex-1">
                    <div className="text-2xl font-bold text-primary">1,038</div>
                    <div className="text-sm text-muted-foreground">إجمالي الطلبات</div>
                    <div className="text-xs text-success mt-1 flex items-center justify-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      +8.7%
                    </div>
                  </div>
                  <ShoppingCart className="h-8 w-8 text-primary/60" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="dashboard-stat-card">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="text-center flex-1">
                    <div className="text-2xl font-bold text-primary">686</div>
                    <div className="text-sm text-muted-foreground">عملاء نشطون</div>
                    <div className="text-xs text-success mt-1 flex items-center justify-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      +12.1%
                    </div>
                  </div>
                  <Users className="h-8 w-8 text-primary/60" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="dashboard-stat-card">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="text-center flex-1">
                    <div className="text-2xl font-bold text-primary">6,024</div>
                    <div className="text-sm text-muted-foreground">متوسط سعر الطلب</div>
                    <div className="text-xs text-success mt-1 flex items-center justify-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      +5.2%
                    </div>
                  </div>
                  <Package className="h-8 w-8 text-primary/60" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Sales Chart */}
            <Card className="dashboard-stat-card">
              <CardHeader>
                <CardTitle className="text-right flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  تطور المبيعات الشهرية
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-end justify-between gap-2 p-4">
                  {salesData.map((data, index) => (
                    <div key={index} className="flex flex-col items-center flex-1">
                      <div 
                        className="w-full bg-primary rounded-t-md relative"
                        style={{ 
                          height: `${(data.sales / 1250000) * 200}px`,
                          minHeight: '20px'
                        }}
                      >
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-medium">
                          {(data.sales / 1000).toFixed(0)}k
                        </div>
                      </div>
                      <div className="text-xs mt-2 text-center">
                        {data.month}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Category Distribution */}
            <Card className="dashboard-stat-card">
              <CardHeader>
                <CardTitle className="text-right flex items-center gap-2">
                  <PieChart className="h-5 w-5" />
                  توزيع المبيعات حسب الفئة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span className="text-sm">إلكترونيات</span>
                    </div>
                    <div className="text-sm font-medium">45% - 2,812,500 د.ج</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-secondary rounded-full"></div>
                      <span className="text-sm">مكتبية</span>
                    </div>
                    <div className="text-sm font-medium">30% - 1,875,000 د.ج</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-accent rounded-full"></div>
                      <span className="text-sm">إكسسوارات</span>
                    </div>
                    <div className="text-sm font-medium">15% - 937,500 د.ج</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-muted rounded-full"></div>
                      <span className="text-sm">أخرى</span>
                    </div>
                    <div className="text-sm font-medium">10% - 625,000 د.ج</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Lists */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Top Products */}
            <Card className="dashboard-stat-card">
              <CardHeader>
                <CardTitle className="text-right">أفضل المنتجات مبيعاً</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topProducts.map((product, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border hover-lift">
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary">{index + 1}</Badge>
                        <div>
                          <div className="font-medium">{product.name}</div>
                          <div className="text-sm text-muted-foreground">الكمية: {product.quantity}</div>
                        </div>
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-primary">{product.sales}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Customers */}
            <Card className="dashboard-stat-card">
              <CardHeader>
                <CardTitle className="text-right">أفضل العملاء</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topCustomers.map((customer, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border hover-lift">
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary">{index + 1}</Badge>
                        <div>
                          <div className="font-medium">{customer.name}</div>
                          <div className="text-sm text-muted-foreground">الطلبات: {customer.orders}</div>
                        </div>
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-primary">{customer.sales}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Reports;