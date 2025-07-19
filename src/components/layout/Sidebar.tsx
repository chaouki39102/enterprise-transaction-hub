import { 
  LayoutDashboard, 
  Users, 
  Package, 
  FileText, 
  CreditCard,
  Truck,
  BarChart3,
  Settings,
  ChevronDown,
  ChevronLeft
} from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SidebarItemProps {
  icon: React.ComponentType<any>;
  label: string;
  active?: boolean;
  hasSubmenu?: boolean;
  submenuItems?: { label: string; href: string }[];
}

function SidebarItem({ icon: Icon, label, active = false, hasSubmenu = false, submenuItems = [] }: SidebarItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start gap-3 text-sidebar-text hover:bg-primary/10 hover:text-primary",
          active && "bg-primary text-primary-foreground shadow-md"
        )}
        onClick={() => hasSubmenu && setIsOpen(!isOpen)}
      >
        <Icon className="h-5 w-5" />
        <span className="flex-1 text-right">{label}</span>
        {hasSubmenu && (
          <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
        )}
      </Button>
      
      {hasSubmenu && isOpen && (
        <div className="mr-4 mt-2 space-y-1">
          {submenuItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className="w-full justify-start gap-3 text-sm text-sidebar-text/80 hover:bg-primary/5 hover:text-primary pr-8"
            >
              <ChevronLeft className="h-3 w-3" />
              <span className="flex-1 text-right">{item.label}</span>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}

export function Sidebar() {
  const menuItems = [
    {
      icon: LayoutDashboard,
      label: "لوحة التحكم",
      active: true
    },
    {
      icon: Users,
      label: "إدارة العملاء",
      hasSubmenu: true,
      submenuItems: [
        { label: "جميع العملاء", href: "/customers" },
        { label: "إضافة عميل جديد", href: "/customers/new" },
        { label: "تقارير العملاء", href: "/customers/reports" }
      ]
    },
    {
      icon: Package,
      label: "إدارة المنتجات",
      hasSubmenu: true,
      submenuItems: [
        { label: "جميع المنتجات", href: "/products" },
        { label: "إضافة منتج", href: "/products/new" },
        { label: "إدارة المخزون", href: "/inventory" },
        { label: "حركات المخزون", href: "/stock-movements" }
      ]
    },
    {
      icon: FileText,
      label: "الفواتير والمبيعات",
      hasSubmenu: true,
      submenuItems: [
        { label: "إنشاء فاتورة", href: "/invoices/new" },
        { label: "جميع الفواتير", href: "/invoices" },
        { label: "عروض الأسعار", href: "/quotes" },
        { label: "المرتجعات", href: "/returns" }
      ]
    },
    {
      icon: Truck,
      label: "المشتريات",
      hasSubmenu: true,
      submenuItems: [
        { label: "طلبات الشراء", href: "/purchase-orders" },
        { label: "فواتير المشتريات", href: "/purchase-invoices" },
        { label: "إدارة الموردين", href: "/suppliers" }
      ]
    },
    {
      icon: CreditCard,
      label: "الخزينة والمدفوعات",
      hasSubmenu: true,
      submenuItems: [
        { label: "المقبوضات", href: "/payments/received" },
        { label: "المدفوعات", href: "/payments/made" },
        { label: "الشيكات", href: "/checks" },
        { label: "الحسابات البنكية", href: "/bank-accounts" }
      ]
    },
    {
      icon: BarChart3,
      label: "التقارير والتحليلات",
      hasSubmenu: true,
      submenuItems: [
        { label: "تقارير المبيعات", href: "/reports/sales" },
        { label: "تقارير المخزون", href: "/reports/inventory" },
        { label: "تقارير مالية", href: "/reports/financial" },
        { label: "تحليل الأداء", href: "/reports/performance" }
      ]
    },
    {
      icon: Settings,
      label: "الإعدادات",
      hasSubmenu: true,
      submenuItems: [
        { label: "إعدادات النظام", href: "/settings/system" },
        { label: "إدارة المستخدمين", href: "/settings/users" },
        { label: "الصلاحيات", href: "/settings/permissions" },
        { label: "النسخ الاحتياطي", href: "/settings/backup" }
      ]
    }
  ];

  return (
    <aside className="sales-sidebar w-64 min-h-screen p-4">
      <div className="space-y-2">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            active={item.active}
            hasSubmenu={item.hasSubmenu}
            submenuItems={item.submenuItems}
          />
        ))}
      </div>
    </aside>
  );
}