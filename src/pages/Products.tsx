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
  Package,
  DollarSign,
  AlertTriangle,
  Warehouse
} from 'lucide-react';

const productsData = [
  {
    id: 1,
    name: "لابتوب ديل انسبايرون 15",
    code: "PROD001",
    category: "إلكترونيات",
    price: "85,000 د.ج",
    cost: "65,000 د.ج",
    stock: 45,
    minStock: 10,
    status: "متوفر",
    lastUpdate: "2024-01-15"
  },
  {
    id: 2,
    name: "طابعة HP LaserJet Pro",
    code: "PROD002", 
    category: "مكتبية",
    price: "35,000 د.ج",
    cost: "28,000 د.ج",
    stock: 8,
    minStock: 5,
    status: "مخزون منخفض",
    lastUpdate: "2024-01-12"
  },
  {
    id: 3,
    name: "ماوس لاسلكي لوجيتك",
    code: "PROD003",
    category: "إكسسوارات",
    price: "2,500 د.ج",
    cost: "1,800 د.ج",
    stock: 0,
    minStock: 20,
    status: "نفد المخزون",
    lastUpdate: "2024-01-10"
  }
];

const Products = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'متوفر': return 'default';
      case 'مخزون منخفض': return 'secondary';
      case 'نفد المخزون': return 'destructive';
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
              <h1 className="text-3xl font-bold text-foreground">إدارة المنتجات</h1>
              <p className="text-muted-foreground mt-1">إدارة وتتبع جميع منتجاتك ومخزونك</p>
            </div>
            <Button className="sales-button-primary gap-2">
              <Plus className="h-4 w-4" />
              إضافة منتج جديد
            </Button>
          </div>

          {/* Search and Filters */}
          <Card className="dashboard-stat-card">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="البحث عن منتج..."
                    className="pr-10"
                  />
                </div>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  تصفية حسب الفئة
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
                    <div className="text-2xl font-bold text-primary">856</div>
                    <div className="text-sm text-muted-foreground">إجمالي المنتجات</div>
                  </div>
                  <Package className="h-8 w-8 text-primary/60" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="dashboard-stat-card">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="text-center flex-1">
                    <div className="text-2xl font-bold text-success">740</div>
                    <div className="text-sm text-muted-foreground">متوفر</div>
                  </div>
                  <Warehouse className="h-8 w-8 text-success/60" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="dashboard-stat-card">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="text-center flex-1">
                    <div className="text-2xl font-bold text-warning">87</div>
                    <div className="text-sm text-muted-foreground">مخزون منخفض</div>
                  </div>
                  <AlertTriangle className="h-8 w-8 text-warning/60" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="dashboard-stat-card">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="text-center flex-1">
                    <div className="text-2xl font-bold text-primary">2,450,000 د.ج</div>
                    <div className="text-sm text-muted-foreground">قيمة المخزون</div>
                  </div>
                  <DollarSign className="h-8 w-8 text-primary/60" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Products Table */}
          <Card className="dashboard-stat-card">
            <CardHeader>
              <CardTitle className="text-right">قائمة المنتجات</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {productsData.map((product) => (
                  <div key={product.id} className="border border-border rounded-lg p-4 hover-lift">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                        <Badge variant={getStatusColor(product.status) as any}>
                          {product.status}
                        </Badge>
                      </div>
                      
                      <div className="flex-1 grid grid-cols-1 md:grid-cols-5 gap-4 text-right">
                        <div>
                          <div className="font-semibold text-foreground">{product.name}</div>
                          <div className="text-sm text-muted-foreground">
                            كود: {product.code}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {product.category}
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-sm">
                            <span className="text-muted-foreground">سعر البيع: </span>
                            <span className="font-medium text-success">{product.price}</span>
                          </div>
                          <div className="text-sm">
                            <span className="text-muted-foreground">سعر التكلفة: </span>
                            <span className="font-medium">{product.cost}</span>
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-sm">
                            <span className="text-muted-foreground">المخزون: </span>
                            <span className={`font-bold ${
                              product.stock === 0 ? 'text-destructive' :
                              product.stock <= product.minStock ? 'text-warning' :
                              'text-success'
                            }`}>
                              {product.stock}
                            </span>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            حد أدنى: {product.minStock}
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-sm">
                            <span className="text-muted-foreground">آخر تحديث: </span>
                            <span className="font-medium">{product.lastUpdate}</span>
                          </div>
                        </div>

                        <div className="flex gap-2 justify-end">
                          <Button size="sm" variant="outline">
                            تعديل
                          </Button>
                          <Button size="sm" variant="outline">
                            عرض
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

export default Products;