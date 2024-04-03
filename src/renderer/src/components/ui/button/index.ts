import { cva, type VariantProps } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border',
  {
    variants: {
      variant: {
        default:
          'text-button-text hover:opacity-90 shadow-lg shadow-md transition-opacity  shadow-black/20 bg-gradient-to-b from-background-secondary from-85% via-background-secondary to-black/20',
        primary: 'bg-selection text-black hover:bg-selection/90 shadow-inner-sm',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        secondary: 'bg-background hover:bg-background/80',
        ghost: 'hover:bg-background hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-11 px-4 py-2',
        fixed: 'h-11 w-[9.25rem]',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-11 w-11',
        iconSm: 'h-8 w-8'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
