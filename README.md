# Axemule

[![Greenkeeper badge](https://badges.greenkeeper.io/Qard/axemule.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/Qard/axemule.png)](https://travis-ci.org/Qard/axemule)

![axemule](http://i.imgur.com/mayLOo9.png)

Axemule is a simple Javascript DSL for writing XML or HTML structures.

## Install

    npm install axemule

## Usage
    
    // Create a document
    var doc = axemule.xml()

    // Create an rss feed
    doc.add('rss', { version: '2.0' }, function () {
      this.add('channel', function () {
        this.add('title', 'Axemule rocks!')

        // Add a post item
        this.add('item', function () {
          this.add('title', 'Axemule released!')
          this.add('description', 'Pretty neat, eh?')
          this.add('link', 'http://github.com/qard/axemule')
          this.add('guid', uuid())
          this.add('pubDate', (new Date).toString())
        })
      })
    })

    // Serialize to string
    doc.serialize()

## API

### axemule.xml([initial_content]) returns document
Constructs and returns xml document. By default, the initial content will be '<?xml version="1.0" encoding="UTF-8"?>'.

### document.add(type, [attrs], [content])
Add a named element of the supplied type to the document, serializing arguments when present. Content can be a string or function. Functions are used to encapsulate further element additions.

### document.serialize()
Serialize the data to an xml-formatted string.

### axemule.html([initial_content]) return document
This is a wrapper around axemule.xml() to change the default initial content to '<!DOCTYPE html>' and to add convenient aliases for standard html5 element types.

### document.$type([attrs], [content])
With axemule.html(), you get several aliases wrapping document.add() to make creating of standard html5 elements simpler. Available types are; a, abbr, acronym, address, applet, area, article, aside, audio, b, base, basefont, bdi, bdo, big, blockquote, body, br, button, canvas, caption, center, cite, code, col, colgroup, command, datalist, dd, del, details, dfn, dir, div, dl, dt, em, embed, fieldset, figcaption, figure, font, footer, form, frame, frameset, h1, h2, h3, h4, h5, h6, head, header, hgroup, hr, html, i, iframe, img, input, ins, keygen, kbd, label, legend, li, link, map, mark, menu, meta, meter, nav, noframes, noscript, object, ol, optgroup, option, output, p, param, pre, progress, q, rp, rt, ruby, s, samp, script, section, select, small, source, span, strike, strong, style, sub, summary, sup, table, tbody, td, textarea, tfoot, th, thead, time, title, tr, track, tt, u, ul, var, video, wbr

---

### Copyright (c) 2013 Stephen Belanger
#### Licensed under MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.