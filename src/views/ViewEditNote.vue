<template>
  <div class="edit-notes">
    <AddEditNote
      v-model="noteContent"
      ref="addEditNoteRef"
      bgColor="link"
      placeholder="Edit note"
      label="Edit Note"
    >
      <template #buttons>
        <button @click="$router.back()" class="button is-link is-light mr-2">Cancel</button>
        <button
          @click="handleSaveClicked"
          class="button is-link has-background-link"
          :disabled="!noteContent"
        >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<!--
  To be able to provide cancel button, we can also

  @click="$router.push(/)"

  or when we have complex app then we use

  @click="$router.back()"

  or button to RouterLink to="/" will also work.
-->

<script setup>
import AddEditNote from '@/components/Notes/AddEditNote.vue'
import { useStoreNotes } from '@/stores/storeNotes'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const storeNotes = useStoreNotes()

const route = useRoute()
const router = useRouter()

const noteContent = ref('')

noteContent.value = storeNotes.getNoteContent(route.params.id)

const handleSaveClicked = () => {
  storeNotes.updateNote(route.params.id, noteContent.value)
  router.push(
    '/'
  ) /* it's basically coming from router const, and this is the way it handled it vue 3*/
}
</script>
