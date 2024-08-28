import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string | number) {
  return new Intl.DateTimeFormat('id-ID', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date))
}

export function formatPrice(price: number) {
  return 'IDR  ' + new Intl.NumberFormat('id-ID', {
    // style: 'currency',
    currency: 'IDR',
    
  }).format(price)
}
