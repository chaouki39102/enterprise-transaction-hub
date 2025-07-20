import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Plus,
  Minus,
  Calculator,
  User,
  Package,
  DollarSign,
  Save,
  X
} from 'lucide-react';

interface InvoiceItem {
  id: string;
  productName: string;
  quantity: number;
  price: number;
  total: number;
}

export const CreateInvoiceDialog = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [items, setItems] = useState<InvoiceItem[]>([
    { id: '1', productName: '', quantity: 1, price: 0, total: 0 }
  ]);

  const customers = [
    { id: '1', name: 'أحمد محمد السيد' },
    { id: '2', name: 'فاطمة أحمد علي' },
    { id: '3', name: 'محمد عبد الله' },
  ];

  const products = [
    { id: '1', name: 'لابتوب ديل انسبايرون 15', price: 85000 },
    { id: '2', name: 'طابعة HP LaserJet Pro', price: 35000 },
    { id: '3', name: 'ماوس لاسلكي لوجيتك', price: 2500 },
  ];

  const addItem = () => {
    const newItem: InvoiceItem = {
      id: Date.now().toString(),
      productName: '',
      quantity: 1,
      price: 0,
      total: 0
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const updateItem = (id: string, field: keyof InvoiceItem, value: string | number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const updatedItem = { ...item, [field]: value };
        if (field === 'quantity' || field === 'price') {
          updatedItem.total = updatedItem.quantity * updatedItem.price;
        }
        return updatedItem;
      }
      return item;
    }));
  };

  const subtotal = items.reduce((sum, item) => sum + item.total, 0);
  const taxRate = 0.19; // 19%
  const taxAmount = subtotal * taxRate;
  const total = subtotal + taxAmount;

  const handleProductSelect = (itemId: string, productName: string) => {
    const product = products.find(p => p.name === productName);
    if (product) {
      updateItem(itemId, 'productName', productName);
      updateItem(itemId, 'price', product.price);
    }
  };

  const handleSaveInvoice = () => {
    // Here you would typically save the invoice to your backend
    console.log('Saving invoice:', {
      customer: selectedCustomer,
      items,
      subtotal,
      taxAmount,
      total
    });
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-right text-xl">إنشاء فاتورة جديدة</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Customer Selection */}
          <Card className="dashboard-stat-card">
            <CardHeader>
              <CardTitle className="text-right text-lg flex items-center gap-2">
                <User className="h-5 w-5" />
                بيانات العميل
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="customer" className="text-right block">اختر العميل</Label>
                <Select value={selectedCustomer} onValueChange={setSelectedCustomer}>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="اختر العميل..." />
                  </SelectTrigger>
                  <SelectContent>
                    {customers.map(customer => (
                      <SelectItem key={customer.id} value={customer.id}>
                        {customer.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Invoice Items */}
          <Card className="dashboard-stat-card">
            <CardHeader>
              <CardTitle className="text-right text-lg flex items-center gap-2">
                <Package className="h-5 w-5" />
                بنود الفاتورة
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {items.map((item, index) => (
                  <div key={item.id} className="border border-border rounded-lg p-4">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
                      {/* Product */}
                      <div className="space-y-2">
                        <Label className="text-right block">المنتج</Label>
                        <Select 
                          value={item.productName} 
                          onValueChange={(value) => handleProductSelect(item.id, value)}
                        >
                          <SelectTrigger className="text-right">
                            <SelectValue placeholder="اختر المنتج..." />
                          </SelectTrigger>
                          <SelectContent>
                            {products.map(product => (
                              <SelectItem key={product.id} value={product.name}>
                                {product.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Quantity */}
                      <div className="space-y-2">
                        <Label className="text-right block">الكمية</Label>
                        <Input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => updateItem(item.id, 'quantity', parseInt(e.target.value) || 0)}
                          className="text-right"
                          min="1"
                        />
                      </div>

                      {/* Price */}
                      <div className="space-y-2">
                        <Label className="text-right block">السعر</Label>
                        <Input
                          type="number"
                          value={item.price}
                          onChange={(e) => updateItem(item.id, 'price', parseFloat(e.target.value) || 0)}
                          className="text-right"
                        />
                      </div>

                      {/* Total */}
                      <div className="space-y-2">
                        <Label className="text-right block">المجموع</Label>
                        <div className="p-2 bg-muted rounded-md text-right font-medium">
                          {item.total.toLocaleString()} د.ج
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        {items.length > 1 && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-destructive"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        )}
                        {index === items.length - 1 && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={addItem}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Invoice Summary */}
          <Card className="dashboard-stat-card">
            <CardHeader>
              <CardTitle className="text-right text-lg flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                ملخص الفاتورة
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{subtotal.toLocaleString()} د.ج</span>
                  <span>المجموع الفرعي:</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-medium">{taxAmount.toLocaleString()} د.ج</span>
                  <span>الضريبة (19%):</span>
                </div>
                
                <div className="border-t pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-primary">{total.toLocaleString()} د.ج</span>
                    <span className="text-lg font-semibold">الإجمالي:</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-2 justify-end">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              إلغاء
            </Button>
            <Button 
              className="sales-button-primary gap-2"
              onClick={handleSaveInvoice}
              disabled={!selectedCustomer || items.some(item => !item.productName)}
            >
              <Save className="h-4 w-4" />
              حفظ الفاتورة
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};