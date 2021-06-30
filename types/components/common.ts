import { type } from "os"

export type BaseEventHandler = () => void

export type SelectEventHandler = (selectedVal: [], selectedIndex: [], selectedText: []) => void

export type ChangeEventHandler = (index: number, selectedIndex: number) => void