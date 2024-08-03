export interface IBookVolumeInfo {
    title: string
    authors: string[]
    publisher: string
    publishedDate: string
    description: string
    industryIdentifiers: {
        type: string
        identifier: string
    }[]
    readingModes: {
        text: boolean
        image: boolean
    }
    pageCount: 154
    printType: string
    categories: string[]
    maturityRating: string
    allowAnonLogging: boolean
    contentVersion: string
    panelizationSummary: {
        containsEpubBubbles: boolean
        containsImageBubbles: boolean
    }
    imageLinks: {
        smallThumbnail: string
        thumbnail: string
    }
    language: string
    previewLink: string
    infoLink: string
    canonicalVolumeLink: string
}

export interface IBookAccessInfo {
    country: string
    viewability: string
    embeddable: boolean
    publicDomain: boolean
    textToSpeechPermission: string
    epub: {
        isAvailable: boolean
    }
    pdf: {
        isAvailable: true
        acsTokenLink: string
    }
    webReaderLink: string
    accessViewStatus: string
    quoteSharingAllowed: boolean
}

export interface IBookSaleInfo {
    country: string
    saleability: string
    isEbook: boolean
    listPrice: {
        amount: number
        currencyCode: string
    }
    retailPrice: {
        amount: number
        currencyCode: string
    }
    buyLink: string
    offers: {
        finskyOfferType: number
        listPrice: {
            amountInMicros: number
            currencyCode: string
        }
        retailPrice: {
            amountInMicros: number
            currencyCode: string
        }
    }[]
}

export interface IBookItem {
    kind: string
    id: string
    etag: string
    selfLink: string
    volumeInfo: IBookVolumeInfo
    saleInfo: IBookSaleInfo
    accessInfo: IBookAccessInfo
}

export interface IBooks {
    kind: string
    totalItems: number
    items: IBookItem[]
}

export interface IBookRow {
    id: string
    image: string
    title: string
    authors: string
    publishedDate: string
    pageCount: number
    description: string
    buyLink: string
    isEbook: boolean
    publisher: string
    categories: string[]
}
