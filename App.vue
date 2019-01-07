<script>
	export default {
		onLaunch: function () {
			// console.log('App Launch')
		},
		onShow: function () {
			// console.log('App Show')
		},
		onHide: function () {
			// console.log('App Hide')
		}
	}
</script>

<style>
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
page {
	height: 100%;
	background: #d3ffd0;
}
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
</style>
