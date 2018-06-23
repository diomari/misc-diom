<template>
	<section>
	  <h1>Team {{team_id}} </h1>
	</section>
</template>

<script>
export default {
	props: ['team'],
	name: 'team-detail',
	data () {
		return {
			team: null,
		  	team_id: null
		}
	},
  mounted() {
  	this.team_id = this.$route.params.id
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
