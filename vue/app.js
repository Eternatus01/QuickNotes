const App = {
    data() {
        return {
            placeholderString: 'Введите название заметки',
            title: 'Список заметок',
            inputValue: '',
            notes: [],
        }
    },
    methods: {
        addNewNote() {
            if (this.inputValue.trim() !== '') {
                this.notes.push(this.inputValue.trim());
                this.inputValue = '';
            }
        },
        removeNote(index) {
            this.notes = this.notes.filter((_, i) => i !== index);
        },
    },
}

Vue.createApp(App).mount('#app')

