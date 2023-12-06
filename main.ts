function buildName (first: string, last: string) {
    return "" + first + " " + last
}
let fullName = buildName("Nick", "Whitworth")
game.splash(fullName)
