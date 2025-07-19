import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { StatCard } from '@/components/dashboard/StatCard';
import { RecentSales } from '@/components/dashboard/RecentSales';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { 
  TrendingUp, 
  Users, 
  Package, 
  CreditCard,
  ShoppingCart,
  AlertTriangle 
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6 space-y-6">
          {/* Welcome Section */}
          <div className="animate-fade-in">
            <h1 className="text-3xl font-bold text-foreground mb-2">مرحباً بك في نظام تسيير المبيعات</h1>
            <p className="text-muted-foreground">نظرة شاملة على أداء مبيعاتك ومخزونك</p>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
            <StatCard
              title="إجمالي المبيعات اليوم"
              value="156,750 د.ج"
              change={{ value: 12.5, type: 'increase' }}
              icon={TrendingUp}
              color="primary"
            />
            
            <StatCard
              title="عدد العملاء"
              value="1,247"
              change={{ value: 3.2, type: 'increase' }}
              icon={Users}
              color="success"
            />
            
            <StatCard
              title="المنتجات المتاحة"
              value="856"
              change={{ value: 2.1, type: 'decrease' }}
              icon={Package}
              color="warning"
            />
            
            <StatCard
              title="المدفوعات المعلقة"
              value="45,300 د.ج"
              change={{ value: 8.7, type: 'increase' }}
              icon={CreditCard}
              color="destructive"
            />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Sales - Takes 2 columns */}
            <div className="lg:col-span-2">
              <RecentSales />
            </div>
            
            {/* Quick Actions */}
            <div className="space-y-6">
              <QuickActions />
              
              {/* Additional Stats */}
              <div className="space-y-4">
                <StatCard
                  title="الطلبات اليوم"
                  value="23"
                  icon={ShoppingCart}
                  color="primary"
                  className="animate-fade-in"
                />
                
                <StatCard
                  title="تنبيهات المخزون"
                  value="8"
                  icon={AlertTriangle}
                  color="warning"
                  className="animate-fade-in"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
