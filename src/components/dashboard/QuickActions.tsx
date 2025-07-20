import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreateInvoiceDialog } from '@/components/common/CreateInvoiceDialog';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  
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

  const handleActionClick = (index: number) => {
    switch (index) {
      case 1: // إضافة عميل
        navigate('/customers');
        break;
      case 2: // إضافة منتج
        navigate('/products');
        break;
      case 3: // تسجيل دفعة
        navigate('/invoices');
        break;
      case 4: // عرض التقارير
        navigate('/reports');
        break;
      default:
        break;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">الإجراءات السريعة</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {quickActions.map((action, index) => {
            if (index === 0) {
              return (
                <CreateInvoiceDialog key={index}>
                  <Button
                    variant="outline"
                    className={`h-auto p-4 flex flex-col items-center space-y-2 text-center hover-lift ${getButtonColor(action.color)}`}
                  >
                    <action.icon className="h-8 w-8" />
                    <div>
                      <p className="font-medium text-sm">{action.label}</p>
                      <p className="text-xs opacity-80 mt-1">{action.description}</p>
                    </div>
                  </Button>
                </CreateInvoiceDialog>
              );
            }
            
            return (
              <Button
                key={index}
                variant="outline"
                className={`h-auto p-4 flex flex-col items-center space-y-2 text-center hover-lift ${getButtonColor(action.color)}`}
                onClick={() => handleActionClick(index)}
              >
                <action.icon className="h-8 w-8" />
                <div>
                  <p className="font-medium text-sm">{action.label}</p>
                  <p className="text-xs opacity-80 mt-1">{action.description}</p>
                </div>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}