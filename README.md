# GoogleBooksLookup
an app to look for books

populate mongoDB with some dummy data

api key: AIzaSyAwtxthjWIGZYyIXdLIiB-t4kFkHB-rrBo

copy of json response:
"items": [
        {
            "kind": "books#volume",
            "id": "ZlU3DwAAQBAJ",
            "etag": "JSUPhjHeOJw",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/ZlU3DwAAQBAJ",
            "volumeInfo": {
                "title": "Why We Sleep",
                "subtitle": "Unlocking the Power of Sleep and Dreams",
                "authors": [
                    "Matthew Walker"
                ],
                "publisher": "Simon and Schuster",
                "publishedDate": "2017-10-03",
                "description": "\"Sleep is one of the most important but least understood aspects of our life, wellness, and longevity ... An explosion of scientific discoveries in the last twenty years has shed new light on this fundamental aspect of our lives. Now ... neuroscientist and sleep expert Matthew Walker gives us a new understanding of the vital importance of sleep and dreaming\"--Amazon.com.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9781501144318"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "1501144316"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": false
                },
                "pageCount": 360,
                "printType": "BOOK",
                "categories": [
                    "Health & Fitness"
                ],
                "averageRating": 3.0,
                "ratingsCount": 2,
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "0.7.1.0.preview.0",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=ZlU3DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=ZlU3DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=ZlU3DwAAQBAJ&printsec=frontcover&dq=sleep&hl=&cd=1&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=ZlU3DwAAQBAJ&dq=sleep&hl=&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Why_We_Sleep.html?hl=&id=ZlU3DwAAQBAJ"
            },
            "saleInfo": {
                "country": "US",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "US",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=ZlU3DwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "Now ... neuroscientist and sleep expert Matthew Walker gives us a new understanding of the vital importance of sleep and dreaming&quot;--Amazon.com."
            }
        },

Search page:
  Components:
    Nav (3 links)
      Google Books: [Google Books](https://books.google.com/)
      Search Page
      Saved Page

    Title Card
      Title: React Google Books Search
      subtitle: Search for & Save Books of Interest

    Result Card
      Results: holds Book Cards

    Book Cards:
      Title
      Author
      Synopsis
      Book Cover
      2 buttons
        View: takes user to book page on GB
        Save: saves book info to mongoDB


  




