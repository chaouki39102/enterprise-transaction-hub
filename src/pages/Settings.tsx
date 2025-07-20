import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { 
  Settings as SettingsIcon,
  User,
  Shield,
  Bell,
  Palette,
  Database,
  Mail,
  Smartphone,
  Globe,
  Save,
  Upload
} from 'lucide-react';

const Settings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6 space-y-6">
          {/* Page Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">الإعدادات</h1>
              <p className="text-muted-foreground mt-1">إدارة إعدادات النظام والتفضيلات</p>
            </div>
            <Button className="sales-button-primary gap-2">
              <Save className="h-4 w-4" />
              حفظ الإعدادات
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Settings Menu */}
            <div className="space-y-4">
              <Card className="dashboard-stat-card">
                <CardHeader>
                  <CardTitle className="text-right text-lg">أقسام الإعدادات</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start gap-2 text-right">
                    <User className="h-4 w-4" />
                    المعلومات الشخصية
                  </Button>
                  <Button variant="secondary" className="w-full justify-start gap-2 text-right">
                    <SettingsIcon className="h-4 w-4" />
                    إعدادات النظام
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-2 text-right">
                    <Shield className="h-4 w-4" />
                    الأمان والصلاحيات
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-2 text-right">
                    <Bell className="h-4 w-4" />
                    الإشعارات
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-2 text-right">
                    <Palette className="h-4 w-4" />
                    المظهر والواجهة
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-2 text-right">
                    <Database className="h-4 w-4" />
                    النسخ الاحتياطي
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Settings Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Company Information */}
              <Card className="dashboard-stat-card">
                <CardHeader>
                  <CardTitle className="text-right flex items-center gap-2">
                    <SettingsIcon className="h-5 w-5" />
                    معلومات الشركة
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company-name" className="text-right block">اسم الشركة</Label>
                      <Input id="company-name" defaultValue="شركة التجارة المتقدمة" className="text-right" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tax-number" className="text-right block">الرقم الضريبي</Label>
                      <Input id="tax-number" defaultValue="123456789" className="text-right" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-right block">العنوان</Label>
                    <Input id="address" defaultValue="الجزائر العاصمة، الجزائر" className="text-right" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-right block flex items-center gap-2">
                        <Smartphone className="h-4 w-4" />
                        رقم الهاتف
                      </Label>
                      <Input id="phone" defaultValue="+213 555 123 456" className="text-right" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-right block flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        البريد الإلكتروني
                      </Label>
                      <Input id="email" defaultValue="info@company.dz" className="text-right" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* System Settings */}
              <Card className="dashboard-stat-card">
                <CardHeader>
                  <CardTitle className="text-right flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    إعدادات النظام
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="text-base">العملة الافتراضية</Label>
                      <p className="text-sm text-muted-foreground">دينار جزائري (د.ج)</p>
                    </div>
                    <Badge variant="secondary">د.ج</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="text-base">اللغة</Label>
                      <p className="text-sm text-muted-foreground">العربية</p>
                    </div>
                    <Badge variant="secondary">العربية</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="text-base">المنطقة الزمنية</Label>
                      <p className="text-sm text-muted-foreground">توقيت الجزائر (UTC+1)</p>
                    </div>
                    <Badge variant="secondary">UTC+1</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="auto-backup" className="text-base">النسخ الاحتياطي التلقائي</Label>
                      <p className="text-sm text-muted-foreground">نسخ احتياطي يومي للبيانات</p>
                    </div>
                    <Switch id="auto-backup" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="notifications" className="text-base">الإشعارات</Label>
                      <p className="text-sm text-muted-foreground">إشعارات المخزون والفواتير</p>
                    </div>
                    <Switch id="notifications" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="dark-mode" className="text-base">الوضع الليلي</Label>
                      <p className="text-sm text-muted-foreground">واجهة داكنة لتوفير الطاقة</p>
                    </div>
                    <Switch id="dark-mode" />
                  </div>
                </CardContent>
              </Card>

              {/* Invoice Settings */}
              <Card className="dashboard-stat-card">
                <CardHeader>
                  <CardTitle className="text-right">إعدادات الفواتير</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="invoice-prefix" className="text-right block">بادئة رقم الفاتورة</Label>
                      <Input id="invoice-prefix" defaultValue="INV-" className="text-right" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="invoice-counter" className="text-right block">العداد الحالي</Label>
                      <Input id="invoice-counter" defaultValue="2024-001" className="text-right" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="tax-rate" className="text-right block">معدل الضريبة (%)</Label>
                      <Input id="tax-rate" defaultValue="19" className="text-right" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="payment-terms" className="text-right block">مدة السداد (يوم)</Label>
                      <Input id="payment-terms" defaultValue="30" className="text-right" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="auto-send" className="text-base">إرسال تلقائي للفواتير</Label>
                      <p className="text-sm text-muted-foreground">إرسال الفواتير بالبريد الإلكتروني تلقائياً</p>
                    </div>
                    <Switch id="auto-send" defaultChecked />
                  </div>
                </CardContent>
              </Card>

              {/* Logo Upload */}
              <Card className="dashboard-stat-card">
                <CardHeader>
                  <CardTitle className="text-right">شعار الشركة</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center">
                      <Upload className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">
                        ارفع شعار الشركة ليظهر على الفواتير والتقارير
                      </p>
                      <Button variant="outline" className="mt-2 gap-2">
                        <Upload className="h-4 w-4" />
                        رفع شعار جديد
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;