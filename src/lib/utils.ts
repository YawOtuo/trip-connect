import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const busPics : any = {
  "VIP":"/Bismarkbus.png",
  "STC": "/stc.png",
  "2M EXPRESS" : "/2m.png"
}