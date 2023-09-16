<template>
  <div class="notes">
    <AddEditNote placeholder="Add a new note" v-model="newNote" ref="addEditNoteRef">
      <template #buttons>
        <button :disabled="!newNote" @click="addNote" class="button is-link has-background-success">
          Add New Note
        </button>
      </template>
    </AddEditNote>
    <!--
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            ref="newNoteRef" 
            v-model="newNote"
            class="textarea"
            placeholder="Add a new note"
          ></textarea>
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">

        </div>
      </div>
    </div>
    -->
    <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes'
import Note from '@/components/Notes/Note.vue'
import AddEditNote from '@/components/Notes/AddEditNote.vue'
import { useWatchCharacters } from '@/use/useWatchCharacters'

const storeNotes = useStoreNotes()

const newNote = ref('')
const addEditNoteRef = ref(null)

const addNote = () => {
  storeNotes.addNote(newNote.value)
  newNote.value = ''
  addEditNoteRef.value.focusTextarea()
}

useWatchCharacters(newNote)
</script>
