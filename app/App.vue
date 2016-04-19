<template>
    <div id="app">
        <sidebar
            :categories="categories"
            v-on:category-selected="setSelectedCategory">
        </sidebar>

        <bookmark-list
            :bookmarks="bookmarks | filterByCategory selectedCategory"
            :categories="categories">
        </bookmark-list>
    </div>
</template>

<script>
    import store from './store'
    import Sidebar from './components/Sidebar.vue'
    import BookmarkList from './components/BookmarkList.vue'
    // import { filterByCategory } from './filters'

    export default {
        components: {
            Sidebar,
            BookmarkList
        },

        data() {
            return {
                categories: {},
                bookmarks: {},
                selectedCategory: ''
            }
        },

        filters: {
            // filterByCategory
        },

        created() {
            this.categories = store.getCategories();
            this.bookmarks = store.getBookmarks();
        },

        methods: {
            setSelectedCategory(category) {
                this.selectedCategory = category;
            }
        }
    };
</script>
