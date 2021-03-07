declare module 'chrome-webstore' {
  export interface Item {
    id: string
    name: string
    title: string
    slug: string
    url: string
    author: {
      name: string
      domain: string
      url: string
    }
    description: string
    website: string
    support: string
    version: string
    size: string
    published: string
    users: string
    rating: {
      average: number
      count: number
    }
    price: string
    purchases: null
    category: {
      name: string
      slug: string
    }
    images: {
      '26x26': string | null
      '128x128': string | null
      '141x90': string | null
      '220x140': string | null
      '440x280': string | null
      '460x340': string | null
    }
    languages: string[]
    developer: {
      email: string | null
      address: string | null
      policy: string | null
    }
    type: string
    status: string
    manifest: string
  }

  export interface Review {
    rating: 5 | 4 | 3 | 2 | 1
    message: string
    created: number
    updated: number
    author: {
      id: string | undefined
      name: string | undefined
      avatar: string | null
    }
  }

  export interface Issue {
    type: 'problem' | 'question' | 'suggestion'
    status: string
    title: string
    description: string
    browser: string
    version: string
    date: number
    author: {
      id: string | undefined
      name: string | undefined
      avatar: string | null
    }
  }

  export interface ParamsBase {
    [option: string]: any // FIXME: Replace it with request-compose options.
  }

  export interface DetailParams extends ParamsBase {
    id?: string
    related?: boolean
    more?: boolean
    locale?: string
    version?: string
  }

  export interface ItemsParams extends ParamsBase {
    search?: string
    category?: string
    rating?: 5 | 4 | 3 | 2
    features?: ('offline' | 'google' | 'free' | 'android' | 'gdrive')[]
    count?: number
    offset?: number
    locale?: string
    version?: string
  }

  export interface ReviewsParams extends ParamsBase {
    id?: string
    count?: number
    offset?: number
    locale?: string
    sort?: 'helpful' | 'recent'
    version?: string
  }

  export interface IssuesParams extends ParamsBase {
    id?: string
    type?: 'problem' | 'question' | 'suggestion'
    count?: number
    page?: number
    version?: string
  }

  export interface VersionParams extends ParamsBase {}

  export function detail(params: DetailParams): Promise<Item>
  export function items(params: ItemsParams): Promise<Item[]>
  export function reviews(params: ReviewsParams): Promise<Review[]>
  export function issues(params: IssuesParams): Promise<Issue[]>
  export function version(params: VersionParams): Promise<string>
}
