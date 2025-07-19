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
    primary: 'text-primary bg-primary/10',
    success: 'text-success bg-success/10',
    warning: 'text-warning bg-warning/10',
    destructive: 'text-destructive bg-destructive/10'
  };

  return (
    <Card className={cn("dashboard-stat-card", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <div className="flex items-center space-x-2">
              <p className="dashboard-stat-value">{value}</p>
              {change && (
                <span className={cn(
                  "text-xs font-medium",
                  change.type === 'increase' ? 'text-success' : 'text-destructive'
                )}>
                  {change.type === 'increase' ? '+' : '-'}{Math.abs(change.value)}%
                </span>
              )}
            </div>
          </div>
          <div className={cn(
            "p-3 rounded-full",
            colorClasses[color]
          )}>
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}