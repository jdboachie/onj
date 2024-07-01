import React from 'react'

function One() {
  return (
    <>
    <div className='fixed top-0 left-0 w-screen overflow-hidden h-[10%] dark:h-[9%] bg-gradient-to-b from-white/90 via-white/70 to-transparent dark:from-neutral-900/90 dark:via-neutral-900/70 dark:to-transparent backdrop-blur-sm backdrop-opacity-35' />
    <section className='typography py-10 h-fit'>
      <h1>Understanding CSS: A Guide for Beginners</h1>

      <p>
        CSS, or Cascading Style Sheets, is a language used to describe the presentation of a document written in HTML or XML. CSS handles the look and feel of the web page. Using CSS, you can control the color of the text, the style of fonts, spacing between paragraphs, how columns are sized and laid out, what background images or colors are used, layout designs, variations in display for different devices and screen sizes as well as a variety of other effects.
      </p>

      <h2>Why Use CSS?</h2>
      <p>
        CSS is a powerful tool for web designers and developers for several reasons:
      </p>
      <ul>
        <li>
          <strong>Separation of Content and Design:</strong> By separating the content of HTML from the design and layout in CSS, we make our content more accessible, easier to maintain, and more flexible.
        </li>
        <li>
          <strong>Reusability:</strong> CSS allows us to reuse styles across multiple pages, making our design more consistent and our code more efficient.
        </li>
        <li>
          <strong>Responsive Design:</strong> With CSS, we can create layouts that adjust to different screen sizes, providing a better user experience on mobile devices, tablets, and desktops.
        </li>
      </ul>

      <h2>Basic Syntax of CSS</h2>
      <p>
        CSS is composed of style rules that the browser applies to the HTML document. Each rule consists of a selector and a declaration block.
      </p>
      <pre>
        <code>
          selector &#123; property: value; &#125;
        </code>
      </pre>
      <p>
        For example, to change the color of all paragraphs to blue, you would write:
      </p>
      <pre>
        <code>
          p &#123; color: blue; &#125;
        </code>
      </pre>

      <h2>Selectors</h2>
      <p>
        Selectors are used to target the HTML elements that you want to style. There are several types of selectors:
      </p>
      <ul>
        <li><strong>Element Selector:</strong> Targets all elements of a given type. (e.g., <code>p</code> targets all paragraph elements)</li>
        <li><strong>Class Selector:</strong> Targets elements with a specific class attribute. (e.g., <code>.classname</code>)</li>
        <li><strong>ID Selector:</strong> Targets a single element with a specific id attribute. (e.g., <code>#idname</code>)</li>
        <li><strong>Attribute Selector:</strong> Targets elements based on their attributes. (e.g., <code>[type=&quot;text&quot;]</code>)</li>
        <li><strong>Pseudo-class Selector:</strong> Targets elements based on their state. (e.g., <code>a:hover</code> for links when they are hovered over)</li>
      </ul>

      <h2>Box Model</h2>
      <p>
        Understanding the CSS box model is essential for designing layouts. The box model describes the rectangular boxes generated for elements in the document tree and includes the content, padding, border, and margin areas.
      </p>
      <ul>
        <li><strong>Content:</strong> The actual content of the box, where text and images appear.</li>
        <li><strong>Padding:</strong> The space between the content and the border. Padding is transparent.</li>
        <li><strong>Border:</strong> A border surrounding the padding (if any) and content.</li>
        <li><strong>Margin:</strong> The space outside the border. Margins are also transparent.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        CSS is a fundamental technology for creating visually appealing and responsive websites. By mastering CSS, you can significantly enhance the user experience and create web pages that are both beautiful and functional. Start experimenting with different styles, layouts, and designs to see the endless possibilities that CSS offers.
      </p>

      <p>Happy styling!</p>
    </section>
    </>
  )
}

export default One