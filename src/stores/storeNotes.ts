import { defineStore } from 'pinia'

/* When you define id as anything except string, error is content is undefined. Why? */

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [
        {
          id: '1',
          content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, veniam.'
        },
        {
          id: '2',
          content: 'Lorem ipsum dolor sit amet.'
        }
      ]
    }
  },
  actions: {
    addNote(newNoteContent) {
      let currentDate = new Date().getTime().toString()
      let note = {
        id: currentDate,
        content: newNoteContent
      }
      this.notes.unshift(note)
    },
    deleteNote(idToDelete) {
      this.notes = this.notes.filter((note) => note.id !== idToDelete)
    },
    updateNote(id, content) {
      let index = this.notes.findIndex((note) => note.id === id)
      this.notes[index].content = content
    }
  },
  getters: {
    getNoteContent: (state) => (id) => state.notes.filter((note) => note.id === id)[0].content,
    totalNotesCount: (state) => {
      return state.notes.length
    },
    totalCharactersCount: (state) => {
      let count = 0
      state.notes.forEach((note) => {
        count += note.content.length
      })
      return count
    }
  } /* okay, this was much. I was testing */
})
