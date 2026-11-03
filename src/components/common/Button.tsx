import React from 'react'
import { cn } from '../../lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'brand'
  size?: 'sm' | 'md' | 'lg' | 'icon'
  fullWidth?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'default',
      size = 'md',
      fullWidth = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      default:
        'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm active:translate-y-px',
      secondary:
        'bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border shadow-xs',
      outline:
        'border border-border bg-background text-foreground hover:bg-secondary/60 active:bg-secondary',
      ghost:
        'text-foreground hover:bg-secondary/70 hover:text-foreground active:bg-secondary',
      brand:
        'bg-brand text-brand-foreground hover:bg-brand/90 shadow-sm font-semibold active:translate-y-px',
    }

    const sizeStyles = {
      sm: 'h-8 px-3 text-xs gap-1.5 rounded-sm',
      md: 'h-10 px-4 text-sm gap-2 rounded-md',
      lg: 'h-12 px-6 text-base gap-2.5 rounded-md font-medium',
      icon: 'h-10 w-10 p-0 items-center justify-center rounded-md',
    }

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          'inline-flex items-center justify-center font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none',
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </button>
    )
  }
)

Button.displayName = 'Button'
