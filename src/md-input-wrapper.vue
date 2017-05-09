<template>
	<div class="md-input-wrapper" :class="{'md-input-required': required, 'md-input-invalid': error, 'md-fixed-label': !floatingLabel}">
		<slot>
			<input type="text" required />
		</slot>
		<span class="bar"></span>
		<label>{{label}}</label>
		<span class="md-error" v-if="error">{{error}}</span>
	</div>
</template>
<script lang="ts">
import Vue = require('vue')
import {Component, Inject, Model, Prop, Watch} from 'vue-property-decorator'

@Component
export default class InputWrapper extends Vue {
	@Prop() label: string
	@Prop() required: boolean
	@Prop() error: string
	floatingLabel = true

	updated() { this.readRequire(); }
	mounted() { this.readRequire(); }
	readRequire() {
		var def: any = this.$slots && this.$slots.default,
			input = def && def[0];
		this.floatingLabel = input.elm.getAttribute('required');
	}
}
</script>
<style lang="sass">
$error-color: #c33;
/* form starting stylings ------------------------------- */
.md-input-wrapper {
  position:relative;
	min-height: 48px;
	margin: 4px 0 24px;
	padding-top: 16px;
	input {
		font-size: 18px;
		height: 32px;
		display: block;
		border: none;
		border-bottom: 1px solid #ccc;
	}
	input:focus {
		outline:none;
	}

	/* LABEL ======================================= */
	input ~ label {
		top: 23px;
		color: #999; 
		font-size: 18px;
	}
	label {
		font-weight:normal;
		position:absolute;
		pointer-events:none;
		left:5px;
		transition:0.2s ease all; 
		-moz-transition:0.2s ease all; 
		-webkit-transition:0.2s ease all;
	}

  &.md-input-invalid {
    .md-error {
      opacity: 1;
      transform: translate3d(0, 0, 0);
			color: $error-color;
    }
  }

  &.md-input-required {
		input:invalid ~ label:after {
			color: $error-color;
		}
    label:after {
			color: #5264AE;
      top: 2px;
      font-size: 12px;
      position: absolute;
      right: 0;
      transform: translateX(calc(100% + 2px));
      content: "*";
      line-height: 1em;
      vertical-align: top;
    }
  }
	/* active state */
	input:focus ~ label, input:valid ~ label, &.md-fixed-label input ~ label {
		top: 0;
		font-size:14px;
		color:#5264AE;
	}

	/* BOTTOM BARS ================================= */
	.bar {
		position: relative;
		display: block;
		width: 100%;
	}
	&.md-input-invalid {
		.bar:before, .bar:after {
			background: $error-color;
		}
	}
	.bar:before, .bar:after {
		content:'';
		height:2px; 
		width:0;
		bottom:0; 
		position:absolute;
		background:#5264AE;
		transition:0.2s ease all; 
		-moz-transition:0.2s ease all; 
		-webkit-transition:0.2s ease all;
	}
	.bar:before {
		left:50%;
	}
	.bar:after {
		right:50%; 
	}

	/* active state */
	input:focus ~ .bar:before, input:focus ~ .bar:after {
		width:50%;
	}
}
</style>