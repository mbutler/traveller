const RandomOrg = require('random-org')
const fs = require('fs')
const random = new RandomOrg({ apiKey: '' })
const Jimp = require('jimp')

//let trueRand = [3,4,5,5,4,1,5,5,4,5,5,5,5,6,2,3,6,4,2,2,2,6,6,2,2,5,6,5,6,5,6,2,5,4,6,3,5,6,2,6,3,2,5,5,2,5,2,2,4,5,3,1,5,4,5,6,2,5,6,6,4,2,5,6,2,6,1,1,2,5,1,6,4,5,3,4,4,3,6,3,5,6,4,5,3,5,3,5,4,5,6,6,5,1,4,5,2,6,4,5,6,4,1,5,1,1,3,6,5,6,6,6,2,2,2,4,1,2,4,6,6,1,6,2,3,2,6,6,3,1,5,2,6,6,1,3,6,5,4,1,4,6,2,3,4,1,5,5,5,1,2,2,6,6,4,2,5,3,3,2,2,2,3,5,2,3,5,1,2,1,3,5,4,5,6,1,1,3,6,5,3,5,3,4,5,6,2,3,2,5,2,4,3,1,4,3,2,3,4,6,4,3,4,6,6,5,6,4,4,1,6,1,6,4,5,3,4,6,4,4,6,1,2,2,2,6,1,5,2,1,4,6,2,3,3,3,1,5,6,3,1,2,5,4,6,3,4,2,5,6,2,2,3,4,3,2,5,3,5,5,3,1,2,5,5,2,5,5,2,2,1,3,3,1,1,1,4,3,1,4,5,6,4,1,6,5,6,5,6,3,6,3,1,4,4,4,6,1,1,5,4,3,2,5,5,1,5,2,5,5,1,5,3,6,5,2,4,3,1,5,6,3,6,4,2,6,5,1,1,4,5,2,2,3,6,4,2,5,3,2,2,1,1,1,3,6,3,3,5,2,4,1,4,6,6,1,1,4,6,3,1,3,3,1,4,2,6,5,2,2,4,3,2,6,4,3,2,6,4,1,2,4,3,2,3,3,6,5,6,6,3,2,5,4,1,4,5,3,4,1,3,6,3,2,2,1,3,4,6,1,3,4,1,6,3,5,3,1,1,3,5,1,4,1,3,6,2,5,1,6,2,6,6,5,1,1,1,4,6,5,5,6,2,4,5,1,5,1,5,5,6,3,3,6,4,2,1,1,5,6,6,4,5,5,3,5,4,3,3,6,6,3,5,2,6,4,5,2,6,1,6,5,3,5,2,2,1,3,4,5,5,3,1,2,4,3,3,4,2,2,1,5,3,3,1,2,4,5,2,5,5,4,6,3,2,6,3,4,3,1,1,2,3,3,5,3,4,6,4,1,2,6,1,1,4,1,2,6,3,4,5,6,5,3,5,4,3,4,4,3,3,5,4,6,4,4,3,2,2,1,6,1,1,2,6,6,6,1,3,3,1,5,2,3,2,5,2,6,2,6,2,4,2,3,6,6,3,5,3,4,3,1,6,1,4,4,6,1,1,5,6,3,6,5,5,2,6,4,3,1,3,6,1,1,5,5,2,1,3,6,2,6,1,1,2,6,2,4,3,2,4,1,3,3,4,6,3,6,4,4,2,3,5,1,5,2,5,3,4,3,6,1,1,6,6,3,5,5,3,2,6,2,2,5,6,4,4,4,5,1,1,6,1,4,3,2,6,6,5,2,5,2,3,1,6,1,1,6,3,6,5,3,1,6,6,4,6,3,3,3,6,4,3,5,4,2,6,4,4,5,5,2,4,3,2,2,6,6,5,5,2,5,2,1,3,2,5,3,2,5,6,6,2,2,5,3,2,3,6,6,6,1,1,5,5,6,1,3,1,1,5,4,3,1,1,4,3,1,3,4,3,5,2,5,6,3,2,1,2,2,4,6,2,3,2,1,6,5,2,6,3,1,1,6,2,1,4,2,1,1,6,5,2,6,3,5,2,5,3,6,5,3,4,2,4,2,1,2,5,5,2,5,6,2,4,5,3,6,2,4,5,1,3,4,1,1,6,4,4,1,1,2,4,5,6,4,4,2,1,4,4,4,5,5,3,4,3,4,4,5,6,4,5,1,3,3,5,3,2,2,3,5,3,5,4,3,3,3,6,2,5,5,6,1,4,1,2,5,3,3,5,5,3,1,1,5,3,4,3,4,4,5,2,2,5,5,2,3,5,3,4,5,2,2,1,6,3,2,1,3,2,4,5,3,2,6,3,5,3,6,6,1,1,4,5,6,6,1,5,2,6,5,5,5,6,5,1,5,6,6,3,4,5,2,5,2,6,1,6,2,1,1,4,2,6,4,5,3,4,4,6,1,4,3,5,1,6,1,5,3,3,2,6,5,3,2,1,6,6,5,5,1,1,6,5,4,2,2,4,5,2,5,2,1,3,6,2,4,1,4,3,2,4,5,6,2,2,3,1,3,6,2,5,3,1,6,2,3,1,4,6,3,5,5,6,1,4,2,6,5,3,1,1,2,6,1,6,1,2,1,5,2,3,6,6,5,3,1,1,5,2,5,4,5,6,6,4,6,4,3,4,1,5,4,6,6,4,5,6,3,6,2,5,1,6,1,6,1,2,1,5,6,6,6,1,1,6,6,1,6,1,2,1,2,1,4,4,2,6,3,6,6,4,6,4,1,5,5,1,6,4,4,5,5,4,5,2,3,6,5,3,3,6,1,4,5,4,2,5,3,3,2,2,6,1,3,1,4,1,3,3,2,5,3,2,6,4,5,3,4,2,3,5,1,4,6,3,4,2,3,3,1,3,6,3,1,4,1,3,5,6,6,4,4,4,5,6,5,3,1,5,2,4,3,4,5,6,1,5,5,3,2,5,5,6,5,5,3,4,6,3,4,1,1,3,5,4,6,6,2,6,3,2,5,1,1,6,2,6,2,4,4,4,5,1,3,3,5,4,4,1,3,4,1,5,6,1,6,1,4,4,5,1,6,3,2,5,3,4,3,3,6,5,4,1,2,1,4,5,2,5,6,2,3,2,3,2,6,1,2,4,5,3,6,5,3,5,3,3,3,6,2,4,6,2,1,3,4,3,3,2,2,3,6,5,6,5,6,3,6,4,1,6,3,2,5,6,6,4,4,1,2,4,6,3,1,2,4,6,5,2,1,6,3,6,3,3,5,6,3,6,1,4,6,5,3,3,2,1,1,2,5,6,3,3,5,2,6,4,6,2,1,5,4,1,1,6,6,3,3,2,3,6,3,3,3,1,4,5,4,5,3,4,2,3,1,1,1,2,4,1,3,5,4,4,6,2,3,2,3,6,1,1,4,5,3,1,4,3,4,2,1,6,3,1,4,6,5,5,1,4,4,4,5,5,2,2,1,1,4,3,1,6,1,6,1,1,1,4,1,2,4,3,5,1,5,1,2,5,1,5,2,5,5,5,5,3,5,5,6,2,6,4,6,5,6,5,2,4,5,3,4,1,5,2,1,4,4,2,2,1,6,3,5,2,4,1,6,5,3,4,3,3,3,5,5,6,1,3,1,1,6,3,4,1,3,6,4,5,1,4,1,5,5,6,1,2,2,3,3,3,1,3,6,1,3,1,5,4,4,5,3,4,4,4,6,4,1,4,4,2,6,2,6,2,3,5,3,6,5,3,5,4,5,2,2,6,4,1,4,6,1,6,4,4,3,2,4,6,2,5,6,2,6,3,4,5,6,1,3,3,1,3,1,2,4,3,3,6,2,6,5,2,6,4,1,4,5,5,1,5,3,5,4,4,2,6,1,2,4,3,3,4,5,5,3,6,5,2,4,4,1,1,6,2,2,1,4,3,3,3,4,1,4,1,6,3,5,1,3,4,5,1,1,6,1,3,6,5,1,2,6,1,3,6,2,5,5,6,2,1,3,2,3,2,3,5,4,5,1,6,2,6,3,2,4,4,6,1,6,4,5,4,6,5,4,2,3,4,4,1,2,1,1,1,1,6,3,3,5,2,6,3,2,4,3,6,6,5,2,1,6,6,5,1,5,6,2,6,3,5,4,6,5,6,6,1,3,2,2,4,4,3,1,2,2,4,4,5,4,6,4,6,1,2,5,1,6,5,5,2,6,4,6,2,6,3,1,2,6,4,2,4,1,2,2,5,2,4,3,4,4,6,3,1,4,5,1,5,4,4,3,3,1,1,6,2,5,2,3,5,1,2,6,3,5,3,5,4,3,2,3,4,2,2,1,3,5,2,4,6,4,2,5,3,1,6,3,6,1,3,5,1,6,1,6,2,2,6,2,4,1,3,2,6,6,2,2,1,3,3,6,6,3,2,1,6,4,4,1,2,5,6,1,5,3,3,4,3,5,4,5,5,5,6,6,3,4,4,5,5,4,5,4,6,3,4,4,4,4,1,5,5,6,5,2,5,2,4,1,4,6,4,5,1,6,4,4,2,5,6,2,6,6,2,1,5,3,6,6,5,4,1,5,2,2,2,6,4,2,5,1,2,5,4,2,1,4,5,3,1,4,6,3,3,6,6,4,2,6,3,5,4,2,6,6,3,3,2,2,6,2,3,4,3,3,1,6,6,5,1,4,6,2,4,5,4,4,1,6,4,3,1,6,1,6,5,1,4,2,3,6,6,2,4,4,2,6,3,2,2,1,2,5,5,2,3,2,5,1,4,6,3,6,6,5,5,2,2,1,2,3,2,2,3,4,3,4,5,2,5,1,3,2,2,3,1,3,5,1,6,3,6,1,1,2,5,4,4,5,5,5,3,5,2,1,6,6,6,6,3,4,2,4,4,5,4,1,5,4,2,1,4,6,1,3,4,3,3,2,4,6,6,1,6,4,4,5,5,3,1,5,2,6,2,1,5,6,5,2,1,1,3,6,1,3,1,2,4,4,3,4,3,4,4,3,5,5,3,5,5,1,2,4,3,4,1,6,5,5,3,2,4,5,3,2,1,1,1,2,4,5,4,3,1,3,3,4,2,4,2,2,4,4,1,6,2,6,3,3,2,1,3,1,2,2,5,1,2,5,4,4,6,1,6,2,2,5,4,1,3,3,5,4,3,6,3,2,5,4,2,2,6,6,5,5,3,5,2,6,2,5,2,3,2,4,5,6,5,5,3,1,5,4,2,1,2,2,5,3,1,3,3,2,6,2,3,4,2,1,6,2,3,5,2,5,3,2,4,5,3,6,4,3,2,6,4,5,6,3,5,2,1,5,6,4,3,3,2,6,5,5,2,6,2,4,1,4,3,1,4,3,4,4,1,1,5,1,6,1,6,2,5,5,1,1,2,4,4,3,5,4,6,3,4,6,5,4,5,3,2,1,6,1,5,6,4,4,4,6,1,2,6,1,2,1,3,5,2,3,4,3,5,5,3,6,3,1,4,2,5,4,1,2,2,5,2,2,5,5,1,6,3,6,4,1,6,3,2,6,6,4,6,2,4,2,2,2,5,3,1,5,3,6,6,3,2,3,4,2,1,6,2,4,1,1,1,6,5,1,6,3,2,6,1,6,1,5,6,3,3,2,6,5,5,1,4,3,5,4,6,1,5,2,1,2,5,6,2,2,1,3,4,2,3,3,1,5,2,1,1,5,2,4,3,5,6,4,1,4,6,6,5,6,4,4,2,5,5,4,3,5,6,2,1,3,5,3,2,4,1,1,5,3,6,4,4,1,1,3,6,4,1,4,3,6,3,2,6,1,2,5,4,3,5,6,5,3,1,1,2,2,1,5,2,1,1,6,3,5,6,2,2,4,2,2,6,6,3,5,2,6,6,1,4,2,1,4,2,2,1,6,3,2,3,4,3,3,1,1,6,5,1,1,2,1,1,2,4,3,1,1,6,2,6,1,1,6,6,3,1,2,4,2,1,6,5,2,2,6,5,4,1,1,5,2,5,6,5,4,6,5,2,5,3,6,1,2,3,4,5,1,6,5,3,4,1,6,5,2,2,6,6,4,5,5,5,2,5,6,5,2,4,5,3,6,4,1,3,1,3,6,3,5,2,2,3,6,2,3,3,5,1,3,3,3,1,3,4,5,4,4,4,1,2,1,3,3,1,1,5,1,5,4,5,5,1,1,1,1,6,3,5,3,3,5,6,5,5,3,4,3,5,3,3,1,2,6,1,1,1,6,1,1,4,1,2,4,2,3,1,6,6,4,2,2,6,4,1,4,1,3,3,3,2,2,2,5,1,6,4,3,1,5,1,4,6,2,1,4,6,6,6,1,4,6,4,5,5,2,4,3,1,1,3,4,4,6,2,1,4,5,2,6,5,1,4,4,4,3,3,2,1,4,5,4,5,1,6,2,1,5,3,3,6,1,2,1,2,4,1,5,2,3,4,4,6,3,6,1,3,1,5,1,5,2,5,3,2,5,1,3,5,5,5,2,5,1,2,5,6,3,1,3,3,1,1,5,4,1,5,2,6,6,6,2,2,2,2,1,2,6,1,2,4,5,5,5,1,1,4,5,6,1,1,2,4,4,5,6,5,1,5,5,2,5,4,5,4,1,2,6,1,5,5,4,5,1,6,5,1,2,4,3,4,2,1,3,5,1,6,4,4,3,4,5,5,2,1,4,1,2,1,4,2,1,2,1,3,5,2,4,1,2,4,5,3,5,5,5,3,4,1,5,5,1,1,2,4,3,6,2,4,3,3,3,1,3,4,2,5,1,3,5,4,6,3,5,6,4,4,5,1,1,5,1,1,5,5,5,4,2,6,6,3,2,1,6,3,3,3,3,1,3,3,3,5,2,3,2,3,6,5,1,3,4,1,3,6,5,2,4,2,6,1,3,6,4,6,4,1,1,1,1,3,3,5,1,5,1,1,5,1,1,4,1,5,5,5,2,6,3,5,4,6,6,3,4,6,4,6,2,1,2,4,2,1,3,2,3,3,6,3,5,3,1,6,5,1,5,5,6,4,4,6,4,4,3,3,2,1,2,5,3,2,6,5,6,5,6,4,4,6,2,6,3,4,4,1,5,4,5,6,3,1,5,6,4,1,4,1,4,1,2,1,3,1,6,1,3,6,3,5,1,4,1,2,5,5,5,3,1,3,2,5,2,3,2,2,2,6,4,6,1,4,1,1,3,2,5,1,5,6,5,6,1,3,4,6,3,4,2,1,2,1,1,5,3,3,2,1,2,6,3,3,2,3,3,2,3,6,3,2,2,6,3,5,2,6,5,1,6,1,3,5,6,3,2,3,6,4,6,2,4,3,5,4,1,5,5,1,1,2,5,5,1,2,5,1,6,1,3,1,2,2,5,1,5,3,4,4,1,3,5,2,6,6,4,2,2,6,6,6,1,3,5,6,3,3,1,3,4,1,5,1,2,5,1,2,6,5,1,4,2,4,5,4,5,4,4,1,3,3,2,1,3,4,4,6,5,6,5,3,3,6,6,1,3,1,5,1,2,1,6,2,4,5,2,4,1,6,6,5,6,5,4,6,1,2,6,3,5,3,4,3,4,3,6,1,4,5,3,3,1,3,3,6,5,4,6,2,2,5,4,6,4,2,2,5,1,3,3,2,1,3,2,1,3,2,5,2,4,5,6,3,1,4,1,5,4,2,4,6,2,2,1,2,2,1,5,2,5,5,2,3,6,3,5,3,4,6,3,6,3,2,6,5,4,5,6,1,6,5,2,5,3,6,1,2,5,6,6,2,5,4,2,1,1,4,2,6,5,5,6,2,5,1,5,6,1,2,5,5,5,1,3,6,2,1,6,5,6,6,5,4,6,4,2,3,6,6,5,3,6,3,6,6,3,1,4,1,4,3,1,6,4,3,1,1,5,2,4,6,1,5,3,4,6,6,4,5,1,4,1,6,5,1,4,5,4,6,4,6,2,6,2,4,4,5,1,6,6,6,2,4,4,1,3,2,1,4,4,1,3,2,5,1,3,5,4,1,6,3,6,1,1,1,3,5,6,5,4,1,5,2,4,2,1,4,2,3,6,2,2,1,6,4,3,5,4,6,2,2,3,6,1,4,1,5,4,3,3,3,6,2,2,1,3,4,5,5,4,6,1,2,2,2,5,5,2,5,1,1,1,6,1,5,6,6,3,5,3,6,3,3,6,1,6,1,3,3,4,4,4,6,1,6,4,5,3,5,3,4,3,5,1,3,6,3,4,4,4,2,2,3,1,4,1,5,3,2,4,1,5,4,5,4,4,6,5,2,2,1,3,4,5,6,1,5,5,1,3,4,5,2,6,4,2,6,4,6,4,3,4,3,4,2,6,4,4,1,4,4,4,2,6,2,1,1,6,3,1,6,4,6,2,1,1,5,6,1,1,1,2,4,1,6,2,5,6,4,6,6,5,5,5,4,5,6,6,5,2,6,4,6,4,1,1,4,3,5,4,3,1,6,2,5,5,5,6,6,3,5,4,4,4,3,1,3,1,6,5,5,5,5,2,3,2,4,3,6,6,4,6,3,1,6,5,6,2,4,5,5,1,6,2,5,5,2,1,4,6,1,2,2,5,3,1,1,5,1,4,4,4,3,4,2,1,5,3,6,4,1,4,1,4,1,3,5,3,2,1,3,5,6,5,4,1,6,6,2,5,2,6,2,5,1,2,3,6,1,3,6,2,3,5,6,1,4,6,6,5,5,3,2,5,2,6,2,6,5,5,5,2,2,4,5,4,6,1,4,5,1,3,6,3,3,3,4,5,2,2,6,6,6,2,3,2,3,3,3,5,5,3,4,1,3,4,2,1,4,2,1,2,3,1,2,1,3,5,3,5,5,4,4,5,1,1,5,6,6,6,3,4,6,5,4,6,1,6,6,3,1,5,3,2,6,3,3,5,5,1,6,5,1,5,2,3,6,4,2,2,3,1,5,6,5,6,2,2,6,1,1,1,3,2,4,6,1,4,5,2,4,2,2,4,2,2,4,5,2,5,2,4,2,3,3,1,1,3,1,3,2,1,3,3,6,4,2,6,1,6,3,6,3,5,3,5,5,6,1,2,4,1,2,4,3,1,5,3,4,3,3,2,5,2,5,4,4,2,3,1,6,4,6,4,3,3,3,2,3,4,2,3,5,5,3,6,6,4,5,3,2,3,4,4,6,6,5,3,5,5,3,2,2,3,6,6,6,5,6,1,4,1,2,6,6,6,5,1,5,4,4,3,3,3,4,2,3,5,3,1,4,5,3,5,3,1,1,5,1,5,1,3,6,3,6,3,6,2,5,1,5,4,6,5,3,4,5,2,3,2,1,5,5,2,6,3,2,6,4,6,2,2,5,4,4,6,3,6,3,4,1,5,5,1,1,3,2,6,1,2,5,4,2,3,1,3,6,1,6,1,1,5,3,1,6,1,2,2,5,6,4,4,4,4,1,4,1,2,3,5,3,4,6,6,4,5,1,4,6,5,4,5,6,3,2,5,6,6,6,2,2,1,2,3,3,5,6,2,1,5,3,5,5,4,3,6,2,5,1,4,5,4,5,2,6,3,1,6,2,1,4,1,1,6,3,1,5,3,5,6,1,4,5,3,6,2,2,6,4,4,1,1,1,6,2,2,5,6,2,4,6,1,6,5,6,6,6,6,1,5,5,3,6,5,2,2,4,1,1,2,6,4,4,3,2,1,3,4,6,6,6,2,1,2,2,4,4,4,1,3,4,5,1,5,2,6,1,6,1,4,5,4,4,3,6,1,4,4,2,2,5,3,2,1,4,6,5,5,3,6,2,3,1,3,1,3,2,2,2,5,4,5,2,6,6,6,1,4,6,2,4,5,3,5,3,3,3,5,4,2,3,5,4,3,5,3,5,6,6,4,1,6,6,6,4,3,1,6,5,3,3,1,1,1,5,6,4,4,3,3,1,3,1,6,1,1,5,5,4,1,1,6,5,4,4,6,5,3,5,5,5,2,1,2,5,5,5,6,6,5,5,4,6,6,3,4,3,1,4,2,5,1,6,2,5,3,5,5,1,2,2,2,3,2,6,1,6,5,3,5,5,5,4,5,4,6,2,3,5,6,4,3,6,6,1,6,3,2,4,1,1,1,6,1,6,1,6,2,6,3,2,5,4,3,5,3,1,6,2,3,6,4,4,2,5,3,3,3,2,5,4,6,3,2,6,3,5,5,5,5,1,6,1,4,2,6,6,6,3,5,5,1,5,5,1,1,5,2,1,2,4,6,2,4,4,5,5,2,2,1,6,6,6,2,4,4,2,1,5,4,5,4,2,6,1,3,6,2,6,1,4,1,2,2,1,2,1,4,4,1,4,3,6,3,5,3,3,3,6,4,1,4,2,5,6,1,5,3,5,2,4,1,2,4,3,2,4,4,5,5,5,1,2,5,5,3,3,4,1,5,5,3,1,1,2,3,3,6,5,1,4,3,4,4,1,5,3,3,5,3,2,6,4,6,3,1,2,4,1,2,3,2,4,5,4,3,4,6,4,2,5,5,5,3,3,6,6,5,2,6,3,1,3,5,1,1,2,5,3,5,4,6,3,5,1,2,4,3,3,3,5,1,2,1,3,4,3,3,1,6,5,2,1,5,4,6,3,3,3,4,1,5,1,4,2,1,6,4,3,6,6,2,1,1,5,2,2,1,6,5,1,6,3,3,2,4,2,1,6,1,1,3,4,3,3,1,4,1,3,3,1,3,6,5,6,5,4,3,6,6,1,1,5,3,1,1,4,3,5,3,1,4,6,2,4,4,5,2,6,1,2,4,3,6,4,2,6,6,4,3,1,6,5,1,1,6,6,3,4,5,6,1,5,5,4,3,1,1,6,6,4,5,5,6,5,1,4,4,1,3,1,3,1,6,3,2,3,3,6,1,1,4,5,2,1,3,5,1,4,6,4,2,5,4,4,3,5,3,3,2,6,5,6,1,1,4,5,4,3,6,5,3,2,4,6,6,2,2,5,3,5,5,2,6,1,4,2,2,3,3,4,5,6,3,6,5,5,6,4,3,1,6,3,6,3,6,5,1,3,4,2,2,1,6,6,6,1,1,4,5,4,6,3,3,3,4,1,5,1,4,2,6,2,4,6,3,2,3,3,6,1,3,2,3,3,3,2,5,5,2,6,2,4,4,4,6,1,4,6,1,5,4,4,2,6,5,2,2,3,6,6,3,6,1,4,2,3,1,6,2,6,5,2,2,4,1,2,4,2,2,2,3,5,1,1,6,5,2,1,3,2,4,1,2,3,6,4,6,1,2,3,2,3,5,2,4,6,4,2,2,4,6,3,1,4,1,1,4,3,5,1,5,6,3,3,1,4,1,1,2,5,1,6,4,1,6,2,1,4,6,1,4,5,5,1,6,3,2,4,1,4,3,2,4,5,4,3,6,4,5,4,5,5,6,1,3,2,5,3,1,2,3,3,2,1,1,1,6,5,5,1,4,3,2,5,1,6,1,3,2,3,3,1,4,4,1,1,5,6,6,4,2,1,4,1,1,4,5,4,5,2,3,5,4,6,1,4,4,3,4,6,2,6,1,6,6,1,4,6,2,6,3,6,2,2,3,2,6,2,1,5,2,2,5,1,4,6,6,1,2,5,5,1,2,1,6,3,3,2,5,2,6,5,1,5,3,3,5,5,3,3,5,5,2,2,1,6,5,5,5,3,4,5,3,4,3,5,4,1,1,5,3,6,3,1,3,4,5,2,1,4,1,2,3,6,4,1,5,3,2,3,6,4,4,4,6,4,3,5,4,1,2,2,4,5,3,6,4,1,2,1,4,5,1,3,1,3,6,2,3,4,1,4,3,5,4,1,2,1,1,6,3,4,4,6,1,6,3,1,4,2,3,3,5,5,3,2,6,2,6,6,4,1,1,3,5,1,1,5,6,1,4,1,1,2,4,3,3,5,3,6,3,4,3,2,6,6,2,1,4,2,3,5,1,1,5,5,4,3,4,5,1,2,4,5,6,5,6,6,6,4,5,6,1,2,6,1,6,5,3,2,1,6,6,3,6,6,4,2,5,6,1,5,6,2,5,5,2,4,5,3,3,4,6,5,1,4,3,5,1,5,6,6,2,2,3,1,3,4,2,6,1,4,1,1,6,2,6,2,3,5,5,4,4,5,1,5,1,6,2,4,6,5,6,5,6,1,5,2,2,5,4,1,2,1,3,5,4,6,2,2,5,4,4,1,4,3,6,4,2,6,2,1,5,5,3,2,1,3,1,3,6,6,5,5,3,3,5,4,2,6,4,5,4,5,3,3,4,6,2,1,1,3,1,1,5,5,1,3,6,1,2,6,3,4,2,5,3,6,1,6,5,2,5,6,1,5,6,1,3,4,4,2,2,2,3,1,1,6,2,4,5,3,4,5,5,4,5,1,4,4,2,2,5,3,1,4,5,6,6,4,1,6,2,4,6,2,2,6,3,4,5,4,4,4,2,2,1,6,6,1,6,5,6,4,2,5,4,3,1,6,4,4,6,6,2,2,3,4,1,4,5,4,4,4,5,5,2,4,4,6,6,3,2,6,1,5,5,2,4,5,4,2,5,3,6,2,5,4,6,4,2,5,1,3,5,5,3,6,2,4,6,3,1,4,1,5,4,5,5,3,6,1,4,3,5,4,6,2,1,4,3,3,5,3,5,6,2,5,4,6,6,4,2,6,2,6,5,6,2,3,5,3,5,4,4,2,2,2,4,1,1,4,6,2,2,5,3,5,5,5,3,3,3,6,1,5,5,2,1,5,4,2,4,1,2,4,1,4,4,4,1,1,3,6,1,5,3,5,3,6,1,6,6,4,1,4,2,6,3,3,4,6,5,4,3,6,1,6,4,2,5,3,6,5,3,5,1,4,6,5,5,1,6,2,2,3,2,6,4,4,2,5,1,4,5,2,5,6,5,6,5,2,5,4,5,6,6,4,4,4,4,4,2,1,5,1,4,4,1,1,2,1,3,1,6,6,4,6,3,3,1,6,6,6,3,4,2,5,1,4,4,3,5,2,1,6,2,3,4,6,4,1,3,3,3,1,2,4,4,5,3,4,5,6,2,4,4,6,2,3,1,1,6,3,4,1,4,5,6,6,1,4,6,4,2,3,5,5,2,5,3,6,4,2,5,3,4,5,2,6,6,2,2,2,1,3,5,2,2,5,4,3,2,4,1,5,2,4,4,4,5,5,1,6,1,6,6,6,3,5,2,6,3,5,2,3,6,4,3,4,1,6,6,2,3,6,5,2,4,2,6,5,2,5,4,4,5,5,3,6,1,3,4,6,4,6,1,3,5,6,6,4,4,3,2,3,3,1,5,6,3,3,3,2,2,2,4,2,3,5,2,1,6,6,4,6,1,6,5,6,1,4,2,4,1,6,1,2,4,5,3,3,6,2,2,3,4,3,5,6,6,1,1,4,6,5,1,5,1,1,4,4,2,2,3,3,1,4,6,6,2,5,5,3,3,1,3,2,6,1,2,4,3,4,6,1,6,2,2,4,4,2,5,2,1,6,4,3,3,4,4,5,4,6,4,4,6,6,5,3,5,1,5,3,5,1,6,1,2,6,6,6,4,5,1,1,6,6,3,6,6,4,2,2,1,4,2,3,6,1,4,1,5,4,2,2,5,6,2,4,5,3,5,4,1,3,4,1,1,2,5,3,3,4,4,1,4,5,5,3,6,4,6,5,4,1,5,5,1,3,3,6,6,2,3,3,6,1,2,3,6,1,2,6,4,6,4,4,2,3,6,3,1,5,6,2,6,6,6,2,2,4,5,5,1,5,6,3,5,4,4,6,5,6,4,2,6,6,3,2,2,5,5,2,2,2,4,1,4,5,1,5,5,2,2,6,1,1,1,4,4,3,5,6,1,6,6,3,4,6,6,5,1,1,6,4,5,3,4,4,2,3,2,5,6,6,3,6,2,4,3,5,4,1,4,4,1,6,5,3,6,5,3,5,3,3,6,2,3,4,1,2,3,2,5,1,1,5,4,6,2,1,1,3,6,6,4,1,6,1,6,2,4,6,4,6,6,1,1,1,6,6,6,1,5,3,2,1,3,2,4,2,5,6,3,5,1,1,3,1,5,4,3,3,2,6,6,4,5,6,5,6,1,2,6,3,4,6,2,4,6,2,5,5,4,6,2,4,3,1,6,3,4,2,1,5,5,1,3,5,6,4,5,5,5,6,2,6,3,4,1,2,5,6,2,5,6,4,5,2,6,2,1,6,5,3,3,6,2,2,5,4,1,5,5,4,5,3,4,2,6,6,3,3,3,1,2,1,3,3,4,2,4,3,3,2,1,6,1,4,3,5,4,2,1,1,6,3,5,1,3,3,2,5,4,2,6,5,3,6,4,1,2,5,5,5,4,3,5,1,6,1,1,3,5,3,6,1,4,3,3,5,3,3,3,1,4,2,3,2,6,6,3,4,3,2,1,3,3,3,5,1,2,5,1,1,6,2,4,3,5,6,5,4,2,4,1,2,1,3,1,6,5,6,2,1,4,2,6,1,3,4,4,6,6,3,4,3,5,6,4,1,1,6,4,3,3,4,4,1,5,3,5,4,4,5,2,3,6,2,2,3,6,6,1,1,3,4,5,1,5,4,3,3,4,4,1,6,5,4,6,1,1,4,5,6,6,2,5,4,6,2,1,1,5,1,1,2,6,1,3,5,4,4,4,5,6,4,6,1,6,5,2,2,1,1,5,3,6,4,6,4,4,5,1,3,1,5,2,3,3,5,4,4,4,5,1,2,2,6,1,2,3,6,5,2,6,2,1,2,4,6,2,6,2,3,5,1,4,4,3,1,4,2,4,5,5,3,2,6,3,3,6,5,3,5,3,2,3,4,1,6,6,5,5,2,6,4,1,1,6,3,6,2,1,3,3,3,3,5,6,5,2,6,5,2,4,5,1,2,4,4,1,3,1,3,6,2,4,2,3,1,2,3,6,5,2,2,1,3,3,5,5,6,2,5,6,4,2,5,3,1,3,2,2,6,4,3,3,2,5,6,4,5,5,2,2,4,4,4,2,5,6,4,6,4,6,6,6,2,6,3,2,6,4,4,5,6,4,1,6,6,1,6,5,5,3,5,6,3,3,6,6,6,5,1,4,6,3,2,1,1,1,5,3,4,1,5,5,1,3,6,6,4,2,4,5,4,3,3,4,5,2,5,2,1,2,5,4,2,5,1,4,2,3,4,5,4,1,6,6,5,1,3,4,4,3,2,3,3,5,5,5,6,4,3,5,4,3,1,5,3,3,2,6,1,1,4,4,4,2,3,2,5,5,1,6,2,5,3,1,2,2,6,6,1,5,5,6,1,2,6,3,6,3,6,1,2,5,3,1,5,3,5,5,2,5,1,6,3,4,3,3,4,5,1,4,6,3,5,6,6,3,2,1,6,5,5,1,5,1,5,2,1,5,4,4,1,5,3,6,1,4,5,6,2,6,4,5,2,1,1,3,4,6,2,3,3,4,6,6,6,5,4,4,4,4,5,6,6,6,3,1,4,4,1,6,1,2,6,6,3,2,1,6,6,3,6,6,2,3,5,1,4,6,2,2,6,2,2,1,3,3,1,2,2,4,4,1,2,6,4,3,3,5,2,2,2,4,2,6,1,2,6,6,1,4,4,1,1,4,4,6,4,1,6,2,6,2,1,3,6,1,5,2,5,5,2,4,6,4,2,6,2,2,4,6,3,5,3,1,1,2,1,5,2,2,4,1,5,2,6,1,1,1,3,1,2,2,4,3,6,2,6,2,3,1,5,3,1,4,1,6,2,3,2,2,4,5,1,5,6,4,1,2,2,3,2,4,3,4,4,1,2,3,6,3,4,4,2,1,1,2,3,5,3,4,4,4,3,2,1,5,1,1,1,1,2,1,2,4,4,3,2,1,2,3,4,6,6,6,6,1,5,3,6,4,4,2,1,2,3,6,1,4,6,2,3,5,2,2,3,3,6,6,1,4,4,6,4,1,2,2,3,1,4,4,2,5,1,1,3,4,4,4,3,4,3,6,2,5,2,2,4,4,3,3,2,6,2,3,5,4,5,3,1,5,4,3,6,3,2,5,2,6,6,5,6,6,4,2,5,1,3,1,3,1,2,6,5,2,4,2,4,1,4,5,5,1,4,5,2,6,3,4,2,4,1,3,3,6,5,3,1,3,5,3,4,2,1,1,6,4,4,5,1,4,6,5,2,2,4,4,5,5,6,4,6,3,2,6,2,1,3,4,4,1,3,1,6,1,6,4,3,2,5,5,1,5,1,2,5,2,3,5,3,2,5,5,3,2,3,4,1,6,4,2,5,3,5,5,2,6,5,3,6,5,1,3,4,2,3,6,4,3,1,6,2,1,6,2,1,1,4,1,2,5,6,4,3,6,4,4,6,5,1,4,5,4,2,4,2,1,5,2,1,2,1,2,1,2,2,4,4,2,1,3,3,5,4,5,3,3,2,6,4,6,5,4,3,5,4,2,5,3,5,6,2,3,4,3,5,2,6,6,3,2,4,3,6,4,5,4,6,2,5,2,5,5,3,3,3,2,1,5,4,1,2,1,2,5,5,6,6,2,4,5,5,2,5,1,4,5,1,2,1,4,6,2,1,6,6,4,5,3,1,1,4,2,6,1,2,1,1,6,1,5,2,4,5,4,5,4,5,2,3,5,1,3,3,5,6,1,3,5,2,6,6,1,6,1,3,5,3,1,2,5,1,6,3,6,4,3,5,4,3,5,5,4,6,4,1,1,1,4,1,5,6,6,4,2,3,5,5,3,5,1,4,6,6,1,4,2,1,2,5,6,2,6,2,6,2,2,5,3,6,2,5,2,6,1,6,3,4,3,4,5,2,1,4,2,1,2,6,1,5,3,5,2,2,2,2,5,4,4,5,2,5,5,5,5,6,2,4,1,3,3,3,5,2,1,2,3,2,6,6,6,4,5,2,6,6,5,4,3,3,2,1,1,4,4,4,1,6,1,5,6,6,3,6,6,1,2,1,2,4,3,1,1,6,3,3,6,5,6,1,6,6,3,5,5,3,4,3,3,5,3,1,1,4,1,5,4,4,1,6,2,6,4,6,1,6,4,1,3,1,5,6,5,4,1,5,3,2,2,5,5,3,1,1,6,5,2,6,4,2,4,1,1,1,4,4,3,1,5,4,1,3,3,3,5,4,5,6,4,6,4,6,3,6,4,1,4,5,1,6,2,6,4,1,4,1,4,2,4,6,1,4,2,1,3,3,3,1,6,4,3,5,4,3,6,6,5,1,2,1,6,1,1,1,4,4,6,4,1,6,2,3,6,5,3,1,3,1,4,1,5,1,5,1,5,6,1,4,3,3,3,5,4,3,1,6,3,2,4,2,3,4,6,1,4,2,3,6,5,5,1,5,2,6,1,6,2,5,4,2,5,3,1,4,1,2,6,2,2,2,5,4,4,4,6,1,4,2,1,5,1,1,5,1,3,2,3,1,5,1,3,3,6,4,6,6,2,2,6,2,6,5,6,2,4,3,6,2,1,4,6,1,6,2,4,1,4,1,1,6,5,3,5,1,6,2,1,5,4,3,4,6,1,5,3,1,4,2,5,3,1,3,4,3,1,6,2,1,6,6,3,1,4,1,3,6,3,1,4,1,5,4,4,2,3,1,5,1,2,5,4,3,4,5,1,4,1,5,5,5,4,2,4,3,1,4,4,3,6,1,4,4,5,3,2,3,5,3,2,2,1,4,3,4,4,6,2,4,4,5,5,2,4,3,6,3,2,1,6,5,6,4,3,1,6,2,2,1,5,6,1,4,6,5,5,5,1,5,6,1,1,5,2,4,1,6,2,6,1,5,1,6,4,1,2,2,5,4,2,6,5,4,3,2,4,3,3,1,2,3,3,4,2,1,6,5,6,6,5,6,4,6,3,6,2,5,1,3,1,4,5,1,1,1,5,3,2,5,5,2,3,5,5,1,3,6,3,6,3,1,1,4,1,6,4,3,5,4,4,5,3,3,3,2,3,1,4,3,4,3,2,2,4,6,4,6,4,5,5,6,6,5,1,6,6,5,4,6,6,5,2,6,5,1,4,4,6,2,5,6,3,4,4,6,3,3,1,3,1,1,6,3,3,2,5,5,3,5,4,3,4,1,5,3,5,5,3,6,2,3,2,2,5,2,5,1,2,2,1,4,6,4,3,6,5,3,2,2,5,2,3,1,3,3,6,1,2,3,2,4,2,6,3,1,6,2,3,3,1,6,5,6,4,6,1,6,3,4,5,6,6,2,5,2,1,3,5,1,2,5,6,2,3,1,1,4,3,5,4,1,6,1,2,4,5,6,5,2,3,5,4,5,4,2,3,5,3,4,1,4,2,4,2,1,1,5,5,3,3,3,4,5,6,5,6,1,1,3,3,3,1,5,4,6,6,4,3,1,4,3,2,5,5,4,4,1,3,6,6,3,4,3,3,3,6,6,3,6,5,5,6,1,2,1,5,3,6,4,5,3,6,6,4,6,2,2,4,4,1,6,6,4,1,1,5,6,4,5,3,1,2,1,4,3,5,2,6,2,1,3,2,2,1,3,4,5,5,5,4,4,4,4,4,6,4,6,4,4,4,2,6,6,2,3,4,6,2,5,6,6,5,5,5,6,6,4,6,1,2,1,6,4,4,4,4,6,3,5,6,5,6,5,5,5,5,6,3,3,4,6,2,5,1,2,3,3,5,2,6,3,4,2,1,5,6,4,5,6,5,1,3,3,2,6,5,2,3,3,1,6,6,5,6,5,6,1,6,2,2,4,3,1,1,2,4,5,1,4,3,5,6,1,1,4,6,6,4,4,6,4,5,5,5,6,5,1,5,4,4,4,4,5,1,1,4,4,5,2,1,4,2,3,4,4,3,2,1,4,5,1,5,5,2,2,4,2,2,3,2,3,6,6,6,1,1,6,1,1,1,1,4,6,3,4,5,1,2,6,6,1,4,4,4,2,1,3,4,6,5,3,4,1,4,4,6,5,1,2,6,5,2,2,1,5,5,6,2,3,4,1,3,5,4,1,2,1,2,1,6,6,6,6,6,1,2,1,1,6,6,4,3,2,3,6,6,2,1,3,5,2,1,4,3,6,5,4,6,1,3,6,5,6,6,6,6,1,1,4,2,3,5,6,6,4,2,2,6,4,4,5,6,6,5,4,5,2,4,4,5,6,1,1,6,6,6,1,1,1,2,1,4,6,4,3,5,3,3,3,3,5,1,4,6,3,2,2,4,6,4,2,5,2,6,1,1,3,5,6,2,1,3,1,2,4,2,4,2,3,6,1,3,1,2,4,2,4,5,2,6,1,6,4,4,3,5,3,3,3,5,2,6,1,1,4,4,4,4,2,4,2,4,6,5,5,1,6,4,2,5,2,5,5,5,5,3,6,1,4,4,4,6,6,1,6,3,4,5,4,4,2,2,6,2,4,5,5,2,4,4,3,5,5,1,6,1,1,5,6,2,1,3,6,5,6,1,5,5,6,1,5,6,6,2,4,5,3,2,1,2,3,3,5,5,2,5,2,4,6,1,2,6,4,5,5,3,3,5,4,6,2,4,4,3,4,4,6,1,2,3,4,3,4,1,2,5,4,1,2,6,1,5,6,6,1,6,1,4,3,3,3,2,5,3,6,4,4,1,4,4,4,1,1,1,3,6,5,6,2,5,2,5,1,5,6,5,1,1,1,3,1,4,1,4,3,3,5,3,5,6,6,6,6,1,5,4,5,3,4,2,3,6,4,1,1,6,5,5,4,1,5,6,4,4,4,2,5,4,4,5,5,5,5,5,6,6,4,1,1,2,3,1,4,5,6,1,4,3,3,3,2,1,1,2,6,3,3,3,5,4,6,4,2,3,2,4,6,1,5,6,2,5,1,4,2,5,3,5,2,4,6,6,2,6,5,6,3,3,6,2,1,5,4,4,2,1,2,1,2,3,2,2,1,6,2,1,5,4,6,4,4,4,4,2,6,6,2,2,1,6,6,2,3,3,6,6,5,1,3,3,5,1,4,3,5,6,6,6,4,1,3,1,1,6,4,5,5,2,2,1,1,4,5,5,2,2,4,5,1,5,5,2,3,5,2,4,5,5,1,6,3,6,5,3,4,2,4,3,3,3,1,2,4,1,2,1,5,5,1,3,4,5,6,5,1,2,3,4,1,6,6,1,6,3,3,2,2,4,6,6,6,4,2,1,5,5,3,1,3,3,4,4,2,1,5,5,5,5,3,2,2,5,5,3,6,5,4,4,1,2,1,6,3,6,6,2,3,2,5,4,1,6,3,2,5,5,1,2,1,5,5,3,1,3,3,5,6,1,4,5,5,5,3,3,1,3,4,4,5,1,1,5,3,6,6,6,5,1,3,4,2,5,5,5,3,5,1,5,4,6,3,2,6,1,1,5,4,4,2,3,3,2,1,3,1,1,2,5,3,1,6,6,4,3,1,2,4,3,5,4,2,3,4,2,4,6,6,1,6,6,1,5,6,3,2,6,2,5,2,5,3,6,1,4,3,3,2,4,1,1,3,6,1,3,1,4,5,3,4,3,5,1,3,2,1,2,6,4,2,5,3,6,1,6,6,1,5,6,6,5,1,5,5,5,4,6,4,6,6,4,4,6,3,3,1,2,5,2,2,2,5,2,2,3,2,5,6,3,3,6,5,3,5,4,6,1,1,2,6,5,1,4,4,5,3,6,6,2,2,5,3,3,4,4,3,4,1,5,2,3,2,3,3,2,4,3,6,1,1,3,3,2,6,2,2,6,2,4,6,3,5,6,6,4,2,5,4,6,6,4,2,2,1,6,2,6,6,6,1,4,1,2,4,3,5,5,4,2,6,2,4,6,5,4,2,6,6,5,2,4,1,4,4,4,4,5,1,3,1,5,2,6,2,4,3,2,5,3,4,5,6,4,4,3,1,5,4,6,2,3,5,4,5,5,4,5,2,4,3,3,4,2,6,2,5,6,6,2,3,3,1,5,4,1,5,4,1,3,5,2,6,1,4,2,3,4,1,5,6,3,1,5,6,4,2,1,3,3,6,6,1,5,2,4,6,6,6,4,6,2,4,5,1,5,1,1,4,3,4,3,6,3,1,3,5,3,3,5,6,5,2,5,1,6,4,3,1,3,3,2,2,6,2,3,3,2,5,6,4,4,5,4,1,2,5,2,1,1,5,6,5,1,6,2,2,6,3,3,2,6,4,6,4,4,4,6,5,2,5,3,4,4,5,1,3,5,4,3,3,4,2,3,2,4,1,1,6,4,1,6,5,3,4,3,3,4,6,6,6,2,5,6,1,1,5,2,1,1,5,1,3,2,6,3,6,2,2,6,5,3,3,3,2,3,3,1,5,3,4,1,3,3,5,1,4,4,5,4,6,2,4,1,5,6,2,6,4,5,6,3,1,1,2,4,6,5,3,6,6,4,4,4,5,2,3,4,4,1,3,4,3,6,6,2,1,1,6,3,4,3,4,6,5,4,2,3,1,6,2,4,3,2,4,1,1,6,2,1,5,3,5,1,1,2,3,4,6,6,4,6,5,3,3,3,2,2,3,3,2,6,6,4,3,2,5,4,5,4,5,5,6,2,1,1,6,3,5,4,6,1,5,6,6,1,5,1,6,3,1,3,2,1,3,1,6,5,2,4,2,1,4,5,2,1,4,5,3,5,4,2,2,2,6,6,1,2,3,6,2,5,1,3,1,1,5,1,3,4,5,1,4,6,1,6,1,2,3,4,3,4,6,2,6,5,3,1,4,6,4,2,3,1,1,2,6,4,2,4,4,5,1,3,3,2,1,3,3,3,2,2,4,6,3,2,1,5,6,5,3,2,1,4,1,4,3,6,4,5,6,5,6,1,1,1,2,4,6,1,4,1,3,1,3,1,5,3,4,3,5,4,3,5,3,6,6,2,2,2,3,2,6,6,1,5,4,1,5,4,5,6,3,1,6,4,4,4,1,3,5,1,2,4,6,6,4,3,2,5,1,6,6,1,6,6,3,1,5,6,6,5,4,3,3,5,6,3,6,3,2,3,2,2,5,3,2,5,4,3,5,5,2,2,4,4,1,1,1,5,4,5,6,4,2,2,2,5,5,5,3,1,3,1,5,2,1,5,4,4,4,4,1,2,2,6,1,6,4,1,2,4,4,6,5,4,2,4,5,2,4,1,1,6,2,5,4,3,1,3,1,2,1,3,2,2,6,2,6,3,6,5,4,3,2,6,5,1,5,3,2,3,4,3,1,6,1,5,5,1,6,6,1,5,3,3,4,6,1,3,1,5,3,3,6,3,2,5,6,5,1,4,3,5,5,2,6,5,1,5,4,6,4,2,5,6,5,4,3,5,2,6,2,5,4,6,3,4,4,5,3,5,3,4,1,2,1,2,1,4,3,3,2,1,5,1,1,1,1,1,1,1,3,1,3,6,3,1,6,4,1,3,4,2,4,3,1,5,6,5,1,2,5,6,5,5,5,1,6,6,1,1,1,6,1,2,5,1,5,4,2,3,2,4,6,3,4,6,3,2,5,2,3,1,2,5,4,5,6,4,2,1,2,2,5,5,4,1,5,6,6,2,4,6,1,6,5,6,4,5,6,6,2,3,2,3,3,5,2,3,3,5,1,3,3,5,2,4,4,5,6,4,4,3,1,1,1,4,5,2,5,3,2,4,2,4,3,3,6,5,2,6,3,6,2,5,3,2,2,2,5,4,1,2,3,6,1,3,4,1,3,6,3,4,4,6,1,2,1,4,5,2,2,2,1,4,3,1,3,4,6,1,5,6]
let trueRand = []

async function getRand() {
    let response = await random.generateIntegers({ min: 1, max: 6, n: 10000 })
    let data = response.random.data
    return data
}

function twoD() {
    let die1 = Math.floor(Math.random() * 6) + 1
    let die2 = Math.floor(Math.random() * 6) + 1;
    let result = die1 + die2
    return result
}

function randTwoD() {
    let die1 = trueRand.shift()
    let die2 = trueRand.shift()
    let result = die1 + die2
    return result
}

function rollStat(rand = false) {
    let stat
    if (rand == true) {
        stat = randTwoD().toString(16).toUpperCase()
        //console.log("true random")
    } else {
        stat = twoD().toString(16).toUpperCase()
        //console.log("pseudorandom")
    }
    return stat
}

function rollTraveller(rand = false) {
    let stat = ''
    for (let index = 1; index <= 6; index++) {
        stat += rollStat(rand)      
    }
    return stat
}

function generate(num, rand = false) {
    let population = []
    for (let i = 0; i <= num; i++) {
        population.push(rollTraveller(rand))        
    }
    return population
}

/*
getRand().then(result => {
    trueRand = result
})
*/

let result = generate(2073600)
console.log(Array.isArray(result))

fs.writeFile('travellers.json', JSON.stringify(result, null, 4), (err) => {
    if (err) return console.log(err)
    console.log('worked')
})

let imageData = [
    [ 0xFF0000FF, 0xFF0000FF, 0xFF0000FF ],
    [ 0xFF0000FF, 0x00FF00FF, 0xFF0000FF ],
    [ 0xFF0000FF, 0xFF0000FF, 0x0000FFFF ]
  ]

let image = new Jimp(1920, 1080, function (err, image) {
    if (err) throw err;

    var newArr = [];
    while(result.length) newArr.push(result.splice(0,1920));
  
    newArr.forEach((row, y) => {
      row.forEach((color, x) => {
        image.setPixelColor(Jimp.cssColorToHex(color), x, y);
      });
    });
  
    image.write('test.png', (err) => {
      if (err) throw err;
    });
  });

