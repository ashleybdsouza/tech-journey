---
title: Basic HTML Explanation
description: This post explains basics of HTML.
date: 2024-10-18
tags: HTML
---

<p>The HTML document type declaration, also known as DOCTYPE, is the first line of code required in every HTML or XHTML document. The DOCTYPE declaration is an instruction to the web browser about what version of HTML the page is written in. This ensures that the web page is parsed the same way by different web browsers.</p>
        <ul>
          <li> HTML 5 - In HTML 5, the declaration of Doctype is simple, we only use &lt;!DOCTYPE html&gt;
          </li>
          <li> HTML 4.01 - Additionally, doctypes for HTML 4.01 required the declaration of either strict, transitional, or frameset DTD, each with a different use case as outlined below.
          <ul>
            <li> Strict DTD: Used for web pages that exclude attributes and elements that W3C expects to phase out as CSS support grows 
              <code>&lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt;</code>
            </li>
            <li> Transitional DTD: Used for web pages that include attributes and elements that W3C expects to phase out as CSS support grows
              <code>&lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/loose.dtd"&gt;</code>
            </li>
            <li> Frameset DTD: Used for web pages with frames
              <code>&lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/frameset.dtd"&gt;</code>
            </li>
          </ul>
