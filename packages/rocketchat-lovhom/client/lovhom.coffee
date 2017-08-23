import {Vue} from 'meteor/akryum:vue'
# import Widget from 'client/widget.vue';

Template.lovhom.rendered = ->
  vm = new Vue
    el: '#lovhomApp'
    template: '<div><widget></widget></div>'
    # components:
    #   Widget
