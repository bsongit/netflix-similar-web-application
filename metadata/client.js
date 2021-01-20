var Client = require('bittorrent-tracker')
var requiredOpts = {
  infoHash: new Buffer.from('08ada5a7a6183aae1e09d831df6748d566095a10'), // hex string or Buffer
  peerId: new Buffer.from('08ada5a7a6183aae1e09d831df6748d566095a10'), // hex string or Buffer
  announce: [], // list of tracker server urls
  port: 6881 // torrent client port, (in browser, optional)
}

var client = new Client(requiredOpts)

client.on('error', function (err) {
  console.log(err.message)
})

client.on('warning', function (err) {
  console.log(err.message)
})

client.on('update', function (data) {
  console.log('got an announce response from tracker: ' + data.announce)
  console.log('number of seeders in the swarm: ' + data.complete)
  console.log('number of leechers in the swarm: ' + data.incomplete)
})

client.once('peer', function (addr) {
  console.log('found a peer: ' + addr) // 85.10.239.191:48623
})

client.start({
  uploaded: 0,
  downloaded: 0,
  left: 0,
  customParam: 'blah' // custom parameters supported
})

// announce that download has completed (and you are now a seeder)
client.complete()

// force a tracker announce. will trigger more 'update' events and maybe more 'peer' events
client.update()

// provide parameters to the tracker
client.update({
  uploaded: 0,
  downloaded: 0,
  left: 0,
  customParam: 'blah' // custom parameters supported
})

// console.log(client)