import { DefaultTheme } from 'vitepress'

export namespace Theme {
  export interface PageData {
    route: string
    meta: {
      title: string
      date: Date
      tag: string[]
      description: string
      cover: string
      sticky?: number
      // old
      categories: string[]
      tags: string[]
    }
  }
  export interface activeTag {
    label: string
    type: string
  }

  export interface Config extends DefaultTheme.Config {
    pagesData: PageData[]
  }
}
