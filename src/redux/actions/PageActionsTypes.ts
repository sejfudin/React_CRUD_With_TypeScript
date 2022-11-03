export const PAGES_LOADING = "PAGES_LOADING";
export const PAGES_FAIL = "PAGES_FAIL";
export const PAGES_SUCCESS = "PAGES_SUCCESS";


export type PageType = 
    {
        title: string,
    content: string
}

export interface PagesLoading {
    type: typeof PAGES_LOADING
}

export interface PagesFail {
    type: typeof PAGES_FAIL
}
export interface PagesSuccess {
    type: typeof PAGES_SUCCESS,
    payload: {
        title: string,
        content: string
    }
}

export type PagesDispatchTypes = PagesLoading | PagesFail | PagesSuccess