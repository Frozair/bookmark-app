<template>
    <div>
        <div v-for="(name, color) in categories" class="item clickable">
                    <div class="content">
                      <a class="ui {{ color }} empty circular label"></a>
                      <span @click="categorySelected(name)"
                        :class="{selected: selectedCategory === name}">
                        {{ name }}
                      </span>
                      <i v-if="name !== 'Uncategorized'" class="remove icon right-float"
                        @click="deleteCategory(name)">
                      </i>
                    </div>
                  </div>    </div>
</template>

<script>
    import store from '../store'
    import CategoryModal from './CategoryModal.vue'
    import BookmarkModal from './BookmarkModal.vue'

    export default {
        data() {
            return {
                selectedCategory: ''
            }
        },

        components: {
            CategoryModal,
            BookmarkModal
        },

        props: ['categories'],

        methods:
        {
            addBookmark () {
                this.$broadcast('add-bookmark')
            },
            addCategory () {
                this.$broadcast('add-category')
            },
            deleteCategory (category) {
                store.deleteCategory(category)
            },
            categorySelected (category) {
                this.selectedCategory = category
                this.$dispatch('category-selected', category)
            }
        }
    };
</script>
