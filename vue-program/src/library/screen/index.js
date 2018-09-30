export const mixinsScreen = {
  methods: {
    fullScreenHandle (e) {
      let elem = document.documentElement
      let isFullScreen = this.fullScreen.isFullScreen
      if (!isFullScreen) {
        if (elem.requestFullscreen) {
          elem.requestFullscreen()
        } else if (elem.webkitRequestFullScreen) {
          elem.webkitRequestFullScreen()
        } else if (elem.mozRequestFullScreen) {
          elem.mozRequestFullScreen()
        } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen()
        }
        this.fullScreen.isFullScreen = !this.fullScreen.isFullScreen
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
        this.fullScreen.isFullScreen = !this.fullScreen.isFullScreen
      }
    }
  }
}
