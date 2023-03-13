<script>
  import { getContext } from "svelte"

  export let text

  const { styleable } = getContext("sdk")
  const component = getContext("component")
</script>

<div use:styleable={$component.styles}>
  This is a custom component. The text setting is: {text}.
</div>
