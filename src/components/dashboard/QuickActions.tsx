import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Plus, 
  FileText, 
  Package, 
  Users, 
  CreditCard,
  TrendingUp 
} from 'lucide-react';

const quickActions = [
  {
    icon: FileText,
    label: 'إنشاء فاتورة جديدة',
    description: 'إضافة فاتورة مبيعات جديدة',
    color: 'primary'
  },
  {
    icon: Users,
    label: 'إضافة عميل',
    description: 'تسجيل عميل جديد',
    color: 'success'
  },
  {
    icon: Package,
    label: 'إضافة منتج',
    description: 'إدراج منتج جديد للمخزون',
    color: 'warning'
  },
  {
    icon: CreditCard,
    label: 'تسجيل دفعة',
    description: 'إضافة مقبوضات أو مدفوعات',
    color: 'primary'
  },
  {
    icon: TrendingUp,
    label: 'عرض التقارير',
    description: 'مراجعة تقارير المبيعات',
    color: 'success'
  },
  {
    icon: Plus,
    label: 'عملية سريعة',
    description: 'اختصارات للعمليات الشائعة',
    color: 'secondary'
  }
];

export function QuickActions() {
  const getButtonColor = (color: string) => {
    switch (color) {
      case 'primary':
        return 'sales-button-primary';
      case 'success':
        return 'bg-success hover:bg-success/90 text-success-foreground';
      case 'warning':
        return 'bg-warning hover:bg-warning/90 text-warning-foreground';
      default:
        return 'bg-secondary hover:bg-secondary/90 text-secondary-foreground';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">الإجراءات السريعة</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className={`h-auto p-4 flex flex-col items-center space-y-2 text-center hover-lift ${getButtonColor(action.color)}`}
            >
              <action.icon className="h-8 w-8" />
              <div>
                <p className="font-medium text-sm">{action.label}</p>
                <p className="text-xs opacity-80 mt-1">{action.description}</p>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}