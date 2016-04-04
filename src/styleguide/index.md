


# Colors

<p class="lead">Edinburgh College base colours</p>

---
<!--colours at 100%-->
<div class="row up-1 medium-up-3 large-up-5">
  <div class="column">
    <div class="color-block">
      <span style="background: #db414b"></span>
      #db414b
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #9d82b7"></span>
      #9d82b7
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #d3741c"></span>
      #d3741c
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #8a8a8a"></span>
      #8a8a8a
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #0a0a0a"></span>
      #0a0a0a
    </div>
  </div>
</div>




# Typography

<p class="lead">This design uses Jubilat for headings and  Open-Sans for paragraph text.</p>

---

## Headings

Headings are used to denote different sections of content, usually consisting of related paragraphs and other HTML elements. They range from h1 to h6 and should be styled in a clear hierarchy (i.e., largest to smallest)

---

## Paragraphs

Paragraphs are groups of sentences, each with a lead (first sentence) and transition (last sentence). They are block level elements, meaning they stack vertically when repeated. Use them as such.

---

<h1>Heading Level 1</h1>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h2>Heading Level 2</h2>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h3>Heading Level 3</h3>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h4>Heading Level 4</h4>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h5>Heading Level 5</h5>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h6>Heading Level 6</h6>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.



# Buttons

<p class="lead">Buttons are tied to an action of some kind, whether that button is on a cheese dispenser or launches the rocket that you're strapped to. On the web, we follow similar conventions.</p>

---

## Primary Buttons

These buttons are primary calls to action and should be used sparingly. Their size can be adjusted with the `.tiny`, `.small`, and `.large` classes.

```html_example
<a href="#" class="primary large button ink">Large button</a>
<a href="#" class="primary button ink">Regular button</a>
<a href="#" class="primary small button ink">Small button</a>
<a href="#" class="primary tiny button ink">Tiny button</a>
```

---

## Secondary Buttons

These buttons are used for less important, secondary actions on a page.

```html_example
<a href="#" class="secondary large button ink">Large button</a>
<a href="#" class="secondary button ink">Regular button</a>
<a href="#" class="secondary small button ink">Small button</a>
<a href="#" class="secondary tiny button ink">Tiny button</a>
```



# Forms

<p class="lead">Use forms to allow users to interact with the site and provide information to the company.</p>

---

## Elements of a Form

A form should be marked up using its default HTML properties. The ones we make use of include (in hierarchical order):

- Form
- Label
- Input
- Select
- Text area
- Button

---

## How to Use

Make forms great and easy to use with the following rules:

- Wrap checkboxes and radio buttons within labels for larger hit areas, and be sure to set the for, name, and id attributes for all applicable elements.
- Series of checkboxes and radio buttons below within a `<ul class="inline-list">`.
- Before selecting any set of fields to use for a required input, explore other options (e.g., radio buttons over select lists).

---


## Form Layouts

Form elements in Foundation are styled based on their type attribute rather than a class. Inputs in Foundation have another major advantage — they are full width by default. That means that inputs will run as wide as the column that contains them. However, you have two options which make these forms extremely versatile:

- You can size inputs using column sizes, like `.medium-6`, `.small-6`.
- You can create row elements inside your form and use columns for the form, including inputs, labels and more. Rows inside a form inherit some special padding to even up input spacing.

---

## Form Example

```html_example
<form>
  <div class="row">
    <div class="large-12 columns">
      <label>Label</label>
      <input type="text" placeholder="placeholder">
    </div>
  </div>
  <div class="row">
    <div class="large-6 columns">
      <label>Label</label>
      <input type="text" placeholder="placeholder">
    </div>
    <div class="large-6 columns">
      <div class="row collapse">
        <label>Label</label>
        <div class="input-group">
          <input class="input-group-field" type="text" placeholder="placeholder">
          <span class="input-group-label">.com</span>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="large-12 columns">
      <label>Select Box</label>
      <select>
        <option value="good">Good</option>
        <option value="better">Better</option>
        <option value="best">Best</option>
      </select>
    </div>
  </div>
  <div class="row">
    <div class="large-6 columns">
      <label>Choose Your Favorite</label>
      <input type="radio" name="radio1" value="radio1" id="radio1"><label for="radio1">Red</label>
      <input type="radio" name="radio2" value="radio2" id="radio2"><label for="radio2">Blue</label>
    </div>
    <div class="large-6 columns">
      <label>Check these out</label>
      <input id="checkbox1" type="checkbox"><label for="checkbox1">Checkbox 1</label>
      <input id="checkbox2" type="checkbox"><label for="checkbox2">Checkbox 2</label>
    </div>
  </div>
  <div class="row">
    <div class="large-12 columns">
      <label>Textarea Label</label>
      <textarea placeholder="placeholder"></textarea>
    </div>
  </div>
</form>
```
