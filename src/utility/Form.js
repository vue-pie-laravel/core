import { get } from 'lodash'

class Form {
  constructor (vm, options) {
    if (vm == null) {
      console.warn('Form instance requires component instance as first parameter')
      return
    }

    this.options = {
      property: 'input',
      ...options
    }

    this.busy = false
    this.vm = vm

    this.errors = {
      data: {},
      message: '',

      get count () {
        return Object.keys(this.data).length
      },

      has (field) {
        return this.count > 0 && this.data.hasOwnProperty(field)
      },

      get (field) {
        if (typeof field !== 'string') {
          for (const name of field) {
            if (this.has(name)) {
              return this.data[name]
            }
          }

          return null
        }

        return this.has(field) ? this.data[field] : null
      },

      set (response) {
        if (response) {
          vm.$set(this, 'data', response.hasOwnProperty('data') && response.data.hasOwnProperty('errors') ? response.data.errors : {})
          vm.$set(this, 'message', response.hasOwnProperty('message') ? response.message : '')
        }
      },

      clear () {
        vm.$set(this, 'data', {})
        vm.$set(this, 'message', '')
      }
    }
  }

  /**
   * Laravel index resource helper
   * Fetch a list resources
   *
   * @param route
   * @param parameters
   * @returns {Promise<unknown>}
   */
  index (route, parameters) {
    return this.request('post', this.vm.route(`${route}.index`), {
      _method: 'GET',
      ...parameters
    })
  }

  /**
   * Laravel show resource helper
   * Fetch a single resource
   *
   * @param route
   * @param id
   * @returns {Promise<unknown>}
   */
  show (route, id) {
    return this.request('get', this.vm.route(`${route}.show`, [id]))
  }

  /**
   * Laravel edit resource helper
   * Fetch a single resource for editing
   *
   * @param route
   * @param id
   * @returns {Promise<unknown>}
   */
  edit (route, id) {
    this.reset()
    return new Promise((resolve, reject) => {
      this.vm.$http.get(this.vm.route(`${route}.edit`, [id])).then(response => {
        this.assign(response.data)
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }

  /**
   * Laravel update/create resource helper
   * Save a resource, auto update or create
   *
   * @param route
   * @returns {Promise<unknown>}
   */
  save (route) {
    if (this.exists) {
      return this.update(route, this.input.id)
    }

    return this.store(route)
  }

  /**
   * Laravel store resource helper
   * Create a new resource
   *
   * @param route
   * @returns {Promise<unknown>}
   */
  store (route) {
    return this.request('post', this.vm.route(`${route}.store`), this.input)
  }

  /**
   * Laravel update resource helper
   * Update an existing resource
   *
   * @param route
   * @param id
   * @returns {Promise<unknown>}
   */
  update (route, id) {
    return this.request('put', this.vm.route(`${route}.update`, [id]), this.input)
  }

  /**
   * Laravel destroy resource helper
   * Destroy a resource
   *
   * @param route
   * @param id
   * @returns {Promise<unknown>}
   */
  destroy (route, id) {
    return this.request('delete', this.vm.route(`${route}.destroy`, [id]))
  }

  /**
   * Generic form post handler
   *
   * @param route
   * @returns {Promise<unknown>}
   */
  post (route) {
    return this.request('post', this.vm.route(route), this.input)
  }

  /**
   * Build and handle a http promise request
   * Can be used for raw uri paths or custom protocol
   *
   * @param type get/post/put/patch/delete
   * @param path Raw URI path
   * @param parameters Body/JSON to send
   * @returns {Promise<unknown>}
   */
  request (type, path, parameters) {
    let self = this

    self.errors.clear()
    self.busy = true

    return new Promise((resolve, reject) => {
      self.vm.$http[type](path, parameters).then(response => {
        self.busy = false
        self.vm.$emit('success', response)
        resolve(response)
      }).catch(error => {
        self.errors.set(error.response)
        self.busy = false
        self.vm.$emit('error', error)
        reject(error)
      })
    })
  }

  promise (promise) {
    let self = this
    self.busy = true

    return new Promise((resolve, reject) => {
      promise(self.input).then(response => {
        self.busy = false
        self.vm.$emit('success', response)
        resolve(response)
      }).catch(error => {
        self.errors.set(error.response)
        self.busy = false
        self.vm.$emit('error', error)
        reject(error)
      })
    })
  }

  /**
   * Return true/false if last request was valid
   * @returns {boolean}
   */
  get valid () {
    return this.errors.count === 0
  }

  /**
   * Reset form data, clears fields and errors.
   */
  reset () {
    this.errors.clear()

    // Get the components original data
    let data = this.vm.$options.data()

    // Set value of $data attribute (default $data.input) back to pre mounted state.
    if (data != null && data.hasOwnProperty(this.options.property)) {
      Object.assign(this.vm[this.options.property], data[this.options.property])
    }
  }

  /**
   * Assign data to form input (default) or designated property name.
   * Accepts fields only the original input source has.
   *
   * @param data object|null Null resets the form.
   */
  assign (data) {
    this.reset()

    if (data == null) {
      return
    }

    if (this.vm.hasOwnProperty(this.options.property) === false) {
      console.warn(`Instance does not have an input property named "${this.options.property}"`)
      return
    }

    let props = this.vm[this.options.property]

    Object.keys(props).forEach(key => {
      if (data.hasOwnProperty(key)) {
        props[key] = data[key]
      }
    })
  }

  get input () {
    return this.vm[this.options.property] || {}
  }

  get exists () {
    return this.input.hasOwnProperty('id') && this.input.id != null
  }

  get label () {
    if (this.exists) {
      return {
        submit: get(this.options, 'label.submit', 'Update'),
        cancel: get(this.options, 'label.cancel', 'Cancel')
      }
    }

    return {
      submit: get(this.options, 'label.submit', 'Create'),
      cancel: get(this.options, 'label.cancel', 'Cancel')
    }
  }
}

export default Form
