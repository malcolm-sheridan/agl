<template>
    <div v-show="displayLoadingMessage">
        <b-spinner type="grow" label="Spinning">            
        </b-spinner>
        <h2>Loading...</h2>
    </div>
</template>

<script>
export default {
    props: {
        displayLoadingMessage: Boolean
    }
}
</script>
