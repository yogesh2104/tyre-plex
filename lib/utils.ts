import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getAvatarInitials(fullName: string): string {
  const words: string[] = fullName.split(' ');
  
  const initials: string = words
    .map((word: string) => word.charAt(0).toUpperCase())
    .join('');

  return initials.slice(0, 2);
}
