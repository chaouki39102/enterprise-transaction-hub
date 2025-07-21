import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    type: 'increase' | 'decrease';
  };
  icon: LucideIcon;
  color?: 'primary' | 'success' | 'warning' | 'destructive';
  className?: string;
}

export function StatCard({ 
  title, 
  value, 
  change, 
  icon: Icon, 
  color = 'primary',
  className 
}: StatCardProps) {
  const colorClasses = {
    primary: 'from-blue-500 via-purple-500 to-blue-600',
    success: 'from-green-500 via-emerald-500 to-green-600',
    warning: 'from-yellow-500 via-orange-500 to-yellow-600',
    destructive: 'from-red-500 via-pink-500 to-red-600'
  };

  return (
    <Card className={cn("glass-card hover:scale-[1.02] transition-all duration-500 group", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm text-muted-foreground mb-2 font-medium">{title}</p>
            <p className="text-3xl font-bold mb-1 tracking-tight">{value}</p>
            {change && (
              <div className="flex items-center gap-1">
                <span className={cn(
                  "text-sm font-semibold",
                  change.type === 'increase' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                )}>
                  {change.type === 'increase' ? '↗' : '↘'} {change.value}%
                </span>
                <span className="text-xs text-muted-foreground">من الشهر الماضي</span>
              </div>
            )}
          </div>
          <div className={cn("p-4 rounded-2xl bg-gradient-to-r shadow-lg group-hover:scale-110 transition-transform", colorClasses[color])}>
            <Icon className="h-7 w-7 text-white" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}