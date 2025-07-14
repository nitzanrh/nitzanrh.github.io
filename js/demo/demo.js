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
        title: 'C#- Solo Drum Cover',
        href: 'https://www.youtube.com/watch?v=hMF26XHWXrg',
        type: 'text/html',
        youtube: 'hMF26XHWXrg',
        poster: 'https://img.youtube.com/vi/hMF26XHWXrg/maxresdefault.jpg'
    },{
        title: 'Live w/ Orpheus Blade @ Gararin, Tel Aviv',
        href: 'https://www.youtube.com/watch?v=Aif1zXGy2vU',
        type: 'text/html',
        youtube: 'Aif1zXGy2vU',
        poster: 'https://img.youtube.com/vi/Aif1zXGy2vU/maxresdefault.jpg'
    },
      {
        title: 'Odd Elegy Drum Cover',
        href: 'https://www.youtube.com/watch?v=RIxVQo27Fy4',
        type: 'text/html',
        youtube: 'RIxVQo27Fy4',
        poster: 'https://img.youtube.com/vi/RIxVQo27Fy4/maxresdefault.jpg'
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
