import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, Download } from 'lucide-react';

interface Sale {
  id: string;
  customerName: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
  date: string;
  invoiceNumber: string;
}

const recentSales: Sale[] = [
  {
    id: '1',
    customerName: 'شركة الأمل للتجارة',
    amount: 15750,
    status: 'paid',
    date: '2024-01-15',
    invoiceNumber: 'INV-2024-001'
  },
  {
    id: '2',
    customerName: 'متجر النور',
    amount: 8500,
    status: 'pending',
    date: '2024-01-14',
    invoiceNumber: 'INV-2024-002'
  },
  {
    id: '3',
    customerName: 'مؤسسة الفجر',
    amount: 12300,
    status: 'paid',
    date: '2024-01-13',
    invoiceNumber: 'INV-2024-003'
  },
  {
    id: '4',
    customerName: 'شركة النجاح',
    amount: 6750,
    status: 'overdue',
    date: '2024-01-12',
    invoiceNumber: 'INV-2024-004'
  },
  {
    id: '5',
    customerName: 'متجر الباشا',
    amount: 9200,
    status: 'paid',
    date: '2024-01-11',
    invoiceNumber: 'INV-2024-005'
  }
];

export function RecentSales() {
  const getStatusBadge = (status: Sale['status']) => {
    const variants = {
      paid: { variant: 'default' as const, label: 'مدفوعة', color: 'bg-success text-success-foreground' },
      pending: { variant: 'secondary' as const, label: 'معلقة', color: 'bg-warning text-warning-foreground' },
      overdue: { variant: 'destructive' as const, label: 'متأخرة', color: 'bg-destructive text-destructive-foreground' }
    };
    
    const config = variants[status];
    return (
      <Badge className={config.color}>
        {config.label}
      </Badge>
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">المبيعات الأخيرة</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentSales.map((sale) => (
            <div key={sale.id} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="space-y-1">
                  <p className="text-sm font-medium">{sale.customerName}</p>
                  <p className="text-xs text-muted-foreground">{sale.invoiceNumber}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="text-left space-y-1">
                  <p className="text-sm font-semibold">{sale.amount.toLocaleString('ar-DZ')} د.ج</p>
                  <p className="text-xs text-muted-foreground">{sale.date}</p>
                </div>
                
                {getStatusBadge(sale.status)}
                
                <div className="flex space-x-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <Button variant="outline" className="w-full">
            عرض جميع المبيعات
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}