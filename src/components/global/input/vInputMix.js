import Form from '@/utility/Form'

export default {

  props: {

    form: {
      type: Object,
      required: true,
      validator: form => {
        return form instanceof Form
      }
    },

    label: {
      type: String,
      required: true
    },

    name: {
      type: String,
      required: true
    },

    type: {
      type: String,
      default: () => ('text')
    }

  },

  computed: {

    errors () {
      return this.hasError ? this.form.errors.get(this.name) : undefined
    },

    error () {
      return Array.isArray(this.errors) ? this.errors.shift() : this.errors
    },

    hasError () {
      return this.form.errors.has(this.name)
    }

  },

  methods: {

    clear () {
      this.form.errors.clear(this.name)
    }

  }

}
