<template>
<ul class="team-list list-group mt-4">
	<li class="list-group-item justify-content-between" v-for="(team, index) in teams">
		<router-link :to="{ path: '/team/' + team.team_id }">
		<span class="badge badge-default badge-pill pull-left">{{ index+1 }}</span> 
			{{team.name}} 
		<div class="stats float-right">
			<ul class="stat-list list-inline">
				<li class="list-inline-item win">
					<i class="fa fa-trophy"></i> Wins: {{team.wins}}
				</li>
				<li class="list-inline-item loss">
					<i class="fa fa-crosshairs"></i> Losses: {{team.losses}}
				</li>
			</ul>
			 <span></span>
			<span>
			</span>
		</div>
		</router-link>

	</li>
</ul>
</template>

<script>
export default {
  name: 'team-list',
  data () {
    return {
      teams: []
    }
  },
  mounted() {
 		// GET /teams
		this.$http.get('https://api.opendota.com/api/teams').then(response => {
			this.teams = response.data.slice(0,50);
		});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.stats {
		font-size: .8em;
		color: rgba(0,0,0,.7);
		position: absolute;
		top: 14px;
		right: 10px;

	}
	a {
		color: #222;
	}
	a:hover {
		text-decoration: none;
	}
	.stat-list .fa {
		margin-right: 5px;
	}

	.stat-list .win {
		color: green;
	}
	.stat-list .loss {
		color: violet;
	}
	.stat-list li {
		margin-right: 10px;
	}
	.badge {
		margin-right: 10px;
	}
</style>
