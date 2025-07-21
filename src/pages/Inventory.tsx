import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Package, 
  Search, 
  Filter,
  AlertTriangle,
  CheckCircle,
  XCircle,
  TrendingDown,
  Plus,
  Edit,
  Trash2
} from 'lucide-react';

const Inventory = () => {
  const inventoryData = [
    {
      id: 1,
      name: 'لابتوب Dell XPS 13',
      sku: 'DELL-XPS-001',
      category: 'إلكترونيات',
      currentStock: 15,
      minStock: 5,
      maxStock: 50,
      cost: 120000,
      price: 150000,
      supplier: 'شركة التقنية المتقدمة',
      status: 'متوفر',
      location: 'المخزن الرئيسي - الرف A1'
    },
    {
      id: 2,
      name: 'هاتف Samsung Galaxy S23',
      sku: 'SAM-S23-001',
      category: 'جوالات',
      currentStock: 3,
      minStock: 10,
      maxStock: 100,
      cost: 95000,
      price: 120000,
      supplier: 'موزع سامسونج الرسمي',
      status: 'نفاد قريب',
      location: 'المخزن الفرعي - الرف B2'
    },
    {
      id: 3,
      name: 'كيبورد ميكانيكي RGB',
      sku: 'KB-RGB-001',
      category: 'اكسسوارات',
      currentStock: 0,
      minStock: 20,
      maxStock: 200,
      cost: 8500,
      price: 12000,
      supplier: 'شركة الألعاب التقنية',
      status: 'نفدت الكمية',
      location: 'المخزن الرئيسي - الرف C3'
    },
    {
      id: 4,
      name: 'شاشة Gaming 27 بوصة',
      sku: 'MON-27G-001',
      category: 'شاشات',
      currentStock: 25,
      minStock: 8,
      maxStock: 40,
      cost: 45000,
      price: 60000,
      supplier: 'شركة العرض المثالي',
      status: 'متوفر',
      location: 'المخزن الرئيسي - الرف D1'
    }
  ];

  const getStatusBadge = (status: string, currentStock: number, minStock: number) => {
    if (currentStock === 0) {
      return <Badge variant="destructive" className="gap-1"><XCircle className="h-3 w-3" />نفدت الكمية</Badge>;
    } else if (currentStock <= minStock) {
      return <Badge variant="secondary" className="gap-1 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"><AlertTriangle className="h-3 w-3" />نفاد قريب</Badge>;
    } else {
      return <Badge variant="default" className="gap-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"><CheckCircle className="h-3 w-3" />متوفر</Badge>;
    }
  };

  const lowStockItems = inventoryData.filter(item => item.currentStock <= item.minStock);
  const outOfStockItems = inventoryData.filter(item => item.currentStock === 0);
  const totalValue = inventoryData.reduce((sum, item) => sum + (item.currentStock * item.cost), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6 space-y-6">
          {/* Page Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold gradient-text">إدارة المخزون</h1>
              <p className="text-muted-foreground">تتبع وإدارة مخزونك بدقة</p>
            </div>
            <Button className="sales-button-primary">
              <Plus className="ml-2 h-4 w-4" />
              إضافة منتج جديد
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">إجمالي المنتجات</p>
                    <p className="text-2xl font-bold">{inventoryData.length}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
                    <Package className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">قيمة المخزون</p>
                    <p className="text-2xl font-bold">{totalValue.toLocaleString()} د.ج</p>
                  </div>
                  <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">نفاد قريب</p>
                    <p className="text-2xl font-bold text-orange-600">{lowStockItems.length}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500">
                    <AlertTriangle className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">نفدت الكمية</p>
                    <p className="text-2xl font-bold text-red-600">{outOfStockItems.length}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-gradient-to-r from-red-500 to-pink-500">
                    <TrendingDown className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Search and Filter */}
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input 
                    placeholder="بحث عن المنتجات..."
                    className="pr-10 text-right"
                  />
                </div>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  فلترة
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Inventory Table */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                قائمة المنتجات
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="text-right p-4 font-semibold">المنتج</th>
                      <th className="text-right p-4 font-semibold">الكمية الحالية</th>
                      <th className="text-right p-4 font-semibold">الحد الأدنى</th>
                      <th className="text-right p-4 font-semibold">السعر</th>
                      <th className="text-right p-4 font-semibold">المورد</th>
                      <th className="text-right p-4 font-semibold">الحالة</th>
                      <th className="text-right p-4 font-semibold">الموقع</th>
                      <th className="text-right p-4 font-semibold">الإجراءات</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inventoryData.map((item) => (
                      <tr key={item.id} className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                        <td className="p-4">
                          <div>
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-sm text-muted-foreground">كود: {item.sku}</p>
                            <Badge variant="outline" className="mt-1 text-xs">{item.category}</Badge>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className={`font-bold ${item.currentStock <= item.minStock ? 'text-red-600' : 'text-green-600'}`}>
                            {item.currentStock}
                          </span>
                        </td>
                        <td className="p-4">{item.minStock}</td>
                        <td className="p-4">
                          <div>
                            <p className="font-semibold">{item.price.toLocaleString()} د.ج</p>
                            <p className="text-sm text-muted-foreground">تكلفة: {item.cost.toLocaleString()} د.ج</p>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="text-sm">{item.supplier}</span>
                        </td>
                        <td className="p-4">
                          {getStatusBadge(item.status, item.currentStock, item.minStock)}
                        </td>
                        <td className="p-4">
                          <span className="text-sm text-muted-foreground">{item.location}</span>
                        </td>
                        <td className="p-4">
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-800">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Inventory;