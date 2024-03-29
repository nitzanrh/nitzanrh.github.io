/*
 * blueimp Gallery Demo JS
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global blueimp, $ */

$(function () {
  'use strict'


  // Initialize the Gallery as video carousel:
  blueimp.Gallery([
        {
        title: 'Live w/ Orpheus Blade @ Gararin, Tel Aviv',
        href: 'https://www.youtube.com/watch?v=Aif1zXGy2vU',
        type: 'text/html',
        youtube: 'Aif1zXGy2vU',
        poster: 'https://img.youtube.com/vi/Aif1zXGy2vU/maxresdefault.jpg'
    },
      {
        title: 'Live w/ Paul Pedana @ 93 Feet East, London',
        href: 'https://www.youtube.com/watch?v=x6hPCa7x14U',
        type: 'text/html',
        youtube: 'x6hPCa7x14U',
        poster: 'https://img.youtube.com/vi/x6hPCa7x14U/maxresdefault.jpg'
    },

    {
        title: 'Nitin Sawhney - The Conference (Drum Cover)',
        href: 'https://www.youtube.com/watch?v=nJWk5YcZUHI',
        type: 'text/html',
        youtube: 'nJWk5YcZUHI',
        poster: 'https://img.youtube.com/vi/nJWk5YcZUHI/maxresdefault.jpg'
    },

      ],

   {
    container: '#blueimp-video-carousel',
    carousel: true
  })
})
