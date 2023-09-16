<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ chacterLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink :to="`editNote/${note.id}`" href="#" class="card-footer-item">Edit</RouterLink>
      <a href="#" class="card-footer-item" @click.prevent="modals.deleteNote = true"
        >Delete</a
      >
    </footer>
    <ModalDeleteNote :noteId="note.id" v-model="modals.deleteNote" v-if="modals.deleteNote"/>
  </div>
</template>

<script setup>
import { computed,reactive } from 'vue'
import ModalDeleteNote from '@/components/Notes/ModelDeleteNote.vue'
import { useStoreNotes } from '@/stores/storeNotes'

const props = defineProps({
  note: {
    type: Object,
    required: true
  }
})

const storeNotes = useStoreNotes()

const chacterLength = computed(() => {
  let length = props.note.content.length
  let description = length > 1 ? 'chacters' : 'character'
  return `${length} ${description}`
})

const modals = reactive({
  deleteNote: false
})
</script>
