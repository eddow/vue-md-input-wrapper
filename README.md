# vue-md-input-wrapper
Generic material wrapper for any input in Vue

Display an input the material way and animate the label when the input is empty and focused or blured.

Inspired (with c/c) by a [scotch tutorial](https://scotch.io/tutorials/google-material-design-input-boxes-in-css3)

## Usage

Use it with your own inputs that you configure.

```html
<md-input-wrapper :label="MyInput" :required="required" :error="errorText">
	<input type="text" required />
</md-input-wrapper>
```

# Importance of HTML validation

Everything is done by CSS, so the class input:valid is the key point of the animations
The HTML validation should therefore specify "invalid" when empty - so the "required" option of the input has to be set regardless of if the field is requiresd in the application or not; and any other validation mechanisms are to be set off : the validation is managed upstream from this control.

So, the HTML has to invalidate an empty string and validate all the remaining (the case of &lt;input type=number&gt; is surprising as 3.1415 is considered invalid for the dot)

After, when validation is done upstream, setting the "error" property to a truish string displays the string and changes some colors

The "required" property allows to display an " * " in color too but doesn't influence the validation mechanism beside.

# Examples

```html
<md-input-wrapper :label="Address">
	<vue-google-autocomplete
			id="map"
			classname="form-control"
			placeholder="Start typing"
			v-on:placechanged="getFromData"
	>
	</vue-google-autocomplete>
</md-input-wrapper>
```


```html
<md-input-wrapper :label="Address">
	<cleave placeholder="Enter your credit card number" :options="{ creditCard: true }"></cleave>
</md-input-wrapper>
```