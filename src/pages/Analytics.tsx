import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  TrendingUp, 
  TrendingDown,
  Users,
  ShoppingCart,
  DollarSign,
  Calendar,
  Target,
  Zap,
  BarChart3,
  PieChart,
  LineChart
} from 'lucide-react';

const Analytics = () => {
  const salesTrends = [
    { period: 'يناير', sales: 450000, orders: 125, customers: 89 },
    { period: 'فبراير', sales: 520000, orders: 143, customers: 95 },
    { period: 'مارس', sales: 610000, orders: 167, customers: 112 },
    { period: 'أبريل', sales: 580000, orders: 159, customers: 108 },
    { period: 'مايو', sales: 690000, orders: 189, customers: 134 },
    { period: 'يونيو', sales: 750000, orders: 205, customers: 147 }
  ];

  const topProducts = [
    { name: 'لابتوب Dell XPS 13', sales: 45, revenue: 6750000, growth: 15.2 },
    { name: 'هاتف Samsung Galaxy S23', sales: 38, revenue: 4560000, growth: 8.7 },
    { name: 'شاشة Gaming 27 بوصة', sales: 29, revenue: 1740000, growth: -2.1 },
    { name: 'كيبورد ميكانيكي RGB', sales: 67, revenue: 804000, growth: 23.5 },
    { name: 'ماوس لاسلكي', sales: 84, revenue: 672000, growth: 12.3 }
  ];

  const customerSegments = [
    { segment: 'عملاء VIP', count: 23, revenue: 2340000, percentage: 31.2 },
    { segment: 'عملاء منتظمون', count: 89, revenue: 3560000, percentage: 47.4 },
    { segment: 'عملاء جدد', count: 67, revenue: 1600000, percentage: 21.4 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6 space-y-6">
          {/* Page Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold gradient-text">التحليلات والإحصائيات</h1>
              <p className="text-muted-foreground">رؤى عميقة لأداء مبيعاتك</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2">
                <Calendar className="h-4 w-4" />
                آخر 30 يوم
              </Button>
              <Button className="sales-button-primary gap-2">
                <BarChart3 className="h-4 w-4" />
                تصدير التقرير
              </Button>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="glass-card group hover:scale-[1.02] transition-all duration-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">معدل النمو الشهري</p>
                    <p className="text-2xl font-bold text-green-600">+12.5%</p>
                    <div className="flex items-center gap-1 mt-1">
                      <TrendingUp className="h-3 w-3 text-green-600" />
                      <span className="text-xs text-green-600">مقارنة بالشهر الماضي</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 group-hover:scale-110 transition-transform">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card group hover:scale-[1.02] transition-all duration-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">متوسط قيمة الطلب</p>
                    <p className="text-2xl font-bold">4,250 د.ج</p>
                    <div className="flex items-center gap-1 mt-1">
                      <TrendingUp className="h-3 w-3 text-blue-600" />
                      <span className="text-xs text-blue-600">+8.2% هذا الشهر</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 group-hover:scale-110 transition-transform">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card group hover:scale-[1.02] transition-all duration-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">معدل التحويل</p>
                    <p className="text-2xl font-bold">67.8%</p>
                    <div className="flex items-center gap-1 mt-1">
                      <TrendingDown className="h-3 w-3 text-orange-600" />
                      <span className="text-xs text-orange-600">-2.1% هذا الأسبوع</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 group-hover:scale-110 transition-transform">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card group hover:scale-[1.02] transition-all duration-500">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">رضا العملاء</p>
                    <p className="text-2xl font-bold">94.2%</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Zap className="h-3 w-3 text-purple-600" />
                      <span className="text-xs text-purple-600">ممتاز</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 group-hover:scale-110 transition-transform">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="sales" className="w-full">
            <TabsList className="grid w-full grid-cols-4 glass-card">
              <TabsTrigger value="sales" className="gap-2">
                <LineChart className="h-4 w-4" />
                اتجاهات المبيعات
              </TabsTrigger>
              <TabsTrigger value="products" className="gap-2">
                <BarChart3 className="h-4 w-4" />
                أداء المنتجات
              </TabsTrigger>
              <TabsTrigger value="customers" className="gap-2">
                <Users className="h-4 w-4" />
                تحليل العملاء
              </TabsTrigger>
              <TabsTrigger value="forecasting" className="gap-2">
                <TrendingUp className="h-4 w-4" />
                التنبؤات
              </TabsTrigger>
            </TabsList>

            <TabsContent value="sales" className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LineChart className="h-5 w-5" />
                    اتجاهات المبيعات - آخر 6 أشهر
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {salesTrends.map((trend, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <p className="font-semibold">{trend.period}</p>
                            <p className="text-sm text-muted-foreground">{trend.orders} طلب</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold">{trend.sales.toLocaleString()} د.ج</p>
                          <p className="text-sm text-muted-foreground">{trend.customers} عميل جديد</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="products" className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    أفضل المنتجات مبيعاً
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topProducts.map((product, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm
                            ${index === 0 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' : 
                              index === 1 ? 'bg-gradient-to-r from-gray-400 to-gray-600' : 
                              index === 2 ? 'bg-gradient-to-r from-orange-400 to-orange-600' : 
                              'bg-gradient-to-r from-blue-400 to-blue-600'}`}>
                            {index + 1}
                          </div>
                          <div>
                            <p className="font-semibold">{product.name}</p>
                            <p className="text-sm text-muted-foreground">{product.sales} قطعة مباعة</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold">{product.revenue.toLocaleString()} د.ج</p>
                          <Badge variant={product.growth > 0 ? "default" : "destructive"} className="text-xs">
                            {product.growth > 0 ? '+' : ''}{product.growth}%
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="customers" className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="h-5 w-5" />
                    تحليل شرائح العملاء
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {customerSegments.map((segment, index) => (
                      <div key={index} className="p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold">{segment.segment}</h3>
                          <Badge variant="outline">{segment.percentage}%</Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>{segment.count} عميل</span>
                          <span>{segment.revenue.toLocaleString()} د.ج</span>
                        </div>
                        <div className="mt-2 w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${segment.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="forecasting" className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    التنبؤات والتوقعات
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                      <h3 className="font-semibold text-green-700 dark:text-green-400 mb-2">توقعات الشهر القادم</h3>
                      <p className="text-2xl font-bold mb-1">850,000 د.ج</p>
                      <p className="text-sm text-muted-foreground">+13.3% نمو متوقع</p>
                    </div>
                    
                    <div className="p-6 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                      <h3 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">عدد الطلبات المتوقع</h3>
                      <p className="text-2xl font-bold mb-1">235</p>
                      <p className="text-sm text-muted-foreground">+18.7% زيادة متوقعة</p>
                    </div>
                    
                    <div className="p-6 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                      <h3 className="font-semibold text-purple-700 dark:text-purple-400 mb-2">عملاء جدد متوقعين</h3>
                      <p className="text-2xl font-bold mb-1">67</p>
                      <p className="text-sm text-muted-foreground">+25.4% نمو في قاعدة العملاء</p>
                    </div>
                    
                    <div className="p-6 rounded-lg bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20">
                      <h3 className="font-semibold text-orange-700 dark:text-orange-400 mb-2">معدل الربحية</h3>
                      <p className="text-2xl font-bold mb-1">34.2%</p>
                      <p className="text-sm text-muted-foreground">+2.1% تحسن متوقع</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Analytics;