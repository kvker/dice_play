<script>
export default {
  onLaunch: function() {
    // console.log('App Launch')
  },
  onShow: function() {
    // console.log('App Show')
  },
  onHide: function() {
    // console.log('App Hide')
  }
}
</script>

<style>
page,
view,
input {
  box-sizing: border-box;
}
page,
.container {
  widows: 100%;
  height: 100%;
}
image {
  vertical-align: top;
}
.container {
  display: flex;
  flex-direction: column;
}
page {
  background: #d3ffd0;
}
.container {
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
.clear-all {
  padding: 0;
  margin: 0;
  border: 0;
  background: transparent;
  outline: none;
}
.clear-all:after {
  border: none;
}
</style>
