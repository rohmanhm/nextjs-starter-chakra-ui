/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.scss' {
  const content: { [className: string]: string }
  export = content
}

declare module 'next-offline/runtime' {
  type RegisterOption = { scope: string }
  export const register: (path: string, option?: RegisterOption) => void
  export const unregister: () => void
}
