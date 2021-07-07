export type BaseEventHandler = () => void

export type SelectEventHandler = (selectedVal: [], selectedIndex: [], selectedText: []) => void

export type ChangeEventHandler = (index: number, selectedIndex: number) => void

export type AddString<T> = {
  [P in keyof T]: T[P] | string;
}
export type GetFunctionNames<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T]

export type GetPropsAddString<T> = AddString<Omit<T, GetFunctionNames<T>>>

export type TransformFnKey<S extends string> = S extends `${infer A}-${infer B}` ? `on${Capitalize<A>}${Capitalize<B>}` : `on${Capitalize<S>}`

export type TransformFnKeys<T> = {
  [P in keyof T & string as `${TransformFnKey<P>}`]?: T[P]
}

export type GetTransformFnKeys<T> = TransformFnKeys<Pick<T, GetFunctionNames<T>>>
