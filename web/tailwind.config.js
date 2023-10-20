// /** @type {{urlToHttpOptions(url: URL): ClientRequestArgs; UrlWithParsedQuery: UrlWithParsedQuery; URL: URL; pathToFileURL(path: string): URL; domainToUnicode(domain: string): string; domainToASCII(domain: string): string; URLFormatOptions: URLFormatOptions; resolve(from: string, to: string): string; fileURLToPath(url: (string | URL)): string; UrlWithStringQuery: UrlWithStringQuery; UrlObject: UrlObject; parse: {(urlString: string): UrlWithStringQuery; (urlString: string, parseQueryString: (false | undefined), slashesDenoteHost?: boolean): UrlWithStringQuery; (urlString: string, parseQueryString: true, slashesDenoteHost?: boolean): UrlWithParsedQuery; (urlString: string, parseQueryString: boolean, slashesDenoteHost?: boolean): Url}; Url: Url; format: {(urlObject: URL, options?: URLFormatOptions): string; (urlObject: (UrlObject | string)): string}; URLSearchParams: URLSearchParams} | {urlToHttpOptions(url: URL): ClientRequestArgs; UrlWithParsedQuery: UrlWithParsedQuery; URL: URL; pathToFileURL(path: string): URL; domainToUnicode(domain: string): string; domainToASCII(domain: string): string; URLFormatOptions: URLFormatOptions; resolve(from: string, to: string): string; fileURLToPath(url: (string | URL)): string; UrlWithStringQuery: UrlWithStringQuery; UrlObject: UrlObject; parse: {(urlString: string): UrlWithStringQuery; (urlString: string, parseQueryString: (false | undefined), slashesDenoteHost?: boolean): UrlWithStringQuery; (urlString: string, parseQueryString: true, slashesDenoteHost?: boolean): UrlWithParsedQuery; (urlString: string, parseQueryString: boolean, slashesDenoteHost?: boolean): Url}; Url: Url; format: {(urlObject: URL, options?: URLFormatOptions): string; (urlObject: (UrlObject | string)): string}; URLSearchParams: URLSearchParams} | {urlToHttpOptions(url: URL): ClientRequestArgs; UrlWithParsedQuery: UrlWithParsedQuery; URL: URL; pathToFileURL(path: string): URL; domainToUnicode(domain: string): string; domainToASCII(domain: string): string; URLFormatOptions: URLFormatOptions; resolve(from: string, to: string): string; fileURLToPath(url: (string | URL)): string; UrlWithStringQuery: UrlWithStringQuery; UrlObject: UrlObject; parse: {(urlString: string): UrlWithStringQuery; (urlString: string, parseQueryString: (false | undefined), slashesDenoteHost?: boolean): UrlWithStringQuery; (urlString: string, parseQueryString: true, slashesDenoteHost?: boolean): UrlWithParsedQuery; (urlString: string, parseQueryString: boolean, slashesDenoteHost?: boolean): Url}; Url: Url; format: {(urlObject: URL, options?: URLFormatOptions): string; (urlObject: (UrlObject | string)): string}; URLSearchParams: URLSearchParams} | {urlToHttpOptions(url: URL): ClientRequestArgs; UrlWithParsedQuery: UrlWithParsedQuery; URL: URL; pathToFileURL(path: string): URL; domainToUnicode(domain: string): string; domainToASCII(domain: string): string; URLFormatOptions: URLFormatOptions; resolve(from: string, to: string): string; fileURLToPath(url: (string | URL)): string; UrlWithStringQuery: UrlWithStringQuery; UrlObject: UrlObject; parse: {(urlString: string): UrlWithStringQuery; (urlString: string, parseQueryString: (false | undefined), slashesDenoteHost?: boolean): UrlWithStringQuery; (urlString: string, parseQueryString: true, slashesDenoteHost?: boolean): UrlWithParsedQuery; (urlString: string, parseQueryString: boolean, slashesDenoteHost?: boolean): Url}; Url: Url; format: {(urlObject: URL, options?: URLFormatOptions): string; (urlObject: (UrlObject | string)): string}; URLSearchParams: URLSearchParams}} */
// const url = require("url");
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontFamily: {
            'sans': ['"Satoshi Variable"', "Inter", "sans-serif"]
        },
        // colors: {
        //     'custom-color-black': '#161B17'
        // },
        extend: {
            backgroundImage: {
                'featured-image': "url('/feature-img.png')"
            }
        },
    },
    plugins: [],
}