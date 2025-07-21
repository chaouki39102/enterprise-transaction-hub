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
  ChevronLeft,
  Home,
  ShoppingCart,
  Warehouse
} from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useNavigate, useLocation } from 'react-router-dom';

interface SidebarItemProps {
  icon: React.ComponentType<any>;
  label: string;
  active?: boolean;
  hasSubmenu?: boolean;
  submenuItems?: { label: string; href: string }[];
  href?: string;
}

function SidebarItem({ icon: Icon, label, active = false, hasSubmenu = false, submenuItems = [], href }: SidebarItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (hasSubmenu) {
      setIsOpen(!isOpen);
    } else if (href) {
      navigate(href);
    }
  };

  return (
    <div className="w-full">
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start gap-3 text-sidebar-text hover:bg-primary/10 hover:text-primary",
          active && "bg-primary text-primary-foreground shadow-md"
        )}
        onClick={handleClick}
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
              onClick={() => navigate(item.href)}
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
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    {
      icon: Home,
      label: "لوحة التحكم",
      active: currentPath === "/",
      href: "/"
    },
    {
      icon: Users,
      label: "إدارة العملاء",
      active: currentPath === "/customers",
      href: "/customers",
      hasSubmenu: true,
      submenuItems: [
        { label: "قائمة العملاء", href: "/customers" },
        { label: "إضافة عميل جديد", href: "/customers/new" },
        { label: "العملاء المحذوفين", href: "/customers/deleted" }
      ]
    },
    {
      icon: Package,
      label: "إدارة المنتجات",
      active: currentPath === "/products",
      href: "/products",
      hasSubmenu: true,
      submenuItems: [
        { label: "قائمة المنتجات", href: "/products" },
        { label: "إضافة منتج جديد", href: "/products/new" },
        { label: "فئات المنتجات", href: "/products/categories" },
        { label: "إدارة المخزون", href: "/products/inventory" }
      ]
    },
    {
      icon: FileText,
      label: "الفواتير والمبيعات",
      active: currentPath === "/invoices",
      href: "/invoices",
      hasSubmenu: true,
      submenuItems: [
        { label: "قائمة الفواتير", href: "/invoices" },
        { label: "إنشاء فاتورة جديدة", href: "/invoices/new" },
        { label: "عروض الأسعار", href: "/invoices/quotes" },
        { label: "أوامر البيع", href: "/invoices/orders" }
      ]
    },
    {
      icon: Warehouse,
      label: "المخزون",
      active: currentPath === "/inventory",
      href: "/inventory"
    },
    {
      icon: BarChart3,
      label: "التحليلات",
      active: currentPath === "/analytics",
      href: "/analytics"
    },
    {
      icon: CreditCard,
      label: "إدارة الخزينة",
      active: false,
      hasSubmenu: true,
      submenuItems: [
        { label: "المقبوضات", href: "/treasury/receipts" },
        { label: "المدفوعات", href: "/treasury/payments" },
        { label: "الحسابات البنكية", href: "/treasury/accounts" },
        { label: "الشيكات", href: "/treasury/checks" }
      ]
    },
    {
      icon: BarChart3,
      label: "التقارير",
      active: currentPath === "/reports",
      href: "/reports",
      hasSubmenu: true,
      submenuItems: [
        { label: "تقارير المبيعات", href: "/reports/sales" },
        { label: "تقارير المشتريات", href: "/reports/purchases" },
        { label: "تقارير العملاء", href: "/reports/customers" },
        { label: "تقارير المخزون", href: "/reports/inventory" }
      ]
    },
    {
      icon: Settings,
      label: "الإعدادات",
      active: currentPath === "/settings",
      href: "/settings",
      hasSubmenu: true,
      submenuItems: [
        { label: "إعدادات النظام", href: "/settings" },
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
            href={item.href}
          />
        ))}
      </div>
    </aside>
  );
}