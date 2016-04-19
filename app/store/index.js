import { EventEmitter } from 'events'

const store = new EventEmitter()

let categories = {
    "Development" : "blue",
    "Design" : "purple",
    "Uncategorized": "white"
}

let bookmarks = {
    "-KE-NI-AQIM8L3ZC8_Ek" : {
      "category" : "Development",
      "title" : "Real-Time Analytics Dashboard",
      "url" : "http://coligo.io/real-time-analytics-with-nodejs-socketio-vuejs/"
    },
    "-KE-Od9opi-E7KvvG-LG" : {
      "category" : "Development",
      "title" : "Building Large-Scale Apps - VueJs",
      "url" : "http://vuejs.org/guide/application.html"
    },
    "-KE-OzR79eW51MP6B-B_" : {
      "category" : "Development",
      "title" : "Firebase Web Quickstart",
      "url" : "https://www.firebase.com/docs/web/quickstart.html"
    },
    "-KE-P94aT_jmOfUJWEJX" : {
      "category" : "Development",
      "title" : "Get started with Electron",
      "url" : "http://electron.atom.io/"
    }
}

store.getCategories = () => {
    return categories
}

store.getBookmarks  = () => {
    return bookmarks
}

store.addCategory = (category) => {
    categories.push(category)
}

store.deleteCategory = (catName) => {
    for (var key in bookmarks) {
        if (bookmarks[key].category === catName) {
            bookmarks[key].category = 'Uncategorized';
        }
    }
}

store.addBookmark = (bookmark) => {
    bookmarks.push(bookmark)
}

store.deleteBookmark = (id) => {
    for (var key in bookmarks) {
        if (key === id) {
            bookmarks.splice(bookmarks.indexOf(id), 1);
            break;
        }
    }
}

export default store
