function resize() {
    var designsWidth = 750;
    var designsFont = 200;
    var currentWidth = document.documentElement.offsetWidth;
    document.documentElement.style.fontSize = designsFont / (designsWidth / currentWidth) + 'px'
}
resize()
window.addEventListener('resize', resize)